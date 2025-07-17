#!/bin/bash

# SSL Certificate Setup with Let's Encrypt

echo "🔒 Setting up SSL certificate..."

# Install Certbot if not installed
if ! command -v certbot &> /dev/null; then
    echo "📦 Installing Certbot..."
    sudo apt update
    sudo apt install -y certbot python3-certbot-nginx
fi

# Get SSL certificate
echo "🎫 Obtaining SSL certificate..."
sudo certbot --nginx -d nurpetpackaging.com -d www.nurpetpackaging.com

# Setup auto-renewal
echo "🔄 Setting up auto-renewal..."
sudo crontab -l 2>/dev/null | { cat; echo "0 12 * * * /usr/bin/certbot renew --quiet"; } | sudo crontab -

echo "✅ SSL setup completed!"
echo "🔒 Your site should now be accessible via HTTPS" 