$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TestDemo.feature");
formatter.feature({
  "line": 1,
  "name": "- Test Demo",
  "description": "",
  "id": "--test-demo",
  "keyword": "Feature"
});
formatter.before({
  "duration": 143692,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "004 - Verify sum of all data of one row and verify with total",
  "description": "",
  "id": "--test-demo;004---verify-sum-of-all-data-of-one-row-and-verify-with-total",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@test001"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "user opens dev report page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "verify sum of all rows should be equal to total for PMXD project",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDemo.user_opens_dev_report_page()"
});
formatter.result({
  "duration": 37085141104,
  "status": "passed"
});
formatter.match({
  "location": "TestDemo.verify_sum_of_all_rows_should_be_equal_to_total_for_PMXD_project()"
});
formatter.result({
  "duration": 272331998,
  "status": "passed"
});
formatter.after({
  "duration": 142323,
  "status": "passed"
});
});