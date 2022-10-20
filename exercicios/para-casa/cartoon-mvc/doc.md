 [GET] "/cartoons[?chave=valor]"
    * Retornar todos os cartoons. Caso dado um query param, retorna todos os que se conformam com as queries fornecidas
    * Retorna erro 404 caso não haja nenhum cartoon no banco ou nenhum com o critério especificado pelos params
    * Retorna erro 500 caso haja um erro inesperado
- [GET] "/cartoons/:id/pequisabyId"
    * Pesquisa um cartoon por id 
    * Retorna erro 404 caso não haja cartoon com o id pesquisado
    * Retorna erro 500 caso haja um erro inesperado
- [POST] "/cartoons/cadastrar"
    * Cadastra um novo cartoon 
    * Retorna erro 500 caso haja um erro inesperado
- [PUT]/cartoons/:id/update
    * Atualiza um cartoon por inteiro
    * Retorna erro 404 caso não haja cartoon com o id pesquisado
    * Retorna erro 500 caso haja um erro inesperado
- [DELETE]/cartoons/:id/deletar
    * Deleta um cartoon
    * Retorna erro 404 caso não haja cartoon com o id pesquisado
    * Retorna erro 500 caso haja um erro inesperado
