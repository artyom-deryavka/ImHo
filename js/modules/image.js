/**
 * Provides access to the module of images on the server
 * @author Dmitry Nemoga
 */
var Image = {
	/**
	 * Add new image to the database
	 * @param userId The identificator of the user in the database
	 * @param imageData The data set of the image
	 * @return Returns true on success or false on failure
	 */
	moduleImageAddItem: function(userId, imageData) {
		var pl = new SOAPClientParameters();
		pl.add('userId', userId);
		pl.add('imageData', imageData);
		SOAPClient.invoke(SOAP.url, 'moduleImageAddItem', pl, true, SOAP.miaiCallback);
	},

	/**
	 * Edit data of the existing image
	 * @param imageId The identificator of the image in the database
	 * @param imageData The new data set of the image
	 * @param token The key of authorization
	 * @return Returns true on success or false on failure
	 */
	moduleImageEditItem: function(imageId, imageData, token) {
		var pl = new SOAPClientParameters();
		pl.add('imageId', imageId);
		pl.add('imageData', imageData);
		pl.add('token', token);
		SOAPClient.invoke(SOAP.url, 'moduleImageEditItem', pl, true, SOAP.mieiCallback);
	},

	/**
	 * Delete image of the database
	 * @param imageId The identificator of the image in the database
	 * @param token The key of authorization
	 * @return Returns true on success or false on failure
	 */
	moduleImageDeleteItem: function(imageId, token) {
		var pl = new SOAPClientParameters();
		pl.add('imageId', imageId);
		pl.add('token', token);
		SOAPClient.invoke(SOAP.url, 'moduleImageDeleteItem', pl, true, SOAP.midiCallback);
	},

	/**
	 * The moduleImageAddItem's callback method
	 */
	miaiCallback: function(response) {
		// TODO: Temporary method realisation
		alert(response);
	},

	/**
	 * The moduleImageEditItem's callback method
	 */
	mieiCallback: function(response) {
		// TODO: Temporary method realisation
		alert(response);
	},

	/**
	 * The moduleImageDeleteItem's callback method
	 */
	midiCallback: function(response) {
		// TODO: Temporary method realisation
		alert(response);
	}
}
