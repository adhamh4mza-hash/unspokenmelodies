const { execSync } = require('child_process');
const port = process.env.PORT || 8080;
execSync(`npx serve . -l tcp://0.0.0.0:${port}`, { stdio: 'inherit' });
