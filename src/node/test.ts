import express from "express"

const application = express()
application.use(express.json())

application.get("/", (req, res) => {
	res.send("чё?")
})

application.post('/authentication/login', (req, res) => {
	const body = req.body

	res.json({
		isHuyUp: true,
	})
})

application.listen(1488, () => {
	console.log("Работаем братья")
})