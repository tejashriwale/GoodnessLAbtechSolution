# Laboratory Images Guide

## Required Images for Website

### Hero Section (`/images/hero/`)
**File needed:** `lab-background.jpg`
- **Recommended size:** 1920x1080px or higher
- **Content:** Professional laboratory scene showing:
  - Modern testing equipment (microscopes, analyzers, etc.)
  - Clean, professional laboratory environment
  - Optional: Lab technicians in professional attire
- **Reference:** Similar to images on https://elcalabs.com/
- **Format:** JPG or WebP (for better performance)

### Services Section (`/images/services/`)
Optional service-specific images:
- `mechanical-testing.jpg` - Mechanical testing equipment
- `chemical-testing.jpg` - Chemical analysis equipment
- `metallurgical-testing.jpg` - Metallography equipment
- `ndt-testing.jpg` - Non-destructive testing equipment
- `calibration.jpg` - Calibration services

### About Section (`/images/about/`)
Images for About Us page:
- `facility.jpg` - Laboratory facility (used as hero background)
- `lab-facility-1.jpg` - Testing laboratory interior
- `lab-facility-2.jpg` - Quality control area
- `lab-facility-3.jpg` - Expert team or equipment close-up
- `team.jpg` - Laboratory team photo (optional)
- `accreditations.jpg` - Certificates display (optional)

## Image Guidelines

1. **Quality:** Use high-resolution images (minimum 1920px wide for hero)
2. **Professional:** Images should convey professionalism and technical expertise
3. **Lighting:** Well-lit, clear images work best
4. **Optimization:** Compress images before adding (use tools like TinyPNG or WebP conversion)
5. **Format:**
   - JPG for photographs
   - PNG for images with transparency
   - WebP for best performance (recommended)

## Where to Get Images

1. **Your own laboratory:** Professional photography of your actual facility
2. **Stock photos:** Sites like Unsplash, Pexels (search "laboratory", "scientific testing")
3. **Professional photographer:** Hire for custom laboratory photography

## Currently Implemented

✅ Hero section background image support (`/images/hero/lab-background.jpg`)
✅ About page hero background (`/images/about/facility.jpg`)
✅ About page facility showcase (3 images: `lab-facility-1.jpg`, `lab-facility-2.jpg`, `lab-facility-3.jpg`)
⏳ Services section images (optional)

## Image Priority

### High Priority (Site looks incomplete without these):
1. `/images/hero/lab-background.jpg` - Main homepage hero background
2. `/images/about/facility.jpg` - About page hero background

### Medium Priority (Enhances visual appeal):
3. `/images/about/lab-facility-1.jpg` - Laboratory showcase
4. `/images/about/lab-facility-2.jpg` - Laboratory showcase
5. `/images/about/lab-facility-3.jpg` - Laboratory showcase

### Low Priority (Nice to have):
6. Service-specific images in `/images/services/`

## Notes

- The hero section will show a blue gradient fallback if `lab-background.jpg` is not present
- All images should maintain a professional, technical aesthetic
- Consider using multiple images and creating an image slider for the hero section (like ELCA Labs)
