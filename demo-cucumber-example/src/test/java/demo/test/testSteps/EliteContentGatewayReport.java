package demo.test.testSteps;

import org.junit.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import demo.base.locators.EliteContentGatewatReportString;
import demo.base.locators.EliteDocumentReportsString;
import demo.base.locators.EliteVideoReportsString;
import demo.test.testRunner.TestBase;

/**
 * Elite Registration steps
 * @author Sudhanshu
 *
 */


public class EliteContentGatewayReport extends TestBase {
	


	@When("^user enters login user name \"([^\"]*)\"$")
	public void user_enters_login_user_name(String userName) throws Throwable {
	    app.getCommon().type(EliteContentGatewatReportString.userName, userName);
	}

	@When("^user enters login password \"([^\"]*)\"$")
	public void user_enters_login_password(String passWord) throws Throwable {
		app.getCommon().type(EliteContentGatewatReportString.passWord, passWord);
	}

	@When("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
	    app.getCommon().click(EliteContentGatewatReportString.loginButton);
	    //Assert.assertEquals("OOPs something went wrong","My Webcasts | Webcast Elite",app.getCommon().getTitle());
	    app.getCommon().setImplicitWait(90);
	}

	@When("^user opens analytics page$")
	public void user_opens_analytics_page() throws Throwable {
	   app.getCommon().click(EliteContentGatewatReportString.analyticIcon);
	}

	@Then("^verify user on analytics 'DASHBOARD' page$")
	public void verify_user_on_analytics_DASHBOARD_page() throws Throwable {

		Assert.assertEquals("OOPs something went wrong","Analytics Dashboard | Webcast Elite",app.getCommon().getTitle());
		app.getCommon().setImplicitWait(10);
	}

	@When("^user open \"([^\"]*)\" tab$")
	public void user_open_tab(String tabName) throws Throwable {
		
		switch(tabName){
		
		case("CONTENT GATEWAY"):{
			app.getCommon().click(EliteContentGatewatReportString.contentGatewayTab);
			System.out.println(tabName+" tab clicked successfully");
			//app.getCommon().getDriver().wait(60);
		    app.getCommon().setImplicitWait(60);	
		    break;
		}		
		case("VIDEO"):{
			app.getCommon().click(EliteVideoReportsString.videoTab);
			System.out.println(tabName+" tab clicked successfully");
		    app.getCommon().setImplicitWait(60);
		    break;
		}		
		case("DOCUMENT"):{
			app.getCommon().click(EliteDocumentReportsString.documentTab);
			System.out.println(tabName+" tab clicked successfully");
			//app.getCommon().getDriver().wait(60);
		    app.getCommon().setImplicitWait(90);	
		    break;
		
		}
		
		}
	}

	@Then("^verify user is on \"([^\"]*)\" report$")
	public void verify_user_is_on_report(String pageTitle) throws Throwable {
		
		switch(pageTitle){
		
		case("POWER LEADS"):
			Assert.assertEquals("OOPs something went wrong","Leads Reports | Webcast Elite",app.getCommon().getTitle());	
		    System.out.println(pageTitle+" page title verified.");
		    break;		
		case("CONTENT GATEWAY"):		
			Assert.assertEquals("OOPs something went wrong","Content Gateway Reports | Webcast Elite",app.getCommon().getTitle());
		    System.out.println(pageTitle+" page title verified.");
	    	break;  	    
		case("WEBCASTS"):			
			Assert.assertEquals("OOPs something went wrong","Webcasts Report",app.getCommon().getTitle());
		    System.out.println(pageTitle+" page title verified.");
			break;
		case("Funnel"):			
			Assert.assertEquals("OOPs something went wrong","Funnel Audience | Webcast Elite",app.getCommon().getTitle());
		    System.out.println(pageTitle+" page title verified.");
			break;
       
	}
	}
	
	@Then("^verify page title is \"([^\"]*)\"$")
	public void verify_page_title_is(String pageTitle) throws Throwable {
		Assert.assertEquals("OOPs something went wrong",pageTitle,app.getCommon().getTitle());
	}
    
	 
	@Then("^verify 'Filters' bar is present on page$")
	public void verify_Filters_bar_is_present_on_page() throws Throwable {
		app.getCommon().getDriver().switchTo().frame(0);
		System.out.println("Text is ====== "+app.getCommon().getText(EliteContentGatewatReportString.filterBar));
        Assert.assertEquals("Filters:", app.getCommon().getText(EliteContentGatewatReportString.filterBar));

	}

	@Then("^verify \"([^\"]*)\" label is displaying in filteres bar$")
	public void verify_label_is_displaying_in_filteres_bar(String arg1) throws Throwable {
     	
	Assert.assertTrue(app.getCommon().isDisplayed(EliteContentGatewatReportString.filterBar)
			&&app.getCommon().isDisplayed(EliteContentGatewatReportString.contentGateway)
			  &&app.getCommon().isDisplayed(EliteContentGatewatReportString.select_Date));	
	
	}

	@Then("^verify \"([^\"]*)\" option present under 'Choose Content Gateway'$")
	public void verify_option_present_under_Choose_Content_Gateway(String arg1) throws Throwable {
		//app.getCommon().setImplicitWait(30);
		app.getCommon().getDriver().switchTo().frame(app.getCommon().findElement(EliteContentGatewatReportString.srcIframe));
		System.out.println("Selecting content gateway dropdown");
		app.getCommon().click(EliteContentGatewatReportString.contentGateway);
	    //Assert.assertTrue(app.getCommon().isDisplayed(eliteContentGatewatReportString.contentGateway_Dropdown_Option));
	    Assert.assertEquals("New Content Gateway 001", app.getCommon().getText(EliteContentGatewatReportString.contentGateway_Dropdown_Option));
	    System.out.println(arg1+" Dropdown option verified");
	    //app.getCommon().getDriver().switchTo().defaultContent();
	}
	
	@When("^user open 'Select Date' dropdown$")
	public void user_open_Select_Date_dropdown() throws Throwable {
		app.getCommon().getDriver().switchTo().frame(app.getCommon().findElement(EliteContentGatewatReportString.srcIframe));
		app.getCommon().click(EliteContentGatewatReportString.select_Date);
		
	}

	@When("^verify \"([^\"]*)\" option present under 'Select Date'$")
	public void verify_option_present_under_Select_Date(String dateOption) throws Throwable {
		switch(dateOption){
		case("View All"):
			Assert.assertTrue(app.getCommon().isDisplayed(EliteContentGatewatReportString.view_All_Option));	
		    System.out.println(dateOption+" verified");
		    break;
		case("View Last 90 Days"):
			Assert.assertTrue(app.getCommon().isDisplayed(EliteContentGatewatReportString.view_Last90Days_Option));
		    System.out.println(dateOption+" verified");
		    break;
		case("View Last 30 Days"):
			Assert.assertTrue(app.getCommon().isDisplayed(EliteContentGatewatReportString.view_Last30Days_Option));
		    System.out.println(dateOption+" verified");
		    break;
		}
		
				
				  
	}
    
	@When("^verify 'From Date' textbox is present under 'Select Date'$")
	public void verify_From_Date_textbox_is_present_under_Select_Date() throws Throwable {
		Assert.assertTrue(app.getCommon().isDisplayed(EliteContentGatewatReportString.fromDate_TextBox));
	    
	}
	
	@When("^verify 'To Date' textbox is present under 'Select Date'$")
	public void verify_To_Date_textbox_is_present_under_Select_Date() throws Throwable {
		Assert.assertTrue(app.getCommon().isDisplayed(EliteContentGatewatReportString.toDate_TextBox));
	}
	
	@When("^verify calender icon present next to 'From Date'$")
	public void verify_calender_icon_present_next_to_From_Date() throws Throwable {
		Assert.assertTrue(app.getCommon().isDisplayed(EliteContentGatewatReportString.fromDate_Icon));
				            
	}

	@When("^verify calender icon present next to 'To Date'$")
	public void verify_calender_icon_present_next_to_To_Date() throws Throwable {
		Assert.assertTrue(app.getCommon().isDisplayed(EliteContentGatewatReportString.toDate_Icon));
	            
	}
	
	@When("^verify 'Go' button is present$")
	public void verify_Go_button_is_present() throws Throwable {
		Assert.assertTrue(app.getCommon().isDisplayed(EliteContentGatewatReportString.goIcon));
	}
	
	@Then("^verify the default date filter selected is \"([^\"]*)\"$")
	public void verify_the_default_date_filter_selected_is(String defaultDateFilter) throws Throwable {
		app.getCommon().getDriver().switchTo().frame(0);
		Assert.assertTrue(app.getCommon().isDisplayed(EliteContentGatewatReportString.default_DateFilter));
	    Assert.assertEquals(defaultDateFilter, app.getCommon().getText(EliteContentGatewatReportString.default_DateFilter));
	}

	@When("^user click on cross button to remove the filter$")
	public void user_click_on_cross_button_to_remove_the_filter() throws Throwable {
     app.getCommon().click(EliteContentGatewatReportString.defaultDate_cross_Icon);
     app.getCommon().setImplicitWait(30);
	}

	@Then("^verify default date filter is removed$")
	public void verify_default_date_filter_is_removed() throws Throwable {

//		app.getCommon().click(eliteContentGatewatReportString.contentGatewayTab);
//		app.getCommon().getDriver().switchTo().frame(0);
//		app.getCommon().refresh();
//		Assert.assertFalse(app.getCommon().isDisplayed(eliteContentGatewatReportString.default_DateFilter));
	}
	
	@Then("^verify following columns are present in data table$")
	public void verify_following_columns_are_present_in_data_table(DataTable arg1) throws Throwable {
		app.getCommon().getDriver().switchTo().frame(app.getCommon().getDriver().findElement(EliteContentGatewatReportString.srcIframe));
		app.getCommon().getDriver().switchTo().frame(app.getCommon().getDriver().findElement(EliteContentGatewatReportString.webcastsIframe));
		Assert.assertEquals(System.getProperty("CONTENT_TITLE"), app.getCommon().getText(EliteContentGatewatReportString.contentTitleColumnHeader));
		Assert.assertEquals(System.getProperty("TOTAL_VIEWS"), app.getCommon().getText(EliteContentGatewatReportString.totalViewsColumnHeader));
		Assert.assertEquals(System.getProperty("UNIQUE_VIEWERS"), app.getCommon().getText(EliteContentGatewatReportString.uniqueViewersColumnHeader));
		Assert.assertEquals(System.getProperty("TYPE"), app.getCommon().getText(EliteContentGatewatReportString.typeColumnHeader));
		app.getCommon().getDriver().switchTo().defaultContent();
	}

	@Then("^verify Export to excel icon is present on Content Gateway Page$")
	public void verify_Export_to_excel_icon_is_present_on_Content_Gateway_Page() throws Throwable {
		app.getCommon().getDriver().switchTo().frame(app.getCommon().getDriver().findElement(EliteContentGatewatReportString.srcIframe));
		app.getCommon().getDriver().switchTo().frame(app.getCommon().getDriver().findElement(EliteContentGatewatReportString.webcastsIframe));
		Assert.assertTrue(app.getCommon().getDriver().findElement(EliteContentGatewatReportString.exportIcon).isDisplayed());
	  
	}

}
