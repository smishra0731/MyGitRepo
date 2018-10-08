Feature:- LOGI-Content Gateway Report Page

  @Completed
  Scenario: 001-Verify the Content Gateway link in the Elite Report page
    Given wcc elite login page
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    When user open "CONTENT GATEWAY" tab
    Then verify user is on "CONTENT GATEWAY" report
    And verify page title is "Content Gateway Reports | Webcast Elite"

  @Completed
  Scenario: 002-Verify Filter bar in Content Gateway Report page
    Given wcc elite login page
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    When user open "CONTENT GATEWAY" tab
    Then verify user is on "CONTENT GATEWAY" report
    Then verify 'Filters' bar is present on page
    And verify "Filters:" label is displaying in filteres bar
    And verify "Choose Content Gateway" label is displaying in filteres bar
    And verify "Select Date" label is displaying in filteres bar

  @Completed
  Scenario: 003 - Verify Filters options are available under Filter dropdown in Content Gateway Report page
    Given wcc elite login page
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    When user open "CONTENT GATEWAY" tab
    Then verify user is on "CONTENT GATEWAY" report
    And verify "New Content Gateway 001" option present under 'Choose Content Gateway'

  @Completed
  Scenario: 004 - Verify Select Date Filters Filters bar in Content Gateway Report page
    Given wcc elite login page
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    When user open "CONTENT GATEWAY" tab
    Then verify user is on "CONTENT GATEWAY" report
    #When user clicks on "Select Date" arrow icon on CG report page
    When user open 'Select Date' dropdown
    And verify "View All" option present under 'Select Date'
    And verify "View Last 90 Days" option present under 'Select Date'
    And verify "View Last 30 Days" option present under 'Select Date'
    And verify 'From Date' textbox is present under 'Select Date'
    And verify calender icon present next to 'From Date'
    And verify 'To Date' textbox is present under 'Select Date'
    And verify calender icon present next to 'To Date'
    And verify 'Go' button is present

  @Completed
  Scenario: 005 - Verify default filter when user first time open in Content Gateway Report page
    Given wcc elite login page
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    When user open "CONTENT GATEWAY" tab
    Then verify user is on "CONTENT GATEWAY" report
    And verify the default date filter selected is "Last 90 Days"
    When user click on cross button to remove the filter

  # Then verify default date filter is removed
  @Completed007
  Scenario: 007-Verify Data table of Content Gateway Report is present
    Given wcc elite login page
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    When user open "CONTENT GATEWAY" tab
    Then verify user is on "CONTENT GATEWAY" report
    And verify following columns are present in data table
      | CONTENT_TITLE  |
      | TOTAL_VIEWS    |
      | UNIQUE_VIEWERS |
      | TYPE           |

  @Completed
  Scenario: 008 - Verify Export to Excel icon above data table in Content Gateway Report page
    Given wcc elite login page
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    When user open "CONTENT GATEWAY" tab
    Then verify user is on "CONTENT GATEWAY" report
    Then verify Export to excel icon is present on Content Gateway Page
