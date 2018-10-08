Feature: 1051-Logi-PEP External URL Opened Widget

Scenario: 001 Verify the name and data displaying in the new widget
When user launch PEP Report URL "https://wccqa.on24.com/webcast/lead?token=sMef72VWZE7y9X3Zi25WD8b1PGxEEOckwL2YCJsSE67x0yJun2wMq-8ow5G5fxrskGZI5iC6Rt_fwWNo3xViycZfeKWtRNgyudtjLC4Pqyw="
Then verify 'EXTERNAL URL OPENED' widget is displaying
And verify "1" is displaying above the "EXTERNAL URL OPENED" widget

Scenario: 002 Verify the position of the new widget
When user launch PEP Report URL "https://wccqa.on24.com/webcast/lead?token=X0ZkgglJ1DJRjv0qfttImoOrGaXXq1pv0qMoZ-L4iCvhJRkMsZS5QV7saF69oCbSiZHhdQAqXHhX1NqCOyPWSd9JMpWNYAZDLFQLEa1q_5Q="
Then verify following panels are displaying below text 'LIFETIME ACTIVITY FOR test automation1'
          | WEBINARS ATTENDED        |
          | VIDEOS WATCHED           |
          | FLIPBOOKS READ           |
          | EXTERNAL URL OPENED      |
          | ENGAGEMENT MINUTES       |
          | RESOURCES DOWNLOADED     |
          | AVG. WEBINAR             |
          | VIEWING TIME             |
          | TOTAL ENGAGEMENT         |

 