///<refernce = 

class HomePage {
  // Change the language and region
  changeCountryAndLanguage() {
    cy.title().should('eq', 'Moneycorp | Global Payments');
    cy.get('button[id="language-dropdown-flag"]').click();
    cy.get('a[aria-label="USA English"] span[class="language"]').click();

  }

  // Verify that the language and region have changed
  verifyCountryAndLanguageChangedToUSA() {
    cy.url().should('include', '/en-us/');
    // cy.get(('span[class*="flag"]')).should('be.visible','src="/globalassets/images/icons/flags/united-states-of-america.svg');


  }

}

export default HomePage;
