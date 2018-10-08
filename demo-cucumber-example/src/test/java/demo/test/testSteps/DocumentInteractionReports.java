package demo.test.testSteps;

import java.util.LinkedList;
import java.util.List;

import org.junit.Assert;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import demo.base.locators.DocumentIntelligenceReportString;
import demo.base.locators.DocumentInteractionReportsString;
import demo.base.locators.VideoIntelligenceReportString;
import demo.test.testRunner.TestBase;
import cucumber.api.DataTable;

public class DocumentInteractionReports extends TestBase {
	
	@Then("^verify INTERACTIONS main menu icon is displayed$")
	public void verify_INTERACTIONS_main_menu_icon_is_displayed() throws Throwable {
		app.getCommon().getDriver().switchTo().frame(app.getCommon().findElement(VideoIntelligenceReportString.iframeSrc));
		Assert.assertEquals("OOPs something went wrong","INTERACTIONS",app.getCommon().getText(DocumentIntelligenceReportString.interactionTab));
	    System.out.println("INTERACTION " +" Tab verified");
	}
	
	@Then("^verify INTERACTIONS report table is displayed$")
	public void verify_INTERACTIONS_report_table_is_displayed() throws Throwable {		
		Assert.assertTrue(app.getCommon().isDisplayed(DocumentInteractionReportsString.dataTableHeader));
	}
	
	@Then("^verify 'Downloads' icon displayed$")
	public void verify_Downloads_icon_displayed() throws Throwable {
	   Assert.assertTrue(app.getCommon().isDisplayed(DocumentInteractionReportsString.downloadIcon));
	   System.out.println("Icon displaying at Interaction report page");
	}

	@Then("^verify the title of graphical representation box is \"([^\"]*)\"$")
	public void verify_the_title_of_graphical_representation_box_is(String title) throws Throwable {
		Assert.assertTrue(app.getCommon().getText(DocumentInteractionReportsString.firstResourceName).contains(title));
		//Assert.assertEquals("Oops something went wrong", title, app.getCommon().getText(DocumentInteractionReportsString.firstResourceName).contains(title));
	    System.out.println("First resource name verified as "+app.getCommon().getText(DocumentInteractionReportsString.firstResourceName));
	}

	@Then("^verify \"([^\"]*)\" text is displayed in graphical representation box$")
	public void verify_text_is_displayed_in_graphical_representation_box(String barTitle) throws Throwable {
		switch(barTitle){
		case "Unique Downloads":
			Assert.assertTrue(app.getCommon().isDisplayed(DocumentInteractionReportsString.uniqueDownloadsText));
		    System.out.println("Bar title  has been verified as "+barTitle);
		break;   
		
		case "Total Downloads":
			Assert.assertTrue(app.getCommon().isDisplayed(DocumentInteractionReportsString.totalDownloadsText));
		    System.out.println("Bar title  has been verified as "+barTitle);
		break;
		
		default:
            throw new Exception("No match found");
		}
	   
	}
	
	@Then("^verify \"([^\"]*)\" number is \"([^\"]*)\"$")
	public void verify_number_is(String downloadType, String downloadCount) throws Throwable {
		switch(downloadType){
		case "Unique Downloads":
			Thread.sleep(5000);
			Assert.assertTrue(app.getCommon().isDisplayed(DocumentInteractionReportsString.uniqueDownloadsCount));
			Assert.assertEquals(downloadCount, app.getCommon().getText(DocumentInteractionReportsString.uniqueDownloadsCount));
			System.out.println("Unique count  has been verified as "+app.getCommon().getText(DocumentInteractionReportsString.uniqueDownloadsCount));
		break;   
		
		case "Total Downloads":
			Thread.sleep(5000);
			Assert.assertTrue(app.getCommon().isDisplayed(DocumentInteractionReportsString.totalDownloadsCount));
			Assert.assertEquals(downloadCount, app.getCommon().getText(DocumentInteractionReportsString.totalDownloadsCount));
			System.out.println("Total count  has been verified as "+app.getCommon().getText(DocumentInteractionReportsString.totalDownloadsCount));
		break;
		
		default:
            throw new Exception("No match found");
		}
	    
	}

	@Then("^verify the bar displaying number \"([^\"]*)\"$")
	public void verify_the_bar_displaying_number(String barCount) throws Throwable {
		switch(barCount){
		case "21":
			Thread.sleep(5000);
			Assert.assertTrue(app.getCommon().isDisplayed(DocumentInteractionReportsString.uniqueDownloadsCount));
			System.out.println("Bar count  has been verified as "+app.getCommon().getText(DocumentInteractionReportsString.uniqueDownloadsCount));
		break;   
		
		case "28":
			Assert.assertTrue(app.getCommon().isDisplayed(DocumentInteractionReportsString.totalDownloadsText));
		    System.out.println("Bar title  has been verified as "+app.getCommon().getText(DocumentInteractionReportsString.totalDownloadsCount));
		break;
		
		default:
            throw new Exception("No match found");
		}
	    
	}


	@Then("^verify following columns present in interactions table$")
	public void verify_following_columns_present_in_interactions_table(DataTable columnHeader) throws Throwable {
		Thread.sleep(5000);
		List<String> expected=columnHeader.asList(String.class);
		List<String> actual=new LinkedList<String>();
		for(int i=1;i<=6;i++){			
			actual.add(app.getCommon().getText(DocumentInteractionReportsString.dataTableColumnHeader(i)));
		 }
		 System.out.println("Expected partnerref values are "+expected);
		 System.out.println("Actual partnerref values are "+actual);
		 Assert.assertTrue(expected.equals(actual));
		 System.out.println("List comparision completed successfully ");
		
	}

	@Then("^verify following data present in row (\\d+) in interactions table$")
	public void verify_following_data_present_in_row_in_interactions_table(int arg1, DataTable rowData) throws Throwable {
		Thread.sleep(5000);
		List<String> expected=rowData.asList(String.class);
		List<String> actual=new LinkedList<String>();
		for(int i=1;i<=6;i++){			
			actual.add(app.getCommon().getText(DocumentInteractionReportsString.firstRowData(i)));
		 }
		 System.out.println("Expected partnerref values are "+expected);
		 System.out.println("Actual partnerref values are "+actual);
		 Assert.assertTrue(expected.equals(actual));
		 System.out.println("List comparision completed successfully ");
		
	}
	
	@Then("^verify \"([^\"]*)\" results text is displaying below interaction table$")
	public void verify_results_text_is_displaying_below_interaction_table(String resultText) throws Throwable {
		Thread.sleep(5000);
		System.out.println("Text available at bottom of page is "+app.getCommon().getText(DocumentInteractionReportsString.textAtBottomOfPage));
		Assert.assertEquals(resultText, app.getCommon().getText(DocumentInteractionReportsString.textAtBottomOfPage));
	  }
      
	@Then("^verify 'Next' and 'Previous' page links displayed$")
	public void verify_Next_and_Previous_page_links_displayed() throws Throwable {
	    System.out.println("Verifying next page link");
		Assert.assertTrue(app.getCommon().isDisplayed(DocumentInteractionReportsString.nextPageLink));
		System.out.println("Verifying previous page link");
		Assert.assertTrue(app.getCommon().isDisplayed(DocumentInteractionReportsString.previousPageLink));
	}

	@Then("^verify 'Last' and 'First' page links displayed$")
	public void verify_Last_and_First_page_links_displayed() throws Throwable {
		System.out.println("Verifying last page link");
		Assert.assertTrue(app.getCommon().isDisplayed(DocumentInteractionReportsString.lastPageLink));
		System.out.println("Verifying first page link");
		Assert.assertTrue(app.getCommon().isDisplayed(DocumentInteractionReportsString.firstPageLink));
	}
   
	@Then("^verify \"([^\"]*)\" page info is displaying$")
	public void verify_page_info_is_displaying(String pageInfo) throws Throwable {
		
		Assert.assertTrue(app.getCommon().isDisplayed(DocumentInteractionReportsString.pagination2));
		System.out.println(app.getCommon().getText(DocumentInteractionReportsString.pagination2));
		String actualPageInfo=app.getCommon().getText(DocumentInteractionReportsString.pagination1)+" "+
				  app.getCommon().getText(DocumentInteractionReportsString.pagination2)+" "+
				  app.getCommon().getText(DocumentInteractionReportsString.pagination3)+" "+
				  app.getCommon().getText(DocumentInteractionReportsString.pagination4);
		
        System.out.println("Page info is "+actualPageInfo);
        Assert.assertEquals(pageInfo, actualPageInfo);
        System.out.println("Page info verified");
      
	  
	}
	
	@When("^user click on 'Next' page link$")
	public void user_click_on_Next_page_link() throws Throwable {
	    app.getCommon().click(DocumentInteractionReportsString.nextPageLink);
	}
	
	@Then("^verify message \"([^\"]*)\" within data table$")
	public void verify_message_within_data_table(String expectedMessage) throws Throwable {
		String actualMessage=app.getCommon().getText(DocumentInteractionReportsString.noDataToShowMessage);
	  System.out.println(actualMessage);
	  Assert.assertEquals(expectedMessage, actualMessage);
	}

	@Then("^verify sort icon is not available with any column header$")
	public void verify_sort_icon_is_not_available_with_any_column_header() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}


}
