function FindProxyForURL(url, host) {
  
  url = url.toLowerCase();
  host = host.toLowerCase();
  
	if (
		shExpMatch(url,"*booking.cn*") ||
		shExpMatch(url,"**")
	   )
		{
	        return "NULL";
		}
  else if (
  shExpMatch(url,"*facebook*") ||
  shExpMatch(url,"*fbcdn*") ||
  shExpMatch(url,"*meta*") ||
  shExpMatch(url,"*twitter*") ||
  shExpMatch(url,"*google*") ||
  shExpMatch(url,"*gmail*") ||
  shExpMatch(url,"*gmodules*") ||
  shExpMatch(url,"*gdata*") ||
  shExpMatch(url,"*blogger*") ||
  shExpMatch(url,"*chromium*") ||
  shExpMatch(url,"*chrome*") ||
  shExpMatch(url,"*orkut*") ||
  shExpMatch(url,"*textcube*") ||
  shExpMatch(url,"*gvt0*") ||
  shExpMatch(url,"*gstatic*") ||
  shExpMatch(url,"*ggpht*") ||
  shExpMatch(url,"*2mdn*") ||
  shExpMatch(url,"*urchin*") ||
  shExpMatch(url,"*golang*") ||
  shExpMatch(url,"*feedburner*") ||
  shExpMatch(url,"*tfbnw*") ||
  shExpMatch(url,"*fbsbx*") ||
  shExpMatch(url,"*akamaihd*") ||
  shExpMatch(url,"*twimg*") ||
  shExpMatch(url,"*tinypic*") ||
  shExpMatch(url,"*tweetdeck*") ||
  shExpMatch(url,"*ytimg*") ||
  shExpMatch(url,"*youtu*") ||
  shExpMatch(url,"*polymer*") ||
  shExpMatch(url,"*tweetdeck*") ||
  shExpMatch(url,"*gvt1*") ||
  shExpMatch(url,"*linkedin*")
)
		{
	        return "PROXY 192.168.3.3:8080; DIRECT";
		}
  else
  {
	return "DIRECT";
  }
}
