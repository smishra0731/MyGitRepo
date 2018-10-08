package demo.base.locators;


import org.openqa.selenium.By;

public class AnalyticsDashboardString {

	public static By analyticIcon=By.cssSelector("#globalNavBar>div:nth-child(3)>div>a>img");
	public static By last_90_Days_Label=By.cssSelector("#WCCFilters>div>div");
	public static By export_Icon=By.cssSelector("#export-button>a>img");
	public static By may_Be_Delayed_Message=By.cssSelector("#separator>span");
	public static By leads_widget=By.cssSelector("#edb-leads-widget>div>div:nth-child(1)>a>span");
	public static By total_Attendance_Widget=By.id("edb-total-attendance-widget");
	public static By unique_Attendees_Wdget=By.id("edb-unique-attendees-widget");	
	public static By funnel_Widget=By.id("edb-funnel-widget");
	public static By avg_Engagement_Widget=By.id("edb-avg-engagement-widget");
	public static By engagement_Minutes_Widget=By.id("edb-engagement-minutes-widget");
	public static By total_New_Content_Widget=By.id("edb-total-new-content-widget");
	public static By content_Views_Widget=By.id("edb-cg-content-views-widget");
	public static By account_EngCloud_Widget=By.id("edb-account-eng-cloud-widget");
	public static By funnel_Link=By.cssSelector("#edb-funnel-widget>div>div>a");
	public static By accountEngCloudWidgetTitle=By.cssSelector("#edb-account-eng-cloud-widget>div>div:nth-child(1)>span");
	
	public static By leadsWidgetTitle=By.cssSelector("#new-dashboard>div:nth-child(1)>div>div:nth-child(1)>a>span");
	public static By totalAttendanceWidgetTitle=By.cssSelector("#new-dashboard>div:nth-child(2)>div>div:nth-child(2)>a>span");
	public static By uniqueAttendanceWidgetTitle=By.cssSelector("#new-dashboard>div:nth-child(3)>div>div:nth-child(1)>a>span");
	public static By funnelWidgetTitle=By.cssSelector("#new-dashboard>div:nth-child(4)>div>div:nth-child(1)>a>span");
	public static By avgEngWidgetTitle=By.cssSelector("#new-dashboard>div:nth-child(5)>div>div:nth-child(1)>a>span");
	public static By engMinutesWidgetTitle=By.cssSelector("#new-dashboard>div:nth-child(6)>div>div:nth-child(1)>span");
	public static By totalNewContentWidgetTitle=By.cssSelector("#new-dashboard>div:nth-child(7)>div>div:nth-child(1)>a>span");
	public static By contentViewsWidgetTitle=By.cssSelector("#new-dashboard>div:nth-child(8)>div>div:nth-child(1)>a>span");
	
	public static By funnelStages(int no){		
		return By.cssSelector("#CountContainerFunnel>div:nth-child("+no+")");
	}
	
	public static By awareness_Stage=By.cssSelector("#CountContainerFunnel>div:nth-child(1)>a>div>div:nth-child(1)");
	public static By consideration_Stage=By.cssSelector("#CountContainerFunnel>div:nth-child(3)>a>div>div:nth-child(1)");
	public static By evaluation_Stage=By.cssSelector("#CountContainerFunnel>div:nth-child(5)>a>div>div:nth-child(1)");
	public static By retention_Stage=By.cssSelector("#CountContainerFunnel>div:nth-child(7)>a>div>div:nth-child(1)");
	public static By expand_Cloud_Widget=By.cssSelector("#word-cloud>a:nth-child(1)>span");
    public static By dashboardIframe= By.cssSelector("iframe[onload*='reports-dashboard']");
    
}
