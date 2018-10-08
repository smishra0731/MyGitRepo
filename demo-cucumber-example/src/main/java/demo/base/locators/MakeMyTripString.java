package demo.base.locators;


import org.openqa.selenium.By;

public class MakeMyTripString {

	public static By oneWayOption=By.cssSelector("#js-switch__option>div>label[class='label_text flight-trip-type']");
	public static By selectSourceBox=By.id("hp-widget__sfrom");
	public static By selectDestinationBox=By.id("hp-widget__sTo");
	
	
	
	
	public static By selectSource(String source){
		
		return By.xpath(".//*[@id='js-filterOptins']//ul[contains(@class,'sTo')]//li[contains(@aria-label,'"+source+"')]");
	}
	public static By source=By.xpath(".//*[@id='js-filterOptins']//ul[contains(@class,'sTo')]//li[contains(@aria-label,'Ahmedabad')]");
	public static By enteredLocation=By.cssSelector("div[class*='autocomplete_from']>ul>li:nth-child(2)");
	public static By destination=By.xpath(".//*[@id='js-filterOptins']//ul[contains(@class,'sTo')]//li[contains(@aria-label,'Cochin')]");
	public static By destinationCochin=By.cssSelector("div[class*='autocomplete_to']>ul>li:nth-child(2)");
    public static By dateBox=By.id("hp-widget__depart");
	public static By dateSelector=By.xpath("[style='display: block;'] [data-month='6'][data-year='2018'] a");
	public static By selectCity(String city){return By.xpath(".//*[@id='js-filterOptins']//ul[contains(@class,'sTo')]//li[contains(@aria-label,"+city+")]");}
	//public static By selectDate=By.xpath("//div[@class='dateFilter hasDatepicker']/div/div/div[div/span[text()='July']]/following-sibling::table/tbody/tr/td[a[text()='27']]");
	public static By selectDate(String month,String date){return By.xpath("//div[@class='dateFilter hasDatepicker']/div/div/div[div/span[text()='"+month+"']]/following-sibling::table/tbody/tr/td[a[text()='"+date+"']]");}

	public static By selectPassengersBox=By.id("hp-widget__paxCounter_pot");
	
	public static By selectAdults(String no){return By.cssSelector("div[class*='pax-counter-container']>div:nth-child(1)>div[class='paxCounter__counter']>ul>li:nth-child("+no+")");}
	public static By selectChildren(String no){return By.cssSelector("div[class*='pax-counter-container']>div:nth-child(2)>div[class='paxCounter__counter']>ul>li:nth-child("+no+")");}
	public static By selectInfants(int no){return By.cssSelector("div[class*='pax-counter-container']>div:nth-child(3)>div[class='paxCounter__counter']>ul>li:nth-child("+no+")");}
	public static By selectPremiumEconomy=By.id("premiumEconomy");
	
	public static By searchBtn=By.id("searchBtn");
	
	public static By verificationMessage=By.cssSelector("p[class*='modify_city_name modify_txt ng-binding']");
	public static By dragger=By.cssSelector("#price_slider a");
}
