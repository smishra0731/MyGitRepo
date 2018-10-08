package demo.base.common;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

/**
 * WebdriverHelper class is responsible to create session
 * @author Sudhanshu
 *
 */
public class WebdriverHelper {

	private static WebdriverHelper webdriverHelper;
	private WebDriver driver;
	private String sessionID;

	/**
	 * private constructor, so that we could create one driver object
	 */
	private WebdriverHelper() {
		System.out.println("run on grid ==> "+System.getProperty("runOnGrid"));

		if (System.getProperty("runOnGrid") != null && System.getProperty("runOnGrid").equalsIgnoreCase("true")) {
			System.out.println("Session creation starts on Grid");
			DesiredCapabilities caps = new DesiredCapabilities();
			if (getBrowser() != null && getBrowser().equalsIgnoreCase("chrome")) {
				caps = DesiredCapabilities.chrome();
				caps.setBrowserName("chrome");
				caps.setPlatform(Platform.WINDOWS);
			} else if (getBrowser() != null && getBrowser().equalsIgnoreCase("firefox")) {
				caps = DesiredCapabilities.firefox();
				caps.setBrowserName("firefox");
				caps.setPlatform(Platform.WINDOWS);
			} else if (getBrowser() != null && getBrowser().equalsIgnoreCase("internet explorer")) {
				caps = DesiredCapabilities.internetExplorer();
				caps.setBrowserName("internet explorer");
				caps.setPlatform(Platform.WINDOWS);
			}else if (getBrowser() != null && getBrowser().equalsIgnoreCase("edge")) {
				caps = DesiredCapabilities.edge();
				caps.setBrowserName("edge");
				caps.setPlatform(Platform.WINDOWS);
			}

			try {
				driver = new RemoteWebDriver(new URL(System.getProperty("remote")), caps);
				sessionID = ((RemoteWebDriver) driver).getSessionId().toString();
			} catch (MalformedURLException e) {
				System.out.println("exception occured during creating session on grid");
			}
			
		} else{		
			
			System.out.println("test execution starts on local server");
			if (getBrowser() != null && getBrowser().equalsIgnoreCase("chrome")) {
				driver = new ChromeDriver();
				sessionID = ((ChromeDriver) driver).getSessionId().toString();
			} else if (getBrowser() != null && getBrowser().equalsIgnoreCase("firefox")) {
				driver = new FirefoxDriver();
				sessionID = ((FirefoxDriver) driver).getSessionId().toString();
			} else if (getBrowser() != null && getBrowser().equalsIgnoreCase("internet explorer")) {
				driver = new InternetExplorerDriver();
				sessionID = ((InternetExplorerDriver) driver).getSessionId().toString();
			}else if (getBrowser() != null && getBrowser().equalsIgnoreCase("edge")) {
				driver = new EdgeDriver();
				sessionID = ((EdgeDriver) driver).getSessionId().toString();
			}
		}
	

		System.out.println("Browser = " + getBrowser() + ", SessionID = " + sessionID);
		System.setProperty("sessionID", sessionID);
	
	}
	

	/**
	 * static method for access WebdriverHelper outside the class
	 * 
	 * @return
	 */
	public static WebdriverHelper getWebdriverHelper() {
		if (webdriverHelper == null)
			webdriverHelper = new WebdriverHelper();
		return webdriverHelper;
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
	 * get browser from configuration file
	 * 
	 * @return
	 */
	private String getBrowser() {
		return System.getProperty("browser");
	}

	/**
	 * stop or close current execution
	 */
	public void stop() {
		if (driver != null) {
			driver.quit();
			driver = null;
		}
	}
}
