import {body} from 'express-validator'

const minPasswordLength: number = 5;

export const validation = [
	body('email', 'Not valid email').isEmail(),
	body('password', `Minimal password length is ${minPasswordLength}`).isLength({min: minPasswordLength}),
	body('fullName', 'Full name is short').isLength({min: 2}),
	body('avatarUrl', 'It is not URL').optional().isURL(),
]