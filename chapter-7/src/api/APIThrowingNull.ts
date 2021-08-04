import { API } from "./API";
import { UserID } from "../types";
import { User } from "../User";

export class APIThrowingNull extends API {

    findUser(userId: UserID): User | undefined {
        const user = this.users.find(user => user.getUserId() === userId);

        return user;
    }

    setLoggedInUserId(userId: UserID): void {
        if (this.findUser(userId) === undefined) this.loggedInUserId = userId;
    }

    getLoggedInUserID(): UserID | null {
        return this.loggedInUserId;
    }

    getFriendIDs(userID: UserID): UserID[] | null {
        const user: User | undefined = this.findUser(userID);

        return user === undefined ? null : user.getFriendIDs();
    }

    getUserName(userID: UserID): string | null {
        const user: User | undefined = this.findUser(userID);

        return user === undefined ? null : user.getUsername();
    }

}