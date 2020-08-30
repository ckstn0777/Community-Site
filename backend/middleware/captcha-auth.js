require("dotenv").config();

const request = require("request");

module.exports = (req, res) => {
  return new Promise((resolve, reject) => {
    // secret key
    const secretKey = process.env.CAPTCHA;
    // Verify URL
    const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.token}`;
    request(verifyURL, (err, response, body) => {
      if (err) {
        reject(err);
      }
      // if not successful
      if (body.success !== undefined && !body.success) {
        if (err) {
          reject("failed");
        }
      }
      resolve(body);
    });
  });
};
