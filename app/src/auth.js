import api from "./Api";

export default function autenticar() {
    
    api.post("/login").then(
        (res) => {
            console.log(res)
            // setNomeUsuario(res.data)
            // const autenticado = true;
    }).catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    });

    const autenticado = true;
    
    
    return autenticado;
}