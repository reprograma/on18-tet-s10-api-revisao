- ANIMES

- [GET] "/one-piece/personagens" 
    - 200: retornar todos os personagens
    - 404: Nenhum dado encontrado

- [GET] "/one-piece/personagens/:id" 
    - parametro: id
    - 200: retorna o filme com id selecionado
    - 404: Nenhum dado encontrado

- [GET] "/one-piece/personagens "
    - query: generp = " "
    - 200: retorna o personagem com nome selecionado
    - 404: Nenhum dado encontrado

- [POST]"/one-piece/personagens" 
    - 400: O nome é obrigatório
    - 400: O idade é obrigatória
    - 409: O nome ${nome} já existe 
    - 201: Cadastrar novo personagem

