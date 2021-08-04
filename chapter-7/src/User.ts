import { UserID } from "./types";

export class User {
    private userId: UserID;
    private username: string;
    private friendIDs: UserID[];

    constructor(userId: UserID, username: string, friendIDs: UserID[]) {
        this.userId = userId;
        this.username= username;
        this.friendIDs= friendIDs;
    }

    getUserId() : UserID {
        return this.userId;
    }

    getUsername() : string {
        return this.username;
    }

    getFriendIDs() : UserID[] {
        return this.friendIDs;
    }
}