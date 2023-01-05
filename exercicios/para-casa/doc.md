[x] [GET] - /irmao-do-jorel/personagens
   * trazer todos os personagens do anime
   

[x] [GET] - /irmao-do-jorel/pesquisar/:id
   * Encontra um personagem pelo ID

[] [GET] - /anime/irmao-do-jorel/pesquisar
    * Busca por parâmetro via query
    * Se adicionados, trazendo informações
    * Se não adicionar parâmetros, trazer lista completa de personagens
    * retorna status 404 em caso de erro

[x] [POST] - /irmao-do-jorel/cadastrar-personagem
    * cadastro de novo personagem
    * Quando campos obrigatórios não foram inseridos, retorna status 400

[x] [PUT] - /anime/atualiza-personagem/:id
    * Atualizar qualquer item/parâmetro do personagem

[x] [EXCLUIR] - /anime/deleta-personagem/:id
    *Deleta um personagem a partir do id