import { API } from "./API";
import { UserID } from "../types";
import { User } from "../User";
import { UserNotFoundException } from "../exceptions/UserNotFoundException";
import { UserNotLoggedIn } from "../exceptions/UserNotLoggedIn";

export class APIReturningExceptions extends API {

    findUser(userId: UserID): User | UserNotFoundException {

        const user = this.users.find(user => user.getUserId() === userId);

        if(user === undefined)
            return new UserNotFoundException("User with ID " + userId + " not found.");

        return user;
            
    }

    setLoggedInUserId(userId: UserID): void | UserNotFoundException {
        if (this.findUser(userId) === undefined) 
            return new UserNotFoundException("User with ID " + userId + " not found.");
        
        this.loggedInUserId = userId;
    }

    getLoggedInUserID(): UserID | UserNotLoggedIn {

        if (!this.loggedInUserId)
            return new UserNotLoggedIn("User not logged in.")

        return this.loggedInUserId;

    }

    getFriendIDs(userID: UserID): UserID[] | UserNotFoundException {
        const user = this.findUser(userID);

        return user instanceof UserNotFoundException ? user : user.getFriendIDs();
    }

    getUserName(userID: UserID): string | UserNotFoundException {
        const user = this.findUser(userID);

        return user instanceof UserNotFoundException ? user : user.getUsername();
    }

}