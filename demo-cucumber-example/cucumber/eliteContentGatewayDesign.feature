@eliteContentGatewayDesign
Feature: eliteContentGatewayDesignPage

    @Completed1
		Scenario: 001- Verify uploading and removing banner image from content gateway registration page
    Given wcc elite login page
    When user enters login user name "testvideo1"
    And user enters login password "Password123"
    And user clicks on login button
    And verify user on my webcasts page
    And verify ON24 Gateway icon is present
    And user clicks "ON24 Gateway" icon
    And verify user is on Content Gateway Page
    And user clicks on "Design" tab at reg page setup page
    And user clicks on Browse button
    And user selects image to upload
    And verify image has been uploaded successfully
    And user clicks on Remove Banner button
    And verify image has been removed successfully
    
    