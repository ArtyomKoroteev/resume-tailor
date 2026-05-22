# Resume Markdown Builder — Development Plan

## Goal

Build a static web application that converts ATS-optimized Markdown resumes into styled HTML previews and downloadable PDF files.

The app should:
- Accept Markdown generated/refined by Cursor or AI tools
- Render a professional ATS-friendly resume preview
- Allow visual customization
- Export to PDF/HTML/Markdown
- Be deployable as a static site
- Support future backend integration

---

# Tech Stack

## Frontend
- React
- TypeScript
- Vite

## Monorepo
- pnpm workspaces
- Turborepo

## Styling
- Tailwind CSS
- CSS Variables for themes

## Markdown
- react-markdown
- remark / rehype ecosystem

## PDF Export
- Initial MVP:
  - Browser print API (`window.print`)
- Future:
  - Playwright PDF generation service

## Deployment
- Vercel / Netlify / GitHub Pages

---

# Monorepo Structure

```txt
resume-builder/
├── apps/
│   └── web/
│
├── packages/
│   ├── shared/
│   ├── resume-parser/
│   ├── resume-renderer/
│   ├── resume-themes/
│   └── ui/
│
├── package.json
├── turbo.json
└── pnpm-workspace.yaml
```

---

# Application Architecture

```txt
Markdown
   ↓
Resume Parser
   ↓
ResumeModel (typed JSON)
   ↓
Resume Renderer
   ↓
HTML Preview
   ↓
PDF Export
```

---

# Core Features

## 1. Markdown Editor

### Features
- Paste Markdown
- Upload `.md` file
- Autosave
- Syntax highlighting
- Word counter
- Formatting helper

### Tasks
- [ ] Create modal editor
- [ ] Add editor state management
- [ ] Implement localStorage autosave
- [ ] Add markdown upload support
- [ ] Add formatting action

---

## 2. Resume Parser

### Goal
Convert raw Markdown into a typed internal model.

### Example Flow

```txt
Markdown → ResumeModel
```

### Tasks
- [ ] Define ResumeModel TypeScript interfaces
- [ ] Create markdown parser
- [ ] Parse sections:
  - Header
  - Summary
  - Experience
  - Skills
  - Education
  - Projects
- [ ] Add validation
- [ ] Handle malformed markdown

---

## 3. Resume Preview

### Features
- Live rendering
- A4 / US Letter support
- Zoom controls
- Responsive preview area

### Tasks
- [ ] Create paper layout component
- [ ] Render ResumeModel
- [ ] Add typography system
- [ ] Add section spacing
- [ ] Add link rendering
- [ ] Add zoom controls

---

## 4. Theme System

### Features
- Accent color
- Font family
- Spacing density
- Font scaling

### Tasks
- [ ] Create CSS variable system
- [ ] Add theme state management
- [ ] Add color picker
- [ ] Add font selector
- [ ] Add spacing presets
- [ ] Add font scaling slider

---

## 5. ATS Optimization Features

### Features
- ATS-safe mode
- One-page mode
- Simple semantic structure

### Tasks
- [ ] Create ATS-safe layout mode
- [ ] Remove non-semantic visual elements in ATS mode
- [ ] Add compact spacing mode
- [ ] Add page overflow detection

---

## 6. Export System

### MVP
Use browser print styles.

### Future
Server-side Playwright PDF generation.

### Tasks
- [ ] Add print stylesheet
- [ ] Implement PDF export
- [ ] Implement HTML export
- [ ] Implement Markdown export
- [ ] Validate generated PDF layout

---

## 7. State Persistence

### Tasks
- [ ] Save markdown locally
- [ ] Save UI settings
- [ ] Save selected theme
- [ ] Add reset functionality
- [ ] Load example resume

---

## 8. Templates

### Initial Templates
- Professional
- Compact

### Tasks
- [ ] Create template interface
- [ ] Create renderer abstraction
- [ ] Implement first template
- [ ] Add template switcher

---

# UI Layout

## Left Sidebar
- Navigation
- Editor button
- Templates
- Export
- GitHub link

## Center Area
- Resume preview
- Paper rendering
- Zoom controls

## Right Sidebar
- Appearance settings
- Export settings
- ATS toggles

---

# MVP Scope

## Included
- Markdown editor
- Resume parsing
- Live preview
- Theme customization
- PDF export
- Local persistence

## Excluded
- Backend
- Authentication
- Cloud storage
- AI integrations
- Multi-user support

---

# Future Improvements

## Backend
- Store resumes
- User accounts
- Resume history

## AI Features
- ATS scoring
- Resume improvement suggestions
- Job description matching
- Keyword optimization

## Advanced Export
- Server-side PDF rendering
- Multi-column layouts
- Custom fonts

## Collaboration
- Shareable links
- Team templates

---

# Development Order

## Phase 1
- Project setup
- Layout
- Markdown editor

## Phase 2
- Resume parser
- Preview rendering

## Phase 3
- Theme system
- Export functionality

## Phase 4
- ATS features
- Templates

## Phase 5
- Polish
- Testing
- Deployment

---

# Testing

## Unit Tests
- Parser
- Theme utilities
- Export utilities

## E2E Tests
- Paste markdown
- Render preview
- Export PDF
- Theme switching

---

# Deployment

## Static Hosting
- Vercel
- Netlify
- GitHub Pages

## CI/CD
- GitHub Actions
- Turbo caching
- Type checking
- Linting
- Build validation