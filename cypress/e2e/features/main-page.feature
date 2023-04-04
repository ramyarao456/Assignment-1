Feature: Main Page

Scenario: Verify the display of Play with Computer and Offline-Multiplayer modes on Main Page
    When I visit the Main Page
    Then I should see 'Play with Computer' on Main Page
    Then  I should see 'Offline-Multiplayer' label
    When I click on Offline-Multiplayer I should be on the game page

Scenario: Verify the rules of the game
    When I visit the Main Page
    Then I click on Offline-Multiplayer I should be on the game page
    Then the first move should always be 'X'
    Then I should be able to click 'O' after the first move 
    Then Test that one should not be able to click on an already marked cell again
    Then Check that both X and O are visible in the UI once they are marked on the table
    
Scenario: Verify whether the First Game is tied 
    When I visit the Main Page
    Then I click on Offline-Multiplayer I should be on the game page
    Then the first move should always be 'X'
    Then I should be able to click 'O' after the first move
    Then The first game where the game is tied and I should see 'Restart' Button when the game is over
   
    
Scenario: Verify whether X wins in the Second Game
    When I visit the Main Page
    Then I click on Offline-Multiplayer I should be on the game page
    Then the first move should always be 'X'
    Then I should be able to click 'O' after the first move
    Then The second game where X wins and I should see 'Restart' Button when the game is over
     
    
Scenario: Verify whether O wins in the Third Game
    When I visit the Main Page
    Then I click on Offline-Multiplayer I should be on the game page
    Then the first move should always be 'X'
    Then I should be able to click 'O' after the first move
    Then The third game where O wins and I should see 'Restart' Button when the game is over
    
    




