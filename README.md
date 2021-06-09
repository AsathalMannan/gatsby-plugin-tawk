# Gatsby Plugin for tawk.to

#### NPM Package: gatsby-plugin-tawk.to

![NPM Publish](https://github.com/AsathalMannan/gatsby-plugin-tawk.to/workflows/Publish/badge.svg)

First of all, I thank [JodyPSmith](https://github.com/JodyPSmith) for the plugin.
This is Forked work from his [Repo](https://github.com/JodyPSmith/gatsby-plugin-tawk).
> I just updated dependencies and fixed issues in building.

A simple plugin that adds the tawk.to live chat window to every page of your Gatsby site.

Sign up for a free account at [tawk.to](https://www.tawk.to/)



## How to use

1. Install using either npm or yarn:

```shell
yarn add gatsby-plugin-tawk.to
```

or

```shell
npm install gatsby-plugin-tawk.to
```

2. Add to ```gatsby-config.js```

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-tawk.to`,
      options: {
        tawkId: "YOUR_TAWK_ID",
        tawkKey: "YOUR_TAWK_KEY",
        // get this from the tawk script widget
      },
    },
  ],
};
```
