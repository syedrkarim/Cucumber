package stepdefinitions;

import org.openqa.selenium.support.PageFactory;

import base.TestBase;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.AccountsPage;
import pages.DashboardPage;
import pages.LoginPage;
import utility.TestUtility;

public class NewAccountStepDefinition extends TestBase {
	
	LoginPage loginPageObj;
	DashboardPage dashBoardObj;
	AccountsPage accountPageObj;
	
	@Before
	public void setUp() {
		initDriver();
		loginPageObj = PageFactory.initElements(driver, LoginPage.class);
		dashBoardObj= PageFactory.initElements(driver, DashboardPage.class);
		accountPageObj=PageFactory.initElements(driver, AccountsPage.class);
	}

	
	@Given("^User is on TechFios login page$")
	public void user_is_on_TechFios_login_page() {
		driver.get("https://techfios.com/billing/?ng=admin/");
	}
	
	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) {
		loginPageObj.enterUserName(username);
	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) {
		loginPageObj.enterPassword(password);
	}

	@When("^User clicks on login button$")
	public void user_clicks_on_login_button() {
		loginPageObj.clickSignInButton();
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() {
		Assert.assertEquals("Dashboard- iBilling", loginPageObj.getPageTitle());
	}

	@Then("^User clicks on bankCash$")
	public void user_clicks_on_bankCash() {
		dashBoardObj.clickbankAndCash();
	}

	@Then("^User click on newAccount$")
	public void user_click_on_newAccount() {
		dashBoardObj.clickNewAccount();
	}

	@Then("^User enters account title as \"([^\"]*)\"$")
	public void user_enters_account_title_as(String accTitle) {
		accountPageObj.enterAccountTitle(accTitle+TestUtility.generateRandomNumber(99999));
	}

	@Then("^User enters description as \"([^\"]*)\"$")
	public void user_enters_description_as(String desc) {
		accountPageObj.enterDescription(desc);
	}

	@Then("^User enters initial balance as \"([^\"]*)\"$")
	public void user_enters_initial_balance_as(String initbalance) {
		accountPageObj.enterInitialBalance(initbalance+TestUtility.generateRandomNumber(99999));
	}

	@Then("^User enters account number as \"([^\"]*)\"$")
	public void user_enters_account_number_as(String accnum) {
		accountPageObj.enterAccountNumber(accnum+TestUtility.generateRandomNumber(99999));
	}

	@Then("^User enters contact person as \"([^\"]*)\"$")
	public void user_enters_contact_person_as(String contperson) {
		accountPageObj.enterContactPerson(contperson);
	}

	@Then("^User enters phone as \"([^\"]*)\"$")
	public void user_enters_phone_as(String phn) {
		accountPageObj.enterPhone(phn);
	}

	@Then("^User enters internet banking url as \"([^\"]*)\"$")
	public void user_enters_internet_banking_url_as(String url) {
		accountPageObj.enterBankingUrl(url);
	}

	@Then("^User clicks on newAccount button$")
	public void user_clicks_on_newAccount_button() {
		accountPageObj.clickButton();
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() {
		Assert.assertTrue(accountPageObj.getMessage());
	}
	
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}

}
