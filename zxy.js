function validateEmail() {
	var emailElement = document.getElementById("email");
	var msgElement = document.getElementById("emailMsg");
	if (/^\w+@\w+\.\w+$/.test(emailElement.value)) {
		emailElement.className = "right";
		msgElement.innerHTML = "<font color='green'>email输入正确</font>";
		return true;
	} else {
		emailElement.className = "wrong";
		msgElement.innerHTML = "<font color='red'>email输入错误</font>";
		return false;
	}
}
function validate() {
	return validateEmail();
}
function validateEmpty(elementName) {
	var objElement = document.getElementById(elementName);
	var msgElement = document.getElementById(elementName + "Msg");
	if (objElement.value != "") {
		emailElement.className = "right";
		msgElement.innerHTML = "<font color='green'>email输入正确</font>";
		return true;
	} else {
		emailElement.className = "wrong";
		msgElement.innerHTML = "<font color='red'>email输入错误</font>";
		return false;
	}
}
function validatePwd() {
	return validateEmpty("pwd");
}
function validateConf() {
	return validateEmpty("conf");
}