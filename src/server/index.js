const path = require('path');
const express = require('express');
const app = express();
const staticAssetsRegex = /^.*\.[^\\]+$/g;

app.set('port', (process.env.PORT || 5000));

app.get('/*', function(req, res) {
  const {originalUrl} = req;
  if (originalUrl.match(staticAssetsRegex)) {
    const assetPath = path.join(__dirname, '../../dist', originalUrl);
    return res.sendFile(path.resolve(__dirname, 'dist', assetPath));
  }
  res.sendFile(path.resolve('dist/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
