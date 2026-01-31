# Content Update Guide

Quick reference for updating website content without coding knowledge.

## 📝 Common Updates

### 1. Updating Company Contact Information

**File:** `src/lib/constants.ts`

**Location:** Lines 1-35

**What you can update:**
- Phone number
- Email address
- Physical address
- WhatsApp number
- Social media links

**Example:**
```typescript
contact: {
  phone: "+91-7058300308",          // Change phone here
  email: "info@goodnesslab.in",     // Change email here
  whatsapp: "917058300308",         // Change WhatsApp here
}
```

**After updating:**
1. Save the file
2. Restart development server (Ctrl+C, then run `run-dev.bat`)
3. Changes appear automatically

---

### 2. Adding/Editing Testimonials

**File:** `src/lib/testimonials-data.ts`

**To add a new testimonial:**

```typescript
{
  id: '4',                          // Increment number
  quote: "Your testimonial text here...",
  author: "Client Name",
  position: "Their Position",
  company: "Company Name",
  rating: 5                         // 1-5 stars
}
```

**To edit existing testimonial:**
- Find the testimonial by ID
- Change the quote, author, or company name
- Save file

---

### 3. Updating Service Information

**File:** `src/lib/services-data.ts`

**Each service has:**
- `title` - Service name
- `excerpt` - Short description (1-2 lines)
- `description` - Full description
- `equipment` - List of equipment used
- `tests` - List of tests performed
- `standards` - Standards followed

**Example - Adding a new test:**

```typescript
tests: [
  {
    category: 'Tensile Tests',
    items: [
      'Existing test 1',
      'Existing test 2',
      'New test you want to add',  // Add here
    ]
  }
]
```

---

### 4. Adding New Equipment

**File:** `src/lib/equipment-data.ts`

**To add new equipment:**

```typescript
{
  id: 'unique-id-here',
  name: 'Equipment Name',
  manufacturer: 'Manufacturer Name',
  model: 'Model Number',            // Optional
  capacity: 'Capacity',             // Optional
  category: 'Equipment Category',   // Must match existing category
  features: [
    'Feature 1',
    'Feature 2',
  ],
  usedFor: [
    'Use case 1',
    'Use case 2',
  ]
}
```

---

### 5. Changing Colors/Theme

**File:** `src/styles/variables.css`

**Primary color (navy blue):**
```css
--color-primary-500: #21759b;     /* Change this hex code */
```

**Accent colors:**
```css
--color-accent-red: #d83c3c;      /* Red accent */
--color-accent-gold: #fdb913;     /* Gold accent */
```

**After changing:**
- Save file
- Hard refresh browser (Ctrl+Shift+R)

---

### 6. Updating Navigation Menu

**File:** `src/lib/constants.ts`

**Location:** `NAVIGATION_LINKS` array (around line 80)

**To add a new menu item:**

```typescript
{
  label: "New Page",
  href: "/new-page",
  submenu: [                      // Optional, for dropdown
    {
      label: "Sub Item",
      href: "/new-page/sub-item"
    }
  ]
}
```

---

### 7. Adding Images

**Steps:**

1. **Prepare image:**
   - Optimize image (compress to <200KB)
   - Recommended format: WebP or JPEG
   - Rename descriptively: `lab-equipment-utm.jpg`

2. **Upload to correct folder:**
   ```
   public/images/hero/          → Homepage hero images
   public/images/services/      → Service page images
   public/images/equipment/     → Equipment photos
   public/images/gallery/       → Gallery images
   ```

3. **Use in code:**
   ```typescript
   // In any component
   <Image
     src="/images/equipment/utm.jpg"
     alt="Universal Testing Machine"
     width={800}
     height={600}
   />
   ```

---

### 8. Updating Quality Policy Points

**File:** `src/lib/constants.ts`

**Location:** `QUALITY_POLICY_POINTS` array (around line 60)

**To add/edit points:**

```typescript
export const QUALITY_POLICY_POINTS = [
  "Point 1 - Existing",
  "Point 2 - Existing",
  "New point you want to add",    // Add here
];
```

---

### 9. Changing Homepage Hero Text

**File:** `src/components/home/HeroSection.tsx`

**Location:** Lines 20-40

**What you can change:**
- Main heading
- Tagline
- Description text
- Button text

**Example:**
```typescript
<h1>
  Goodness Lab : A Accredited Lab    {/* Change main heading */}
</h1>
<p>
  Your trusted partner                {/* Change tagline */}
</p>
```

---

### 10. Updating Footer Information

**File:** `src/components/layout/Footer.tsx`

**You can change:**
- Footer description
- Quick links
- Copyright year (updates automatically)
- Social media icons

---

## 🖼️ Image Guidelines

### Image Sizes

- **Hero images:** 1920x1080px (landscape)
- **Service cards:** 800x600px
- **Equipment photos:** 600x600px (square)
- **Gallery photos:** 1200x800px
- **Logos:** 400x400px (transparent PNG)

### Optimization

**Before uploading:**
1. Resize to recommended dimensions
2. Compress using:
   - TinyPNG.com
   - Squoosh.app
   - Photoshop "Save for Web"
3. Target file size: <200KB

---

## 📄 Adding PDF Documents

**For certificates, brochures, etc:**

1. **Upload PDF:**
   ```
   public/documents/certificates/nabl-certificate.pdf
   public/documents/brochures/company-profile.pdf
   ```

2. **Link to PDF:**
   ```typescript
   <a
     href="/documents/certificates/nabl-certificate.pdf"
     download
   >
     Download Certificate
   </a>
   ```

---

## ⚠️ Important Notes

### What NOT to Change

**Avoid editing these unless you know what you're doing:**
- File names or folder structure
- Import statements (`import ...`)
- Export statements (`export ...`)
- TypeScript interfaces
- Component structure
- Tailwind class names

### Safe to Change

**You can freely edit:**
- Text content (headings, paragraphs)
- Phone numbers, emails, addresses
- Testimonials
- Service descriptions
- Equipment lists
- Test items
- Colors in `variables.css`
- Image file paths (as long as images exist)

---

## 🔄 After Making Changes

### Development (Testing)

1. **Save the file** you edited
2. **Refresh browser** (or it auto-refreshes)
3. **Check changes** look correct
4. **Test on mobile view** (browser dev tools)

### Production (Going Live)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Check for errors** in terminal

3. **If successful, deploy:**
   ```bash
   vercel --prod
   ```

4. **Verify on live site**

---

## 🐛 Troubleshooting

### "Page won't load after my changes"

**Possible causes:**
- Syntax error (missing comma, quote, or bracket)
- File not saved
- Server needs restart

**Solutions:**
1. Check terminal for error messages
2. Undo your last change
3. Restart server (Ctrl+C, then `run-dev.bat`)

### "Image doesn't appear"

**Check:**
- File path is correct (`/images/...`)
- Image file actually exists in folder
- File extension is correct (.jpg, .png, .webp)
- No spaces in filename (use `-` instead)

### "Build fails"

**Common issues:**
- Missing comma in array/object
- Unclosed quote or bracket
- Typo in file path

**Solution:**
- Read error message carefully
- Check line number mentioned
- Undo changes to last working state

---

## 📞 Need Help?

### Before Asking for Help

1. **Check this guide** for your specific update
2. **Check error message** in terminal
3. **Try restarting** the development server
4. **Undo your changes** and try again

### Getting Support

**Include when reporting issues:**
- What you were trying to change
- What file you edited
- Error message (screenshot or copy-paste)
- What you've already tried

---

## ✅ Quick Reference

| What to Update | File Location | Line/Section |
|----------------|---------------|--------------|
| Phone/Email | `src/lib/constants.ts` | COMPANY_INFO |
| Testimonials | `src/lib/testimonials-data.ts` | testimonials array |
| Services | `src/lib/services-data.ts` | Each service object |
| Equipment | `src/lib/equipment-data.ts` | Equipment arrays |
| Navigation | `src/lib/constants.ts` | NAVIGATION_LINKS |
| Colors | `src/styles/variables.css` | CSS variables |
| Homepage Hero | `src/components/home/HeroSection.tsx` | Text content |

---

**Last Updated:** January 2026
**For:** Non-technical content editors
