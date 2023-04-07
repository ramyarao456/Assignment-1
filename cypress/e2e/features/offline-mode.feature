Feature: Offline multiplayer

Scenario: Scenario: Verify the display of two modes on Main Page
    When I visit the Main Page
    Then I should see two modes of game present 
    When I click on Offline-Multiplayer I should be on the game page

Scenario: Verify the rules of the game
    When I visit the Main Page
    Then I click on Offline-Multiplayer I should be on the game page
    Then the first move should always be X
    Then I should be able to click O after the first move 
    Then Test that one should not be able to click on an already marked cell again
    Then Check that both X and O are visible in the UI once they are marked on the table
    
Scenario: Verify whether the First Game is tied 
    Then I should see the first game should be tied
            
Scenario: Verify whether the Second Game is won by X
    Then I should see the second game where X wins

Scenario: Verify whether the Third Game is won by O
    Then I should see the Third game where O wins
    Then I should see the Restart button when the game is over




    
    




