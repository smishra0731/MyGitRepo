package demo.test.testSteps;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import demo.base.locators.EliteCGSummaryWidgetString;
import demo.base.locators.EliteContentGatewatReportString;
import demo.test.testRunner.TestBase;
import junit.framework.Assert;

public class EliteCGSummaryWidget extends TestBase {
	
	@Then("^verify user is on 'Elite Content Gateway' reports$")
	public void verify_user_is_on_Elite_Content_Gateway_reports() throws Throwable {
	  String expectedTitle="Content Gateway Reports | Webcast Elite";
	  String actualTitle=app.getCommon().getTitle();
	  System.out.println("Actual tite is = "+actualTitle);
	  Assert.assertEquals("Title does not match", expectedTitle, actualTitle);
	 
	}

	@Then("^verify 'Summary' widget is present on 'Elite Content Gateway' reports$")
	public void verify_Summary_widget_is_present_on_Elite_Content_Gateway_reports() throws Throwable {
		app.getCommon().getDriver().switchTo().frame(app.getCommon().findElement(EliteContentGatewatReportString.srcIframe));
		app.getCommon().getDriver().switchTo().frame(app.getCommon().findElement(EliteCGSummaryWidgetString.widgetFrame));
		System.out.println("Title of first widget is = "+app.getCommon().getText(EliteCGSummaryWidgetString.summaryWidgetTitle));
	   Assert.assertTrue(app.getCommon().isDisplayed(EliteCGSummaryWidgetString.summaryWidgetTitle));
	   app.getCommon().getDriver().switchTo().defaultContent();
	}
	
	@Then("^verify 'Unique Visitors' data present is greater than zero$")
	public void verify_Unique_Visitors_data_present_is_greater_than_zero() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^verify 'Total Visits' data present is greater than zero$")
	public void verify_Total_Visits_data_present_is_greater_than_zero() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^verify 'Content Views' data present is greater than zero$")
	public void verify_Content_Views_data_present_is_greater_than_zero() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^verify filters present on Elite Content Gateway report are$")
	public void verify_filters_present_on_Elite_Content_Gateway_report_are(DataTable arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)
	    throw new PendingException();
	}

	@When("^user click 'Choose Content Gateway' on Elite Content Gateway report$")
	public void user_click_Choose_Content_Gateway_on_Elite_Content_Gateway_report() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^verify \"([^\"]*)\" option should be available in the 'Choose Content Gateway' dropdown on Elite Content Gateway report$")
	public void verify_option_should_be_available_in_the_Choose_Content_Gateway_dropdown_on_Elite_Content_Gateway_report(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^verify filter text present is \"([^\"]*)\" on Elite Content Gateway report$")
	public void verify_filter_text_present_is_on_Elite_Content_Gateway_report(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^user clicks on 'Select Date' filter on Elite Content Gateway report$")
	public void user_clicks_on_Select_Date_filter_on_Elite_Content_Gateway_report() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^verify options present in 'Select Date' dropdown are Elite Content Gateway$")
	public void verify_options_present_in_Select_Date_dropdown_are_Elite_Content_Gateway(DataTable arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)
	    throw new PendingException();
	}

	@Then("^user enters current date as 'From' date on Elite Content Gateway report$")
	public void user_enters_current_date_as_From_date_on_Elite_Content_Gateway_report() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^user enters current date plus (\\d+) days as 'To' date on Elite Content Gateway report$")
	public void user_enters_current_date_plus_days_as_To_date_on_Elite_Content_Gateway_report(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^user click on 'Go' buton on Elite Content Gateway report$")
	public void user_click_on_Go_buton_on_Elite_Content_Gateway_report() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	
	@Then("^verify filter text displays above selected date on Elite Content Gateway report$")
	public void verify_filter_text_displays_above_selected_date_on_Elite_Content_Gateway_report() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^user launches wcc elite \"([^\"]*)\"$")
	public void user_launches_wcc_elite(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^login with username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void login_with_username_and_password(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^verify Unique Visitors count$")
	public void verify_Unique_Visitors_count() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^new user launches Content Experience url \"([^\"]*)\"$")
	public void new_user_launches_Content_Experience_url(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^user refresh content gateway report$")
	public void user_refresh_content_gateway_report() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^verify \"([^\"]*)\" count is not increasing$")
	public void verify_count_is_not_increasing(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^same user reloads \"([^\"]*)\" page$")
	public void same_user_reloads_page(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^verify count is not increasing$")
	public void verify_count_is_not_increasing() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^verify  Total Visits count$")
	public void verify_Total_Visits_count() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^user launches Content Experience url \"https://gatewayqa\\.on(\\d+)\\.com/wcc/gateway/testexperience(\\d+)/(\\d+)$")
	public void user_launches_Content_Experience_url_https_gatewayqa_on_com_wcc_gateway_testexperience(int arg1, int arg2, int arg3) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^verify 'Total Visits' count does not increase$")
	public void verify_Total_Visits_count_does_not_increase() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^user reloads \"([^\"]*)\" page$")
	public void user_reloads_page(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^verify  Content Views count$")
	public void verify_Content_Views_count() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^user launches Content Experience url \"([^\"]*)\"$")
	public void user_launches_Content_Experience_url(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^register for Content Experience$")
	public void register_for_Content_Experience() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^view any \"([^\"]*)\"$")
	public void view_any(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^verify 'Content Views' count increases by (\\d+)$")
	public void verify_Content_Views_count_increases_by(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Given("^user launch 'Elite Cotent Gateway' report url \"([^\"]*)\" with username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void user_launch_Elite_Cotent_Gateway_report_url_with_username_and_password(String reportUrl, String userName, String passWord) throws Throwable {
		app.getCommon().deleteAllCookiesExample();
		app.getCommon().openUrl(reportUrl);
		app.getCommon().setImplicitWait(10);
		app.getCommon().type(EliteContentGatewatReportString.userName, userName);
		app.getCommon().type(EliteContentGatewatReportString.passWord, passWord);
		app.getCommon().click(EliteContentGatewatReportString.loginButton);
		Thread.sleep(10000);
	}

	@Then("^remove filter if any present$")
	public void remove_filter_if_any_present() throws Throwable {
		app.getCommon().getDriver().switchTo().frame(app.getCommon().findElement(EliteContentGatewatReportString.srcIframe));
		Thread.sleep(15000);
	   app.getCommon().click(EliteCGSummaryWidgetString.default90DaysFilter);
	   System.out.println("Default filter has been removed");
	   app.getCommon().getDriver().switchTo().defaultContent();
	  // Thread.sleep(5000);
	}
	
	@Then("^verify value of \"([^\"]*)\" within summary widget$")
	public void verify_value_of_within_summary_widget(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^user enters \"([^\"]*)\" in \"([^\"]*)\" textbox$")
	public void user_enters_in_textbox(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^user enters unique emailid in \"([^\"]*)\" textbox$")
	public void user_enters_unique_emailid_in_textbox(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^verify \"([^\"]*)\" count increases by (\\d+)$")
	public void verify_count_increases_by(String arg1, int arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^verify \"([^\"]*)\" count remains same$")
	public void verify_count_remains_same(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^user does not click on \"([^\"]*)\" button$")
	public void user_does_not_click_on_button(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^user click on \"([^\"]*)\" button$")
	public void user_click_on_button(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^remove default filter \"([^\"]*)\" from content gateway report page$")
	public void remove_default_filter_from_content_gateway_report_page(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^verify value of \"([^\"]*)\" should be other than previous value$")
	public void verify_value_of_should_be_other_than_previous_value(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^user enters \"([^\"]*)\" in From date text box$")
	public void user_enters_in_From_date_text_box(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^user enters \"([^\"]*)\" in To date text box$")
	public void user_enters_in_To_date_text_box(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^verify value of \"([^\"]*)\" changes to (\\d+)$")
	public void verify_value_of_changes_to(String arg1, int arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}


}
