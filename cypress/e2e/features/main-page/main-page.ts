///   <reference types="cypress" />

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

When("I visit the Main Page",()=>{
    cy.visit("/");
});

Then("I should see Play with Computer on Main Page",()=>{
    cy.get(".tooltip h2").should("be.visible");
});

Then("I should see {string} label",(label:string)=>{
    cy.get("section h2").eq(1).should("be.visible").should("have.text",label);
});

When("I click on Offline-Multiplayer I should be on the game page",()=>{
    cy.get("a img").eq(1).click();
});

Then("the first move should always be X",()=>{
    cy.get(".cell").should("be.visible");
    cy.get(".x").click().should("be.visible");
});
    
Then("I should be able to click O after the first move",()=>{
    cy.get(".cell").eq(2).click();
    cy.get(".circle").click().should("be.visible");
});

Then("Test that one should not be able to click on an already marked cell again",()=>{
    cy.get(".cell").eq(0).click();
    cy.get(".cell").eq(0).should("not.be.enabled");
});

Then("Check that both X and O are visible in the UI once they are marked on the table",()=>{
    cy.get(".cell").eq(2).click().should("be.visible");
    cy.get(".cell").eq(4).click().should("be.visible");
    cy.get(".cell").eq(0).click().should("be.visible");
});

Then("I should see the first game should be tied",()=>{
    cy.get(".cell").eq(2).click();
    cy.get(".cell").eq(3).click();
    cy.get(".cell").eq(4).click();
    cy.get(".cell").eq(6).click();
    cy.get(".cell").eq(0).click();
    cy.get(".cell").eq(8).click();
    cy.get(".cell").eq(7).click();
    cy.get(".cell").eq(1).click();
    cy.get(".cell").eq(5).click();
    cy.get("#restartButton").click();
});

Then("I should see the second game where X wins",()=>{
    cy.get(".cell").eq(0).click();
    cy.get(".cell").eq(4).click();
    cy.get(".cell").eq(8).click();
    cy.get(".cell").eq(7).click();
    cy.get(".cell").eq(1).click();
    cy.get(".cell").eq(3).click();
    cy.get(".cell").eq(5).click();
    cy.get(".cell").eq(6).click();
    cy.get(".cell").eq(2).click();
    cy.get("#restartButton").click();
});

Then("I should see the Third game where O wins",()=>{
    cy.get(".cell").eq(1).click();
    cy.get(".cell").eq(7).click();
    cy.get(".cell").eq(4).click();
    cy.get(".cell").eq(6).click();
    cy.get(".cell").eq(8).click();
    cy.get(".cell").eq(3).click();
    cy.get(".cell").eq(5).click();
    cy.get(".cell").eq(0).click();
    cy.get("#winningMessage").should("be.visible");
 });


Then("I should see the Restart button when the game is over",()=>{
    cy.get("#restartButton").should("be.visible");
});


When("I click on Play of Computer mode I should go to game page",()=>{
    cy.get("img").eq(0).click();
});

Then("I play the game where the match is tied",()=>{
    cy.get(".cell").eq(1).click();
    cy.get(".cell").eq(4).click();
    cy.get(".cell").eq(6).click();
    cy.get(".cell").eq(8).click();
    cy.get(".cell").eq(5).click();
    cy.get(".text").should("be.visible");
    cy.get("button").click();
});

When("I click on Play of Computer I should go to game page",()=>{
    cy.get("img").eq(0).click();
});

Then("I play the game where the match is a draw",()=>{
    cy.get(".cell").eq(1).click();
    cy.get(".cell").eq(4).click();
    cy.get(".cell").eq(6).click();
    cy.get(".cell").eq(8).click();
    cy.get(".cell").eq(5).click();
    cy.get(".text").should("be.visible");
    cy.get("button").click();
});