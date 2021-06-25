import { getCustomRepository } from "typeorm";
import { ComplimentRepositories } from "../repositories/ComplimentsRepositories";



class ListUserReceiverComplementsService {
    async execute(user_id: string) {
        const complimentsRepositories = await getCustomRepository(ComplimentRepositories);
        const compliments = await complimentsRepositories.find({
            where: {
                user_receiver: user_id
            },
            relations: ['userSender', 'userReceiver', 'tag']
        });

        return compliments;

    }




}

export { ListUserReceiverComplementsService }