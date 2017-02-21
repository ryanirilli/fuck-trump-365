const google = require('googleapis');
const GoogleAuth = require('google-auth-library');
const scopes = ['https://www.googleapis.com/auth/drive'];

function getAuthClient() {
  return new Promise((resolve, reject) => {
    new GoogleAuth().fromJSON({
      "type": "service_account",
      "project_id": "fuck-trump-365",
      "private_key_id": process.env.GOOGLE_PRIVATE_KEY_ID,
      "private_key": process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      "client_email": process.env.GOOGLE_CLIENT_EMAIL,
      "client_id": process.env.GOOGLE_CLIENT_ID,
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://accounts.google.com/o/oauth2/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/admin-27%40fuck-trump-365.iam.gserviceaccount.com"
    }, (err, authClient) => {
      if (err) {
        reject(err);
      }
      google.options({
        auth: authClient.createScoped(scopes)
      });
      resolve();
    });
  })
}

function createSheetsInstance() {
  return new Promise((resolve, reject) => {
    sheet =
    resolve(sheet);
  });
}

function getSheetData(sheet) {
  return new Promise((resolve, reject) => {
    google.sheets('v4').spreadsheets.values
      .get({
        range: 'A1:B100',
        spreadsheetId: '1Y5werv0EJfr07vOiPL52lbRhU6f7f5TKAl92GC7ErDI',
      }, (err, response) => {
        if (err) {
          console.log(err);
          return reject(err);
        }
        resolve(response)
      });
  });
}

getAuthClient()
  .then(getSheetData);

module.exports = {
  getAuthClient,
  createSheetsInstance,
  getSheetData
};