import { Request, Response } from 'express';
import { CreateUSerService } from '../service/CreateUserService';
class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, admin, password } = request.body;
        const createUSerService = new CreateUSerService();
        const user = await createUSerService.execute({ name, email, admin, password })
        return response.json(user);



    }
}

export { CreateUserController }