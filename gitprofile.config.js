// gitprofile.config.js

const config = {
  github: {
    username: 'tkko', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'thornike',
    twitter: 'thornike_',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: 'thornike',
    dev: 'tornike',
    website: 'https://tornike.dev',
    phone: '',
    email: 'qurdadzze@gmail.com',
  },
  resume: {
    fileUrl: 'https://tornike.dev', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Flutter',
    'Dart',
    'Mobile Development',
    'Angular',
    'Web Development',
    'Git',
    'Firebase',
    'User Interface (UI)',
    'User Experience (UX)',
    'Mentorship',
    'Communication',
  ],
  experiences: [
    {
      company: 'Netguru',
      position: 'Senior Flutter Engineer',
      from: 'Nov 2021',
      to: 'Present',
    },
    {
      company: 'Dentos',
      position: 'Senior Flutter Engineer',
      from: 'Sep 2021',
      to: 'Oct 2021',
    },
    {
      company: 'MY.GE',
      position: 'Application Development Team Lead',
      from: 'Nov 2020',
      to: 'Nov 2021',
    },
    {
      company: 'MY.GE',
      position: 'Flutter Developer',
      from: 'Oct 2019',
      to: 'Dec 2020',
    },
    {
      company: 'MY.GE',
      position: 'Frontend Developer',
      from: 'Aug 2018',
      to: 'Dec 2019',
    },
    {
      company: 'Wepark.ge',
      position: 'Android Developer',
      from: 'Aug 2017',
      to: 'Sep 2018',
    },
    {
      company: 'Wepark.ge',
      position: 'Junior Software Engineer',
      from: 'May 2017',
      to: 'July 2017',
    },
  ],
  education: [
    {
      institution: 'Caucasus University',
      degree: "Bachelor's degree, Computer Science",
      from: '2013',
      to: '2017s',
    },

  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'thornike', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: 'G-WK9R5DJ4M2', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
