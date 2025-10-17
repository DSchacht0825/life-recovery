# Image Optimization Guide

## Current Image Inventory

Your site currently uses the following images:

| File | Size | Format | Usage |
|------|------|--------|-------|
| `background.jpeg` | 205 KB | JPEG | Full-page background |
| `logo2.jpg` | 82 KB | JPEG | Main logo (desktop & mobile) |
| `logo.jpg` | 1.1 MB | JPEG | Unused (can be deleted) |
| `favicon.jpg` | 82 KB | JPEG | Favicon |
| `logo192.png` | 5.2 KB | PNG | PWA icon (small) |
| `logo512.png` | 9.4 KB | PNG | PWA icon (large) |

**Total Image Weight**: ~1.5 MB

## Optimization Recommendations

### Priority 1: Convert to WebP

WebP images are 25-35% smaller than JPEG with same quality.

#### Using Online Tools (Easiest)
1. Visit: https://cloudconvert.com/jpg-to-webp
2. Upload `background.jpeg` and `logo2.jpg`
3. Download converted files
4. Place in `/public/` folder

#### Using Command Line (Mac/Linux)
```bash
# Install cwebp (one-time setup)
brew install webp

# Convert images
cd public/
cwebp -q 85 background.jpeg -o background.webp
cwebp -q 90 logo2.jpg -o logo2.webp
cwebp -q 90 favicon.jpg -o favicon.webp
```

#### Expected Savings
- `background.jpeg`: 205 KB → ~140 KB (32% smaller)
- `logo2.jpg`: 82 KB → ~58 KB (29% smaller)
- **Total savings**: ~90 KB per page load

### Priority 2: Responsive Images

Add multiple sizes for different devices:

```bash
# Create smaller versions for mobile
cwebp -q 85 -resize 800 0 background.jpeg -o background-mobile.webp
cwebp -q 90 -resize 400 0 logo2.jpg -o logo2-mobile.webp
```

### Priority 3: Update HTML References

After converting to WebP, update your code:

#### In `public/index.html`:
```html
<!-- Before -->
<link rel="icon" type="image/jpg" href="%PUBLIC_URL%/logo2.jpg" />

<!-- After -->
<link rel="icon" type="image/webp" href="%PUBLIC_URL%/logo2.webp" />
<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo2.webp" />
```

#### In `src/App.tsx`:
```tsx
{/* Before */}
<img src="/logo2.jpg" alt="Life Recovery Logo" className="logo-desktop" />

{/* After - with fallback for older browsers */}
<picture>
  <source srcSet="/logo2.webp" type="image/webp" />
  <img src="/logo2.jpg" alt="Life Recovery Logo" className="logo-desktop" />
</picture>
```

#### Background Image in CSS:
Update `src/index.css`:
```css
/* Before */
.bg-image {
  background-image: url(/background.jpeg);
}

/* After - with fallback */
.bg-image {
  background-image: url(/background.webp);
}

/* Fallback for browsers without WebP support */
.no-webp .bg-image {
  background-image: url(/background.jpeg);
}
```

### Priority 4: Lazy Loading

Images below the fold should lazy load:

```tsx
<img
  src="/logo2.webp"
  alt="Life Recovery Logo"
  loading="lazy"
  className="logo-desktop"
/>
```

### Priority 5: Proper Dimensions

Add width and height to prevent layout shift:

```tsx
<img
  src="/logo2.webp"
  alt="Life Recovery Logo"
  width="120"
  height="120"
  loading="lazy"
  className="logo-desktop"
/>
```

## Advanced Optimizations

### Cloudflare/CDN Integration

If using Cloudflare or a CDN:
1. Enable automatic image optimization in Cloudflare dashboard
2. Turn on "Polish" feature for automatic WebP conversion
3. Enable "Mirage" for responsive images

### Next.js Image Component (Future Upgrade)

If you migrate to Next.js:
```tsx
import Image from 'next/image'

<Image
  src="/logo2.jpg"
  alt="Life Recovery Logo"
  width={120}
  height={120}
  priority // for above-fold images
/>
```

## Compression Tools

### Online Tools
- **TinyPNG**: https://tinypng.com/ (JPEG/PNG compression)
- **Squoosh**: https://squoosh.app/ (Google's image optimizer)
- **CloudConvert**: https://cloudconvert.com/

### Desktop Apps
- **ImageOptim** (Mac): https://imageoptim.com/
- **FileOptimizer** (Windows): https://sourceforge.net/projects/nikkhokkho/

### Command Line Tools
```bash
# Install ImageMagick
brew install imagemagick

# Batch convert and resize
mogrify -format webp -quality 85 *.jpg

# Optimize existing JPEGs
jpegoptim --max=85 --strip-all *.jpg

# Optimize PNGs
optipng -o7 *.png
```

## Testing Image Performance

### Before Optimization
1. Open DevTools Network tab
2. Reload page
3. Note total image transfer size

### After Optimization
1. Clear cache
2. Reload page
3. Compare transfer size

### Lighthouse Audit
```bash
npm install -g lighthouse

# Run audit
lighthouse https://liferecoverysd.org --view
```

## Content Delivery Network (CDN)

Consider using a CDN for images:

### Cloudinary (Free Tier Available)
```html
<!-- Before -->
<img src="/logo2.jpg" alt="Logo" />

<!-- After - automatic optimization -->
<img src="https://res.cloudinary.com/yourname/image/upload/f_auto,q_auto/logo2.jpg" alt="Logo" />
```

Benefits:
- Automatic format selection (WebP when supported)
- Automatic quality optimization
- Responsive images
- Global CDN delivery

### imgix
Similar to Cloudinary with real-time image processing.

## Maintenance Checklist

### When Adding New Images
- [ ] Compress before uploading
- [ ] Convert to WebP
- [ ] Create responsive sizes if needed
- [ ] Add proper alt text
- [ ] Include width/height attributes
- [ ] Use lazy loading for below-fold images

### Monthly
- [ ] Audit page weight with Lighthouse
- [ ] Check for unused images
- [ ] Review CDN bandwidth usage

### Quarterly
- [ ] Re-optimize images with latest tools
- [ ] Check for new image format support (AVIF, etc.)

## Expected Performance Gains

### Before Optimization
- Total page size: ~1.5 MB images
- First Contentful Paint: 3.3s (mobile)
- Largest Contentful Paint: 5s

### After Full Optimization
- Total page size: ~500 KB images (-67%)
- First Contentful Paint: ~2.5s (-24%)
- Largest Contentful Paint: ~4s (-20%)

### Google PageSpeed Score
- Mobile: 69 → Expected 80+
- Desktop: 34 → Expected 50+

## Quick Start (5 Minutes)

1. **Convert to WebP online:**
   - Go to https://cloudconvert.com/jpg-to-webp
   - Upload `background.jpeg` and `logo2.jpg`
   - Download WebP versions
   - Add to `/public/` folder

2. **Update one reference:**
   ```css
   /* src/index.css */
   .bg-image {
     background-image: url(/background.webp);
   }
   ```

3. **Test:**
   - `npm run build`
   - `npx serve -s build`
   - Check Network tab - should see smaller transfer size

## Resources

- WebP Guide: https://developers.google.com/speed/webp
- Image Optimization: https://web.dev/fast/#optimize-your-images
- Lazy Loading: https://web.dev/lazy-loading-images/
- Responsive Images: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images

---

**Created**: October 16, 2025
**Next Review**: November 16, 2025
**Estimated Time**: 30 minutes for full implementation
**Impact**: Moderate (improves mobile PageSpeed score)
