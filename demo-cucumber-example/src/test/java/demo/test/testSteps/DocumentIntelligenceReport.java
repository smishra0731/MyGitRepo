package demo.test.testSteps;

import java.util.LinkedList;
import java.util.List;
import java.util.Set;

import org.junit.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import demo.base.locators.DocumentIntelligenceReportString;
import demo.base.locators.DocumentInteractionReportsString;
import demo.base.locators.VideoIntelligenceReportString;
import demo.test.testRunner.TestBase;

public class DocumentIntelligenceReport extends TestBase {
	
	@Then("^verify sequence of widget on 'My Dashboard' tab for \"([^\"]*)\" is$")
	public void verify_sequence_of_widget_on_My_Dashboard_tab_for_is(String arg1, DataTable columnHeaders) throws Throwable {
		
		List<String> expected=columnHeaders.asList(String.class);
        				
		for(String value:expected){
			
		     	switch(value){
			
				case("Total Views"):
					Assert.assertEquals("OOPs something went wrong",value,app.getCommon().getText(DocumentIntelligenceReportString.totalViewsWidgetTitle));
			    	System.out.println(value +" Widget verified");    
			    break;
				case("Average % Viewed"):
					Assert.assertEquals("OOPs something went wrong",value,app.getCommon().getText(DocumentIntelligenceReportString.averageViewedWidgetTitle));
			   		System.out.println(value +" Widget verified");    
			    break;
				case("View Source"):
					Assert.assertEquals("OOPs something went wrong",value,app.getCommon().getText(DocumentIntelligenceReportString.viewSourceWidgetTitle));
			    	System.out.println(value +" Widget verified");
			    break; 
				case("Search Keywords"):
					Assert.assertEquals("OOPs something went wrong",value,app.getCommon().getText(DocumentIntelligenceReportString.searchKeywordsWidgetTitle));
			    	System.out.println(value +" Widget verified");    
			    break;
			    
				case("Avg. Viewing Duration"):
					Assert.assertEquals("OOPs something went wrong",value,app.getCommon().getText(VideoIntelligenceReportString.avgViewingDurationWidgetTitle));
				    System.out.println(value +" Widget verified");    
				break;
				case("Views by Player"):
					Assert.assertEquals("OOPs something went wrong",value,app.getCommon().getText(VideoIntelligenceReportString.viewsbyPlayerWidgetTitle));
				    System.out.println(value +" Widget verified");    
			    break;
				case("ON24 Video Summary"):
					Assert.assertEquals("OOPs something went wrong",value,app.getCommon().getText(VideoIntelligenceReportString.ON24VideoSummaryWidgetTitle));
				    System.out.println(value +" Widget verified");
			    break; 
				case("YouTube Summary"):
					Assert.assertEquals("OOPs something went wrong",value,app.getCommon().getText(VideoIntelligenceReportString.youTubeSummaryWidgetTitle));
				    System.out.println(value +" Widget verified");    
			    break;
			    
				default:
		            throw new Exception("No match found");
			    
			    
			    
			}
		
		}
	
}
	
	@Then("^verify sequence of main menu items is$")
	public void verify_sequence_of_main_menu_items_is(DataTable menuItems) throws Throwable {
		List<String> expected=menuItems.asList(String.class);
		
		for(String value:expected){
			
			switch(value){
			
			case("MY DASHBOARD"):
				Assert.assertEquals("OOPs something went wrong",value,app.getCommon().getText(DocumentIntelligenceReportString.myDashboardTab));
			    System.out.println(value +" Tab verified");    
			break;
			case("AUDIENCE"):
				Assert.assertEquals("OOPs something went wrong",value,app.getCommon().getText(DocumentIntelligenceReportString.audienceTab));
			    System.out.println(value +" Tab verified");    
			break;
			case("INTERACTIONS"):
				Assert.assertEquals("OOPs something went wrong",value,app.getCommon().getText(DocumentIntelligenceReportString.interactionTab));
			    System.out.println(value +" Tab verified");    
			break;
		
			default:
	            throw new Exception("No match found");
	         }
		 
		}
		
	}
	

	@Then("^verify data is present under 'Duration' column$")
	public void verify_data_is_present_under_Duration_column() throws Throwable {
		System.out.println("Data in first row under Duration Column is --- "+app.getCommon().getText(DocumentIntelligenceReportString.durationColumnData));
		
	}
	

	@Then("^verify value of \"([^\"]*)\" is \"([^\"]*)\"$")
	public void verify_value_of_is(String OptionName, String Value) throws Throwable {
	    
		switch(OptionName){
		
		case("Total Views"):
			Assert.assertEquals("OOPs something went wrong",Value,app.getCommon().getText(DocumentIntelligenceReportString.totalViewsCount));
		    System.out.println("Total views count is "+Value+" and verified");
		    break;
		    
		case("Unique Views"):
			Assert.assertEquals("OOPs something went wrong",Value,app.getCommon().getText(DocumentIntelligenceReportString.uniqueViewsCount));
		    System.out.println("Unique views count is "+Value+" and verified");
		    break;
		    
		case("Average % Viewed"):
			Assert.assertEquals("OOPs something went wrong",Value,app.getCommon().getText(DocumentIntelligenceReportString.averageViewsCount));
		    System.out.println("Average views count is "+Value+" and verified");
		    break;
		    
		case("Average % Viewed Percent"):
			Assert.assertEquals("OOPs something went wrong",Value,app.getCommon().getText(DocumentIntelligenceReportString.averageViewsPercent));
		    System.out.println("Average views percent is "+Value+" and verified");
		    break;
		default:
            throw new Exception("No match found");
		}
		
	}


	@Then("^verify title of first widget is \"([^\"]*)\"$")
	public void verify_title_of_first_widget_is(String widgetTitle) throws Throwable {
		Assert.assertEquals("OOPs something went wrong",widgetTitle,app.getCommon().getText(DocumentIntelligenceReportString.totalViewsWidgetTitle));
	    System.out.println(widgetTitle +" Widget title verified");    
	}
	
	@Then("^verify title of second widget is \"([^\"]*)\"$")
	public void verify_title_of_second_widget_is(String widgetTitle) throws Throwable {
		Assert.assertEquals("OOPs something went wrong",widgetTitle,app.getCommon().getText(DocumentIntelligenceReportString.averageViewedWidgetTitle));
	    System.out.println(widgetTitle +" Widget title verified");    
		
	}


	@Then("^verify title of third widget is \"([^\"]*)\"$")
	public void verify_title_of_third_widget_is(String widgetTitle) throws Throwable {
		Assert.assertEquals("OOPs something went wrong",widgetTitle,app.getCommon().getText(DocumentIntelligenceReportString.viewSourceWidgetTitle));
	    System.out.println(widgetTitle +" Widget title verified");
		
	}
	
	@Then("^verify title of fourth widget is \"([^\"]*)\"$")
	public void verify_title_of_fourth_widget_is(String widgetTitle) throws Throwable {
		Assert.assertEquals("OOPs something went wrong",widgetTitle,app.getCommon().getText(DocumentIntelligenceReportString.searchKeywordsWidgetTitle));
	    System.out.println(widgetTitle +" Widget title verified");
	}
	
	@Then("^verify value of different sources are as below in View Source widget$")
	public void verify_value_of_different_sources_are_as_below_in_View_Source_widget(DataTable partnerrefOptions) throws Throwable {

		app.getCommon().setImplicitWait(30);
		List<String> expected=partnerrefOptions.asList(String.class);
		List<String> actual=new LinkedList<String>();
		for(int i=1;i<=8;i++){			
			actual.add(app.getCommon().getText(DocumentIntelligenceReportString.partnerrefOptions(i)));
		 }
		 System.out.println("Expected partnerref values are "+expected);
		 System.out.println("Actual partnerref values are "+actual);
		 Assert.assertTrue(expected.equals(actual));
		 System.out.println("List comparision completed successfully ");
	}
	
	
	@Then("^verify below source names are clickable in View Source widget$")
	public void verify_below_source_names_are_clickable_in_View_Source_widget(DataTable arg1) throws Throwable {
		app.getCommon().setImplicitWait(30);
		for(int i=1;i<=8;i++){			
			Assert.assertTrue(app.getCommon().isEnabled(DocumentIntelligenceReportString.partnerrefOptions(i)));
			System.out.println("Partnerref "+app.getCommon().getText(DocumentIntelligenceReportString.partnerrefOptions(i))+" is enabled ---> "+app.getCommon().isEnabled(DocumentIntelligenceReportString.partnerrefOptions(i)));
		 }
	}


	@Then("^verify arrow icon below source names and is clickable$")
	public void verify_arrow_icon_below_source_names_and_is_clickable() throws Throwable {
		app.getCommon().setImplicitWait(30);
		Assert.assertTrue(app.getCommon().isEnabled(DocumentIntelligenceReportString.arrowIconForNext));
		System.out.println("Next page arrow Icon is enabled");
		
	}
	
	@Then("^verify below values are within \"([^\"]*)\" widget$")
	public void verify_below_values_are_within_widget(String arg1, DataTable searchkeywords) throws Throwable {
		app.getCommon().setImplicitWait(30);
		List<String> expected=searchkeywords.asList(String.class);
		List<String> actual=new LinkedList<String>();
		for(int i=1;i<=7;i=i+2){			
			actual.add(app.getCommon().getText(DocumentIntelligenceReportString.searchKeywords(i)));
		 }
		 System.out.println("Expected search keywords are "+expected);
		 System.out.println("Actual search keywords are "+actual);
		 Assert.assertTrue(expected.equals(actual));
		 System.out.println("List comparision completed successfully ");
		
	}
	
	@Then("^user clicks on \"([^\"]*)\" tab$")
	public void user_clicks_on_tab(String tabName) throws Throwable {
		
		switch(tabName){
		
	   case("Audience"):	
	   app.getCommon().click(DocumentIntelligenceReportString.audienceTab);
	   app.getCommon().setImplicitWait(30);
	   break;
	   
	   case("Interactions"):	
	   app.getCommon().click(DocumentIntelligenceReportString.interactionTab);
	   app.getCommon().setImplicitWait(30);
	   break;
	   
	}
	}
	
	@Then("^verify title of data table is \"([^\"]*)\"$")
	public void verify_title_of_data_table_is(String tableHeading) throws Throwable {
		
		switch(tableHeading){
		
		case("ALL VIEWERS (11)"):		
			Assert.assertEquals("OOPs something went wrong",tableHeading,app.getCommon().getText(DocumentIntelligenceReportString.audienceTableHeading));
			System.out.println("Table Heading verified as "+tableHeading);
		break;
		
		case("DOWNLOADS"):		
			Assert.assertEquals("OOPs something went wrong",tableHeading,app.getCommon().getText(DocumentInteractionReportsString.dataTableHeader));
			System.out.println("Table Heading verified as "+tableHeading);
		break;
		
	}
}	

	@Then("^verify colomn headers are clickable$")
	public void verify_colomn_headers_are_clickable() throws Throwable {
		Assert.assertTrue(app.getCommon().isEnabled(DocumentIntelligenceReportString.firstNameColumnHEader));
}
	
	@Then("^verify sort icon after column header and not clickable$")
	public void verify_sort_icon_after_column_header_and_not_clickable() throws Throwable {
	        Assert.assertTrue(app.getCommon().isDisplayed(DocumentIntelligenceReportString.sortIconWithColumnName));
			//Assert.assertFalse(app.getCommon().isEnabled(DocumentIntelligenceReportString.sortIconWithColumnName));
		    
		
	}
	
	@Then("^verify Data in first row under \"([^\"]*)\" column is clickable$")
	public void verify_Data_in_first_row_under_column_is_clickable(String arg1) throws Throwable {
		Assert.assertTrue(app.getCommon().isEnabled(DocumentIntelligenceReportString.pageViewedFirstRowData));
		System.out.println("Data in first row verified");
	}

	@Then("^user clicks \"([^\"]*)\" under \"([^\"]*)\" column$")
	public void user_clicks_under_column(String arg1, String arg2) throws Throwable {
	    
		app.getCommon().click(DocumentIntelligenceReportString.pageViewedFirstRowData);
		System.out.println("Data in first row clicked successfully");
		app.getCommon().setImplicitWait(30);
	}
	

	@Then("^verify user navigates to PEP report page$")
	public void verify_user_navigates_to_PEP_report_page() throws Throwable {
		System.out.println("Redirecting to new window");
		String parentHandle = app.getCommon().getDriver().getWindowHandle();
		Set<String> newPageHandle = app.getCommon().getDriver().getWindowHandles();
		newPageHandle.remove(parentHandle);

		for (String handle1 : newPageHandle) {
			app.getCommon().getDriver().switchTo().window(handle1);
		}
		System.out.println("Getting title of PEP window");
		Assert.assertEquals("ON24 Prospect Engagement Profile | newuser_6 inbfw", app.getCommon().getTitle());
		System.out.println("PEP window title verified");
	}
	
}


