@DocumentInteractionReorts @AutomationDone
Feature: 1014-Logi - Document Interaction Reports

  @Completed
  Scenario: 001-Verify INTERACTIONS tab is displaying in Document Intelligence Report
    When user launch "Document" Intelligence URL "logi.document.interaction.report.url_1"
    Then verify "Document" Intelligence Report report is loaded
    And verify INTERACTIONS main menu icon is displayed
    When user clicks on "Interactions" tab
    Then verify INTERACTIONS report table is displayed

  @Completed
  Scenario: 002 - Verify Header and Graphical representaion in INTERACTIONS page in Document Intelligence Report
    When user launch "Document" Intelligence URL "logi.document.interaction.report.url_1"
    Then verify "Document" Intelligence Report report is loaded
    And verify INTERACTIONS main menu icon is displayed
    When user clicks on "Interactions" tab
    Then verify INTERACTIONS report table is displayed
    And verify title of data table is "DOWNLOADS"
    And verify 'Downloads' icon displayed
    And verify 'Export' icon is displayed
    And verify the title of graphical representation box is "Automation_interactionDIR_test_donot_change"
    And verify "Unique Downloads" text is displayed in graphical representation box
    And verify "Unique Downloads" number is "21"
    And verify "Total Downloads" text is displayed in graphical representation box
    And verify "Total Downloads" number is "28"

  @Completed
  Scenario: 003 - Verify Columns of Table in INTERACTIONS page in Document Intelligence Report
    When user launch "Document" Intelligence URL "logi.document.interaction.report.url_1"
    Then verify "Document" Intelligence Report report is loaded
    And verify INTERACTIONS main menu icon is displayed
    When user clicks on "Interactions" tab
    Then verify INTERACTIONS report table is displayed
    And verify following columns present in interactions table
      | First Name     |
      | Last Name      |
      | Company        |
      | # of Downloads |
      | Email          |
      | Date/Time      |

  @Completed
  Scenario: 004 - Verify Data is displayed under Columns in INTERACTIONS page in Document Intelligence Report
    When user launch "Document" Intelligence URL "logi.document.interaction.report.url_1"
    Then verify "Document" Intelligence Report report is loaded
    And verify INTERACTIONS main menu icon is displayed
    When user clicks on "Interactions" tab
    Then verify INTERACTIONS report table is displayed
    And verify following data present in row 1 in interactions table
      | Test orion              |
      | last name               |
      | Company 12              |
      |                       5 |
      | qalastname12@innbfw.com |
      | 09/07/2017 02:45 AM PDT |

  @UnitTest
  Scenario: 005 - Verify Pagination is displayed under Data table in INTERACTIONS page in Document Intelligence Report
    When user launch "Document" Intelligence URL "logi.document.interaction.report.url_1"
    Then verify "Document" Intelligence Report report is loaded
    And verify INTERACTIONS main menu icon is displayed
    When user clicks on "Interactions" tab
    Then verify INTERACTIONS report table is displayed
    And verify "Showing 20 of 21" results text is displaying below interaction table
    And verify 'Next' and 'Previous' page links displayed
    And verify 'Last' and 'First' page links displayed
    And verify "Page 1 of 2" page info is displaying
    #When user click on 'Next' page link
    #Then verify page loading image is displayed
    #And verify "Page 2 of 2" page info is displaying

  @Completed
  Scenario: 006- Verify values for Unique and Total Downloads if no download is there for any content at DIR
    When user launch "Document" Intelligence URL "logi.document.interaction.report.url_2"
    Then verify "Document" Intelligence Report report is loaded
    And verify INTERACTIONS main menu icon is displayed
    When user clicks on "Interactions" tab
    Then verify INTERACTIONS report table is displayed
    And verify "Unique Downloads" number is "0"
    And verify "Total Downloads" number is "0"

  @Completed
  Scenario: 007-Verify message No data to show for 0 downloads of any content at DIR
    When user launch "Document" Intelligence URL "logi.document.interaction.report.url_2"
    Then verify "Document" Intelligence Report report is loaded
    And verify INTERACTIONS main menu icon is displayed
    When user clicks on "Interactions" tab
    Then verify INTERACTIONS report table is displayed
    Then verify message "No data to show" within data table

  