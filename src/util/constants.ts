// Set the videl url path, such as '/video-player'.
export const videoUrl: string = "/video-player";

//------
// Extra variables
//------
export const isProd = process.env.NODE_ENV === "production";

export const authRoutesEnabled: boolean = process.env.AUTH_ROUTES === "true";

export const testPagesEnabled: boolean = process.env.TEST_PAGES === "true";

//------
// Website page json files
//------
// Set the website pages json files, these are currently located in the src/json folder.
export const testPagesJsonFile = process.cwd() + "/src/json/test-pages.json";
export const miscPagesJsonFile = process.cwd() + "/src/json/misc-pages.json";
export const videoPagesJsonFile = process.cwd() + "/src/json/videos.json";

//------
// Folders
// The path for the videos in /api/video
export const videoPath: string = process.cwd() + "/videos";
//------

//------
// Routes
//------
// Toggle the age encryption route status here
export const ageEncryptionRouteEnabled = false;
//------

//------
// Navbar urls
//------
export const blogUrl: string = "https://blog.kelsoncraft.net";
export const wikiUrl: string = "https://wiki.kelsoncraft.net";
//------

//------
// Main containers and div classes
//------

// Default classes for all Tailwind containers on the website.
export const containerClass = `container mx-auto bg-white border 
  border-gray-300 rounded-lg p-6 
  shadow-lg m-4 dark:bg-gray-800 
  dark:border-gray-700 dark:text-gray-200 text-black`;

// In use for the containers on the pages, adds the gray box around the website contents.
// TODO Fix this to work with the dark mode toggle.
export const containerPageClass = `container mx-auto bg-white border border-gray-300
rounded-lg p-6 shadow-lg m-4 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-200`;

// TODO Enable this once I fix dark mode toggle storage.
// export const containerPageClass = `container mx-auto bg-white border border-gray-300
// rounded-lg p-6 shadow-lg m-4 dark:bg-gray-700 bg-white`;

// The div class that goes under the containerClass in the tsx.
export const mainDivClass = `w-full max-w-3xl mx-auto overflow-x-hidden p-4`;

//------
// Buttons
// https://v1.tailwindcss.com/components/buttons
//------
export const blueButtonClass = `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`;
// export const blueButtonClass = `text-white bg-brand box-border border border-transparent
// hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium
// shadow-xs font-medium leading-5 rounded-base
// text-sm px-4 py-2.5 focus:outline-none m-4`;

//------
// Links
//------
export const blueLinkCss: string = "underline text-blue-600 hover:text-blue-800 visited:text-purple-600";



//------
// Headers
//------

// These might be used later
// https://flowbite.com/docs/typography/headings/
// Text for h1 headers.
export const mainHeaderClass = `mb-4 text-4xl text-center font-bold tracking-tight text-heading md:text-5xl lg:text-6xl`;
// Smaller text for h2 headers
export const h2HeaderClass = `mb-4 text-2xl font-bold tracking-tight text-heading md:text-4xl lg:text-4xl`;
export const h3HeaderClass = `mb-4 text-2xl tracking-tight text-heading`;

