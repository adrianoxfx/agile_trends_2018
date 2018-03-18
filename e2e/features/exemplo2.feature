# language: en
# featurebookDisplayName: Exemplo 2


Feature: Eating Cucumbers

  ![Cucumber](asset://images/cucumber_cat.jpeg)

  Scenario Outline: Eating
    Given there are <start> cucumbers
    When I eat <eat> cucumbers
    Then I should have <left> cucumbers

    Examples:
      | start | eat | left |
      |  12   |  5  |  7   |
      |  20   |  5  |  15  |
