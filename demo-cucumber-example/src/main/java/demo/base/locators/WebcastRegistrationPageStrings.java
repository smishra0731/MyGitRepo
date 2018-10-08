package demo.base.locators;

import org.openqa.selenium.By;

public class WebcastRegistrationPageStrings {
	public static By eventTitle = By.cssSelector(".overview-section>p:nth-child(2)>span:nth-child(2)");
	public static By firstname = By.id("firstname");
	public static By lastname = By.id("lastname");
	public static By email = By.id("email");
	public static By company = By.id("company");
	public static By jobTitle = By.id("job_title");
	public static By industry = By.id("company_industry");
	public static By addressStreet1 = By.id("address_street1");
	public static By city = By.id("city");
	public static By state = By.id("state");
	public static By postalCode = By.id("zip");
	public static By country = By.id("country");
	public static By workPhone = By.id("work_phone");
	public static By companySize = By.id("company_size");
	public static By jobFunction = By.id("job_function");
	public static By opt_Out_Event = By.id("event_email-group");
	public static By optOutEventRadioButton1 = By.cssSelector("input[id='event_email-group']");
	public static By registerButton1 = By.xpath("//*[@id='left-col']/div[2]/div[2]/form/div[2]/button");
	public static By registerButton = By.cssSelector("#left-col > div.registration-section.section > div.js-form-container > form > div.submit-container > button > strong");
	public static By qaImage = By.cssSelector("#dockArea>nav>ul>li:nth-child(1)>a>img.dockIcon");
	public static By alreadyRegLink = By.cssSelector(".js-login-link > strong:nth-child(1)");
	public static By alredayRegEmailTextbox = By.cssSelector("#login-container>div.login.container>form>div>div.col-xs-12.col-sm-10.js-input-container>div>input");
	public static By alredayRegLoginBtn = By.cssSelector("#login-container>div>form>div>div:nth-child(7)>button>strong");
	public static By alredayRegCrossIcon = By.cssSelector(".close-btn");
	public static String alreadyRegUser = "qauser28@inbfw.com";
	public static By requiredTooltip = By.cssSelector("#left-col>div.registration-section.section>div.js-form-container>form>div.js-fields-container>div.row.has-feedback.reg-field.has-error>div>div>div.tooltip-inner");
}
