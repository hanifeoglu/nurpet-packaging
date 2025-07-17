#!/bin/bash

# Nurpet Packaging Website Deployment Script

echo "🚀 Starting deployment..."

# Kill existing processes
echo "📋 Stopping existing processes..."
pkill -f "next"
pkill -f "node"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Install PM2 globally if not installed
if ! command -v pm2 &> /dev/null; then
    echo "📦 Installing PM2..."
    npm install -g pm2
fi

# Start with PM2
echo "🚀 Starting with PM2..."
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup

echo "✅ Deployment completed!"
echo "🌐 Your website should be running on port 3000"
echo "📊 Check status with: pm2 status"
echo "📝 View logs with: pm2 logs nurpet-website" 