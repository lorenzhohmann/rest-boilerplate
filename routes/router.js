const express = require("express");
const router = express.Router();

/**
 * HTTP Status Codes: https://developer.mozilla.org/de/docs/Web/HTTP/Status
 */

// log requests
router.use("*", (req, res, next) => {
  console.log(`\x1b[32m${req.method}\x1b[35m ${req.baseUrl}`);
  next();
});

// add single router files
const routeFiles = ["user"];
routeFiles.forEach((route) => {
  try {
    let routeFile = require(`./${route}.js`);
    router.use(`/${route}`, routeFile);
  } catch (err) {
    console.log(`\u001b[31m[ERR] Router file ${route}.js does not exists.`);
  }
});

module.exports = router;
