import axios from 'axios';
const server = `http://localhost:4500/api/v1/auth`;

// authenticates the user
export const authUser = (e, userData, navigate, setErrorMessage) => {
	e.preventDefault();
	// verifies if navigate becomes from useNavigate()
	if (navigate instanceof Function === false)
		throw new Error('The third argumant must be a navigate function.');
	// verifies if setMessage is a state function
	if (setErrorMessage instanceof Function === false)
		throw new Error('The fourth argument must be a setMessage state function');

	// verifies the password length
	if (userData.password.length < 6) {
		setErrorMessage('Password must have at least 6 characters.');
		setTimeout(() => {
			setErrorMessage('');
		}, 3000);
		return;
	}
  
	// sends a post request to the server to get the token
	axios({
		method: 'post',
		data: userData,
		url: `${server}/login`,
	})
		.then((response) => {
			// saves the token to localstorage
			localStorage.setItem('token', JSON.stringify(response.data.token));
			// navigates to app root
			navigate('/');
		})
		.catch((err) => console.log(err))
		.finally(() => {
			// if error, sets a error message to user
			setErrorMessage('Password or e-mail is incorrect.');
			setTimeout(() => {
				setErrorMessage('');
			}, 3000);
		});
};
