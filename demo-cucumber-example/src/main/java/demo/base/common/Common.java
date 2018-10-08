package demo.base.common;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;


/**
 * Common utility class, its contains common method
 * 
 * @author Sudhanshu
 * 
 */
public class Common {

	private WebDriver driver;

	public Common() {
		driver = WebdriverHelper.getWebdriverHelper().getDriver();
	}

	/**
	 * return driver instance
	 * 
	 * @return
	 */
	public WebDriver getDriver() {
		return driver;
	}

	/**
	 * Refresh page
	 * 
	 * @throws InterruptedException
	 */
	public void refresh() throws InterruptedException {
		driver.navigate().refresh();
	}

	/**
	 * close current window
	 */
	public void close() {
		driver.close();
	}

	/**
	 * set page level wait
	 * 
	 * @param time
	 */
	public void setImplicitWait(int time) {
		driver.manage().timeouts().implicitlyWait(time, TimeUnit.SECONDS);
	}

	/**
	 * return current page title
	 * 
	 * @return
	 */
	public String getTitle() {
		return driver.getTitle();
	}

	/**
	 * maximize current window
	 */
	public void maximizeWindow() {
		driver.manage().window().maximize();
	}
	
	/**
	 * return current window handle
	 * @return
	 */
	public String getWindowHandle(){
		return driver.getWindowHandle();
	}

	/**
	 * switch to new window tab based on window handle
	 * 
	 * @param handle
	 */
	
	public void switchTo(String handle) {
		driver.switchTo().window(handle);
	}
	
	/**
	 * switch to frame by providing frame webelement
	 * 
	 * @param webelement
	 */
	
	public void switchToFrame(WebElement frame) {
		driver.switchTo().frame(frame);
	}
	
	/**
	 * switch to default
	 * 
	 * @param
	 */
	
	public void switchToDefault() {
		driver.switchTo().defaultContent();
	}
	
	/**
	 * open page url
	 * 
	 * @param url
	 */
	
	
	public void openUrl(String url) {
		driver.get(url);
	}

	/**
	 * execute javaScript code
	 * 
	 * @param javaScript
	 * @return
	 */
	public Object executeJs(String javaScript) {
		return ((JavascriptExecutor) driver).executeScript(javaScript);
	}

	/**
	 * common method for finding elements based on locator
	 * 
	 * @param locator
	 * @return
	 */
	public WebElement findElement(By locator) {
		return driver.findElement(locator);
	}
	
	
	/**
	 * type text based on locators
	 * 
	 * @param locator
	 * @param text
	 */
	public void type(By locator, String text) {
		findElement(locator).clear();
		findElement(locator).sendKeys(text);
		
		}
	
		

	/**
	 * click on button
	 * 
	 * @param locator
	 */
	public void click(By locator) {
		findElement(locator).click();
	}

	/**
	 * check element is displayed or not. If displayed it will return true
	 * 
	 * @param locator
	 * @return
	 */
	public boolean isDisplayed(By locator) {
		return findElement(locator).isDisplayed();
	}

	/**
	 * check element is enabled or not. If enabled it will return true
	 * 
	 * @param locator
	 * @return
	 */
	public boolean isEnabled(By locator) {
		return findElement(locator).isEnabled();
	}

	/**
	 * return text based on locator
	 * 
	 * @param locator
	 * @return
	 */
	public String getText(By locator) {
		return findElement(locator).getText();
	}

	/**
	 * select dropdown value
	 * 
	 * @param locator
	 * @param text
	 */
	public void selectDropdownelement(By locator, String text) {
		new Select(findElement(locator)).selectByVisibleText(text);
	}
	
	/**
	 * check element is selected or not. If selected it will return true
	 * 
	 * @param locator, @param text
	 * @return
	 */
	public boolean isSelected(By locator){
		return findElement(locator).isSelected();		
	}
	
	/**
	 * it will delete all saved cookies 
	 * 
	 */
	
	public void deleteAllCookiesExample()
	{
		driver.manage().deleteAllCookies();
	}
	
	/**
	 * it will return values of attributes 
	 *@param locator, @param attribute name 
	 *@return
	 */
	
	public String getAttribute(By locator, String attributeName) throws InterruptedException {
		return  driver.findElement(locator).getAttribute(attributeName);
		 }
	
	/**
	 * it will return CssValues of attributes 
	 *@param locator, @param attribute name 
	 */
	public String getCssValue(By locator,String attributeName) {
		WebElement obj1 = driver.findElement(locator);
		return obj1.getCssValue(attributeName);
	}
	
	/**
	  * Drag element and drop it into destination
	  * 
	  * @param toDrop
	  * @param destination
	  * @throws InterruptedException
	  */
	 public void dragAndDrop(WebElement toDrop, WebElement destination) throws InterruptedException {
	  Actions builder = new Actions(driver);
	  Action dragAndDrop = builder.clickAndHold(toDrop).moveByOffset(destination.getLocation().x, destination.getLocation().y).release(destination).build();
	  dragAndDrop.perform();
	  Thread.sleep(1000);
	 }
	
	 
	 /**
	  * Wait for element display in given seconds
	  * 
	  * @param locator
	  * @param seconds
	  * 
	  */

	 public void waitElementDisplayedImplicitlyForSeconds(final By locator, int seconds) {
	  new FluentWait<WebDriver>(driver).withTimeout(seconds, TimeUnit.SECONDS).pollingEvery(1, TimeUnit.SECONDS).ignoring(WebDriverException.class)
	    .until(ExpectedConditions.visibilityOfElementLocated(locator));
	 }
	
	}
