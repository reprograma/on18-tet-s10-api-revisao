dbConfig = require("../models/dbConfig");

async function dbConnect() {
    return await dbConfig.bancoDeDados("cartoon");
}

const getCartoon = async(request, response) => {
    try {
        let cartoons = await dbConnect();

        const queryParams = Object.keys(request.query);
        const cartoonKeys = Object.keys(cartoons[0]);
        for (const param of queryParams) {
            
            if( cartoonKeys.includes(param) ) {
                cartoons = cartoons.filter( c => c[param] == request.query[param] );
            }
        }

        if(!cartoons.length) {
            return response.status(404).json({message: "Não há cartoons que corresponda a sua pesquisa"});
        }
        
        return response.status(200).send(cartoons);
    } catch (error) {
        response.status(500).json({message: error.message});
    }
}

const getCartoonById= async(request, response) => {
    try {
        const cartoons = await dbConnect();
        const id = parseInt(request.params.id);
        const cartoon = cartoons.find( cartoon => cartoon.id == id );

        if(!cartoon) {
            return response.status(404).json({message: "cartoon não encontrado"});
        }

        return response.status(200).send(cartoon);
    } catch (error) {
        response.status(500).json({message: error.message});
    }
}


const postCartoon = async(request, response) => {
    try {
        const bodyRequest = request.body
        const cartoon = await dbConnect();

        if( !bodyRequest.nome ){
            return response.status(400).send({
                mensagem: "É necessário especificar o nome do personagem dos Simpons"
            });    
        }

        let idade = 0;
        if( !Object.keys(bodyRequest).includes("idade") ){
            return response.status(400).send({
                mensagem: "É necessário especificar a idade do personagem dos Simpons"
            });    
        }

        idade = parseInt(bodyRequest.idade);
        if( idade < 0  ) {
            throw new Error("A idade deve ser maior ou igual a 0");
        } 

        if( isNaN(idade)) {
            return response.status(400).json({message: "O campo idade está especificado incorretamente"});
        }

        const novoCartoon = {
            id: cartoon.length + 1,
            nome: bodyRequest.nome,
            idade: idade,
            sexo: bodyRequest.sexo || "-",
            descricao: bodyRequest.descricao || ""
        }

        cartoon.push(novoCartoon);
        return response.status(201).send({
            mensagem: "Cartoon cadastrado com sucesso",
            novoFilme: novoCartoon
        });
    } catch (error) {
        response.status(500).json({message: error.message});
    }
}

const putCartoon = async(request, response) => {
    try {
        const bodyRequest = request.body
        const cartoons = await dbConnect();
        const id = request.params.id;

        const cartoon = cartoons.find( filme => filme.id == id );

        if(!cartoon) {
            return response.status(404).json({message: "Cartoon não encontrado"});
        }

        delete bodyRequest.id;

        const idx = cartoons.indexOf(cartoon);
        cartoons[idx] = bodyRequest;

        return response.status(204).send();
    } catch (error) {
        response.status(500).json({message: error.message});
    }
}

const deleteCartoon = async(request, response) => {
    try {
        const bodyRequest = request.body
        const cartoons = await dbConnect();
        const id = request.params.id;

        const cartoon = cartoons.find( cartoon => cartoon.id == id );

        if(!cartoon) {
            return response.status(404).json({message: "filme não encontrado"});
        }

        const indice = cartoons.indexOf(cartoon);
        cartoons.splice(indice, 1);

        return response.status(204).send();
    } catch (error) {
        response.status(500).json({message: error.message});
    }
}

module.exports = {
    getCartoon,
    getCartoonById,
    postCartoon,
    putCartoon,
    deleteCartoon
}