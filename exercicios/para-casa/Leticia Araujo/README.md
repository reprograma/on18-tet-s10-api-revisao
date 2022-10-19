# Exercício de Casa 🏠 

## Reprograma Geek
Para continuar o nosso { Reprograma Geek } vamos desenvolver mais uma API para um novo dominio( animes, cartoon, desenho... - nesse contexto ). Precisamos fazer um CRUD e nossa API precisa ser RESTful
---

## Regras de negocio

### status code

#### obrigátorios
- [ ] Ao criar deve retornar o status 201
- [ ] Ao fazer qualquer leitura deve retornar o status 200

#### opcional / recomendação
- [ ] Ao deletar deve retornar o status 204 ==> OK!
- [ ] Ao editar deve retornar o status 204 ==> OK!

### endpoints

#### obrigátorios
- [ ] É necessário criar uma model( um arquivo json ) com 3 personagens cadastrados, contendo 4 propriedades. ==> OK!
- [ ] É necessário criar a função db e nela importar o JSON que foi modelado. ==> OK!
- [ ] Os endpoint deve ter como path(caminho) a sua escolha, por exemplo: `/anime` ==> OK!
- [ ] A Api deve ser capaz por meio de um endpoint de consulta encontar um personagem por ID ==> OK!
- [ ] A Api deve ser capaz por meio de um endpoint de consulta, que suporte query params (parametros de consulta), O mesmo deverá retornar todos os dados(personagens) caso não seja passada. Caso seja passado um parametro na query, deve retornar os dados(personagens) filtrados. Caso o resultado seja vazio(não encontrado), deve retornar um erro 404. ==> OK!
- [ ] A Api deve ser capaz de cadastrar um novo personagem, 2 campos precisam ser obrigátorios e válidados. Caso não sejam prenchidos, deverá retornar um erro 400 (bad request). O mesmo, deverá ser capaz de gerar um novo ID válido sequencial e númerico.
==> OK!

#### opcionais

- [ ] A Api deverá ser capaz de atualizar um personagem ==> OK!
- [ ] A Api deverá ser capaz de deletar um personagem ==> OK!



Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [ ] Fiz o fork do repositório.
- [ ] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [ ] Resolvi o exercício.
- [ ] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushei os commits na minha branch (`git push origin nome-da-branch`)
- [ ] Criei um Pull Request seguindo as orientaçoes que estao nesse [documento](https://github.com/mflilian/repo-example/blob/main/exercicios/para-casa/instrucoes-pull-request.md).
