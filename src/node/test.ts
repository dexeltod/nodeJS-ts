import express from 'express';
import mongoose from 'mongoose';
import {validation} from './infrastructure/validation/validation.js';
import {validationResult} from 'express-validator';
import createUser from './infrastructure/fabric/createUser.js';
import {hashPassword} from './infrastructure/passwordHasher/hashPassword.js';

import 'dotenv/config';

const url: string = process.env.PATH_TO_MONGO_DB;
const secretKey = process.env.PASSWORD_KEY;

const application = express();
application.use(express.json());

mongoose.connect(url)
	.then(() => {
			console.log('Mongoose is connected');
		}
	)
	.catch(err => {
			throw new Error(`NotConnectException ${err}`);
		}
	);

application.post('/authentication/register', validation, async (request: any, response: any) =>
{
	new Promise<any>(async (resolve, reject) => {

		const error = validationResult(request);

		if (!error.isEmpty() || request.body === {}) {
			return await response.status(400).json(error.array());
		}

		const passwordHash: string = await hashPassword(request.body.password, 10);
		const document = createUser(request, passwordHash);
		const user = await document.save();

		response.json({
			user
		});

	});
	application.get('/', (err: any, req: any, res: any, next: any) => {
		res.send('sdfs');
	});

	application.listen(1488, () => {
		console.log('Сервак запущен');
	});
});