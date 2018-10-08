package demo.test.testSteps;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import demo.base.locators.MakeMyTripString;
import demo.test.testRunner.TestBase; 


/**
 * Make my trip Search flight 
 * @author Sudhanshu
 *
 */

public class MakeMyTrip extends TestBase {

	@When("^user launches make my trip url \"([^\"]*)\"$")
	public void user_launches_make_my_trip_url(String arg1) throws Throwable {
		app.getCommon().deleteAllCookiesExample();
		app.getCommon().openUrl(System.getProperty("makemytripUrl"));
		Thread.sleep(5000);;
	}

	@When("^user selects \"([^\"]*)\" trip option$")
	public void user_selects_trip_option(String arg1) throws Throwable {
		app.getCommon().click(MakeMyTripString.oneWayOption);
		System.out.println(arg1+" clicked successfully");
	    
	}

	@When("^user selects \"([^\"]*)\" from From dropdown$")
	public void user_selects_from_From_dropdown(String source) throws Throwable {
		app.getCommon().type(MakeMyTripString.selectSourceBox, source);
		System.out.println(source+" Clicked Successfully");
		Thread.sleep(3000);
		app.getCommon().click(MakeMyTripString.enteredLocation);
		System.out.println("Selected City successfully");
		}
	    
	  	  	  
	

	@When("^user selects \"([^\"]*)\" from To dropdown$")
	public void user_selects_from_To_dropdown(String destination) throws Throwable {
		
		app.getCommon().type(MakeMyTripString.selectDestinationBox, destination);
		System.out.println(destination+" Clicked Successfully");
		Thread.sleep(3000);
	      	Actions action=new Actions(app.getCommon().getDriver());
	    	action.moveToElement(app.getCommon().findElement(MakeMyTripString.selectCity(destination))).build().perform();
	    	app.getCommon().click(MakeMyTripString.selectCity(destination));
	    	System.out.println("Destination City successfully");
	
	}

	@When("^user selects departure date as \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_selects_departure_date_as_and(String date, String month) throws Throwable {
			app.getCommon().click(MakeMyTripString.dateBox);
			app.getCommon().click(MakeMyTripString.selectDate(month, date));
			System.out.println();
	}

	@When("^user clicks Passenger|Class to enter details$")
	public void user_clicks_Passenger_Class_to_enter_details() throws Throwable {
	   app.getCommon().click(MakeMyTripString.selectPassengersBox);
	}

	@When("^user selects adults as \"([^\"]*)\" and children as \"([^\"]*)\"$")
	public void user_selects_adults_as_and_children_as(String adults, String children) throws Throwable {
		app.getCommon().click(MakeMyTripString.selectAdults(adults));
		System.out.println(adults+" Adults selected");
		app.getCommon().click(MakeMyTripString.selectChildren(children));
		System.out.println(children+" Children selected");
	}

	@When("^user selects Premium Economy class$")
	public void user_selects_Premium_Economy_class() throws Throwable {
	   app.getCommon().click(MakeMyTripString.selectPremiumEconomy);
	   System.out.println("Premiun economy class has been selected");
	}

	@When("^user click on Search button$")
	public void user_click_on_Search_button() throws Throwable {
	  app.getCommon().click(MakeMyTripString.searchBtn);
	  System.out.println("Search button clicked successfully");
	}


	@When("^verify search results are according to entered \"([^\"]*)\" and  \"([^\"]*)\"$")
	public void verify_search_results_are_according_to_entered_and(String source, String destination) throws Throwable {
		Thread.sleep(3000);
	    Assert.assertEquals("Ooops something went wrong", "Flight Search", app.getCommon().getTitle());
	    System.out.println("Page title verified as "+app.getCommon().getTitle());
	    Assert.assertEquals(source+" to "+destination, app.getCommon().getText(MakeMyTripString.verificationMessage));
	    System.out.println("Search from "+source+" to "+destination+" has been verified");
		Thread.sleep(5000);
	    app.getCommon().dragAndDrop(app.getCommon().findElement(MakeMyTripString.dragger),app.getCommon().findElement(By.id("price_slider")));
	    app.getCommon().setImplicitWait(20);
	}

	
	
}


	

