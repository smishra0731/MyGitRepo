package demo.base.helper;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import demo.base.common.Common;

/**
 * Its contains all utility method of registration page
 * 
 * @author Omkar
 * 
 */
public class RegistrationHelper extends Common {

	public String getTimeStamp(){
		
		 // Create object of SimpleDateFormat class and decide the format
		 SimpleDateFormat dateFormat = new SimpleDateFormat("HHmmssa");
		 
		 //get current date time with Date()
		 Date date = new Date();
		 
		 // Now format the date
		 String timeStamp= dateFormat.format(date);
		 return timeStamp;
	}
	
	
}
