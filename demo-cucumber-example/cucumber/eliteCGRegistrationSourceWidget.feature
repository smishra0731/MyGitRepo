@CGRegistrationSource
Feature: 1029-Logi-Elite Content Gateway Registration Source Widget

  Background: 
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testclientforelite1" and password "Password1234"

  Scenario: 001-Verify header of partner ref info widget
    Then verify user is on 'Elite Content Gateway' reports
    And verify 'Content Gateway Registration Source' widget is present on 'Elite Content Gateway' reports

  Scenario: 002-Verify donut chart displaying within partner ref info widget
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testclientforelite1" and password "Password1234"
    Then verify user is on 'Elite Content Gateway' reports
    And user clicks on 'Select Date' filter on Elite Content Gateway report
    And user enters "01/01/2018" date as 'From' date
    And user enters "03/15/2018" date as 'To' date
    And user click on 'Go' buton on Elite Content Gateway report
    And verify legends present on 'Elite Content Gateway' reports are
      | Unspecified |
      |     8715198 |

  Scenario: 003-Verify arrow icon within Content Gateway Registration Source widget at content gateway report
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testorionwcc1" and password "Password123"
    Then verify user is on 'Elite Content Gateway' reports
    And verify 'Content Gateway Registration Source' widget is present on 'Elite Content Gateway' reports
    And verify arrow icons are available below source list

  Scenario: 008-Verify pagination within Content Gateway Registration Source widget at content gateway report
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testorionwcc1" and password "Password123"
    Then verify user is on 'Elite Content Gateway' reports
    And verify 'Content Gateway Registration Source' widget is present on 'Elite Content Gateway' reports
    And verify pagination is available below source list

  Scenario: 009-Verify source names within Content Gateway Registration Source widget are clickable at content gateway report
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testorionwcc1" and password "Password123"
    Then verify user is on 'Elite Content Gateway' reports
    And verify 'Content Gateway Registration Source' widget is present on 'Elite Content Gateway' reports
    And verify source names wirhin widget are clickable

  Scenario: 010-Verify only upward arrow icon within is clickable if user is at first page at content gateway report
    Given user launch 'Elite Cotent Gateway' report url "https://wccqa.on24.com/webcast/portalsummaryreports" with username "testorionwcc1" and password "Password123"
    Then verify user is on 'Elite Content Gateway' reports
    And verify 'Content Gateway Registration Source' widget is present on 'Elite Content Gateway' reports
    And verify downward arrow is not clickable
    And verify upward arrow is clickable
