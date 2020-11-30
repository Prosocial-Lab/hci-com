## Scripts

### `npm install`

After cloning the repo, run this command.  This will:

- Install Node dependencies from package.json

### `npm run start`

To start the app (development build), run this command.  This will:

- Compile the app and run on the development server

### `npm run test`

- Execute any Jest tests (based on your configration)

### `npm run sitemap`

- This command will execute code in the sitemap-generator.js. Using the sitemapUrl parameter defined in that file (should reflect your registered domain name) a sitemap.xml is generated and persisted under the 'public' folder - this file is referenced in the robots.txt file. This uses the `sitemap-generator` package.

### `npm run build`

This script will:
 - Build release Webpack bundles and run react-snapshot to serve prerendered static files
