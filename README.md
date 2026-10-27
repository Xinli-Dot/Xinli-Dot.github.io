# Xin Li — Academic Website V2.0

A bilingual, minimal editorial academic website, hosted free on GitHub Pages. No build tools required.

## Your exact GitHub repository

Create a **public** repository named `Xinli-Dot.github.io` under your GitHub account `Xinli-Dot`.

Then upload the **contents** of this folder into the repository root, including `.nojekyll`. In repository Settings → Pages, select **Deploy from a branch**, then **main** and **/(root)**. Site URL: https://xinli-dot.github.io/ (GitHub hostnames are case-insensitive).

## Update your profile

Edit `assets/content.js` to add verified affiliation, real email, Google Scholar, ORCID, CV and publication entries. Current name is "Xin Li" in both languages; Chinese characters were not assumed. The GitHub profile link is already populated.

## Add your own photos later

Put files in `assets/photos/` using exactly these names:

- `profile.jpg` — horizontal or wide portrait / lab / field photo for About, landscape recommended around 3:1. If using a portrait image, CSS may crop it; adjust `object-position` in `style.css`.
- `research-1.jpg` — landscape research photograph (3:2 suggested)
- `research-2.jpg` — second landscape photograph (3:2 suggested)

The site automatically shows your photos when the files are present, with visual placeholders otherwise. The hero visual currently uses a generic original SVG at `assets/science-art.svg`, not unpublished experimental figures.

## Check before publishing

Replace draft About text, add only publications that can be verified, upload only images cleared for public release, and confirm how your name appears in Chinese. Keep sensitive unpublished experimental images off the public repository.

## Site structure

- `index.html`: page structure, photo slots
- `assets/style.css`: typography, palette, layout
- `assets/content.js`: bilingual text, identity and lists
- `assets/app.js`: language switch, navigation, content rendering
- `assets/science-art.svg`: replaceable conceptual image
- `.nojekyll`: publish as static website without Jekyll processing
