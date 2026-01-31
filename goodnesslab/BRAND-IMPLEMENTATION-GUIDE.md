# Brand Implementation Quick Start Guide

## Common Component Patterns

### Hero Section
```tsx
<section className="bg-secondary-500 text-white section-padding">
  <div className="container-custom">
    <h1 className="font-display text-5xl md:text-7xl text-primary-500 mb-6">
      GOODNESS LABTECH
    </h1>
    <p className="font-sans text-xl mb-8">
      Material Testing Laboratory
    </p>
    <button className="btn-primary">
      Get Started
    </button>
  </div>
</section>
```

### Service Card
```tsx
<div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-glow transition-all">
  <h3 className="font-heading text-2xl text-secondary-500 mb-4">
    MECHANICAL TESTING
  </h3>
  <p className="font-sans text-neutral-700 mb-6">
    Comprehensive range of mechanical testing services
  </p>
  <a href="/services/mechanical" className="text-primary-500 font-medium hover:underline">
    Learn More →
  </a>
</div>
```

### Call-to-Action Banner
```tsx
<section className="bg-gradient-brand text-white section-padding">
  <div className="container-custom text-center">
    <h2 className="font-display text-4xl mb-6">
      FAST TURNAROUND TIME
    </h2>
    <p className="font-sans text-xl mb-8">
      Report within 24 hours - Fast Delivery
    </p>
    <button className="bg-white text-secondary-500 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all">
      Contact Us Today
    </button>
  </div>
</section>
```

### Header/Navigation
```tsx
<header className="bg-white shadow-md">
  <nav className="container-custom py-4">
    <div className="flex items-center justify-between">
      {/* Logo */}
      <div className="font-display text-3xl text-primary-500">
        GOODNESS <span className="text-secondary-500">LABTECH</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <a href="/" className="text-neutral-700 hover:text-primary-500 transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="/services" className="text-neutral-700 hover:text-primary-500 transition-colors">
            Services
          </a>
        </li>
        <li>
          <a href="/contact" className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  </nav>
</header>
```

### Footer
```tsx
<footer className="bg-secondary-500 text-white section-padding">
  <div className="container-custom">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      {/* Company Info */}
      <div>
        <h3 className="font-display text-2xl text-primary-500 mb-4">
          GOODNESS LABTECH
        </h3>
        <p className="font-sans text-neutral-200">
          NABL Accredited Material Testing Laboratory
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-heading text-xl mb-4">QUICK LINKS</h4>
        <ul className="space-y-2 font-sans">
          <li><a href="/about" className="hover:text-primary-500 transition-colors">About Us</a></li>
          <li><a href="/services" className="hover:text-primary-500 transition-colors">Services</a></li>
          <li><a href="/contact" className="hover:text-primary-500 transition-colors">Contact</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="font-heading text-xl mb-4">CONTACT</h4>
        <p className="font-sans text-neutral-200">
          <strong className="text-primary-500">Phone:</strong> +91-7058300308<br/>
          <strong className="text-primary-500">Email:</strong> info@goodnesslab.in
        </p>
      </div>
    </div>

    <div className="border-t border-secondary-400 pt-6 text-center font-sans text-neutral-300">
      © 2026 Goodness Labtech Solutions LLP. All rights reserved.
    </div>
  </div>
</footer>
```

### Feature Highlight Box
```tsx
<div className="border-l-4 border-primary-500 bg-primary-50 p-6">
  <h4 className="font-heading text-xl text-secondary-500 mb-2">
    24 HOURS FAST DELIVERY
  </h4>
  <p className="font-sans text-neutral-700">
    We ensure quick turnaround time for most standard tests
  </p>
</div>
```

### Statistics/Metrics Display
```tsx
<div className="text-center">
  <div className="font-display text-6xl text-primary-500 mb-2">
    24
  </div>
  <p className="font-sans text-xl text-neutral-700">
    Hours Turnaround Time
  </p>
</div>
```

### Testimonial Card
```tsx
<div className="bg-white rounded-lg shadow-lg p-8">
  <div className="text-primary-500 text-5xl mb-4">"</div>
  <p className="font-sans text-neutral-700 text-lg mb-6">
    Excellent service and fast delivery. The accuracy of results is impressive.
  </p>
  <div className="flex items-center">
    <div className="w-12 h-12 bg-secondary-500 rounded-full mr-4"></div>
    <div>
      <p className="font-heading text-lg text-secondary-500">CLIENT NAME</p>
      <p className="font-sans text-neutral-500">Company Name</p>
    </div>
  </div>
</div>
```

### Accreditation Badge
```tsx
<div className="inline-flex items-center bg-accent-gold text-white px-6 py-3 rounded-full shadow-lg">
  <span className="font-display text-2xl mr-2">✓</span>
  <div className="text-left">
    <p className="font-heading text-sm">NABL ACCREDITED</p>
    <p className="font-sans text-xs">ISO 17025:2017</p>
  </div>
</div>
```

### Service List Item
```tsx
<li className="flex items-start space-x-3">
  <span className="text-primary-500 text-2xl">✓</span>
  <div>
    <h5 className="font-heading text-lg text-secondary-500">
      MECHANICAL TESTING
    </h5>
    <p className="font-sans text-neutral-600">
      Comprehensive testing services for metallic materials
    </p>
  </div>
</li>
```

### Info Banner
```tsx
<div className="bg-primary-500 text-white py-3">
  <div className="container-custom text-center">
    <p className="font-sans">
      <strong className="font-heading">SPECIAL OFFER:</strong> Door Step Sample Pickup Facility Available
    </p>
  </div>
</div>
```

### Section Title
```tsx
<div className="text-center mb-12">
  <h2 className="font-display text-5xl text-gradient mb-4">
    OUR SERVICES
  </h2>
  <p className="font-sans text-xl text-neutral-600">
    Comprehensive Material Testing Solutions
  </p>
</div>
```

---

## Brand Color Usage Guidelines

### When to Use Orange (#ff9900)
- Primary call-to-action buttons
- Active navigation items
- Links and interactive elements
- Logo text "GOODNESS" and "LABTECH"
- Icons and accents
- Highlights and emphasis

### When to Use Burgundy (#993333)
- Hero section backgrounds
- Footer backgrounds
- Section headers
- Alternative buttons (outline/secondary)
- Text headings (alternative to orange)
- Dividers and borders

### When to Use White/Light
- Main content backgrounds
- Card backgrounds
- Text on dark backgrounds
- Clean, spacious sections

---

## Typography Usage Guidelines

### Bebas Neue (font-heading / font-display)
**Use for:**
- Main page headlines (H1)
- Section titles (H2)
- Logo text
- Major callouts
- Statistics/numbers
- Feature titles
- Navigation (optional)

**Characteristics:**
- All caps looks best
- Large sizes (24px+)
- High impact, attention-grabbing
- Use sparingly for maximum effect

### Futura Md BT (font-sans)
**Use for:**
- Body text and paragraphs
- Descriptions
- Form labels
- Buttons (button text)
- Lists
- Secondary headings (H3-H6)
- All general content

**Characteristics:**
- Clean and readable
- Professional appearance
- Works well at all sizes
- Good for long-form content

---

## Practical Examples

### Logo Implementation
```tsx
// Full logo with infinity symbol concept
<div className="flex items-center space-x-2">
  <span className="font-display text-4xl text-primary-500">
    GO
  </span>
  <div className="relative">
    <span className="font-display text-4xl text-primary-500">∞</span>
  </div>
  <span className="font-display text-4xl text-primary-500">
    DNESS
  </span>
</div>
<div className="font-display text-2xl text-primary-500 tracking-wider">
  LABTECH
</div>
```

### 24-Hour Delivery Badge
```tsx
<div className="inline-flex items-center justify-center bg-secondary-500 text-white rounded-full w-32 h-32 shadow-glow-burgundy">
  <div className="text-center">
    <p className="font-display text-5xl text-primary-500">24</p>
    <p className="font-sans text-sm">HOURS</p>
  </div>
</div>
```

### Contact Button
```tsx
<a
  href="tel:+917058300308"
  className="inline-flex items-center bg-primary-500 text-white px-8 py-4 rounded-lg font-heading text-xl hover:bg-primary-600 shadow-lg hover:shadow-glow transition-all"
>
  <span className="mr-2">📞</span>
  CALL NOW
</a>
```

---

## Animation & Interactions

### Hover Effects
```tsx
// Card hover with brand shadow
<div className="bg-white rounded-lg p-6 transition-all duration-300 hover:shadow-glow hover:-translate-y-2">
  Content
</div>

// Button hover with scale
<button className="bg-primary-500 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-primary-600">
  Click Me
</button>

// Link hover with color change
<a href="#" className="text-neutral-700 hover:text-primary-500 transition-colors duration-200">
  Link Text
</a>
```

### Gradient Backgrounds
```tsx
// Brand gradient (Orange to Burgundy)
<div className="bg-gradient-brand text-white p-12">
  Content with brand gradient
</div>

// Subtle gradient for headers
<div className="bg-gradient-to-r from-secondary-500 to-secondary-700 text-white p-8">
  Header with subtle gradient
</div>
```

---

## Accessibility Notes

### Color Contrast
- Orange (#ff9900) on white: ✅ Good contrast
- White on Burgundy (#993333): ✅ Good contrast
- Orange on Burgundy: ⚠️ Use carefully, test readability

### Font Sizes
- Minimum body text: 16px (1rem)
- Minimum for accessibility: 14px (0.875rem)
- Headings should be significantly larger than body text

### Interactive Elements
Always provide:
- Clear hover states
- Focus indicators for keyboard navigation
- Sufficient click/tap target sizes (min 44x44px)

---

## File Organization

```
src/
  app/
    layout.tsx          ← Fonts configured here
  components/
    common/             ← Reusable components
    layout/             ← Header, Footer
    home/               ← Homepage sections
  styles/
    globals.css         ← Global styles & utilities
    variables.css       ← CSS variables
public/
  fonts/
    FuturaMdBT.woff2   ← Add font file here
```

---

## Quick Tips

1. **Consistency is Key**: Use the same color for the same purpose throughout the site
2. **Hierarchy Matters**: Use Bebas Neue for impact, Futura for readability
3. **White Space**: Don't overcrowd designs, let the brand colors breathe
4. **Test on Devices**: Check colors and fonts on different screens
5. **Performance**: Optimize font loading with `display: swap`

---

*For complete brand guidelines, see `BRAND-GUIDELINES.md`*
*For update details, see `BRANDING-UPDATE-SUMMARY.md`*
