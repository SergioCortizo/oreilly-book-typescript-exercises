import { None } from "../option/None";
import { Option } from "../option/Option";
import { Some } from "../option/Some";
import { UserID } from "../types";
import { User } from "../User";
import { API } from "./API";

export class APIUsingOption extends API {
    findUser(userId: UserID): Some<User[]> | None {

        const user = this.users.find(user => user.getUserId() === userId);

        if(user === undefined)
            return new None;

        return new Some([user]);
            
    }

    setLoggedInUserId(userId: UserID): void {
        const user = this.findUser(userId)
                     .flatMap(user => Option(user[0]))
                     .getOrElse(null);

        if (user != null) this.loggedInUserId = userId;
    }

    getLoggedInUserID(): UserID | null {

        if (!this.loggedInUserId) return null;

        return this.loggedInUserId;

    }

    getFriendIDs(userID: UserID): UserID[] | "User not found." {
        const friends = this.findUser(userID)
                        .flatMap(user => Option(user[0]))
                        .flatMap(user => Option(user.getFriendIDs()))
                        .getOrElse("User not found.");
        
        return friends;
    }

    getUserName(userID: UserID): string {
        const user = this.findUser(userID)
                    .flatMap(user => Option(user[0]))
                    .flatMap(user => Option(user.getUsername()))
                    .getOrElse("User not found.");

        return user;
    }
}