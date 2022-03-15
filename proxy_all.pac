function FindProxyForURL(url, host) {
  if (
		shExpMatch(url,"*booking.cn*") ||
		shExpMatch(url,"*linkedin.cn*")
	)
	{
	  return "PROXY 127.0.0.1:8082";
	}
  else
  {
    return "PROXY 192.168.3.3:8080; DIRECT";
  }
}
