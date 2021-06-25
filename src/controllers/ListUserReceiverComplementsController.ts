import { Request, Response } from "express";
import { ListUserReceiverComplementsService } from "../service/ListUserReceiverComplementsService";


class ListUserReceiverComplementsController {
    async handle(request: Request, response: Response) {

        const { user_id } = request;
        const listUserReceiverComplementsService = new ListUserReceiverComplementsService();
        const compliments = await listUserReceiverComplementsService.execute(user_id);

        return response.json(compliments);


    }
}

export { ListUserReceiverComplementsController }