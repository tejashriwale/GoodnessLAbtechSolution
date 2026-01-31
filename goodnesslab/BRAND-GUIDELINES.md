# Goodness Labtech - Brand Guidelines

## Brand Overview
**Company Name:** Goodness Labtech Solutions LLP
**Tagline:** Material Testing Laboratory
**Industry:** Material Testing & Laboratory Services

---

## Brand Colors

### Primary Color - Orange
- **Hex:** `#ff9900`
- **RGB:** `rgb(255, 153, 0)`
- **Usage:** Logo text, primary buttons, accents, call-to-action elements
- **Represents:** Energy, innovation, precision, and reliability

### Secondary Color - Burgundy/Dark Red
- **Hex:** `#993333`
- **RGB:** `rgb(153, 51, 51)`
- **Usage:** Backgrounds, header sections, footer, secondary elements
- **Represents:** Professionalism, stability, trust, and expertise

### Accent Colors
- **Gold:** `#fdb913` - For certifications and awards
- **Green:** `#059669` - For success messages and positive indicators

### Color Palette in Code

#### Tailwind CSS Classes
```css
/* Primary (Orange) */
primary-50   -> #fff5e6
primary-400  -> #ff9900  (Brand Orange)
primary-500  -> #ff9900  (Brand Orange)
primary-600  -> #cc7a00

/* Secondary (Burgundy) */
secondary-400 -> #993333 (Brand Burgundy)
secondary-500 -> #993333 (Brand Burgundy)
secondary-600 -> #7a2929
```

#### CSS Variables
```css
--color-primary-500: #ff9900;     /* Brand Orange */
--color-secondary-500: #993333;   /* Brand Burgundy */
--color-accent-orange: #ff9900;
--color-accent-burgundy: #993333;
--color-accent-gold: #fdb913;
```

---

## Typography

### Primary Font - Futura Md BT
- **Usage:** Body text, content, descriptions
- **Weights Available:** Medium (500)
- **Fallback:** system-ui, sans-serif
- **CSS Class:** `font-sans`
- **CSS Variable:** `var(--font-futura)`

### Display Font - Bebas Neue
- **Usage:** Headlines, hero sections, major titles, logo "LABTECH"
- **Weight:** Regular (400)
- **Character:** Bold, condensed, impactful
- **CSS Class:** `font-heading` or `font-display`
- **CSS Variable:** `var(--font-bebas-neue)`

### Font Pairing Guidelines
```tsx
// Headings (H1-H6)
<h1 className="font-heading">Major Title</h1>

// Body text
<p className="font-sans">Regular content text</p>

// Logo style text
<div className="font-display text-primary-500">GOODNESS LABTECH</div>
```

---

## Logo Usage

### Logo Composition
- **GOODNESS:** Text in Bebas Neue, Orange (#ff9900)
- **LABTECH:** Text in Bebas Neue, Orange (#ff9900)
- **Infinity Symbol:** Integrated between "O" letters in orange
- **Background:** Burgundy (#993333) for primary version

### Logo Variations
1. **Primary Logo:** Orange text on burgundy background
2. **Reverse Logo:** Orange text on white/light background
3. **Monochrome:** Single color version for special applications

### Clear Space
Maintain minimum clear space around the logo equal to the height of the letter "O" in "GOODNESS"

### Minimum Size
- **Digital:** 150px width minimum
- **Print:** 1.5 inches width minimum

---

## Design Elements

### Backgrounds
- **Primary:** Burgundy (#993333) for hero sections
- **Secondary:** White/Light neutral for content areas
- **Accent:** Orange (#ff9900) for highlights and CTAs

### Buttons
```tsx
// Primary Button (Orange)
<button className="btn-primary">
  Get Quote
</button>

// Secondary Button (Burgundy outline)
<button className="btn-secondary">
  Learn More
</button>
```

### Gradients
```css
/* Brand gradient (Orange to Burgundy) */
.bg-gradient-brand {
  background: linear-gradient(to bottom right, #ff9900, #993333);
}

/* Text gradient */
.text-gradient {
  background: linear-gradient(to right, #ff9900, #993333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## Brand Voice & Messaging

### Key Messages
- Fast turnaround time - within 24 hours
- NABL accredited laboratory
- Highest degree of accuracy & reliability
- Customer satisfaction focused
- One-point solutions for all testing needs
- Affordable cost without compromising quality

### Tone of Voice
- **Professional:** Expert and knowledgeable
- **Reliable:** Trustworthy and consistent
- **Approachable:** Clear and helpful
- **Technical:** Precise and accurate

---

## Application Examples

### Header/Navigation
- Background: White or Burgundy
- Text: Orange for active links
- Logo: Full color version

### Hero Section
- Background: Burgundy (#993333)
- Headline: Bebas Neue, Large, Orange or White
- Body: Futura Md BT, White or Light
- CTA Button: Orange (#ff9900)

### Service Cards
- Background: White
- Title: Bebas Neue, Burgundy or Orange
- Body: Futura Md BT, Neutral gray
- Border/Accent: Orange

### Footer
- Background: Burgundy (#993333)
- Text: White or Light gray
- Links: Orange (#ff9900) on hover

---

## Contact Information

**Address:**
Second Floor, Swara Enterprise Building
Block- J/536/3, MIDC Bhosari
Pimpri Chinchwad, Pune-411039
Maharashtra, India

**Phone:** +91-7058300308
**Email:** info@goodnesslab.in
**Website:** www.goodnesslab.in

---

## Implementation Notes

### Font Files
Futura Md BT is a commercial font. Ensure you have proper licensing before use.
- Font files should be placed in: `public/fonts/`
- Supported formats: `.woff2` (preferred), `.woff`, `.ttf`

### Bebas Neue
Available via Google Fonts (free to use).
Already configured in the project.

### Fallback Strategy
If brand fonts fail to load, the design gracefully falls back to system fonts while maintaining readability and brand feel.

---

*Last Updated: January 2026*
