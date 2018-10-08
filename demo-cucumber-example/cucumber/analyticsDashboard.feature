@AnalyticsDashboard @AutomationDone
Feature: - LOGI-Analytics Dashboard

  @Completed
  Scenario: 001 - Verify that Elite Analytics dashboard is loading properly and displaying all panels
    When user launches elite dashboard url
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    Then verify user on analytics 'DASHBOARD' page
    And verify "Last 90 Days" label is present on dashboard
    And verify Export to PDF icon is present
    And verify "*May be delayed up to 24 hours" message is present
    And verify "Leads" panel is present
    And verify "Total Attendance" panel is present
    And verify "Unique Attendees to Leads" panel is present
    And verify "Funnel" panel is present
    And verify "Average Webinar Engagement" panel is present
    And verify "Engagement Minutes" panel is present
    And verify "Total New Content" panel is present
    And verify "Content Views from Content Gateway(s)" panel is present

  @Completed
  Scenario: 002 - Verify navigation to Power Leads reports from Analytics dashboard Leads widget
    When user launches elite dashboard url
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    Then verify user on analytics 'DASHBOARD' page
    When user clicks on "Leads" link
    Then verify user is on "POWER LEADS" report

  @Completed
  Scenario: 003 - Verify navigation to Elite Webcasts reports from Analytics dashboard Total Attendance widget
    When user launches elite dashboard url
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    Then verify user on analytics 'DASHBOARD' page
    When user clicks on "Total Attendance" link
    Then verify user is on "WEBCASTS" report

  @Completed
  Scenario: 004 - Verify navigation to Content Gateway report from Analytics dashboard Content Views from Content Gateway widget
    When user launches elite dashboard url
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    Then verify user on analytics 'DASHBOARD' page
    When user clicks on "Content Views from Content Gateway(s)" link
    Then verify user is on "CONTENT GATEWAY" report

    @Completed
    Scenario: 005-Verify that Funnel link is present on Elite dashboard and user is navigating to funnel reports on clicking
    When user launches elite dashboard url
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    Then verify user on analytics 'DASHBOARD' page
    When user clicks on "Funnel" link
    Then verify user is on "FUNNEL" report
    
    @Completed
    Scenario: 006-Verify that all funnel stages is displaying on Elite dashbord
    When user launches elite dashboard url
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    Then verify user on analytics 'DASHBOARD' page
    And verify "Awareness" stage is present in 'Funnel' panel
    #And verify "Consideration" stage is present in 'Funnel' panel
    #And verify "Evaluation" stage is present in 'Funnel' panel
    #And verify "Retention" stage is present in 'Funnel' panel
    
    @Completed
    Scenario: 007-Verify That Account Engagement Cloud panel is present on Elite Dashboard
    When user launches elite dashboard url
    When user enters login user name "testclientforelite1"
    And user enters login password "Password1234"
    And user clicks on login button
    Then verify user on analytics 'DASHBOARD' page
    And verify "Account Engagement Cloud" panel is present