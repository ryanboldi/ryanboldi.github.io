# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is Ryan Bahlous-Boldi's personal academic website hosted on GitHub Pages. It's a static HTML/CSS website showcasing academic work, publications, and blog posts.

## Site Architecture

### Directory Structure
- **Root HTML Pages**: Main site pages (index.html, education.html, publications.html, talks.html)
- **blog/**: Blog posts directory with individual HTML files for each post
- **images/**: Site images including profile pictures and paper figures
  - `logos/`: University and organization logos
- **pdfs/**: PDF documents (CV, papers)
- **presentations/**: Presentation materials with slides and videos subdirectories
- **misc/**: Miscellaneous files

### Key Files
- `index.html`: Main landing page with bio, representative papers, and navigation
- `stylesheet.css`: Site-wide CSS styles using Lato font family
- `blog/index.html`: Blog index page listing all posts
- Individual blog post files in `blog/` (lexicase.html, popl.html, phd.html, etc.)

## Development Workflow

### Local Development
Since this is a static site with no build process:
1. Edit HTML/CSS files directly
2. Test changes by opening HTML files in a browser locally
3. Use a local HTTP server for proper testing: `python3 -m http.server 8000` or `python -m SimpleHTTPServer 8000`

### GitHub Pages Deployment
The site is automatically deployed via GitHub Pages from the master branch. Changes pushed to master will be live at https://ryanboldi.github.io

### Git Workflow
- Current branch: `modern`
- Main/production branch: `master`
- Create pull requests from feature branches to `master` for deployment

## Content Guidelines

### Adding Blog Posts
1. Create new HTML file in `blog/` directory
2. Follow existing blog post structure (see lexicase.html or popl.html for examples)
3. Update blog/index.html to add link to new post
4. Use relative paths for all links and resources

### Images
- Profile and paper images go in `images/`
- Organization logos in `images/logos/`
- Use descriptive filenames and appropriate formats (PNG for logos, JPG for photos)

### Navigation Structure
All pages include back navigation to home or parent pages. Maintain consistent navigation patterns when adding new pages.

## Style Conventions

### HTML Structure
- Tables used for layout (legacy pattern maintained for consistency)
- Inline styles mixed with stylesheet.css classes
- UTF-8 encoding on all pages
- Semantic HTML5 doctype

### CSS
- Primary font: Lato (loaded from Google Fonts)
- Link colors: #1772d0 (blue) default, #f09228 (orange) on hover
- Consistent spacing using percentage-based padding
- Responsive design through max-width constraints

### Academic Content
- Papers listed with thumbnail images (160px width)
- Author names with bold highlighting for site owner
- Conference/journal information in italics
- PDF links for all publications