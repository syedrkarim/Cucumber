package stepdefinitions;

import org.openqa.selenium.support.PageFactory;

import base.TestBase;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.LoginPage;
import utility.TestUtility;

public class LoginStepDefinition extends TestBase {
	LoginPage loginPageObj;
	
	@Before
	public void setUp() {
		initDriver();
		loginPageObj = PageFactory.initElements(driver, LoginPage.class);	
	}

	@Given("^User is on TechFios login page$")
	public void user_is_on_TechFios_login_page() {
		driver.get("https://techfios.com/billing/?ng=admin/");
	}

	@When("^User enter username as \"([^\"]*)\"$")
	public void user_enter_username_as(String username) {
		
		loginPageObj.enterUserName(username);
	}

	@When("^User enter password as \"([^\"]*)\"$")
	public void user_enter_password_as(String password) {
		loginPageObj.enterPassword(password);
	}

	@When("^User click on submit button$")
	public void user_click_on_submit_button() {
		loginPageObj.clickSignInButton();
	}

	@Then("^User should land on dashboard page$")
	public void user_should_land_on_dashboard_page() {
		Assert.assertEquals("Dashboard- iBilling", loginPageObj.getPageTitle());
		TestUtility.screenShot(driver, "login");
	}
	
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}

}
