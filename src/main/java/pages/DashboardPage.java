package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class DashboardPage {

	WebDriver driver;
	
	public DashboardPage(WebDriver driver) {
		this.driver = driver;
	}
	
	@FindBy(xpath = "//ul[@id='side-menu']/li[10]/a/span[1]")
	WebElement bankCash;
	
	@FindBy(xpath = "//ul[@id='side-menu']/li[10]/ul/li[1]/a")
	WebElement newAccount;
	
	@FindBy(xpath = "//div[@id='page-wrapper']/div[2]/div/h2")
	WebElement dashBoard;
	
	
	public void clickbankAndCash() {
		bankCash.click();	
	}
	
	public void clickNewAccount() {
		newAccount.click();
	}
}
