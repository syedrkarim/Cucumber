package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AccountsPage {

	
	WebDriver driver;
	
	public AccountsPage(WebDriver driver) {
		this.driver = driver;
	}
	
	@FindBy(xpath = "//input[@id='account']")
	WebElement accountTitle;
	
	@FindBy(xpath = "//input[@id='description']")
	WebElement description;
	
	@FindBy(xpath = "//input[@id='balance']")
	WebElement initialBalance;
	
	@FindBy(xpath = "//input[@id='account_number']")
	WebElement accountNumber;
	
	@FindBy(xpath = "//input[@id='contact_person']")
	WebElement contactPerson;
	
	@FindBy(xpath = "//input[@id='contact_phone']")
	WebElement phone;
	
	@FindBy(xpath = "//input[@id='ib_url']")
	WebElement bankingUrl;
	
	@FindBy(xpath = "//button[@class='btn btn-primary']")
	WebElement button;
	
	@FindBy(xpath = "//div[@class='alert alert-success fade in']/i")
	WebElement chkBox;
	
	public void enterAccountTitle(String accTitle) {
		accountTitle.sendKeys(accTitle);
	}
	
	public void enterDescription(String desc) {
		description.sendKeys(desc);
	}
	
	public void enterInitialBalance(String initbalance) {
		initialBalance.sendKeys(initbalance);
	}
	
	public void enterAccountNumber(String accnum) {
		accountNumber.sendKeys(accnum);
	}
	
	public void enterContactPerson(String contperson) {
		contactPerson.sendKeys(contperson);
	}
	
	public void enterPhone(String phn) {
		phone.sendKeys(phn);
	}
	
	public void enterBankingUrl(String url) {
		bankingUrl.sendKeys(url);
	}
	
	public void clickButton() {
		button.click();
	}
	
	public boolean getMessage() {
		return chkBox.isDisplayed();
	}

	
	
}
