import apiClient from "../api/axios";

// authenticates the user
export const authUser = (e, userData, navigate, setErrorMessage) => {
	e.preventDefault();
	// verifies if navigate becomes from useNavigate()
	if (navigate instanceof Function === false)
		throw new Error('The third argumant must be a navigate function.');
	// verifies if setMessage is a state function
	if (setErrorMessage instanceof Function === false)
		throw new Error('The fourth argument must be a setMessage state function');

	if (userData.password.length < 6) {
		setErrorMessage('Password must have at least 6 characters.');
		setTimeout(() => {
			setErrorMessage('');
		}, 3000);
		return;
	}

	apiClient({
		method: 'post',
		data: userData,
		url: '/auth/login',
	})
		.then((response) => {
			localStorage.setItem('user_token', JSON.stringify(response.data.token));
			navigate('/');
		})
		.catch((err) => console.log(err))
		.finally(() => {
			setErrorMessage('Password or e-mail is incorrect. Try again.');
			setTimeout(() => {
				setErrorMessage('');
			}, 3000);
		});
};

// registers a new user
export const registerUser = (e, formData, navigate, setErrorMessage) => {
	e.preventDefault();
	// verifies if navigate becomes from useNavigate()
	if (navigate instanceof Function === false)
		throw new Error('The third argumant must be a navigate function.');
	// verifies if setMessage is a state function
	if (setErrorMessage instanceof Function === false)
		throw new Error('The fourth argument must be a setMessage state function');

	if (formData.password.length < 6) {
		setErrorMessage('Password must have at least 6 characters.');
		setTimeout(() => {
			setErrorMessage('');
		}, 3000);
		return;
	}
	// checks if the password and password_confirm are equal
	if (formData.password !== formData.confirm_password) {
		setErrorMessage('Paswords must match.');
		setTimeout(() => {
			setErrorMessage('');
		}, 3000);
		return;
	}

	apiClient({
		method: 'post',
		data: formData,
		url: '/auth/register',
	})
		.then((response) => {
			localStorage.setItem('user_token', JSON.stringify(response.data.token));
			navigate('/');
		})
		.catch((err) => console.log(err))
		.finally(() => {
			setErrorMessage('There was an error, please try again.');
			setTimeout(() => {
				setErrorMessage('');
			}, 3000);
		});
};
