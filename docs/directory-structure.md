# Directory Structure

The directory structure, which will be used forever and ever while coding this great UI Library. But, if you have ideas about how we can change it to make it great again, feel free to make an issue and/or pull request with description.

```bash
.
├── build/                          # webpack configuration files
├── docs/                           # documentation files
├── tests/                          # unit test files
│   ├── components/
│   ├── mockups/
│   └── utils/
├── dist/                           # Place of production build (only locally)
├── sandpit/                        # Development playground
│   ├── assets/
│   ├── App.vue
│   ├── app.js
│   ├── router.js
│   └── index.html                    
├── src/
│   ├── components/                 # Components place
│   │   ├── component-name/
│   │   └── ...
│   ├── directives/                 # Custom vue directives
│   ├── css/
│   │   ├── mixins/                 # SCSS mixins
│   │   ├── global.scss             # The required global CSS for proper operation
│   │   └── variables.scss          # Project-through variables
│   ├── plugins/
│   ├── mixins/                     # Vue Mixins
│   ├── utils/                      # Reusable JavaScript utils
│   └── index.js
├── i18n/                           # localization files
│   ├── en-US.js            
│   └── ...
├── .npmignore                      # npm will ignore these files and folders in package
├── .babelrc                        # babel config
├── .eslintignore                   # ESlint ignore paths
├── .eslintrc.js                    # ESlint config
├── .gitignore                      # GIT ignore paths
├── package.json                    # npm scripts and dependencies
├── LICENSE                         # license
└── README.md                       # readme
```

