# Deployment Instructions for wynajemmrozni.pl Landing Page

## Files Summary

You have two main files ready for deployment:

1. **`index.html`** - Complete static HTML landing page with Polish content
2. **`styles.css`** - Mobile-first responsive CSS with performance optimizations

## Quick Customization Guide

### Change Phone Number
In `index.html`, find line 171-172 (in the footer section):
```html
<!-- Podmień numer telefonu tutaj -->
<a href="tel:+48600000000" class="contact-link">+48 600 000 000</a>
```
Replace `+48600000000` with your actual phone number in both the `href` and display text.

### Add Real Images
Replace the placeholder image paths with actual images:
1. `/images/og.jpg` - Open Graph social sharing image (1200x630px recommended)
2. `/images/logo.jpg` - Company logo for structured data  
3. `/images/mroznie-flota.jpg` - Fleet images
4. `/images/mroznie-wnetrze.jpg` - Interior view
5. `/images/mroznie-termometr.jpg` - Temperature monitor image

**Important:** After deployment, update these to absolute URLs:
- Change `og:image` from `/images/og.jpg` to `https://wynajemmrozni.pl/images/og.jpg`
- Consider adding Twitter-specific meta tags for better social sharing:
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Wynajem mroźni samochodowych – Śląsk, Katowice, Gliwice | Iglo-Bus Rent">
<meta name="twitter:description" content="Wynajem mroźni samochodowych Toyota ProAce do –20°C. Śląsk (Katowice, Gliwice, Zabrze) i cała Polska.">
<meta name="twitter:image" content="https://wynajemmrozni.pl/images/og.jpg">
```

## Hosting Options

### Option 1: Replit (Easiest)

1. **Create new Replit project:**
   - Go to https://replit.com
   - Click "Create" → "Static Site"
   - Name: `wynajemmrozni-landing`

2. **Upload files:**
   - Delete default files in the project
   - Upload your `index.html` and `styles.css`
   - Add a `favicon.ico` file if you have one

3. **Publish:**
   - Click "Deploy" or "Publish" button
   - Your site will be available at `your-project-name.replit.app`

### Option 2: Netlify (Recommended for Production)

1. **Create account:** Go to https://netlify.com and sign up
2. **Deploy:**
   - Drag and drop your folder containing `index.html` and `styles.css`
   - Or connect to GitHub repository
   - Site will be available at a random subdomain like `amazing-name-123456.netlify.app`

3. **Custom domain setup:**
   - In Site Settings → Domain Management
   - Add custom domain: `wynajemmrozni.pl`
   - Follow DNS configuration instructions below

### Option 3: Vercel

1. **Create account:** Go to https://vercel.com
2. **Deploy:**
   - Import project or drag and drop files
   - No configuration needed for static sites
3. **Custom domain:**
   - Go to Project Settings → Domains
   - Add `wynajemmrozni.pl`

### Option 4: Traditional Web Hosting

Upload files via FTP/cPanel to any web hosting provider:
- `index.html` should be in the root directory
- `styles.css` in the same directory
- Ensure web server serves `index.html` by default

## DNS Configuration for wynajemmrozni.pl

### Step 1: Get Your Site URL
After deploying to any platform above, you'll get a URL like:
- Netlify: `https://your-site-name.netlify.app`
- Vercel: `https://your-project-name.vercel.app`
- Replit: `https://your-project-name.replit.app`

### Step 2: Configure DNS

Contact your domain registrar (where you bought wynajemmrozni.pl) and add these DNS records:

#### For Netlify:
**First, add your domain in Netlify:** Site Settings → Domain Management → Add custom domain

DNS Records:
```
Type: CNAME
Name: www
Value: your-site-name.netlify.app

Type: A
Name: @
Value: 75.2.60.5

Type: A  
Name: @
Value: 99.83.190.102
```

*Alternative (preferred if your DNS provider supports it):*
```
Type: ALIAS (or ANAME)
Name: @
Value: your-site-name.netlify.app
```

**Configure primary domain:** In Netlify, set primary domain (www or apex) and enable redirect.

#### For Vercel:
**First, add domain in Vercel:** Project Settings → Domains → Add wynajemmrozni.pl

DNS Records:
```
Type: CNAME
Name: www  
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.21.21
```

**Set primary domain:** In Vercel, choose whether www or apex is primary and enable automatic redirects.

#### For Replit:
**In Replit:**
1. Go to Deployments tab
2. Create deployment if not done
3. Click "Add custom domain"  
4. Enter "wynajemmrozni.pl"
5. Replit will show exact DNS records needed

**Typical Replit DNS (verify with platform):**
```
Type: CNAME
Name: www
Value: your-project-name.replit.app

Type: A
Name: @
Value: [Use exact IP provided by Replit]
```

### Step 3: Verify DNS Configuration
**Important:** DNS changes can take 24-48 hours to propagate globally.

1. **Check DNS propagation:** https://dnschecker.org/
2. **Wait for full propagation** before finalizing platform settings
3. **Test both www and apex** domains work correctly

### Step 4: SSL Certificate
- Netlify/Vercel: Automatic HTTPS (Let's Encrypt) 
- Other providers: Check their SSL certificate options

### Step 5: Configure Domain Redirects
Ensure consistent SEO by setting up redirects:
- **Netlify:** Site Settings → Domain Management → Set primary domain
- **Vercel:** Project Settings → Domains → Set redirect between www/apex
- **Replit:** Platform may not provide automatic redirects. Choose one primary host (www or apex) and use your DNS provider's redirect/forwarding service to redirect the other. Alternatively, test if Replit automatically handles redirects once both domains are configured.
- Choose either www.wynajemmrozni.pl OR wynajemmrozni.pl as primary

**Testing:** Verify both www.wynajemmrozni.pl and wynajemmrozni.pl work and redirect properly to your chosen primary domain.

## Google Search Console Setup

1. **Add Property (Choose one method):**

   **Method A - URL Prefix (Recommended for beginners):**
   - Go to https://search.google.com/search-console/
   - Click "Add Property" → "URL prefix" 
   - Enter: `https://wynajemmrozni.pl/`
   - Use HTML tag verification method
   - Add the verification meta tag to the `<head>` section of `index.html`

   **Method B - Domain Property (Advanced):**
   - Choose "Domain" instead
   - Enter: `wynajemmrozni.pl`
   - Use DNS TXT record verification
   - Add the provided TXT record to your domain's DNS

2. **Verify Ownership:**
   - Follow the verification method you selected above
   - Wait for verification to complete

3. **Submit Sitemap (Optional):**
   Create a simple `sitemap.xml`:
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://wynajemmrozni.pl/</loc>
       <changefreq>monthly</changefreq>
       <priority>1.0</priority>
     </url>
   </urlset>
   ```

4. **Monitor Performance:**
   - Check indexing status
   - Review search performance
   - Monitor for crawl errors

## Performance Optimization Checklist

### Pre-deployment:
- ✅ HTML minified (optional - files are already optimized)
- ✅ CSS optimized with system fonts
- ✅ No JavaScript dependencies
- ✅ Images will need optimization when added

### Post-deployment:
1. **Test Lighthouse scores:**
   - Open Chrome DevTools
   - Go to Lighthouse tab  
   - Run audit on your live site
   - Aim for >90 in all categories

2. **Enable compression (hosting provider setting):**
   - Gzip/Brotli compression for HTML/CSS
   - Cache headers for static assets

3. **Add real images and optimize them:**
   - Use WebP format when possible
   - Compress images (TinyPNG, ImageOptim)
   - Add proper alt attributes

## Maintenance

### Regular Updates:
- Monitor Google Search Console for issues
- Update content seasonally if needed
- Keep contact information current
- Review analytics monthly

### Content Updates:
To update any content, simply edit `index.html` and redeploy:
- Phone number: Line ~171
- Email: Line ~176  
- SEO content: Footer paragraph (~163)
- Service areas: Lines 84-95 (locations list)

## Testing Checklist

Before going live, test:
- [ ] Mobile responsiveness (375px, 768px, 1200px)
- [ ] All links go to https://www.iglo-bus.rent/
- [ ] Phone number clickable on mobile
- [ ] Email link opens email client
- [ ] Page loads in under 3 seconds
- [ ] All images display correctly
- [ ] SEO meta tags appear in page source

## Support

If you encounter issues:
1. Check browser developer console for errors
2. Validate HTML: https://validator.w3.org/
3. Test mobile: Chrome DevTools mobile emulation
4. Check DNS propagation: https://dnschecker.org/

Your landing page is now ready for deployment with excellent SEO and performance optimization!