# KelsonCraft Website
This will be the future home of the [KelsonCraft](https://kelsoncraft.net) website,
 it is using Next.js 16 with Tailwind and TypeScript.

So far there isn't much in here, but I plan on migrating the entire website from
 Python Flask to Next.js.

Here is some screenshots of the website design, this isn't fully complete just yet.

<details>
<summary> Home Page </summary>
<img src="screenshots/website-home.png?raw=true" alt="Home Page Screenshot">
</details>

<details>
<summary> About page </summary>
<img src="screenshots/website-about1.png?raw=true" alt="About Page Screenshot1">
<img src="screenshots/website-about2.png?raw=true" alt="About Page Screenshot2">
</details>

<details>
<summary> Video list page </summary>
<img src="screenshots/website-video-list.png?raw=true" alt="Home Page Screenshot">
</details>

# Setup

**Running webserver**

I tried to get this working with docker, but couldn't figure it out.

You will need Node.js 24, pnpm, and pm2 installed for this to work

First, install the dependencies
* pnpm install
Then, run the server

**Dev server**
* pm2 start npm --name "kelsoncraft-nextjs" -- run dev

**Production server**
* pnpm run build
* pm2 start npm --name "kelsoncraft-nextjs" -- run start

**Adding videos**

To add videos for the `src/app/video-player/[videoId]/page.tsx`, add them into the 
`videos` folder in the root of this repo.

# License
Since this project will mostly be used on web servers, I have decided to license this
 under the AGPLv3 license, the original website was licensed under GPLv3.