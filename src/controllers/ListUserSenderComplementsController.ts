import { Request, Response } from "express";
import { ListUserSenderComplementsService } from "../service/ListUserSendComplementsService";


class ListUserSenderComplementsController {
    async handle(request: Request, response: Response) {

        const { user_id } = request;
        const listUserSenderrComplementsService = new ListUserSenderComplementsService()
        const compliments = await listUserSenderrComplementsService.execute(user_id);

        return response.json(compliments);


    }
}

export { ListUserSenderComplementsController }