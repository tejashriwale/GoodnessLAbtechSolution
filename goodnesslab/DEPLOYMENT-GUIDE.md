# Deployment Guide - Goodness Labtech Solutions Website

Complete guide for deploying the website to production.

## 📋 Pre-Deployment Checklist

### Content Verification
- [ ] All company information is correct
- [ ] Phone numbers and email addresses are accurate
- [ ] Service descriptions are complete
- [ ] Testimonials are approved
- [ ] Images are optimized and properly named
- [ ] NABL certificates are available (PDF format)

### Technical Checks
- [ ] Build completes without errors: `npm run build`
- [ ] All pages load correctly in development
- [ ] Forms validate properly
- [ ] Mobile responsive design works
- [ ] Browser compatibility tested (Chrome, Firefox, Safari, Edge)
- [ ] SEO metadata is complete

### Assets
- [ ] Logo files uploaded
- [ ] Hero images added
- [ ] Equipment photos uploaded
- [ ] Gallery images ready
- [ ] Favicon created (favicon.ico)

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Free)

**Why Vercel?**
- Built by Next.js creators
- Automatic deployments from Git
- Free SSL certificate
- Global CDN
- Zero configuration
- Built-in analytics

**Steps:**

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Install Vercel CLI (Optional)**
   ```bash
   npm install -g vercel
   ```

3. **Deploy via CLI**
   ```bash
   cd D:\PROJECT\GOODNESSLAB\goodnesslab
   vercel
   ```

   Follow the prompts:
   - Set up and deploy? **Y**
   - Scope: Select your account
   - Link to existing project? **N**
   - Project name: `goodnesslab`
   - Directory: `./`
   - Override settings? **N**

4. **Deploy via GitHub (Alternative)**
   - Push code to GitHub repository
   - Go to Vercel dashboard
   - Click "Import Project"
   - Select your repository
   - Configure and deploy

5. **Configure Domain**
   - In Vercel dashboard → Project → Settings → Domains
   - Add custom domain: `goodnesslab.in`
   - Add DNS records as instructed:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21

     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

6. **Environment Variables (if needed)**
   - Vercel Dashboard → Project → Settings → Environment Variables
   - Add variables from `.env.local`

**Production URL:**
- Vercel provides: `https://goodnesslab.vercel.app`
- Custom domain: `https://goodnesslab.in`

---

### Option 2: Netlify (Alternative - Free)

**Steps:**

1. **Create Account**
   - Go to https://netlify.com
   - Sign up

2. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

3. **Build Project**
   ```bash
   npm run build
   ```

4. **Deploy**
   ```bash
   netlify deploy --prod
   ```

5. **Configure Domain**
   - Netlify Dashboard → Domain Settings
   - Add custom domain
   - Configure DNS

---

### Option 3: Traditional Hosting (cPanel, etc.)

**Requirements:**
- Node.js hosting support
- SSH access

**Steps:**

1. **Build Project Locally**
   ```bash
   npm run build
   ```

2. **Upload Files via FTP/SSH**
   - Upload entire project folder
   - Include `node_modules` or run `npm install` on server

3. **Configure Server**
   - Set Node.js version to 18+
   - Configure start command: `npm start`
   - Set port (usually 3000 or 8080)

4. **Use Process Manager**
   ```bash
   # Install PM2
   npm install -g pm2

   # Start application
   pm2 start npm --name "goodnesslab" -- start

   # Auto-restart on reboot
   pm2 startup
   pm2 save
   ```

---

## 🔧 Configuration

### Domain Setup

1. **Purchase Domain**
   - Register `goodnesslab.in` from domain registrar
   - Recommended: GoDaddy, Namecheap, Google Domains

2. **Configure DNS**
   - Point to your hosting provider
   - Wait for DNS propagation (24-48 hours)

3. **SSL Certificate**
   - Vercel/Netlify: Automatic
   - Traditional hosting: Use Let's Encrypt (free)

### Email Setup (for Contact Forms)

**Option A: Gmail SMTP**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

**Option B: SendGrid (Recommended)**
- Sign up at https://sendgrid.com
- Get API key
- Use SendGrid API for email sending

**Option C: Resend (Modern)**
- Sign up at https://resend.com
- Simple API for transactional emails

### Analytics Setup

**Google Analytics:**

1. Create GA4 property at https://analytics.google.com
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `src/app/layout.tsx`:

```typescript
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Google Search Console

1. Go to https://search.google.com/search-console
2. Add property for your domain
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: `https://goodnesslab.in/sitemap.xml`

---

## 🔍 SEO Optimization

### Pre-Launch SEO Checklist

- [ ] Unique title tags for all pages
- [ ] Meta descriptions (150-160 characters)
- [ ] H1 tags on all pages
- [ ] Image alt tags
- [ ] Internal linking structure
- [ ] Sitemap.xml (auto-generated by Next.js)
- [ ] Robots.txt configured
- [ ] Schema.org markup for local business

### robots.txt

Create `public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://goodnesslab.in/sitemap.xml
```

### Local Business Schema

Already included in code, verify it's working:
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Goodness Labtech Solutions LLP",
  "address": {...},
  "telephone": "+91-7058300308"
}
```

---

## 📊 Post-Deployment Monitoring

### Performance Monitoring

**Tools:**
1. **Google PageSpeed Insights**
   - Test URL: https://pagespeed.web.dev/
   - Target: 90+ score

2. **GTmetrix**
   - Test URL: https://gtmetrix.com/
   - Monitor load times

3. **Uptime Monitoring**
   - UptimeRobot: https://uptimerobot.com/ (free)
   - Pingdom

### Analytics to Track

- Page views
- Bounce rate
- Average session duration
- Form submissions
- Most visited pages
- Traffic sources
- Device breakdown (mobile/desktop)

---

## 🔒 Security

### SSL/HTTPS
- ✅ Automatic with Vercel/Netlify
- ⚠️ Manual setup for traditional hosting

### Security Headers

Add to `next.config.ts`:
```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  }
};
```

### Regular Updates

```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Security audit
npm audit
npm audit fix
```

---

## 🐛 Troubleshooting

### Build Fails

**Error: "Cannot find module"**
- Run: `npm install`
- Delete `node_modules` and reinstall

**Error: "Out of memory"**
- Increase Node.js memory: `NODE_OPTIONS=--max_old_space_size=4096 npm run build`

### Deployment Issues

**Pages not updating after deployment**
- Clear Vercel cache: Deployments → More → Redeploy

**404 errors on page refresh**
- Vercel/Netlify: Should work automatically
- Traditional hosting: Configure URL rewriting

### Performance Issues

**Slow page loads**
- Optimize images (compress, use WebP)
- Enable CDN
- Check bundle size: `npm run build` (check output)

**Large bundle size**
- Use dynamic imports for heavy components
- Remove unused dependencies

---

## 📝 Maintenance

### Regular Tasks

**Weekly:**
- Check analytics
- Monitor form submissions
- Review error logs

**Monthly:**
- Update dependencies
- Backup website files
- Review and update content

**Quarterly:**
- SEO audit
- Performance review
- Security audit
- Content refresh

### Backup Strategy

**Vercel/Netlify:**
- Automatic via Git repository
- Keep Git repository up to date

**Traditional Hosting:**
- Weekly automated backups
- Download backups monthly
- Store in multiple locations

---

## 🎯 Go-Live Checklist

### Final Verification

- [ ] Test all pages load correctly
- [ ] Test all forms submit successfully
- [ ] Verify contact information displays correctly
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Check all links work (no 404s)
- [ ] Verify Google Maps displays correctly
- [ ] Test WhatsApp links
- [ ] Check phone number click-to-call
- [ ] Verify email links work

### Post-Launch

- [ ] Submit to Google Search Console
- [ ] Set up Google Analytics
- [ ] Create Google My Business listing
- [ ] Share on social media
- [ ] Update company materials with website URL
- [ ] Monitor for first 48 hours

---

## 📞 Support

**Technical Issues:**
- Vercel Support: https://vercel.com/support
- Next.js Docs: https://nextjs.org/docs

**Domain/DNS:**
- Contact your domain registrar support

**Hosting:**
- Contact your hosting provider

---

## ✅ Quick Deployment (Vercel)

**TL;DR - Fastest method:**

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Navigate to project
cd D:\PROJECT\GOODNESSLAB\goodnesslab

# 3. Build to verify
npm run build

# 4. Deploy
vercel --prod

# 5. Add domain in Vercel dashboard
# Done! ✅
```

---

**Last Updated:** January 2026
**Status:** Ready for Production Deployment
