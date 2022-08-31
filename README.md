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

- [x] Deve ser possível criar uma conta;
- [x] Deve ser possível buscar o extrato bancário do cliente;
- [x] Deve ser possível realizar um depósito;
- [x] Deve ser possível realizar um saque;
- [x] Deve ser possível buscar o extrato bancário do cliente por data;
- [x] Deve ser possível atualizar dados da conta do cliente;
- [x] Deve ser possível obter dados da conta do cliente;
- [x] Deve ser possível deletar uma conta;

### Regras de Negócio:

- [x] Não deve ser possível cadastrar um conta com CPF já existente;
- [x] Não deve ser possível fazer depósito em uma conta não existente;
- [x] Não deve ser possível buscar extrato em uma conta não existente ;
- [x] Não deve ser possível fazer saque em uma conta não existente;
- [x] Não deve ser possível excluir uma conta não existente;
- [x] Não deve ser possível fazer saque quando o saldo for insuficiente;
