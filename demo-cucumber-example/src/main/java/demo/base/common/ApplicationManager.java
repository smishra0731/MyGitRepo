package demo.base.common;

import demo.base.helper.RegistrationHelper;

//import demo.base.helper.MakeMyTripHelper;

public class ApplicationManager {

	private WebdriverHelper webdriverHelper;
	private Common common;
	private RegistrationHelper registrationHelper;

	public static ApplicationManager getInstance() {
		return new ApplicationManager();
	}

	public WebdriverHelper getWebdriverHelper() {
		if (webdriverHelper == null) {
			webdriverHelper = WebdriverHelper.getWebdriverHelper();
		}
		return webdriverHelper;
	}

	public Common getCommon() {
		if (common == null) {
			common = new Common();
		}
		return common;
	}
	
	public RegistrationHelper getRegistrationHelper(){
		if(registrationHelper==null){
			registrationHelper = new RegistrationHelper();
		}
	    return registrationHelper;
	}
	
	public void stop(){
		if(webdriverHelper!=null)
			webdriverHelper.stop();
	}
}
