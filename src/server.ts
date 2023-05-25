import express, { Express } from 'express';
import paymentRoutes from './routes/paymentRoutes';

class Server {
  private app: Express;
  private port: number;

  constructor() {
    this.app = express();
    this.port = 3000;
    this.configureMiddlewares();
    this.configureRoutes();
  }

  private configureMiddlewares(): void {
    this.app.use(express.json());
  }

  private configureRoutes(): void {
    this.app.use('/api', paymentRoutes);
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Servidor rodando na porta ${this.port}`);
    });
  }
}

const server = new Server();
server.start();
