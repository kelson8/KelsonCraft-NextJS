// This script needs to run before any React hydration
// so it's just a simple JS string directly injected.
// It detects user preference from localStorage or system preference.

// TODO Figure out how to use this, I'm quite sure I had it working locally on KCNet-Vite.

export const darkModeThemeScript = `
    (function() {
      const getInitialTheme = () => {
        // Check for 'darkmode' in localStorage first
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
          return 'dark';
        }
        if (storedTheme === 'light') {
          return 'light';
        }

        // If there no explicit choice, check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark';
        }

        // Default to dark if nothing else matches
        return 'dark';
      };

      const initialTheme = getInitialTheme();

      if (initialTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    })();
`

export function ThemeScript() {
    // const codeToRun = darkModeThemeScript;

    // We use dangerouslySetInnerHTML because this script must run synchronously
    // before React takes over.
    return <script dangerouslySetInnerHTML={{ __html: darkModeThemeScript }} />;
}