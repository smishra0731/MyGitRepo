package demo.test.testSteps;

import demo.test.testRunner.TestBase;

import java.util.Collection;
import java.util.LinkedList;
import java.util.List;

import org.junit.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import demo.base.locators.DocumentIntelligenceReportString;
import demo.base.locators.EliteContentGatewatReportString;
import demo.base.locators.EliteVideoReportsString;
import demo.base.locators.VideoIntelligenceReportString;

public class VideoIntelligenceReport extends TestBase {
	
	@When("^user launch \"([^\"]*)\" Intelligence URL \"([^\"]*)\"$")
	public void user_launch_Intelligence_URL(String arg1, String arg2) throws Throwable {
	  app.getCommon().getDriver().get(System.getProperty(arg2));
	  System.out.println(arg1+" Intelligent url Launched Successfully as "+System.getProperty(arg2));
	}

	@Then("^verify \"([^\"]*)\" Intelligence Report report is loaded$")
	public void verify_Intelligence_Report_report_is_loaded(String arg1) throws Throwable {
		System.out.println("Verifying loading of "+arg1+" report");
			  
	}

	@Then("^verify the report title \"([^\"]*)\" is displayed$")
	public void verify_the_report_title_is_displayed(String reportTitle) throws Throwable {
		app.getCommon().getDriver().switchTo().frame(app.getCommon().findElement(VideoIntelligenceReportString.iframeSrc));
		Assert.assertEquals("OOPs something went wrong",reportTitle,app.getCommon().getText(VideoIntelligenceReportString.reportTitle));
		System.out.println("Report title is "+app.getCommon().getText(VideoIntelligenceReportString.reportTitle)+" and verified.");
	    }
	
	@Then("^verify event id \"([^\"]*)\" is displayed in header$")
	public void verify_event_id_is_displayed_in_header(String eventId) throws Throwable {
		Assert.assertEquals("OOPs something went wrong",eventId,app.getCommon().getText(VideoIntelligenceReportString.eventIdInHeader));
		System.out.println("EventId is "+app.getCommon().getText(VideoIntelligenceReportString.eventIdInHeader)+" and verified.");
	    
	}
	
	@Then("^verify client name \"([^\"]*)\" is displayed in header$")
	public void verify_client_name_is_displayed_in_header(String clientName) throws Throwable {
		Assert.assertEquals("OOPs something went wrong",clientName,app.getCommon().getText(VideoIntelligenceReportString.clientNameInHeader));
		System.out.println("Client Name is "+app.getCommon().getText(VideoIntelligenceReportString.clientNameInHeader)+" and verified.");	
		
	}

	@Then("^verify date \"([^\"]*)\" is displayed in header$")
	public void verify_date_is_displayed_in_header(String arg1) throws Throwable {
	Assert.assertTrue(app.getCommon().isDisplayed(VideoIntelligenceReportString.dateInHeader));
	System.out.println("Presence of date is verified. ");
	}

	@Then("^verify Image is displayed in header$")
	public void verify_Image_is_displayed_in_header() throws Throwable {
		
		Assert.assertTrue(app.getCommon().isDisplayed(VideoIntelligenceReportString.imageInHeader));
		System.out.println("Presence of image is verified. ");
		
	}

	@Then("^verify 'My Dashboard' tab is selected by default$")
	public void verify_My_Dashboard_tab_is_selected_by_default() throws Throwable {
		app.getCommon().getDriver().switchTo().frame(app.getCommon().findElement(VideoIntelligenceReportString.iframeSrc));
	   Assert.assertTrue(app.getCommon().isSelected(DocumentIntelligenceReportString.myDashboardTab));
	}

	@Then("^verify \"([^\"]*)\" heading is displayed on 'My Dashboard' tab$")
	public void verify_heading_is_displayed_on_My_Dashboard_tab(String heading) throws Throwable {
		Assert.assertEquals("OOPs something went wrong",heading,app.getCommon().getText(DocumentIntelligenceReportString.myDashboardHeading));
	}

	
	@Then("^verify 'Export' icon is displayed$")
	public void verify_Export_icon_is_displayed() throws Throwable {
	 app.getCommon().isDisplayed(DocumentIntelligenceReportString.exportIcon);   
	}

	@When("^user click on \"([^\"]*)\" tab of \"([^\"]*)\"$")
	public void user_click_on_tab_of(String audienceTab, String reportType) throws Throwable {
		//app.getCommon().click(DocumentIntelligenceReportString.audienceTab);
		
	  switch(reportType){
	  
	  case("DIR"):
	  app.getCommon().click(DocumentIntelligenceReportString.audienceTab);
	  break;
	  
	  case("VIR"):
	  app.getCommon().click(VideoIntelligenceReportString.audienceTab);
	  break;
	  
	  }
	}
	@When("^verify \"([^\"]*)\" heading is displayed on 'Audience' tab$")
	public void verify_heading_is_displayed_on_Audience_tab(String arg1) throws Throwable {
	   
	}

	
	@When("^verify \"([^\"]*)\" column is present on Audience Tab$")
	public void verify_column_is_present_on_Audience_Tab(String columnHeader) throws Throwable {
	app.getCommon().setImplicitWait(30);
	     
	switch(columnHeader){
	  case("TOTAL_VIEWS"):
	    	System.out.println("Column name is ------> "+app.getCommon().getText(DocumentIntelligenceReportString.totalViewsColumnHEader));
	    	Assert.assertEquals("OOPs something went wrong",System.getProperty(columnHeader),app.getCommon().getText(DocumentIntelligenceReportString.totalViewsColumnHEader));
	        System.out.println(columnHeader+" Column header name verified"); 	
     break;
	    
	 case("PAGES_VIEWED"):
    	Assert.assertEquals("OOPs something went wrong",System.getProperty(columnHeader),app.getCommon().getText(DocumentIntelligenceReportString.pagesViewedColumnHEader));
        System.out.println(columnHeader+" Column header name verified");
     break;
     case("DURATION"):
    	Assert.assertEquals("OOPs something went wrong",System.getProperty(columnHeader),app.getCommon().getText(DocumentIntelligenceReportString.durationColumnHEader));
        System.out.println(columnHeader+" Column header name verified");    
     break;
     case("FIRST_NAME"):
    	Assert.assertEquals("OOPs something went wrong",System.getProperty(columnHeader),app.getCommon().getText(DocumentIntelligenceReportString.firstNameColumnHEader));
        System.out.println(columnHeader+" Column header name verified");   
     break;
    case("LAST_NAME"):
    	Assert.assertEquals("OOPs something went wrong",System.getProperty(columnHeader),app.getCommon().getText(DocumentIntelligenceReportString.lastNameColumnHEader));
    	System.out.println(columnHeader+" Column header name verified");    
    break;
    case("EMAIL"):
    	Assert.assertEquals("OOPs something went wrong",System.getProperty(columnHeader),app.getCommon().getText(DocumentIntelligenceReportString.emailColumnHEader));
    	System.out.println(columnHeader+" Column header name verified");    
    break;
    case("COMPANY"):
    	Assert.assertEquals("OOPs something went wrong",System.getProperty(columnHeader),app.getCommon().getText(DocumentIntelligenceReportString.companyColumnHEader));
    	System.out.println(columnHeader+" Column header name verified");    
    break;
    case("TITLE"):
    	Assert.assertEquals("OOPs something went wrong",System.getProperty(columnHeader),app.getCommon().getText(DocumentIntelligenceReportString.titleColumnHEader));
    	System.out.println(columnHeader+" Column header name verified");
    break;
    case("INDUSTRY"):
    	Assert.assertEquals("OOPs something went wrong",System.getProperty(columnHeader),app.getCommon().getText(DocumentIntelligenceReportString.industryColumnHEader));
    	System.out.println(columnHeader+" Column header name verified");    
    break;
    case("STREET_ADD_ONE"):
    	Assert.assertEquals("OOPs something went wrong",System.getProperty(columnHeader),app.getCommon().getText(DocumentIntelligenceReportString.streetAddOneColumnHEader));
    	System.out.println(columnHeader+" Column header name verified");    
    break;
    case("STREET_ADD_TWO"):
    	Assert.assertEquals("OOPs something went wrong",System.getProperty(columnHeader),app.getCommon().getText(DocumentIntelligenceReportString.streetAddTwoColumnHEader));
    	System.out.println(columnHeader+" Column header name verified");    
    break;
    case("CITY"):
    	Assert.assertEquals("OOPs something went wrong",System.getProperty(columnHeader),app.getCommon().getText(DocumentIntelligenceReportString.cityColumnHEader));
	    break;
    case("STATE"):
    	Assert.assertEquals("OOPs something went wrong",System.getProperty(columnHeader),app.getCommon().getText(DocumentIntelligenceReportString.stateColumnHEader));
    	System.out.println(columnHeader+" Column header name verified");    
    break;
    case("POSTAL_CODE"):
    	Assert.assertEquals("OOPs something went wrong",System.getProperty(columnHeader),app.getCommon().getText(DocumentIntelligenceReportString.postalCodeColumnHEader));
    	System.out.println(columnHeader+" Column header name verified");    
    break;
    case("COUNTRY"):
    	Assert.assertEquals("OOPs something went wrong",System.getProperty(columnHeader),app.getCommon().getText(DocumentIntelligenceReportString.countryColumnHEader));
    	System.out.println(columnHeader+" Column header name verified");    
    break;
    case("WORK_PHONE"):
    	Assert.assertEquals("OOPs something went wrong",System.getProperty(columnHeader),app.getCommon().getText(DocumentIntelligenceReportString.workPhoneColumnHEader));
    	System.out.println(columnHeader+" Column header name verified");    
    break;
    case("CPMPANY_SIZE"):
    	Assert.assertEquals("OOPs something went wrong",System.getProperty(columnHeader),app.getCommon().getText(DocumentIntelligenceReportString.companySizeColumnHEader));
    	System.out.println(columnHeader+" Column header name verified");
    break;
    case("JOB_FUNCTION"):
    	Assert.assertEquals("OOPs something went wrong",System.getProperty(columnHeader),app.getCommon().getText(DocumentIntelligenceReportString.jobFunctionColumnHEader));
    	System.out.println(columnHeader+" Column header name verified");	
    break;
    case("OPT_OUT_EVENT"):
    	Assert.assertEquals("OOPs something went wrong",System.getProperty(columnHeader),app.getCommon().getText(DocumentIntelligenceReportString.optOutEventColumnHEader));
    	System.out.println(columnHeader+" Column header name verified");	
    break;
    case("OPT_OUT_MARKETING"):
    	Assert.assertEquals("OOPs something went wrong",System.getProperty(columnHeader),app.getCommon().getText(DocumentIntelligenceReportString.optOutMarketingColumnHEader));
    	System.out.println(columnHeader+" Column header name verified");	
    break;
    case("REG_TIME"):
    	Assert.assertEquals("OOPs something went wrong",System.getProperty(columnHeader),app.getCommon().getText(DocumentIntelligenceReportString.regTimeColumnHEader));
    	System.out.println(columnHeader+" Column header name verified");	
    break;
    case("SOURCE"):
    	Assert.assertEquals("OOPs something went wrong",System.getProperty(columnHeader),app.getCommon().getText(DocumentIntelligenceReportString.sourceColumnHEader));
    	System.out.println(columnHeader+" Column header name verified");	
    break;
    }
	}



}
