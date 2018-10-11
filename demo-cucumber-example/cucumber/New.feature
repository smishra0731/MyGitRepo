Feature: This is to test only

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