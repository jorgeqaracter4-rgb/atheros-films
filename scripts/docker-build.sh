#!/bin/bash

# Optimized Docker build script for Atheros Films
echo "🚀 Building Atheros Films with Docker optimizations..."

# Build with cache optimization
echo "📦 Building Docker image with multi-stage cache..."
docker build \
  --target=deps \
  --cache-from=atheros-films:deps \
  -t atheros-films:deps \
  .

echo "🔨 Building application with optimized cache..."
docker build \
  --target=builder \
  --cache-from=atheros-films:deps \
  --cache-from=atheros-films:builder \
  -t atheros-films:builder \
  .

echo "🏗️ Creating production image..."
docker build \
  --target=runner \
  --cache-from=atheros-films:builder \
  -t atheros-films:latest \
  .

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Docker build completed successfully!"
    echo "📊 Image size:"
    docker images atheros-films:latest --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}"
    echo "🎉 Ready for deployment!"
else
    echo "❌ Docker build failed!"
    exit 1
fi
