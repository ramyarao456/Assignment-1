Feature: Computer Mode

Scenario: Verify the display of Play of Computer mode 
    When I visit the Main Page
    When I click on Play of Computer mode I should go to game page
    Then I play the game where the match is a draw
    