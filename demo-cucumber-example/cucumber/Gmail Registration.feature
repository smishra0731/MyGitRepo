@registrationPage
Feature: Gmail Registration

  Scenario: Verification of Registration Gmail registration page
    Given user launch registration page url "registrationUrl"
    Then verify Registration page has been loaded
    And verify title "Create your Google Account" is displayed on Registration page
