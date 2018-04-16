
Feature: Jim's Star Wars Lambda Function
  The lambda function accepts an integer 1-10 and returns data about corresponding Star Wars character.

  Scenario: Correctly returns data about Luke Skywalker.
    Given a REST client
    When the function is called with query params "character=1"
    Then it should return the data object containing name, hairColor, eyeColor with Luke Skywalker data.

  Scenario: Correctly returns error message.
    Given a REST client
    When the function is called with bad query params, such as "character=4000"
    Then it should return the an object with key named "error" whose value is an error message.