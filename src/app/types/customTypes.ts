import { IUser } from './user.interface';
import { IRoles } from '.';

export class User implements IUser {
    Id: string;
    Name: string;
    Group;
    role;
    email: string;
}
export class Roles implements IRoles {

}