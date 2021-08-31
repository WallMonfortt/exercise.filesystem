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

const addUser = async(username) => {
    //Agregar un usuario en la lista users.json
    try {
        const data = await fs.readFile(usersPath,"utf8");
        const users = JSON.parse(data);//convertir de JSON a object
        users.push(username);
        await fs.writeFile(usersPath, JSON.stringify(users));
    }catch (error) {
        console.log(error);
    }

};

//No hace falta ejecutar las funciones

module.exports = {
    readFileUsers,
    writeHelloWorld,
    addUser,
};
