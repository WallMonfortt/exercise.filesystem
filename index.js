//Imports de los módulos
const fs = require("fs/promises");
const path = require("path");

const usersPath = path.resolve("users.json");
const helloPath = path.resolve("hello.txt");

const readFileUsers = () => {
    //Imprimir en consola el arreglo de usuarios
    (async () =>{
        try {
            const data = await fs.readFile(usersPath,"utf8");
            return data;
        }catch (error) {
            console.log(error);
        }
    })();

};

const writeHelloWorld = () => {
    //Escribir hello world! en el archivo hello.txt
    fs.writeFile(helloPath, "hello world!", (error) =>{
        if (error) {
            console.log("No se pudo escribir en el archivo");
        }
    })

};

const addUser = (username) => {
    //Agregar un usuario en la lista users.json
    (async () =>{
        let users = [];
        try {
            data = await fs.readFile(usersPath,"utf8");
            data = data.replace(/[\[\]'"]+/g,'').split(",");
            data.map(value=> users.push(value));
            users.push(username);
            users = JSON.parse(users)
            fs.writeFile(usersPath, users, (error) =>{
                if (error) {
                    console.log("No se pudo escribir en el archivo");
                }
            })
            console.log(users);
            return users;
        }catch (error) {
            console.log(error);
            return error;
        }
    })();

};

// addUser("Academlo");

//No hace falta ejecutar las funciones

module.exports = {
    readFileUsers,
    writeHelloWorld,
    addUser,
};
