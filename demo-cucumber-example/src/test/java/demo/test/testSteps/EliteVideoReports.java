package demo.test.testSteps;

import org.junit.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import demo.base.locators.EliteContentGatewatReportString;
import demo.base.locators.EliteVideoReportsString;
import demo.test.testRunner.TestBase;

public class EliteVideoReports extends TestBase{
	
	@Then("^verify \"([^\"]*)\" tab is present$")
	public void verify_tab_is_present(String arg1) throws Throwable {
		Assert.assertTrue(app.getCommon().isDisplayed(EliteVideoReportsString.videoTab));
	    
	}
	
	@Then("^verify user is on \"([^\"]*)\" tab$")
	public void verify_user_is_on_tab(String arg1) throws Throwable {
		Assert.assertEquals("OOPs something went wrong","Video | Webcast Elite",app.getCommon().getTitle());
	}

	@Then("^verify Export to excel icon is present$")
	public void verify_Export_to_excel_icon_is_present() throws Throwable {
		app.getCommon().getDriver().switchTo().frame(app.getCommon().findElement(EliteVideoReportsString.iframe));
		Assert.assertTrue(app.getCommon().isDisplayed(EliteVideoReportsString.exportToExcelIcon));
		System.out.println("Export to excel icon availability verified");
	   
	}
	
	@Then("^verify Data info is present on page$")
	public void verify_Data_info_is_present_on_page() throws Throwable {
	Assert.assertTrue(app.getCommon().isDisplayed(EliteVideoReportsString.videoDataTableRow));
	System.out.println("Data in video data table verified");
	}

	@Then("^verify Video Data table is present$")
	public void verify_Video_Data_table_is_present() throws Throwable {
	   Assert.assertTrue(app.getCommon().isDisplayed(EliteVideoReportsString.videoTitleColumnHeader));
	   System.out.println("Video data table availability verified");
	}

	@Then("^verify \"([^\"]*)\" column is present$")
	public void verify_column_is_present(String arg1) throws Throwable {
		switch(arg1){
		
		case("Video Title"):
		Assert.assertEquals(arg1, app.getCommon().getText(EliteVideoReportsString.videoTitleColumnHeader));
		System.out.println(arg1+" Column header verified");
		break;
		case("Total Views"):
		Assert.assertEquals(arg1, app.getCommon().getText(EliteVideoReportsString.totalViewsColumnHeader));
		System.out.println(arg1+" Column header verified");
		break;
		case("Unique Views"):
		Assert.assertEquals(arg1, app.getCommon().getText(EliteVideoReportsString.uniqueViewsColumnHeader));
		System.out.println(arg1+" Column header verified");
		break;
		case("Avg Viewing Duration"):
		Assert.assertEquals(arg1, app.getCommon().getText(EliteVideoReportsString.avgViewingSessionColumnHeader));
		System.out.println(arg1+" Column header verified");
		break;
		
		}
	
		
	}

	@Then("^verify video data is present under table$")
	public void verify_video_data_is_present_under_table() throws Throwable {
		   Assert.assertTrue(app.getCommon().isDisplayed(EliteVideoReportsString.videoTitleColumnHeader));
		   System.out.println("Video data table availability verified");
		   app.getCommon().getDriver().switchTo().defaultContent();
	}

	@Then("^verify \"([^\"]*)\" message display$")
	public void verify_message_display(String arg1) throws Throwable {
	   
	}

	@Then("^verify \"([^\"]*)\" link is present$")
	public void verify_link_is_present(String arg1) throws Throwable {
	
	}

	@Then("^verify page nummber is (\\d+)$")
	public void verify_page_nummber_is(int arg1) throws Throwable {
	    
	}

	@Then("^verify \"([^\"]*)\" link is not clickable$")
	public void verify_link_is_not_clickable(String arg1) throws Throwable {
	 
	}

	@Then("^verify values inb first row under columns as below$")
	public void verify_values_inb_first_row_under_columns_as_below(DataTable arg1) throws Throwable {

	}

	@Then("^verify sorting icon for below columns are clickable$")
	public void verify_sorting_icon_for_below_columns_are_clickable(DataTable arg1) throws Throwable {
	
	}

	@Then("^verify \"([^\"]*)\" link is clickable$")
	public void verify_link_is_clickable(String arg1) throws Throwable {
	   
	}

	@Then("^verify user is at page number (\\d+)$")
	public void verify_user_is_at_page_number(int arg1) throws Throwable {
	   
	}

	@Then("^verify page (\\d+) is not clickable$")
	public void verify_page_is_not_clickable(int arg1) throws Throwable {
	   
	}

	@Then("^verify page (\\d+) is clickable$")
	public void verify_page_is_clickable(int arg1) throws Throwable {
	
	}

	@Then("^user clicks on page number (\\d+)$")
	public void user_clicks_on_page_number(int arg1) throws Throwable {
	    
	}

	@Then("^verify data within table is of page number (\\d+)$")
	public void verify_data_within_table_is_of_page_number(int arg1) throws Throwable {
	 
	}

	@Then("^verify Total Views count for \"([^\"]*)\"$")
	public void verify_Total_Views_count_for(String arg1) throws Throwable {
	   
	}

	@Then("^user launches content url as \"([^\"]*)\"$")
	public void user_launches_content_url_as(String arg1) throws Throwable {
	  
	}

	@Then("^user enteres \"([^\"]*)\" in email text box$")
	public void user_enteres_in_email_text_box(String arg1) throws Throwable {
	
	}

	@Then("^verify Total Views count should increase by (\\d+)$")
	public void verify_Total_Views_count_should_increase_by(int arg1) throws Throwable {
	   
	}

	@Then("^verify Unique Views count for \"([^\"]*)\"$")
	public void verify_Unique_Views_count_for(String arg1) throws Throwable {

	}

	@Then("^user registers with unique emailid$")
	public void user_registers_with_unique_emailid() throws Throwable {
	   
	}

	@Then("^user clicks on register button$")
	public void user_clicks_on_register_button() throws Throwable {
	    
	}

	@Then("^verify Unique Views count should increase by (\\d+)$")
	public void verify_Unique_Views_count_should_increase_by(int arg1) throws Throwable {
	   
	}

}
