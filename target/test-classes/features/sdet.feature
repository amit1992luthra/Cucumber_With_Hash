Feature: google search functionality

  Background: Open the browser and navigate to the google page
  Given User navigates to Google Page
    

  @smoke @regression
  Scenario Outline: Write String in Google Search Textbox
  	
    When User Enter String in search box of google "<value>"
    Then The Results will Display "<sample>" , "<sample2>"

    Examples: 
      | value | sample       | sample2        |
      | IBM   | samplestring | samplestring 2 |
      | IBM   | samplestring | samplestring 2 |
@smoke
  Scenario Outline: Write String in Google Search Textbox for background example
    When User Enter String in search box of google for background example "<value>"
    Then The Results will Display for background example "<sample>" , "<sample2>"

    Examples: 
      | value   | sample       | sample2        |
      | Manipal | samplestring | samplestring 2 |
      | amit    | samplestring | samplestring 2 |
