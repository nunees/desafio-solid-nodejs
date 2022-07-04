import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const user_id = request.headers.user_id as string;
      const all = this.listAllUsersUseCase.execute({ user_id });
      return response.json(all);
    } catch (e) {
      return response.status(400).json({ error: e });
    }
  }
}

export { ListAllUsersController };
