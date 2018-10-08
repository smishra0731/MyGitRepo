package demo.base.locators;

import org.openqa.selenium.By;

public class EliteVideoReportsString {

	public static By videoTab=By.cssSelector("#subNavULWrapper>ul>li:nth-child(4)>div>a");
	public static By iframe=By.cssSelector("iframe[onload*='video-analytics-report']");
	public static By exportToExcelIcon=By.cssSelector("#subExportDiv>a>img");
	public static By videoDataTableRow=By.cssSelector("#video-name-column_Row1>rdcondelement1>div>a>span.btn-text");
	public static By videoTitleColumnHeader=By.cssSelector("#DataTable1>thead>tr>th:nth-child(1)>a");
	public static By totalViewsColumnHeader=By.cssSelector("#DataTable1>thead>tr>th:nth-child(2)>a");
	public static By uniqueViewsColumnHeader=By.cssSelector("#DataTable1>thead>tr>th:nth-child(3)>a");
	public static By avgViewingSessionColumnHeader=By.cssSelector("#DataTable1>thead>tr>th:nth-child(4)>a");
	public static By pageItemsMessage=By.cssSelector("span[id='pageItems']");
	public static By selectedPageNumber=By.cssSelector("span#DataTable1-rdNumberedCurrPageNr");
	public static By videoTitleSortIcon=By.cssSelector("#video-name-column-TH>a>span>span");
	public static By totalViewsSortIcon=By.cssSelector("#total-views-column-TH>a>span>span");
	public static By uniqueViewsSortIcon=By.cssSelector("#unique-views-TH>a>span>span");
	public static By avgViewingSessionSortIcon=By.cssSelector("#avg-viewing-duration-column-TH>a>span>span");
	public static By prevPaginationIcon=By.cssSelector("#paginator>tbody>tr>td>div>span:nth-child(2)>a>span");
	public static By nextPaginationIcon=By.cssSelector("#paginator>tbody>tr>td>div>span:nth-child(6)>a>span");
	
	
	
	
}
