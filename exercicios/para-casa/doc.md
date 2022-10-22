## Regras de negocio

### status code

#### obrigátorios

- [POST] Ao criar deve retornar o status 201
- [GET] Ao fazer qualquer leitura deve retornar o status 200

#### opcional / recomendação

- [DELETE] Ao deletar deve retornar o status 204
- [PATCH] Ao editar deve retornar o status 204
- [PUT] PUT que aceita mais de uma atualização

### endpoints

#### obrigátorios

- [ok] É necessário criar uma model( um arquivo json ) com 3 personagens cadastrados, contendo 4 propriedades.
- [ok] É necessário criar a função db e nela importar o JSON que foi modelado.
- [ok] Os endpoint deve ter como path(caminho) a sua escolha, por exemplo: `/anime`
- [ok] A Api deve ser capaz por meio de um endpoint de consulta encontar um personagem por ID
- [ok] A Api deve ser capaz por meio de um endpoint de consulta, que suporte query params (parametros de consulta), O mesmo deverá retornar todos os dados(personagens) caso não seja passada. Caso seja passado um parametro na query, deve retornar os dados(personagens) filtrados. Caso o resultado seja vazio(não encontrado), deve retornar um erro 404.
- [ok] A Api deve ser capaz de cadastrar um novo personagem, 2 campos precisam ser obrigátorios e válidados. Caso não sejam prenchidos, deverá retornar um erro 400 (bad request). O mesmo, deverá ser capaz de gerar um novo ID válido sequencial e númerico.

#### opcionais

- [ok] A Api deverá ser capaz de atualizar um personagem
- [ok] A Api deverá ser capaz de deletar um personagem
