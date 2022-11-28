var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");
/* 
router.get("/", function (req, res) {
    rankingController.testar(req, res);
});
 */
router.put("/update", function (req, res) {
    quizController.quizCadastrar(req, res);
});

router.get("/quizListar", function (req, res) {
    quizController.quizListar(req, res);
});

module.exports = router;