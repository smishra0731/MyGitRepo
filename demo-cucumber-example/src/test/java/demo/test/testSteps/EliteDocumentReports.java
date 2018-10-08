package demo.test.testSteps;


import org.junit.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import demo.base.locators.EliteContentGatewatReportString;
import demo.base.locators.EliteVideoReportsString;

public class EliteDocumentReports {

	
	@Then("^verify column \"([^\"]*)\" is present on 'Document' tab$")
	public void verify_column_is_present_on_Document_tab(String arg1) throws Throwable {
	   
	}

	@Then("^verify Downloads count for \"([^\"]*)\"$")
	public void verify_Downloads_count_for(String arg1) throws Throwable {

	}

	@Then("^user clicks on download button$")
	public void user_clicks_on_download_button() throws Throwable {
	  
	}

	@Then("^verify Downloads count should increase by (\\d+)$")
	public void verify_Downloads_count_should_increase_by(int arg1) throws Throwable {
	   
	}


}
