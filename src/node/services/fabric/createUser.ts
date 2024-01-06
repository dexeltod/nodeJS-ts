import User from "../../model/user.js";
import {IUserRequest} from "../../interfaces/IUserRequest.js";
import {IUser} from "../../interfaces/IUser.js";

export default function createUser(request: any, passwordHash: string) {
	return new User({
		email: request.body.email,
		fullName: request.body.fullName,
		avatarUrl: request.avatarUrl,
		passwordHash,
	} as IUser);
}
