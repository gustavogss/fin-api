const { response } = require("express");
const StatusCode = require("http-status-codes");
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
app.use(express.json());
const customers = [];

function verifyIfExistsAccountCPF(req, res, next) {
  const { cpf } = req.headers;
  const customer = customers.find((customer) => customer.cpf === cpf);
  if (!customer) {
    return res.status(StatusCode.BAD_REQUEST).json({ error: "Customer not found" });
  }
  req.customer = customer;
  return next();
}

function getBalance(statement){
  const balance = statement.reduce((acc, operation)=>{
    if(operation.type === 'credit'){
      return acc + operation.amount;
    } else{
      return acc - operation.amount;
    }
  }, 0);
  return balance;
}

app.post("/account", (req, res) => {
  const { cpf, name } = req.body;
  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );
  if (customerAlreadyExists) {
    return res.status(StatusCode.BAD_REQUEST).json({ error: "Customer already exists" });
  }
  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: [],
  });
  return res.status(StatusCode.CREATED).send();
});

app.get("/statement", verifyIfExistsAccountCPF, (req, res) => {
 const {customer} = req;
  return res.json(customer.statement);
});

app.post("/deposit", verifyIfExistsAccountCPF, (req, res) => {
  const { description, amount } = req.body;
  const { customer } = req;
  const statementOperation = {
    description,
    amount,
    created_at: new Date(),
    type: "credit",
  };
  customer.statement.push(statementOperation);
  return res.status(StatusCode.CREATED).send();
});

app.post("/withdrawn", verifyIfExistsAccountCPF, (req, res) =>{
const {amount} = req.body;
const {customer} = req;
const balance = getBalance(customer.statement);

if(balance < amount) {
  return res.status(StatusCode.BAD_REQUEST).json({error: 'Insufficient funds!'});
}
const statementOperation = {
  amount,
  created_at: new Date(),
  type: "debit",
}
customer.statement.push(statementOperation);
return response.status(StatusCode.CREATED).send();
});

app.get("/statement/date", verifyIfExistsAccountCPF, (req, res) => {
  const {customer} = req;
  const {date} = req.params;
  const dateFormat = new Date(date + " 00:00");
  const statement = customer.statement.filter((statement)=> statement.created_at.toDateString() === new Date(dateFormat).toDateString());
   return res.json(statement);
 });

 app.put("/account", verifyIfExistsAccountCPF, (req, res) => {
  const {name} = req.body;
  const {customer} = req;

  customer.name = name;
  return res.status(StatusCode.CREATED).send();

 });

 app.get("/account", verifyIfExistsAccountCPF, (req, res) => {
 const {customer} = req;
 return res.json(customer);
 });

app.delete("/account", verifyIfExistsAccountCPF, (req, res) => {
  const {customer} = req;
  customers.splice(customer, 1);
  return res.status(StatusCode.OK).json(customers);
});

app.get("/balance/create", (req, res) => {
  const {customer} = req;
  const balance = getBalance(customer.statement);
  return response.json(balance);
});

 app.listen(3333);


