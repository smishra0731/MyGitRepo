@VideoIntelligenceReport
Feature:- Logi-Video Intelligence Report

  @Completed
  Scenario: 001-Verify the Video Intelligence Report is loading and displaying header elements
    When user launch "Video" Intelligence URL "logi.video.intelligent.report.url_1"
    Then verify "Video" Intelligence Report report is loaded
    And verify page title is "Video Reporting and Analytics"
    And verify the report title "Automation_testing_Do_Not_Change" is displayed
    And verify event id "10128600" is displayed in header
    And verify client name "testclientforelite1" is displayed in header
    And verify date "Jun 26, 2017 04:38 AM PDT" is displayed in header
    And verify Image is displayed in header
  @Completed
  Scenario: 002-Verify MY DASHBOARD elements in Video Intelligence Report
    When user launch "Video" Intelligence URL "logi.video.intelligent.report.url_1"
    Then verify "Video" Intelligence Report report is loaded
    And verify page title is "Video Reporting and Analytics"
    And verify the report title "Automation_testing_Do_Not_Change" is displayed
    And verify "MY DASHBOARD" heading is displayed on 'My Dashboard' tab
    And verify 'Export' icon is displayed
    And verify sequence of widget on 'My Dashboard' tab for "VIR" is
      | Total Views           |
      | Avg. Viewing Duration |
      | View Source           |
      | Views by Player       |
      | ON24 Video Summary    |
      | YouTube Summary       |
    And verify 'Export' icon is displayed

  @Completed
  Scenario: 003-Verify AUDIENCE elements in Video Intelligence Report
    When user launch "Video" Intelligence URL "logi.video.intelligent.report.url_1"
    Then verify "Video" Intelligence Report report is loaded
    And verify page title is "Video Reporting and Analytics"
    And verify the report title "Automation_testing_Do_Not_Change" is displayed
    When user click on "Audience" tab of "VIR"
    And verify "ALL VIEWERS" heading is displayed on 'Audience' tab
    And verify 'Export' icon is displayed
    And verify "TOTAL_VIEWS" column is present on Audience Tab
    And verify "DURATION" column is present on Audience Tab
    And verify "FIRST_NAME" column is present on Audience Tab
    And verify "LAST_NAME" column is present on Audience Tab
    And verify "EMAIL" column is present on Audience Tab
    And verify "COMPANY" column is present on Audience Tab
    And verify "TITLE" column is present on Audience Tab
    And verify "INDUSTRY" column is present on Audience Tab
    And verify "STREET_ADD_ONE" column is present on Audience Tab
    And verify "STREET_ADD_TWO" column is present on Audience Tab
    And verify "CITY" column is present on Audience Tab
    And verify "STATE" column is present on Audience Tab
    And verify "POSTAL_CODE" column is present on Audience Tab
    And verify "COUNTRY" column is present on Audience Tab
    And verify "WORK_PHONE" column is present on Audience Tab
    And verify "CPMPANY_SIZE" column is present on Audience Tab
    And verify "JOB_FUNCTION" column is present on Audience Tab
    And verify "Add Custom Fields 1" column is present on Audience Tab
    And verify "Add Custom Fields 2" column is present on Audience Tab
    And verify "REG_TIME" column is present on Audience Tab
    And verify "SOURCE" column is present on Audience Tab

  @Completed
  Scenario: 004-Verify data within Total Viiews widget at My DASHBOARD page of VIR
    When user launch "Video" Intelligence URL "logi.video.intelligent.report.url_1"
    Then verify "Video" Intelligence Report report is loaded
    And verify page title is "Video Reporting and Analytics"
    And verify the report title "Automation_testing_Do_Not_Change" is displayed
    And verify title of first widget is "Total Views"
    And verify value of "Total Views" is "23"
    And verify value of "Unique Views" is "15"

  @Completed
  Scenario: 005-Verify data within Avg. Viewing Duration widget at My DASHBOARD page of VIR
    When user launch "Video" Intelligence URL "logi.video.intelligent.report.url_1"
    Then verify "Video" Intelligence Report report is loaded
    And verify page title is "Video Reporting and Analytics"
    And verify the report title "Automation_testing_Do_Not_Change" is displayed
    And verify title of second widget is "Avg. Viewing Duration"
    And verify value of "Avg viewing session" is "10s"
    And verify value of "Completion" is "40%"

  @Completed
  Scenario: 006-Verify data within View Source widget at My DASHBOARD page of VIR
    When user launch "Video" Intelligence URL "logi.video.intelligent.report.url_1"
    Then verify "Video" Intelligence Report report is loaded
    And verify page title is "Video Reporting and Analytics"
    And verify the report title "Automation_testing_Do_Not_Change" is displayed
    And verify title of third widget is "View Source"
    And verify value of different sources are as below in View Source widget
      | FireFoxNewUser  |
      | FireFoxUser     |
      | FireFoxUser_1   |
      | FireFoxUser_2   |
      | FireFoxUser_3   |
      | FireFoxUser_4   |
      | IEUser          |
      | IncognitoUser_1 |

  @Completed
  Scenario: 007-Verify source names within View Source widget are clickable at My DASHBOARD page of VIR
    When user launch "Video" Intelligence URL "logi.video.intelligent.report.url_1"
    Then verify "Video" Intelligence Report report is loaded
    And verify page title is "Video Reporting and Analytics"
    And verify the report title "Automation_testing_Do_Not_Change" is displayed
    And verify title of third widget is "View Source"
    And verify below source names are clickable in View Source widget
      | FireFoxNewUser  |
      | FireFoxUser     |
      | FireFoxUser_1   |
      | FireFoxUser_2   |
      | FireFoxUser_3   |
      | FireFoxUser_4   |
      | IEUser          |
      | IncognitoUser_1 |

  @Completed
  Scenario: 009-Verify arrow icon within View Source widget at My DASHBOARD page of VIR
    When user launch "Video" Intelligence URL "logi.video.intelligent.report.url_1"
    Then verify "Video" Intelligence Report report is loaded
    And verify page title is "Video Reporting and Analytics"
    And verify the report title "Automation_testing_Do_Not_Change" is displayed
    And verify title of third widget is "View Source"
    And verify arrow icon below source names and is clickable
    
    Scenario: 010-Verify data within Views by Player widget at My DASHBOARD page of VIR
    When user launch "Video" Intelligence URL "logi.video.intelligent.report.url_1"
    Then verify "Video" Intelligence Report report is loaded
    And verify page title is "Video Reporting and Analytics"
    And verify the report title "Automation_testing_Do_Not_Change" is displayed
    And verify title of fourth widget is "Views by Player"
    And verify vertical bar in Views by Player widget
    And verify color of vertical bar is "rgb(135, 206, 250)" in Views by Player widget
    And verify number above vertical bar 23 in Views by Player widget
    
    Scenario: 011-Verify data within ON24 Video Summary widget at My DASHBOARD page of VIR
    When user launch "Video" Intelligence URL "logi.video.intelligent.report.url_1"
    Then verify "Video" Intelligence Report report is loaded
    And verify page title is "Video Reporting and Analytics"
    And verify the report title "Automation_testing_Do_Not_Change" is displayed
    And verify title of fifth widget is "ON24 Video Summary"
    And verify value of "Total Views:" is 23 in ON24 Video Summary widget
    And verify value of "Unique Views:" is 15 in ON24 Video Summary widget
    And verify value of "Avg. Viewing Duration:" is "10s (40%)" in ON24 Video Summary widget
    
    Scenario: 012-Verify data within YouTube Summary widget at My DASHBOARD page of VIR
    When user launch "Video" Intelligence URL ${reportUrl}
    Then verify "Video" Intelligence Report report is loaded
    And verify page title is "Video Reporting and Analytics"
    And verify title of sixth widget is "YouTube Summary"
    And verify value of "Total Views:" is "" in YouTube Summary widget
    And verify value of "Avg. Viewing Duration:" is "" in YouTube Summary widget
    And verify value of "	Likes:" is "" in YouTube Summary widget
    And verify value of "	Comments:" is "" in YouTube Summary widget
    And verify value of "Shares:" is "" in YouTube Summary widget
    And verify message "*Please note that data may be delayed up to 5 days due to YouTube Policies." at bottom in YouTube Summary widget
    
    Scenario: 013-Verify heading of data table at Audience page of VIR
    When user launch "Video" Intelligence URL "logi.video.intelligent.report.url_1"
    Then verify "Video" Intelligence Report report is loaded
    And verify page title is "Video Reporting and Analytics"
    And verify the report title "Automation_testing_Do_Not_Change" is displayed
    When user click on "Audience" tab of "VIR"
    And verify title of data table is "All Viewers (15)"
    
    Scenario: 014-Verify column headers of data table are clickable at Audience page of VIR
    When user launch "Video" Intelligence URL "logi.video.intelligent.report.url_1"
    Then verify "Video" Intelligence Report report is loaded
    And verify page title is "Video Reporting and Analytics"
    And verify the report title "Automation_testing_Do_Not_Change" is displayed
    When user click on "Audience" tab of "VIR"
    And verify colomn headers are clickable
    
    Scenario: 015-Verify sorting icon with column headers of data table are not clickable at Audience page of VIR
    When user launch "Video" Intelligence URL "logi.video.intelligent.report.url_1"
    Then verify "Video" Intelligence Report report is loaded
    And verify page title is "Video Reporting and Analytics"
    And verify the report title "Automation_testing_Do_Not_Change" is displayed
    When user click on "Audience" tab of "VIR"
    And verify sort icon after column header
    And verify sort icon is not clickable
    
    Scenario: 016-Verify data under Duration column is hyperlinked and navigates to PEP at Audience page of VIR
    When user launch "Video" Intelligence URL "logi.video.intelligent.report.url_1"
    Then verify "Video" Intelligence Report report is loaded
    And verify page title is "Video Reporting and Analytics"
    And verify the report title "Automation_testing_Do_Not_Change" is displayed
    When user click on "Audience" tab of "VIR"
    And verify Data in first row under "Duration" column is clickable
    And user clicks "25s" under "Duration" column is clickable
    And verify user navigates to PEP report page
    