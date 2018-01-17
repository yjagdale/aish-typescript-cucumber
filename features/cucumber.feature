Feature: To search cucumber in google

@CucumberScenario
Scenario: Validate login by user
Given I am on Login Page
When I enter username as "user1.@mailinator.com"
When I enter password as "Password1"
When I click on sign in button
Then I get User Manager Page