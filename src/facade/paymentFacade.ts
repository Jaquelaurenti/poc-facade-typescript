import PaymentGateway from '../services/PaymentGateway';
import PaymentProcessor from '../services/PaymentProcessor';

class PaymentFacade {
  private paymentGateway: PaymentGateway;
  private paymentProcessor: PaymentProcessor;

  constructor() {
    this.paymentGateway = new PaymentGateway();
    this.paymentProcessor = new PaymentProcessor();
  }

  public processPayment(paymentInfo: any): boolean {
    const paymentResult = this.paymentGateway.processPayment(paymentInfo);

    if (paymentResult) {
      const paymentStatus = this.paymentProcessor.verifyPayment(paymentInfo);
      return paymentStatus;
    }

    return false;
  }
}

export default PaymentFacade;
