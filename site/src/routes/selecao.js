var express = require("express");
var router = express.Router();

var selecaoController = require("../controllers/selecaoController");

router.get("/", function (req, res) {
    selecaoController.testar(req, res);
});

router.get("/selecao", function (req, res) {
    selecaoController.selecao(req, res);
});


module.exports = router;