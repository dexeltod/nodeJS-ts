import express, {Express, RequestHandler} from "express"
import mongoose from "mongoose"
import {validation} from './services/validation/validation.js'
import {validationResult} from "express-validator";
import createUser from "./services/fabric/createUser.js";
import {IUserRequest} from "./interfaces/IUserRequest.js";
import {hashPassword} from "./services/passwordHasher/hashPassword.js";
import bodyParser from "body-parser";

const url: string = "mongodb+srv://admin:pauk2010pauk@cluster0.cahivci.mongodb.net/blog?retryWrites=true&w=majority"
const secretKey = "theMostSecretSecretKeyInTheWorld";

const application = express()
application.use(express.json())

mongoose.connect(url)
	.then(() => {
			console.log("Connected to MongoDB")
		}
	)
	.catch(err => {
			throw new Error(`NotConnectException ${err}`)
		}
	)

application.post('/authentication/register', validation, async (request: any, response: any) =>
{
	const error = validationResult(request)

	if (!error.isEmpty() || request.body === {}) {
		return await response.status(400).json(error.array())
	}

	const passwordHash: string = await hashPassword(request.body.password, 10);
	const document = createUser(request, passwordHash)
	const user = await document.save()

	response.json({
		user
	})

});

application.get('/', (err: any, req: any, res: any, next: any) => {
	res.send("sdfs")
})

application.listen(1488, () => {
	console.log("Сервак запущен")
})