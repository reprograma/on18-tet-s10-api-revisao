const bancoDeDados = require("../models/bancoDeDados")

//GET para obter Drags por queru params, incluindo id

const obterDrags = async (request, response) => {

    const drags = await bancoDeDados("drag-race")
    if (drags.length === 0) return response.status(200).send([])

    const parametros = request.query
    console.log(parametros)

    // caso o usario não tenha passado parametros, retormamos tudo.
    if (Object.keys(parametros).length == 0) return response.status(200).send(drags)

    // a gente cria a lista que será filtrada, que pelo laço receberá os personagens filtrados
    const filtrado = []

    // ele vai passar por cada personagem presente no banco de dados
    for (const drag of drags) {
        const chaves = Object.keys(drag)

        // ele vai percorrer cada chave do personagem atual do laco
        for (const chave of chaves) {
            const dragDado = drag[chave].toString().toLowerCase()

            // aqui construimos o dado a partir da chave e transformamos em letras minusculas
            const buscaDado = parametros[chave] && parametros[chave].toLowerCase()
            console.log(dragDado, buscaDado)

            // validar se o dado da chave da drag atual corresponde ao parametro que foi recebido
            if (dragDado.includes(buscaDado)) {
                filtrado.push(drag)
            }
        }
    }

    if (filtrado.length === 0) {
        return response.status(404).send({
            message: "Nenhuma Drag encontrada."
        })
    }

    response.status(200).send(filtrado)
}

// POST para cadastrar nova drag
const cadastrarDrag = async(request, response) => {
try{
     {
    const drags = await bancoDeDados("drag-race")

// nomeDrag e idade são obrigários

// pega os dados que precisamos
const {
    nome, nomeDrag, idade, profissao, temporadaDragRaceQueGanhou
} = request.body

// regras de negocio
if (!nomeDrag || nomeDrag.trim() === "") {
    return response.status(400).send({message: `O nomeDrag é obrigatório!`})
}

if (isNaN(idade) || idade <= 0) {
    return response.status(400).send({ message: `A idade é obrigatória!`})
}

const nomeDragExiste = drags.some(drag => drag.nomeDrag === nomeDrag)

if (nomeDragExiste === true) {
    return response.status(409).send({ message: `O nomeDrag ${nomeDrag} já existe!`})
}

// construindo a drag
const novaDrag = {
    id: drags.length,
    nome, nomeDrag, idade, profissao, temporadaDragRaceQueGanhou
}

drags.push(novaDrag)

response.status(201).send({ message: `Nova Drag cadastrada com sucesso!` })


}}  catch (error){
    response.status(500).json({message: error.message})
}
}


// PUT para fazer update genérico para atualizar uma drag

const updateGenerico = async (request, response)=>{
    try {
        const drags = await bancoDeDados("drag-race")

        let idRequest = request.params.id
        let bodyRequest = request.body

        const dragEncontrada = drags.find(drag => drag.id == idRequest)

        if(dragEncontrada == undefined) throw new Error("Drag não encontrada.")

        bodyRequest.id = dragEncontrada.id

        let chaves = Object.keys(dragEncontrada)

        chaves.forEach((chave)=>{
            if(bodyRequest[chave] == undefined){
                dragEncontrada[chave] == dragEncontrada[chave]
            }else {
                dragEncontrada[chave] = bodyRequest[chave]
            }
        })

        response.status(200).json({"mensagem": "Drag atualizada.", dragEncontrada})

    } catch (error){
        response.status(500).json({message: error.message})
    }
}

// DELETE para deletar uma drag

const deletarDrag = async (request, response) => {
    try {
        const drags = await bancoDeDados("drag-race")

        let idRequest = request.params.id
        // let bodyRequest = request.body

        const dragEncontrada = drags.find(drag => drag.id == idRequest)

        if(dragEncontrada == undefined) throw new Error("Drag não encontrada.")

    //pegar o indice da Drag que será deletada

    const indice = drags.indexOf(dragEncontrada)

    //ARRAY.splice(INDICE, NUMERO DE ITENS Q QUEREMOS DELETAR)
    drags.splice(indice, 1)

    response.status(200).json({
        "mensagem": "Drag deletada com sucesso.",
        "drag-deletada": dragEncontrada
    })

} catch (error){
    response.status(500).json({message: error.message})
}}
    
module.exports = {
    obterDrags,
    cadastrarDrag,
    updateGenerico,
    deletarDrag
}