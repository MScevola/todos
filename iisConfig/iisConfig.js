const fs = require('fs');

const webConfigPath = './build/web.config';

if (fs.existsSync(webConfigPath)) {
  fs.unlinkSync(webConfigPath);
}

fs.copyFile('./iisConfig/web.config', './build/web.config', err => {
  if (err) throw err;
});
