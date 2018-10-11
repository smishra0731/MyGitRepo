$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TestDemo.feature");
formatter.feature({
  "line": 1,
  "name": "- Test Demo",
  "description": "",
  "id": "--test-demo",
  "keyword": "Feature"
});
formatter.before({
  "duration": 198773,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "001 - Verify availability of ON24 Makes Business Webcasting Easier",
  "description": "",
  "id": "--test-demo;001---verify-availability-of-on24-makes-business-webcasting-easier",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "wcc elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on \"Terms of Use\" link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks on hamburger icon at top",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enters \"elite\" in search field and click on search icon",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user navigates to last page using pagination",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify \"ON24 Makes Business Webcasting Easier\" is present",
  "keyword": "And "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.wcc_elite_login_page()"
});
formatter.result({
  "duration": 8466038895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Terms of Use",
      "offset": 16
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_clicks_on_link(String)"
});
formatter.result({
  "duration": 6396903178,
  "status": "passed"
});
formatter.match({
  "location": "TestDemo.user_clicks_on_hamburger_icon_at_top()"
});
formatter.result({
  "duration": 23477935854,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#masthead \u003e i\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\n*** Element info: {Using\u003dcss selector, value\u003d#masthead \u003e i}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:505)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat demo.test.testSteps.TestDemo.user_clicks_on_hamburger_icon_at_top(TestDemo.java)\r\n\tat ✽.And user clicks on hamburger icon at top(TestDemo.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "elite",
      "offset": 13
    }
  ],
  "location": "TestDemo.user_enters_in_search_field_and_click_on_search_icon(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestDemo.user_navigates_to_last_page_using_pagination()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ON24 Makes Business Webcasting Easier",
      "offset": 8
    }
  ],
  "location": "TestDemo.verify_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 40915913883,
  "status": "passed"
});
formatter.before({
  "duration": 70819,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "002 - Verify all available links",
  "description": "",
  "id": "--test-demo;002---verify-all-available-links",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "wcc elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user clicks on \"Terms of Use\" link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user clicks on hamburger icon at top",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify available links",
  "keyword": "And "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.wcc_elite_login_page()"
});
formatter.result({
  "duration": 2865482330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Terms of Use",
      "offset": 16
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_clicks_on_link(String)"
});
formatter.result({
  "duration": 3851281521,
  "status": "passed"
});
formatter.match({
  "location": "TestDemo.user_clicks_on_hamburger_icon_at_top()"
});
formatter.result({
  "duration": 15103823831,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#masthead \u003e i\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\n*** Element info: {Using\u003dcss selector, value\u003d#masthead \u003e i}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:505)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat demo.test.testSteps.TestDemo.user_clicks_on_hamburger_icon_at_top(TestDemo.java)\r\n\tat ✽.And user clicks on hamburger icon at top(TestDemo.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TestDemo.verify_available_links()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 6588456043,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "003 - Verify error messages at vshow login page",
  "description": "",
  "id": "--test-demo;003---verify-error-messages-at-vshow-login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "vshow elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user enters \u003cusername\u003e in username textbox",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enters \u003cpassword\u003e in password textbox",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "verify error message as \u003cmesage\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "--test-demo;003---verify-error-messages-at-vshow-login-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "mesage"
      ],
      "line": 26,
      "id": "--test-demo;003---verify-error-messages-at-vshow-login-page;;1"
    },
    {
      "cells": [
        "\"1\"",
        "",
        "\"Blank_Password\""
      ],
      "line": 27,
      "id": "--test-demo;003---verify-error-messages-at-vshow-login-page;;2"
    },
    {
      "cells": [
        "",
        "\"2\"",
        "\"Blank_Username\""
      ],
      "line": 28,
      "id": "--test-demo;003---verify-error-messages-at-vshow-login-page;;3"
    },
    {
      "cells": [
        "",
        "",
        "\"Blank_Username\""
      ],
      "line": 29,
      "id": "--test-demo;003---verify-error-messages-at-vshow-login-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 58503,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "003 - Verify error messages at vshow login page",
  "description": "",
  "id": "--test-demo;003---verify-error-messages-at-vshow-login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "vshow elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user enters \"1\" in username textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enters  in password textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "verify error message as \"Blank_Password\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TestDemo.vshow_elite_login_page()"
});
formatter.result({
  "duration": 22378729645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "TestDemo.user_enters_in_username_textbox(String)"
});
formatter.result({
  "duration": 132309613,
  "status": "passed"
});
formatter.match({
  "location": "TestDemo.user_enters_in_password_textbox()"
});
formatter.result({
  "duration": 64950194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blank_Password",
      "offset": 25
    }
  ],
  "location": "TestDemo.verify_error_message_as(String)"
});
formatter.result({
  "duration": 110065851,
  "status": "passed"
});
formatter.after({
  "duration": 51661,
  "status": "passed"
});
formatter.before({
  "duration": 47212,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "003 - Verify error messages at vshow login page",
  "description": "",
  "id": "--test-demo;003---verify-error-messages-at-vshow-login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "vshow elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user enters  in username textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enters \"2\" in password textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "verify error message as \"Blank_Username\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TestDemo.vshow_elite_login_page()"
});
formatter.result({
  "duration": 1551663877,
  "status": "passed"
});
formatter.match({
  "location": "TestDemo.user_enters_in_username_textbox()"
});
formatter.result({
  "duration": 87108424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 13
    }
  ],
  "location": "TestDemo.user_enters_in_password_textbox(String)"
});
formatter.result({
  "duration": 65425744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blank_Username",
      "offset": 25
    }
  ],
  "location": "TestDemo.verify_error_message_as(String)"
});
formatter.result({
  "duration": 110550639,
  "status": "passed"
});
formatter.after({
  "duration": 54739,
  "status": "passed"
});
formatter.before({
  "duration": 46186,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "003 - Verify error messages at vshow login page",
  "description": "",
  "id": "--test-demo;003---verify-error-messages-at-vshow-login-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "vshow elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user enters  in username textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enters  in password textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "verify error message as \"Blank_Username\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TestDemo.vshow_elite_login_page()"
});
formatter.result({
  "duration": 1422226380,
  "status": "passed"
});
formatter.match({
  "location": "TestDemo.user_enters_in_username_textbox()"
});
formatter.result({
  "duration": 83414531,
  "status": "passed"
});
formatter.match({
  "location": "TestDemo.user_enters_in_password_textbox()"
});
formatter.result({
  "duration": 56838134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blank_Username",
      "offset": 25
    }
  ],
  "location": "TestDemo.verify_error_message_as(String)"
});
formatter.result({
  "duration": 86237039,
  "status": "passed"
});
formatter.after({
  "duration": 55766,
  "status": "passed"
});
formatter.before({
  "duration": 35923,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "005 - Verify registration through registration form for ToolsQA",
  "description": "",
  "id": "--test-demo;005---verify-registration-through-registration-form-for-toolsqa",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "user launches toolsqa registration url",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user gets partial link text",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user gets link text",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user enters unique first name",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user enters unique last name",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user selects \"male\" as gender",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user selects \"3\" as years of experience",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user enters current date in date text box",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user selects \"Automation Tester\" as \"profession\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user uploads image by clicking on \"Choose File\" button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user clicks on \"Test File To Download\" link to downloadv file",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "user selects \"Selenium Webdriver\" as \"automation tool\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user selects \"North America\" from Continents dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "user selects \"WebElement Commands\" from Selenium Comands",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "user clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "verify \"Text1\" is present at bottom of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "verify \"Text2\" is present at bottom of the page",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDemo.user_launches_toolsqa_registration_url()"
});
formatter.result({
  "duration": 12883201183,
  "status": "passed"
});
formatter.match({
  "location": "TestDemo.user_gets_partial_link_text()"
});
formatter.result({
  "duration": 2037186976,
  "status": "passed"
});
formatter.match({
  "location": "TestDemo.user_gets_link_text()"
});
formatter.result({
  "duration": 2047047964,
  "status": "passed"
});
formatter.match({
  "location": "TestDemo.user_enters_unique_first_name()"
});
formatter.result({
  "duration": 2313410644,
  "status": "passed"
});
formatter.match({
  "location": "TestDemo.user_enters_unique_last_name()"
});
formatter.result({
  "duration": 2155507552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "male",
      "offset": 14
    }
  ],
  "location": "TestDemo.user_selects_as_gender(String)"
});
formatter.result({
  "duration": 2144890131,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 14
    }
  ],
  "location": "TestDemo.user_selects_as_years_of_experience(String)"
});
formatter.result({
  "duration": 2106123919,
  "status": "passed"
});
formatter.match({
  "location": "TestDemo.user_enters_current_date_in_date_text_box()"
});
formatter.result({
  "duration": 2113406333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Tester",
      "offset": 14
    },
    {
      "val": "profession",
      "offset": 37
    }
  ],
  "location": "TestDemo.user_selects_as(String,String)"
});
formatter.result({
  "duration": 2166506782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Choose File",
      "offset": 35
    }
  ],
  "location": "TestDemo.user_uploads_image_by_clicking_on_button(String)"
});
formatter.result({
  "duration": 116642467,
  "error_message": "org.openqa.selenium.WebDriverException: invalid argument: File not found : D:\\DesktopData\\all-imagesss\\PNG24\\PNG4.png\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:99)\r\n\tat demo.base.common.Common.type(Common.java)\r\n\tat demo.test.testSteps.TestDemo.user_uploads_image_by_clicking_on_button(TestDemo.java)\r\n\tat ✽.And user uploads image by clicking on \"Choose File\" button(TestDemo.feature:48)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test File To Download",
      "offset": 16
    }
  ],
  "location": "TestDemo.user_clicks_on_link_to_downloadv_file(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium Webdriver",
      "offset": 14
    },
    {
      "val": "automation tool",
      "offset": 38
    }
  ],
  "location": "TestDemo.user_selects_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "North America",
      "offset": 14
    }
  ],
  "location": "TestDemo.user_selects_from_Continents_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WebElement Commands",
      "offset": 14
    }
  ],
  "location": "TestDemo.user_selects_from_Selenium_Comands(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestDemo.user_clicks_on_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Text1",
      "offset": 8
    }
  ],
  "location": "TestDemo.verify_is_present_at_bottom_of_the_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Text2",
      "offset": 8
    }
  ],
  "location": "TestDemo.verify_is_present_at_bottom_of_the_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 6609317630,
  "status": "passed"
});
formatter.uri("analyticsDashboard.feature");
formatter.feature({
  "line": 2,
  "name": "- LOGI-Analytics Dashboard",
  "description": "",
  "id": "--logi-analytics-dashboard",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AnalyticsDashboard"
    },
    {
      "line": 1,
      "name": "@AutomationDone"
    }
  ]
});
formatter.before({
  "duration": 95794,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "001 - Verify that Elite Analytics dashboard is loading properly and displaying all panels",
  "description": "",
  "id": "--logi-analytics-dashboard;001---verify-that-elite-analytics-dashboard-is-loading-properly-and-displaying-all-panels",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user launches elite dashboard url",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters login user name \"testclientforelite1\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters login password \"Password1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "verify \"Last 90 Days\" label is present on dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify Export to PDF icon is present",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify \"*May be delayed up to 24 hours\" message is present",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify \"Leads\" panel is present",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify \"Total Attendance\" panel is present",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify \"Unique Attendees to Leads\" panel is present",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify \"Funnel\" panel is present",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify \"Average Webinar Engagement\" panel is present",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "verify \"Engagement Minutes\" panel is present",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "verify \"Total New Content\" panel is present",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "verify \"Content Views from Content Gateway(s)\" panel is present",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyticsDashboard.user_launches_elite_dashboard_url()"
});
formatter.result({
  "duration": 4777989019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testclientforelite1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 187564746,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password1234",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 103370862,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 24303952333,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 34797252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last 90 Days",
      "offset": 8
    }
  ],
  "location": "AnalyticsDashboard.verify_label_is_present_on_dashboard(String)"
});
formatter.result({
  "duration": 22611602665,
  "error_message": "org.junit.ComparisonFailure: OOPs something went wrong expected:\u003c[Last 90 Days]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat demo.test.testSteps.AnalyticsDashboard.verify_label_is_present_on_dashboard(AnalyticsDashboard.java)\r\n\tat ✽.And verify \"Last 90 Days\" label is present on dashboard(analyticsDashboard.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_Export_to_PDF_icon_is_present()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "*May be delayed up to 24 hours",
      "offset": 8
    }
  ],
  "location": "AnalyticsDashboard.verify_message_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Leads",
      "offset": 8
    }
  ],
  "location": "AnalyticsDashboard.verify_panel_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Attendance",
      "offset": 8
    }
  ],
  "location": "AnalyticsDashboard.verify_panel_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Unique Attendees to Leads",
      "offset": 8
    }
  ],
  "location": "AnalyticsDashboard.verify_panel_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Funnel",
      "offset": 8
    }
  ],
  "location": "AnalyticsDashboard.verify_panel_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Average Webinar Engagement",
      "offset": 8
    }
  ],
  "location": "AnalyticsDashboard.verify_panel_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Engagement Minutes",
      "offset": 8
    }
  ],
  "location": "AnalyticsDashboard.verify_panel_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Total New Content",
      "offset": 8
    }
  ],
  "location": "AnalyticsDashboard.verify_panel_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Content Views from Content Gateway(s)",
      "offset": 8
    }
  ],
  "location": "AnalyticsDashboard.verify_panel_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 6265765676,
  "status": "passed"
});
formatter.before({
  "duration": 86215,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "002 - Verify navigation to Power Leads reports from Analytics dashboard Leads widget",
  "description": "",
  "id": "--logi-analytics-dashboard;002---verify-navigation-to-power-leads-reports-from-analytics-dashboard-leads-widget",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user launches elite dashboard url",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user enters login user name \"testclientforelite1\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enters login password \"Password1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user clicks on \"Leads\" link",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "verify user is on \"POWER LEADS\" report",
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyticsDashboard.user_launches_elite_dashboard_url()"
});
formatter.result({
  "duration": 19621133164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testclientforelite1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 1407740242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password1234",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 94830465,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 4230283497,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 29149498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leads",
      "offset": 16
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_clicks_on_link(String)"
});
formatter.result({
  "duration": 16709448253,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POWER LEADS",
      "offset": 19
    }
  ],
  "location": "EliteContentGatewayReport.verify_user_is_on_report(String)"
});
formatter.result({
  "duration": 23676910,
  "status": "passed"
});
formatter.after({
  "duration": 69451,
  "status": "passed"
});
formatter.before({
  "duration": 54739,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "003 - Verify navigation to Elite Webcasts reports from Analytics dashboard Total Attendance widget",
  "description": "",
  "id": "--logi-analytics-dashboard;003---verify-navigation-to-elite-webcasts-reports-from-analytics-dashboard-total-attendance-widget",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "user launches elite dashboard url",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user enters login user name \"testclientforelite1\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "user enters login password \"Password1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user clicks on \"Total Attendance\" link",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "verify user is on \"WEBCASTS\" report",
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyticsDashboard.user_launches_elite_dashboard_url()"
});
formatter.result({
  "duration": 1438219569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testclientforelite1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 1101984583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password1234",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 100623620,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 4037790821,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 24413842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Attendance",
      "offset": 16
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_clicks_on_link(String)"
});
formatter.result({
  "duration": 18682792483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WEBCASTS",
      "offset": 19
    }
  ],
  "location": "EliteContentGatewayReport.verify_user_is_on_report(String)"
});
formatter.result({
  "duration": 31030144,
  "status": "passed"
});
formatter.after({
  "duration": 96821,
  "status": "passed"
});
formatter.before({
  "duration": 77320,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "004 - Verify navigation to Content Gateway report from Analytics dashboard Content Views from Content Gateway widget",
  "description": "",
  "id": "--logi-analytics-dashboard;004---verify-navigation-to-content-gateway-report-from-analytics-dashboard-content-views-from-content-gateway-widget",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "user launches elite dashboard url",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "user enters login user name \"testclientforelite1\"",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "user enters login password \"Password1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "user clicks on \"Content Views from Content Gateway(s)\" link",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "verify user is on \"CONTENT GATEWAY\" report",
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyticsDashboard.user_launches_elite_dashboard_url()"
});
formatter.result({
  "duration": 9551163010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testclientforelite1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 145387919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password1234",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 91893346,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 7393067988,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 26351280,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content Views from Content Gateway(s)",
      "offset": 16
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_clicks_on_link(String)"
});
formatter.result({
  "duration": 28147192955,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CONTENT GATEWAY",
      "offset": 19
    }
  ],
  "location": "EliteContentGatewayReport.verify_user_is_on_report(String)"
});
formatter.result({
  "duration": 10326617,
  "status": "passed"
});
formatter.after({
  "duration": 54397,
  "status": "passed"
});
formatter.before({
  "duration": 39002,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "005-Verify that Funnel link is present on Elite dashboard and user is navigating to funnel reports on clicking",
  "description": "",
  "id": "--logi-analytics-dashboard;005-verify-that-funnel-link-is-present-on-elite-dashboard-and-user-is-navigating-to-funnel-reports-on-clicking",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 53,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "user launches elite dashboard url",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "user enters login user name \"testclientforelite1\"",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "user enters login password \"Password1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "user clicks on \"Funnel\" link",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "verify user is on \"FUNNEL\" report",
  "keyword": "Then "
});
formatter.match({
  "location": "AnalyticsDashboard.user_launches_elite_dashboard_url()"
});
formatter.result({
  "duration": 3287051153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testclientforelite1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 190050949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password1234",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 122102053,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 4071092657,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 25478184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Funnel",
      "offset": 16
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_clicks_on_link(String)"
});
formatter.result({
  "duration": 18117918583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FUNNEL",
      "offset": 19
    }
  ],
  "location": "EliteContentGatewayReport.verify_user_is_on_report(String)"
});
formatter.result({
  "duration": 119401,
  "status": "passed"
});
formatter.after({
  "duration": 197063,
  "status": "passed"
});
formatter.before({
  "duration": 142665,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "006-Verify that all funnel stages is displaying on Elite dashbord",
  "description": "",
  "id": "--logi-analytics-dashboard;006-verify-that-all-funnel-stages-is-displaying-on-elite-dashbord",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 63,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "user launches elite dashboard url",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "user enters login user name \"testclientforelite1\"",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "user enters login password \"Password1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "verify \"Awareness\" stage is present in \u0027Funnel\u0027 panel",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyticsDashboard.user_launches_elite_dashboard_url()"
});
formatter.result({
  "duration": 17704856630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testclientforelite1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 1123694633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password1234",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 92964872,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 4407151108,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 41454265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Awareness",
      "offset": 8
    }
  ],
  "location": "AnalyticsDashboard.verify_stage_is_present_in_Funnel_panel(String)"
});
formatter.result({
  "duration": 20601924711,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#CountContainerFunnel\u003ediv:nth-child(1)\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\n*** Element info: {Using\u003dcss selector, value\u003d#CountContainerFunnel\u003ediv:nth-child(1)}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:505)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat demo.base.common.Common.findElement(Common.java)\r\n\tat demo.base.common.Common.isDisplayed(Common.java)\r\n\tat demo.test.testSteps.AnalyticsDashboard.verify_stage_is_present_in_Funnel_panel(AnalyticsDashboard.java)\r\n\tat ✽.And verify \"Awareness\" stage is present in \u0027Funnel\u0027 panel(analyticsDashboard.feature:70)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 8278580891,
  "status": "passed"
});
formatter.before({
  "duration": 53029,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 71,
      "value": "#And verify \"Consideration\" stage is present in \u0027Funnel\u0027 panel"
    },
    {
      "line": 72,
      "value": "#And verify \"Evaluation\" stage is present in \u0027Funnel\u0027 panel"
    },
    {
      "line": 73,
      "value": "#And verify \"Retention\" stage is present in \u0027Funnel\u0027 panel"
    }
  ],
  "line": 76,
  "name": "007-Verify That Account Engagement Cloud panel is present on Elite Dashboard",
  "description": "",
  "id": "--logi-analytics-dashboard;007-verify-that-account-engagement-cloud-panel-is-present-on-elite-dashboard",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 75,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "user launches elite dashboard url",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "user enters login user name \"testclientforelite1\"",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "user enters login password \"Password1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "verify \"Account Engagement Cloud\" panel is present",
  "keyword": "And "
});
formatter.match({
  "location": "AnalyticsDashboard.user_launches_elite_dashboard_url()"
});
formatter.result({
  "duration": 4704139543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testclientforelite1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 131509731,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password1234",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 95891728,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 8463614275,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 13032462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Engagement Cloud",
      "offset": 8
    }
  ],
  "location": "AnalyticsDashboard.verify_panel_is_present(String)"
});
formatter.result({
  "duration": 14072434802,
  "status": "passed"
});
formatter.after({
  "duration": 145744,
  "status": "passed"
});
formatter.uri("documentIntelligenceReport.feature");
formatter.feature({
  "line": 2,
  "name": "- Logi-Document Intelligence Report",
  "description": "",
  "id": "--logi-document-intelligence-report",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DocumentIntelligenceReport"
    },
    {
      "line": 1,
      "name": "@AutomationDone"
    }
  ]
});
formatter.before({
  "duration": 80399,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "001-Verify the Document Intelligence Report dashboard elements and header",
  "description": "",
  "id": "--logi-document-intelligence-report;001-verify-the-document-intelligence-report-dashboard-elements-and-header",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user launch \"Document\" Intelligence URL \"logi.document.intelligence.report.url_1\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify \"Document\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify page title is \"Document Reporting and Analytics\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify the report title \"Automationtesting_Doc_do_not_change\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify event id \"10076240\" is displayed in header",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify client name \"testclientforelite1\" is displayed in header",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify date \"May 26, 2017 02:03 AM PDT\" is displayed in header",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify Image is displayed in header",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 13
    },
    {
      "val": "logi.document.intelligence.report.url_1",
      "offset": 41
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 4711104467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "duration": 124875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document Reporting and Analytics",
      "offset": 22
    }
  ],
  "location": "EliteContentGatewayReport.verify_page_title_is(String)"
});
formatter.result({
  "duration": 10658476,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automationtesting_Doc_do_not_change",
      "offset": 25
    }
  ],
  "location": "VideoIntelligenceReport.verify_the_report_title_is_displayed(String)"
});
formatter.result({
  "duration": 10023986531,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"iframe[src*\u003d\u0027https://wccanalyticsqa.on24.com/WebcastReports/rdPage.aspx?rdReport\u003d\u0027]\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\n*** Element info: {Using\u003dcss selector, value\u003diframe[src*\u003d\u0027https://wccanalyticsqa.on24.com/WebcastReports/rdPage.aspx?rdReport\u003d\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:505)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat demo.base.common.Common.findElement(Common.java)\r\n\tat demo.test.testSteps.VideoIntelligenceReport.verify_the_report_title_is_displayed(VideoIntelligenceReport.java)\r\n\tat ✽.And verify the report title \"Automationtesting_Doc_do_not_change\" is displayed(documentIntelligenceReport.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "10076240",
      "offset": 17
    }
  ],
  "location": "VideoIntelligenceReport.verify_event_id_is_displayed_in_header(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "testclientforelite1",
      "offset": 20
    }
  ],
  "location": "VideoIntelligenceReport.verify_client_name_is_displayed_in_header(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "May 26, 2017 02:03 AM PDT",
      "offset": 13
    }
  ],
  "location": "VideoIntelligenceReport.verify_date_is_displayed_in_header(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VideoIntelligenceReport.verify_Image_is_displayed_in_header()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 5660150151,
  "status": "passed"
});
formatter.before({
  "duration": 90662,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "002-Verify MY DASHBOARD in Document Intelligence Report",
  "description": "",
  "id": "--logi-document-intelligence-report;002-verify-my-dashboard-in-document-intelligence-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user launch \"Document\" Intelligence URL \"logi.document.intelligence.report.url_1\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "verify \"Document\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "verify the report title \"Automationtesting_Doc_do_not_change\" is displayed",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#And verify \u0027My Dashboard\u0027 tab is selected by default"
    }
  ],
  "line": 21,
  "name": "verify \"MY DASHBOARD\" heading is displayed on \u0027My Dashboard\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "verify \u0027Export\u0027 icon is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "verify sequence of widget on \u0027My Dashboard\u0027 tab for \"DIR\" is",
  "rows": [
    {
      "cells": [
        "Total Views"
      ],
      "line": 24
    },
    {
      "cells": [
        "Average % Viewed"
      ],
      "line": 25
    },
    {
      "cells": [
        "View Source"
      ],
      "line": 26
    },
    {
      "cells": [
        "Search Keywords"
      ],
      "line": 27
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 13
    },
    {
      "val": "logi.document.intelligence.report.url_1",
      "offset": 41
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 1263248684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "duration": 107426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automationtesting_Doc_do_not_change",
      "offset": 25
    }
  ],
  "location": "VideoIntelligenceReport.verify_the_report_title_is_displayed(String)"
});
formatter.result({
  "duration": 10054901038,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"iframe[src*\u003d\u0027https://wccanalyticsqa.on24.com/WebcastReports/rdPage.aspx?rdReport\u003d\u0027]\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\n*** Element info: {Using\u003dcss selector, value\u003diframe[src*\u003d\u0027https://wccanalyticsqa.on24.com/WebcastReports/rdPage.aspx?rdReport\u003d\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:505)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat demo.base.common.Common.findElement(Common.java)\r\n\tat demo.test.testSteps.VideoIntelligenceReport.verify_the_report_title_is_displayed(VideoIntelligenceReport.java)\r\n\tat ✽.And verify the report title \"Automationtesting_Doc_do_not_change\" is displayed(documentIntelligenceReport.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "MY DASHBOARD",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_heading_is_displayed_on_My_Dashboard_tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VideoIntelligenceReport.verify_Export_icon_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "DIR",
      "offset": 53
    }
  ],
  "location": "DocumentIntelligenceReport.verify_sequence_of_widget_on_My_Dashboard_tab_for_is(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 5588296957,
  "status": "passed"
});
formatter.before({
  "duration": 838884,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "003-Verify AUDIENCE in Document Intelligence Report",
  "description": "",
  "id": "--logi-document-intelligence-report;003-verify-audience-in-document-intelligence-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "user launch \"Document\" Intelligence URL \"logi.document.intelligence.report.url_1\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "verify \"Document\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "verify the report title \"Automationtesting_Doc_do_not_change\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user click on \"Audience\" tab of \"DIR\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "verify \"ALL VIEWERS\" heading is displayed on \u0027Audience\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "verify \u0027Export\u0027 icon is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "verify \"TOTAL_VIEWS\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "verify \"PAGES_VIEWED\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "verify \"DURATION\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "verify \"FIRST_NAME\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "verify \"LAST_NAME\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "verify \"EMAIL\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "verify \"COMPANY\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "verify \"TITLE\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "verify \"INDUSTRY\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "verify \"STREET_ADD_ONE\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "verify \"STREET_ADD_TWO\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "verify \"CITY\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "verify \"STATE\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "verify \"POSTAL_CODE\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "verify \"COUNTRY\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "verify \"WORK_PHONE\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "verify \"CPMPANY_SIZE\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "verify \"JOB_FUNCTION\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "verify \"OPT_OUT_EVENT\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "verify \"OPT_OUT_MARKETING\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "verify \"REG_TIME\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "verify \"SOURCE\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 13
    },
    {
      "val": "logi.document.intelligence.report.url_1",
      "offset": 41
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 1128427209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "duration": 170035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automationtesting_Doc_do_not_change",
      "offset": 25
    }
  ],
  "location": "VideoIntelligenceReport.verify_the_report_title_is_displayed(String)"
});
formatter.result({
  "duration": 10028175134,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"iframe[src*\u003d\u0027https://wccanalyticsqa.on24.com/WebcastReports/rdPage.aspx?rdReport\u003d\u0027]\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\n*** Element info: {Using\u003dcss selector, value\u003diframe[src*\u003d\u0027https://wccanalyticsqa.on24.com/WebcastReports/rdPage.aspx?rdReport\u003d\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:505)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat demo.base.common.Common.findElement(Common.java)\r\n\tat demo.test.testSteps.VideoIntelligenceReport.verify_the_report_title_is_displayed(VideoIntelligenceReport.java)\r\n\tat ✽.And verify the report title \"Automationtesting_Doc_do_not_change\" is displayed(documentIntelligenceReport.feature:33)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audience",
      "offset": 15
    },
    {
      "val": "DIR",
      "offset": 33
    }
  ],
  "location": "VideoIntelligenceReport.user_click_on_tab_of(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ALL VIEWERS",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_heading_is_displayed_on_Audience_tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VideoIntelligenceReport.verify_Export_icon_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TOTAL_VIEWS",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PAGES_VIEWED",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "DURATION",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "FIRST_NAME",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "LAST_NAME",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "EMAIL",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPANY",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TITLE",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "INDUSTRY",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "STREET_ADD_ONE",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "STREET_ADD_TWO",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CITY",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "STATE",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "POSTAL_CODE",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "COUNTRY",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WORK_PHONE",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CPMPANY_SIZE",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "JOB_FUNCTION",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "OPT_OUT_EVENT",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "OPT_OUT_MARKETING",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "REG_TIME",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SOURCE",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 6419289946,
  "status": "passed"
});
formatter.before({
  "duration": 112216,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "004-Verify Duration column in Document Intelligence Report",
  "description": "",
  "id": "--logi-document-intelligence-report;004-verify-duration-column-in-document-intelligence-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 60,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "user launch \"Document\" Intelligence URL \"logi.document.intelligence.report.url_1\"",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "verify \"Document\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "verify the report title \"Automationtesting_Doc_do_not_change\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "verify sequence of main menu items is",
  "rows": [
    {
      "cells": [
        "MY DASHBOARD"
      ],
      "line": 66
    },
    {
      "cells": [
        "AUDIENCE"
      ],
      "line": 67
    },
    {
      "cells": [
        "INTERACTIONS"
      ],
      "line": 68
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "user click on \"Audience\" tab of \"DIR\"",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "verify \"DURATION\" column is present on Audience Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "verify data is present under \u0027Duration\u0027 column",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 13
    },
    {
      "val": "logi.document.intelligence.report.url_1",
      "offset": 41
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 1327797226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "duration": 181325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automationtesting_Doc_do_not_change",
      "offset": 25
    }
  ],
  "location": "VideoIntelligenceReport.verify_the_report_title_is_displayed(String)"
});
formatter.result({
  "duration": 10065158204,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"iframe[src*\u003d\u0027https://wccanalyticsqa.on24.com/WebcastReports/rdPage.aspx?rdReport\u003d\u0027]\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\n*** Element info: {Using\u003dcss selector, value\u003diframe[src*\u003d\u0027https://wccanalyticsqa.on24.com/WebcastReports/rdPage.aspx?rdReport\u003d\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:505)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat demo.base.common.Common.findElement(Common.java)\r\n\tat demo.test.testSteps.VideoIntelligenceReport.verify_the_report_title_is_displayed(VideoIntelligenceReport.java)\r\n\tat ✽.And verify the report title \"Automationtesting_Doc_do_not_change\" is displayed(documentIntelligenceReport.feature:64)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DocumentIntelligenceReport.verify_sequence_of_main_menu_items_is(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Audience",
      "offset": 15
    },
    {
      "val": "DIR",
      "offset": 33
    }
  ],
  "location": "VideoIntelligenceReport.user_click_on_tab_of(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "DURATION",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DocumentIntelligenceReport.verify_data_is_present_under_Duration_column()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 5208534102,
  "status": "passed"
});
formatter.before({
  "duration": 66372,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "005-Verify Export to Excel icon at My DASHBOARD page of DIR",
  "description": "",
  "id": "--logi-document-intelligence-report;005-verify-export-to-excel-icon-at-my-dashboard-page-of-dir",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 73,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "user launch \"Document\" Intelligence URL \"logi.document.intelligence.report.url_1\"",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "verify \"Document\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "verify the report title \"Automationtesting_Doc_do_not_change\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "verify \u0027Export\u0027 icon is displayed",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 13
    },
    {
      "val": "logi.document.intelligence.report.url_1",
      "offset": 41
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 1109682675,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "duration": 66714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automationtesting_Doc_do_not_change",
      "offset": 25
    }
  ],
  "location": "VideoIntelligenceReport.verify_the_report_title_is_displayed(String)"
});
formatter.result({
  "duration": 10059951103,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"iframe[src*\u003d\u0027https://wccanalyticsqa.on24.com/WebcastReports/rdPage.aspx?rdReport\u003d\u0027]\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\n*** Element info: {Using\u003dcss selector, value\u003diframe[src*\u003d\u0027https://wccanalyticsqa.on24.com/WebcastReports/rdPage.aspx?rdReport\u003d\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:505)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat demo.base.common.Common.findElement(Common.java)\r\n\tat demo.test.testSteps.VideoIntelligenceReport.verify_the_report_title_is_displayed(VideoIntelligenceReport.java)\r\n\tat ✽.And verify the report title \"Automationtesting_Doc_do_not_change\" is displayed(documentIntelligenceReport.feature:77)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "VideoIntelligenceReport.verify_Export_icon_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "duration": 5096720006,
  "status": "passed"
});
formatter.before({
  "duration": 366071,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "006-Verify data within Total Viiews widget at My DASHBOARD page of DIR",
  "description": "",
  "id": "--logi-document-intelligence-report;006-verify-data-within-total-viiews-widget-at-my-dashboard-page-of-dir",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 80,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "user launch \"Document\" Intelligence URL \"logi.document.intelligence.report.url_2\"",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "verify \"Document\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "verify page title is \"Document Reporting and Analytics\"",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "verify the report title \"Automation Content Do Not Change\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "verify title of first widget is \"Total Views\"",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "verify value of \"Total Views\" is \"14\"",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "verify value of \"Unique Views\" is \"11\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 13
    },
    {
      "val": "logi.document.intelligence.report.url_2",
      "offset": 41
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 35472721226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "duration": 91004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document Reporting and Analytics",
      "offset": 22
    }
  ],
  "location": "EliteContentGatewayReport.verify_page_title_is(String)"
});
formatter.result({
  "duration": 22628990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Content Do Not Change",
      "offset": 25
    }
  ],
  "location": "VideoIntelligenceReport.verify_the_report_title_is_displayed(String)"
});
formatter.result({
  "duration": 76885128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Views",
      "offset": 33
    }
  ],
  "location": "DocumentIntelligenceReport.verify_title_of_first_widget_is(String)"
});
formatter.result({
  "duration": 51969734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Views",
      "offset": 17
    },
    {
      "val": "14",
      "offset": 34
    }
  ],
  "location": "DocumentIntelligenceReport.verify_value_of_is(String,String)"
});
formatter.result({
  "duration": 29079705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unique Views",
      "offset": 17
    },
    {
      "val": "11",
      "offset": 35
    }
  ],
  "location": "DocumentIntelligenceReport.verify_value_of_is(String,String)"
});
formatter.result({
  "duration": 36480835,
  "status": "passed"
});
formatter.after({
  "duration": 48582,
  "status": "passed"
});
formatter.before({
  "duration": 37291,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "007-Verify data within Average % Viewed widget at My DASHBOARD page of DIR",
  "description": "",
  "id": "--logi-document-intelligence-report;007-verify-data-within-average-%-viewed-widget-at-my-dashboard-page-of-dir",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 90,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 92,
  "name": "user launch \"Document\" Intelligence URL \"logi.document.intelligence.report.url_2\"",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "verify \"Document\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "verify page title is \"Document Reporting and Analytics\"",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "verify the report title \"Automation Content Do Not Change\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "verify title of second widget is \"Average % Viewed\"",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "verify value of \"Average % Viewed Percent\" is \"38%\"",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "verify value of \"Average % Viewed\" is \"(6 of 16 Pages)\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 13
    },
    {
      "val": "logi.document.intelligence.report.url_2",
      "offset": 41
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 12887924180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "duration": 98189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document Reporting and Analytics",
      "offset": 22
    }
  ],
  "location": "EliteContentGatewayReport.verify_page_title_is(String)"
});
formatter.result({
  "duration": 18783536,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Content Do Not Change",
      "offset": 25
    }
  ],
  "location": "VideoIntelligenceReport.verify_the_report_title_is_displayed(String)"
});
formatter.result({
  "duration": 71708476,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Average % Viewed",
      "offset": 34
    }
  ],
  "location": "DocumentIntelligenceReport.verify_title_of_second_widget_is(String)"
});
formatter.result({
  "duration": 30849845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Average % Viewed Percent",
      "offset": 17
    },
    {
      "val": "38%",
      "offset": 47
    }
  ],
  "location": "DocumentIntelligenceReport.verify_value_of_is(String,String)"
});
formatter.result({
  "duration": 33516004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Average % Viewed",
      "offset": 17
    },
    {
      "val": "(6 of 16 Pages)",
      "offset": 39
    }
  ],
  "location": "DocumentIntelligenceReport.verify_value_of_is(String,String)"
});
formatter.result({
  "duration": 30636703,
  "status": "passed"
});
formatter.after({
  "duration": 35923,
  "status": "passed"
});
formatter.before({
  "duration": 33870,
  "status": "passed"
});
formatter.scenario({
  "line": 101,
  "name": "008-Verify data within View Source widget at My DASHBOARD page of DIR",
  "description": "",
  "id": "--logi-document-intelligence-report;008-verify-data-within-view-source-widget-at-my-dashboard-page-of-dir",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 100,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 102,
  "name": "user launch \"Document\" Intelligence URL \"logi.document.intelligence.report.url_2\"",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "verify \"Document\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "verify page title is \"Document Reporting and Analytics\"",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "verify the report title \"Automation Content Do Not Change\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "verify title of third widget is \"View Source\"",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "verify value of different sources are as below in View Source widget",
  "rows": [
    {
      "cells": [
        "FireFox_1"
      ],
      "line": 108
    },
    {
      "cells": [
        "FireFox_2"
      ],
      "line": 109
    },
    {
      "cells": [
        "FireFox_3"
      ],
      "line": 110
    },
    {
      "cells": [
        "FireFox_4"
      ],
      "line": 111
    },
    {
      "cells": [
        "FireFox_5"
      ],
      "line": 112
    },
    {
      "cells": [
        "FireFox_6"
      ],
      "line": 113
    },
    {
      "cells": [
        "IE_1"
      ],
      "line": 114
    },
    {
      "cells": [
        "IE_2"
      ],
      "line": 115
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 13
    },
    {
      "val": "logi.document.intelligence.report.url_2",
      "offset": 41
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 10864928777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "duration": 92031,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document Reporting and Analytics",
      "offset": 22
    }
  ],
  "location": "EliteContentGatewayReport.verify_page_title_is(String)"
});
formatter.result({
  "duration": 12726947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Content Do Not Change",
      "offset": 25
    }
  ],
  "location": "VideoIntelligenceReport.verify_the_report_title_is_displayed(String)"
});
formatter.result({
  "duration": 75728070,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "View Source",
      "offset": 33
    }
  ],
  "location": "DocumentIntelligenceReport.verify_title_of_third_widget_is(String)"
});
formatter.result({
  "duration": 32256652,
  "status": "passed"
});
formatter.match({
  "location": "DocumentIntelligenceReport.verify_value_of_different_sources_are_as_below_in_View_Source_widget(DataTable)"
});
formatter.result({
  "duration": 723524529,
  "status": "passed"
});
formatter.after({
  "duration": 57134,
  "status": "passed"
});
formatter.before({
  "duration": 341096,
  "status": "passed"
});
formatter.scenario({
  "line": 118,
  "name": "009-Verify source names within View Source widget are clickable at My DASHBOARD page of DIR",
  "description": "",
  "id": "--logi-document-intelligence-report;009-verify-source-names-within-view-source-widget-are-clickable-at-my-dashboard-page-of-dir",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 117,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 119,
  "name": "user launch \"Document\" Intelligence URL \"logi.document.intelligence.report.url_2\"",
  "keyword": "When "
});
formatter.step({
  "line": 120,
  "name": "verify \"Document\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "verify page title is \"Document Reporting and Analytics\"",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "verify the report title \"Automation Content Do Not Change\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "verify title of third widget is \"View Source\"",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "verify below source names are clickable in View Source widget",
  "rows": [
    {
      "cells": [
        "FireFox_1"
      ],
      "line": 125
    },
    {
      "cells": [
        "FireFox_2"
      ],
      "line": 126
    },
    {
      "cells": [
        "FireFox_3"
      ],
      "line": 127
    },
    {
      "cells": [
        "FireFox_4"
      ],
      "line": 128
    },
    {
      "cells": [
        "FireFox_5"
      ],
      "line": 129
    },
    {
      "cells": [
        "FireFox_6"
      ],
      "line": 130
    },
    {
      "cells": [
        "IE_1"
      ],
      "line": 131
    },
    {
      "cells": [
        "IE_2"
      ],
      "line": 132
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 13
    },
    {
      "val": "logi.document.intelligence.report.url_2",
      "offset": 41
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 10520044941,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "duration": 96820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document Reporting and Analytics",
      "offset": 22
    }
  ],
  "location": "EliteContentGatewayReport.verify_page_title_is(String)"
});
formatter.result({
  "duration": 15202201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Content Do Not Change",
      "offset": 25
    }
  ],
  "location": "VideoIntelligenceReport.verify_the_report_title_is_displayed(String)"
});
formatter.result({
  "duration": 79145871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "View Source",
      "offset": 33
    }
  ],
  "location": "DocumentIntelligenceReport.verify_title_of_third_widget_is(String)"
});
formatter.result({
  "duration": 25636586,
  "status": "passed"
});
formatter.match({
  "location": "DocumentIntelligenceReport.verify_below_source_names_are_clickable_in_View_Source_widget(DataTable)"
});
formatter.result({
  "duration": 979024829,
  "status": "passed"
});
formatter.after({
  "duration": 36264,
  "status": "passed"
});
formatter.before({
  "duration": 43449,
  "status": "passed"
});
formatter.scenario({
  "line": 135,
  "name": "010-Verify arrow icon within View Source widget at My DASHBOARD page of DIR",
  "description": "",
  "id": "--logi-document-intelligence-report;010-verify-arrow-icon-within-view-source-widget-at-my-dashboard-page-of-dir",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 134,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 136,
  "name": "user launch \"Document\" Intelligence URL \"logi.document.intelligence.report.url_2\"",
  "keyword": "When "
});
formatter.step({
  "line": 137,
  "name": "verify \"Document\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "verify page title is \"Document Reporting and Analytics\"",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "verify the report title \"Automation Content Do Not Change\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "verify title of third widget is \"View Source\"",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "verify arrow icon below source names and is clickable",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 13
    },
    {
      "val": "logi.document.intelligence.report.url_2",
      "offset": 41
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 11379636269,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "duration": 97847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document Reporting and Analytics",
      "offset": 22
    }
  ],
  "location": "EliteContentGatewayReport.verify_page_title_is(String)"
});
formatter.result({
  "duration": 12117627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Content Do Not Change",
      "offset": 25
    }
  ],
  "location": "VideoIntelligenceReport.verify_the_report_title_is_displayed(String)"
});
formatter.result({
  "duration": 80909853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "View Source",
      "offset": 33
    }
  ],
  "location": "DocumentIntelligenceReport.verify_title_of_third_widget_is(String)"
});
formatter.result({
  "duration": 24076509,
  "status": "passed"
});
formatter.match({
  "location": "DocumentIntelligenceReport.verify_arrow_icon_below_source_names_and_is_clickable()"
});
formatter.result({
  "duration": 452710840,
  "status": "passed"
});
formatter.after({
  "duration": 40028,
  "status": "passed"
});
formatter.before({
  "duration": 33528,
  "status": "passed"
});
formatter.scenario({
  "line": 144,
  "name": "011-Verify data within Search Keywords widget at My DASHBOARD page of DIR",
  "description": "",
  "id": "--logi-document-intelligence-report;011-verify-data-within-search-keywords-widget-at-my-dashboard-page-of-dir",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 143,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 145,
  "name": "user launch \"Document\" Intelligence URL \"logi.document.intelligence.report.url_2\"",
  "keyword": "When "
});
formatter.step({
  "line": 146,
  "name": "verify \"Document\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 147,
  "name": "verify page title is \"Document Reporting and Analytics\"",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "verify the report title \"Automation Content Do Not Change\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "verify title of fourth widget is \"Search Keywords\"",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "verify below values are within \"Search Keywords\" widget",
  "rows": [
    {
      "cells": [
        "conecting"
      ],
      "line": 151
    },
    {
      "cells": [
        "on24"
      ],
      "line": 152
    },
    {
      "cells": [
        "social"
      ],
      "line": 153
    },
    {
      "cells": [
        "webcasting"
      ],
      "line": 154
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 13
    },
    {
      "val": "logi.document.intelligence.report.url_2",
      "offset": 41
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 11812001101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "duration": 132059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document Reporting and Analytics",
      "offset": 22
    }
  ],
  "location": "EliteContentGatewayReport.verify_page_title_is(String)"
});
formatter.result({
  "duration": 17567977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Content Do Not Change",
      "offset": 25
    }
  ],
  "location": "VideoIntelligenceReport.verify_the_report_title_is_displayed(String)"
});
formatter.result({
  "duration": 80597838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Keywords",
      "offset": 34
    }
  ],
  "location": "DocumentIntelligenceReport.verify_title_of_fourth_widget_is(String)"
});
formatter.result({
  "duration": 29662681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Keywords",
      "offset": 32
    }
  ],
  "location": "DocumentIntelligenceReport.verify_below_values_are_within_widget(String,DataTable)"
});
formatter.result({
  "duration": 117291131,
  "status": "passed"
});
formatter.after({
  "duration": 33870,
  "status": "passed"
});
formatter.before({
  "duration": 30449,
  "status": "passed"
});
formatter.scenario({
  "line": 157,
  "name": "012-Verify heading of data table at Audience page of DIR",
  "description": "",
  "id": "--logi-document-intelligence-report;012-verify-heading-of-data-table-at-audience-page-of-dir",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 156,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 158,
  "name": "user launch \"Document\" Intelligence URL \"logi.document.intelligence.report.url_2\"",
  "keyword": "When "
});
formatter.step({
  "line": 159,
  "name": "verify \"Document\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 160,
  "name": "verify page title is \"Document Reporting and Analytics\"",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "verify the report title \"Automation Content Do Not Change\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "user click on \"Audience\" tab of \"DIR\"",
  "keyword": "When "
});
formatter.step({
  "line": 163,
  "name": "verify title of data table is \"ALL VIEWERS (11)\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 13
    },
    {
      "val": "logi.document.intelligence.report.url_2",
      "offset": 41
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 13079752796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "duration": 93741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document Reporting and Analytics",
      "offset": 22
    }
  ],
  "location": "EliteContentGatewayReport.verify_page_title_is(String)"
});
formatter.result({
  "duration": 20452750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Content Do Not Change",
      "offset": 25
    }
  ],
  "location": "VideoIntelligenceReport.verify_the_report_title_is_displayed(String)"
});
formatter.result({
  "duration": 98846637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audience",
      "offset": 15
    },
    {
      "val": "DIR",
      "offset": 33
    }
  ],
  "location": "VideoIntelligenceReport.user_click_on_tab_of(String,String)"
});
formatter.result({
  "duration": 13748952079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ALL VIEWERS (11)",
      "offset": 31
    }
  ],
  "location": "DocumentIntelligenceReport.verify_title_of_data_table_is(String)"
});
formatter.result({
  "duration": 41973265,
  "status": "passed"
});
formatter.after({
  "duration": 37976,
  "status": "passed"
});
formatter.before({
  "duration": 30449,
  "status": "passed"
});
formatter.scenario({
  "line": 166,
  "name": "013-Verify column headers of data table are clickable at Audience page of DIR",
  "description": "",
  "id": "--logi-document-intelligence-report;013-verify-column-headers-of-data-table-are-clickable-at-audience-page-of-dir",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 165,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 167,
  "name": "user launch \"Document\" Intelligence URL \"logi.document.intelligence.report.url_2\"",
  "keyword": "When "
});
formatter.step({
  "line": 168,
  "name": "verify \"Document\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 169,
  "name": "verify page title is \"Document Reporting and Analytics\"",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "verify the report title \"Automation Content Do Not Change\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "user click on \"Audience\" tab of \"DIR\"",
  "keyword": "When "
});
formatter.step({
  "line": 172,
  "name": "verify colomn headers are clickable",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 13
    },
    {
      "val": "logi.document.intelligence.report.url_2",
      "offset": 41
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 10593403130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "duration": 85188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document Reporting and Analytics",
      "offset": 22
    }
  ],
  "location": "EliteContentGatewayReport.verify_page_title_is(String)"
});
formatter.result({
  "duration": 14112884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Content Do Not Change",
      "offset": 25
    }
  ],
  "location": "VideoIntelligenceReport.verify_the_report_title_is_displayed(String)"
});
formatter.result({
  "duration": 87347567,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audience",
      "offset": 15
    },
    {
      "val": "DIR",
      "offset": 33
    }
  ],
  "location": "VideoIntelligenceReport.user_click_on_tab_of(String,String)"
});
formatter.result({
  "duration": 5998642459,
  "status": "passed"
});
formatter.match({
  "location": "DocumentIntelligenceReport.verify_colomn_headers_are_clickable()"
});
formatter.result({
  "duration": 33138643,
  "status": "passed"
});
formatter.after({
  "duration": 47213,
  "status": "passed"
});
formatter.before({
  "duration": 33870,
  "status": "passed"
});
formatter.scenario({
  "line": 175,
  "name": "014-Verify sorting icon with column headers of data table are not clickable at Audience page of DIR",
  "description": "",
  "id": "--logi-document-intelligence-report;014-verify-sorting-icon-with-column-headers-of-data-table-are-not-clickable-at-audience-page-of-dir",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 174,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 176,
  "name": "user launch \"Document\" Intelligence URL \"logi.document.intelligence.report.url_2\"",
  "keyword": "When "
});
formatter.step({
  "line": 177,
  "name": "verify \"Document\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 178,
  "name": "verify page title is \"Document Reporting and Analytics\"",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "verify the report title \"Automation Content Do Not Change\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "user click on \"Audience\" tab of \"DIR\"",
  "keyword": "When "
});
formatter.step({
  "line": 181,
  "name": "verify sort icon after column header and not clickable",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 13
    },
    {
      "val": "logi.document.intelligence.report.url_2",
      "offset": 41
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 12184498305,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "duration": 70477,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document Reporting and Analytics",
      "offset": 22
    }
  ],
  "location": "EliteContentGatewayReport.verify_page_title_is(String)"
});
formatter.result({
  "duration": 22576988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Content Do Not Change",
      "offset": 25
    }
  ],
  "location": "VideoIntelligenceReport.verify_the_report_title_is_displayed(String)"
});
formatter.result({
  "duration": 86685903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audience",
      "offset": 15
    },
    {
      "val": "DIR",
      "offset": 33
    }
  ],
  "location": "VideoIntelligenceReport.user_click_on_tab_of(String,String)"
});
formatter.result({
  "duration": 6405552370,
  "status": "passed"
});
formatter.match({
  "location": "DocumentIntelligenceReport.verify_sort_icon_after_column_header_and_not_clickable()"
});
formatter.result({
  "duration": 37199976,
  "status": "passed"
});
formatter.after({
  "duration": 53371,
  "status": "passed"
});
formatter.before({
  "duration": 42081,
  "status": "passed"
});
formatter.scenario({
  "line": 184,
  "name": "015-Verify data under Page Viewed column is hyperlinked and navigates to PEP at Audience page of VIR",
  "description": "",
  "id": "--logi-document-intelligence-report;015-verify-data-under-page-viewed-column-is-hyperlinked-and-navigates-to-pep-at-audience-page-of-vir",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 183,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 185,
  "name": "user launch \"Document\" Intelligence URL \"logi.document.intelligence.report.url_2\"",
  "keyword": "When "
});
formatter.step({
  "line": 186,
  "name": "verify \"Document\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 187,
  "name": "verify page title is \"Document Reporting and Analytics\"",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "verify the report title \"Automation Content Do Not Change\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "user click on \"Audience\" tab of \"DIR\"",
  "keyword": "When "
});
formatter.step({
  "line": 190,
  "name": "verify Data in first row under \"Pages Viewed\" column is clickable",
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "user clicks \"9\" under \"Pages Viewed\" column",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "verify user navigates to PEP report page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 13
    },
    {
      "val": "logi.document.intelligence.report.url_2",
      "offset": 41
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 10658905168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "duration": 94084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document Reporting and Analytics",
      "offset": 22
    }
  ],
  "location": "EliteContentGatewayReport.verify_page_title_is(String)"
});
formatter.result({
  "duration": 18678847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Content Do Not Change",
      "offset": 25
    }
  ],
  "location": "VideoIntelligenceReport.verify_the_report_title_is_displayed(String)"
});
formatter.result({
  "duration": 90340110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audience",
      "offset": 15
    },
    {
      "val": "DIR",
      "offset": 33
    }
  ],
  "location": "VideoIntelligenceReport.user_click_on_tab_of(String,String)"
});
formatter.result({
  "duration": 5917415458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pages Viewed",
      "offset": 32
    }
  ],
  "location": "DocumentIntelligenceReport.verify_Data_in_first_row_under_column_is_clickable(String)"
});
formatter.result({
  "duration": 41935632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 13
    },
    {
      "val": "Pages Viewed",
      "offset": 23
    }
  ],
  "location": "DocumentIntelligenceReport.user_clicks_under_column(String,String)"
});
formatter.result({
  "duration": 160615779,
  "status": "passed"
});
formatter.match({
  "location": "DocumentIntelligenceReport.verify_user_navigates_to_PEP_report_page()"
});
formatter.result({
  "duration": 29779278135,
  "status": "passed"
});
formatter.after({
  "duration": 46871,
  "status": "passed"
});
formatter.uri("documentInteractionReports.feature");
formatter.feature({
  "line": 2,
  "name": "1014-Logi - Document Interaction Reports",
  "description": "",
  "id": "1014-logi---document-interaction-reports",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DocumentInteractionReorts"
    },
    {
      "line": 1,
      "name": "@AutomationDone"
    }
  ]
});
formatter.before({
  "duration": 39002,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "001-Verify INTERACTIONS tab is displaying in Document Intelligence Report",
  "description": "",
  "id": "1014-logi---document-interaction-reports;001-verify-interactions-tab-is-displaying-in-document-intelligence-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user launch \"Document\" Intelligence URL \"logi.document.interaction.report.url_1\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify \"Document\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify INTERACTIONS main menu icon is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on \"Interactions\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "verify INTERACTIONS report table is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 13
    },
    {
      "val": "logi.document.interaction.report.url_1",
      "offset": 41
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 10811862198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "duration": 299699,
  "status": "passed"
});
formatter.match({
  "location": "DocumentInteractionReports.verify_INTERACTIONS_main_menu_icon_is_displayed()"
});
formatter.result({
  "duration": 63088023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Interactions",
      "offset": 16
    }
  ],
  "location": "DocumentIntelligenceReport.user_clicks_on_tab(String)"
});
formatter.result({
  "duration": 15292092665,
  "status": "passed"
});
formatter.match({
  "location": "DocumentInteractionReports.verify_INTERACTIONS_report_table_is_displayed()"
});
formatter.result({
  "duration": 56783052,
  "status": "passed"
});
formatter.after({
  "duration": 59187,
  "status": "passed"
});
formatter.before({
  "duration": 34897,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "002 - Verify Header and Graphical representaion in INTERACTIONS page in Document Intelligence Report",
  "description": "",
  "id": "1014-logi---document-interaction-reports;002---verify-header-and-graphical-representaion-in-interactions-page-in-document-intelligence-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user launch \"Document\" Intelligence URL \"logi.document.interaction.report.url_1\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "verify \"Document\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "verify INTERACTIONS main menu icon is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user clicks on \"Interactions\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "verify INTERACTIONS report table is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "verify title of data table is \"DOWNLOADS\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "verify \u0027Downloads\u0027 icon displayed",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "verify \u0027Export\u0027 icon is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "verify the title of graphical representation box is \"Automation_interactionDIR_test_donot_change\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "verify \"Unique Downloads\" text is displayed in graphical representation box",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verify \"Unique Downloads\" number is \"21\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "verify \"Total Downloads\" text is displayed in graphical representation box",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "verify \"Total Downloads\" number is \"28\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 13
    },
    {
      "val": "logi.document.interaction.report.url_1",
      "offset": 41
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 9609605697,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "duration": 76293,
  "status": "passed"
});
formatter.match({
  "location": "DocumentInteractionReports.verify_INTERACTIONS_main_menu_icon_is_displayed()"
});
formatter.result({
  "duration": 60244987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Interactions",
      "offset": 16
    }
  ],
  "location": "DocumentIntelligenceReport.user_clicks_on_tab(String)"
});
formatter.result({
  "duration": 7117815262,
  "status": "passed"
});
formatter.match({
  "location": "DocumentInteractionReports.verify_INTERACTIONS_report_table_is_displayed()"
});
formatter.result({
  "duration": 28360564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DOWNLOADS",
      "offset": 31
    }
  ],
  "location": "DocumentIntelligenceReport.verify_title_of_data_table_is(String)"
});
formatter.result({
  "duration": 21433958,
  "status": "passed"
});
formatter.match({
  "location": "DocumentInteractionReports.verify_Downloads_icon_displayed()"
});
formatter.result({
  "duration": 24557191,
  "status": "passed"
});
formatter.match({
  "location": "VideoIntelligenceReport.verify_Export_icon_is_displayed()"
});
formatter.result({
  "duration": 25658483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation_interactionDIR_test_donot_change",
      "offset": 53
    }
  ],
  "location": "DocumentInteractionReports.verify_the_title_of_graphical_representation_box_is(String)"
});
formatter.result({
  "duration": 46127313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unique Downloads",
      "offset": 8
    }
  ],
  "location": "DocumentInteractionReports.verify_text_is_displayed_in_graphical_representation_box(String)"
});
formatter.result({
  "duration": 695833499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unique Downloads",
      "offset": 8
    },
    {
      "val": "21",
      "offset": 37
    }
  ],
  "location": "DocumentInteractionReports.verify_number_is(String,String)"
});
formatter.result({
  "duration": 5121646689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Downloads",
      "offset": 8
    }
  ],
  "location": "DocumentInteractionReports.verify_text_is_displayed_in_graphical_representation_box(String)"
});
formatter.result({
  "duration": 28385197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Downloads",
      "offset": 8
    },
    {
      "val": "28",
      "offset": 36
    }
  ],
  "location": "DocumentInteractionReports.verify_number_is(String,String)"
});
formatter.result({
  "duration": 5097964989,
  "status": "passed"
});
formatter.after({
  "duration": 38318,
  "status": "passed"
});
formatter.before({
  "duration": 39686,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "003 - Verify Columns of Table in INTERACTIONS page in Document Intelligence Report",
  "description": "",
  "id": "1014-logi---document-interaction-reports;003---verify-columns-of-table-in-interactions-page-in-document-intelligence-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "user launch \"Document\" Intelligence URL \"logi.document.interaction.report.url_1\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "verify \"Document\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "verify INTERACTIONS main menu icon is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user clicks on \"Interactions\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "verify INTERACTIONS report table is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "verify following columns present in interactions table",
  "rows": [
    {
      "cells": [
        "First Name"
      ],
      "line": 36
    },
    {
      "cells": [
        "Last Name"
      ],
      "line": 37
    },
    {
      "cells": [
        "Company"
      ],
      "line": 38
    },
    {
      "cells": [
        "# of Downloads"
      ],
      "line": 39
    },
    {
      "cells": [
        "Email"
      ],
      "line": 40
    },
    {
      "cells": [
        "Date/Time"
      ],
      "line": 41
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 13
    },
    {
      "val": "logi.document.interaction.report.url_1",
      "offset": 41
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 10297514277,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "duration": 58845,
  "status": "passed"
});
formatter.match({
  "location": "DocumentInteractionReports.verify_INTERACTIONS_main_menu_icon_is_displayed()"
});
formatter.result({
  "duration": 58900104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Interactions",
      "offset": 16
    }
  ],
  "location": "DocumentIntelligenceReport.user_clicks_on_tab(String)"
});
formatter.result({
  "duration": 7434885929,
  "status": "passed"
});
formatter.match({
  "location": "DocumentInteractionReports.verify_INTERACTIONS_report_table_is_displayed()"
});
formatter.result({
  "duration": 26378308,
  "status": "passed"
});
formatter.match({
  "location": "DocumentInteractionReports.verify_following_columns_present_in_interactions_table(DataTable)"
});
formatter.result({
  "duration": 5210215291,
  "status": "passed"
});
formatter.after({
  "duration": 88951,
  "status": "passed"
});
formatter.before({
  "duration": 37634,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "004 - Verify Data is displayed under Columns in INTERACTIONS page in Document Intelligence Report",
  "description": "",
  "id": "1014-logi---document-interaction-reports;004---verify-data-is-displayed-under-columns-in-interactions-page-in-document-intelligence-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "user launch \"Document\" Intelligence URL \"logi.document.interaction.report.url_1\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "verify \"Document\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "verify INTERACTIONS main menu icon is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user clicks on \"Interactions\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "verify INTERACTIONS report table is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "verify following data present in row 1 in interactions table",
  "rows": [
    {
      "cells": [
        "Test orion"
      ],
      "line": 51
    },
    {
      "cells": [
        "last name"
      ],
      "line": 52
    },
    {
      "cells": [
        "Company 12"
      ],
      "line": 53
    },
    {
      "cells": [
        "5"
      ],
      "line": 54
    },
    {
      "cells": [
        "qalastname12@innbfw.com"
      ],
      "line": 55
    },
    {
      "cells": [
        "09/07/2017 02:45 AM PDT"
      ],
      "line": 56
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 13
    },
    {
      "val": "logi.document.interaction.report.url_1",
      "offset": 41
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 10594502712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "duration": 59529,
  "status": "passed"
});
formatter.match({
  "location": "DocumentInteractionReports.verify_INTERACTIONS_main_menu_icon_is_displayed()"
});
formatter.result({
  "duration": 69266066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Interactions",
      "offset": 16
    }
  ],
  "location": "DocumentIntelligenceReport.user_clicks_on_tab(String)"
});
formatter.result({
  "duration": 8153777782,
  "status": "passed"
});
formatter.match({
  "location": "DocumentInteractionReports.verify_INTERACTIONS_report_table_is_displayed()"
});
formatter.result({
  "duration": 25939365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 37
    }
  ],
  "location": "DocumentInteractionReports.verify_following_data_present_in_row_in_interactions_table(int,DataTable)"
});
formatter.result({
  "duration": 5203605489,
  "status": "passed"
});
formatter.after({
  "duration": 39686,
  "status": "passed"
});
formatter.before({
  "duration": 32843,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 69,
      "value": "#When user click on \u0027Next\u0027 page link"
    },
    {
      "line": 70,
      "value": "#Then verify page loading image is displayed"
    },
    {
      "line": 71,
      "value": "#And verify \"Page 2 of 2\" page info is displaying"
    }
  ],
  "line": 74,
  "name": "006- Verify values for Unique and Total Downloads if no download is there for any content at DIR",
  "description": "",
  "id": "1014-logi---document-interaction-reports;006--verify-values-for-unique-and-total-downloads-if-no-download-is-there-for-any-content-at-dir",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 73,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "user launch \"Document\" Intelligence URL \"logi.document.interaction.report.url_2\"",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "verify \"Document\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "verify INTERACTIONS main menu icon is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "user clicks on \"Interactions\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "verify INTERACTIONS report table is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "verify \"Unique Downloads\" number is \"0\"",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "verify \"Total Downloads\" number is \"0\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 13
    },
    {
      "val": "logi.document.interaction.report.url_2",
      "offset": 41
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 11544255220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "duration": 47213,
  "status": "passed"
});
formatter.match({
  "location": "DocumentInteractionReports.verify_INTERACTIONS_main_menu_icon_is_displayed()"
});
formatter.result({
  "duration": 64618678,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Interactions",
      "offset": 16
    }
  ],
  "location": "DocumentIntelligenceReport.user_clicks_on_tab(String)"
});
formatter.result({
  "duration": 8038426826,
  "status": "passed"
});
formatter.match({
  "location": "DocumentInteractionReports.verify_INTERACTIONS_report_table_is_displayed()"
});
formatter.result({
  "duration": 36574919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unique Downloads",
      "offset": 8
    },
    {
      "val": "0",
      "offset": 37
    }
  ],
  "location": "DocumentInteractionReports.verify_number_is(String,String)"
});
formatter.result({
  "duration": 5124544122,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Downloads",
      "offset": 8
    },
    {
      "val": "0",
      "offset": 36
    }
  ],
  "location": "DocumentInteractionReports.verify_number_is(String,String)"
});
formatter.result({
  "duration": 5096161320,
  "status": "passed"
});
formatter.after({
  "duration": 42423,
  "status": "passed"
});
formatter.before({
  "duration": 59529,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "007-Verify message No data to show for 0 downloads of any content at DIR",
  "description": "",
  "id": "1014-logi---document-interaction-reports;007-verify-message-no-data-to-show-for-0-downloads-of-any-content-at-dir",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 83,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 85,
  "name": "user launch \"Document\" Intelligence URL \"logi.document.interaction.report.url_2\"",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "verify \"Document\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "verify INTERACTIONS main menu icon is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "user clicks on \"Interactions\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "verify INTERACTIONS report table is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "verify message \"No data to show\" within data table",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 13
    },
    {
      "val": "logi.document.interaction.report.url_2",
      "offset": 41
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 12824228891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "duration": 47897,
  "status": "passed"
});
formatter.match({
  "location": "DocumentInteractionReports.verify_INTERACTIONS_main_menu_icon_is_displayed()"
});
formatter.result({
  "duration": 61900859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Interactions",
      "offset": 16
    }
  ],
  "location": "DocumentIntelligenceReport.user_clicks_on_tab(String)"
});
formatter.result({
  "duration": 8123754162,
  "status": "passed"
});
formatter.match({
  "location": "DocumentInteractionReports.verify_INTERACTIONS_report_table_is_displayed()"
});
formatter.result({
  "duration": 33695618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No data to show",
      "offset": 16
    }
  ],
  "location": "DocumentInteractionReports.verify_message_within_data_table(String)"
});
formatter.result({
  "duration": 28648973,
  "status": "passed"
});
formatter.after({
  "duration": 42081,
  "status": "passed"
});
formatter.uri("eliteCGSummaryWidget.feature");
formatter.feature({
  "line": 2,
  "name": "1028-Logi- Elite CG Summary Widget",
  "description": "",
  "id": "1028-logi--elite-cg-summary-widget",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CGSummaryWighet"
    }
  ]
});
formatter.before({
  "duration": 33186,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user launch \u0027Elite Cotent Gateway\u0027 report url \"https://wccqa.on24.com/webcast/portalsummaryreports\" with username \"testclientforelite1\" and password \"Password1234\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "verify user is on \u0027Elite Content Gateway\u0027 reports",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "remove filter if any present",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://wccqa.on24.com/webcast/portalsummaryreports",
      "offset": 47
    },
    {
      "val": "testclientforelite1",
      "offset": 115
    },
    {
      "val": "Password1234",
      "offset": 150
    }
  ],
  "location": "EliteCGSummaryWidget.user_launch_Elite_Cotent_Gateway_report_url_with_username_and_password(String,String,String)"
});
formatter.result({
  "duration": 15678266549,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"login\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\n*** Element info: {Using\u003did, value\u003dlogin}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:457)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat demo.base.common.Common.findElement(Common.java)\r\n\tat demo.base.common.Common.type(Common.java)\r\n\tat demo.test.testSteps.EliteCGSummaryWidget.user_launch_Elite_Cotent_Gateway_report_url_with_username_and_password(EliteCGSummaryWidget.java)\r\n\tat ✽.Given user launch \u0027Elite Cotent Gateway\u0027 report url \"https://wccqa.on24.com/webcast/portalsummaryreports\" with username \"testclientforelite1\" and password \"Password1234\"(eliteCGSummaryWidget.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EliteCGSummaryWidget.verify_user_is_on_Elite_Content_Gateway_reports()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EliteCGSummaryWidget.remove_filter_if_any_present()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "001-Verify widgets present on Elite Content Gateway reports",
  "description": "",
  "id": "1028-logi--elite-cg-summary-widget;001-verify-widgets-present-on-elite-content-gateway-reports",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "verify user is on \u0027Elite Content Gateway\u0027 reports",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "verify \u0027Summary\u0027 widget is present on \u0027Elite Content Gateway\u0027 reports",
  "keyword": "And "
});
formatter.match({
  "location": "EliteCGSummaryWidget.verify_user_is_on_Elite_Content_Gateway_reports()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EliteCGSummaryWidget.verify_Summary_widget_is_present_on_Elite_Content_Gateway_reports()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded10.png");
formatter.after({
  "duration": 7736936747,
  "status": "passed"
});
formatter.uri("eliteContentGatewayReport.feature");
formatter.feature({
  "line": 1,
  "name": "- LOGI-Content Gateway Report Page",
  "description": "",
  "id": "--logi-content-gateway-report-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 63635,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "001-Verify the Content Gateway link in the Elite Report page",
  "description": "",
  "id": "--logi-content-gateway-report-page;001-verify-the-content-gateway-link-in-the-elite-report-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "wcc elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters login user name \"testclientforelite1\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters login password \"Password1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user opens analytics page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user open \"CONTENT GATEWAY\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "verify user is on \"CONTENT GATEWAY\" report",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "verify page title is \"Content Gateway Reports | Webcast Elite\"",
  "keyword": "And "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.wcc_elite_login_page()"
});
formatter.result({
  "duration": 2578059291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testclientforelite1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 117123149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password1234",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 122192716,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 10304274269,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_opens_analytics_page()"
});
formatter.result({
  "duration": 3542693775,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 21058307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CONTENT GATEWAY",
      "offset": 11
    }
  ],
  "location": "EliteContentGatewayReport.user_open_tab(String)"
});
formatter.result({
  "duration": 3203278079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CONTENT GATEWAY",
      "offset": 19
    }
  ],
  "location": "EliteContentGatewayReport.verify_user_is_on_report(String)"
});
formatter.result({
  "duration": 14238100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content Gateway Reports | Webcast Elite",
      "offset": 22
    }
  ],
  "location": "EliteContentGatewayReport.verify_page_title_is(String)"
});
formatter.result({
  "duration": 5602594,
  "status": "passed"
});
formatter.after({
  "duration": 61924,
  "status": "passed"
});
formatter.before({
  "duration": 42424,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "002-Verify Filter bar in Content Gateway Report page",
  "description": "",
  "id": "--logi-content-gateway-report-page;002-verify-filter-bar-in-content-gateway-report-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "wcc elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user enters login user name \"testclientforelite1\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters login password \"Password1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user opens analytics page",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user open \"CONTENT GATEWAY\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "verify user is on \"CONTENT GATEWAY\" report",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "verify \u0027Filters\u0027 bar is present on page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "verify \"Filters:\" label is displaying in filteres bar",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "verify \"Choose Content Gateway\" label is displaying in filteres bar",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "verify \"Select Date\" label is displaying in filteres bar",
  "keyword": "And "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.wcc_elite_login_page()"
});
formatter.result({
  "duration": 1742286171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testclientforelite1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 1421074798,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password1234",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 94452077,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 6280878926,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_opens_analytics_page()"
});
formatter.result({
  "duration": 3593037060,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 12321874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CONTENT GATEWAY",
      "offset": 11
    }
  ],
  "location": "EliteContentGatewayReport.user_open_tab(String)"
});
formatter.result({
  "duration": 1961567015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CONTENT GATEWAY",
      "offset": 19
    }
  ],
  "location": "EliteContentGatewayReport.verify_user_is_on_report(String)"
});
formatter.result({
  "duration": 7562270,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_Filters_bar_is_present_on_page()"
});
formatter.result({
  "duration": 60032418475,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#WCCFilters\u003ediv\u003ediv.filterText\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\n*** Element info: {Using\u003dcss selector, value\u003d#WCCFilters\u003ediv\u003ediv.filterText}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:505)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat demo.base.common.Common.findElement(Common.java)\r\n\tat demo.base.common.Common.getText(Common.java)\r\n\tat demo.test.testSteps.EliteContentGatewayReport.verify_Filters_bar_is_present_on_page(EliteContentGatewayReport.java)\r\n\tat ✽.Then verify \u0027Filters\u0027 bar is present on page(eliteContentGatewayReport.feature:25)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Filters:",
      "offset": 8
    }
  ],
  "location": "EliteContentGatewayReport.verify_label_is_displaying_in_filteres_bar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Choose Content Gateway",
      "offset": 8
    }
  ],
  "location": "EliteContentGatewayReport.verify_label_is_displaying_in_filteres_bar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Select Date",
      "offset": 8
    }
  ],
  "location": "EliteContentGatewayReport.verify_label_is_displaying_in_filteres_bar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded11.png");
formatter.after({
  "duration": 7245042307,
  "status": "passed"
});
formatter.before({
  "duration": 138559,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "003 - Verify Filters options are available under Filter dropdown in Content Gateway Report page",
  "description": "",
  "id": "--logi-content-gateway-report-page;003---verify-filters-options-are-available-under-filter-dropdown-in-content-gateway-report-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "wcc elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "user enters login user name \"testclientforelite1\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user enters login password \"Password1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user opens analytics page",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user open \"CONTENT GATEWAY\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "verify user is on \"CONTENT GATEWAY\" report",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "verify \"New Content Gateway 001\" option present under \u0027Choose Content Gateway\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.wcc_elite_login_page()"
});
formatter.result({
  "duration": 3483413230,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testclientforelite1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 1436342002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password1234",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 100975322,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 4117789603,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_opens_analytics_page()"
});
formatter.result({
  "duration": 55591782,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat demo.base.common.Common.click(Common.java)\r\n\tat demo.test.testSteps.EliteContentGatewayReport.user_opens_analytics_page(EliteContentGatewayReport.java)\r\n\tat ✽.When user opens analytics page(eliteContentGatewayReport.feature:36)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CONTENT GATEWAY",
      "offset": 11
    }
  ],
  "location": "EliteContentGatewayReport.user_open_tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CONTENT GATEWAY",
      "offset": 19
    }
  ],
  "location": "EliteContentGatewayReport.verify_user_is_on_report(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "New Content Gateway 001",
      "offset": 8
    }
  ],
  "location": "EliteContentGatewayReport.verify_option_present_under_Choose_Content_Gateway(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded12.png");
formatter.after({
  "duration": 4918823633,
  "status": "passed"
});
formatter.before({
  "duration": 62951,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "004 - Verify Select Date Filters Filters bar in Content Gateway Report page",
  "description": "",
  "id": "--logi-content-gateway-report-page;004---verify-select-date-filters-filters-bar-in-content-gateway-report-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "wcc elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "user enters login user name \"testclientforelite1\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "user enters login password \"Password1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user opens analytics page",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "user open \"CONTENT GATEWAY\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "verify user is on \"CONTENT GATEWAY\" report",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 52,
      "value": "#When user clicks on \"Select Date\" arrow icon on CG report page"
    }
  ],
  "line": 53,
  "name": "user open \u0027Select Date\u0027 dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "verify \"View All\" option present under \u0027Select Date\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "verify \"View Last 90 Days\" option present under \u0027Select Date\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "verify \"View Last 30 Days\" option present under \u0027Select Date\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "verify \u0027From Date\u0027 textbox is present under \u0027Select Date\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "verify calender icon present next to \u0027From Date\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "verify \u0027To Date\u0027 textbox is present under \u0027Select Date\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "verify calender icon present next to \u0027To Date\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "verify \u0027Go\u0027 button is present",
  "keyword": "And "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.wcc_elite_login_page()"
});
formatter.result({
  "duration": 3286296431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testclientforelite1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 147291486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password1234",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 93382603,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 6265008560,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_opens_analytics_page()"
});
formatter.result({
  "duration": 4980212335,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 17886834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CONTENT GATEWAY",
      "offset": 11
    }
  ],
  "location": "EliteContentGatewayReport.user_open_tab(String)"
});
formatter.result({
  "duration": 2710813320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CONTENT GATEWAY",
      "offset": 19
    }
  ],
  "location": "EliteContentGatewayReport.verify_user_is_on_report(String)"
});
formatter.result({
  "duration": 6349789,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_open_Select_Date_dropdown()"
});
formatter.result({
  "duration": 107748316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "View All",
      "offset": 8
    }
  ],
  "location": "EliteContentGatewayReport.verify_option_present_under_Select_Date(String)"
});
formatter.result({
  "duration": 23678279,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat demo.test.testSteps.EliteContentGatewayReport.verify_option_present_under_Select_Date(EliteContentGatewayReport.java)\r\n\tat ✽.And verify \"View All\" option present under \u0027Select Date\u0027(eliteContentGatewayReport.feature:54)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "View Last 90 Days",
      "offset": 8
    }
  ],
  "location": "EliteContentGatewayReport.verify_option_present_under_Select_Date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "View Last 30 Days",
      "offset": 8
    }
  ],
  "location": "EliteContentGatewayReport.verify_option_present_under_Select_Date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_From_Date_textbox_is_present_under_Select_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_calender_icon_present_next_to_From_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_To_Date_textbox_is_present_under_Select_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_calender_icon_present_next_to_To_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_Go_button_is_present()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded13.png");
formatter.after({
  "duration": 8116381428,
  "status": "passed"
});
formatter.before({
  "duration": 78688,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "005 - Verify default filter when user first time open in Content Gateway Report page",
  "description": "",
  "id": "--logi-content-gateway-report-page;005---verify-default-filter-when-user-first-time-open-in-content-gateway-report-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 63,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "wcc elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "user enters login user name \"testclientforelite1\"",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "user enters login password \"Password1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "user opens analytics page",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "user open \"CONTENT GATEWAY\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "verify user is on \"CONTENT GATEWAY\" report",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "verify the default date filter selected is \"Last 90 Days\"",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "user click on cross button to remove the filter",
  "keyword": "When "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.wcc_elite_login_page()"
});
formatter.result({
  "duration": 3583425478,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testclientforelite1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 1432830117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password1234",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 89389011,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 8932444887,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_opens_analytics_page()"
});
formatter.result({
  "duration": 3754508486,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 13018435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CONTENT GATEWAY",
      "offset": 11
    }
  ],
  "location": "EliteContentGatewayReport.user_open_tab(String)"
});
formatter.result({
  "duration": 2063330245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CONTENT GATEWAY",
      "offset": 19
    }
  ],
  "location": "EliteContentGatewayReport.verify_user_is_on_report(String)"
});
formatter.result({
  "duration": 8907152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last 90 Days",
      "offset": 44
    }
  ],
  "location": "EliteContentGatewayReport.verify_the_default_date_filter_selected_is(String)"
});
formatter.result({
  "duration": 60037233162,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#WCCFilters\u003ediv:nth-child(2)\u003ediv:nth-child(2)\u003ediv\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\n*** Element info: {Using\u003dcss selector, value\u003d#WCCFilters\u003ediv:nth-child(2)\u003ediv:nth-child(2)\u003ediv}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:505)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat demo.base.common.Common.findElement(Common.java)\r\n\tat demo.base.common.Common.isDisplayed(Common.java)\r\n\tat demo.test.testSteps.EliteContentGatewayReport.verify_the_default_date_filter_selected_is(EliteContentGatewayReport.java)\r\n\tat ✽.And verify the default date filter selected is \"Last 90 Days\"(eliteContentGatewayReport.feature:73)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_click_on_cross_button_to_remove_the_filter()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded14.png");
formatter.after({
  "duration": 7698622479,
  "status": "passed"
});
formatter.before({
  "duration": 81425,
  "status": "passed"
});
formatter.scenario({
  "line": 94,
  "name": "008 - Verify Export to Excel icon above data table in Content Gateway Report page",
  "description": "",
  "id": "--logi-content-gateway-report-page;008---verify-export-to-excel-icon-above-data-table-in-content-gateway-report-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 93,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 95,
  "name": "wcc elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "user enters login user name \"testclientforelite1\"",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "user enters login password \"Password1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "user opens analytics page",
  "keyword": "When "
});
formatter.step({
  "line": 100,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "user open \"CONTENT GATEWAY\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 102,
  "name": "verify user is on \"CONTENT GATEWAY\" report",
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "verify Export to excel icon is present on Content Gateway Page",
  "keyword": "Then "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.wcc_elite_login_page()"
});
formatter.result({
  "duration": 2000138902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testclientforelite1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 1401887557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password1234",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 92206387,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 3927334265,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_opens_analytics_page()"
});
formatter.result({
  "duration": 3147016078,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 10188400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CONTENT GATEWAY",
      "offset": 11
    }
  ],
  "location": "EliteContentGatewayReport.user_open_tab(String)"
});
formatter.result({
  "duration": 2934079205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CONTENT GATEWAY",
      "offset": 19
    }
  ],
  "location": "EliteContentGatewayReport.verify_user_is_on_report(String)"
});
formatter.result({
  "duration": 5523222,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_Export_to_excel_icon_is_present_on_Content_Gateway_Page()"
});
formatter.result({
  "duration": 10716917123,
  "status": "passed"
});
formatter.after({
  "duration": 41397,
  "status": "passed"
});
formatter.uri("eliteDocumentReports.feature");
formatter.feature({
  "line": 2,
  "name": "- Logi-Elite Document Reports",
  "description": "",
  "id": "--logi-elite-document-reports",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@EliteDocumentReports"
    }
  ]
});
formatter.before({
  "duration": 50977,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "001 - Verify Document Tab is present under Analytics Menu",
  "description": "",
  "id": "--logi-elite-document-reports;001---verify-document-tab-is-present-under-analytics-menu",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "wcc elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters login user name \"testclientforelite1\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters login password \"Password1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify user on my webcasts page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify Analytics icon is present",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user opens analytics page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "verify \"DOCUMENT\" tab is present",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user open \"DOCUMENT\" tab",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#Then verify user is on \"DOCUMENT\" tab"
    }
  ],
  "line": 17,
  "name": "verify page title is \"Document | Webcast Elite\"",
  "keyword": "And "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.wcc_elite_login_page()"
});
formatter.result({
  "duration": 3032246388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testclientforelite1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 1156004313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password1234",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 91355529,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 5936074120,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_user_on_my_webcasts_page()"
});
formatter.result({
  "duration": 25857940,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_Analytics_icon_is_present()"
});
formatter.result({
  "duration": 44769772,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_opens_analytics_page()"
});
formatter.result({
  "duration": 3230385449,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 16611745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DOCUMENT",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_tab_is_present(String)"
});
formatter.result({
  "duration": 59781069,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DOCUMENT",
      "offset": 11
    }
  ],
  "location": "EliteContentGatewayReport.user_open_tab(String)"
});
formatter.result({
  "duration": 3781411610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document | Webcast Elite",
      "offset": 22
    }
  ],
  "location": "EliteContentGatewayReport.verify_page_title_is(String)"
});
formatter.result({
  "duration": 11202108,
  "status": "passed"
});
formatter.after({
  "duration": 57819,
  "status": "passed"
});
formatter.uri("eliteVideoReports.feature");
formatter.feature({
  "line": 2,
  "name": "- LOGI-Elite Video Reports",
  "description": "",
  "id": "--logi-elite-video-reports",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@EliteVideoReports"
    }
  ]
});
formatter.before({
  "duration": 56108,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "001-Verify Video Tab is present under Analytics Menu",
  "description": "",
  "id": "--logi-elite-video-reports;001-verify-video-tab-is-present-under-analytics-menu",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "wcc elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters login user name \"testclientforelite1\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters login password \"Password1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify user on my webcasts page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify Analytics icon is present",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user opens analytics page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "verify \"VIDEO\" tab is present",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user open \"VIDEO\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "verify user is on \"VIDEO\" tab",
  "keyword": "Then "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.wcc_elite_login_page()"
});
formatter.result({
  "duration": 54799090092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testclientforelite1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 162044482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password1234",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 98153155,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 4129597610,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_user_on_my_webcasts_page()"
});
formatter.result({
  "duration": 31612436,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_Analytics_icon_is_present()"
});
formatter.result({
  "duration": 54722792,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_opens_analytics_page()"
});
formatter.result({
  "duration": 3441337328,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 13454299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_tab_is_present(String)"
});
formatter.result({
  "duration": 34067847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 11
    }
  ],
  "location": "EliteContentGatewayReport.user_open_tab(String)"
});
formatter.result({
  "duration": 6133188525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 19
    }
  ],
  "location": "EliteVideoReports.verify_user_is_on_tab(String)"
});
formatter.result({
  "duration": 9157927,
  "status": "passed"
});
formatter.after({
  "duration": 60556,
  "status": "passed"
});
formatter.before({
  "duration": 52002,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "002-Verify Video Report is loading and displaying all elements",
  "description": "",
  "id": "--logi-elite-video-reports;002-verify-video-report-is-loading-and-displaying-all-elements",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "wcc elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user enters login user name \"testclientforelite1\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enters login password \"Password1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verify user on my webcasts page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "verify Analytics icon is present",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user opens analytics page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "verify \"VIDEO\" tab is present",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user open \"VIDEO\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "verify user is on \"VIDEO\" tab",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "verify Export to excel icon is present",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "verify Data info is present on page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "verify Video Data table is present",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "verify \"Video Title\" column is present",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "verify \"Total Views\" column is present",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "verify \"Unique Views\" column is present",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "verify \"Avg Viewing Duration\" column is present",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "verify video data is present under table",
  "keyword": "And "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.wcc_elite_login_page()"
});
formatter.result({
  "duration": 1472488926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testclientforelite1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 1421812755,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password1234",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 95234853,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 5130434440,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_user_on_my_webcasts_page()"
});
formatter.result({
  "duration": 16259701,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_Analytics_icon_is_present()"
});
formatter.result({
  "duration": 38509620,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_opens_analytics_page()"
});
formatter.result({
  "duration": 3565714837,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 26451864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_tab_is_present(String)"
});
formatter.result({
  "duration": 38081283,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 11
    }
  ],
  "location": "EliteContentGatewayReport.user_open_tab(String)"
});
formatter.result({
  "duration": 3446476346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 19
    }
  ],
  "location": "EliteVideoReports.verify_user_is_on_tab(String)"
});
formatter.result({
  "duration": 21260844,
  "status": "passed"
});
formatter.match({
  "location": "EliteVideoReports.verify_Export_to_excel_icon_is_present()"
});
formatter.result({
  "duration": 2998516216,
  "status": "passed"
});
formatter.match({
  "location": "EliteVideoReports.verify_Data_info_is_present_on_page()"
});
formatter.result({
  "duration": 26710167,
  "status": "passed"
});
formatter.match({
  "location": "EliteVideoReports.verify_Video_Data_table_is_present()"
});
formatter.result({
  "duration": 33678512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Video Title",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_column_is_present(String)"
});
formatter.result({
  "duration": 24257834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Views",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_column_is_present(String)"
});
formatter.result({
  "duration": 35507840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unique Views",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_column_is_present(String)"
});
formatter.result({
  "duration": 28118683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Avg Viewing Duration",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_column_is_present(String)"
});
formatter.result({
  "duration": 31551880,
  "status": "passed"
});
formatter.match({
  "location": "EliteVideoReports.verify_video_data_is_present_under_table()"
});
formatter.result({
  "duration": 16279544,
  "status": "passed"
});
formatter.after({
  "duration": 37633,
  "status": "passed"
});
formatter.before({
  "duration": 33528,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "003-Verify Showing 1 to 14 of 14 Videos message at Elite Video report page",
  "description": "",
  "id": "--logi-elite-video-reports;003-verify-showing-1-to-14-of-14-videos-message-at-elite-video-report-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "wcc elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "user enters login user name \"testclientforelite1\"",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "user enters login password \"Password1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "verify user on my webcasts page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "verify Analytics icon is present",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user opens analytics page",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "verify \"VIDEO\" tab is present",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user open \"VIDEO\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "verify user is on \"VIDEO\" tab",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "verify \"Showing 1 to 14 of 14 Videos\" message display",
  "keyword": "And "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.wcc_elite_login_page()"
});
formatter.result({
  "duration": 1431881413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testclientforelite1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 1407079261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password1234",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 89631576,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 5229916399,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_user_on_my_webcasts_page()"
});
formatter.result({
  "duration": 17987418,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_Analytics_icon_is_present()"
});
formatter.result({
  "duration": 38625599,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_opens_analytics_page()"
});
formatter.result({
  "duration": 3131635974,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 19135922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_tab_is_present(String)"
});
formatter.result({
  "duration": 30143021,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 11
    }
  ],
  "location": "EliteContentGatewayReport.user_open_tab(String)"
});
formatter.result({
  "duration": 2789152468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 19
    }
  ],
  "location": "EliteVideoReports.verify_user_is_on_tab(String)"
});
formatter.result({
  "duration": 15186121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Showing 1 to 14 of 14 Videos",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_message_display(String)"
});
formatter.result({
  "duration": 65003,
  "status": "passed"
});
formatter.after({
  "duration": 61240,
  "status": "passed"
});
formatter.before({
  "duration": 52687,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "004-Verify Prev and Next pagination links at Elite Video report page",
  "description": "",
  "id": "--logi-elite-video-reports;004-verify-prev-and-next-pagination-links-at-elite-video-report-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 55,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "wcc elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "user enters login user name \"testclientforelite1\"",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "user enters login password \"Password1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "verify user on my webcasts page",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "verify Analytics icon is present",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "user opens analytics page",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "verify \"VIDEO\" tab is present",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "user open \"VIDEO\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "verify user is on \"VIDEO\" tab",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "verify \"Prev\" link is present",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "verify \"Next\" link is present",
  "keyword": "And "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.wcc_elite_login_page()"
});
formatter.result({
  "duration": 4777881935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testclientforelite1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 1121774985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password1234",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 93152355,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 3390358038,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_user_on_my_webcasts_page()"
});
formatter.result({
  "duration": 20301190,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_Analytics_icon_is_present()"
});
formatter.result({
  "duration": 40563722,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_opens_analytics_page()"
});
formatter.result({
  "duration": 3649365089,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 16892627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_tab_is_present(String)"
});
formatter.result({
  "duration": 38401509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 11
    }
  ],
  "location": "EliteContentGatewayReport.user_open_tab(String)"
});
formatter.result({
  "duration": 2315655650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 19
    }
  ],
  "location": "EliteVideoReports.verify_user_is_on_tab(String)"
});
formatter.result({
  "duration": 23766205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prev",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_link_is_present(String)"
});
formatter.result({
  "duration": 61582,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_link_is_present(String)"
});
formatter.result({
  "duration": 44134,
  "status": "passed"
});
formatter.after({
  "duration": 57476,
  "status": "passed"
});
formatter.before({
  "duration": 51318,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "005-Verify page value if there are max 20 records at Elite Video report page",
  "description": "",
  "id": "--logi-elite-video-reports;005-verify-page-value-if-there-are-max-20-records-at-elite-video-report-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 71,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "wcc elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "user enters login user name \"testclientforelite1\"",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "user enters login password \"Password1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "verify user on my webcasts page",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "verify Analytics icon is present",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "user opens analytics page",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "verify \"VIDEO\" tab is present",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "user open \"VIDEO\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "verify user is on \"VIDEO\" tab",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "verify page nummber is 1",
  "keyword": "And "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.wcc_elite_login_page()"
});
formatter.result({
  "duration": 1463491453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testclientforelite1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 800475345,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password1234",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 90327452,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2027509706,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_user_on_my_webcasts_page()"
});
formatter.result({
  "duration": 30494380,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_Analytics_icon_is_present()"
});
formatter.result({
  "duration": 44025657,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_opens_analytics_page()"
});
formatter.result({
  "duration": 4018623423,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 11427909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_tab_is_present(String)"
});
formatter.result({
  "duration": 21862979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 11
    }
  ],
  "location": "EliteContentGatewayReport.user_open_tab(String)"
});
formatter.result({
  "duration": 3697536926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 19
    }
  ],
  "location": "EliteVideoReports.verify_user_is_on_tab(String)"
});
formatter.result({
  "duration": 10488441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    }
  ],
  "location": "EliteVideoReports.verify_page_nummber_is(int)"
});
formatter.result({
  "duration": 70819,
  "status": "passed"
});
formatter.after({
  "duration": 39687,
  "status": "passed"
});
formatter.before({
  "duration": 35580,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "006-Verify Prev and Next pagination links are not clickable if data table has only 1 page at Elite Video report page",
  "description": "",
  "id": "--logi-elite-video-reports;006-verify-prev-and-next-pagination-links-are-not-clickable-if-data-table-has-only-1-page-at-elite-video-report-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 86,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 88,
  "name": "wcc elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 89,
  "name": "user enters login user name \"testclientforelite1\"",
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "user enters login password \"Password1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "verify user on my webcasts page",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "verify Analytics icon is present",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "user opens analytics page",
  "keyword": "When "
});
formatter.step({
  "line": 95,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "verify \"VIDEO\" tab is present",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "user open \"VIDEO\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "verify user is on \"VIDEO\" tab",
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "verify \"Prev\" link is present",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "verify \"Next\" link is present",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "verify \"Prev\" link is not clickable",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "verify \"Next\" link is not clickable",
  "keyword": "And "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.wcc_elite_login_page()"
});
formatter.result({
  "duration": 4054881194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testclientforelite1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 1137846860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password1234",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 93209148,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 4116778632,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_user_on_my_webcasts_page()"
});
formatter.result({
  "duration": 24080957,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_Analytics_icon_is_present()"
});
formatter.result({
  "duration": 63050047,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_opens_analytics_page()"
});
formatter.result({
  "duration": 1987804027,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 18938860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_tab_is_present(String)"
});
formatter.result({
  "duration": 30406798,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 11
    }
  ],
  "location": "EliteContentGatewayReport.user_open_tab(String)"
});
formatter.result({
  "duration": 3434346061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 19
    }
  ],
  "location": "EliteVideoReports.verify_user_is_on_tab(String)"
});
formatter.result({
  "duration": 18100661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prev",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_link_is_present(String)"
});
formatter.result({
  "duration": 52344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_link_is_present(String)"
});
formatter.result({
  "duration": 39686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prev",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_link_is_not_clickable(String)"
});
formatter.result({
  "duration": 40029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_link_is_not_clickable(String)"
});
formatter.result({
  "duration": 34896,
  "status": "passed"
});
formatter.after({
  "duration": 51319,
  "status": "passed"
});
formatter.before({
  "duration": 45160,
  "status": "passed"
});
formatter.scenario({
  "line": 106,
  "name": "007-Verify data under columns of video data table at Elite Video report page",
  "description": "",
  "id": "--logi-elite-video-reports;007-verify-data-under-columns-of-video-data-table-at-elite-video-report-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 105,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 107,
  "name": "wcc elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 108,
  "name": "user enters login user name \"testclientforelite1\"",
  "keyword": "When "
});
formatter.step({
  "line": 109,
  "name": "user enters login password \"Password1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "verify user on my webcasts page",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "verify Analytics icon is present",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "user opens analytics page",
  "keyword": "When "
});
formatter.step({
  "line": 114,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "verify \"VIDEO\" tab is present",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "user open \"VIDEO\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "verify user is on \"VIDEO\" tab",
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "verify values inb first row under columns as below",
  "rows": [
    {
      "cells": [
        "Video Title",
        "\"Automation for AEP Registration Source graph portal registration\""
      ],
      "line": 119
    },
    {
      "cells": [
        "Total Views",
        "\"16\""
      ],
      "line": 120
    },
    {
      "cells": [
        "Unique Views",
        "\"15\""
      ],
      "line": 121
    },
    {
      "cells": [
        "Avg Viewing Duration",
        "\u00271m 30s (73%)\""
      ],
      "line": 122
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.wcc_elite_login_page()"
});
formatter.result({
  "duration": 1899347641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testclientforelite1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 1081571176,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password1234",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 92873183,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2225189296,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_user_on_my_webcasts_page()"
});
formatter.result({
  "duration": 8498316,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_Analytics_icon_is_present()"
});
formatter.result({
  "duration": 21114415,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_opens_analytics_page()"
});
formatter.result({
  "duration": 5093155434,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 13304449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_tab_is_present(String)"
});
formatter.result({
  "duration": 27996546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 11
    }
  ],
  "location": "EliteContentGatewayReport.user_open_tab(String)"
});
formatter.result({
  "duration": 2424012601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 19
    }
  ],
  "location": "EliteVideoReports.verify_user_is_on_tab(String)"
});
formatter.result({
  "duration": 26729325,
  "status": "passed"
});
formatter.match({
  "location": "EliteVideoReports.verify_values_inb_first_row_under_columns_as_below(DataTable)"
});
formatter.result({
  "duration": 41055,
  "status": "passed"
});
formatter.after({
  "duration": 61240,
  "status": "passed"
});
formatter.before({
  "duration": 53371,
  "status": "passed"
});
formatter.scenario({
  "line": 125,
  "name": "008-Verify sorting icon with columns of video data table are clickable at Elite Video report page",
  "description": "",
  "id": "--logi-elite-video-reports;008-verify-sorting-icon-with-columns-of-video-data-table-are-clickable-at-elite-video-report-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 124,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 126,
  "name": "wcc elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "user enters login user name \"testclientforelite1\"",
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "user enters login password \"Password1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "verify user on my webcasts page",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "verify Analytics icon is present",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "user opens analytics page",
  "keyword": "When "
});
formatter.step({
  "line": 133,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 134,
  "name": "verify \"VIDEO\" tab is present",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "user open \"VIDEO\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 136,
  "name": "verify user is on \"VIDEO\" tab",
  "keyword": "Then "
});
formatter.step({
  "line": 137,
  "name": "verify sorting icon for below columns are clickable",
  "rows": [
    {
      "cells": [
        "Video Title"
      ],
      "line": 138
    },
    {
      "cells": [
        "Total Views"
      ],
      "line": 139
    },
    {
      "cells": [
        "Unique Views"
      ],
      "line": 140
    },
    {
      "cells": [
        "Avg Viewing Duration"
      ],
      "line": 141
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.wcc_elite_login_page()"
});
formatter.result({
  "duration": 1476642290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testclientforelite1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 1134817026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password1234",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 93716857,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 3558511795,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_user_on_my_webcasts_page()"
});
formatter.result({
  "duration": 15075958,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_Analytics_icon_is_present()"
});
formatter.result({
  "duration": 35347042,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_opens_analytics_page()"
});
formatter.result({
  "duration": 22687829207,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 6355604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_tab_is_present(String)"
});
formatter.result({
  "duration": 34331965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 11
    }
  ],
  "location": "EliteContentGatewayReport.user_open_tab(String)"
});
formatter.result({
  "duration": 4695697334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 19
    }
  ],
  "location": "EliteVideoReports.verify_user_is_on_tab(String)"
});
formatter.result({
  "duration": 31926162,
  "status": "passed"
});
formatter.match({
  "location": "EliteVideoReports.verify_sorting_icon_for_below_columns_are_clickable(DataTable)"
});
formatter.result({
  "duration": 26685,
  "status": "passed"
});
formatter.after({
  "duration": 42081,
  "status": "passed"
});
formatter.before({
  "duration": 47897,
  "status": "passed"
});
formatter.scenario({
  "line": 144,
  "name": "009-Verify Only Next pagination link is clickable when user is at first page of data table at Elite Video report page",
  "description": "",
  "id": "--logi-elite-video-reports;009-verify-only-next-pagination-link-is-clickable-when-user-is-at-first-page-of-data-table-at-elite-video-report-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 143,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 145,
  "name": "wcc elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 146,
  "name": "user enters login user name \"testorionwcc3\"",
  "keyword": "When "
});
formatter.step({
  "line": 147,
  "name": "user enters login password \"Password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "verify user on my webcasts page",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "verify Analytics icon is present",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "user opens analytics page",
  "keyword": "When "
});
formatter.step({
  "line": 152,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 153,
  "name": "verify \"VIDEO\" tab is present",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "user open \"VIDEO\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 155,
  "name": "verify user is on \"VIDEO\" tab",
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "verify \"Prev\" link is present",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "verify \"Next\" link is present",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "verify \"Prev\" link is not clickable",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "verify \"Next\" link is clickable",
  "keyword": "And "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.wcc_elite_login_page()"
});
formatter.result({
  "duration": 2958427018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testorionwcc3",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 123880063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password123",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 87441651,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 4023756283,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_user_on_my_webcasts_page()"
});
formatter.result({
  "duration": 15046535,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_Analytics_icon_is_present()"
});
formatter.result({
  "duration": 50291283,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_opens_analytics_page()"
});
formatter.result({
  "duration": 2596788088,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 12468644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_tab_is_present(String)"
});
formatter.result({
  "duration": 43544633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 11
    }
  ],
  "location": "EliteContentGatewayReport.user_open_tab(String)"
});
formatter.result({
  "duration": 55591197126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 19
    }
  ],
  "location": "EliteVideoReports.verify_user_is_on_tab(String)"
});
formatter.result({
  "duration": 13356794,
  "error_message": "org.junit.ComparisonFailure: OOPs something went wrong expected:\u003c[Video] | Webcast Elite\u003e but was:\u003c[Benchmarking] | Webcast Elite\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat demo.test.testSteps.EliteVideoReports.verify_user_is_on_tab(EliteVideoReports.java)\r\n\tat ✽.Then verify user is on \"VIDEO\" tab(eliteVideoReports.feature:155)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prev",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_link_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_link_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Prev",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_link_is_not_clickable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_link_is_clickable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded15.png");
formatter.after({
  "duration": 10189415627,
  "status": "passed"
});
formatter.before({
  "duration": 72187,
  "status": "passed"
});
formatter.scenario({
  "line": 162,
  "name": "010-Verify Prev pagination link is clickable when user is not at first page of data table at Elite Video report page",
  "description": "",
  "id": "--logi-elite-video-reports;010-verify-prev-pagination-link-is-clickable-when-user-is-not-at-first-page-of-data-table-at-elite-video-report-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 161,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 163,
  "name": "wcc elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 164,
  "name": "user enters login user name \"testorionwcc3\"",
  "keyword": "When "
});
formatter.step({
  "line": 165,
  "name": "user enters login password \"Password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "verify user on my webcasts page",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "verify Analytics icon is present",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "user opens analytics page",
  "keyword": "When "
});
formatter.step({
  "line": 170,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 171,
  "name": "verify \"VIDEO\" tab is present",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "user open \"VIDEO\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 173,
  "name": "verify user is on \"VIDEO\" tab",
  "keyword": "Then "
});
formatter.step({
  "line": 174,
  "name": "verify \"Prev\" link is present",
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "verify \"Next\" link is present",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "verify \"Prev\" link is not clickable",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "user clicks on \"Next\" link",
  "keyword": "When "
});
formatter.step({
  "line": 178,
  "name": "verify \"Prev\" link is clickable",
  "keyword": "Then "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.wcc_elite_login_page()"
});
formatter.result({
  "duration": 1417035703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testorionwcc3",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 780789974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password123",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 88962726,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2576044876,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_user_on_my_webcasts_page()"
});
formatter.result({
  "duration": 29714341,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_Analytics_icon_is_present()"
});
formatter.result({
  "duration": 30086571,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_opens_analytics_page()"
});
formatter.result({
  "duration": 4267820804,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 9305040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_tab_is_present(String)"
});
formatter.result({
  "duration": 25916100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 11
    }
  ],
  "location": "EliteContentGatewayReport.user_open_tab(String)"
});
formatter.result({
  "duration": 4343995344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 19
    }
  ],
  "location": "EliteVideoReports.verify_user_is_on_tab(String)"
});
formatter.result({
  "duration": 18999757,
  "error_message": "org.junit.ComparisonFailure: OOPs something went wrong expected:\u003c[Video] | Webcast Elite\u003e but was:\u003c[Benchmarking] | Webcast Elite\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat demo.test.testSteps.EliteVideoReports.verify_user_is_on_tab(EliteVideoReports.java)\r\n\tat ✽.Then verify user is on \"VIDEO\" tab(eliteVideoReports.feature:173)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prev",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_link_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_link_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Prev",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_link_is_not_clickable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 16
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_clicks_on_link(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Prev",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_link_is_clickable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded16.png");
formatter.after({
  "duration": 9143757364,
  "status": "passed"
});
formatter.before({
  "duration": 54739,
  "status": "passed"
});
formatter.scenario({
  "line": 181,
  "name": "011-Verify user can navigate from one page to other by clicking on page numbers also at first page of data table at Elite Video report page",
  "description": "",
  "id": "--logi-elite-video-reports;011-verify-user-can-navigate-from-one-page-to-other-by-clicking-on-page-numbers-also-at-first-page-of-data-table-at-elite-video-report-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 180,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 182,
  "name": "wcc elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 183,
  "name": "user enters login user name \"testorionwcc3\"",
  "keyword": "When "
});
formatter.step({
  "line": 184,
  "name": "user enters login password \"Password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "verify user on my webcasts page",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "verify Analytics icon is present",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "user opens analytics page",
  "keyword": "When "
});
formatter.step({
  "line": 189,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 190,
  "name": "verify \"VIDEO\" tab is present",
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "user open \"VIDEO\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 192,
  "name": "verify user is on \"VIDEO\" tab",
  "keyword": "Then "
});
formatter.step({
  "line": 193,
  "name": "verify \"Prev\" link is present",
  "keyword": "And "
});
formatter.step({
  "line": 194,
  "name": "verify \"Next\" link is present",
  "keyword": "And "
});
formatter.step({
  "line": 195,
  "name": "verify user is at page number 1",
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "verify page 1 is not clickable",
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "verify page 2 is clickable",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "user clicks on page number 2",
  "keyword": "Then "
});
formatter.step({
  "line": 199,
  "name": "verify data within table is of page number 2",
  "keyword": "Then "
});
formatter.step({
  "line": 200,
  "name": "verify page 2 is not clickable",
  "keyword": "And "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.wcc_elite_login_page()"
});
formatter.result({
  "duration": 1573482722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testorionwcc3",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 1087042394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password123",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 87505628,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 6281742442,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_user_on_my_webcasts_page()"
});
formatter.result({
  "duration": 38398430,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_Analytics_icon_is_present()"
});
formatter.result({
  "duration": 48547486,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_opens_analytics_page()"
});
formatter.result({
  "duration": 3686931820,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 21176340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_tab_is_present(String)"
});
formatter.result({
  "duration": 44228877,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 11
    }
  ],
  "location": "EliteContentGatewayReport.user_open_tab(String)"
});
formatter.result({
  "duration": 5020385011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 19
    }
  ],
  "location": "EliteVideoReports.verify_user_is_on_tab(String)"
});
formatter.result({
  "duration": 11096734,
  "error_message": "org.junit.ComparisonFailure: OOPs something went wrong expected:\u003c[Video] | Webcast Elite\u003e but was:\u003c[Benchmarking] | Webcast Elite\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat demo.test.testSteps.EliteVideoReports.verify_user_is_on_tab(EliteVideoReports.java)\r\n\tat ✽.Then verify user is on \"VIDEO\" tab(eliteVideoReports.feature:192)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prev",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_link_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_link_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    }
  ],
  "location": "EliteVideoReports.verify_user_is_at_page_number(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "EliteVideoReports.verify_page_is_not_clickable(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "EliteVideoReports.verify_page_is_clickable(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 27
    }
  ],
  "location": "EliteVideoReports.user_clicks_on_page_number(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 43
    }
  ],
  "location": "EliteVideoReports.verify_data_within_table_is_of_page_number(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "EliteVideoReports.verify_page_is_not_clickable(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded17.png");
formatter.after({
  "duration": 9692277823,
  "status": "passed"
});
formatter.before({
  "duration": 61924,
  "status": "passed"
});
formatter.scenario({
  "line": 203,
  "name": "012-Verify Only Prev pagination link is clickable when user is at last page of data table",
  "description": "",
  "id": "--logi-elite-video-reports;012-verify-only-prev-pagination-link-is-clickable-when-user-is-at-last-page-of-data-table",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 202,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 204,
  "name": "wcc elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 205,
  "name": "user enters login user name \"testorionwcc3\"",
  "keyword": "When "
});
formatter.step({
  "line": 206,
  "name": "user enters login password \"Password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 207,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 208,
  "name": "verify user on my webcasts page",
  "keyword": "And "
});
formatter.step({
  "line": 209,
  "name": "verify Analytics icon is present",
  "keyword": "And "
});
formatter.step({
  "line": 210,
  "name": "user opens analytics page",
  "keyword": "When "
});
formatter.step({
  "line": 211,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 212,
  "name": "verify \"VIDEO\" tab is present",
  "keyword": "And "
});
formatter.step({
  "line": 213,
  "name": "user open \"VIDEO\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 214,
  "name": "verify user is on \"VIDEO\" tab",
  "keyword": "Then "
});
formatter.step({
  "line": 215,
  "name": "verify \"Prev\" link is present",
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "verify \"Next\" link is present",
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "user clicks on page number 3",
  "keyword": "Then "
});
formatter.step({
  "line": 218,
  "name": "verify \"Next\" link is not clickable",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "verify \"Prev\" link is clickable",
  "keyword": "And "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.wcc_elite_login_page()"
});
formatter.result({
  "duration": 2621999075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testorionwcc3",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 112505868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password123",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 88830667,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 5059269597,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_user_on_my_webcasts_page()"
});
formatter.result({
  "duration": 19949831,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_Analytics_icon_is_present()"
});
formatter.result({
  "duration": 40166860,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_opens_analytics_page()"
});
formatter.result({
  "duration": 5028917539,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 39793604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_tab_is_present(String)"
});
formatter.result({
  "duration": 54522651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 11
    }
  ],
  "location": "EliteContentGatewayReport.user_open_tab(String)"
});
formatter.result({
  "duration": 20680454078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 19
    }
  ],
  "location": "EliteVideoReports.verify_user_is_on_tab(String)"
});
formatter.result({
  "duration": 14569959,
  "error_message": "org.junit.ComparisonFailure: OOPs something went wrong expected:\u003c[Video] | Webcast Elite\u003e but was:\u003c[Benchmarking] | Webcast Elite\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat demo.test.testSteps.EliteVideoReports.verify_user_is_on_tab(EliteVideoReports.java)\r\n\tat ✽.Then verify user is on \"VIDEO\" tab(eliteVideoReports.feature:214)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prev",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_link_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_link_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 27
    }
  ],
  "location": "EliteVideoReports.user_clicks_on_page_number(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_link_is_not_clickable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Prev",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_link_is_clickable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded18.png");
formatter.after({
  "duration": 14681318621,
  "status": "passed"
});
formatter.before({
  "duration": 60898,
  "status": "passed"
});
formatter.scenario({
  "line": 222,
  "name": "013-Verify Total Views count if user launches content url at Elite Video Report Page",
  "description": "",
  "id": "--logi-elite-video-reports;013-verify-total-views-count-if-user-launches-content-url-at-elite-video-report-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 221,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 223,
  "name": "wcc elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 224,
  "name": "user enters login user name \"testdocument1\"",
  "keyword": "When "
});
formatter.step({
  "line": 225,
  "name": "user enters login password \"Password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 226,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 227,
  "name": "verify user on my webcasts page",
  "keyword": "And "
});
formatter.step({
  "line": 228,
  "name": "verify Analytics icon is present",
  "keyword": "And "
});
formatter.step({
  "line": 229,
  "name": "user opens analytics page",
  "keyword": "When "
});
formatter.step({
  "line": 230,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 231,
  "name": "verify \"VIDEO\" tab is present",
  "keyword": "And "
});
formatter.step({
  "line": 232,
  "name": "user open \"VIDEO\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 233,
  "name": "verify user is on \"VIDEO\" tab",
  "keyword": "Then "
});
formatter.step({
  "line": 234,
  "name": "verify Total Views count for \"Used for Automation Do Not Change\"",
  "keyword": "And "
});
formatter.step({
  "line": 235,
  "name": "user launches content url as \"https://gatewayqa.on24.com/wcc/gateway/testdocument1/10381559/10858922/used-for-automation-do-not-change\"",
  "keyword": "Then "
});
formatter.step({
  "line": 236,
  "name": "user clicks on \"Already Registered\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 237,
  "name": "user enteres \"qauser23may_4@inbfw.com\" in email text box",
  "keyword": "And "
});
formatter.step({
  "line": 238,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "wcc elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 240,
  "name": "user enters login user name \"testdocument1\"",
  "keyword": "When "
});
formatter.step({
  "line": 241,
  "name": "user enters login password \"Password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 243,
  "name": "verify user on my webcasts page",
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "verify Analytics icon is present",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "user opens analytics page",
  "keyword": "When "
});
formatter.step({
  "line": 246,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 247,
  "name": "verify \"VIDEO\" tab is present",
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "user open \"VIDEO\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 249,
  "name": "verify user is on \"VIDEO\" tab",
  "keyword": "Then "
});
formatter.step({
  "line": 250,
  "name": "verify Total Views count should increase by 1",
  "keyword": "Then "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.wcc_elite_login_page()"
});
formatter.result({
  "duration": 1575058879,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testdocument1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "duration": 1072727316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password123",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "duration": 94851677,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 3251806063,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_user_on_my_webcasts_page()"
});
formatter.result({
  "duration": 9950625,
  "status": "passed"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_Analytics_icon_is_present()"
});
formatter.result({
  "duration": 31141675,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_opens_analytics_page()"
});
formatter.result({
  "duration": 3693883059,
  "status": "passed"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "duration": 18031552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_tab_is_present(String)"
});
formatter.result({
  "duration": 27822406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 11
    }
  ],
  "location": "EliteContentGatewayReport.user_open_tab(String)"
});
formatter.result({
  "duration": 3420713174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 19
    }
  ],
  "location": "EliteVideoReports.verify_user_is_on_tab(String)"
});
formatter.result({
  "duration": 14586723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used for Automation Do Not Change",
      "offset": 30
    }
  ],
  "location": "EliteVideoReports.verify_Total_Views_count_for(String)"
});
formatter.result({
  "duration": 73214,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://gatewayqa.on24.com/wcc/gateway/testdocument1/10381559/10858922/used-for-automation-do-not-change",
      "offset": 30
    }
  ],
  "location": "EliteVideoReports.user_launches_content_url_as(String)"
});
formatter.result({
  "duration": 56792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Already Registered",
      "offset": 16
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_clicks_on_button(String)"
});
formatter.result({
  "duration": 2671002978858,
  "error_message": "java.lang.NullPointerException\r\n\tat demo.base.common.Common.getText(Common.java)\r\n\tat demo.test.testSteps.WebcastRegistrationPageSteps.user_clicks_on_button(WebcastRegistrationPageSteps.java)\r\n\tat ✽.Then user clicks on \"Already Registered\" button(eliteVideoReports.feature:236)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "qauser23may_4@inbfw.com",
      "offset": 14
    }
  ],
  "location": "EliteVideoReports.user_enteres_in_email_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.wcc_elite_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "testdocument1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password123",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_user_on_my_webcasts_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_Analytics_icon_is_present()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_opens_analytics_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_tab_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 11
    }
  ],
  "location": "EliteContentGatewayReport.user_open_tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 19
    }
  ],
  "location": "EliteVideoReports.verify_user_is_on_tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "EliteVideoReports.verify_Total_Views_count_should_increase_by(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3105903251,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.refresh(RemoteWebDriver.java:957)\r\n\tat demo.base.common.Common.refresh(Common.java)\r\n\tat demo.test.testSteps.GlobalSteps.afterScenario(GlobalSteps.java)\r\n\tat sun.reflect.GeneratedMethodAccessor15.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 45503,
  "status": "passed"
});
formatter.scenario({
  "line": 253,
  "name": "014-Verify Unique Views count if user launches content url at Elite Video Report Page",
  "description": "",
  "id": "--logi-elite-video-reports;014-verify-unique-views-count-if-user-launches-content-url-at-elite-video-report-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 252,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 254,
  "name": "wcc elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 255,
  "name": "user enters login user name \"testdocument1\"",
  "keyword": "When "
});
formatter.step({
  "line": 256,
  "name": "user enters login password \"Password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "verify user on my webcasts page",
  "keyword": "And "
});
formatter.step({
  "line": 259,
  "name": "verify Analytics icon is present",
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "user opens analytics page",
  "keyword": "When "
});
formatter.step({
  "line": 261,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 262,
  "name": "verify \"VIDEO\" tab is present",
  "keyword": "And "
});
formatter.step({
  "line": 263,
  "name": "user open \"VIDEO\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 264,
  "name": "verify user is on \"VIDEO\" tab",
  "keyword": "Then "
});
formatter.step({
  "line": 265,
  "name": "verify Unique Views count for \"Used for Automation Do Not Change\"",
  "keyword": "And "
});
formatter.step({
  "line": 266,
  "name": "user launches content url as \"https://gatewayqa.on24.com/wcc/gateway/testdocument1/10381559/10858922/used-for-automation-do-not-change\"",
  "keyword": "Then "
});
formatter.step({
  "line": 267,
  "name": "user registers with unique emailid",
  "keyword": "Then "
});
formatter.step({
  "line": 268,
  "name": "user clicks on register button",
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "wcc elite login page",
  "keyword": "Given "
});
formatter.step({
  "line": 270,
  "name": "user enters login user name \"testdocument1\"",
  "keyword": "When "
});
formatter.step({
  "line": 271,
  "name": "user enters login password \"Password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 272,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 273,
  "name": "verify user on my webcasts page",
  "keyword": "And "
});
formatter.step({
  "line": 274,
  "name": "verify Analytics icon is present",
  "keyword": "And "
});
formatter.step({
  "line": 275,
  "name": "user opens analytics page",
  "keyword": "When "
});
formatter.step({
  "line": 276,
  "name": "verify user on analytics \u0027DASHBOARD\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 277,
  "name": "verify \"VIDEO\" tab is present",
  "keyword": "And "
});
formatter.step({
  "line": 278,
  "name": "user open \"VIDEO\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 279,
  "name": "verify user is on \"VIDEO\" tab",
  "keyword": "Then "
});
formatter.step({
  "line": 280,
  "name": "verify Unique Views count should increase by 1",
  "keyword": "Then "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.wcc_elite_login_page()"
});
formatter.result({
  "duration": 2592602,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:780)\r\n\tat demo.base.common.Common.deleteAllCookiesExample(Common.java)\r\n\tat demo.test.testSteps.WebcastRegistrationPageSteps.wcc_elite_login_page(WebcastRegistrationPageSteps.java)\r\n\tat ✽.Given wcc elite login page(eliteVideoReports.feature:254)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "testdocument1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password123",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_user_on_my_webcasts_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_Analytics_icon_is_present()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_opens_analytics_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_tab_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 11
    }
  ],
  "location": "EliteContentGatewayReport.user_open_tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 19
    }
  ],
  "location": "EliteVideoReports.verify_user_is_on_tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Used for Automation Do Not Change",
      "offset": 31
    }
  ],
  "location": "EliteVideoReports.verify_Unique_Views_count_for(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://gatewayqa.on24.com/wcc/gateway/testdocument1/10381559/10858922/used-for-automation-do-not-change",
      "offset": 30
    }
  ],
  "location": "EliteVideoReports.user_launches_content_url_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EliteVideoReports.user_registers_with_unique_emailid()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EliteVideoReports.user_clicks_on_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.wcc_elite_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "testdocument1",
      "offset": 29
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_user_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password123",
      "offset": 28
    }
  ],
  "location": "EliteContentGatewayReport.user_enters_login_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_user_on_my_webcasts_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AnalyticsDashboard.verify_Analytics_icon_is_present()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EliteContentGatewayReport.user_opens_analytics_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EliteContentGatewayReport.verify_user_on_analytics_DASHBOARD_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 8
    }
  ],
  "location": "EliteVideoReports.verify_tab_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 11
    }
  ],
  "location": "EliteContentGatewayReport.user_open_tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "VIDEO",
      "offset": 19
    }
  ],
  "location": "EliteVideoReports.verify_user_is_on_tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 45
    }
  ],
  "location": "EliteVideoReports.verify_Unique_Views_count_should_increase_by(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3006484584,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.refresh(RemoteWebDriver.java:957)\r\n\tat demo.base.common.Common.refresh(Common.java)\r\n\tat demo.test.testSteps.GlobalSteps.afterScenario(GlobalSteps.java)\r\n\tat sun.reflect.GeneratedMethodAccessor15.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.uri("makeMyTripFlightSearch.feature");
formatter.feature({
  "line": 1,
  "name": "- Make My Trip Flight Search",
  "description": "",
  "id": "--make-my-trip-flight-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "001 - Verify user is able to search flight on make my trip",
  "description": "",
  "id": "--make-my-trip-flight-search;001---verify-user-is-able-to-search-flight-on-make-my-trip",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@makemytrip"
    },
    {
      "line": 3,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launches make my trip url \"makemytrip.home.url\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user selects \"ONE WAY\" trip option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user selects \"\u003csource\u003e\" from From dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user selects \"\u003cdestination\u003e\" from To dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user selects departure date as \"\u003cdate\u003e\" and \"\u003cmonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks Passenger|Class to enter details",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user selects adults as \"\u003cadults\u003e\" and children as \"\u003cchildren\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user selects Premium Economy class",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify search results are according to entered \"\u003csource\u003e\" and  \"\u003cdestination\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "--make-my-trip-flight-search;001---verify-user-is-able-to-search-flight-on-make-my-trip;",
  "rows": [
    {
      "cells": [
        "source",
        "destination",
        "month",
        "date",
        "adults",
        "children"
      ],
      "line": 17,
      "id": "--make-my-trip-flight-search;001---verify-user-is-able-to-search-flight-on-make-my-trip;;1"
    },
    {
      "cells": [
        "Ahmedabad",
        "Cochin",
        "July",
        "15",
        "1",
        "2"
      ],
      "line": 18,
      "id": "--make-my-trip-flight-search;001---verify-user-is-able-to-search-flight-on-make-my-trip;;2"
    },
    {
      "cells": [
        "Bangalore",
        "Chennai",
        "July",
        "21",
        "2",
        "1"
      ],
      "line": 19,
      "id": "--make-my-trip-flight-search;001---verify-user-is-able-to-search-flight-on-make-my-trip;;3"
    },
    {
      "cells": [
        "Pune",
        "Jaipur",
        "July",
        "25",
        "3",
        "2"
      ],
      "line": 20,
      "id": "--make-my-trip-flight-search;001---verify-user-is-able-to-search-flight-on-make-my-trip;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 48924,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "001 - Verify user is able to search flight on make my trip",
  "description": "",
  "id": "--make-my-trip-flight-search;001---verify-user-is-able-to-search-flight-on-make-my-trip;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Completed"
    },
    {
      "line": 3,
      "name": "@makemytrip"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launches make my trip url \"makemytrip.home.url\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user selects \"ONE WAY\" trip option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user selects \"Ahmedabad\" from From dropdown",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user selects \"Cochin\" from To dropdown",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user selects departure date as \"15\" and \"July\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks Passenger|Class to enter details",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user selects adults as \"1\" and children as \"2\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user selects Premium Economy class",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify search results are according to entered \"Ahmedabad\" and  \"Cochin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "makemytrip.home.url",
      "offset": 32
    }
  ],
  "location": "MakeMyTrip.user_launches_make_my_trip_url(String)"
});
formatter.result({
  "duration": 1645608,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:780)\r\n\tat demo.base.common.Common.deleteAllCookiesExample(Common.java)\r\n\tat demo.test.testSteps.MakeMyTrip.user_launches_make_my_trip_url(MakeMyTrip.java)\r\n\tat ✽.When user launches make my trip url \"makemytrip.home.url\"(makeMyTripFlightSearch.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "ONE WAY",
      "offset": 14
    }
  ],
  "location": "MakeMyTrip.user_selects_trip_option(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ahmedabad",
      "offset": 14
    }
  ],
  "location": "MakeMyTrip.user_selects_from_From_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Cochin",
      "offset": 14
    }
  ],
  "location": "MakeMyTrip.user_selects_from_To_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 32
    },
    {
      "val": "July",
      "offset": 41
    }
  ],
  "location": "MakeMyTrip.user_selects_departure_date_as_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MakeMyTrip.user_clicks_Passenger_Class_to_enter_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    },
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "MakeMyTrip.user_selects_adults_as_and_children_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MakeMyTrip.user_selects_Premium_Economy_class()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MakeMyTrip.user_click_on_Search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ahmedabad",
      "offset": 48
    },
    {
      "val": "Cochin",
      "offset": 65
    }
  ],
  "location": "MakeMyTrip.verify_search_results_are_according_to_entered_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3009585923,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.refresh(RemoteWebDriver.java:957)\r\n\tat demo.base.common.Common.refresh(Common.java)\r\n\tat demo.test.testSteps.GlobalSteps.afterScenario(GlobalSteps.java)\r\n\tat sun.reflect.GeneratedMethodAccessor15.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 44818,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "001 - Verify user is able to search flight on make my trip",
  "description": "",
  "id": "--make-my-trip-flight-search;001---verify-user-is-able-to-search-flight-on-make-my-trip;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Completed"
    },
    {
      "line": 3,
      "name": "@makemytrip"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launches make my trip url \"makemytrip.home.url\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user selects \"ONE WAY\" trip option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user selects \"Bangalore\" from From dropdown",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user selects \"Chennai\" from To dropdown",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user selects departure date as \"21\" and \"July\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks Passenger|Class to enter details",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user selects adults as \"2\" and children as \"1\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user selects Premium Economy class",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify search results are according to entered \"Bangalore\" and  \"Chennai\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "makemytrip.home.url",
      "offset": 32
    }
  ],
  "location": "MakeMyTrip.user_launches_make_my_trip_url(String)"
});
formatter.result({
  "duration": 2224137,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:780)\r\n\tat demo.base.common.Common.deleteAllCookiesExample(Common.java)\r\n\tat demo.test.testSteps.MakeMyTrip.user_launches_make_my_trip_url(MakeMyTrip.java)\r\n\tat ✽.When user launches make my trip url \"makemytrip.home.url\"(makeMyTripFlightSearch.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "ONE WAY",
      "offset": 14
    }
  ],
  "location": "MakeMyTrip.user_selects_trip_option(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bangalore",
      "offset": 14
    }
  ],
  "location": "MakeMyTrip.user_selects_from_From_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chennai",
      "offset": 14
    }
  ],
  "location": "MakeMyTrip.user_selects_from_To_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 32
    },
    {
      "val": "July",
      "offset": 41
    }
  ],
  "location": "MakeMyTrip.user_selects_departure_date_as_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MakeMyTrip.user_clicks_Passenger_Class_to_enter_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    },
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "MakeMyTrip.user_selects_adults_as_and_children_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MakeMyTrip.user_selects_Premium_Economy_class()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MakeMyTrip.user_click_on_Search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bangalore",
      "offset": 48
    },
    {
      "val": "Chennai",
      "offset": 65
    }
  ],
  "location": "MakeMyTrip.verify_search_results_are_according_to_entered_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3009583186,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.refresh(RemoteWebDriver.java:957)\r\n\tat demo.base.common.Common.refresh(Common.java)\r\n\tat demo.test.testSteps.GlobalSteps.afterScenario(GlobalSteps.java)\r\n\tat sun.reflect.GeneratedMethodAccessor15.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 112900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "001 - Verify user is able to search flight on make my trip",
  "description": "",
  "id": "--make-my-trip-flight-search;001---verify-user-is-able-to-search-flight-on-make-my-trip;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Completed"
    },
    {
      "line": 3,
      "name": "@makemytrip"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launches make my trip url \"makemytrip.home.url\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user selects \"ONE WAY\" trip option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user selects \"Pune\" from From dropdown",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user selects \"Jaipur\" from To dropdown",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user selects departure date as \"25\" and \"July\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks Passenger|Class to enter details",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user selects adults as \"3\" and children as \"2\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user selects Premium Economy class",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify search results are according to entered \"Pune\" and  \"Jaipur\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "makemytrip.home.url",
      "offset": 32
    }
  ],
  "location": "MakeMyTrip.user_launches_make_my_trip_url(String)"
});
formatter.result({
  "duration": 5073673,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:780)\r\n\tat demo.base.common.Common.deleteAllCookiesExample(Common.java)\r\n\tat demo.test.testSteps.MakeMyTrip.user_launches_make_my_trip_url(MakeMyTrip.java)\r\n\tat ✽.When user launches make my trip url \"makemytrip.home.url\"(makeMyTripFlightSearch.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "ONE WAY",
      "offset": 14
    }
  ],
  "location": "MakeMyTrip.user_selects_trip_option(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pune",
      "offset": 14
    }
  ],
  "location": "MakeMyTrip.user_selects_from_From_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Jaipur",
      "offset": 14
    }
  ],
  "location": "MakeMyTrip.user_selects_from_To_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 32
    },
    {
      "val": "July",
      "offset": 41
    }
  ],
  "location": "MakeMyTrip.user_selects_departure_date_as_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MakeMyTrip.user_clicks_Passenger_Class_to_enter_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 24
    },
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "MakeMyTrip.user_selects_adults_as_and_children_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MakeMyTrip.user_selects_Premium_Economy_class()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MakeMyTrip.user_click_on_Search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pune",
      "offset": 48
    },
    {
      "val": "Jaipur",
      "offset": 60
    }
  ],
  "location": "MakeMyTrip.verify_search_results_are_according_to_entered_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3011051574,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.refresh(RemoteWebDriver.java:957)\r\n\tat demo.base.common.Common.refresh(Common.java)\r\n\tat demo.test.testSteps.GlobalSteps.afterScenario(GlobalSteps.java)\r\n\tat sun.reflect.GeneratedMethodAccessor15.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.uri("videoIntelligenceReport.feature");
formatter.feature({
  "line": 2,
  "name": "- Logi-Video Intelligence Report",
  "description": "",
  "id": "--logi-video-intelligence-report",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@VideoIntelligenceReport"
    }
  ]
});
formatter.before({
  "duration": 114269,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "001-Verify the Video Intelligence Report is loading and displaying header elements",
  "description": "",
  "id": "--logi-video-intelligence-report;001-verify-the-video-intelligence-report-is-loading-and-displaying-header-elements",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user launch \"Video\" Intelligence URL \"logi.video.intelligent.report.url_1\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify \"Video\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify page title is \"Video Reporting and Analytics\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify the report title \"Automation_testing_Do_Not_Change\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify event id \"10128600\" is displayed in header",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify client name \"testclientforelite1\" is displayed in header",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify date \"Jun 26, 2017 04:38 AM PDT\" is displayed in header",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify Image is displayed in header",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Video",
      "offset": 13
    },
    {
      "val": "logi.video.intelligent.report.url_1",
      "offset": 38
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 37861298,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:368)\r\n\tat demo.test.testSteps.VideoIntelligenceReport.user_launch_Intelligence_URL(VideoIntelligenceReport.java)\r\n\tat ✽.When user launch \"Video\" Intelligence URL \"logi.video.intelligent.report.url_1\"(videoIntelligenceReport.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Video",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Video Reporting and Analytics",
      "offset": 22
    }
  ],
  "location": "EliteContentGatewayReport.verify_page_title_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation_testing_Do_Not_Change",
      "offset": 25
    }
  ],
  "location": "VideoIntelligenceReport.verify_the_report_title_is_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10128600",
      "offset": 17
    }
  ],
  "location": "VideoIntelligenceReport.verify_event_id_is_displayed_in_header(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "testclientforelite1",
      "offset": 20
    }
  ],
  "location": "VideoIntelligenceReport.verify_client_name_is_displayed_in_header(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Jun 26, 2017 04:38 AM PDT",
      "offset": 13
    }
  ],
  "location": "VideoIntelligenceReport.verify_date_is_displayed_in_header(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VideoIntelligenceReport.verify_Image_is_displayed_in_header()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3006269048,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.refresh(RemoteWebDriver.java:957)\r\n\tat demo.base.common.Common.refresh(Common.java)\r\n\tat demo.test.testSteps.GlobalSteps.afterScenario(GlobalSteps.java)\r\n\tat sun.reflect.GeneratedMethodAccessor15.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 36950,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "002-Verify MY DASHBOARD elements in Video Intelligence Report",
  "description": "",
  "id": "--logi-video-intelligence-report;002-verify-my-dashboard-elements-in-video-intelligence-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user launch \"Video\" Intelligence URL \"logi.video.intelligent.report.url_1\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "verify \"Video\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "verify page title is \"Video Reporting and Analytics\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "verify the report title \"Automation_testing_Do_Not_Change\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "verify \"MY DASHBOARD\" heading is displayed on \u0027My Dashboard\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "verify \u0027Export\u0027 icon is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "verify sequence of widget on \u0027My Dashboard\u0027 tab for \"VIR\" is",
  "rows": [
    {
      "cells": [
        "Total Views"
      ],
      "line": 23
    },
    {
      "cells": [
        "Avg. Viewing Duration"
      ],
      "line": 24
    },
    {
      "cells": [
        "View Source"
      ],
      "line": 25
    },
    {
      "cells": [
        "Views by Player"
      ],
      "line": 26
    },
    {
      "cells": [
        "ON24 Video Summary"
      ],
      "line": 27
    },
    {
      "cells": [
        "YouTube Summary"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "verify \u0027Export\u0027 icon is displayed",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Video",
      "offset": 13
    },
    {
      "val": "logi.video.intelligent.report.url_1",
      "offset": 38
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 2443095,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:368)\r\n\tat demo.test.testSteps.VideoIntelligenceReport.user_launch_Intelligence_URL(VideoIntelligenceReport.java)\r\n\tat ✽.When user launch \"Video\" Intelligence URL \"logi.video.intelligent.report.url_1\"(videoIntelligenceReport.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Video",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Video Reporting and Analytics",
      "offset": 22
    }
  ],
  "location": "EliteContentGatewayReport.verify_page_title_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation_testing_Do_Not_Change",
      "offset": 25
    }
  ],
  "location": "VideoIntelligenceReport.verify_the_report_title_is_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MY DASHBOARD",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_heading_is_displayed_on_My_Dashboard_tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VideoIntelligenceReport.verify_Export_icon_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "VIR",
      "offset": 53
    }
  ],
  "location": "DocumentIntelligenceReport.verify_sequence_of_widget_on_My_Dashboard_tab_for_is(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VideoIntelligenceReport.verify_Export_icon_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3009152796,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.refresh(RemoteWebDriver.java:957)\r\n\tat demo.base.common.Common.refresh(Common.java)\r\n\tat demo.test.testSteps.GlobalSteps.afterScenario(GlobalSteps.java)\r\n\tat sun.reflect.GeneratedMethodAccessor15.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 37975,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "003-Verify AUDIENCE elements in Video Intelligence Report",
  "description": "",
  "id": "--logi-video-intelligence-report;003-verify-audience-elements-in-video-intelligence-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "user launch \"Video\" Intelligence URL \"logi.video.intelligent.report.url_1\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "verify \"Video\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "verify page title is \"Video Reporting and Analytics\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "verify the report title \"Automation_testing_Do_Not_Change\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user click on \"Audience\" tab of \"VIR\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "verify \"ALL VIEWERS\" heading is displayed on \u0027Audience\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "verify \u0027Export\u0027 icon is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "verify \"TOTAL_VIEWS\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "verify \"DURATION\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "verify \"FIRST_NAME\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "verify \"LAST_NAME\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "verify \"EMAIL\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "verify \"COMPANY\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "verify \"TITLE\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "verify \"INDUSTRY\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "verify \"STREET_ADD_ONE\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "verify \"STREET_ADD_TWO\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "verify \"CITY\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "verify \"STATE\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "verify \"POSTAL_CODE\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "verify \"COUNTRY\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "verify \"WORK_PHONE\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "verify \"CPMPANY_SIZE\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "verify \"JOB_FUNCTION\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "verify \"Add Custom Fields 1\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "verify \"Add Custom Fields 2\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "verify \"REG_TIME\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "verify \"SOURCE\" column is present on Audience Tab",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Video",
      "offset": 13
    },
    {
      "val": "logi.video.intelligent.report.url_1",
      "offset": 38
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 2403750,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:368)\r\n\tat demo.test.testSteps.VideoIntelligenceReport.user_launch_Intelligence_URL(VideoIntelligenceReport.java)\r\n\tat ✽.When user launch \"Video\" Intelligence URL \"logi.video.intelligent.report.url_1\"(videoIntelligenceReport.feature:33)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Video",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Video Reporting and Analytics",
      "offset": 22
    }
  ],
  "location": "EliteContentGatewayReport.verify_page_title_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation_testing_Do_Not_Change",
      "offset": 25
    }
  ],
  "location": "VideoIntelligenceReport.verify_the_report_title_is_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Audience",
      "offset": 15
    },
    {
      "val": "VIR",
      "offset": 33
    }
  ],
  "location": "VideoIntelligenceReport.user_click_on_tab_of(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ALL VIEWERS",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_heading_is_displayed_on_Audience_tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VideoIntelligenceReport.verify_Export_icon_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TOTAL_VIEWS",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "DURATION",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "FIRST_NAME",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "LAST_NAME",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "EMAIL",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPANY",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TITLE",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "INDUSTRY",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "STREET_ADD_ONE",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "STREET_ADD_TWO",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CITY",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "STATE",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "POSTAL_CODE",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "COUNTRY",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WORK_PHONE",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CPMPANY_SIZE",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "JOB_FUNCTION",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Custom Fields 1",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Custom Fields 2",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "REG_TIME",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SOURCE",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_column_is_present_on_Audience_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3040466559,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.refresh(RemoteWebDriver.java:957)\r\n\tat demo.base.common.Common.refresh(Common.java)\r\n\tat demo.test.testSteps.GlobalSteps.afterScenario(GlobalSteps.java)\r\n\tat sun.reflect.GeneratedMethodAccessor15.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 93057,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "004-Verify data within Total Viiews widget at My DASHBOARD page of VIR",
  "description": "",
  "id": "--logi-video-intelligence-report;004-verify-data-within-total-viiews-widget-at-my-dashboard-page-of-vir",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 62,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "user launch \"Video\" Intelligence URL \"logi.video.intelligent.report.url_1\"",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "verify \"Video\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "verify page title is \"Video Reporting and Analytics\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "verify the report title \"Automation_testing_Do_Not_Change\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "verify title of first widget is \"Total Views\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "verify value of \"Total Views\" is \"23\"",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "verify value of \"Unique Views\" is \"15\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Video",
      "offset": 13
    },
    {
      "val": "logi.video.intelligent.report.url_1",
      "offset": 38
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 6287180,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:368)\r\n\tat demo.test.testSteps.VideoIntelligenceReport.user_launch_Intelligence_URL(VideoIntelligenceReport.java)\r\n\tat ✽.When user launch \"Video\" Intelligence URL \"logi.video.intelligent.report.url_1\"(videoIntelligenceReport.feature:64)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Video",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Video Reporting and Analytics",
      "offset": 22
    }
  ],
  "location": "EliteContentGatewayReport.verify_page_title_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation_testing_Do_Not_Change",
      "offset": 25
    }
  ],
  "location": "VideoIntelligenceReport.verify_the_report_title_is_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Views",
      "offset": 33
    }
  ],
  "location": "DocumentIntelligenceReport.verify_title_of_first_widget_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Views",
      "offset": 17
    },
    {
      "val": "23",
      "offset": 34
    }
  ],
  "location": "DocumentIntelligenceReport.verify_value_of_is(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Unique Views",
      "offset": 17
    },
    {
      "val": "15",
      "offset": 35
    }
  ],
  "location": "DocumentIntelligenceReport.verify_value_of_is(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3010740243,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.refresh(RemoteWebDriver.java:957)\r\n\tat demo.base.common.Common.refresh(Common.java)\r\n\tat demo.test.testSteps.GlobalSteps.afterScenario(GlobalSteps.java)\r\n\tat sun.reflect.GeneratedMethodAccessor15.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 94425,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "005-Verify data within Avg. Viewing Duration widget at My DASHBOARD page of VIR",
  "description": "",
  "id": "--logi-video-intelligence-report;005-verify-data-within-avg.-viewing-duration-widget-at-my-dashboard-page-of-vir",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 72,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "user launch \"Video\" Intelligence URL \"logi.video.intelligent.report.url_1\"",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "verify \"Video\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "verify page title is \"Video Reporting and Analytics\"",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "verify the report title \"Automation_testing_Do_Not_Change\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "verify title of second widget is \"Avg. Viewing Duration\"",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "verify value of \"Avg viewing session\" is \"10s\"",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "verify value of \"Completion\" is \"40%\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Video",
      "offset": 13
    },
    {
      "val": "logi.video.intelligent.report.url_1",
      "offset": 38
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 4299108,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:368)\r\n\tat demo.test.testSteps.VideoIntelligenceReport.user_launch_Intelligence_URL(VideoIntelligenceReport.java)\r\n\tat ✽.When user launch \"Video\" Intelligence URL \"logi.video.intelligent.report.url_1\"(videoIntelligenceReport.feature:74)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Video",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Video Reporting and Analytics",
      "offset": 22
    }
  ],
  "location": "EliteContentGatewayReport.verify_page_title_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation_testing_Do_Not_Change",
      "offset": 25
    }
  ],
  "location": "VideoIntelligenceReport.verify_the_report_title_is_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Avg. Viewing Duration",
      "offset": 34
    }
  ],
  "location": "DocumentIntelligenceReport.verify_title_of_second_widget_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Avg viewing session",
      "offset": 17
    },
    {
      "val": "10s",
      "offset": 42
    }
  ],
  "location": "DocumentIntelligenceReport.verify_value_of_is(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Completion",
      "offset": 17
    },
    {
      "val": "40%",
      "offset": 33
    }
  ],
  "location": "DocumentIntelligenceReport.verify_value_of_is(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3005307342,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.refresh(RemoteWebDriver.java:957)\r\n\tat demo.base.common.Common.refresh(Common.java)\r\n\tat demo.test.testSteps.GlobalSteps.afterScenario(GlobalSteps.java)\r\n\tat sun.reflect.GeneratedMethodAccessor15.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 110163,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "006-Verify data within View Source widget at My DASHBOARD page of VIR",
  "description": "",
  "id": "--logi-video-intelligence-report;006-verify-data-within-view-source-widget-at-my-dashboard-page-of-vir",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 82,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "user launch \"Video\" Intelligence URL \"logi.video.intelligent.report.url_1\"",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "verify \"Video\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "verify page title is \"Video Reporting and Analytics\"",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "verify the report title \"Automation_testing_Do_Not_Change\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "verify title of third widget is \"View Source\"",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "verify value of different sources are as below in View Source widget",
  "rows": [
    {
      "cells": [
        "FireFoxNewUser"
      ],
      "line": 90
    },
    {
      "cells": [
        "FireFoxUser"
      ],
      "line": 91
    },
    {
      "cells": [
        "FireFoxUser_1"
      ],
      "line": 92
    },
    {
      "cells": [
        "FireFoxUser_2"
      ],
      "line": 93
    },
    {
      "cells": [
        "FireFoxUser_3"
      ],
      "line": 94
    },
    {
      "cells": [
        "FireFoxUser_4"
      ],
      "line": 95
    },
    {
      "cells": [
        "IEUser"
      ],
      "line": 96
    },
    {
      "cells": [
        "IncognitoUser_1"
      ],
      "line": 97
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Video",
      "offset": 13
    },
    {
      "val": "logi.video.intelligent.report.url_1",
      "offset": 38
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 4857794,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:368)\r\n\tat demo.test.testSteps.VideoIntelligenceReport.user_launch_Intelligence_URL(VideoIntelligenceReport.java)\r\n\tat ✽.When user launch \"Video\" Intelligence URL \"logi.video.intelligent.report.url_1\"(videoIntelligenceReport.feature:84)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Video",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Video Reporting and Analytics",
      "offset": 22
    }
  ],
  "location": "EliteContentGatewayReport.verify_page_title_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation_testing_Do_Not_Change",
      "offset": 25
    }
  ],
  "location": "VideoIntelligenceReport.verify_the_report_title_is_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "View Source",
      "offset": 33
    }
  ],
  "location": "DocumentIntelligenceReport.verify_title_of_third_widget_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DocumentIntelligenceReport.verify_value_of_different_sources_are_as_below_in_View_Source_widget(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3008596506,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.refresh(RemoteWebDriver.java:957)\r\n\tat demo.base.common.Common.refresh(Common.java)\r\n\tat demo.test.testSteps.GlobalSteps.afterScenario(GlobalSteps.java)\r\n\tat sun.reflect.GeneratedMethodAccessor15.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 34897,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "007-Verify source names within View Source widget are clickable at My DASHBOARD page of VIR",
  "description": "",
  "id": "--logi-video-intelligence-report;007-verify-source-names-within-view-source-widget-are-clickable-at-my-dashboard-page-of-vir",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 99,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "user launch \"Video\" Intelligence URL \"logi.video.intelligent.report.url_1\"",
  "keyword": "When "
});
formatter.step({
  "line": 102,
  "name": "verify \"Video\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "verify page title is \"Video Reporting and Analytics\"",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "verify the report title \"Automation_testing_Do_Not_Change\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "verify title of third widget is \"View Source\"",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "verify below source names are clickable in View Source widget",
  "rows": [
    {
      "cells": [
        "FireFoxNewUser"
      ],
      "line": 107
    },
    {
      "cells": [
        "FireFoxUser"
      ],
      "line": 108
    },
    {
      "cells": [
        "FireFoxUser_1"
      ],
      "line": 109
    },
    {
      "cells": [
        "FireFoxUser_2"
      ],
      "line": 110
    },
    {
      "cells": [
        "FireFoxUser_3"
      ],
      "line": 111
    },
    {
      "cells": [
        "FireFoxUser_4"
      ],
      "line": 112
    },
    {
      "cells": [
        "IEUser"
      ],
      "line": 113
    },
    {
      "cells": [
        "IncognitoUser_1"
      ],
      "line": 114
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Video",
      "offset": 13
    },
    {
      "val": "logi.video.intelligent.report.url_1",
      "offset": 38
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 1879620,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:368)\r\n\tat demo.test.testSteps.VideoIntelligenceReport.user_launch_Intelligence_URL(VideoIntelligenceReport.java)\r\n\tat ✽.When user launch \"Video\" Intelligence URL \"logi.video.intelligent.report.url_1\"(videoIntelligenceReport.feature:101)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Video",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Video Reporting and Analytics",
      "offset": 22
    }
  ],
  "location": "EliteContentGatewayReport.verify_page_title_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation_testing_Do_Not_Change",
      "offset": 25
    }
  ],
  "location": "VideoIntelligenceReport.verify_the_report_title_is_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "View Source",
      "offset": 33
    }
  ],
  "location": "DocumentIntelligenceReport.verify_title_of_third_widget_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DocumentIntelligenceReport.verify_below_source_names_are_clickable_in_View_Source_widget(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3006305996,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.refresh(RemoteWebDriver.java:957)\r\n\tat demo.base.common.Common.refresh(Common.java)\r\n\tat demo.test.testSteps.GlobalSteps.afterScenario(GlobalSteps.java)\r\n\tat sun.reflect.GeneratedMethodAccessor15.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 84162,
  "status": "passed"
});
formatter.scenario({
  "line": 117,
  "name": "009-Verify arrow icon within View Source widget at My DASHBOARD page of VIR",
  "description": "",
  "id": "--logi-video-intelligence-report;009-verify-arrow-icon-within-view-source-widget-at-my-dashboard-page-of-vir",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 116,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 118,
  "name": "user launch \"Video\" Intelligence URL \"logi.video.intelligent.report.url_1\"",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "verify \"Video\" Intelligence Report report is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "verify page title is \"Video Reporting and Analytics\"",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "verify the report title \"Automation_testing_Do_Not_Change\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "verify title of third widget is \"View Source\"",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "verify arrow icon below source names and is clickable",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Video",
      "offset": 13
    },
    {
      "val": "logi.video.intelligent.report.url_1",
      "offset": 38
    }
  ],
  "location": "VideoIntelligenceReport.user_launch_Intelligence_URL(String,String)"
});
formatter.result({
  "duration": 3470146,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:368)\r\n\tat demo.test.testSteps.VideoIntelligenceReport.user_launch_Intelligence_URL(VideoIntelligenceReport.java)\r\n\tat ✽.When user launch \"Video\" Intelligence URL \"logi.video.intelligent.report.url_1\"(videoIntelligenceReport.feature:118)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Video",
      "offset": 8
    }
  ],
  "location": "VideoIntelligenceReport.verify_Intelligence_Report_report_is_loaded(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Video Reporting and Analytics",
      "offset": 22
    }
  ],
  "location": "EliteContentGatewayReport.verify_page_title_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation_testing_Do_Not_Change",
      "offset": 25
    }
  ],
  "location": "VideoIntelligenceReport.verify_the_report_title_is_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "View Source",
      "offset": 33
    }
  ],
  "location": "DocumentIntelligenceReport.verify_title_of_third_widget_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DocumentIntelligenceReport.verify_arrow_icon_below_source_names_and_is_clickable()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3006629986,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.refresh(RemoteWebDriver.java:957)\r\n\tat demo.base.common.Common.refresh(Common.java)\r\n\tat demo.test.testSteps.GlobalSteps.afterScenario(GlobalSteps.java)\r\n\tat sun.reflect.GeneratedMethodAccessor15.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.uri("webcastRegistrationPage.feature");
formatter.feature({
  "line": 2,
  "name": "- LOGI-Webcast Registration Page",
  "description": "",
  "id": "--logi-webcast-registration-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@WebcastRegistration"
    }
  ]
});
formatter.before({
  "duration": 36949,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "001-Verification of Elite registration page with valid values",
  "description": "",
  "id": "--logi-webcast-registration-page;001-verification-of-elite-registration-page-with-valid-values",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user deletes all cookies",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user launches registration page url \"registrationUrl\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "verify Registration page has been loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "verify title \"Event Registration\" is displayed on Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters first name in \"Firstname\" text box",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters last name in \"Lastname\" text box",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enters desired email id in \"Email\" text box",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters company name in \"company\" text box",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user selects title as senior director from \"Title\" dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user selects industry as education from \"Industry\" dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters Indore into \"Street address1\" text box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enters Indore into \"City\" text box",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enters Madhya Pradesh into \"State\" text box",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enters 452002 into \"Postal Code\" text box",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user selects India as country from \"Country\" dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user enters 6654748569 as work phone number in \"Work Phone\" text box",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user selects 500-999 from \"company size\" drop down",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user enters QA Engineer into \"Job function\" text box",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user checks \"Opt Out Event\" checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user clicks on \"Register\" button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "verify registration done successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.user_deletes_all_cookies()"
});
formatter.result({
  "duration": 1439992,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:780)\r\n\tat demo.base.common.Common.deleteAllCookiesExample(Common.java)\r\n\tat demo.test.testSteps.WebcastRegistrationPageSteps.user_deletes_all_cookies(WebcastRegistrationPageSteps.java)\r\n\tat ✽.When user deletes all cookies(webcastRegistrationPage.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "registrationUrl",
      "offset": 37
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_launches_registration_page_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.verify_Registration_page_has_been_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Event Registration",
      "offset": 14
    }
  ],
  "location": "WebcastRegistrationPageSteps.verify_title_is_displayed_on_Registration_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Firstname",
      "offset": 27
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_first_name_in_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Lastname",
      "offset": 26
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_last_name_in_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 33
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_desired_email_id_in_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "company",
      "offset": 29
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_company_name_in_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Title",
      "offset": 44
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_selects_title_as_senior_director_from_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Industry",
      "offset": 41
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_selects_industry_as_education_from_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Street address1",
      "offset": 25
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_Indore_into_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 25
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_Indore_into_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "State",
      "offset": 33
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_Madhya_Pradesh_into_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "452002",
      "offset": 12
    },
    {
      "val": "Postal Code",
      "offset": 25
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_into_text_box(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Country",
      "offset": 36
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_selects_India_as_country_from_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "6654748569",
      "offset": 12
    },
    {
      "val": "Work Phone",
      "offset": 48
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_as_work_phone_number_in_text_box(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 13
    },
    {
      "val": "999",
      "offset": 17
    },
    {
      "val": "company size",
      "offset": 27
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_selects_from_drop_down(int,int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Job function",
      "offset": 30
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_QA_Engineer_into_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Opt Out Event",
      "offset": 13
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_checks_checkbox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 16
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_clicks_on_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.verify_registration_done_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3056380032,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.refresh(RemoteWebDriver.java:957)\r\n\tat demo.base.common.Common.refresh(Common.java)\r\n\tat demo.test.testSteps.GlobalSteps.afterScenario(GlobalSteps.java)\r\n\tat sun.reflect.GeneratedMethodAccessor15.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 99900,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "002-Validate Elite Registration page if value of required field is missing",
  "description": "",
  "id": "--logi-webcast-registration-page;002-validate-elite-registration-page-if-value-of-required-field-is-missing",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "user deletes all cookies",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user launches registration page url \"registrationUrl\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "verify Registration page has been loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "verify title \"Event Registration\" is displayed on Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user clicks on \"Register\" button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "verify tooltip \"This is a required field\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.user_deletes_all_cookies()"
});
formatter.result({
  "duration": 13517249,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:780)\r\n\tat demo.base.common.Common.deleteAllCookiesExample(Common.java)\r\n\tat demo.test.testSteps.WebcastRegistrationPageSteps.user_deletes_all_cookies(WebcastRegistrationPageSteps.java)\r\n\tat ✽.When user deletes all cookies(webcastRegistrationPage.feature:30)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "registrationUrl",
      "offset": 37
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_launches_registration_page_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.verify_Registration_page_has_been_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Event Registration",
      "offset": 14
    }
  ],
  "location": "WebcastRegistrationPageSteps.verify_title_is_displayed_on_Registration_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 16
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_clicks_on_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a required field",
      "offset": 16
    }
  ],
  "location": "WebcastRegistrationPageSteps.verify_tooltip(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3042939418,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.refresh(RemoteWebDriver.java:957)\r\n\tat demo.base.common.Common.refresh(Common.java)\r\n\tat demo.test.testSteps.GlobalSteps.afterScenario(GlobalSteps.java)\r\n\tat sun.reflect.GeneratedMethodAccessor15.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 107085,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "003-Verification of login by clicking Already Registered link",
  "description": "",
  "id": "--logi-webcast-registration-page;003-verification-of-login-by-clicking-already-registered-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "user deletes all cookies",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user launches registration page url \"registrationUrl\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "verify Registration page has been loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "verify title \"Event Registration\" is displayed on Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user clicks on \"alreadyRegLink\" link",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user enters email-id in email text box and clicks on login button",
  "keyword": "When "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.user_deletes_all_cookies()"
});
formatter.result({
  "duration": 14219283,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:780)\r\n\tat demo.base.common.Common.deleteAllCookiesExample(Common.java)\r\n\tat demo.test.testSteps.WebcastRegistrationPageSteps.user_deletes_all_cookies(WebcastRegistrationPageSteps.java)\r\n\tat ✽.When user deletes all cookies(webcastRegistrationPage.feature:39)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "registrationUrl",
      "offset": 37
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_launches_registration_page_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.verify_Registration_page_has_been_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Event Registration",
      "offset": 14
    }
  ],
  "location": "WebcastRegistrationPageSteps.verify_title_is_displayed_on_Registration_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "alreadyRegLink",
      "offset": 16
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_clicks_on_link(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.user_enters_email_id_in_email_text_box_and_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3050934815,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.refresh(RemoteWebDriver.java:957)\r\n\tat demo.base.common.Common.refresh(Common.java)\r\n\tat demo.test.testSteps.GlobalSteps.afterScenario(GlobalSteps.java)\r\n\tat sun.reflect.GeneratedMethodAccessor15.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 46,
      "value": "#Then verify login done successfully"
    }
  ],
  "line": 48,
  "name": "004-Verify Registration with multiple users",
  "description": "",
  "id": "--logi-webcast-registration-page;004-verify-registration-with-multiple-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "user deletes all cookies",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "user launches registration page url \"registrationUrl\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "verify Registration page has been loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "verify title \"Event Registration\" is displayed on Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "user enters first name in \"Firstname\" text box",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "user enters last name in \"\u003cLastname\u003e\" text box",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "user enters desired email id in \"Email\" text box",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "user enters company name in \"\u003ccompany\u003e\" text box",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "user selects title as senior director from \"\u003cTitle\u003e\" dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "user selects industry as education from \"\u003cIndustry\u003e\" dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "user enters Street into \"\u003cStreet address1\u003e\" text box",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "user enters City into \"\u003cCity\u003e\" text box",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "user enters State into \"\u003cState\u003e\" text box",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "user enters Postal code into \"\u003cPostal Code\u003e\" text box",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "user selects India as country from \"\u003cCountry\u003e\" dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "user enters 6654748569 as work phone number in \"\u003cWork Phone\u003e\" text box",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "user selects 500-999 from \"\u003ccompany size\u003e\" drop down",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "user enters QA Engineer into \"\u003cJob function\u003e\" text box",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "user checks \"\u003cOpt Out Event\u003e\" checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "user clicks on \"Register\" button",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "verify registration done successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 71,
  "name": "",
  "description": "",
  "id": "--logi-webcast-registration-page;004-verify-registration-with-multiple-users;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "company",
        "Title",
        "Industry",
        "Street address1",
        "City",
        "State",
        "Postal Code",
        "Country",
        "Work Phone",
        "company size",
        "Job function",
        "Opt Out Event"
      ],
      "line": 72,
      "id": "--logi-webcast-registration-page;004-verify-registration-with-multiple-users;;1"
    },
    {
      "cells": [
        "F_Name",
        "L_name",
        "ON24",
        "Senior Director",
        "Education",
        "Street One",
        "Indore",
        "Madhya Pradesh",
        "452002",
        "India",
        "6654748569",
        "500-999",
        "QA Engineer",
        "Y"
      ],
      "line": 73,
      "id": "--logi-webcast-registration-page;004-verify-registration-with-multiple-users;;2"
    },
    {
      "cells": [
        "F_Name1",
        "L_name1",
        "LMS",
        "Senior Director",
        "Education",
        "Street Two",
        "Mumbai",
        "Maharashtra",
        "452111",
        "USA",
        "6654748570",
        "500-999",
        "QA Engineer",
        "Y"
      ],
      "line": 74,
      "id": "--logi-webcast-registration-page;004-verify-registration-with-multiple-users;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 43107,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "004-Verify Registration with multiple users",
  "description": "",
  "id": "--logi-webcast-registration-page;004-verify-registration-with-multiple-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@WebcastRegistration"
    },
    {
      "line": 47,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "user deletes all cookies",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "user launches registration page url \"registrationUrl\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "verify Registration page has been loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "verify title \"Event Registration\" is displayed on Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "user enters first name in \"Firstname\" text box",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "user enters last name in \"L_name\" text box",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "user enters desired email id in \"Email\" text box",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "user enters company name in \"ON24\" text box",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "user selects title as senior director from \"Senior Director\" dropdown",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "user selects industry as education from \"Education\" dropdown",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "user enters Street into \"Street One\" text box",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "user enters City into \"Indore\" text box",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "user enters State into \"Madhya Pradesh\" text box",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "user enters Postal code into \"452002\" text box",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "user selects India as country from \"India\" dropdown",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "user enters 6654748569 as work phone number in \"6654748569\" text box",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "user selects 500-999 from \"500-999\" drop down",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "user enters QA Engineer into \"QA Engineer\" text box",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "user checks \"Y\" checkbox",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "user clicks on \"Register\" button",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "verify registration done successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.user_deletes_all_cookies()"
});
formatter.result({
  "duration": 11858641,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:780)\r\n\tat demo.base.common.Common.deleteAllCookiesExample(Common.java)\r\n\tat demo.test.testSteps.WebcastRegistrationPageSteps.user_deletes_all_cookies(WebcastRegistrationPageSteps.java)\r\n\tat ✽.When user deletes all cookies(webcastRegistrationPage.feature:49)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "registrationUrl",
      "offset": 37
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_launches_registration_page_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.verify_Registration_page_has_been_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Event Registration",
      "offset": 14
    }
  ],
  "location": "WebcastRegistrationPageSteps.verify_title_is_displayed_on_Registration_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Firstname",
      "offset": 27
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_first_name_in_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "L_name",
      "offset": 26
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_last_name_in_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 33
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_desired_email_id_in_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ON24",
      "offset": 29
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_company_name_in_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Senior Director",
      "offset": 44
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_selects_title_as_senior_director_from_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Education",
      "offset": 41
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_selects_industry_as_education_from_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Street One",
      "offset": 25
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_Street_into_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Indore",
      "offset": 23
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_City_into_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Madhya Pradesh",
      "offset": 24
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_State_into_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "452002",
      "offset": 30
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_Postal_code_into_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 36
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_selects_India_as_country_from_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "6654748569",
      "offset": 12
    },
    {
      "val": "6654748569",
      "offset": 48
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_as_work_phone_number_in_text_box(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 13
    },
    {
      "val": "999",
      "offset": 17
    },
    {
      "val": "500-999",
      "offset": 27
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_selects_from_drop_down(int,int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "QA Engineer",
      "offset": 30
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_QA_Engineer_into_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Y",
      "offset": 13
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_checks_checkbox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 16
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_clicks_on_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.verify_registration_done_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3051413101,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.refresh(RemoteWebDriver.java:957)\r\n\tat demo.base.common.Common.refresh(Common.java)\r\n\tat demo.test.testSteps.GlobalSteps.afterScenario(GlobalSteps.java)\r\n\tat sun.reflect.GeneratedMethodAccessor15.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 102637,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "004-Verify Registration with multiple users",
  "description": "",
  "id": "--logi-webcast-registration-page;004-verify-registration-with-multiple-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@WebcastRegistration"
    },
    {
      "line": 47,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "user deletes all cookies",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "user launches registration page url \"registrationUrl\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "verify Registration page has been loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "verify title \"Event Registration\" is displayed on Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "user enters first name in \"Firstname\" text box",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "user enters last name in \"L_name1\" text box",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "user enters desired email id in \"Email\" text box",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "user enters company name in \"LMS\" text box",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "user selects title as senior director from \"Senior Director\" dropdown",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "user selects industry as education from \"Education\" dropdown",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "user enters Street into \"Street Two\" text box",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "user enters City into \"Mumbai\" text box",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "user enters State into \"Maharashtra\" text box",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "user enters Postal code into \"452111\" text box",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "user selects India as country from \"USA\" dropdown",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "user enters 6654748569 as work phone number in \"6654748570\" text box",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "user selects 500-999 from \"500-999\" drop down",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "user enters QA Engineer into \"QA Engineer\" text box",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "user checks \"Y\" checkbox",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "user clicks on \"Register\" button",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "verify registration done successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.user_deletes_all_cookies()"
});
formatter.result({
  "duration": 8189722,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:780)\r\n\tat demo.base.common.Common.deleteAllCookiesExample(Common.java)\r\n\tat demo.test.testSteps.WebcastRegistrationPageSteps.user_deletes_all_cookies(WebcastRegistrationPageSteps.java)\r\n\tat ✽.When user deletes all cookies(webcastRegistrationPage.feature:49)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "registrationUrl",
      "offset": 37
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_launches_registration_page_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.verify_Registration_page_has_been_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Event Registration",
      "offset": 14
    }
  ],
  "location": "WebcastRegistrationPageSteps.verify_title_is_displayed_on_Registration_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Firstname",
      "offset": 27
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_first_name_in_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "L_name1",
      "offset": 26
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_last_name_in_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 33
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_desired_email_id_in_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "LMS",
      "offset": 29
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_company_name_in_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Senior Director",
      "offset": 44
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_selects_title_as_senior_director_from_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Education",
      "offset": 41
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_selects_industry_as_education_from_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Street Two",
      "offset": 25
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_Street_into_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mumbai",
      "offset": 23
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_City_into_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Maharashtra",
      "offset": 24
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_State_into_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "452111",
      "offset": 30
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_Postal_code_into_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "USA",
      "offset": 36
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_selects_India_as_country_from_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "6654748569",
      "offset": 12
    },
    {
      "val": "6654748570",
      "offset": 48
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_as_work_phone_number_in_text_box(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 13
    },
    {
      "val": "999",
      "offset": 17
    },
    {
      "val": "500-999",
      "offset": 27
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_selects_from_drop_down(int,int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "QA Engineer",
      "offset": 30
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_enters_QA_Engineer_into_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Y",
      "offset": 13
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_checks_checkbox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 16
    }
  ],
  "location": "WebcastRegistrationPageSteps.user_clicks_on_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebcastRegistrationPageSteps.verify_registration_done_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3048907741,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.0\u0027, revision: \u00278def36e068\u0027, time: \u00272017-08-10T23:00:22.093Z\u0027\nSystem info: host: \u0027LMS\u0027, ip: \u002710.4.16.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\SUDHAN~1\\AppData\\Local\\Temp\\scoped_dir4248_21687}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edda64463b84951d0bbb82c877ca65a2\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.refresh(RemoteWebDriver.java:957)\r\n\tat demo.base.common.Common.refresh(Common.java)\r\n\tat demo.test.testSteps.GlobalSteps.afterScenario(GlobalSteps.java)\r\n\tat sun.reflect.GeneratedMethodAccessor15.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
});