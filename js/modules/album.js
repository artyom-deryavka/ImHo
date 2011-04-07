/**
 * Provides access to the module of albums on the server
 * @author Dmitry Nemoga
 */
var Album = {
	/**
	 * Add new album to the database
	 * @param userId The identificator of the user in the database
	 * @param albumData The data set of the album
	 * @param token The key of authorization
	 * @return Returns true on success or false on failure
	 */
	moduleAlbumAddItem: function(userId, albumData, token) {
		var pl = new SOAPClientParameters();
		pl.add('userId', userId);
		pl.add('albumData', albumData);
		pl.add('token', token);
		SOAPClient.invoke(SOAP.url, 'moduleAlbumAddItem', pl, true, SOAP.maaiCallback);
	},

	/**
	 * Edit data of the existing album
	 * @param albumId The identificator of the album in the database
	 * @param albumData The new data set of the album
	 * @param token The key of authorization
	 * @return Returns true on success or false on failure
	 */
	moduleAlbumEditItem: function(albumId, albumData, token) {
		var pl = new SOAPClientParameters();
		pl.add('albumId', albumId);
		pl.add('albumData', albumData);
		pl.add('token', token);
		SOAPClient.invoke(SOAP.url, 'moduleAlbumEditItem', pl, true, SOAP.maeiCallback);
	},

	/**
	 * Delete album of the database
	 * @param albumId The identificator of the album in the database
	 * @param token The key of authorization
	 * @return Returns true on success or false on failure
	 */
	moduleAlbumDeleteItem: function(albumId, token) {
		var pl = new SOAPClientParameters();
		pl.add('albumId', albumId);
		pl.add('token', token);
		SOAPClient.invoke(SOAP.url, 'moduleAlbumDeleteItem', pl, true, SOAP.madiCallback);
	},

	/**
	 * The moduleAlbumAddItem's callback method
	 */
	maaiCallback: function(response) {
		// TODO: Temporary method realisation
		alert(response);
	},

	/**
	 * The moduleAlbumEditItem's callback method
	 */
	maeiCallback: function(response) {
		// TODO: Temporary method realisation
		alert(response);
	},

	/**
	 * The moduleAlbumDeleteItem's callback method
	 */
	madiCallback: function(response) {
		// TODO: Temporary method realisation
		alert(response);
	}
}
