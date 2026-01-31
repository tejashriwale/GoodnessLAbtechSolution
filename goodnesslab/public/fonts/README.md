# Font Installation Guide

## Required Brand Fonts

### 1. Futura Md BT (Commercial Font)
**Status:** ⚠️ REQUIRED - Not included (Commercial License)

**File Required:**
- `FuturaMdBT.woff2` (preferred format)
- Or `FuturaMdBT.woff`
- Or `FuturaMdBT.ttf`

**How to Install:**

1. **Purchase/Obtain License:**
   - Futura Md BT is a commercial font by Bitstream
   - Ensure you have proper licensing for web use
   - Purchase from authorized font vendors

2. **Obtain Font Files:**
   - Download the font files in `.woff2`, `.woff`, or `.ttf` format
   - Ensure you have the Medium weight (500)

3. **Place Font Files:**
   - Copy the font file(s) to this directory: `public/fonts/`
   - Rename to: `FuturaMdBT.woff2` (or appropriate extension)

4. **Verify Installation:**
   - The font is already configured in `src/app/layout.tsx`
   - Once files are in place, the font will load automatically
   - Restart the dev server if needed

**Expected File Structure:**
```
public/
  fonts/
    FuturaMdBT.woff2    <- Place your font file here
    README.md           <- This file
```

### 2. Bebas Neue (Free Font)
**Status:** ✅ CONFIGURED - Available via Google Fonts

This font is already configured and will load automatically from Google Fonts.
No additional installation required.

---

## Fallback Fonts

If Futura Md BT is not available, the design will gracefully fall back to:
- System UI fonts
- Sans-serif font family

The website will remain functional and readable, but for the best brand consistency, installing Futura Md BT is recommended.

---

## Alternative: Using a Different Sans-Serif Font

If you cannot obtain Futura Md BT, you can update the configuration to use an alternative:

### Option A: Use Google Fonts Alternative
Edit `src/app/layout.tsx` and replace Futura with a similar Google Font:

**Recommended Alternatives:**
- **Montserrat** - Modern, geometric sans-serif
- **Work Sans** - Professional, versatile
- **Inter** - Excellent for UI/body text
- **Raleway** - Elegant, geometric

Example:
```typescript
import { Bebas_Neue, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-futura",
  display: "swap",
});
```

### Option B: System Font Stack
Remove the local font import and use system fonts only:

```typescript
// In tailwind.config.ts
fontFamily: {
  sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
  heading: ["var(--font-bebas-neue)", "system-ui", "sans-serif"],
}
```

---

## Font Licensing Note

**IMPORTANT:** Ensure you have proper licensing for any commercial fonts used in this project. Unauthorized use of commercial fonts is a violation of copyright law.

For Futura Md BT:
- Required for web use
- Check license allows embedding in websites
- Maintain license documentation

---

## Need Help?

If you need assistance with font installation:
1. Check that font files are in the correct directory
2. Verify file names match the configuration
3. Clear Next.js cache: `npm run build`
4. Restart the development server

---

*Last Updated: January 2026*
