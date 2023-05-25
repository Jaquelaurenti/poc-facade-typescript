class PaymentGateway {
  public processPayment(paymentInfo: any): boolean {
    // Lógica para processar o pagamento com o gateway externo
    console.log('Processando pagamento com o gateway externo:', paymentInfo);
    return true;
  }
}

export default PaymentGateway;
