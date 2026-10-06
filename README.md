# Demo Hub

"Demo Hub" is a high-end, studio-grade static website designed for pitching bespoke digital agency templates to Nigerian small businesses. When a business owner opens a link, they see a tailored, studio-designed website built for their exact business type, with their own name, location, and accent color prefilled.

## Stack & Architecture

- **Vanilla HTML5, CSS3, ES Modules (JavaScript)**
- **Zero Build Step & Framework-Free**: No React, Vue, Tailwind, jQuery, or icon libraries.
- **Deployable to Netlify as-is**: Configured via `netlify.toml` and `_redirects` for single-page application (SPA) routing.
- **Shared Codebase**: 16 dedicated category data files in `/data/` driven by reusable feature components.

---

## How to Run Locally

You can serve the repository using any local HTTP web server that supports fallback SPA routing to `index.html`.

### Option 1: Node.js (Included helper)
```bash
node serve.js
```
Then open `http://localhost:8000` in your browser.

### Option 2: Python / Any HTTP Server
```bash
python3 -m http.server 8000
```
Open `http://localhost:8000/` in your browser.

---

## How to Deploy to Netlify

1. Push this repository to GitHub or GitLab.
2. In Netlify, click **"Add new site"** -> **"Import an existing project"**.
3. Select your repository.
4. Set Build Settings:
   - **Build Command**: *(leave empty)*
   - **Publish directory**: `.` (root directory)
5. Click **"Deploy site"**.

All routes (`/spa`, `/restaurant`, `/fashion`, `/terms`, etc.) are handled by `_redirects` which rewrites all request paths to `/index.html` with a 200 HTTP status code.

---

## Query Parameters & Personalized Links

Every category route accepts query parameters to dynamically personalize the entire website copy, wordmarks, footer details, and WhatsApp contact targets.

| Query Parameter | Description | Example |
| :--- | :--- | :--- |
| `name` | Business Name (drives wordmark, hero, titles, footer) | `?name=Lekki%20Glow%20Spa` |
| `tagline` | Business Subtitle / Value Proposition | `?tagline=Holistic%20wellness%20in%20Lekki` |
| `city` | Location / Address area | `?city=Victoria%20Island,%20Lagos` |
| `phone` | Contact Phone Number | `?phone=%2B2348012345678` |
| `wa` | WhatsApp Number (digits only, e.g., 234...) | `?wa=2348012345678` |
| `ig` | Instagram handle | `?ig=lekkiglowspa` |
| `accent` | Hex Accent Color Override | `?accent=%23A23B1E` |
| `layout` | Layout Variant (`1` = Classic, `2` = Editorial) | `?layout=2` |
| `demo` | Set `0` to hide the demo bar | `?demo=0` |

### Sample Personalized Links

- **Spa**: `/spa?name=Aura%20Wellness%20%26%20Spa&city=Lekki%20Phase%201&wa=2348023456789&layout=1`
- **Salon**: `/salon?name=Noir%20Atelier%20Barbing&city=Victoria%20Island&layout=2`
- **Restaurant**: `/restaurant?name=Mama%20Tayo%20Kitchen&city=Surulere,%20Lagos&accent=%23A23B1E`
- **Fashion**: `/fashion?name=Ayo%20%26%20Co.%20Studio&city=Ikoyi&layout=2`
- **Sneakers**: `/sneakers?name=Stride%20Vault%20Kicks&city=Yaba&wa=2348067890123`
- **Accessories**: `/accessories?name=Omi%20Crafted%20Goods&city=Lekki`
- **Interior**: `/interior?name=Studio%20Koto%20Interiors&city=Ikoyi&accent=%237A5C45`
- **Real Estate**: `/realestate?name=Sovereign%20Haven&city=Eko%20Atlantic`
- **Creative**: `/creative?name=Vanguard%20Creative&city=Surulere`
- **Fitness**: `/fitness?name=Forge%20Athletic%20Club&city=Lekki%20Phase%201`
- **Events**: `/events?name=Aura%20Event%20Architecture&city=Victoria%20Island`
- **Bakery**: `/bakery?name=Crumb%20%26%20Co.%20Bakes&city=Ikeja`
- **Beauty**: `/beauty-products?name=Sola%20Pure%20Skincare&city=Lekki`
- **General Store**: `/store?name=Mercantile%20Provisions&city=Yaba`
- **Home Services**: `/home-services?name=Apex%20Home%20Technicians&city=Mainland%20Lagos`
- **Education**: `/education?name=Nexus%20Tech%20Academy&city=Yaba%20Tech%20Hub`

---

## How to Build a Personalized Link in Seconds

1. Go to the **Hub Page** (`/`).
2. Scroll to Section 3: **"Make It Yours"**.
3. Select the business category, type the business name, city, WhatsApp number, and select an accent swatch.
4. Click **"Copy Link"** or **"Open Preview"**.

---

## How to Add a New Category

1. Create a new data file in `/data/{category-id}.js` exporting a default object containing meta details, navigation, hero, working feature data, items/services, FAQs, and hours.
2. Add your category to `/data/index.js` in `CATEGORIES` and `CATEGORY_LIST`.
3. Add design tokens in `styles/tokens.css` under `html[data-category="{category-id}"]`.
4. (Optional) Map specialized layout views in `core/render.js` if custom interaction logic is required.

---

## How to Swap Images

All photography is centralized in `/data/images.js` mapped by category key. To replace images:
1. Open `/data/images.js`.
2. Update the Unsplash image URL array for the relevant category key. Ensure parameters include `?auto=format&fit=crop&w=800&q=75`.
3. An image fallback handler automatically catches network issues or broken image links and displays a warm tonal block fallback.

---

## Banned List & Design System Compliance

This repository strictly enforces professional editorial standards:
- Zero pure white backgrounds: All surfaces use warm off-white background tones.
- Zero drop shadows: Visual separation is strictly achieved via 1px hairline borders and whitespace.
- Zero gradients, liquid glass, radial orbs, or noise overlays.
- Zero icon fonts or libraries: All interactions use text labels or clean CSS inline glyphs.
- Zero em dash characters anywhere in user copy.
- Zero banned fonts (such as system defaults or generic sans-serifs).
- Zero fake review or rating sections.
