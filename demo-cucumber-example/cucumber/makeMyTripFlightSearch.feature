Feature: - Make My Trip Flight Search

  @makemytrip @Completed
  Scenario Outline: 001 - Verify user is able to search flight on make my trip
    When user launches make my trip url "makemytrip.home.url"
    And user selects "ONE WAY" trip option
    And user selects "<source>" from From dropdown
    And user selects "<destination>" from To dropdown
    And user selects departure date as "<date>" and "<month>"
    And user clicks Passenger|Class to enter details
    And user selects adults as "<adults>" and children as "<children>"
    And user selects Premium Economy class
    And user click on Search button
    And verify search results are according to entered "<source>" and  "<destination>"

    Examples: 
      | source    | destination | month | date | adults | children |
      | Ahmedabad | Cochin      | July  |   15 |      1 |        2 |
      | Bangalore | Chennai     | July  |   21 |      2 |        1 |
      | Pune      | Jaipur      | July  |   25 |      3 |        2 |
      