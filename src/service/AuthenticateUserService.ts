import { compare } from "bcrypt";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";
import { sign } from 'jsonwebtoken';
interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const userRepositories = getCustomRepository(UsersRepositories);
        const user = await userRepositories.findOne({
            email: email
        });

        if (!user) {

            throw new Error('Email/Password incorret')
        }

        const passwordMatch = await compare(password, user.password)
        if (!passwordMatch) {
            throw new Error('Email/Password incorret')
        }
        const token = sign({
            email: user.email
        }, process.env.KEY_SECRET || '',
            {
                subject: user.id,
                expiresIn: '1d'
            });
        return token;
    }
}

export { AuthenticateUserService }