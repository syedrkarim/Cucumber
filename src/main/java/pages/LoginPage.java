package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage {

	WebDriver driver;

	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}

	// Element Library

	@FindBy(xpath = "//input[@id='username']")
	WebElement userName;

	@FindBy(xpath = "//input[@id='password']")
	WebElement passWord;

	@FindBy(xpath = "//button[@name='login']")
	WebElement signInButton;

	// Method to interact with the elements

	public void enterUserName(String username) {
		userName.sendKeys(username);
	}

	public void enterPassword(String password) {
		passWord.sendKeys(password);
	}

	public void clickSignInButton() {
		signInButton.click();
	}

	public String getPageTitle() {
		return driver.getTitle();

	}
}
