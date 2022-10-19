
[GET] - /anime/sailor-moon/personagens
    * Busca o catálogo inteiro de personagens

[GET] - /anime/sailor-moon/busca/:id
    * Encontra um personagem pelo ID

[GET] - /anime/sailor-moon/busca
    * Busca por parâmetro via query
    * Se adicionado parâmetro, trazer informação filtrada
    * Se não adicionar parâmetro, trazer lista completa de personagens 
    * caso o resultado seja vazio, retorna status 404

[POST] - /anime/sailor-moon/novo-personagem
    * cadastro de novo personagem
    * mínimo de dois campos obrigatórios 
    * Inclui validação de dados obrigatórios
    * Quando campos obrigatórios não forem inseridos, retorna status 400
    * Novo personagem possui novo id numérico e sequencial

[PUT] - /anime/atualiza-personagem/:id
    * Atualiza qualquer item/parâmetro do personagem

[DELETE] - /anime/deleta-personagem/:id
    * Deleta um personagem escolhido