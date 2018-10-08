package demo.base.locators;

import org.openqa.selenium.By;

public class DocumentInteractionReportsString {

	
	public static By dataTableRow1=By.id("DataTableColumn_Row1");
	public static By dataTableHeader=By.cssSelector("#resources-table-title-document>span");
	public static By downloadIcon=By.cssSelector("#table-title-resources>img");
	public static By firstResourceName=By.cssSelector("#resource-detail>div>div>span>span>p>span");
	public static By uniqueDownloadsText=By.cssSelector("div[class='highcharts-axis-labels highcharts-xaxis-labels']>span:nth-child(1)");
	public static By totalDownloadsText=By.cssSelector("div[class='highcharts-axis-labels highcharts-xaxis-labels']>span:nth-child(2)");
	public static By uniqueDownloadsCount=By.cssSelector("g[class='highcharts-data-labels']>g:nth-child(1)>text");
	public static By totalDownloadsCount=By.cssSelector("g[class='highcharts-data-labels']>g:nth-child(2)>text");
	public static By textAtBottomOfPage=By.id("pageItems");
	public static By firstPageLink=By.cssSelector("img[src='_Themes/wcc/images/icon_doubleArrow_left_gray_30x30.svg']");
	public static By previousPageLink=By.cssSelector("img[src='_Themes/wcc/images/icon_singleArrow_left_gray_30x30.svg']");
	public static By nextPageLink=By.cssSelector("img[src='_Themes/wcc/images/icon_singleArrow_right_blue_30x30.svg']");
	public static By lastPageLink=By.cssSelector("img[src='_Themes/wcc/images/icon_doubleArrow_right_blue_30x30.svg']");
	
	public static By pagination1=By.cssSelector("label[for='resource-viewers-PageNr']");
	public static By pagination2=By.cssSelector("td[class='rdThemePaging']>div>span:nth-child(5)>span");
	public static By pagination3=By.cssSelector("span[id='resource-viewers-of']");
	public static By pagination4=By.cssSelector("span[id='resource-viewers-PageOfPages']");
	
	public static By noDataToShowMessage=By.cssSelector("td[class='empty-table ThemeAlignCenter']");		
					
							
	
	
	
	
	public static By dataTableColumnHeader(int no){
		return By.cssSelector("thead[style='display:table-header-group']>tr>th:nth-child("+no+")>a");
		
	 }
	
	public static By firstRowData(int no){
		return By.cssSelector("#resource-viewers>tbody>tr:nth-child(1)>td:nth-child("+no+")>span");
		
	 }
	
	
}
