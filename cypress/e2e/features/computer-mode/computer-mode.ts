///   <reference types="cypress" />

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

When("I visit the Main Page",()=>{
    cy.visit("/");
});

When("I click on Play of Computer mode I should go to game page",()=>{
    cy.get("img").eq(0).click();
});

Then("I play the game where the match is a draw",()=>{
    cy.get(".cell").eq(1).click();
    cy.get(".cell").eq(4).click();
    cy.get(".cell").eq(6).click();
    cy.get(".cell").eq(8).click();
    cy.get(".cell").eq(5).click();
    cy.get(".text").should("contain","Tie Game")
    cy.get("button").click();
});

