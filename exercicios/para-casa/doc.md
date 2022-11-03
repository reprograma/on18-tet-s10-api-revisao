## Documentação da API 


- [GET] "/animes/fullmetal-alchemist/personagens"
 - 200: ok
 - 200: para caso nenhum parametro seja passado, o retorno será a lista de personagens
 - 404: para quando o parametro pessado não foi encontrado
 
- [POST] "/animes/fullmetal-alchemist/personagens/cadastrar"
 - 400: erro para a não inclusão do nome na request
 - 400: erro para a não inclusão da idade
 - 409: nome já existe
 - 201: personagem cadastrado com sucesso

- [PUT] "/animes/fullmetal-alchemist/personagens/atualizar/:id"
- 204: não retorna nenhuma mensagem em específico

- [GET] "animes/fullmetal-alchemist/personagens/consultar/:id"
 - 404: erro para quando o id pesquisado não foi encontrado
 - 200: erro para quando o id pesquisado foi encontrado


- [DELETE] "animes/fullmetal-alchemist/personagens/deletar/:id
 - 404: erro para quando o id pesquisado não foi encontrado
 - 204: não retorna nenhuma mensagem em específico



