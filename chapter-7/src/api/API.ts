import { UserID } from "../types";
import { User } from "../User";

export abstract class API {
    protected loggedInUserId : UserID | null;
    protected users: User[];

    constructor(users: User[]) {
        this.users = users;
        this.loggedInUserId = users.length === 0 ? null : users[0].getUserId();
    }

}