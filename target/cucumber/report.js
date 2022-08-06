$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BankAndCashNewAccount.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@NewAccountFeature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters account title as \"\u003caccTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters description as \"\u003cdesc\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters initial balance as \"\u003cinitbalance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters account number as \"\u003caccnum\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters contact person as \"\u003ccontperson\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters phone as \"\u003cphn\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters internet banking url as \"\u003curl\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on newAccount button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accTitle",
        "desc",
        "initbalance",
        "accnum",
        "contperson",
        "phn",
        "url"
      ],
      "line": 23,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "sav account",
        "sav fund",
        "2875455",
        "4587121463",
        "hfigfjhvb",
        "1478532587",
        "https://www.techfios.com/portal/instructor/class_list.php"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3273504400,
  "status": "passed"
});
formatter.before({
  "duration": 1355167800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@NewAccountFeature"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters account title as \"sav account\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters description as \"sav fund\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters initial balance as \"2875455\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters account number as \"4587121463\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters contact person as \"hfigfjhvb\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters phone as \"1478532587\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters internet banking url as \"https://www.techfios.com/portal/instructor/class_list.php\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on newAccount button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "NewAccountStepDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 1008422400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "NewAccountStepDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 125807900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "NewAccountStepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 107426800,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 857613300,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 10154600,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDefinition.user_clicks_on_bankCash()"
});
formatter.result({
  "duration": 326428500,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDefinition.user_click_on_newAccount()"
});
formatter.result({
  "duration": 714805000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sav account",
      "offset": 30
    }
  ],
  "location": "NewAccountStepDefinition.user_enters_account_title_as(String)"
});
formatter.result({
  "duration": 166584900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sav fund",
      "offset": 28
    }
  ],
  "location": "NewAccountStepDefinition.user_enters_description_as(String)"
});
formatter.result({
  "duration": 123539000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2875455",
      "offset": 32
    }
  ],
  "location": "NewAccountStepDefinition.user_enters_initial_balance_as(String)"
});
formatter.result({
  "duration": 163796900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4587121463",
      "offset": 31
    }
  ],
  "location": "NewAccountStepDefinition.user_enters_account_number_as(String)"
});
formatter.result({
  "duration": 163276400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hfigfjhvb",
      "offset": 31
    }
  ],
  "location": "NewAccountStepDefinition.user_enters_contact_person_as(String)"
});
formatter.result({
  "duration": 132877900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1478532587",
      "offset": 22
    }
  ],
  "location": "NewAccountStepDefinition.user_enters_phone_as(String)"
});
formatter.result({
  "duration": 134184100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.techfios.com/portal/instructor/class_list.php",
      "offset": 37
    }
  ],
  "location": "NewAccountStepDefinition.user_enters_internet_banking_url_as(String)"
});
formatter.result({
  "duration": 206271900,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDefinition.user_clicks_on_newAccount_button()"
});
formatter.result({
  "duration": 673511800,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 86652500,
  "status": "passed"
});
formatter.after({
  "duration": 661953900,
  "status": "passed"
});
formatter.after({
  "duration": 724269600,
  "status": "passed"
});
});