function validateRequestBody(body) {
	const {
		employmentStatus,
		salary,
		plan,
		loanExist,
		payDate,
		totalCartValue,
		downPayment,
    } = body;
    
    const minimumDownPayment = totalCartValue * (30 / 100);

	if (!employmentStatus.trim()) return 'Invalid Employment Status';

	if (salary <= 0) return 'Invalid Salary Amount';

	if (downPayment < minimumDownPayment) {
		return 'Down Payment must be equal to or greater than 30 percent';
	}

    if (!payDate || new Date(payDate) < new Date()) return 'Invalid Paydate!';
    
	if (!plan) return 'Invalid plan';

	if (loanExist) return 'Loan Status not valid for payment';


	return false;
}

module.exports = validateRequestBody;