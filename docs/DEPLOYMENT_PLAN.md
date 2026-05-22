# Deployment Plan

## Recommended Hosting

Use **Vercel** for the first version.

Why:
- Easy static deployment
- Good preview deployments for every pull request
- Works well with monorepos
- Easy future migration to API routes / backend functions
- Minimal setup

Alternative options:
- **Netlify** — also good for static apps
- **GitHub Pages** — free and simple, but less flexible for future backend work

---

# Deployment Architecture

```txt
GitHub Repository
    ↓
GitHub Pull Request
    ↓
CI Checks
    ↓
Preview Deployment
    ↓
Merge to main
    ↓
Production Deployment