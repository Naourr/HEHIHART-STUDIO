<img width="1879" height="923" alt="image" src="https://github.com/user-attachments/assets/d8f80423-6cb0-4d83-9759-8649f9327b7c" />
<img width="1863" height="912" alt="image" src="https://github.com/user-attachments/assets/e203d5ed-df8d-4057-b289-5d2216a1b647" />



# Minimalist Illustrator Portfolio (React + Vite + Tailwind + Framer Motion)

A Japanese-minimalist showcase site. Frontend only.

## Quick start
1. Extract this zip.
2. Run:
   ```bash
   npm install
   npm run dev
   ```
3. Put your images into `public/art/` with these names. (for parallax in a folder called landing):
<img width="572" height="805" alt="image" src="https://github.com/user-attachments/assets/224980f2-f09a-48e4-9148-31973fc56911" />



If you keep the original filenames, update `src/data/works.js` to point to them.

## Pages
- `/` Home — hero + featured grid
- `/works` — all works grid
- `/work/:slug` — detail page
- `/about`, `/contact`

## Notes
- Tailwind is used for styling (clean, minimal utility classes).
- Motion is subtle: fades, small translates, scale on hover.
- Images use `loading="lazy"` and `srcset` to avoid heavy downloads.
