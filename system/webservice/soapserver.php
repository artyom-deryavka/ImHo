<?php
/**
 * SOAP Server
 * @author Dmitry Nemoga
 */

// TODO: Temporary dummy for SOAP server testing
class Dummy {
	public function moduleUserAddItem($userData) {
		return "E-Mail: $userData->email\nPassword: $userData->pass";
	}
}

$soapServer = new SoapServer('imho.wsdl');
$soapServer->setClass('Dummy');
$soapServer->handle();
?>
