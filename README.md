# Happy Girlfriend's Day, Shazra ❤

Everything is already personalized — her name, your dates, the 88 days, the
curated reasons and promises, the letter, and "Arz Kiya Hai" wired to start
the moment she opens the curtains.

## What she'll experience

1. **Curtains** — "for Shazra" with an *open it* button ("sound on — there's a
   song waiting"). Her tap parts the curtains and starts the song.
2. **Hero** — the name pours in letter by letter, then turns to liquid gold.
   It currently reads **Girl** (`heroNameText` in the config); the curtains,
   letter, and footer still say Shazra.
3. **Counter** — rolling odometer since 24 Jan 2026, with the 88-day
   head-start line underneath.
4. **Our story** — a golden thread draws itself through 28 Oct → 24 Jan →
   7 June → today.
5. **Why I love you** — a cream card deck; every tap deals another of 24
   reasons pulled from your list of 100.
6. **My promises** — ten of your vows, one at a time, ending on
   *"never something I do halfway"* in gold.
7. **The letter** — wax seal cracks, envelope opens, letter climbs out and
   inks itself in.
8. **The gift** — hearts erupt and rain across the screen.
9. **The sky** — your days connect into a heart constellation; she can tap
   to send shooting-star wishes.

## Deploy on GitHub Pages

1. Create a new **public** repo.
2. Upload `index.html`, `style.css`, `script.js` to the **root**.
3. Repo → **Settings** → **Pages** → Source: **Deploy from a branch** →
   `main` → `/ (root)` → Save.
4. Wait ~1 minute: `https://<your-username>.github.io/<repo-name>/`

**Test it on your phone before sending** — that's how she'll open it.

## The song — one honest caveat

The track plays through a hidden YouTube player. Two layers make her tap
count:

- The curtain screen briefly shows **getting the song ready** and only
  reveals the *open it* button once the player is actually live (7 seconds
  max, then it opens regardless). Her tap therefore always lands with sound
  permission attached — this is what iPhones require.
- It needs internet access to YouTube. If YouTube is slow/blocked on her
  network, the page still works — the song just won't.
- A few in-app browsers (e.g. opening the link inside Instagram) are strict
  about iframe sound. If it's ever silent, the gold pill glows **tap for
  song** — one deliberate tap starts it. The page never starts audio behind
  her back.
- **Previewing locally?** Double-clicking `index.html` opens it as a
  `file://` address, and the YouTube player refuses to run there at all —
  that's why a local test can be silent. Serve it instead: run
  `python3 -m http.server` in the folder and open `http://localhost:8000`,
  or just push to GitHub Pages and test the real URL.
- If you set **both** `youtubeId` and `musicFile`, iPhones and iPads use the
  mp3 automatically — Apple only fully trusts `<audio>` for tap-to-play
  sound — while everyone else gets YouTube. The mp3 is also the fallback
  anywhere YouTube errors out. **This is the move that makes autoplay
  guaranteed on her iPhone.**

**Bulletproof alternative:** put the song as an mp3 at `music/song.mp3` in the
repo, then in `script.js` set `youtubeId: ""` and
`musicFile: "music/song.mp3"`. Local audio never depends on YouTube.

## Editing anything

Open `script.js` — the `CONFIG` block at the top holds every word on the page:
names, dates, timeline, the 24 deck reasons, the 10 promises, the letter, the
gift message, the sky captions. Swap in different reasons/promises from your
lists any time; the deck and dots adapt to however many you include.
