function addition(var1,var2)
{
	checkvariable(var1,var2);
	return var1 + var2;
}

function subtract(var1,var2)
{
	checkvariable(var1,var2);
	return var1 - var2;
}

function multiply(var1,var2)
{
	checkvariable(var1,var2);
	return var1 * var2;
}

function division(var1,var2)
{
	checkvariable(var1,var2);
	return var1 / var2;
}

function checkvariables(var1,var2)
{
	if(isNaN(var1))
		throw var1 + "is a ".typeof var1+" Please enter number.";
	
	if(isNaN(var2))
		throw var2 + "is a ".typeof var2+" Please enter number.";
}

exports.addition = addition;
exports.subtract = subtract;
exports.multiply = multiply;
exports.division = division;
exports.checkvariables = checkvariables;