package demo.base.locators;

import org.openqa.selenium.By;

public class DocumentIntelligenceReportString {

	public static By exportIcon=By.cssSelector("#table-menu>span>img:nth-child(2)");
	
	public static By myDashboardTab=By.cssSelector("#default-main-menu-item>a>span");
	public static By audienceTab=By.id("document-audience-link");
	public static By interactionTab = By.cssSelector("#interactions-label-document>a>span");
	public static By myDashboardHeading=By.cssSelector("#dashboard-title>span.registrants-title");
	
	public static By totalViewsWidgetTitle=By.cssSelector("label[for*='rdDashboardPanelRename-panel-total-views']");
	public static By averageViewedWidgetTitle=By.cssSelector("label[for*='rdDashboardPanelRename-panel-avg-viewing']");
	public static By viewSourceWidgetTitle=By.cssSelector("label[for*='rdDashboardPanelRename-panel-partner-ref']");
	public static By searchKeywordsWidgetTitle=By.cssSelector("label[for*='rdDashboardPanelRename-panel-search-keywords']");
	
	public static By totalViewsCount=By.cssSelector("#rowPanels>td>div:nth-child(2)>table>tbody>tr:nth-child(5)>td>div>div:nth-child(1)");
	public static By uniqueViewsCount=By.cssSelector("#rowPanels>td>div:nth-child(2)>table>tbody>tr:nth-child(5)>td>div>div:nth-child(2)>b");
	public static By averageViewsCount=By.cssSelector("#rowPanels>td>div:nth-child(4)>table>tbody>tr:nth-child(5)>td>div>div:nth-child(2)");
	public static By averageViewsPercent=By.cssSelector("#rowPanels>td>div:nth-child(4)>table>tbody>tr:nth-child(5)>td>div>div:nth-child(1)");
	
	
	public static By allViewersTitle=By.cssSelector(".all-attendees-title");
	
	public static By totalViewsColumnHEader=By.cssSelector("#dataSubTableContainer>div>table>thead>tr>th[id='col-number-TOTAL_VIEWS-TH']>a");
	public static By pagesViewedColumnHEader=By.cssSelector("#dataSubTableContainer>div>table>thead>tr>th[id='col-number-PAGES_VIEWED-TH']>a");
	public static By durationColumnHEader=By.cssSelector("#dataSubTableContainer>div>table>thead>tr>th[id='col-duration-DURATION-TH']>a");
	public static By firstNameColumnHEader=By.cssSelector("#dataSubTableContainer>div>table>thead>tr>th[id='col-string-FIRSTNAME-TH']>a");
	public static By lastNameColumnHEader=By.cssSelector("#dataSubTableContainer>div>table>thead>tr>th[id='col-string-LASTNAME-TH']>a");
	public static By emailColumnHEader=By.cssSelector("#dataSubTableContainer>div>table>thead>tr>th[id='col-string-EMAIL-TH']>a");
	public static By companyColumnHEader=By.cssSelector("#dataSubTableContainer>div>table>thead>tr>th[id='col-string-COMPANY-TH']>a");
	public static By titleColumnHEader=By.cssSelector("#dataSubTableContainer>div>table>thead>tr>th[id='col-string-JOB_TITLE-TH']>a");
	public static By industryColumnHEader=By.cssSelector("#dataSubTableContainer>div>table>thead>tr>th[id='col-string-COMPANY_INDUSTRY-TH']>a");
	public static By streetAddOneColumnHEader=By.cssSelector("#dataSubTableContainer>div>table>thead>tr>th[id='col-string-ADDRESS_STREET1-TH']>a");
	public static By streetAddTwoColumnHEader=By.cssSelector("#dataSubTableContainer>div>table>thead>tr>th[id='col-string-ADDRESS_STREET2-TH']>a");
	public static By cityColumnHEader=By.cssSelector("#dataSubTableContainer>div>table>thead>tr>th[id='col-string-CITY-TH']>a");
	public static By stateColumnHEader=By.cssSelector("#dataSubTableContainer>div>table>thead>tr>th[id='col-string-STATE-TH']>a");
	public static By postalCodeColumnHEader=By.cssSelector("#dataSubTableContainer>div>table>thead>tr>th[id='col-string-ZIP-TH']>a");
	public static By countryColumnHEader=By.cssSelector("#dataSubTableContainer>div>table>thead>tr>th[id='col-string-COUNTRY-TH']>a");
	public static By workPhoneColumnHEader=By.cssSelector("#dataSubTableContainer>div>table>thead>tr>th[id='col-string-WORK_PHONE-TH']>a");
	public static By companySizeColumnHEader=By.cssSelector("#dataSubTableContainer>div>table>thead>tr>th[id='col-string-COMPANY_SIZE-TH']>a");
	public static By jobFunctionColumnHEader=By.cssSelector("#dataSubTableContainer>div>table>thead>tr>th[id='col-string-JOB_FUNCTION-TH']>a");
	public static By optOutEventColumnHEader=By.cssSelector("#dataSubTableContainer>div>table>thead>tr>th[id='col-string-EVENT_EMAIL-TH']>a");
	public static By optOutMarketingColumnHEader=By.cssSelector("#dataSubTableContainer>div>table>thead>tr>th[id='col-string-MARKETING_EMAIL-TH']>a");
	public static By regTimeColumnHEader=By.cssSelector("#dataSubTableContainer>div>table>thead>tr>th[id='col-date-CREATE_TIMESTAMP-TH']>a");
	public static By sourceColumnHEader=By.cssSelector("#dataSubTableContainer>div>table>thead>tr>th[id='col-string-PARTNERREF-TH']>a");
	
	public static By sortIconWithColumnName=By.cssSelector("#dataSubTableContainer>div>table>thead>tr>th[id='col-number-TOTAL_VIEWS-TH']>img");
	
	public static By pageViewedFirstRowData=By.id("lblLinkedPAGES_VIEWED_Row1");
	
	public static By durationColumnData=By.cssSelector("#col-duration-DURATION_Row1>rdcondelement49>span>span");
	
	public static By partnerrefOptions=By.cssSelector("g.highcharts-legend>g>g>g:nth-child(1)>text");
	
	public static By arrowIconForNext=By.cssSelector("g.highcharts-legend>g:nth-child(3)>path[style='cursor:pointer;']");
	public static By arrowIconForPrevious=By.cssSelector("g.highcharts-legend>g:nth-child(3)>path[style='cursor:default;']");
	
	public static By audienceTableHeading=By.cssSelector("#table-title-document-audience>span");
	
	
	public static By searchKeywords(int no){
		 return By.cssSelector("#div_cloud_keyword>span>span:nth-child("+no+")");
	 }
	
	
	public static By partnerrefOptions(int no){
		 return By.cssSelector("g.highcharts-legend>g>g>g:nth-child("+no+")>text");
	 }
	 
	
}
