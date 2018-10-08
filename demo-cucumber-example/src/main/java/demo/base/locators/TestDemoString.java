package demo.base.locators;


import org.openqa.selenium.By;

public class TestDemoString {

	public static By termsOfUseLink=By.cssSelector("div.contentfooter>div.footerRight>div>div>a");
	public static By loginPageSrcIframe=By.cssSelector("https://a8136870131.cdn.optimizely.com/client_storage/a8136870131.html");
	public static By hamburgerIcon=By.cssSelector("#masthead>i");
	public static By searchBox=By.cssSelector("input[type='search']");
	public static By searchIcon=By.cssSelector("i.icon-search']");
	public static By lastPageAtPagination=By.cssSelector("div.search-results-pagination>a:nth-child(6)");

	public static By twitter=By.cssSelector("#site-navigation > div.social-nav > a:nth-child(1) > i");
	public static By facebookLink=By.cssSelector("#site-navigation > div.social-nav > a:nth-child(2) > i");
	public static By linkedInLink=By.cssSelector("#site-navigation > div.social-nav > a:nth-child(3) > i");
	public static By youTubeLink=By.cssSelector("#site-navigation > div.social-nav > a:nth-child(4) > i");
	public static By instaGramLink=By.cssSelector("#site-navigation > div.social-nav > a:nth-child(5) > i");
		
	public static By usernameTextBox=By.cssSelector("input[name='username']");
	public static By passwordTextBox=By.cssSelector("input[name='password']");
	public static By loginButton=By.cssSelector("input[value='Login']");
	public static By errorMessage=By.cssSelector("#login>div>div:nth-child(4)>div:nth-child(1)");	
	
	public static By pending4ReviewCol=By.cssSelector("div.container>table>tbody>tr:nth-child(3)>td:nth-child(2)>a");
	public static By Automation_PendingCol=By.cssSelector("tbody>tr:nth-child(3)>td:nth-child(3)>a");
	public static By reviewPendingCol=By.cssSelector("tbody>tr:nth-child(3)>td:nth-child(4)>a");
	public static By notFeasibleCol=By.cssSelector("tbody>tr:nth-child(3)>td:nth-child(5)>a");
	public static By released4RunCol=By.cssSelector("tbody>tr:nth-child(3)>td:nth-child(6)>a");
	public static By totalByProjectCol=By.cssSelector("tbody>tr:nth-child(3)>td:nth-child(7)");
 
	public static By partialLinkText=By.cssSelector("a[title='Automation Practice Form']");
	public static By linkText=By.cssSelector("a[title='Automation Practice Table']");
	public static By firstNameTextBox=By.name("firstname");
	public static By lastNameTextBox=By.name("lastname");
	public static By maleOption=By.id("sex-0");
	public static By femaleOption=By.id("sex-1");
	public static By datePicker=By.id("datepicker");
	public static By manualTesterOption=By.id("profession-0");
	public static By automationTesterOption=By.id("profession-1");
	public static By chooseFileButton=By.id("photo");
	public static By DownloadLink1=By.linkText("Selenium Automation Hybrid Framework");
	public static By DownloadLink2=By.linkText("Test File to Download");
	public static By continentDropdown=By.id("continents");
	public static By submitButton=By.id("submit");
	public static By seleniumCommands=By.id("selenium_commands");
	
	public static By experienceYears(int no){
		return By.id("exp-"+no);
		
	}
		public static By automationTool(int no){
			return By.id("tool-"+no);
	
	
	}
		
		public static By continentOptions(int no){
			return By.id("#continents>option:nth-child("+no+")");	
	
	}	

		
		public static By seleniumCommandOptions(int no){
			return By.id("#selenium_commands>option:nth-child("+no+")");	
	
	}	

	
}
