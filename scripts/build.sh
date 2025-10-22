#!/bin/bash

# Build script for Atheros Films Landing Page

echo "🚀 Building Atheros Films Landing Page..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# Build the application
echo "🔨 Building application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📊 Build size:"
    du -sh .next/static
    echo "🎉 Ready for deployment!"
else
    echo "❌ Build failed!"
    exit 1
fi
