import { IUser } from './user.interface';

export interface IBook {
    Id: number;
    title: string;
    subTitle?: string;
    summary?: string;
    owner: string;
    isAvailable: boolean;
    assignee: string;
    author: string;

}

