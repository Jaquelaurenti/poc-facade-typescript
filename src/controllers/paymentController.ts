import { Request, Response } from 'express';
import PaymentFacade from '../facade/paymentFacade';

class PaymentController {
  public processPayment(req: Request, res: Response): void {
    const paymentInfo = req.body;

    const paymentFacade = new PaymentFacade();
    const paymentStatus = paymentFacade.processPayment(paymentInfo);

    res.json({ status: paymentStatus });
  }
}

export default new PaymentController();
