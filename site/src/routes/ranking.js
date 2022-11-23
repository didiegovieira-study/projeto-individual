var express = require("express");
var router = express.Router();

var rankingController = require("../controllers/rankingController");
/* 
router.get("/", function (req, res) {
    rankingController.testar(req, res);
});
 */
router.get("/ranking", function (req, res) {
    rankingController.ranking(req, res);
});

module.exports = router;