# CSISS Website - Testing Guide

## Quick Start

1. Open `index.html` in your web browser
2. Navigate through all pages using the top menu
3. Test form submission on Contact page
4. Check mobile responsiveness

## Pages to Test

### ✅ Home Page (index.html)
- [ ] Navigation menu works
- [ ] Hero section displays correctly
- [ ] Statistics cards are visible
- [ ] Feature grid shows 6 items
- [ ] CTA buttons link correctly
- [ ] Footer displays with links
- [ ] Mobile menu toggle works
- [ ] Responsive layout on tablet/mobile

### ✅ Overview Page (overview.html)
- [ ] Page loads successfully
- [ ] Header navigation active highlight correct
- [ ] Crisis statistics display
- [ ] Crisis areas grid visible
- [ ] Vulnerability sections show content
- [ ] Responsive on mobile devices

### ✅ Challenges Page (challenges.html)
- [ ] Page title displays
- [ ] 5 challenge blocks visible
- [ ] Challenge items properly formatted
- [ ] Crisis areas grid shows locations
- [ ] Links to Solutions page work

### ✅ Solutions Page (solutions.html)
- [ ] Solutions section displays
- [ ] Feature grid shows all 6 features
- [ ] Hover effects work on cards (desktop)
- [ ] Feature descriptions are clear
- [ ] Links to Implementation page work

### ✅ Implementation Page (implementation.html)
- [ ] Timeline displays 3 phases
- [ ] Partnership section visible
- [ ] Budget breakdown shows
- [ ] Impact cards display metrics
- [ ] Responsive grid layout works

### ✅ Contact Page (contact.html)
- [ ] Contact information displays
- [ ] Partnership opportunities grid shows
- [ ] Contact form renders correctly
- [ ] All form fields are accessible
- [ ] Form validation works

## Form Testing

### Required Fields
Test that form requires:
1. **Name** - Must be filled
2. **Email** - Must be valid email format
3. **Subject** - Must select from dropdown
4. **Message** - Must be at least 10 characters

### Validation Tests
- [ ] Submit empty form → Shows error message
- [ ] Enter invalid email → Shows error for email
- [ ] Enter message < 10 chars → Shows error
- [ ] Fill all required fields → Form submits successfully
- [ ] Success message displays after submission
- [ ] Form clears after successful submission

### Form Fields
- [ ] Name field accepts text
- [ ] Email field accepts emails
- [ ] Phone field (optional) works
- [ ] Organization field (optional) works
- [ ] Subject dropdown has 6 options:
  - Partnership Inquiry
  - Technical Support
  - Feedback & Suggestions
  - Training Request
  - Report an Issue
  - Other
- [ ] Message textarea accepts multi-line text
- [ ] Consent checkbox can be checked

## Navigation Testing

### Header Navigation
- [ ] All 6 pages link correctly:
  1. Home → index.html
  2. Overview → overview.html
  3. Challenges → challenges.html
  4. Solutions → solutions.html
  5. Implementation → implementation.html
  6. Contact → contact.html
- [ ] Active page highlighted in navigation
- [ ] Navigation links work from all pages

### Mobile Menu
- [ ] Menu toggle button (☰) appears on small screens
- [ ] Click toggle opens mobile menu
- [ ] Menu items display vertically
- [ ] Click menu item navigates to page
- [ ] Menu closes after navigation
- [ ] Click outside menu closes it

### Internal Links
- [ ] "Send Inquiry Now" CTA links to contact form
- [ ] "View Implementation" links to implementation page
- [ ] All navigation links are functional

## Styling Tests

### Colors
- [ ] Bangladesh flag colors visible:
  - Green (#006747) in headers/buttons
  - Red (#CE1126) in accents
- [ ] Text readable on all backgrounds
- [ ] Button colors contrast well

### Responsiveness
Test on different screen sizes:

**Desktop (1200px+)**
- [ ] 2-column layouts work
- [ ] Full navigation menu displays
- [ ] All content fits without horizontal scroll

**Tablet (768px - 1199px)**
- [ ] Single column layouts
- [ ] Navigation still accessible
- [ ] Content properly centered
- [ ] Touch targets are adequate size

**Mobile (480px - 767px)**
- [ ] Mobile menu active
- [ ] Single column layout
- [ ] Touch targets (buttons) are large enough
- [ ] No horizontal scrolling
- [ ] Form is easy to use

**Extra Small (< 480px)**
- [ ] Content still readable
- [ ] No layout breaking
- [ ] Mobile menu functional

## Browser Testing

### Desktop Browsers
- [ ] Chrome 90+
- [ ] Firefox 88+
- [ ] Safari 14+
- [ ] Edge 90+

### Mobile Browsers
- [ ] iOS Safari
- [ ] Chrome Mobile
- [ ] Firefox Mobile

## Performance Testing

- [ ] Pages load quickly
- [ ] No console errors
- [ ] Smooth scrolling
- [ ] Animations are smooth (no jank)
- [ ] Form submission completes in < 2 seconds

## Accessibility Testing

- [ ] Can navigate with keyboard only (Tab key)
- [ ] Form fields have proper labels
- [ ] Buttons have clear text/purpose
- [ ] Color not the only differentiator
- [ ] Alt text would work if images added

## Known Limitations

1. **Form Storage**: Currently stores data in localStorage only (demonstration)
   - For production, integrate with backend API
   - Implement email notifications
   - Add database storage

2. **Images**: Asset folder created but no images added
   - Add logo/branding images
   - Add feature icons
   - Add hero background images

3. **Backend Integration**: Not yet implemented
   - Email service connection needed
   - Database storage for submissions
   - User authentication (if needed)

## Testing Checklist Summary

- [ ] All 6 pages accessible from navigation
- [ ] Mobile menu works on small screens
- [ ] Form validates all required fields
- [ ] Form shows success/error messages
- [ ] Responsive layout on all screen sizes
- [ ] All colors are Bangladesh flag themed
- [ ] No console errors
- [ ] Navigation highlights active page
- [ ] All links are functional
- [ ] Touch-friendly on mobile devices

## How to Check Console for Errors

1. **Chrome**: Press F12 → Click "Console" tab
2. **Firefox**: Press F12 → Click "Console" tab
3. **Safari**: Enable Developer Menu → Click "Web Inspector" → Console tab
4. **Edge**: Press F12 → Click "Console" tab

If you see red errors in the console, the website is not functioning properly. Check the error message for details.

## Support

If you encounter any issues:
1. Check browser console for errors (F12)
2. Ensure all CSS and JS files are in correct directories
3. Try in a different browser
4. Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
5. Check file paths in HTML files are correct

---

**Website Status**: ✅ Ready for Testing  
**Last Updated**: January 2025
