@EliteVideoReports
Feature:- LOGI-Elite Video Reports

  @Completed
  Scenario: 001-Verify Video Tab is present under Analytics Menu
    Given wcc elite login page
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "VIDEO" tab is present
    When user open "VIDEO" tab
    Then verify user is on "VIDEO" tab

  @Completed
  Scenario: 002-Verify Video Report is loading and displaying all elements
    Given wcc elite login page
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "VIDEO" tab is present
    When user open "VIDEO" tab
    Then verify user is on "VIDEO" tab
    And verify Export to excel icon is present
    And verify Data info is present on page
    And verify Video Data table is present
    And verify "Video Title" column is present
    And verify "Total Views" column is present
    And verify "Unique Views" column is present
    And verify "Avg Viewing Duration" column is present
    And verify video data is present under table

 @Completed
  Scenario: 003-Verify Showing 1 to 14 of 14 Videos message at Elite Video report page
    Given wcc elite login page
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "VIDEO" tab is present
    When user open "VIDEO" tab
    Then verify user is on "VIDEO" tab
    And verify "Showing 1 to 14 of 14 Videos" message display

  @Completed
  Scenario: 004-Verify Prev and Next pagination links at Elite Video report page
    Given wcc elite login page
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "VIDEO" tab is present
    When user open "VIDEO" tab
    Then verify user is on "VIDEO" tab
    And verify "Prev" link is present
    And verify "Next" link is present

  @Completed
  Scenario: 005-Verify page value if there are max 20 records at Elite Video report page
    Given wcc elite login page
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "VIDEO" tab is present
    When user open "VIDEO" tab
    Then verify user is on "VIDEO" tab
    And verify page nummber is 1

  @Completed
  Scenario: 006-Verify Prev and Next pagination links are not clickable if data table has only 1 page at Elite Video report page
    Given wcc elite login page
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "VIDEO" tab is present
    When user open "VIDEO" tab
    Then verify user is on "VIDEO" tab
    And verify "Prev" link is present
    And verify "Next" link is present
    And verify "Prev" link is not clickable
    And verify "Next" link is not clickable


  @Completed
  Scenario: 007-Verify data under columns of video data table at Elite Video report page
    Given wcc elite login page
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "VIDEO" tab is present
    When user open "VIDEO" tab
    Then verify user is on "VIDEO" tab
    Then verify values inb first row under columns as below
      | Video Title          | "Automation for AEP Registration Source graph portal registration" |
      | Total Views          | "16"                                                               |
      | Unique Views         | "15"                                                               |
      | Avg Viewing Duration | '1m 30s (73%)"                                                     |

  @Completed
  Scenario: 008-Verify sorting icon with columns of video data table are clickable at Elite Video report page
    Given wcc elite login page
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "VIDEO" tab is present
    When user open "VIDEO" tab
    Then verify user is on "VIDEO" tab
    And verify sorting icon for below columns are clickable
      | Video Title          |
      | Total Views          |
      | Unique Views         |
      | Avg Viewing Duration |

  @Completed
  Scenario: 009-Verify Only Next pagination link is clickable when user is at first page of data table at Elite Video report page
    Given wcc elite login page
    When user enters login user name "testorionwcc3"
    And user enters login password "Password123"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "VIDEO" tab is present
    When user open "VIDEO" tab
    Then verify user is on "VIDEO" tab
    And verify "Prev" link is present
    And verify "Next" link is present
    And verify "Prev" link is not clickable
    And verify "Next" link is clickable

  @Completed
  Scenario: 010-Verify Prev pagination link is clickable when user is not at first page of data table at Elite Video report page
    Given wcc elite login page
    When user enters login user name "testorionwcc3"
    And user enters login password "Password123"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "VIDEO" tab is present
    When user open "VIDEO" tab
    Then verify user is on "VIDEO" tab
    And verify "Prev" link is present
    And verify "Next" link is present
    And verify "Prev" link is not clickable
    When user clicks on "Next" link
    Then verify "Prev" link is clickable

  @Completed
  Scenario: 011-Verify user can navigate from one page to other by clicking on page numbers also at first page of data table at Elite Video report page
    Given wcc elite login page
    When user enters login user name "testorionwcc3"
    And user enters login password "Password123"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "VIDEO" tab is present
    When user open "VIDEO" tab
    Then verify user is on "VIDEO" tab
    And verify "Prev" link is present
    And verify "Next" link is present
    And verify user is at page number 1
    And verify page 1 is not clickable
    And verify page 2 is clickable
    Then user clicks on page number 2
    Then verify data within table is of page number 2
    And verify page 2 is not clickable

  @Completed
  Scenario: 012-Verify Only Prev pagination link is clickable when user is at last page of data table
    Given wcc elite login page
    When user enters login user name "testorionwcc3"
    And user enters login password "Password123"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "VIDEO" tab is present
    When user open "VIDEO" tab
    Then verify user is on "VIDEO" tab
    And verify "Prev" link is present
    And verify "Next" link is present
    Then user clicks on page number 3
    And verify "Next" link is not clickable
    And verify "Prev" link is clickable

  @Completed
  Scenario: 013-Verify Total Views count if user launches content url at Elite Video Report Page
    Given wcc elite login page
    When user enters login user name "testdocument1"
    And user enters login password "Password123"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "VIDEO" tab is present
    When user open "VIDEO" tab
    Then verify user is on "VIDEO" tab
    And verify Total Views count for "Used for Automation Do Not Change"
    Then user launches content url as "https://gatewayqa.on24.com/wcc/gateway/testdocument1/10381559/10858922/used-for-automation-do-not-change"
    Then user clicks on "Already Registered" button
    And user enteres "qauser23may_4@inbfw.com" in email text box
    And user clicks on login button
    Given wcc elite login page
    When user enters login user name "testdocument1"
    And user enters login password "Password123"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "VIDEO" tab is present
    When user open "VIDEO" tab
    Then verify user is on "VIDEO" tab
    Then verify Total Views count should increase by 1

  @Completed
  Scenario: 014-Verify Unique Views count if user launches content url at Elite Video Report Page
    Given wcc elite login page
    When user enters login user name "testdocument1"
    And user enters login password "Password123"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "VIDEO" tab is present
    When user open "VIDEO" tab
    Then verify user is on "VIDEO" tab
    And verify Unique Views count for "Used for Automation Do Not Change"
    Then user launches content url as "https://gatewayqa.on24.com/wcc/gateway/testdocument1/10381559/10858922/used-for-automation-do-not-change"
    Then user registers with unique emailid
    And user clicks on register button
    Given wcc elite login page
    When user enters login user name "testdocument1"
    And user enters login password "Password123"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "VIDEO" tab is present
    When user open "VIDEO" tab
    Then verify user is on "VIDEO" tab
    Then verify Unique Views count should increase by 1
