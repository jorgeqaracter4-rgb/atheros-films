# Use the official Node.js 18 Alpine image for smaller size
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat curl
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies with optimizations
RUN npm install --only=production --no-audit --no-fund

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY package.json package-lock.json* ./

# Install all dependencies (including dev) for build
RUN npm install --no-audit --no-fund

# Copy source code
COPY . .

# Disable telemetry and set production environment
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# Build with optimizations
RUN npm run build

# Production image with minimal footprint
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy public assets
COPY --from=builder /app/public ./public

# Create .next directory with proper permissions
RUN mkdir .next
RUN chown nextjs:nodejs .next

    # Copy built application
    COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
    COPY --from=builder --chown=nextjs:nodejs /app/public ./public
    COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
    COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000 || exit 1

# Start the application
CMD ["node", "server.js"]
