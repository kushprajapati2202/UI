# 🌟 Lumino Design System & Flow Documentation

## Product Overview
**Lumino** is an AI-powered Personal Asset Intelligence Platform that discovers hidden financial value and provides life-aware financial intelligence.

---

## 🎨 Brand Identity

### Color Palette

#### Primary Colors
- **Navy Blue**: `#0a2540` - Authority, trust, stability
- **Gold**: `#c9a86a` - Premium, AI features, value discovery
- **Gold Dark**: `#b8965a` - Gold hover state

#### Accent Colors
- **Blue**: `#3b82f6` - Visible assets, primary actions
- **Green**: `#10b981` - Positive metrics, income
- **Red**: `#ef4444` - Liabilities, expenses, urgent alerts
- **Purple**: `#8b5cf6` - Retirement accounts
- **Yellow**: `#f59e0b` - Warnings, employer benefits
- **Orange**: `#f97316` - Real estate

#### Neutral Colors (Light Mode)
- **Background**: `#f9fafb` to `#e5e7eb` (gradient)
- **Surface**: `#ffffff`
- **Border**: `#e5e7eb`, `#d1d5db`
- **Text Primary**: `#111827`, `#0a2540`
- **Text Secondary**: `#6b7280`
- **Text Tertiary**: `#9ca3af`

#### Neutral Colors (Dark Mode)
- **Background**: `#111827` to `#1f2937` (gradient)
- **Surface**: `#1f2937`, `#374151`
- **Border**: `#374151`, `#4b5563`
- **Text Primary**: `#f9fafb`
- **Text Secondary**: `#d1d5db`
- **Text Tertiary**: `#9ca3af`

---

## 📐 Layout & Spacing

### Container Widths
- **Max Width**: `1600px` (dashboard main container)
- **Onboarding Max Width**: `1200px`
- **Form Max Width**: `480px`

### Spacing Scale
- **Base Unit**: `4px`
- **Micro**: `8px` (gap-2)
- **Small**: `12px` (gap-3)
- **Medium**: `16px` (gap-4)
- **Large**: `24px` (gap-6)
- **XLarge**: `32px` (gap-8)

### Border Radius
- **Small**: `0.5rem` (8px) - buttons, badges
- **Medium**: `0.75rem` (12px) - cards
- **Large**: `1rem` (16px) - sections
- **XLarge**: `1.5rem` (24px) - hero sections

---

## 🔤 Typography

### Font Families
- **Primary**: System font stack (default Tailwind)
- **Fallback**: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

### Type Scale
- **Heading 1**: `text-5xl` (48px) - Hero metrics
- **Heading 2**: `text-3xl` (30px) - Page titles
- **Heading 3**: `text-2xl` (24px) - Section headers
- **Heading 4**: `text-xl` (20px) - Card titles
- **Body Large**: `text-lg` (18px) - Descriptions
- **Body**: `text-base` (16px) - Default text
- **Body Small**: `text-sm` (14px) - Labels
- **Caption**: `text-xs` (12px) - Meta info

### Font Weights
- **Regular**: `400` (default)
- **Medium**: `500` (font-medium)
- **Semibold**: `600` (font-semibold)
- **Bold**: `700` (font-bold)

---

## 🎭 Component Library

### Buttons

#### Primary Button
```tsx
<button className="px-6 py-3 bg-gradient-to-r from-[#0a2540] to-[#1a3a5a] text-white rounded-xl hover:from-[#1a3a5a] hover:to-[#2a5070] transition-all shadow-lg">
  Primary Action
</button>
```

#### Gold CTA Button
```tsx
<button className="px-6 py-3 bg-gradient-to-r from-[#c9a86a] to-[#b8965a] text-white rounded-xl hover:from-[#b8965a] hover:to-[#a88550] transition-all shadow-lg">
  Premium Action
</button>
```

#### Secondary Button
```tsx
<button className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-900 rounded-xl hover:bg-gray-50 transition-all">
  Secondary Action
</button>
```

#### Ghost Button
```tsx
<button className="px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-600 transition-all">
  Ghost Action
</button>
```

### Cards

#### Standard Card
```tsx
<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
  {/* Content */}
</div>
```

#### Hero Card (Navy Blue Gradient)
```tsx
<div className="bg-gradient-to-br from-[#0a2540] via-[#1a3a5a] to-[#0a2540] rounded-2xl p-8 text-white relative overflow-hidden shadow-xl">
  <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a86a] opacity-10 rounded-full blur-3xl"></div>
  {/* Content */}
</div>
```

#### Metric Card
```tsx
<div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200">
  <div className="w-10 h-10 rounded-lg bg-[#c9a86a]/10 flex items-center justify-center text-[#c9a86a]">
    {/* Icon */}
  </div>
  <p className="text-xs text-gray-600 mb-1">Label</p>
  <p className="text-2xl text-gray-900 mb-1">$342,450</p>
  <p className="text-xs text-green-600">+2.4%</p>
</div>
```

### Badges

#### Status Badges
```tsx
// High Priority
<span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
  High
</span>

// Medium Priority
<span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
  Medium
</span>

// Low Priority
<span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
  Low
</span>
```

### Inputs

#### Text Input
```tsx
<input 
  type="text"
  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a86a] focus:border-transparent transition-all"
  placeholder="Enter your email"
/>
```

#### Password Input
```tsx
<div className="relative">
  <input 
    type="password"
    className="w-full px-4 py-3 pr-12 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a86a] focus:border-transparent transition-all"
  />
  <button className="absolute right-4 top-1/2 -translate-y-1/2">
    {/* Eye icon */}
  </button>
</div>
```

---

## 🔄 Application Flow

### Flow Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        LUMINO USER FLOW                          │
└─────────────────────────────────────────────────────────────────┘

1. LOGIN PAGE
   ↓
   ├─→ Email/Password Login ──────────────────────→ DASHBOARD
   │   (localStorage: lumino_login_type = 'email')
   │
   └─→ Google OAuth Login ────────→ LINK ACCOUNTS ──→ DASHBOARD
       (localStorage: lumino_login_type = 'google')
                                          │
                                          ├─→ Connect Bank Account (Plaid)
                                          ├─→ Connect Credit Card (Plaid)
                                          └─→ Skip for now
```

### State Management

#### Local Storage Keys
- `lumino_jwt`: JWT token (mock for now)
- `lumino_login_type`: `'email'` | `'google'`
- `lumino_accounts_linked`: `'true'` when accounts connected

#### App States
- `'login'`: Initial state
- `'link-accounts'`: Only for Google OAuth users
- `'dashboard'`: Main application

---

## 📱 Screen Specifications

### 1. Login Page
**File**: `/components/LoginPage.tsx`

#### Layout
- **Background**: Gradient from gray-50 to gray-100
- **Container**: Centered, max-width 1200px
- **Split Layout**: 
  - Left (60%): Hero section with brand messaging
  - Right (40%): Login form

#### Components
- **Logo**: Top left
- **Hero Section**: 
  - Navy blue gradient background
  - Gold accents
  - Feature highlights with icons
- **Login Form**:
  - Email input
  - Password input with show/hide
  - "Remember me" checkbox
  - Sign in button (navy gradient)
  - Google OAuth button (white with border)
  - "Forgot password?" link
  - "Sign up" link

#### Color Usage
- Primary CTA: Navy blue gradient
- Google button: White with gray border
- Links: Gold (#c9a86a)
- Form background: White
- Inputs: Gray-50 background

---

### 2. Link Accounts Page
**File**: `/components/LinkAccounts.tsx`

#### Layout
- **Background**: Gradient from gray-50 to white
- **Container**: Centered, max-width 768px
- **Vertical flow**: Logo → Header → Cards → CTA

#### Components
- **Logo**: Centered at top
- **Header Card**:
  - Navy gradient background
  - Gold sparkles icon
  - Title and description
  - White text
- **Security Notice**: Blue gradient background
- **Account Cards**:
  - Bank Accounts (blue accent)
  - Credit Cards (purple accent)
  - Investment Accounts (green, coming soon)
- **Security Features Grid**: 3 columns
- **Continue Button**: Navy gradient (disabled if no accounts)
- **Skip Link**: Bottom, gold text

#### Color Usage
- Header: Navy gradient with gold accents
- Security notice: Blue-50 background
- Account cards: Colored backgrounds (blue, purple, green)
- Connect buttons: Navy gradient
- Connected state: Green badge

---

### 3. Plaid Connect Modal
**File**: `/components/PlaidConnect.tsx`

#### Layout
- **Overlay**: Dark backdrop (bg-black/50)
- **Modal**: Centered, max-width 600px
- **Sections**: Steps → Bank selection → Success

#### Components
- **Header**: Close button, title
- **Progress Steps**: Visual step indicator
- **Bank Selection Grid**: 3 columns
- **Success State**: Green checkmark, confirmation
- **Action Buttons**: Navy gradient

#### Color Usage
- Modal: White background
- Active step: Navy blue
- Bank cards: Hover state with shadow
- Success: Green accent

---

### 4. Dashboard
**File**: `/components/Dashboard.tsx`

#### Layout
- **Background**: Gradient from gray-50 to gray-100
- **Header**: Sticky, white background
- **Main**: Max-width 1600px, centered
- **Grid**: Responsive 1-2-3 columns

#### Sections

##### A. Header
- Logo (left)
- Navigation tabs (center)
  - Overview (active: navy background)
  - Intelligence
  - Assets
  - Decisions
  - Risk
- Actions (right)
  - Search icon
  - Notifications (gold dot)
  - Theme toggle
  - Settings
  - User avatar (gold gradient)
  - Logout

##### B. Hero Section (Navy Gradient)
- Welcome message
- Life event badge
- True net worth (large display)
- 3 metric cards (white with gold icons):
  - Total Assets
  - Liabilities
  - Invisible Assets (gold highlight)

##### C. Quick Insights Card
- White background
- 4 insight items with colored icons
- "View all" link (gold)

##### D. Net Worth Growth Chart
- White card
- Area chart (blue + gold)
- Time range selector
- Download button (gold)

##### E. Two-Column Grid
**Left - Asset Allocation**:
- Pie chart with colored segments
- Legend with values
- "Rebalance" button (gold gradient)

**Right - Priority Actions**:
- 4 action cards
- Color-coded priority (red/yellow/blue)
- Impact metrics
- "Take action" links (gold)

##### F. Intelligence Scores
- 4 circular progress cards
- Color-coded scores:
  - Liquidity Health (green)
  - Tax Efficiency (gold)
  - Risk Fragility (yellow)
  - Asset Hygiene (blue)

##### G. Cash Flow Analysis
- Bar chart (green/red/blue)
- Monthly/Quarterly toggle
- 3 summary metrics

##### H. Recent Activity
- Timeline items with icons
- Amounts with positive/negative colors
- Timestamps

#### Color Usage
- **Headers**: Navy blue (#0a2540)
- **Primary Actions**: Gold gradient
- **Charts**: 
  - Visible assets: Blue (#3b82f6)
  - Invisible assets: Gold (#c9a86a)
  - Income: Green (#10b981)
  - Expenses: Red (#ef4444)
  - Savings: Blue (#3b82f6)
- **Metrics**: Color-coded by category
- **Interactive elements**: Gold hover states

---

## 🎯 Design Principles

### 1. Clarity Over Features
- Clean, uncluttered layouts
- Clear visual hierarchy
- Ample white space
- Focused content per screen

### 2. Trust & Authority
- Navy blue for stability and trust
- Professional typography
- Consistent spacing
- Subtle shadows and borders

### 3. Premium Experience
- Gold accents for premium features
- Gradient backgrounds
- Smooth transitions
- Polished interactions

### 4. Explanation & Context
- Descriptive labels
- Help tooltips
- Clear metric descriptions
- "How it works" links

### 5. Life-Aware Intelligence
- Life event badges
- Contextual recommendations
- Time-aware information
- Personalized insights

---

## 🎨 Visual Effects

### Gradients
```css
/* Navy Gradient */
background: linear-gradient(to bottom right, #0a2540, #1a3a5a, #0a2540);

/* Gold Gradient */
background: linear-gradient(to right, #c9a86a, #b8965a);

/* Background Gradient */
background: linear-gradient(to bottom right, #f9fafb, #e5e7eb);
```

### Shadows
```css
/* Subtle Shadow */
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);

/* Medium Shadow */
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

/* Large Shadow */
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

### Blur Effects
```css
/* Decorative Blur */
backdrop-filter: blur(100px);
opacity: 0.1;
```

---

## 📊 Data Visualization

### Chart Colors
- **Primary (Visible)**: Blue #3b82f6
- **Secondary (Invisible)**: Gold #c9a86a
- **Success**: Green #10b981
- **Danger**: Red #ef4444
- **Warning**: Yellow #f59e0b
- **Info**: Purple #8b5cf6

### Chart Types
1. **Area Chart**: Net worth trajectory
2. **Pie Chart**: Asset allocation
3. **Bar Chart**: Cash flow analysis
4. **Circular Progress**: Intelligence scores

---

## ♿ Accessibility

### Standards
- WCAG 2.1 AA compliance
- Minimum contrast ratio: 4.5:1
- Keyboard navigation support
- Screen reader friendly labels

### Focus States
```css
focus:outline-none 
focus:ring-2 
focus:ring-[#c9a86a] 
focus:border-transparent
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
sm: 640px   /* Tablet portrait */
md: 768px   /* Tablet landscape */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

### Responsive Grid
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns

---

## 📱 **MOBILE VIEW SPECIFICATIONS**

### Mobile Design Philosophy
- **Mobile-First**: All components designed for mobile, enhanced for desktop
- **Touch-Friendly**: 44px minimum touch targets
- **Performance**: Optimized for slower connections
- **Simplified Navigation**: Hamburger menu with full-screen overlay

### Mobile Breakpoint Strategy
```
Mobile: < 768px
Tablet: 768px - 1023px  
Desktop: ≥ 1024px
```

---

## 📱 Mobile Screen Specifications

### 1. **Login Page (Mobile)**
**File**: `/components/LoginPage.tsx`

#### Layout Changes
- **Stacked Layout**: Form stacks vertically (no split view)
- **Full Width Form**: Form takes full screen width
- **Hidden Hero Section**: Feature showcase hidden on mobile
- **Padding**: Reduced to `px-6` (24px)

#### Mobile-Specific Elements
```tsx
// Logo sizing
<img className="w-48 mb-6" /> // Smaller on mobile

// Form container
<div className="w-full max-w-md mx-auto"> // Max width constraint

// Button sizing
<button className="w-full py-3"> // Full width buttons

// Hidden on mobile
<div className="hidden lg:flex"> // Hero section
```

#### Typography Adjustments
- Headings: Slightly smaller
- Input fields: Maintain readable size (16px minimum to prevent zoom)
- Labels: Adequate spacing for touch

---

### 2. **Link Accounts Page (Mobile)**
**File**: `/components/LinkAccounts.tsx`

#### Layout Changes
- **Single Column**: All cards stack vertically
- **Reduced Padding**: `p-6` instead of `p-8`
- **Full Width Cards**: Account cards take full width
- **Security Grid**: 3 columns → 1 column on mobile

#### Mobile Optimizations
```tsx
// Main container
<div className="p-6"> // Reduced padding

// Security features grid
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  // Stacks on mobile
</div>

// Account cards
<div className="p-4"> // Slightly less padding
```

---

### 3. **Plaid Connect Modal (Mobile)**
**File**: `/components/PlaidConnect.tsx`

#### Mobile Adaptations
- **Full Height**: `max-h-[90vh]` for scrollability
- **Responsive Padding**: `p-4` on mobile
- **Touch-Friendly**: Larger touch targets for bank selection
- **Scrollable Content**: Proper overflow handling

#### Mobile-Specific Code
```tsx
// Modal container
<div className="max-w-lg w-full max-h-[90vh] overflow-hidden">

// Bank options
<button className="p-4"> // Adequate touch target

// Search input
<input className="py-3"> // Easy to tap
```

---

### 4. **Dashboard (Mobile)**
**File**: `/components/Dashboard.tsx`

This is the most complex responsive component.

#### Header (Mobile)
```tsx
// Logo - smaller on mobile
<img className="w-24 md:w-32" />

// Hidden desktop actions
<button className="hidden md:block"> 
  <Search />
</button>

// Mobile menu button - only on mobile
<button className="lg:hidden">
  <Menu className="w-6 h-6" />
</button>
```

#### Mobile Navigation Menu
- **Hamburger Icon**: Visible < 1024px
- **Full-Screen Dropdown**: Slides down from header
- **Full-Width Buttons**: Easy to tap
- **Close on Selection**: Auto-closes after navigation

```tsx
// Mobile menu
{mobileMenuOpen && (
  <div className="lg:hidden bg-gray-50 border-t">
    <MobileNavButton /> // Full width, large touch target
  </div>
)}
```

#### Content Grid Adjustments

**Net Worth Hero**:
```
Desktop: lg:col-span-2 (2/3 width)
Mobile: Full width (1 column)
```

**Metric Cards**:
```
Desktop: grid-cols-3
Mobile: grid-cols-1 or grid-cols-2
```

**Asset Allocation & Intelligence**:
```
Desktop: lg:grid-cols-2
Mobile: grid-cols-1 (stacked)
```

**Pie Chart Display**:
```
Desktop: Side-by-side (chart + legend)
Mobile: Stack vertically
```

**Cash Flow Metrics**:
```
Desktop: grid-cols-3
Tablet: grid-cols-2
Mobile: grid-cols-1
```

#### Padding & Spacing
```tsx
// Main container
<main className="px-4 md:px-6 py-4 md:py-8">

// Card padding
<div className="p-4 md:p-6">

// Gap between grid items
<div className="gap-4 md:gap-6">
```

#### Chart Responsive Heights
```tsx
// Desktop
<ResponsiveContainer height={350} />

// Mobile - slightly shorter
<ResponsiveContainer height={250} />
```

#### Touch Targets
- **Minimum Size**: 44px × 44px
- **Buttons**: Full width on mobile when appropriate
- **Icon Buttons**: At least 40px × 40px

---

## 🎨 Mobile-Specific Components

### MobileNavButton Component
```tsx
function MobileNavButton({ active, onClick, icon, label, isDarkMode }) {
  return (
    <button className="w-full px-4 py-3 rounded-lg flex items-center gap-3 text-left">
      {icon}
      <span>{label}</span> {/* Always visible */}
    </button>
  );
}
```

### Mobile Menu Structure
```tsx
<div className="lg:hidden bg-gray-50 border-t">
  <div className="px-4 py-4 space-y-2">
    {/* Navigation Items */}
    <MobileNavButton />
    
    {/* Separator */}
    <div className="pt-4 mt-4 border-t">
      {/* Logout */}
      <button className="w-full flex items-center gap-3 px-4 py-3">
        <LogOut />
        <span>Logout</span>
      </button>
    </div>
  </div>
</div>
```

---

## 📐 Mobile Layout Patterns

### Stacking Pattern
```tsx
// Desktop: Side by side
// Mobile: Stacked
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  <Card1 />
  <Card2 />
</div>
```

### Hiding Pattern
```tsx
// Show only on desktop
<div className="hidden lg:block">Desktop Only</div>

// Show only on mobile
<div className="lg:hidden">Mobile Only</div>

// Responsive sizing
<div className="w-24 md:w-32"> //Scales up on larger screens
```

### Conditional Rendering
```tsx
// Mobile menu state
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// Toggle
<button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
  {mobileMenuOpen ? <X /> : <Menu />}
</button>
```

---

## 📱 Mobile Typography

### Font Sizes (Mobile)
- **Hero Title**: `text-4xl` (36px) instead of `text-5xl`
- **Section Headers**: `text-xl` (20px) instead of `text-2xl`
- **Body Text**: `text-sm` or `text-base` (14-16px)
- **Captions**: `text-xs` (12px)

### Line Height (Mobile)
- Slightly increased for readability on small screens
- Use `leading-relaxed` for body text

---

## 🎨 Mobile Color Adjustments

### Dark Mode on Mobile
- **Slightly Lighter**: Easier on eyes in varied lighting
- **Higher Contrast**: Better readability on smaller screens
- **Simplified Gradients**: Less complex on mobile for performance

---

## ⚡ Mobile Performance

### Optimizations
1. **Lazy Load Charts**: Load charts only when visible
2. **Smaller Images**: Serve mobile-optimized images
3. **Reduced Animations**: Simpler transitions on mobile
4. **Touch Feedback**: Visual feedback on tap

### Chart Performance (Mobile)
```tsx
// Reduced data points on mobile
const mobileData = data.slice(-3); // Show last 3 months only

// Smaller chart heights
<ResponsiveContainer height={250} /> // vs 350 on desktop
```

---

## 📱 Mobile Interaction Patterns

### Swipe Gestures
- **Time Range Selector**: Swipeable on mobile
- **Card Carousels**: Horizontal scroll

### Pull to Refresh
- Refresh dashboard data

### Bottom Sheet
- Action modals slide up from bottom on mobile

---

## ✅ Mobile Accessibility

### Touch Accessibility
- **44px Touch Targets**: iOS guideline
- **48dp Touch Targets**: Android guideline
- **Spacing**: 8px minimum between targets

### Screen Reader
- Proper ARIA labels
- Semantic HTML
- Keyboard navigation (for external keyboards)

---

## 🎯 Mobile Testing Checklist

- [ ] All touch targets ≥ 44px
- [ ] No horizontal scroll
- [ ] Readable text (≥ 14px)
- [ ] Fast load time (< 3s)
- [ ] Works offline (PWA consideration)
- [ ] Proper viewport meta tag
- [ ] Touch-friendly forms
- [ ] Hamburger menu functional
- [ ] Charts render correctly
- [ ] Dark mode toggle works
- [ ] All modals scrollable
- [ ] Bottom navigation accessible

---

## 📱 Mobile-Specific Features

### Header Behavior
- **Sticky Header**: Remains visible while scrolling
- **Compact**: Reduced height on mobile
- **Minimal Icons**: Only essential actions shown

### Navigation
- **Bottom Tab Bar** (Optional future enhancement)
- **Hamburger Menu**: Primary navigation
- **Breadcrumbs**: Hidden on mobile

### Cards
- **Full Width**: Better use of space
- **Stacked**: Vertical layout
- **Reduced Padding**: More content visible

### Charts
- **Simplified**: Fewer data points
- **Touch Interaction**: Pan and zoom
- **Horizontal Scroll**: For wide charts

---

## 📊 Mobile vs Desktop Comparison

| Feature | Mobile | Desktop |
|---------|--------|---------|
| **Navigation** | Hamburger menu | Horizontal tabs |
| **Hero Section** | Stacked metrics | Side-by-side |
| **Charts** | 250px height | 350px height |
| **Grid** | 1 column | 2-4 columns |
| **Padding** | px-4, py-4 | px-6, py-8 |
| **Logo** | w-24 (96px) | w-32 (128px) |
| **Touch Target** | 44px min | 32px min |
| **Font Size** | Slightly smaller | Standard |
| **Search** | Hidden | Visible |
| **Notifications** | Hidden | Visible |
| **User Menu** | Hidden | Visible |
| **Logout** | In mobile menu | Header button |

---

## 🎨 Mobile Component Examples

### Mobile Card
```tsx
<div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border">
  <h2 className="text-lg md:text-xl mb-4">Title</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Content */}
  </div>
</div>
```

### Mobile Button
```tsx
<button className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-[#0a2540] to-[#1a3a5a] text-white rounded-xl">
  Action
</button>
```

### Mobile Input
```tsx
<input 
  type="text"
  className="w-full px-4 py-3 text-base rounded-xl" 
  // text-base prevents iOS zoom
/>
```

---

## 🚀 Mobile Future Enhancements

### PWA Features
- Install prompt
- Offline support
- Push notifications
- Add to home screen

### Advanced Gestures
- Swipe to delete
- Pull to refresh
- Pinch to zoom on charts

### Mobile-Specific UI
- Bottom navigation bar
- Floating action button
- Collapsible sections
- Quick actions menu

---

**Version**: 1.0  
**Last Updated**: January 5, 2026  
**Design System Owner**: Lumino Product Team

---

*This design system ensures consistency, professionalism, and a premium user experience across the Lumino platform while maintaining the brand identity of trust (navy blue) and value discovery (gold).*