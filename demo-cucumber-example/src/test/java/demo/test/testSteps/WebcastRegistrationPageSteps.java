package demo.test.testSteps;


import java.util.Set;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import demo.base.locators.WebcastRegistrationPageStrings;
import demo.base.locators.AnalyticsDashboardString;
import demo.test.testRunner.TestBase;

/**
 * Elite Registration steps
 * @author Sudhanshu
 *
 */
public class WebcastRegistrationPageSteps extends TestBase {
	String timeStamp;
	
	@Given("^wcc elite login page$")
	public void wcc_elite_login_page() throws Throwable {
		app.getCommon().deleteAllCookiesExample();
		app.getCommon().openUrl(System.getProperty("baseUrl"));
		app.getCommon().setImplicitWait(10);
	}	
	
	@When("^user deletes all cookies$")
	public void user_deletes_all_cookies() throws Throwable {
	    app.getCommon().deleteAllCookiesExample();
	}
	
	@When("^user launches registration page url \"([^\"]*)\"$")
	public void user_launches_registration_page_url(String key) throws Throwable {
		System.out.println("Launching registration url >>>"+System.getProperty(key));
	    app.getCommon().openUrl(System.getProperty(key));
	    app.getCommon().setImplicitWait(120);
	}

	@Then("^verify Registration page has been loaded$")
	public void verify_Registration_page_has_been_loaded() throws Throwable {
	   System.out.println("Verifying loading of registration page");
	   app.getCommon().isDisplayed(WebcastRegistrationPageStrings.eventTitle);
	   System.out.println("Page has been loaded successfdully ");	
	}

	@Then("^verify title \"([^\"]*)\" is displayed on Registration page$")
	public void verify_title_is_displayed_on_Registration_page(String title) throws Throwable {
	System.out.println("Verifying  "+title+" page title");
	System.out.println("Actual title of page is >>> "+app.getCommon().getTitle());
	//Assert.assertEquals(title, app.getCommon().getTitle());
	Assert.assertEquals("Title values are not same ", title, app.getCommon().getTitle());
	System.out.println("***********  Title verified *************");
	}

	@When("^user enters first name in \"([^\"]*)\" text box$")
	public void user_enters_first_name_in_text_box(String arg1) throws Throwable {
	System.out.println("Entering first name of user");   
	String timeStamp = app.getRegistrationHelper().getTimeStamp();
    System.out.println(timeStamp);
    app.getCommon().type(WebcastRegistrationPageStrings.firstname,"qauser");
    }

	@When("^user enters last name in \"([^\"]*)\" text box$")
	public void user_enters_last_name_in_text_box(String arg1) throws Throwable {
	    System.out.println("Entering last name of user");
	    app.getCommon().type(WebcastRegistrationPageStrings.lastname,"inbfw");
	}

	@When("^user enters desired email id in \"([^\"]*)\" text box$")
	public void user_enters_desired_email_id_in_text_box(String arg1) throws Throwable {
	    System.out.println("Entering email address of user");
	    String timeStamp = app.getRegistrationHelper().getTimeStamp();
	    String emailid ="qauser"+timeStamp+"@testmail.com";
	    app.getCommon().type(WebcastRegistrationPageStrings.email,emailid);;
	    System.out.println("Entered email id is : "+emailid);
	}

	@When("^user enters company name in \"([^\"]*)\" text box$")
	public void user_enters_company_name_in_text_box(String arg1) throws Throwable {
	    System.out.println("Entering company name of user");
	    app.getCommon().type(WebcastRegistrationPageStrings.company,arg1);
	}

	@When("^user selects title as senior director from \"([^\"]*)\" dropdown$")
	public void user_selects_title_as_senior_director_from_dropdown(String arg1) throws Throwable {
	    System.out.println("Selecting title of user");
	    app.getCommon().click(WebcastRegistrationPageStrings.jobTitle);
	    app.getCommon().selectDropdownelement(WebcastRegistrationPageStrings.jobTitle,"Senior Director");
	    	   	    
	}

	@When("^user selects industry as education from \"([^\"]*)\" dropdown$")
	public void user_selects_industry_as_education_from_dropdown(String arg1) throws Throwable {
	    System.out.println("Selecting industry of user");
	    app.getCommon().click(WebcastRegistrationPageStrings.industry);
	    app.getCommon().selectDropdownelement(WebcastRegistrationPageStrings.industry,"Education");
	}

	@When("^user enters Indore into \"([^\"]*)\" text box$")
	public void user_enters_Indore_into_text_box(String arg1) throws Throwable {
	    System.out.println("Entering name of city ");
	    app.getCommon().type(WebcastRegistrationPageStrings.addressStreet1,"Indore");
	    app.getCommon().type(WebcastRegistrationPageStrings.city,"Indore");
	}

	@When("^user enters Madhya Pradesh into \"([^\"]*)\" text box$")
	public void user_enters_Madhya_Pradesh_into_text_box(String arg1) throws Throwable {
	    System.out.println("Entering name of state ");
	    app.getCommon().type(WebcastRegistrationPageStrings.state,"Madhya Pradesh");
	}

	@When("^user enters (\\d+) into \"([^\"]*)\" text box$")
	public void user_enters_into_text_box(int arg1, String arg2) throws Throwable {
	    System.out.println("Entering postal code");
	    app.getCommon().type(WebcastRegistrationPageStrings.postalCode,"452002");
	}

	@When("^user selects India as country from \"([^\"]*)\" dropdown$")
	public void user_selects_India_as_country_from_dropdown(String arg1) throws Throwable {
	    System.out.println("Selecting country");
	    app.getCommon().click(WebcastRegistrationPageStrings.country);
	    app.getCommon().selectDropdownelement(WebcastRegistrationPageStrings.country,"India");
	}

	@When("^user enters (\\d+) as work phone number in \"([^\"]*)\" text box$")
	public void user_enters_as_work_phone_number_in_text_box(int arg1, String arg2) throws Throwable {
	    System.out.println("Entering work phone");
	    app.getCommon().type(WebcastRegistrationPageStrings.workPhone,"5678491245");
	}

	@When("^user selects (\\d+)-(\\d+) from \"([^\"]*)\" drop down$")
	public void user_selects_from_drop_down(int arg1, int arg2, String arg3) throws Throwable {
	    System.out.println("Selecting company size");
	    app.getCommon().click(WebcastRegistrationPageStrings.companySize);
	    app.getCommon().selectDropdownelement(WebcastRegistrationPageStrings.companySize,"500 - 999");
	}

	@When("^user enters QA Engineer into \"([^\"]*)\" text box$")
	public void user_enters_QA_Engineer_into_text_box(String arg1) throws Throwable {
	    System.out.println("Entering value into Job Function");
	    app.getCommon().type(WebcastRegistrationPageStrings.jobFunction,"QA Engineer");
	    
	}

	@When("^user checks \"([^\"]*)\" checkbox$")
	public void user_checks_checkbox(String arg1) throws Throwable {
		System.out.println("Getting status of Opt Out Event feature");  	   
		app.getCommon().click(WebcastRegistrationPageStrings.optOutEventRadioButton1);
	 	boolean optBtnStatus = app.getCommon().isSelected(WebcastRegistrationPageStrings.optOutEventRadioButton1);
		if(optBtnStatus==true){
		System.out.println("Opt Out Event button status is-----> "+optBtnStatus);	
		System.out.println("Opt Out Event option has been clicked");
		}else{
			System.out.println("Opt Out Event button status is-----> "+optBtnStatus);
			System.out.println("********Element not found*********** ");
		}
		Thread.sleep(2000);
			    		    
	}

	@When("^user clicks on \"([^\"]*)\" button$")
	public void user_clicks_on_button(String arg1) throws Throwable {
	    System.out.println("Clicking on register button");
	    app.getCommon().setImplicitWait(10000);
	    String regButtonText = app.getCommon().getText(WebcastRegistrationPageStrings.registerButton);
	    System.out.println("Visible text for registration button is --->"+regButtonText);
	    app.getCommon().click(WebcastRegistrationPageStrings.registerButton);
	    app.getCommon().setImplicitWait(60);
	}

	@Then("^verify registration done successfully$")
	public void verify_registration_done_successfully() throws Throwable {
		System.out.println("Verifying registration");
		boolean qaimage = app.getCommon().isDisplayed(WebcastRegistrationPageStrings.qaImage);
		System.out.println("Status of qaimage is >>> "+qaimage);
		if(qaimage == true){
	    System.out.println("Registration done successfully......");
		}else{
		 System.out.println("Registration failed.......");	    
		}
	}
	
	@Then("^verify tooltip \"([^\"]*)\"$")
	public void verify_tooltip(String arg1) throws Throwable {
		System.out.println("Verifying tooltip");
	    String actualToolTip = app.getCommon().getText(WebcastRegistrationPageStrings.requiredTooltip);
	    System.out.println("Actual value of tooltip is ----> "+actualToolTip);
	    Assert.assertEquals("Tooltips are not verified ", "This is a required field", actualToolTip);
	    System.out.println("**********Tooltip verified**********");
	}
	
	/* Clicking on already registration link on registration form */
	@When("^user clicks on \"([^\"]*)\" link$")
	public void user_clicks_on_link(String widgetName) throws Throwable {
    switch(widgetName){
    case("alreadyRegLink"):
	app.getCommon().click(WebcastRegistrationPageStrings.alreadyRegLink);
    System.out.println(widgetName+" Widget clicked successfully");
    app.getCommon().setImplicitWait(2);
    break;
    case("Leads"):
    	app.getCommon().getDriver().switchTo().frame(app.getCommon().findElement(By.cssSelector("iframe[onload*='reports-dashboard']")));
    	app.getCommon().click(AnalyticsDashboardString.leads_widget);
    	System.out.println(widgetName+" Widget clicked successfully");
    	app.getCommon().setImplicitWait(10);
   	break;
    case("Total Attendance"):
    	app.getCommon().getDriver().switchTo().frame(app.getCommon().findElement(By.cssSelector("iframe[onload*='reports-dashboard']")));
    	app.getCommon().click(AnalyticsDashboardString.totalAttendanceWidgetTitle);
    	System.out.println(widgetName+" Widget clicked successfully");  
    	app.getCommon().setImplicitWait(30);
    break;	
    case("Content Views from Content Gateway(s)"):
    	app.getCommon().getDriver().switchTo().frame(app.getCommon().findElement(By.cssSelector("iframe[onload*='reports-dashboard']")));
    	app.getCommon().click(AnalyticsDashboardString.contentViewsWidgetTitle);
    	System.out.println(widgetName+" Widget clicked successfully"); 
    	app.getCommon().setImplicitWait(30);
    break;	
    case("Funnel"):
    	app.getCommon().getDriver().switchTo().frame(app.getCommon().findElement(By.cssSelector("iframe[onload*='reports-dashboard']")));
    	app.getCommon().click(AnalyticsDashboardString.funnelWidgetTitle);
    	System.out.println(widgetName+" Widget clicked successfully");
    	app.getCommon().setImplicitWait(10);
    break;	
   	
    	
    case("Terms of Use"):
    {
    	String parentHandle = app.getCommon().getDriver().getWindowHandle();
		WebElement element = app.getCommon().getDriver().findElement(By.xpath("//*[@id='loginForm']/div/div[2]/div[2]/div/div/a"));
		JavascriptExecutor js = (JavascriptExecutor) app.getCommon().getDriver();
		js.executeScript("arguments[0].scrollIntoView();", element);
		element.click();
		System.out.println("Terms of Use element clicked successfully");

		Set<String> newPageHandle = app.getCommon().getDriver().getWindowHandles();

		newPageHandle.remove(parentHandle);

		for (String handle1 : newPageHandle) {
			app.getCommon().getDriver().switchTo().window(handle1);
		}
		break;
	 }
    }
    
	}
	/* Entering already registered email id into email textbox of popup */
	@When("^user enters email-id in email text box and clicks on login button$")
	public void user_enters_email_id_in_email_text_box_and_clicks_on_login_button() throws Throwable {
	   System.out.println("Entering already registered email of user");
		    app.getCommon().type(WebcastRegistrationPageStrings.alredayRegEmailTextbox,WebcastRegistrationPageStrings.alreadyRegUser);
		    System.out.println("Email id entered ");
		    app.getCommon().click(WebcastRegistrationPageStrings.alredayRegLoginBtn);
			System.out.println("Login button clicked");
	}

	/* Verifying successfull login  */
	@Then("^verify login done successfully$")
	public void verify_login_done_successfully() throws Throwable {
	    System.out.println("Verifying Login");
	       app.getCommon().setImplicitWait(5);
			boolean qaimage = app.getCommon().isDisplayed(WebcastRegistrationPageStrings.qaImage);
			System.out.println("Status of qaimage is >>> "+qaimage);
			if(qaimage == true){
		    System.out.println("Login done successfully......");
			}else{
			 System.out.println("Login failed.......");	    
			}
			}
	@When("^user enters Street into \"([^\"]*)\" text box$")
	public void user_enters_Street_into_text_box(String stretAddress) throws Throwable {
		app.getCommon().type(WebcastRegistrationPageStrings.addressStreet1,stretAddress);
	    
	    
	}

	@When("^user enters City into \"([^\"]*)\" text box$")
	public void user_enters_City_into_text_box(String city) throws Throwable {
		app.getCommon().type(WebcastRegistrationPageStrings.city,city);
	    
	}

	@When("^user enters State into \"([^\"]*)\" text box$")
	public void user_enters_State_into_text_box(String state) throws Throwable {
		app.getCommon().type(WebcastRegistrationPageStrings.state,state);
	    
	}

	@When("^user enters Postal code into \"([^\"]*)\" text box$")
	public void user_enters_Postal_code_into_text_box(String zipCode) throws Throwable {
		app.getCommon().type(WebcastRegistrationPageStrings.postalCode,zipCode);
	    
	}


	
	/*#######################################################################################*/
	
	@When("^user enters \"([^\"]*)\" in \"([^\"]*)\" text box$")
	public void user_enters_in_text_box(String value, String locator) throws Throwable {
	   
		
	}

	@When("^user selects \"([^\"]*)\" from \"([^\"]*)\" dropdown$")
	public void user_selects_from_dropdown(String arg1, String arg2) throws Throwable {
	    
	}


}