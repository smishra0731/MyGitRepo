package demo.test.testSteps;

import org.junit.Assert;
import org.openqa.selenium.By;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import demo.base.locators.AnalyticsDashboardString;
import demo.test.testRunner.TestBase; 


/**
 * Elite Registration steps
 * @author Sudhanshu
 *
 */

public class AnalyticsDashboard extends TestBase {

	@When("^user launches elite dashboard url$")
	public void user_launches_elite_dashboard_url() throws Throwable {
		app.getCommon().deleteAllCookiesExample();
		app.getCommon().openUrl(System.getProperty("dashBoardUrl"));
		app.getCommon().setImplicitWait(10);
	}
	
	@When("^verify user on my webcasts page$")
	public void verify_user_on_my_webcasts_page() throws Throwable {
		Assert.assertEquals("OOPs something went wrong","My Webcasts | Webcast Elite",app.getCommon().getTitle());
	}
	
	@When("^verify Analytics icon is present$")
	public void verify_Analytics_icon_is_present() throws Throwable {
	    Assert.assertTrue(app.getCommon().isDisplayed(AnalyticsDashboardString.analyticIcon));
	}

	@Then("^verify \"([^\"]*)\" label is present on dashboard$")
	public void verify_label_is_present_on_dashboard(String arg1) throws Throwable {
		app.getCommon().getDriver().switchTo().frame(app.getCommon().getDriver().findElement(AnalyticsDashboardString.dashboardIframe));
		Assert.assertEquals("OOPs something went wrong",arg1,app.getCommon().getText(AnalyticsDashboardString.last_90_Days_Label));
	}

	@Then("^verify Export to PDF icon is present$")
	public void verify_Export_to_PDF_icon_is_present() throws Throwable {
		Assert.assertTrue(app.getCommon().isDisplayed(AnalyticsDashboardString.export_Icon));
	}

	@Then("^verify \"([^\"]*)\" message is present$")
	public void verify_message_is_present(String arg1) throws Throwable {
		Assert.assertEquals("OOPs something went wrong",arg1,app.getCommon().getText(AnalyticsDashboardString.may_Be_Delayed_Message));
	}

	@Then("^verify \"([^\"]*)\" panel is present$")
	public void verify_panel_is_present(String panelName) throws Throwable {
		//String arg=arg1;
		switch(panelName) {
		
        case "Leads" :
        	Assert.assertTrue(app.getCommon().isDisplayed(AnalyticsDashboardString.leads_widget));
        	System.out.println(panelName+" presence verified"); 
        	break;
        case "Total Attendance" :
            Assert.assertTrue(app.getCommon().isDisplayed(AnalyticsDashboardString.total_Attendance_Widget));
            System.out.println(panelName+" presence verified");
        	break;
        case "Unique Attendees to Leads" :
            Assert.assertTrue(app.getCommon().isDisplayed(AnalyticsDashboardString.unique_Attendees_Wdget));
            System.out.println(panelName+" presence verified");
            break;
        case "Funnel" :
            Assert.assertTrue(app.getCommon().isDisplayed(AnalyticsDashboardString.funnel_Widget));
            System.out.println(panelName+" presence verified");
            break;
        case "Average Webinar Engagement" :
        	Assert.assertTrue(app.getCommon().isDisplayed(AnalyticsDashboardString.avg_Engagement_Widget));
        	System.out.println(panelName+" presence verified"); 
        	break;
        case "Engagement Minutes" :
            Assert.assertTrue(app.getCommon().isDisplayed(AnalyticsDashboardString.engagement_Minutes_Widget));
            System.out.println(panelName+" presence verified");
        	break;
        case "Total New Content" :
        	Assert.assertTrue(app.getCommon().isDisplayed(AnalyticsDashboardString.total_New_Content_Widget));
        	System.out.println(panelName+" presence verified");
        	break;
        case "Content Views from Content Gateway(s)" :
            Assert.assertTrue(app.getCommon().isDisplayed(AnalyticsDashboardString.content_Views_Widget));
            System.out.println(panelName+" presence verified");
        	break;
        case "Account Engagement Cloud" :
        	app.getCommon().switchToFrame(app.getCommon().getDriver().findElement(AnalyticsDashboardString.dashboardIframe));
        	Assert.assertTrue(app.getCommon().isDisplayed(AnalyticsDashboardString.account_EngCloud_Widget));
            System.out.println(panelName+" presence verified");
            app.getCommon().switchToDefault();
            break;
        default:
       	 app.getCommon().getDriver().switchTo().defaultContent();
		}
    }
	
	@Then("^verify \"([^\"]*)\" stage is present in 'Funnel' panel$")
	public void verify_stage_is_present_in_Funnel_panel(String funnelStageOption) throws Throwable {
		
	  app.getCommon().getDriver().switchTo().frame(app.getCommon().findElement(By.cssSelector("iframe[onload*='reports-dashboard']")));	
	  
	  switch(funnelStageOption){
	  
	  case("Awareness"):
		  Assert.assertTrue(app.getCommon().isDisplayed(AnalyticsDashboardString.funnelStages(1)));
	      System.out.println("Presence of "+funnelStageOption+" has been verified");
	      break;
	  case("Consideration"):
		  Assert.assertTrue(app.getCommon().isDisplayed(AnalyticsDashboardString.funnelStages(3)));
	  	  System.out.println("Presence of "+funnelStageOption+" has been verified");
	      break;
	  case("Evaluation"):
		  Assert.assertTrue(app.getCommon().isDisplayed(AnalyticsDashboardString.funnelStages(5)));
	      System.out.println("Presence of "+funnelStageOption+" has been verified");
		  break;
	  case("Retention"):
		  Assert.assertTrue(app.getCommon().isDisplayed(AnalyticsDashboardString.funnelStages(7)));
	      System.out.println("Presence of "+funnelStageOption+" has been verified");
	      break;
	  
	  }
	}
}


	

