///   <reference types="cypress" />

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

When("I visit the Main Page",()=>{
    cy.visit("/index.html");
});

Then("I should see {string} on Main Page",()=>{
    cy.get(".tooltip h2").should("be.visible");
});

Then("I should see {string} label",(label:string)=>{
    cy.get("section h2").eq(1).should("be.visible").should("have.text",label);
});

When("I click on Offline-Multiplayer I should be on the game page",()=>{
    cy.get("a img").eq(1).click();
});

Then("the first move should always be {string}",()=>{
    cy.get(".cell").eq(2).click().should("be.visible");
});
    
Then("I should be able to click {string} after the first move",()=>{
    cy.get(".cell").eq(4).click().should("be.visible");
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

Then("I should see the first game should be tied and I should see {string} Button when the game is over",()=>{
    cy.get(".cell").eq(2).click()
    .get(".cell").eq(3).click()
    .get(".cell").eq(4).click()
    .get(".cell").eq(6).click()
    .get(".cell").eq(0).click()
    .get(".cell").eq(8).click()
    .get(".cell").eq(7).click()
    .get(".cell").eq(1).click()
    .get(".cell").eq(5).click()
    .get("#restartButton").should("be.visible")
});


Then("The second game where X wins and I should see {string} Button when the game is over",()=>{
    cy.get(".cell").eq(0).click()
    .get(".cell").eq(4).click()
    .get(".cell").eq(8).click()
    .get(".cell").eq(7).click()
    .get(".cell").eq(1).click()
    .get(".cell").eq(3).click()
    .get(".cell").eq(5).click()
    .get(".cell").eq(6).click()
    .get(".cell").eq(2).click()
    .get("#restartButton").should("be.visible")
});


Then("The third game where O wins and I should see {string} Button when the game is over",()=>{
    cy.get(".cell").eq(1).click()
    .get(".cell").eq(7).click()
    .get(".cell").eq(4).click()
    .get(".cell").eq(6).click()
    .get(".cell").eq(8).click()
    .get(".cell").eq(3).click()
    .get(".cell").eq(5).click()
    .get(".cell").eq(0).click()
    .get("#restartButton").should("be.visible").click()
 });



