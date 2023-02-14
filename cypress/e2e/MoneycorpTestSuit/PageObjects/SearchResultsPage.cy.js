import { contains } from "cypress/types/jquery";

class ResultsPage {

    // Verify that the results page has loaded
    verifyTheResultsPage() {
       cy.get('.chosen-select').should('have.value', 'international payments');
  
    }
  
    // Verify that each article in the list has a link that starts with "https://www.moneycorp.com/en-us/"
    verifyTheUrlHasBaseUrl() {
      cy.get('.results').each( (item, index) => {
        cy.wrap(item).contains('https://www.moneycorp.com/en-us/')// .should("have.attr", "href").contains('https://www.moneycorp.com/en-us/');
       
        //('contain.url', 'https://www.moneycorp.com/en-us/')
      })
      

     /* cy.contains('Regular International Payments').click();
      cy.get('[aria-label$="Regular International Payments"]')
        .find("a")
        .should("have.attr", "href", "'https://www.moneycorp.com/en-us/")*/
    }
  }
  export default ResultsPage;