import { UsersRepositories } from "../repositories/UserRepositories"
import { getCustomRepository } from 'typeorm';
import { hash } from "bcrypt";
interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string
}

class CreateUSerService {
    async execute({ name, email, admin, password }: IUserRequest) {
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

        const passwordHash = await hash(password, 8);
        const user = userRepository.create({
            name,
            email,
            admin,
            password: passwordHash
        });
        await userRepository.save(user)
        return user;
    }
}
export { CreateUSerService }