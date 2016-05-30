function convertDate (DateObject, DateFormat){
    var datNow = new Date(DateObject);
	var datYear = datNow.getFullYear();
	var datMonth = ('0'+(datNow.getMonth()+1)).slice(-2);
	var datDay = ('0'+ datNow.getDate()).slice(-2);
	var datHours =  ('0' + datNow.getHours()).slice(-2);
	var datMinutes =  ('0' + datNow.getMinutes()).slice(-2);
	
	switch (DateFormat) {
		case 0: //yyyy-mm-dd
			return datYear + "-" + datMonth + "-" + datDay;
			break;
		case 1: //yyyy-mm-dd hh:mm
			return datYear + "-" + datMonth + "-" + datDay + " " + datHours + ":" + datMinutes;
			break;
		case 2: //yyyymmdd		
			return datYear + datMonth + datDay;
			break;
		case 3: //yyyymmddhhmm		
			return datYear + datMonth + datDay + datHours + datMinutes;
			break;
		default:
			return datNow.toString();
	}
}