package utility;

import java.io.File;
import java.io.IOException;
import java.util.Random;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class TestUtility {

	public static void screenShot(WebDriver driver, String fileName) {

		TakesScreenshot ts = (TakesScreenshot) driver;
		File source = ts.getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(source, new File("./Screenshots/" + fileName + ".png"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public static int generateRandomNumber(int bound) {
		Random rand = new Random();
		int randomNumber = rand.nextInt(bound);
		return randomNumber;
	}

}
