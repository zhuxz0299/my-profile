// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/my-profile/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/my-profile/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/my-profile/cv/";
          },
        },{id: "news-co-first-authored-paper-spaceexit-enabling-efficient-adaptive-computing-in-space-with-early-exits-accepted-to-2025-usenix-annual-technical-conference-usenix-atc-25",
          title: 'Co-first authored paper SpaceExit: Enabling Efficient Adaptive Computing in Space with Early Exits...',
          description: "",
          section: "News",},{id: "news-paper-spaceexit-enabling-efficient-adaptive-computing-in-space-with-early-exits-received-artifact-available-artifact-functional-and-artifact-reproduced-badges-at-usenix-atc-25-artifact-evaluation",
          title: 'Paper SpaceExit: Enabling Efficient Adaptive Computing in Space with Early Exits received Artifact...',
          description: "",
          section: "News",},{id: "news-attended-cncc-china-national-computer-congress",
          title: 'Attended CNCC (China National Computer Congress).',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%68%75%78%69%61%6F%7A%68%69@%73%6A%74%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/zhuxz0299", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/my-profile//feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
