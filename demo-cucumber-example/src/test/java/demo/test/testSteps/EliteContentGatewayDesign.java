package demo.test.testSteps;


import org.junit.Assert;
import org.openqa.selenium.By;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import demo.base.locators.AnalyticsDashboardString;
import demo.base.locators.EliteContentGatewayDesignString;
import demo.test.testRunner.TestBase; 


/**
 * Elite Registration steps
 * @author Sudhanshu
 *
 */

public class EliteContentGatewayDesign extends TestBase{
	
	
	@When("^verify ON(\\d+) Gateway icon is present$")
	public void verify_ON_Gateway_icon_is_present(int arg1) throws Throwable {
	   
		Assert.assertTrue(app.getCommon().isDisplayed(EliteContentGatewayDesignString.ON24GatewayIcon));
		System.out.println("ON24 Gateway icon is displaying");
	}

	@When("^user clicks \"([^\"]*)\" icon$")
	public void user_clicks_icon(String arg1) throws Throwable {
		
	    app.getCommon().click(EliteContentGatewayDesignString.ON24GatewayIcon);
	    System.out.println(arg1+" Icon clicked successfully");
	    app.getCommon().setImplicitWait(30);
	}

	@When("^verify user is on Content Gateway Page$")
	public void verify_user_is_on_Content_Gateway_Page() throws Throwable {
		
		Assert.assertEquals("OOPs something went wrong","Content Gateway | Webcast Elite",app.getCommon().getTitle());	
		System.out.println("Page title verified");
		
	}

	@When("^user clicks on \"([^\"]*)\" tab at reg page setup page$")
	public void user_clicks_on_tab_at_reg_page_setup_page(String arg1) throws Throwable {
	    
		app.getCommon().click(EliteContentGatewayDesignString.regPageButtons(4));
		System.out.println(arg1+" Tab Clicked");
		app.getCommon().setImplicitWait(30);
		
	}



	@When("^user clicks on Browse button$")
	public void user_clicks_on_Browse_button() throws Throwable {
		
		app.getCommon().findElement(EliteContentGatewayDesignString.browseButton).sendKeys("D:\\DesktopData\\all-imagesss\\PNG24\\PNG6.png");
		System.out.println("Browse button clicked");
		app.getCommon().setImplicitWait(30);
		 
	}

	@When("^user selects image to upload$")
	public void user_selects_image_to_upload() throws Throwable {
		app.getCommon().isDisplayed(EliteContentGatewayDesignString.uploadedImage);
		System.out.println("Image uploaded successfully");	 
	}

	@When("^verify image has been uploaded successfully$")
	public void verify_image_has_been_uploaded_successfully() throws Throwable {
	 
	}

	@When("^user clicks on Remove Banner button$")
	public void user_clicks_on_Remove_Banner_button() throws Throwable {
	 
	}

	@When("^verify image has been removed successfully$")
	public void verify_image_has_been_removed_successfully() throws Throwable {
	    
	}


}
