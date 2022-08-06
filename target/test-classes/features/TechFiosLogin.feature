@LoginFeature
Feature: TechFios Login functionality validation
	
	Background: 
	Given User is on TechFios login page 
	
  Scenario: User should be able to login with correct credential
    
    When User enter username as "demo@techfios.com"
    When User enter password as "abc123"
    When User click on submit button
    Then User should land on dashboard page
    
    Scenario: User should be able to login with correct credential
    
    When User enter username as "demo@techfios.com"
    When User enter password as "abc124"
    When User click on submit button
    Then User should land on dashboard page
