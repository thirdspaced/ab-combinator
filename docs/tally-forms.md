# Waitlist forms (Tally)

Two forms, built in Tally, embedded in the download window on the site. Build them at tally.so, then paste each form's ID into `src/site.config.ts`.

Settings to use on both forms (Tally form > Settings):

- **Thank-you page:** custom message, see below. Don't redirect.
- **Notifications:** email yourself on each submission.
- **Style:** Tally's default is fine; the site's window handles the frame. If you want to match the brand, set the button color to `#FF942E` and the accent color to `#1E22C9`.
- **Access:** leave "Close form" off, you want these open.
- **Integrations:** connect Google Sheets (or Notion) once so every signup lands in a sheet you own. Do this before you share the site.

---

## Form 1: Parent

**Title (hidden on the site, shown in Tally):** AB Combinator waitlist, parent

**Intro text (optional short paragraph):**
You're joining the waitlist for the cohort after January. I'll email you when applications open, with pricing and dates. Takes about a minute.

Fields, in order:

| # | Field type | Label | Required | Notes |
| --- | --- | --- | --- | --- |
| 1 | Short text | Your first name | yes | |
| 2 | Email | Your email | yes | |
| 3 | Multiple choice (single) | How old is your kid? | yes | Options: `6 to 8`, `9 to 11`, `12 to 14`, `Older or younger (tell me below)` |
| 4 | Short text | Where are you based? | yes | Placeholder: `Neighborhood or city` |
| 5 | Long text | What does your kid keep talking about making, starting, or figuring out? | no | Placeholder: `A game, a business, an invention, a comic, anything.` This is the field that tells you who's a fit. |
| 6 | Multiple choice (single) | How did you hear about this? | no | Options: `A friend`, `Social media`, `Red Bridge`, `Amy told me`, `Somewhere else` |
| 7 | Checkbox | I'm fine with Amy emailing me about the next cohort. | yes | One checkbox, required. Keeps you clean on consent. |

**Thank-you message:**
You're on the list. I'll email you when applications open. Until then, ask your kid what they want to build and write down whatever they say. That's the application.

---

## Form 2: Kid

**Title:** AB Combinator waitlist, kid

**Intro text:**
This part is for you, not your grown-up. Short answers are fine. Spelling doesn't matter.

Fields, in order:

| # | Field type | Label | Required | Notes |
| --- | --- | --- | --- | --- |
| 1 | Short text | What should I call you? | yes | First name or a nickname. Never shown publicly. |
| 2 | Multiple choice (single) | How old are you? | yes | Options: `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `Other` |
| 3 | Long text | What do you want to make, start, or figure out? | yes | Placeholder: `It can be anything. A game. A business. A machine. A comic. A letter to someone important.` |
| 4 | Long text | Why that? | no | Placeholder: `What made you want to do this one?` |
| 5 | Multiple choice (single) | Have you started on it yet? | yes | Options: `Not yet, it's just an idea`, `A little`, `Yes, I've already made something`, `I tried and it broke` |
| 6 | Short text | What's one thing you'd need help with? | no | |
| 7 | Divider / heading | **Now grab a grown-up for this last part.** | | Tally "Heading" block |
| 8 | Short text | Grown-up's first name | yes | |
| 9 | Email | Grown-up's email | yes | Help text: `This is who I'll email. Nothing goes to the kid.` |
| 10 | Checkbox | Grown-up: I'm fine with Amy emailing me about the next cohort. | yes | |

**Thank-you message:**
Got it. That idea is a real idea. I'll email your grown-up when applications open. In the meantime: make a tiny version of it this week. Even a drawing counts.

---

## Where the data goes

Both forms into one Google Sheet, two tabs, via Tally's Google Sheets integration. Columns you'll care about most: email, age band, "what do you want to make," and which form it came from. When applications open, you email the sheet.

## Privacy notes

- The kid form collects a first name or nickname and an age. Neither is ever displayed anywhere. Tally stores it; you own it.
- No last names, no school names, no photos.
- The consent checkbox is on both forms so the only email you ever send is one someone agreed to.
