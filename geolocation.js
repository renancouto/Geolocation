/*	Geolocation(https://github.com/renancouto/Geolocation) - detect user location

	@info:			Detects user's location and returns
					- Country Code;
					- Country Name;
					- City;
					- Region;
					- Region Name;
					- Latitude;
					- Longitude;
					- Postal Code;
					- Area Code;
					- Metro Code;

	@author:		Renan Couto
	@version:		0.1
	@created:		Sep Tue 25 2012
	@updated:		-
	@license:		MIT & BSD
	@url:			https://github.com/renancouto/Geolocation
	@dependencies:	http://j.maxmind.com/app/geoip.js

	@changelog:

	version: 0.1
	- Created and pushed to Github
*/

;window.Geolocation = (function(window, document, undefined) {

	return {
		CountryCode: geoip_country_code(),
		CountryName: geoip_country_name(),
		City: geoip_city(),
		Region: geoip_region(),
		RegionName: geoip_region_name(),
		Latitude: geoip_latitude(),
		Longitude: geoip_longitude(),
		PostalCode: geoip_postal_code(),
		AreaCode: geoip_area_code(),
		MetroCode: geoip_metro_code()
	};

})(this, this.document);