import { UsersRepositories } from "../repositories/UserRepositories"
import { getCustomRepository } from 'typeorm';
interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean
}

class CreateUSerService {
    async execute({ name, email, admin }: IUserRequest) {
        const userRepository = getCustomRepository(UsersRepositories);
        if (!email) {
            throw new Error('Email incorrect');

        }
        const userAlreadyExists = await userRepository.findOne({
            email: email
        })

        if (userAlreadyExists) {
            throw new Error('User already exists');
        }
        const user = userRepository.create({
            name,
            email,
            admin
        });
        await userRepository.save(user)
        return user;
    }
}
export { CreateUSerService }