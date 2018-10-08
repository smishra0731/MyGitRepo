Feature: - Test Demo
  @Completed
  Scenario: 001 - Verify availability of ON24 Makes Business Webcasting Easier
    Given wcc elite login page
    When user clicks on "Terms of Use" link
    And user clicks on hamburger icon at top
    And user enters "elite" in search field and click on search icon
    And user navigates to last page using pagination
    And Verify "ON24 Makes Business Webcasting Easier" is present

  @Completed
  Scenario: 002 - Verify all available links
    Given wcc elite login page
    When user clicks on "Terms of Use" link
    And user clicks on hamburger icon at top
    And verify available links

  @Completed
  Scenario Outline: 003 - Verify error messages at vshow login page
    Given vshow elite login page
    When user enters <username> in username textbox
    And user enters <password> in password textbox
    Then verify error message as <mesage>

    Examples: 
      | username | password | mesage           |
      | "1"      |          | "Blank_Password" |
      |          | "2"      | "Blank_Username" |
      |          |          | "Blank_Username" |

  @test001
  Scenario: 004 - Verify sum of all data of one row and verify with total
    Given user opens dev report page
    Then verify sum of all rows should be equal to total for PMXD project

    
    @Completed
    Scenario: 005 - Verify registration through registration form for ToolsQA
    When user launches toolsqa registration url
    And user gets partial link text
    And user gets link text
    And user enters unique first name
    And user enters unique last name
    And user selects "male" as gender
    And user selects "3" as years of experience
    And user enters current date in date text box
    And user selects "Automation Tester" as "profession"
    And user uploads image by clicking on "Choose File" button
    And user clicks on "Test File To Download" link to downloadv file
    And user selects "Selenium Webdriver" as "automation tool"
    And user selects "North America" from Continents dropdown
    And user selects "WebElement Commands" from Selenium Comands
    And user clicks on Submit button
    Then verify "Text1" is present at bottom of the page
    Then verify "Text2" is present at bottom of the page
    