const express = require("express");
const router = express.Router();    

router.get("/", (req, res) => {
    console.log("Hello world");
    res.send("API TO-DO | Lista de Tarefas | versão 1.0 - by Ricardo Junior <br> e-mail: ricardojuniorti@gmail.com");
});

module.exports = router;