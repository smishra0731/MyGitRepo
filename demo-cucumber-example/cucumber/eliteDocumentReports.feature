@EliteDocumentReports
Feature:- Logi-Elite Document Reports

  @Completed
  Scenario: 001 - Verify Document Tab is present under Analytics Menu
    Given wcc elite login page
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "DOCUMENT" tab is present
    When user open "DOCUMENT" tab
    #Then verify user is on "DOCUMENT" tab
    And verify page title is "Document | Webcast Elite"

  
  Scenario: 002 - Verify Document Tab is loading and displaying all columns
    Given wcc elite login page
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    Then verify user on my webcasts page
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "DOCUMENT" tab is present
    When user open "DOCUMENT" tab
    Then verify user is on "DOCUMENT" tab
    And verify column "Document Title (Total Pages)" is present on 'Document' tab
    And verify column "Total Views" is present on 'Document' tab
    And verify column "Unique Views" is present on 'Document' tab
    And verify column "Avg % Viewed" is present on 'Document' tab
    And verify column "Shares" is present on 'Document' tab

  
  Scenario: 003 - Verify Document Tab is displaying Export to excel icon
    Given wcc elite login page
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    Then verify user on my webcasts page
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "DOCUMENT" tab is present
    When user open "DOCUMENT" tab
    Then verify user is on "DOCUMENT" tab
    And verify Export to excel icon is present

 
   
  Scenario: 004-Verify Showing 1 to 14 of 14 Documents message at Elite Document Report Page
    Given wcc elite login page
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "DOCUMENT" tab is present
    When user open "DOCUMENT" tab
    Then verify user is on "DOCUMENT" tab
    And verify "Showing 1 to 14 of 14 Documents" message display

  
  Scenario: 005-Verify Prev and Next pagination links at Elite Document Report Page
    Given wcc elite login page
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "DOCUMENT" tab is present
    When user open "DOCUMENT" tab
    Then verify user is on "DOCUMENT" tab
    And verify "Prev" link is present
    And verify "Next" link is present

  
  Scenario: 006-Verify page value if there are max 20 records at Elite Document Report Page
    Given wcc elite login page
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "DOCUMENT" tab is present
    When user open "DOCUMENT" tab
    Then verify user is on "DOCUMENT" tab
    And verify page nummber is 1

  
  Scenario: 007-Verify Prev and Next pagination links are not clickable if data table has only 1 page at Elite Document Report Page
    Given wcc elite login page
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "DOCUMENT" tab is present
    When user open "DOCUMENT" tab
    Then verify user is on "DOCUMENT" tab
    And verify "Prev" link is present
    And verify "Next" link is present
    And verify "Prev" link is not clickable
    And verify "Next" link is not clickable

  
  Scenario: 008-Verify data under columns of video data table at Elite Document Report Page
    Given wcc elite login page
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "DOCUMENT" tab is present
    When user open "DOCUMENT" tab
    Then verify user is on "DOCUMENT" tab
    Then verify values inb first row under columns as below
      | Document Title (Total Pages) | "Automation_interactionDIR_test_donot_change (2303)" |
      | Total Views                  | "27"                                                 |
      | Unique Views                 | "24"                                                 |
      | Avg % Viewed                 | "0%"                                                 |
      | Shares                       | "0"                                                  |
      | Downloads                    | "28"                                                 |

  
  Scenario: 009-Verify sorting icon with columns of video data table are clickable at Elite Document Report Page
    Given wcc elite login page
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "DOCUMENT" tab is present
    When user open "DOCUMENT" tab
    Then verify user is on "DOCUMENT" tab
    And verify sorting icon for below columns are clickable
      | Total Views  |
      | Unique Views |
      | Avg % Viewed |
      | Shares       |
      | Downloads    |

  
  Scenario: 010-Verify Only Next pagination link is clickable when user is at first page of data table at Elite Document Report Page
    Given wcc elite login page
    When user enters login user name "testorionwcc3"
    And user enters login password "Password123"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "DOCUMENT" tab is present
    When user open "DOCUMENT" tab
    Then verify user is on "DOCUMENT" tab
    And verify "Prev" link is present
    And verify "Next" link is present
    And verify "Prev" link is not clickable
    And verify "Next" link is clickable

  
  Scenario: 011-Verify Prev pagination link is clickable when user is not at first page of data table at Elite Document Report Page
    Given wcc elite login page
    When user enters login user name "testorionwcc3"
    And user enters login password "Password123"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "DOCUMENT" tab is present
    When user open "DOCUMENT" tab
    Then verify user is on "DOCUMENT" tab
    And verify "Prev" link is present
    And verify "Next" link is present
    And verify "Prev" link is not clickable
    When user clicks on "Next" link
    Then verify "Prev" link is clickable

  
  Scenario: 012-Verify user can navigate from one page to other by clicking on page numbers also at first page of data table at Elite Document Report Page
    Given wcc elite login page
    When user enters login user name "testdocument1"
    And user enters login password "Password123"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "DOCUMENT" tab is present
    When user open "DOCUMENT" tab
    Then verify user is on "DOCUMENT" tab
    And verify "Prev" link is present
    And verify "Next" link is present

  
  Scenario: 013-Verify Total Views count if user launches content url at Elite Document Report Page
    Given wcc elite login page
    When user enters login user name "testdocument1"
    And user enters login password "Password123"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "DOCUMENT" tab is present
    When user open "DOCUMENT" tab
    Then verify user is on "DOCUMENT" tab
    And verify Total Views count for "test document _29 march"
    Then user launches content url as "https://gatewayqa.on24.com/wcc/gateway/testdocument1/10381559/10578969/test-document-_29-march"
    Then user clicks on "Already Registered" button
    And user enteres "qauser23may_3@inbfw.com" in email text box
    And user clicks on login button
    Given wcc elite login page
    When user enters login user name "testdocument1"
    And user enters login password "Password123"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "DOCUMENT" tab is present
    When user open "DOCUMENT" tab
    Then verify user is on "DOCUMENT" tab
    Then verify Total Views count should increase by 1

  
  Scenario: 014-Verify Unique Views count if user launches content url at Elite Document Report Page
    Given wcc elite login page
    When user enters login user name "testdocument1"
    And user enters login password "Password123"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "DOCUMENT" tab is present
    When user open "DOCUMENT" tab
    Then verify user is on "DOCUMENT" tab
    And verify Unique Views count for "test document _29 march"
    Then user launches content url as "https://gatewayqa.on24.com/wcc/gateway/testdocument1/10381559/10578969/test-document-_29-march"
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
    And verify "DOCUMENT" tab is present
    When user open "DOCUMENT" tab
    Then verify user is on "DOCUMENT" tab
    Then verify Unique Views count should increase by 1

  
  Scenario: 015-Verify Downloads count if user downloads content at Elite Document Report Page
    Given wcc elite login page
    When user enters login user name "testdocument1"
    And user enters login password "Password123"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "DOCUMENT" tab is present
    When user open "DOCUMENT" tab
    Then verify user is on "DOCUMENT" tab
    And verify Downloads count for "test document _29 march"
    Then user launches content url as "https://gatewayqa.on24.com/wcc/gateway/testdocument1/10381559/10578969/test-document-_29-march"
    Then user clicks on "Already Registered" button
    And user enteres "qauser23may_3@inbfw.com" in email text box
    And user clicks on login button
    And user clicks on download button
    Given wcc elite login page
    When user enters login user name "testdocument1"
    And user enters login password "Password123"
    And user clicks on login button
    And verify user on my webcasts page
    And verify Analytics icon is present
    When user opens analytics page
    Then verify user on analytics 'DASHBOARD' page
    And verify "DOCUMENT" tab is present
    When user open "DOCUMENT" tab
    Then verify user is on "DOCUMENT" tab
    Then verify Downloads count should increase by 1
