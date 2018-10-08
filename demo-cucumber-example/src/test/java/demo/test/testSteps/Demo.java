package demo.test.testSteps;

import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.When;
import demo.test.testRunner.TestBase;

public class Demo extends TestBase {

 
	@When("^waitTest$")
	public void waittest() throws Throwable{
     		app.getCommon().openUrl("https://www.google.com/");
     		app.getCommon().getDriver().manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
     		app.getCommon().click(By.className("gb_b gb_dc"));
     		System.out.println("Implicit wait executed");
   		
   		
   		/**
   	  * Wait for element display in given seconds
   	  * 
   	  * @param locator
   	  * @param seconds
   	  * 
   	  */
  		
//   	  new FluentWait<WebDriver>(app.getCommon().getDriver()).withTimeout(30, TimeUnit.SECONDS).pollingEvery(1, TimeUnit.SECONDS).ignoring(WebDriverException.class)
//   	  .until(ExpectedConditions.visibilityOfElementLocated(By.name("btnK")));
//   	  app.getCommon().click(By.name("btnK"));
//		  System.out.println("Fluent wait executed");
		
     		
     		WebDriverWait wait=new WebDriverWait(app.getCommon().getDriver(),30);
     		wait.until(ExpectedConditions.elementToBeClickable(By.name("btnK")));
     		System.out.println("Explicit wait executed");
		    app.getCommon().close();		
   		
   		
   	} 
   	
	
	
}
