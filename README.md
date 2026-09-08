# Anime Horizon

Create a small, modern cinematic anime discovery website called **ANIMEVERSE**.

The project must be lightweight and simple enough to run without requiring an upgrade or large project plan.

## MAIN FEATURES

Create only 2 categories:

### 🎬 Anime Movies

### 📺 Anime Series

Use the following 20 real anime titles:

### Movies — 10

1. Your Name

2. A Silent Voice

3. Weathering with You

4. Suzume

5. Spirited Away

6. Howl's Moving Castle

7. Princess Mononoke

8. I Want to Eat Your Pancreas

9. Jujutsu Kaisen 0

10. Demon Slayer: Mugen Train

### Series — 10

1. One Piece

2. Naruto

3. Demon Slayer

4. Jujutsu Kaisen

5. Attack on Titan

6. Death Note

7. Solo Leveling

8. Haikyuu!!

9. One Punch Man

10. Frieren: Beyond Journey's End

---

# HOME PAGE

Create a cinematic homepage with:

* Dark anime-style background

* Large featured anime banner

* Anime title

* Year

* Genre

* Rating

* Short one-line story

* Explore button

Keep the design clean and premium.

---

# ANIME CARDS

Every anime card must show:

* Anime poster/banner

* Name

* Year

* Episodes OR Runtime

* Languages available

* Genres

* Rating

* One-line storyline

For movies show **Runtime**.

For series show **Episodes**.

Example:

**ATTACK ON TITAN**

2013 • 94 Episodes

Japanese • English

Action • Dark Fantasy • Drama

⭐ 9.1

"Humanity fights for survival while uncovering the terrifying truth behind the Titans."

---

# CARD HOVER EFFECT

When the cursor moves over an anime:

* Card slightly scales up

* Smooth 3D tilt

* Poster slowly zooms

* Background shifts slightly

* Information smoothly appears

* Shadow becomes deeper

* Subtle light reflection passes across the card

When cursor leaves, everything smoothly returns.

Do NOT use excessive effects.

---

# SMOOTH SCROLL

Use smooth scrolling throughout the website.

Add:

* Smooth inertia scrolling

* Scroll reveal

* Parallax images

* Section fade/slide transitions

* Slight image scaling while scrolling

Keep animations fast and smooth.

---

# MOVIES SECTION

Create:

## 🎬 Anime Movies

Display the 10 movies in a horizontal cinematic carousel.

Cards should smoothly slide while scrolling.

Add:

* Previous / Next buttons

* Mouse drag

* Mobile swipe

* Smooth snapping

---

# SERIES SECTION

Create:

## 📺 Anime Series

Display the 10 series in a similar horizontal carousel.

Use the same cinematic card design.

---

# ANIME DETAILS

When clicking an anime card, open a simple cinematic modal.

Show:

* Large banner

* Poster

* Anime name

* Year

* Episodes / Runtime

* Languages

* Genres

* Rating

* One-line story

Opening animation:

**Card → smoothly expands → Detail modal appears**

Closing should reverse the animation.

---

# SEARCH

Add a simple search bar.

User can search the 20 anime titles.

Search results should appear smoothly.

---

# NAVBAR

Create a simple sticky navbar:

**ANIMEVERSE**

Home | Movies | Series | Search

Navbar should become slightly transparent/blurred when scrolling.

---

# VISUAL STYLE

Use:

* Dark background

* Cinematic gradients

* Glassmorphism

* Subtle glow

* Film grain

* Soft shadows

* Clean typography

Do not overcrowd the design.

---

# TECHNOLOGY

Use:

* React / Next.js

* TypeScript

* Tailwind CSS

* Framer Motion

Use reusable components:

```text

Navbar

Hero

AnimeCard

MovieSection

SeriesSection

AnimeModal

SearchBar

Footer

```

Do NOT add authentication, database, payment system, admin dashboard, user profiles, recommendation AI, or other large features.

Focus only on creating a **small but polished cinematic anime discovery website**.

The final experience should feel like a mini Netflix-style anime catalogue:

**Beautiful → Smooth → Cinematic → Fast → Simple**

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/28fc33b1-04a0-42a1-aa9a-43592f95dc38).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
