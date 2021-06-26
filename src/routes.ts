import { Response, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from './middlewares/ensureAdmin';
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserReceiverComplementsController } from "./controllers/ListUserReceiverComplementsController";
import { ListUserSenderComplementsController } from "./controllers/ListUserSenderComplementsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUsersController";
const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiverController = new ListUserReceiverComplementsController();
const listUserSenderController = new ListUserSenderComplementsController();
const listTagsController = new ListTagsController();
const listUserController = new ListUserController();

router.post('/users', createUserController.handle);
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/complements', ensureAuthenticated, createComplimentController.handle);
router.get('/users/complements/send', ensureAuthenticated, listUserSenderController.handle);
router.get('/users/complements/receiver', ensureAuthenticated, listUserReceiverController.handle);
router.get('/tags', ensureAuthenticated, listTagsController.handle);
router.get('/', (response: Response) => {
    return response.json('Welcome to API')
});

router.get('/users', ensureAuthenticated, listUserController.handle);


export { router };