<?php
/**
 * Test the web service
 * @author Dmitry Nemoga
 */

$soapClient = new SoapClient('http://imho.localhost/system/webservice/imho.wsdl');
var_dump($soapClient->__getFunctions());
?>
