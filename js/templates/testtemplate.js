Jaml.register('testtemplate', function(defVal) {
	div({id: 'loginForm'},
		input({
			id: 'userEmail',
			type: 'text',
			name: 'email',
			value: defVal.email
		}),
		input({
			id: 'userPass',
			type: 'password',
			name: 'pass',
			value: defVal.pass
		}),
		input({
			id: 'sendRequest',
			type: 'button',
			value: 'Login'
		})
	);
});
