# Icons Reference Guide

## 📚 Overview
This document lists all Lucide React icons used in the portfolio, organized by component.

## 🎨 Icon Philosophy
- **Simple & Minimal**: Clean, professional icons
- **Consistent Size**: Appropriate sizing for context
- **Semantic**: Icons match their purpose
- **Accessible**: Clear meaning and purpose

---

## 📍 Icons by Component

### Header Component
**File:** `src/components/Header.tsx`

| Icon | Usage | Size | Purpose |
|------|-------|------|---------|
| `Menu` | Mobile menu button | 24px | Open navigation |
| `X` | Mobile menu close | 24px | Close navigation |
| `Sun` | Theme toggle | 18px | Light mode |
| `Moon` | Theme toggle | 18px | Dark mode |
| `Github` | Social link | 18px | GitHub profile |
| `Linkedin` | Social link | 18px | LinkedIn profile |
| `Mail` | Social link | 18px | Email contact |

---

### Hero Component
**File:** `src/components/Hero.tsx`

| Icon | Usage | Size | Purpose |
|------|-------|------|---------|
| `ChevronDown` | Scroll indicator | 20px | Scroll to next section |
| `MapPin` | Location info | 16px | Location display |
| `Phone` | Contact info | 16px | Phone number |
| `Mail` | Contact info | 16px | Email address |
| `Globe` | Website info | 16px | Website/channel |
| `ArrowRight` | CTA buttons | 18px | Action indicator |

---

### Services Component
**File:** `src/components/Services.tsx`

| Icon | Usage | Size | Purpose |
|------|-------|------|---------|
| `Code` | Frontend Development | 28px | Programming service |
| `Smartphone` | Responsive Design | 28px | Mobile development |
| `Layout` | UI/UX Implementation | 28px | Design service |
| `Globe` | Web Applications | 28px | Web development |
| `Zap` | Performance Optimization | 28px | Speed/performance |
| `Users` | Team Collaboration | 28px | Teamwork |

---

### About Component
**File:** `src/components/About.tsx`

| Icon | Usage | Size | Purpose |
|------|-------|------|---------|
| `Calendar` | Years of experience | 24px | Time/duration |
| `Code` | Projects completed | 24px | Development work |
| `Award` | Technologies mastered | 24px | Achievement |
| `Users` | Client satisfaction | 24px | People/clients |
| `GraduationCap` | Education | 24px | Academic degree |
| `MapPin` | Location | 14px | Geographic location |
| `Briefcase` | Current role | 24px | Work/employment |
| `CheckCircle` | Achievements | 16px | Completed items |

---

### Skills Component
**File:** `src/components/Skills.tsx`

| Icon | Usage | Size | Purpose |
|------|-------|------|---------|
| `Code` | Programming Languages | 20px | Coding skills |
| `Globe` | Frontend Frameworks | 20px | Web frameworks |
| `Layout` | Styling & Design | 20px | UI/UX skills |
| `Zap` | Development Tools | 20px | Tools/utilities |
| `Database` | Libraries & APIs | 20px | Data/integration |
| `Users` | Best Practices | 20px | Team/methodology |

---

### Projects Component
**File:** `src/components/Projects.tsx`

| Icon | Usage | Size | Purpose |
|------|-------|------|---------|
| `Heart` | MindMed project | 22px | Mental health |
| `Play` | Bak Watch project | 22px | Streaming/video |
| `FileText` | Bak Blog project | 22px | Content/writing |
| `Building` | Bak Technology project | 22px | Corporate/business |
| `ExternalLink` | Live demo link | 14px | External link |
| `Github` | LinkedIn link | 14px | Social profile |
| `Calendar` | Project year | 14px | Date/time |

---

### Contact Component
**File:** `src/components/Contact.tsx`

| Icon | Usage | Size | Purpose |
|------|-------|------|---------|
| `Mail` | Email contact | 20px | Email communication |
| `Phone` | Phone contact | 20px | Phone communication |
| `MapPin` | Location | 20px | Geographic location |
| `Send` | Submit button | 18px | Send message |
| `Github` | Social link | 18px | GitHub profile |
| `Linkedin` | Social link | 18px | LinkedIn profile |
| `Globe` | Website link | 18px | Website/portfolio |
| `CheckCircle` | Success state | 20px | Confirmation |

---

### Experience Component
**File:** `src/components/Experience.tsx`

| Icon | Usage | Size | Purpose |
|------|-------|------|---------|
| `Calendar` | Date range | 16px | Time period |
| `MapPin` | Location | 16px | Work location |
| `Briefcase` | Timeline node | 16px | Work experience |
| `CheckCircle` | Achievements | 16px | Completed tasks |

---

## 📏 Size Guidelines

### Standard Sizes
- **Extra Small**: 14px - Secondary info, badges
- **Small**: 16px - List items, inline icons
- **Medium**: 18-20px - Buttons, links
- **Large**: 22-24px - Section headers, cards
- **Extra Large**: 28px - Service icons, features

### Usage Context
```tsx
// Small - Inline with text
<Calendar size={14} />

// Medium - Buttons
<ArrowRight size={18} />

// Large - Cards
<Code size={24} />

// Extra Large - Features
<Globe size={28} />
```

---

## 🎨 Color Patterns

### Gradient Colors
```css
from-blue-500 to-cyan-500      /* Tech/Code */
from-purple-500 to-pink-500    /* Design/Creative */
from-green-500 to-emerald-500  /* Success/Growth */
from-orange-500 to-red-500     /* Performance/Speed */
from-indigo-500 to-purple-500  /* Data/Integration */
from-pink-500 to-rose-500      /* People/Team */
```

### Icon Container Styling
```tsx
<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
  <Code size={20} className="text-white" />
</div>
```

---

## ♿ Accessibility

### Best Practices
1. **Always use aria-label** for icon-only buttons
2. **Provide context** for screen readers
3. **Maintain color contrast** (WCAG AA)
4. **Use semantic HTML** with icons

### Example
```tsx
<button
  aria-label="Toggle theme"
  className="p-2 rounded-lg"
>
  <Sun size={18} />
</button>
```

---

## 📦 Import Pattern

### Single Import
```tsx
import { Code, Globe, Layout } from "lucide-react";
```

### Component Usage
```tsx
<Code size={24} className="text-white" />
```

---

## 🔄 Icon Replacement Guide

If you need to replace an icon:

1. **Find the icon** in [Lucide Icons](https://lucide.dev)
2. **Import it** in the component
3. **Replace the old icon** with the new one
4. **Adjust size** if needed
5. **Test accessibility**

### Example
```tsx
// Before
import { Code2 } from "lucide-react";
<Code2 size={24} />

// After
import { Code } from "lucide-react";
<Code size={24} />
```

---

## 📝 Notes

- All icons are from **Lucide React** library
- Icons are **tree-shakeable** (only imported icons are bundled)
- Icons are **SVG-based** for perfect scaling
- Icons support **all CSS properties**
- Icons are **accessible** by default

---

**Last Updated:** 2025
**Icon Library:** [Lucide React](https://lucide.dev)
**Version:** Latest

