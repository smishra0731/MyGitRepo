package demo.test.testSteps;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import demo.base.locators.TestDemoString;
import demo.test.testRunner.TestBase;


/**
 * Elite Registration steps
 * @author Sudhanshu
 *
 */

public class TestDemo extends TestBase {
	
	String handle;
	boolean isdisplayed = false;
	String parentHandle;
	
	
	
	@When("^user clicks on hamburger icon at top$")
	public void user_clicks_on_hamburger_icon_at_top() throws Throwable{
		isdisplayed = app.getCommon().getDriver().findElement(By.cssSelector("#masthead > i")).isDisplayed();
		try {
			if (isdisplayed)
				isdisplayed = false;
			else
				throw new Exception("Element is not present");
		} catch (Exception ex) {
			Thread.sleep(3000);
			isdisplayed = app.getCommon().getDriver().findElement(By.cssSelector("#masthead > i")).isDisplayed();
			if (isdisplayed)
				isdisplayed = false;
			else
				throw new Exception("Element is not present");
		}
		System.out.println("humberger icon displayed");

		//Click on hamburger icon at top left
		app.getCommon().getDriver().findElement(By.cssSelector("#masthead > i")).click();
		System.out.println("humberger icon clicked");
		
		
		
	}
	
@When("^user enters \"([^\"]*)\" in search field and click on search icon$")
public void user_enters_in_search_field_and_click_on_search_icon(String arg1) throws Throwable {
	app.getCommon().getDriver().findElement(By.cssSelector("#site-navigation > div.nav-search-bar > form > label > input")).sendKeys("elite");
	app.getCommon().getDriver().findElement(By.cssSelector("#site-navigation > div.nav-search-bar > form > button")).click();
     Thread.sleep(3000);
     System.out.println("elite text entered");
	
	
}
	
	
@When("^user navigates to last page using pagination$")
public void user_navigates_to_last_page_using_pagination() throws Throwable {
	app.getCommon().getDriver().findElement(By.cssSelector("#main > div.search-results-pagination > a:nth-child(6)")).click();
     Thread.sleep(2000);
     System.out.println("user is on last page");
	 
	 

}

@When("^Verify \"([^\"]*)\" is present$")
public void verify_is_present(String arg1) throws Throwable {
	//Verify "ON24 Makes Business Webcasting Easier" is present
	String text = app.getCommon().getDriver().findElement(By.cssSelector("#main > div:nth-child(4) > div > div > h5 > a")).getText();
    System.out.println("text = "+text);

   System.out.println("test completed");
}

@Given("^user opens dev report page$")
public void user_opens_dev_report_page() throws Throwable {
	app.getCommon().deleteAllCookiesExample();
	app.getCommon().openUrl(System.getProperty("PMXDReportUrl"));
	Thread.sleep(30000);
	
    
}

@Then("^verify sum of all rows should be equal to total for PMXD project$")
public void verify_sum_of_all_rows_should_be_equal_to_total_for_PMXD_project() throws Throwable {

	app.getCommon().getDriver().manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	System.out.println("Heading of table is :- ### "+app.getCommon().getText(By.xpath("//body/div/h2"))+" ###");
	List<WebElement> allHeadersOfTable=app.getCommon().getDriver().findElements(By.xpath("//table[@class='table table-striped reportTable']/thead/tr/th"));
	System.out.println("Headers detail of table is as below.");
	System.out.println("Total headers in table are :- "+allHeadersOfTable.size());
	
	for(WebElement ele:allHeadersOfTable){
		
		System.out.println(ele.getText());
	}
	
	List allRowsOfTable=app.getCommon().getDriver().findElements(By.xpath("//table[@class='table table-striped reportTable']/tbody/tr"));
	System.out.println("Rows detail of table is as below.");
	System.out.println("Total rows in table are :- "+allRowsOfTable.size());
	
	
	
	
	
	
	
	 //WebElement baseTable = app.getCommon().getDriver().findElement(By.tagName("table"));
	 
	 
	 
	  //No.of Columns
    /*List  col = app.getCommon().getDriver().findElements(By.xpath("/html/body/div[1]/div/table/thead/tr/th"));
    System.out.println("No of cols are : " +col.size()); 
    //No.of rows 
    List  rows = app.getCommon().getDriver().findElements(By.xpath("/html/body/div/div/table/tbody/tr")); 
    System.out.println("No of rows are : " + rows.size());
    
 
	 //To find third row of table
	WebElement tableRow = baseTable.findElement(By.xpath("/html/body/div[1]/div/table/tbody/tr[4]/td"));
    String rowtext = tableRow.getText();
	 System.out.println("Fourth row of table : "+rowtext);
	    
	 int sum1=0;
	 
	     for(int i=2;i<=col.size();i++){
	    	WebElement cellIneed = tableRow.findElement(By.xpath("/html/body/div[1]/div/table/tbody/tr[4]/td["+i+"]"));
	 	    String valueIneed = cellIneed.getText();
	 	    System.out.println("Cell value is : " + valueIneed); 
	 	    int result = Integer.parseInt(valueIneed); 	 
	    	sum1 = sum1+result;	    	
	     }
	     
	    System.out.println("Total of third row cell values id = "+sum1);
	    	    
	    WebElement cellIneed8 = tableRow.findElement(By.xpath("/html/body/div[1]/div/table/tbody/tr[4]/td[8]"));
	    String valueIneed8 = cellIneed8.getText();
	    System.out.println("Cell value is : " + valueIneed8);
	    int result8 = Integer.parseInt(valueIneed8);
	    
	    Assert.assertEquals(result8, sum1);*/
	 
	   }

@Given("^vshow elite login page$")
public void vshow_elite_login_page() throws Throwable {
  
	app.getCommon().deleteAllCookiesExample();
	app.getCommon().openUrl(System.getProperty("vshowUrl"));
	app.getCommon().setImplicitWait(10);
}

@When("^user enters \"([^\"]*)\" in username textbox$")
public void user_enters_in_username_textbox(String arg1) throws Throwable {
   app.getCommon().type(TestDemoString.usernameTextBox, arg1);
}

@When("^user enters \"([^\"]*)\" in password textbox$")
public void user_enters_in_password_textbox(String arg1) throws Throwable {
	app.getCommon().type(TestDemoString.passwordTextBox, arg1);
}

@Then("^verify error message as \"([^\"]*)\"$")
public void verify_error_message_as(String arg1) throws Throwable {
	app.getCommon().click(TestDemoString.loginButton);
	System.out.println("Error message displays is****"+app.getCommon().getText(TestDemoString.errorMessage));
   Assert.assertEquals(System.getProperty(arg1), app.getCommon().getText(TestDemoString.errorMessage));
}

@When("^user enters  in password textbox$")
public void user_enters_in_password_textbox() throws Throwable {
	app.getCommon().type(TestDemoString.passwordTextBox, "");
}

@When("^user enters  in username textbox$")
public void user_enters_in_username_textbox() throws Throwable {
	app.getCommon().type(TestDemoString.usernameTextBox, "");
}	
	
	
@When("^verify available links$")
public void verify_available_links() throws Throwable {
	
    System.out.println("+++++++++++++"+app.getCommon().isDisplayed(TestDemoString.twitter));
	//Twitter
	Assert.assertEquals(true, app.getCommon().getDriver().findElement(TestDemoString.twitter).isDisplayed());
			
	//fb
	Assert.assertEquals(true, app.getCommon().getDriver().findElement(TestDemoString.facebookLink).isDisplayed());

	//linked in
	Assert.assertEquals(true, app.getCommon().getDriver().findElement(TestDemoString.linkedInLink).isDisplayed());

	//you tube
	Assert.assertEquals(true, app.getCommon().getDriver().findElement(TestDemoString.youTubeLink).isDisplayed());

	//instagram
	Assert.assertEquals(true, app.getCommon().getDriver().findElement(TestDemoString.instaGramLink).isDisplayed());

}

@When("^user launches toolsqa registration url$")
public void user_launches_toolsqa_registration_url() throws Throwable {
  
	app.getCommon().openUrl(System.getProperty("toolsQaRegUrl"));
	
}

@When("^user gets partial link text$")
public void user_gets_partial_link_text() throws Throwable {
	
   System.out.println("Partial link text is "+app.getCommon().getAttribute(TestDemoString.partialLinkText, "href"));
   Thread.sleep(2000);
}

@When("^user gets link text$")
public void user_gets_link_text() throws Throwable {
	System.out.println("Partial link text is "+app.getCommon().getAttribute(TestDemoString.linkText, "href"));
	Thread.sleep(2000);
}

@When("^user enters unique first name$")
public void user_enters_unique_first_name() throws Throwable {
  
//	Date date = Calendar.getInstance().getTime();
//	DateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
//    String today = formatter.format(date);
//    System.out.println("Today : " + today);
	
	System.out.println("Entering unique first name of user");
    String timeStamp = app.getRegistrationHelper().getTimeStamp();
    String firstname ="qauser"+timeStamp;
    app.getCommon().type(TestDemoString.firstNameTextBox,firstname);
    System.out.println("Entered first name is : "+firstname);
    Thread.sleep(2000);
}

@When("^user enters unique last name$")
public void user_enters_unique_last_name() throws Throwable {
	System.out.println("Entering unique last name of user");
    String timeStamp = app.getRegistrationHelper().getTimeStamp();
    String lastname ="inbfw"+timeStamp;
    app.getCommon().type(TestDemoString.lastNameTextBox,lastname);
    System.out.println("Entered last name is : "+lastname);
    Thread.sleep(2000);
	
}

@When("^user selects \"([^\"]*)\" as gender$")
public void user_selects_as_gender(String arg1) throws Throwable {
	System.out.println("Status of male option "+app.getCommon().isSelected(TestDemoString.maleOption));
    Assert.assertFalse(app.getCommon().isSelected(TestDemoString.maleOption));
    app.getCommon().click(TestDemoString.maleOption);
    System.out.println("Male option selected ");
    Thread.sleep(2000);    
	
}

@When("^user selects \"([^\"]*)\" as years of experience$")
public void user_selects_as_years_of_experience(String arg1) throws Throwable {
	System.out.println("Status of 3 year Experience option "+app.getCommon().isSelected(TestDemoString.experienceYears(3)));
	Assert.assertFalse(app.getCommon().isSelected(TestDemoString.experienceYears(3)));
	app.getCommon().click(TestDemoString.experienceYears(3));
    System.out.println("3 Year Experience option selected ");
    Thread.sleep(2000);

}

@When("^user enters current date in date text box$")
public void user_enters_current_date_in_date_text_box() throws Throwable {
  
	Date date = Calendar.getInstance().getTime();
	DateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
    String today = formatter.format(date);
    System.out.println("Today : " + today);
    app.getCommon().type(TestDemoString.datePicker, today);
    System.out.println("Date entered successfully");
    Thread.sleep(2000);
}

@When("^user selects \"([^\"]*)\" as \"([^\"]*)\"$")
public void user_selects_as(String arg1, String arg2) throws Throwable {
	switch(arg2)
	{
	 
	case "profession":
		if(app.getCommon().isSelected(TestDemoString.automationTesterOption)){
			System.out.println(arg1+ " Option is already checked");
			
		}else{
			app.getCommon().click(TestDemoString.automationTesterOption);
			System.out.println(arg2+" option has been checked");
			Thread.sleep(2000);			
		}
		
	break;
	case "automation tool":
		if(app.getCommon().isSelected(TestDemoString.automationTool(2))){
			
			System.out.println(arg1+ " Option is already checked");
		}else{
			app.getCommon().click(TestDemoString.automationTool(2));
			System.out.println(arg1+" option has been checked");
			Thread.sleep(2000);
		}
	break;
	
	default:
		throw new Exception("No match found");
	}
 
}

@When("^user uploads image by clicking on \"([^\"]*)\" button$")
public void user_uploads_image_by_clicking_on_button(String arg1) throws Throwable {
	
	app.getCommon().type(TestDemoString.chooseFileButton, "D:\\DesktopData\\all-imagesss\\PNG24\\PNG4.png");
	Thread.sleep(2000);
}

@When("^user clicks on \"([^\"]*)\" link to downloadv file$")
public void user_clicks_on_link_to_downloadv_file(String arg1) throws Throwable {
  
}

@When("^user selects \"([^\"]*)\" from Continents dropdown$")
public void user_selects_from_Continents_dropdown(String arg1) throws Throwable {
   //app.getCommon().click(TestDemoString.continentDropdown);
   app.getCommon().selectDropdownelement(TestDemoString.continentDropdown, "North America");
   Thread.sleep(2000);
   System.out.println(arg1+" Option selected from dropdown.");
}

@When("^user selects \"([^\"]*)\" from Selenium Comands$")
public void user_selects_from_Selenium_Comands(String arg1) throws Throwable {
	   app.getCommon().selectDropdownelement(TestDemoString.seleniumCommands, "WebElement Commands");
	   Thread.sleep(2000);
	   System.out.println(arg1+" Option selected from dropdown.");
	
}

@When("^user clicks on Submit button$")
public void user_clicks_on_Submit_button() throws Throwable {
    app.getCommon().click(TestDemoString.submitButton);
    System.out.println("submit button clicked.");
    Thread.sleep(2000);
}

@Then("^verify \"([^\"]*)\" is present at bottom of the page$")
public void verify_is_present_at_bottom_of_the_page(String arg1) throws Throwable {
 
}

}
