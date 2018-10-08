package demo.test.testRunner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
 

@RunWith(Cucumber.class)
@CucumberOptions(tags = {"@test001"}, features = "cucumber", monochrome = true, dryRun = false
, strict = true, glue = "demo.test.testSteps", format = {
		"pretty", "html:report/report.html","json:target/cucumber.json"})
public class TestRunner {

	@BeforeClass
	public static void setUp() throws Exception {
		TestBase.setUp();
	}

	@AfterClass
	public static void tearDown() throws Exception {
		TestBase.tearDown();
	}
}