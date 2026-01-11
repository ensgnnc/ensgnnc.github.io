// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ensgnnc', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['ensgnnc/Biolists', 'ensgnnc/AppOpener', 'sarperkahvecioglu/otonom_f1', 'ensgnnc/caracals', 'ensgnnc/Yrsa'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Autonomus Driving for Formula Student',
          description:
            'I am currently working on developing autonomus system for our race car.',
          imageUrl:
            'https://iztechracing.com.tr/logo2RR.png',
          link: 'https://iztechracing.com.tr/',
        }
      ],
    },
  },
  seo: { title: 'Portfolio of Enis Günenç', description: '', imageURL: '' },
  social: {
    linkedin: 'enis-günenç',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'enisgnnc@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C#',
    'TypeScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'Flutter',
    'Expo',
    'GitHub Actions',
    'CI/CD',
    'MySQL',
    'PostgreSQL',
    'Unity',
    'Postman',
    'Git',
    'Docker',
    'CSS',
    'Tailwind'
  ],
  experiences: [
    //{
    //  company: 'Company Name',
    //  position: 'Position',
    //  from: 'September 2021',
    //  to: 'Present',
    //  companyLink: 'https://example.com',
    //},
    //{
    //  company: 'Company Name',
    //  position: 'Position',
    //  from: 'July 2019',
    //  to: 'August 2021',
    //  companyLink: 'https://example.com',
    //},
  ],
  certifications: [
    //{
    //  name: 'Lorem ipsum',
    //  body: 'Lorem ipsum dolor sit amet',
    //  year: 'March 2022',
    //  link: 'https://example.com',
    //},
  ],
  educations: [
    {
      institution: 'İzmir Institute of Technology',
      degree: "Bachelor's Degree in Computer Engineering",
      from: '2024',
      to: '2030',
    }
  ],
  publications: [
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
