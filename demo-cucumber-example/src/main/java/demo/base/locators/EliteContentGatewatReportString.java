package demo.base.locators;

import org.openqa.selenium.By;

public class EliteContentGatewatReportString {
	public static By userName = By.id("login");
	public static By passWord = By.id("password");
	public static By loginButton = By.id("loginSubmit");
	public static By analyticIcon=By.cssSelector("#globalNavBar>div:nth-child(3)>div>a>img");
	public static By contentGatewayTab=By.cssSelector("#subNavULWrapper>ul>li:nth-child(6)>div>a");
	public static By filterBar=By.cssSelector("#WCCFilters>div>div.filterText");
	public static By contentGateway=By.cssSelector("#contentGateway>div>img");
	public static By contentGateway_Dropdown_Option=By.cssSelector("#WCCFilters>div>ul>li:nth-child(1)>ul>li");
	public static By select_Date=By.id("selectDate");
	public static By view_All_Option=By.cssSelector("#selectDate>ul>li:nth-child(1)");
	public static By view_Last90Days_Option=By.cssSelector("#selectDate>ul>li:nth-child(2)");
	public static By view_Last30Days_Option=By.cssSelector("#selectDate>ul>li:nth-child(3)");
	public static By fromDate_TextBox=By.xpath("//*[@id='fromDate']");
	public static By toDate_TextBox=By.xpath("//*[@id='toDate']");
	public static By fromDate_Icon=By.cssSelector("#selectDate>ul>li.datePicker>div>img:nth-child(2)");
	public static By toDate_Icon=By.cssSelector("#selectDate>ul>li.datePicker>div>img:nth-child(4)");
	public static By goIcon=By.cssSelector("#selectDate>ul>li.datePicker>div>img:nth-child(5)");
	public static By default_DateFilter=By.cssSelector("#WCCFilters>div:nth-child(2)>div:nth-child(2)>div");
	public static By defaultDate_cross_Icon=By.cssSelector("#WCCFilters>div:nth-child(2)>div:nth-child(2)>img");
	
	public static By contentTitleColumnHeader(int no){
		 return By.cssSelector("#rdDataTableDiv-DataTable1>table>thead>tr>th:nth-child("+no+")>a");
	 }
	
	public static By contentTitleColumnHeader=By.cssSelector("#rdDataTableDiv-DataTable1>table>thead>tr>th[id='colDESCRIPTION-TH']>a");
	public static By totalViewsColumnHeader=By.cssSelector("#rdDataTableDiv-DataTable1>table>thead>tr>th[id='colTOTAL_COUNT-TH']>a");
	public static By uniqueViewersColumnHeader=By.cssSelector("#rdDataTableDiv-DataTable1>table>thead>tr>th[id='colDISTINCT_COUNT-TH']>a");
	public static By typeColumnHeader=By.cssSelector("#rdDataTableDiv-DataTable1>table>thead>tr>th[id='colCONTENT_TYPE-TH']>a");
	
	public static By exportIcon=By.cssSelector("#subExportDiv>a>img");
	public static By srcIframe=By.cssSelector("iframe[src='/view/wccpro/newui/report/analytics-content-gateway.html']");
	public static By webcastsIframe=By.cssSelector("iframe[onload*='portal-webcasts']");
	public static By widgetIframe=By.cssSelector("iframe[onload*='portalOverview2']");
	
	
	//public static By srcIframe=By.cssSelector("iframe[src='/view/wccpro/newui/report/analytics-content-gateway.html']");
}
