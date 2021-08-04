import { API } from "./API";
import { UserID } from "../types";
import { User } from "../User";
import { UserNotFoundException } from "../exceptions/UserNotFoundException";
import { UserNotLoggedIn } from "../exceptions/UserNotLoggedIn";

export class APIThrowingExceptions extends API {

    findUser(userId: UserID): User {

        const user = this.users.find(user => user.getUserId() === userId);

        if(user === undefined)
            throw new UserNotFoundException("User with ID " + userId + " not found.");

        return user;
            
    }

    setLoggedInUserId(userId: UserID): void {
        if (this.findUser(userId) === undefined) 
            throw new UserNotFoundException("User with ID " + userId + " not found.");
        
        this.loggedInUserId = userId;
    }

    getLoggedInUserID(): UserID {

        if (!this.loggedInUserId)
            throw new UserNotLoggedIn("User not logged in.")

        return this.loggedInUserId;

    }

    getFriendIDs(userID: UserID): UserID[] {
        const user = this.findUser(userID);

        return user.getFriendIDs();
    }

    getUserName(userID: UserID): string {
        const user = this.findUser(userID);

        return user.getUsername();
    }
}