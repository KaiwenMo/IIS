function FindProxyForURL(url, host) {
  
  url = url.toLowerCase();
  host = host.toLowerCase();
  
  if (shExpMatch(url,"*twitter*")  ||
        shExpMatch(url,"*facebook*") ||
        shExpMatch(url,"*fb*") ||
		shExpMatch(url,"*youtube*") ||
        shExpMatch(url,"*google*"))
		{
	        return "PROXY 192.168.3.174:8080; DIRECT";
		}
  else
  {
	return "DIRECT";
  }
}