package demo.base.locators;

import org.openqa.selenium.By;

public class VideoIntelligenceReportString {
	
	public static By iframeSrc=By.cssSelector("iframe[src*='https://wccanalyticsqa.on24.com/WebcastReports/rdPage.aspx?rdReport=']");
	public static By reportTitle=By.cssSelector("#rdReportHeader>div>div>div>div:nth-child(1)>span");
	public static By eventIdInHeader=By.cssSelector("#rdReportHeader>div>div>div>div:nth-child(2)>span");
	public static By clientNameInHeader=By.cssSelector("#rdReportHeader>div>div>div:nth-child(2)>span");
	public static By dateInHeader=By.cssSelector("#rdReportHeader>div>div>div:nth-child(3)>span");
	public static By imageInHeader=By.cssSelector("#rdReportHeader>div>div:nth-child(2)>img");
   
	public static By audienceTab=By.id("video-audience-link");
	
	
	public static By avgViewingDurationWidgetTitle=By.cssSelector("label[for*='rdDashboardPanelRename-panel-avg-viewing']");
	public static By viewsbyPlayerWidgetTitle=By.cssSelector("label[for*='rdDashboardPanelRename-panel-views-by-player']");
	public static By ON24VideoSummaryWidgetTitle=By.cssSelector("label[for*='rdDashboardPanelRename-panel-on24-summary']");
	public static By youTubeSummaryWidgetTitle=By.cssSelector("label[for*='rdDashboardPanelRename-panel-youtube-summary']");
	
	
	
	
	
	
}
