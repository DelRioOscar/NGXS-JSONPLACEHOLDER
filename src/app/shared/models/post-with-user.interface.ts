import { User } from '../interfaces/user.interface';

export class PostWithUserModel {
    user: User;
    userId: number;
    id: number;
    title: string;
    body: string;
}
