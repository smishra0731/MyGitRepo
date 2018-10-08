package demo.base.locators;


import org.openqa.selenium.By;
/**
 * Elite Registration steps
 * @author Sudhanshu
 *
 */


public class EliteContentGatewayDesignString {
	
	public static By ON24GatewayIcon=By.cssSelector("#globalNavBar>div:nth-child(4)>div>a>img");
	public static By browseButton=By.cssSelector("banner-upload[banner-type='channelbanner']>div[class='banner-buttons clearfix']>button[type='file']");
	public static By uploadedImage=By.cssSelector("div[style*='background-image: url']");
	
	
	public static By regPageButtons(int no){
		return By.cssSelector("#myChannel>div>div>div>button:nth-child("+no+")");
		
	 }

}
