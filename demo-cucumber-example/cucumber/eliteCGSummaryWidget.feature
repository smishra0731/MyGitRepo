@CGSummaryWighet
Feature: 1028-Logi- Elite CG Summary Widget

Background:
Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testclientforelite1" and password "Password1234"
Then verify user is on 'Elite Content Gateway' reports
And remove filter if any present

  @Completed
  Scenario: 001-Verify widgets present on Elite Content Gateway reports
    Then verify user is on 'Elite Content Gateway' reports
    And verify 'Summary' widget is present on 'Elite Content Gateway' reports

  Scenario: 002-Verify var0ious options available in summary section on top of Content Gateway Landing Page report
    Then verify user is on 'Elite Content Gateway' reports
    And verify 'Unique Visitors' data present is greater than zero
    And verify 'Total Visits' data present is greater than zero
    And verify 'Content Views' data present is greater than zero

  Scenario: 003-Verify the data changes when user apply date filter
    Then verify filters present on Elite Content Gateway report are
      | Choose Content Gateway |
      | Select Date            |
    When user click 'Choose Content Gateway' on Elite Content Gateway report
    Then verify "New Content Gateway 001" option should be available in the 'Choose Content Gateway' dropdown on Elite Content Gateway report
    And verify filter text present is "New Content Gateway 001" on Elite Content Gateway report
    When user clicks on 'Select Date' filter on Elite Content Gateway report
    Then verify options present in 'Select Date' dropdown are Elite Content Gateway
      | View All          |
      | View Last 90 Days |
      | View Last 30 Days |
    Then user enters current date as 'From' date on Elite Content Gateway report
    And user enters current date plus 2 days as 'To' date on Elite Content Gateway report
    And user click on 'Go' buton on Elite Content Gateway report
    And user clicks on 'Select Date' filter on Elite Content Gateway report
    Then verify filter text displays above selected date on Elite Content Gateway report

  Scenario: 004- Verify experience count is not counting for Unique Visitors of experience
    When user launches wcc elite "https://wccqa.on24.com/webcast/portalsummaryreports"
    And login with username "testexperience1" and password "Password123"
    Then verify Unique Visitors count
    When new user launches Content Experience url "https://gatewayqa.on24.com/wcc/gateway/testexperience1/10673373"
    And user refresh content gateway report
    Then verify "Unique Visitors" count is not increasing
    When same user reloads "https://gatewayqa.on24.com/wcc/gateway/testexperience1/10673373" page
    Then verify count is not increasing

  Scenario: 005- Verify Total Visits is not counting experience visits
    When user launches wcc elite "https://wccqa.on24.com/webcast/portalsummaryreports"
    And login with username "testexperience1" and password "Password123"
    Then verify  Total Visits count
    When user launches Content Experience url "https://gatewayqa.on24.com/wcc/gateway/testexperience1/10673373
    And user refresh content gateway report
    Then verify 'Total Visits' count does not increase
    When user reloads "https://gatewayqa.on24.com/wcc/gateway/testexperience1/10673373" page
    And user refresh content gateway report
    Then verify 'Total Visits' count does not increase

  Scenario: 006- Verify Content Views count for experience user
    When user launches wcc elite "https://wccqa.on24.com/webcast/portalsummaryreports"
    And login with username "testexperience1" and password "Password123"
    Then verify  Content Views count
    When user launches Content Experience url "https://gatewayqa.on24.com/wcc/gateway/testexperience1/10673373"
    And register for Content Experience
    And view any "<content>"
    And user refresh content gateway report
    Then verify 'Content Views' count increases by 1

  Scenario: 007- Verify Unique Visitors count if user registers with new email id at CG Summary widget
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testclientforelite1" and password "Password1234"
    Then verify user is on 'Elite Content Gateway' reports
    Then verify value of "Unique Visitors" within summary widget
    And user launches content url as "https://gatewayqa.on24.com/wcc/gateway/testclientforelite1/10052036/10448641/10-pages-pdf-04-dec-test"
    And user enters "qaAutoUser" in "firstname" textbox
    And user enters "inbfw" in "lastname" textbox
    And user enters unique emailid in "firstname" textbox
    And user enters "ON24" in "company" textbox
    And user clicks on "Register" button
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testclientforelite1" and password "Password1234"
    Then verify user is on 'Elite Content Gateway' reports
    And verify value of "Unique Visitors" within summary widget
    And verify "Unique Visitors" count increases by 1

  Scenario: 008- Verify Unique Visitors count if user registers with already registered email id at CG Summary widget
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testclientforelite1" and password "Password1234"
    Then verify user is on 'Elite Content Gateway' reports
    Then verify value of "Unique Visitors" within summary widget
    And user launches content url as "https://gatewayqa.on24.com/wcc/gateway/testclientforelite1/10052036/10448641/10-pages-pdf-04-dec-test"
    And user clicks on "Already Registered" button
    And user enters "qaautouser_1@inbfw.com" in "email" textbox
    And user clicks on login button
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testclientforelite1" and password "Password1234"
    Then verify user is on 'Elite Content Gateway' reports
    And verify value of "Unique Visitors" within summary widget
    And verify "Unique Visitors" count remains same

  Scenario: 009- Verify Unique Visitors count if user launches content url but does not register at CG Summary widget
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testclientforelite1" and password "Password1234"
    Then verify user is on 'Elite Content Gateway' reports
    Then verify value of "Unique Visitors" within summary widget
    And user launches content url as "https://gatewayqa.on24.com/wcc/gateway/testclientforelite1/10052036/10448641/10-pages-pdf-04-dec-test"
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testclientforelite1" and password "Password1234"
    Then verify user is on 'Elite Content Gateway' reports
    And verify value of "Unique Visitors" within summary widget
    And verify "Unique Visitors" count increases by 1

  Scenario: 010- Verify Total Visits count if user registers with unique email id at CG Summary widget
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testclientforelite1" and password "Password1234"
    Then verify user is on 'Elite Content Gateway' reports
    Then verify value of "Total Visits" within summary widget
    And user launches content url as "https://gatewayqa.on24.com/wcc/gateway/testclientforelite1/10052036/10448641/10-pages-pdf-04-dec-test"
    And user enters "qaAutoUser" in "firstname" textbox
    And user enters "inbfw" in "lastname" textbox
    And user enters unique emailid in "firstname" textbox
    And user enters "ON24" in "company" textbox
    And user clicks on "Register" button
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testclientforelite1" and password "Password1234"
    Then verify user is on 'Elite Content Gateway' reports
    Then verify value of "Total Visits" within summary widget
    Then verify "Total Visits" count increases by 1

  Scenario: 011- Verify Total Visits count if user registers with already registered email id at CG Summary widget
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testclientforelite1" and password "Password1234"
    Then verify user is on 'Elite Content Gateway' reports
    Then verify value of "Total Visits" within summary widget
    And user launches content url as "https://gatewayqa.on24.com/wcc/gateway/testclientforelite1/10052036/10448641/10-pages-pdf-04-dec-test"
    And user clicks on "Already Registered" button
    And user enters "qaautouser_1@inbfw.com" in "email" textbox
    And user clicks on login button
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testclientforelite1" and password "Password1234"
    Then verify user is on 'Elite Content Gateway' reports
    Then verify value of "Total Visits" within summary widget
    Then verify "Total Visits" count increases by 1

  Scenario: 012- Verify Total Visits count if user launches content url but does not register at CG Summary widget
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testclientforelite1" and password "Password1234"
    Then verify user is on 'Elite Content Gateway' reports
    Then verify value of "Total Visits" within summary widget
    And user launches content url as "https://gatewayqa.on24.com/wcc/gateway/testclientforelite1/10052036/10448641/10-pages-pdf-04-dec-test"
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testclientforelite1" and password "Password1234"
    Then verify user is on 'Elite Content Gateway' reports
    Then verify value of "Total Visits" within summary widget
    Then verify "Total Visits" count increases by 1

  Scenario: 013- Verify Content Views count if user registers but doesnot launch content at CG Summary widget
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testclientforelite1" and password "Password1234"
    Then verify user is on 'Elite Content Gateway' reports
    Then verify value of "Content Views" within summary widget
    And user launches content url as "https://gatewayqa.on24.com/wcc/gateway/testclientforelite1/10052036/10448641/10-pages-pdf-04-dec-test"
    And user enters "qaAutoUser" in "firstname" textbox
    And user enters "inbfw" in "lastname" textbox
    And user enters unique emailid in "firstname" textbox
    And user enters "ON24" in "company" textbox
    And user clicks on "Register" button
    And user does not click on "Launch Content" button
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testclientforelite1" and password "Password1234"
    Then verify user is on 'Elite Content Gateway' reports
    Then verify value of "Content Views" within summary widget
    Then verify "Content Views" count remains same

  Scenario: 014- Verify Content Views count if user registers and launches content at CG Summary widget
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testclientforelite1" and password "Password1234"
    Then verify user is on 'Elite Content Gateway' reports
    Then verify value of "Content Views" within summary widget
    And user launches content url as "https://gatewayqa.on24.com/wcc/gateway/testclientforelite1/10052036/10448641/10-pages-pdf-04-dec-test"
    And user enters "qaAutoUser" in "firstname" textbox
    And user enters "inbfw" in "lastname" textbox
    And user enters unique emailid in "firstname" textbox
    And user enters "ON24" in "company" textbox
    And user clicks on "Register" button
    And user click on "Launch Content" button
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testclientforelite1" and password "Password1234"
    Then verify user is on 'Elite Content Gateway' reports
    Then verify value of "Content Views" within summary widget
    Then verify "Content Views" count increases by 1

  Scenario: 015- Verify Unique Visitors count if no date filter is applied at CG Summary widget
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testclientforelite1" and password "Password1234"
    Then verify user is on 'Elite Content Gateway' reports
    And verify value of "Unique Visitors" within summary widget
    Then remove default filter "Last 90 Days" from content gateway report page
    And verify value of "Unique Visitors" should be other than previous value

  Scenario: 016- Verify Total Visitors count if no date filter is applied at CG Summary widget
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testclientforelite1" and password "Password1234"
    Then verify user is on 'Elite Content Gateway' reports
    And verify value of "Total Visitors" within summary widget
    Then remove default filter "Last 90 Days" from content gateway report page
    And verify value of "Total Visitors" should be other than previous value

  Scenario: 017- Verify Content Views count if no date filter is applied at CG Summary widget
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testclientforelite1" and password "Password1234"
    Then verify user is on 'Elite Content Gateway' reports
    And verify value of "Content Views" within summary widget
    Then remove default filter "Last 90 Days" from content gateway report page
    And verify value of "Content Views" should be other than previous value

  Scenario: 018- Verify Unique Visitors count if specific date range is selected at CG Summary widget
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testclientforelite1" and password "Password1234"
    Then verify user is on 'Elite Content Gateway' reports
    And verify value of "Unique Visitors" within summary widget
    Then user enters "04/01/2018" in From date text box
    And user enters "04/30/2018" in To date text box
    Then verify value of "Unique Visitors" changes to 13

  Scenario: 019- Verify Total Visitors count if specific date range is selected at CG Summary widget
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testclientforelite1" and password "Password1234"
    Then verify user is on 'Elite Content Gateway' reports
    And verify value of "Total Visitors" within summary widget
    Then user enters "04/01/2018" in From date text box
    And user enters "04/30/2018" in To date text box
    Then verify value of "Total Visitors" changes to 14

  Scenario: 020- Verify Content Views count if specific date range is selected at CG Summary widget
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testclientforelite1" and password "Password1234"
    Then verify user is on 'Elite Content Gateway' reports
    And verify value of "Content Views" within summary widget
    Then user enters "04/01/2018" in From date text box
    And user enters "04/30/2018" in To date text box
    Then verify value of "Content Views" changes to 28
