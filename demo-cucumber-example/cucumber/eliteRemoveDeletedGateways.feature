Feature: LOGI-Remove Deleted Gateways

@LOGI-8361 @LOGI-8464
Scenario: 001-Verify data within Leads widget at dashboard  page of analytics report if any gateway is deleted from EM
When wcc elite login page
When user enters login user name "testvideo1"
And user enters login password "Password123"
And user clicks on "Analytics" tab
Then verify "leads count" within "Leads" widget
When user deletes content gateway for testvideo1 from EM
And user refreshes dashboard page
Then verify "Leads" count has been updated

@LOGI-8361 @LOGI-8464
Scenario: 002-Verify Total Attendees count within Total Attendance widget at dashboard  page of analytics report if any gateway is deleted from EM
When wcc elite login page
When user enters login user name "testvideo1"
And user enters login password "Password123"
And user clicks on "Analytics" tab
Then verify "Total Attendance count" within "Total Attendance" widget
When user deletes content gateway for testvideo1 from EM
And user refreshes dashboard page
Then verify "Total Attendance" count has been updated

@LOGI-8361 @LOGI-8464
Scenario: 003-Verify Live Attendees count within Total Attendance widget at dashboard  page of analytics report if any gateway is deleted from EM
When wcc elite login page
When user enters login user name "testvideo1"
And user enters login password "Password123"
And user clicks on "Analytics" tab
Then verify "Live Attendance count" within "Total Attendance" widget
When user deletes content gateway for testvideo1 from EM
And user refreshes dashboard page
Then verify "Live Attendance" count has been updated	

@LOGI-8361 @LOGI-8464
Scenario: 004-Verify On-Demand Attendees count within Total Attendance widget at dashboard  page of analytics report if any gateway is deleted from EM
When wcc elite login page
When user enters login user name "testvideo1"
And user enters login password "Password123"
And user clicks on "Analytics" tab
Then verify "On-Demand Attendees count" within "Total Attendance" widget
When user deletes content gateway for testvideo1 from EM
And user refreshes dashboard page
Then verify "On-Demand Attendees" count has been updated	


@LOGI-8361 @LOGI-8464
Scenario: 005-Verify Unique Attendees count within Unique Attendees to Leads widget at dashboard  page of analytics report if any gateway is deleted from EM
When wcc elite login page
When user enters login user name "testvideo1"
And user enters login password "Password123"
And user clicks on "Analytics" tab
Then verify "Unique Attendees count" within "Unique Attendees to Leads" widget
When user deletes content gateway for testvideo1 from EM
And user refreshes dashboard page
Then verify "Unique Attendees" count has been updated	

@LOGI-8361 @LOGI-8464
Scenario: 006-Verify percentage calculation within Unique Attendees to Leads widget at dashboard  page of analytics report if any gateway is deleted from EM
When wcc elite login page
When user enters login user name "testvideo1"
And user enters login password "Password123"
And user clicks on "Analytics" tab
Then verify "percentage calculation" within "Unique Attendees to Leads" widget
When user deletes content gateway for testvideo1 from EM
And user refreshes dashboard page
Then verify "percentage calculation" count has been updated	

@LOGI-8361 @LOGI-8464
Scenario: 007-Verify data within Average Webinar Engagement widget at analytics dashboard page if any gateway is deleted from EM
When wcc elite login page
When user enters login user name "testvideo1"
And user enters login password "Password123"
And user clicks on "Analytics" tab
Then verify "Average Webinar Engagement count" within "Average Webinar Engagement" widget
When user deletes content gateway for testvideo1 from EM
And user refreshes dashboard page
Then verify "Average Webinar Engagement" count has been updated	


@LOGI-8361 @LOGI-8464
Scenario: 008-Verify data within Engagement Minutes widget at analytics dashboard page if any gateway is deleted from EM
When wcc elite login page
When user enters login user name "testvideo1"
And user enters login password "Password123"
And user clicks on "Analytics" tab
Then verify "Engagement Minutes count" within "Engagement Minutes" widget
When user deletes content gateway for testvideo1 from EM
And user refreshes dashboard page
Then verify "Engagement Minutes" count has been updated	

@LOGI-8361 @LOGI-8464
Scenario: 009-Verify data within Total New Content widget at analytics dashboard page if any gateway is deleted from EM
When wcc elite login page
When user enters login user name "testvideo1"
And user enters login password "Password123"
And user clicks on "Analytics" tab
Then verify "Content count" within "Total New Content" widget
When user deletes content gateway for testvideo1 from EM
And user refreshes dashboard page
Then verify "Content count" count has been updated	

@LOGI-8361 @LOGI-8464
Scenario: 010-Verify data within Content Views from Content Gateway(s)  widget at analytics dashboard page if any gateway is deleted from EM
When wcc elite login page
When user enters login user name "testvideo1"
And user enters login password "Password123"
And user clicks on "Analytics" tab
Then verify "Content Views count" within "Content Views from Content Gateway(s)" widget
When user deletes content gateway for testvideo1 from EM
And user refreshes dashboard page
Then verify "Content Views count" count has been updated	

@LOGI-8361 @LOGI-8464
Scenario: 011-Verify gateway under Choose Content Gateway option at Leads report page for deleted gateway
When wcc elite login pag
When user enters login user name "testvideo1"
And user enters login password "Password123"
And user clicks on "Analytics" tab
And user clicks on Engagement tab
And user selects Audience(Lower Leads) option from dropdown
Then verify user is at power leads report page
And user clicks on "Choose Content Gateway" filter
Then verify all availabale gateways in the dropdown list
When user deletes content gateway for testvideo1 from EM
And user refreshes power leads report page
And user clicks on "Choose Content Gateway" filter
Then verify deleted gateway should not be available in the gateway list

@LOGI-8361 @LOGI-8464
Scenario: 012-Verify data within data table at Leads report page if gateway has been deleted from EM
When wcc elite login pag
When user enters login user name "testvideo1"
And user enters login password "Password123"
And user clicks on "Analytics" tab
And user clicks on Engagement tab
And user selects Audience(Lower Leads) option from dropdown
Then verify user is at power leads report page
And verify message above data table at power leads report page
When user deletes content gateway for testvideo1 from EM
And user refreshes power leads report page
And user clicks on "Choose Content Gateway" filter
Then verify message above data table has been updated at power leads report page
	
@LOGI-8361 @LOGI-8464
Scenario: 013-Verify data within data table at Webcast report page if gateway has  been deleted from EM
When wcc elite login pag
When user enters login user name "testwebcast1"
And user enters login password "Password12345"
And user clicks on "Analytics" tab
And user clicks on Webcast tab
Then verify user is at webcast report page
And verify message above data table at webcast report page
When user deletes content gateway for testwebcast1 from EM
And user refreshes webcast report page
Then verify message above data table has been updated at webcast report page

@LOGI-8361 @LOGI-8464
Scenario: 014-Verify data within data table at Video report page if gateway has  been deleted from EM
When wcc elite login pag
When user enters login user name "testvideo1"
And user enters login password "Password123"
And user clicks on "Analytics" tab
And user clicks on Video tab
Then verify user is at video report page
And verify message above data table at video report page
When user deletes content gateway for testvideo1 from EM
And user refreshes video report page
Then verify message above data table has been updated at video report page

@LOGI-8361 @LOGI-8464
Scenario: 015-Verify data within data table at Document report page if gateway has  been deleted from EM
When wcc elite login pag
When user enters login user name "testdocument1"
And user enters login password "Password123"
And user clicks on "Analytics" tab
And user clicks on Document tab
Then verify user is at Document report page
And verify message above data table at Document report page
When user deletes content gateway for testdocument1 from EM
And user refreshes Document report page
Then verify message above data table has been updated at Document report page

@LOGI-8361 @LOGI-8464
Scenario: 016-Verify gateway under Choose Content Gateway option at Content Gateway report page for deleted gateway
When wcc elite login pag
When user enters login user name "testvideo1"
And user enters login password "Password123"
And user clicks on "Analytics" tab
And user clicks on Content Gateway tab
Then verify user is at content gateway report page
And user clicks on "Choose Content Gateway" filter
Then verify all availabale gateways in the dropdown list
When user deletes content gateway for testvideo1 from EM
And user refreshes content gateway report page
And user clicks on "Choose Content Gateway" filter
Then verify deleted gateway should not be available in the gateway list

@LOGI-8361 @LOGI-8464
Scenario: 017-Verify Unique Visitors within Summary widget at Content Gateway report page if gateway has  been deleted from EM
When wcc elite login pag
When user enters login user name "testvideo1"
And user enters login password "Password123"
And user clicks on "Analytics" tab
And user clicks on Content Gateway tab
Then verify user is at content gateway report page
Then verify "Unique Visitors count" within "Summary" widget
When user deletes content gateway for testvideo1 from EM
And user refreshes content gateway report page
Then verify "Unique Visitors" count has been updated	

@LOGI-8361 @LOGI-8464
Scenario: 018-Verify Total Visits within Summary widget at Content Gateway report page if gateway has  been deleted from EM
When wcc elite login pag
When user enters login user name "testvideo1"
And user enters login password "Password123"
And user clicks on "Analytics" tab
And user clicks on Content Gateway tab
Then verify user is at content gateway report page
Then verify "Total Visitors count" within "Summary" widget
When user deletes content gateway for testvideo1 from EM
And user refreshes content gateway report page
Then verify "Total Visitors" count has been updated	

@LOGI-8361 @LOGI-8464
Scenario: 019-Verify Content Views within Summary widget at Content Gateway report page if gateway has  been deleted from EM
When wcc elite login pag
When user enters login user name "testvideo1"
And user enters login password "Password123"
And user clicks on "Analytics" tab
And user clicks on Content Gateway tab
Then verify user is at content gateway report page
Then verify "Content Views count" within "Summary" widget
When user deletes content gateway for testvideo1 from EM
And user refreshes content gateway report page
Then verify "Content Views" count has been updated	


@LOGI-8361 @LOGI-8464
Scenario: 020-Verify data within Content Gateway Registration Source widget at Content Gateway report page if gateway has  been deleted from EM
When wcc elite login pag
When user enters login user name "testvideo1"
And user enters login password "Password123"
And user clicks on "Analytics" tab
And user clicks on Content Gateway tab
Then verify user is at content gateway report page
Then verify "Content Gateway Registration Source values" within "Content Gateway Registration Source" widget
When user deletes content gateway for testvideo1 from EM
And user refreshes content gateway report page
Then verify "Content Gateway Registration Source" values has been updated	


@LOGI-8361 @LOGI-8464
Scenario: 021-Verify data within Subscription Email Statistics widget at Content Gateway report page if gateway has  been deleted from EM
When wcc elite login pag
When user enters login user name "testorionwcc1"
And user enters login password "Password123"
And user clicks on "Analytics" tab
And user clicks on Content Gateway tab
Then verify user is at content gateway report page
Then verify "Total Sent / Total Opened values" within "Subscription Email Statistics" widget
When user deletes content gateway for testorionwcc1 from EM
And user refreshes content gateway report page
Then verify "Total Sent / Total Opened" values has been updated	

@LOGI-8361 @LOGI-8464
Scenario: 022-Verify data within Search Keywords widget at Content Gateway report page if gateway has  been deleted from EM
When wcc elite login pag
When user enters login user name "testorionwcc1"
And user enters login password "Password123"
And user clicks on "Analytics" tab
And user clicks on Content Gateway tab
Then verify user is at content gateway report page
Then verify "search keywords values" within "Search Keywords" widget
When user deletes content gateway for testorionwcc1 from EM
And user refreshes content gateway report page
Then verify "search keywords" values has been updated	

@LOGI-8361 @LOGI-8464
Scenario: 023-Verify data within data table at Content Gateway report page if gateway has  been deleted from EM
When wcc elite login pag
When user enters login user name "testvideo1"
And user enters login password "Password123"
And user clicks on "Analytics" tab
And user clicks on Content Gateway tab
Then verify user is at content gateway report page
And verify message above data table at video report page
When user deletes content gateway for testvideo1 from EM
And user refreshes video report page
Then verify message above data table has been updated at video report page

@LOGI-8361 @LOGI-8464
Scenario: 024-Verify gateway under Choose Content Gateway option at Content Experiences report page for deleted gateway
When wcc elite login pag
When user enters login user name "testorionwcc1"
And user enters login password "Password123"
And user clicks on "Analytics" tab
And user clicks on Content Experience tab
Then verify user is at Content Experiences report page
And user clicks on "Choose Content Gateway" filter
Then verify all availabale gateways in the dropdown list
When user deletes content gateway for testorionwcc1 from EM
And user refreshes Content Experiences report page
And user clicks on "Choose Content Gateway" filter
Then verify deleted gateway should not be available in the gateway list

@LOGI-8361 @LOGI-8464
Scenario: 025-Verify data within data table at Content Experiences report page for deleted gateway
When wcc elite login pag
When user enters login user name "testorionwcc1"
And user enters login password "Password123"
And user clicks on "Analytics" tab
And user clicks on Content Experience tab
Then verify user is at Content Experiences report page
And verify message above data table at Content Experiences report page
When user deletes content gateway for testorionwcc1 from EM
And user refreshes Content Experiences report page
Then verify message above data table has been updated at Content Experiences report page