import { When } from "@badeball/cypress-cucumber-preprocessor";
//import { activeLink, link } from "../../support/pageObjects/commonObjects";

When("I visit the Home Page", () => {
  cy.visit("/");
});