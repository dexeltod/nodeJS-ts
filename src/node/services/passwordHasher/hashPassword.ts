import bcrypt from "bcrypt";

export const hashPassword = async (password: string, saltNumber: number) => {
	const salt = await bcrypt.genSalt(saltNumber)
	return await bcrypt.hash(password, salt)
}