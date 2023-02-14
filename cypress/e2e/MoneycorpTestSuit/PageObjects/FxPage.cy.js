

class FxPage {
    // Click Find out more to Navigate to the foreign exchange solutions 
    navigateToForeignExchangeSolPage() {
        cy.scrollTo('center')
        cy.contains('Find out more').click();
        cy.contains('h1', 'Foreign exchange solutions for your business');
    }
    // Search for the word "international payments"

    searchForInternationalPayments() {

        cy.get('.c-hamburger').click();
        cy.get('.nav-search-bar #nav_search').click();
        cy.get('.nav-search-bar #nav_search').type('international payments');
        
        cy.get('.nav-search-bar input:nth-child(2)').click();
        cy.get('button[id="onetrust-accept-btn-handler"]').click();
        cy.url().should('contains', 'https://www.moneycorp.com/en-us/search/');


    }
}
export default FxPage;

//export default FxPage;