// Possibly make this into a .env variable, setup a HOST env variable and port if required, or just setup a domain env variable.
// Set the website url here for the video player.
export const websiteUrl: string = "http://192.168.1.109:3000";
// Set the videl url path, such as '/video-player'.
export const videoUrl: string = websiteUrl + "/video-player";
// Set the videos.json file, this is currently located in the src/app folder.
export const videosJsonFile = process.cwd() + "/src/app/videos.json";
