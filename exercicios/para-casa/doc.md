## Documentação

## Reprograma Geek - Drag Race

- [GET] "/drag-race/drags" 
    - 200: retornar todas as Drags
    - query: id
    - 200: retorna a Drag com id selecionado
    - query: key = " " 
    - 404: Nenhuma Drag encontrada                              

- [POST]"/drag-race/drags" 
    - 201: cadastra uma nova Drag
    - 400: faltando requisitos obrigatórios
    - 409: O nomeDrag ${nomeDrag} já existe!                          

- [PUT]"/drag-race/drags/update/:id"
    - parametro id
    - query: key = " "
    - 200: retorna a Drag com id selecionado com campo escolhido editado
    - 500: algo errado aconteceu

- [DELETE]"/drag-race/drags/deletar/:id"
    - parametro id
    - 200: retorna a Drag com id selecionado que foi deletada
    - 500: algo errado aconteceu