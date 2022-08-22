# Projeto :rocket:

API REST de Finanças

## Tecnologias e Ferramentas utilizadas :robot:

- [VsCode](https://code.visualstudio.com/);
- [Insominia](https://insomnia.rest/);
- [Nodejs](https://nodejs.org/en/);
- [Express](https://www.npmjs.com/package/express);
- [Nodemon](https://www.npmjs.com/package/nodemon);
- [UUID](https://www.npmjs.com/package/uuid);

### Requisitos:

- [ ] Deve ser possível criar uma conta;
- [ ] Deve ser possível buscar o extrato bancário do cliente;
- [ ] Deve ser possível realizar um depósito;
- [ ] Deve ser possível realizar um saque;
- [ ] Deve ser possível buscar o extrato bancário do cliente por data;
- [ ] Deve ser possível atualizar dados da conta do cliente;
- [ ] Deve ser possível obter dados da conta do cliente;
- [ ] Deve ser possível deletar uma conta;

### Regras de Negócio:

- [ ] Não deve ser possível cadastrar um conta com CPF já existente;
- [ ] Não deve ser possível fazer depósito em uma conta não existente;
- [ ] Não deve ser possível buscar extrato em uma conta não existente ;
- [ ] Não deve ser possível fazer saque em uma conta não existente;
- [ ] Não deve ser possível excluir uma conta não existente;
- [ ] Não deve ser possível fazer saque quando o saldo for insuficiente;
