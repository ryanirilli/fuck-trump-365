const path = require('path');
const express = require('express');
const app = express();
const staticAssetsRegex = /^.*\.[^\\]+$/g;
const Sheets = require('./google-spreadsheets');

app.set('port', (process.env.PORT || 5000));

app.get('/api/v1/get-tracks', (req, res) => {
  Sheets.getAuthClient()
    .then(Sheets.getSheetData)
    .then(data => res.send(data));
});

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
