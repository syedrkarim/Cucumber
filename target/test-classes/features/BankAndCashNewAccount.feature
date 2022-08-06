@NewAccountFeature
Feature: Techfios bank and cash New Account Functionality

  Scenario Outline: User should be able to login with valid credentials and open a new account
    Given User is on the techfios login page
    When User enters username as "<username>"
    When User enters password as "<password>"
    And User clicks on login button
    Then User should land on Dashboard page
    And User clicks on bankCash
    And User click on newAccount
    And User enters account title as "<accTitle>"
    And User enters description as "<desc>"
    And User enters initial balance as "<initbalance>"
    And User enters account number as "<accnum>"
    And User enters contact person as "<contperson>"
    And User enters phone as "<phn>"
    And User enters internet banking url as "<url>"
    And User clicks on newAccount button
    Then User should be able to validate account created successfully

    Examples: 
      | username          | password | accTitle          | desc             | initbalance | accnum     | contperson | phn        | url                                                       |
      | demo@techfios.com | abc123   | sav account       | sav fund         | 2875455     | 4587121463 | hfigfjhvb  | 1478532587 | https://www.techfios.com/portal/instructor/class_list.php |
