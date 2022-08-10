@LoginFeature
Feature: TechFios Login functionality validation

  Background: 
    Given User is on TechFios login page

  Scenario: User should be able to login with correct credential
    When User enters username as "demo@techfios.com"
    When User enters password as "abc123"
    And User clicks on login button
    Then User should land on Dashboard page

  Scenario: User should not be able to login with incorrect credential
    When User enters username as "demo@techfios.com"
    When User enters password as "abc124"
    And User clicks on login button
    Then User should land on Dashboard page
