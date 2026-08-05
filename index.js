import org.openqa.selenium.By; 
import org.openqa.selenium.WebDriver; 
import org.openqa.selenium.WebElement; 
import org.openqa.selenium.chrome.ChromeDriver; 
public class AmazonUserRegistrationTest { 
public static void main(String[] args) { 
// Set up the WebDriver 
System.setProperty("webdriver.chrome.driver", "path/to/chromedriver"); 
WebDriver driver = new ChromeDriver(); 
 
// Step 1: Navigate to Amazon registration page 
driver.get("https://www.amazon.com/"); 
 
// Step 2: Click on "Hello, Sign in" button 
WebElement signInButton = driver.findElement(By.id("nav-signin-tooltip")); 
signInButton.click(); 
 
// Step 3: Click on "Create your Amazon account" 
WebElement createAccountButton = driver.findElement(By.id("createAccountSubmit")); 
createAccountButton.click(); 
 
// Step 4: Fill in registration details 
WebElement nameInput = driver.findElement(By.id("ap_customer_name")); 
13 
nameInput.sendKeys("John Doe"); 
WebElement emailInput = driver.findElement(By.id("ap_email")); 
emailInput.sendKeys("testuser@example.com"); 
WebElement passwordInput = driver.findElement(By.id("ap_password")); 
passwordInput.sendKeys("password123"); 
WebElement confirmPasswordInput = driver.findElement(By.id("ap_password_check")); 
confirmPasswordInput.sendKeys("password123"); 
// Step 5: Click on "Create your Amazon account" 
WebElement finalCreateAccountButton = driver.findElement(By.id("continue")); 
finalCreateAccountButton.click(); 
// Step 6: Verification (based on success or failure) 
WebElement successMessage = driver.findElement(By.className("a-alert-heading")); 
if (successMessage.isDisplayed()) { 
System.out.println("User registration successful"); 
} else { 
System.out.println("User registration failed"); 
} 
// Close the browser 
driver.quit(); 
} 
}