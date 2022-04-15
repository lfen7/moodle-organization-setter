loginForm = document.forms['login']
loginForm.elements['idp'].value = "https://aai-logon.ethz.ch/idp/shibboleth"
loginForm.submit();
