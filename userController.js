const validateRequestBody = require('./userValidation');

function isValid(req, res) {
	const { plan, totalCartValue, downPayment, salary } = req.body;

	const shoppingCredit = totalCartValue - downPayment;

	const monthlyInterest = ((4 / 100) * shoppingCredit);

	const monthlyRepayment = (shoppingCredit / plan) + monthlyInterest;

	const errorMessage = validateRequestBody(req.body);

	if (errorMessage) {
		return res.status(400).json({ message: errorMessage });
	}


	if (salary < monthlyRepayment) return res.status(400).json({ message: 'Salary not valid' });


		res.status(200).json({
			shoppingCredit,
			downPayment,
			monthlyRepayment,
			plan,
		});
}

module.exports = isValid;
