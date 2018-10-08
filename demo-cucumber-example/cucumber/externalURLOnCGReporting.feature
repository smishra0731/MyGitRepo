Feature: 1050-Logi-External URL on CG reporting

  Scenario: 001 Verify the name and title of the URL content in data table of elite CG report
    When user launch the url "https://wccqa.on24.com/webcast/portalsummaryreports"
    Then enter login user name "testwebpage1"
    And enters password as "Password123"
    And user click on login button
    Then verify the name of the webpage is displaying below Column title column as "Webpage Automation do not change"
    And verify the URL of the title is displaying next to name of the title as "(https://google.com)"

  Scenario: 002 Verify the total and unique views of the URL content in data table of elite CG report
    When user launch the url "https://wccqa.on24.com/webcast/portalsummaryreports"
    Then enter login user name "testwebpage1"
    And enters password as "Password123"
    And user click on login button
    Then verify the Total Views of the Webpage Automation do not change content is displaying as "9" under Total Views column
    And verify the Unique Viewers of the Webpage Automation do not change content is displaying as "2" under Unique Viewers column

  Scenario: 003 Verify the data under Type column for URL content in data table of elite CG report
    When user launch the url "https://wccqa.on24.com/webcast/portalsummaryreports"
    Then enter login user name "testwebpage1"
    And enters password as "Password123"
    And user click on login button
    Then verify "URL" is displaying under Type column for Webpage Automation do not change content

  Scenario: 004 Verify the count of Total Views and Unique Viewers is increasing on launching the URL type content
    When user launch the url "https://wccqa.on24.com/webcast/portalsummaryreports"
    Then enter login user name "testwebpage1"
    And enters password as "Password123"
    And user click on login button
    Then verify and save the count of Total Views and Unique Viewers for "URL Automation DO NOT OPEN" content
    When user launch the url as "https://gatewayqa.on24.com/wcc/gateway/testwebpage1/10506369" in new tab
    And click to "URL Automation DO NOT OPEN" content
    And click to "Launch Content" button
    And refresh the elite Content Gateway report
    Then verify count of Total Views is increased by one count
    And verify the count of Unique Viewers is increased by one count


