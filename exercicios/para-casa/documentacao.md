#### obrigátorios

- [ ] É necessário criar uma model( um arquivo json ) com 3 personagens cadastrados, contendo 4 propriedades. Fieto
- [ ] É necessário criar a função db e nela importar o JSON que foi modelado. feito
- [ ] Os endpoint deve ter como path(caminho) a sua escolha, por exemplo: `/anime` feito
- [ ] A Api deve ser capaz por meio de um endpoint de consulta encontar um personagem por ID feito
- [ ] A Api deve ser capaz por meio de um endpoint de consulta, que suporte query params (parametros de consulta), O mesmo deverá retornar todos os dados(personagens) caso não seja passada. Caso seja passado um parametro na query, deve retornar os dados(personagens) filtrados. Caso o resultado seja vazio(não encontrado), deve retornar um erro 404.
- [ ] A Api deve ser capaz de cadastrar um novo personagem, 2 campos precisam ser obrigátorios e válidados. Caso não sejam prenchidos, deverá retornar um erro 400 (bad request). O mesmo, deverá ser capaz de gerar um novo ID válido sequencial e númerico.
