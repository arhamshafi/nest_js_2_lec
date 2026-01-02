import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<any>;
    addUser(Body: any): Promise<string>;
    remove(id: String): Promise<string>;
}
