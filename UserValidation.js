function isValid(req, res) {

	const employmentStatus = req.body.employment;

	const salary = req.body.salary;

	const paybackPlan = req.body.payback;

	const loanStatus = req.body.onGoingLoan;

	const payDate = req.body.payDate;

	const totalCartValue = req.body.totalCartValue;

	const downPayment = totalCartValue * (30 / 100);

	const shoppingCredit = totalCartValue - downPayment;

	const monthlyInterest = 0.4 * (paybackPlan / paybackPlan);

	const totalInterest = monthlyInterest * paybackPlan;

	const monthlyRepayment = (shoppingCredit + totalInterest) / paybackPlan;

	try {
		if (downPayment !== ((30/100) * totalCartValue) || employmentStatus === '' || !salary || !payDate || loanStatus === true) {
			res
				.status(400)
				.json({ status: 400, message: 'Not approved for Shopping credit!!' });
		} else if (employmentStatus) {
			res.status(200).json({
				status: 200,
				message: 'Approved for Shopping credit!!',
			});
		}
	} catch (error) {
		console.log(error.message);
	}
}

module.exports = isValid;
