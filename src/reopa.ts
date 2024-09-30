import { createServer } from 'node:http';
import type { IncomingMessage, ServerResponse } from 'node:http';
import type { HTTPMethod } from './types/httpMethod';

type RouteHandler = (req: IncomingMessage, res: ServerResponse) => void;

type Routes = {
  [method in string]: {
    [path: string]: RouteHandler;
  };
}

export class Reopa {
  private routes: Routes;

  constructor() {
    this.routes = {}
  }

  on(method: HTTPMethod, path: string, handler) {
    this.routes[method] = this.routes[method] || {}
    this.routes[method][path] = handler
  }

  listen(port, callback) {
    const server = createServer((req, res) => {
      const handler = this.routes[req.method][req.url]
      handler(req, res)
    })
    server.listen(port, callback)
  }
}