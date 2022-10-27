[GET] "/cartoon/hora-de-aventura/personagens"
200: retorna todos os personagens
200: retorna um array vazio
404: Not Found (nenhum resultado para essa busca)

[GET] "/cartoon/hora-de-aventura/personagens/:id"
200: retorna personagem encontrado pelo id
404: bad request (nenhum personagem encontrado para esse id)

[POST] "/cartoon/hora-de-aventura/personagens"
201: cadastra um novo personagem
400: Bad Request (campo brigatório)
409: conflito (nome já existe)

