@WebcastRegistration
Feature:- LOGI-Webcast Registration Page

  @Completed
  Scenario: 001-Verification of Elite registration page with valid values
    When user deletes all cookies
    When user launches registration page url "registrationUrl"
    Then verify Registration page has been loaded
    And verify title "Event Registration" is displayed on Registration page
    When user enters first name in "Firstname" text box
    And user enters last name in "Lastname" text box
    And user enters desired email id in "Email" text box
    And user enters company name in "company" text box
    And user selects title as senior director from "Title" dropdown
    And user selects industry as education from "Industry" dropdown
    And user enters Indore into "Street address1" text box
    And user enters Indore into "City" text box
    And user enters Madhya Pradesh into "State" text box
    And user enters 452002 into "Postal Code" text box
    And user selects India as country from "Country" dropdown
    And user enters 6654748569 as work phone number in "Work Phone" text box
    And user selects 500-999 from "company size" drop down
    And user enters QA Engineer into "Job function" text box
    And user checks "Opt Out Event" checkbox
    And user clicks on "Register" button
    Then verify registration done successfully

  @Completed
  Scenario: 002-Validate Elite Registration page if value of required field is missing
    When user deletes all cookies
    When user launches registration page url "registrationUrl"
    Then verify Registration page has been loaded
    And verify title "Event Registration" is displayed on Registration page
    And user clicks on "Register" button
    Then verify tooltip "This is a required field"

  @Completed
  Scenario: 003-Verification of login by clicking Already Registered link
    When user deletes all cookies
    When user launches registration page url "registrationUrl"
    Then verify Registration page has been loaded
    And verify title "Event Registration" is displayed on Registration page
    And user clicks on "alreadyRegLink" link
    When user enters email-id in email text box and clicks on login button

  #Then verify login done successfully
  @Completed
  Scenario Outline: 004-Verify Registration with multiple users
    When user deletes all cookies
    When user launches registration page url "registrationUrl"
    Then verify Registration page has been loaded
    And verify title "Event Registration" is displayed on Registration page
    When user enters first name in "Firstname" text box
    And user enters last name in "<Lastname>" text box
    And user enters desired email id in "Email" text box
    And user enters company name in "<company>" text box
    And user selects title as senior director from "<Title>" dropdown
    And user selects industry as education from "<Industry>" dropdown
    And user enters Street into "<Street address1>" text box
    And user enters City into "<City>" text box
    And user enters State into "<State>" text box
    And user enters Postal code into "<Postal Code>" text box
    And user selects India as country from "<Country>" dropdown
    And user enters 6654748569 as work phone number in "<Work Phone>" text box
    And user selects 500-999 from "<company size>" drop down
    And user enters QA Engineer into "<Job function>" text box
    And user checks "<Opt Out Event>" checkbox
    And user clicks on "Register" button
    Then verify registration done successfully

    Examples: 
      | Firstname | Lastname | company | Title           | Industry  | Street address1 | City   | State          | Postal Code | Country | Work Phone | company size | Job function | Opt Out Event |
      | F_Name    | L_name   | ON24    | Senior Director | Education | Street One      | Indore | Madhya Pradesh |      452002 | India   | 6654748569 | 500-999      | QA Engineer  | Y             |
      | F_Name1   | L_name1  | LMS     | Senior Director | Education | Street Two      | Mumbai | Maharashtra    |      452111 | USA     | 6654748570 | 500-999      | QA Engineer  | Y             |
