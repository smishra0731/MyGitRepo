@DocumentIntelligenceReport @AutomationDone
Feature:- Logi-Document Intelligence Report

  @Completed
  Scenario: 001-Verify the Document Intelligence Report dashboard elements and header
    When user launch "Document" Intelligence URL "logi.document.intelligence.report.url_1"
    Then verify "Document" Intelligence Report report is loaded
    And verify page title is "Document Reporting and Analytics"
    And verify the report title "Automationtesting_Doc_do_not_change" is displayed
    And verify event id "10076240" is displayed in header
    And verify client name "testclientforelite1" is displayed in header
    And verify date "May 26, 2017 02:03 AM PDT" is displayed in header
    And verify Image is displayed in header

  @Completed
  Scenario: 002-Verify MY DASHBOARD in Document Intelligence Report
    When user launch "Document" Intelligence URL "logi.document.intelligence.report.url_1"
    Then verify "Document" Intelligence Report report is loaded
    And verify the report title "Automationtesting_Doc_do_not_change" is displayed
    #And verify 'My Dashboard' tab is selected by default
    And verify "MY DASHBOARD" heading is displayed on 'My Dashboard' tab
    And verify 'Export' icon is displayed
    And verify sequence of widget on 'My Dashboard' tab for "DIR" is
      | Total Views      |
      | Average % Viewed |
      | View Source      |
      | Search Keywords  |

  @Completed
  Scenario: 003-Verify AUDIENCE in Document Intelligence Report
    When user launch "Document" Intelligence URL "logi.document.intelligence.report.url_1"
    Then verify "Document" Intelligence Report report is loaded
    And verify the report title "Automationtesting_Doc_do_not_change" is displayed
    When user click on "Audience" tab of "DIR"
    And verify "ALL VIEWERS" heading is displayed on 'Audience' tab
    And verify 'Export' icon is displayed
    And verify "TOTAL_VIEWS" column is present on Audience Tab
    And verify "PAGES_VIEWED" column is present on Audience Tab
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
    And verify "OPT_OUT_EVENT" column is present on Audience Tab
    And verify "OPT_OUT_MARKETING" column is present on Audience Tab
    And verify "REG_TIME" column is present on Audience Tab
    And verify "SOURCE" column is present on Audience Tab

  @Completed
  Scenario: 004-Verify Duration column in Document Intelligence Report
    When user launch "Document" Intelligence URL "logi.document.intelligence.report.url_1"
    Then verify "Document" Intelligence Report report is loaded
    And verify the report title "Automationtesting_Doc_do_not_change" is displayed
    And verify sequence of main menu items is
      | MY DASHBOARD |
      | AUDIENCE     |
      | INTERACTIONS |
    When user click on "Audience" tab of "DIR"
    Then verify "DURATION" column is present on Audience Tab
    And verify data is present under 'Duration' column

  @Completed
  Scenario: 005-Verify Export to Excel icon at My DASHBOARD page of DIR
    When user launch "Document" Intelligence URL "logi.document.intelligence.report.url_1"
    Then verify "Document" Intelligence Report report is loaded
    And verify the report title "Automationtesting_Doc_do_not_change" is displayed
    And verify 'Export' icon is displayed

  @Completed
  Scenario: 006-Verify data within Total Viiews widget at My DASHBOARD page of DIR
    When user launch "Document" Intelligence URL "logi.document.intelligence.report.url_2"
    Then verify "Document" Intelligence Report report is loaded
    And verify page title is "Document Reporting and Analytics"
    And verify the report title "Automation Content Do Not Change" is displayed
    And verify title of first widget is "Total Views"
    And verify value of "Total Views" is "14"
    And verify value of "Unique Views" is "11"

  @Completed
  Scenario: 007-Verify data within Average % Viewed widget at My DASHBOARD page of DIR
    When user launch "Document" Intelligence URL "logi.document.intelligence.report.url_2"
    Then verify "Document" Intelligence Report report is loaded
    And verify page title is "Document Reporting and Analytics"
    And verify the report title "Automation Content Do Not Change" is displayed
    And verify title of second widget is "Average % Viewed"
    And verify value of "Average % Viewed Percent" is "38%"
    And verify value of "Average % Viewed" is "(6 of 16 Pages)"
      
  @Completed
  Scenario: 008-Verify data within View Source widget at My DASHBOARD page of DIR
    When user launch "Document" Intelligence URL "logi.document.intelligence.report.url_2"
    Then verify "Document" Intelligence Report report is loaded
    And verify page title is "Document Reporting and Analytics"
    And verify the report title "Automation Content Do Not Change" is displayed
    And verify title of third widget is "View Source"
    And verify value of different sources are as below in View Source widget
      | FireFox_1 |
      | FireFox_2 |
      | FireFox_3 |
      | FireFox_4 |
      | FireFox_5 |
      | FireFox_6 |
      | IE_1      |
      | IE_2      |

  @Completed
  Scenario: 009-Verify source names within View Source widget are clickable at My DASHBOARD page of DIR
    When user launch "Document" Intelligence URL "logi.document.intelligence.report.url_2"
    Then verify "Document" Intelligence Report report is loaded
    And verify page title is "Document Reporting and Analytics"
    And verify the report title "Automation Content Do Not Change" is displayed
    And verify title of third widget is "View Source"
    And verify below source names are clickable in View Source widget
      | FireFox_1 |
      | FireFox_2 |
      | FireFox_3 |
      | FireFox_4 |
      | FireFox_5 |
      | FireFox_6 |
      | IE_1      |
      | IE_2      |

  @Completed
  Scenario: 010-Verify arrow icon within View Source widget at My DASHBOARD page of DIR
    When user launch "Document" Intelligence URL "logi.document.intelligence.report.url_2"
    Then verify "Document" Intelligence Report report is loaded
    And verify page title is "Document Reporting and Analytics"
    And verify the report title "Automation Content Do Not Change" is displayed
    And verify title of third widget is "View Source"
    And verify arrow icon below source names and is clickable
    
  @Completed
  Scenario: 011-Verify data within Search Keywords widget at My DASHBOARD page of DIR
    When user launch "Document" Intelligence URL "logi.document.intelligence.report.url_2"
    Then verify "Document" Intelligence Report report is loaded
    And verify page title is "Document Reporting and Analytics"
    And verify the report title "Automation Content Do Not Change" is displayed
    And verify title of fourth widget is "Search Keywords"
    And verify below values are within "Search Keywords" widget
      | conecting  |
      | on24       |
      | social     |
      | webcasting |

  @Completed
  Scenario: 012-Verify heading of data table at Audience page of DIR
    When user launch "Document" Intelligence URL "logi.document.intelligence.report.url_2"
    Then verify "Document" Intelligence Report report is loaded
    And verify page title is "Document Reporting and Analytics"
    And verify the report title "Automation Content Do Not Change" is displayed
    When user click on "Audience" tab of "DIR"
    And verify title of data table is "ALL VIEWERS (11)"

  @Completed
  Scenario: 013-Verify column headers of data table are clickable at Audience page of DIR
   When user launch "Document" Intelligence URL "logi.document.intelligence.report.url_2"
    Then verify "Document" Intelligence Report report is loaded
    And verify page title is "Document Reporting and Analytics"
    And verify the report title "Automation Content Do Not Change" is displayed
    When user click on "Audience" tab of "DIR"
    And verify colomn headers are clickable

  @Completed
  Scenario: 014-Verify sorting icon with column headers of data table are not clickable at Audience page of DIR
    When user launch "Document" Intelligence URL "logi.document.intelligence.report.url_2"
    Then verify "Document" Intelligence Report report is loaded
    And verify page title is "Document Reporting and Analytics"
    And verify the report title "Automation Content Do Not Change" is displayed
    When user click on "Audience" tab of "DIR"
    And verify sort icon after column header and not clickable
    
  @Completed
  Scenario: 015-Verify data under Page Viewed column is hyperlinked and navigates to PEP at Audience page of VIR
    When user launch "Document" Intelligence URL "logi.document.intelligence.report.url_2"
    Then verify "Document" Intelligence Report report is loaded
    And verify page title is "Document Reporting and Analytics"
    And verify the report title "Automation Content Do Not Change" is displayed
    When user click on "Audience" tab of "DIR"
    And verify Data in first row under "Pages Viewed" column is clickable
    And user clicks "9" under "Pages Viewed" column
    And verify user navigates to PEP report page
