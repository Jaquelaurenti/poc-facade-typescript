
# poc-facade-typescript

  

Neste exemplo, criaremos uma fachada para um sistema de pagamento fictício que encapsula a complexidade de várias classes e fornece uma interface simplificada para os clientes.

  

Vamos criar três classes: PaymentGateway, PaymentProcessor e PaymentFacade.

  

- O PaymentGateway representa um gateway de pagamento externo

- O PaymentProcessor lida com o processamento de pagamentos

- O PaymentFacade é a fachada que encapsula essas classes.

  

O PaymentGateway que representa um gateway de pagamento externo. O PaymentProcessor lida com a verificação do status do pagamento. A classe PaymentFacade é a fachada que encapsula essas classes e fornece um método processPayment simplificado para os clientes.

  

A classe PaymentFacade é a fachada que encapsula as classes PaymentGateway e PaymentProcessor. Ela fornece o método processPayment para simplificar o processamento de pagamentos.

  

A classe PaymentGateway representa um gateway de pagamento externo e possui o método processPayment para processar o pagamento com o gateway externo.

  

A classe PaymentProcessor lida com a verificação do status do pagamento e possui o método verifyPayment.

  

Por fim, no PaymentController, criamos uma instância da PaymentFacade e chamamos o método processPayment para lidar com a lógica de processamento de pagamento e obter o status do pagamento.




## RODANDO A APLICAÇÃO
```
npm install
```
Subindo a aplicação
```
npx ts-node src/server.ts
```
Fazer uma requisição para a rota: http://localhost:3000/api/payment 
Com o payload: 
```
{

"amount": 100,

"currency": "USD",

"cardNumber": "1234567890",

"expiryDate": "12/23",

"cvv": "123"

}
```

O resultado deverá ser:
```
{

"status": true

}
```

Mas no console log analisar a mensagem abaixo e veja que passamos pelo:
PaymentGateway e PaymentProcessor
```
Processando pagamento com o gateway externo: {
  amount: 100,
  currency: 'USD',
  cardNumber: '1234567890',
  expiryDate: '12/23',
  cvv: '123'
}
Verificando pagamento: {
  amount: 100,
  currency: 'USD',
  cardNumber: '1234567890',
  expiryDate: '12/23',
  cvv: '123'
}
```