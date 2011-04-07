/**
 * Provides access to the module of users on the server
 * @author Dmitry Nemoga
 */
var User = {
	/**
	 * Add new user to the database
	 * @param userData The data set of the user
	 * @return Returns true on success or false on failure
	 */
	moduleUserAddItem: function(userData) {
		var pl = new SOAPClientParameters();
		pl.add('userData', userData);
		SOAPClient.invoke(SOAP.url, 'moduleUserAddItem', pl, true, SOAP.muaiCallback);
	},

	/**
	 * Edit data of the existing user
	 * @param userId The identificator of the user in the database
	 * @param userData The new data set of the user
	 * @param token The key of authorization
	 * @return Returns true on success or false on failure
	 */
	moduleUserEditItem: function(userId, userData, token) {
		var pl = new SOAPClientParameters();
		pl.add('userId', userId);
		pl.add('userData', userData);
		pl.add('token', token);
		SOAPClient.invoke(SOAP.url, 'moduleUserEditItem', pl, true, SOAP.mueiCallback);
	},

	/**
	 * Delete user of the database
	 * @param userId The identificator of the user in the database
	 * @param token The key of authorization
	 * @return Returns true on success or false on failure
	 */
	moduleUserDeleteItem: function(userId, token) {
		var pl = new SOAPClientParameters();
		pl.add('userId', userId);
		pl.add('token', token);
		SOAPClient.invoke(SOAP.url, 'moduleUserDeleteItem', pl, true, SOAP.mudiCallback);
	},

	/**
	 * The moduleUserAddItem's callback method
	 */
	muaiCallback: function(response) {
		// TODO: Temporary method realisation
		alert(response);
	},

	/**
	 * The moduleUserEditItem's callback method
	 */
	mueiCallback: function(response) {
		// TODO: Temporary method realisation
		alert(response);
	},

	/**
	 * The moduleUserDeleteItem's callback method
	 */
	mudiCallback: function(response) {
		// TODO: Temporary method realisation
		alert(response);
	}
}
