const mongoose = require("mongoose");

const user = "admin";
const pass = "123456abc";
const database = "todo_sample";
const serverName = "cluster0.tvppy.mongodb.net";

module.exports = {
    init: () => {
        mongoose
            .connect(
                `mongodb+srv://${user}:${pass}@${serverName}/${database}?retryWrites=true&w=majority`,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    //useFindAndModify: false,
                    //useCreateIndex: true,
                }
            )
            .then((res) => console.log(`conexao com sucesso:${res}`))
            .catch((err) => console.log(`error: ${err}`));
    },

};
