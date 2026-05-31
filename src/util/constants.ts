// Possibly make this into a .env variable, setup a HOST env variable and port if required, or just setup a domain env variable.
// Set the website url here for the video player.
// export const websiteUrl: string = "http://192.168.1.109:3000";
// Set the videl url path, such as '/video-player'.
// export const videoUrl: string = websiteUrl + "/video-player";
export const videoUrl: string = "/video-player";
// Set the videos.json file, this is currently located in the src/app folder.
export const videosJsonFile = process.cwd() + "/src/app/videos.json";

//------
// Main containers and div classes
//------

// Default classes for all Tailwind containers on the website.
export const containerClass = `container mx-auto bg-white border 
  border-gray-300 rounded-lg p-6 
  shadow-lg m-4 dark:bg-gray-800 
  dark:border-gray-700 dark:text-gray-200 text-black`;

// In use for the containers on the pages, adds the gray box around the website contents.
export const containerPageClass = `container mx-auto bg-white border border-gray-300 
rounded-lg p-6 shadow-lg m-4 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-200`;

// The div class that goes under the containerClass in the tsx.
export const mainDivClass = `w-full max-w-3xl mx-auto overflow-x-hidden p-4`;

//------
// Buttons
// https://v1.tailwindcss.com/components/buttons
//------
// export const blueButtonClass = `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`;
export const blueButtonClass = `text-white bg-brand box-border border border-transparent 
hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium 
shadow-xs font-medium leading-5 rounded-base 
text-sm px-4 py-2.5 focus:outline-none m-4`;

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
export const mainHeaderClass = `mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl`;
// Smaller text for h2 headers
export const h2HeaderClass = `mb-4 text-2xl font-bold tracking-tight text-heading md:text-4xl lg:text-4xl`;
export const h3HeaderClass = `mb-4 text-2xl tracking-tight text-heading`;

