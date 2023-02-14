import LandingPage from "../../BasePage.cy";
import FxPage from "../PageObjects/FxPage.cy";
import HomePage from "../PageObjects/HomePage.cy"
import SearchResultsPage from "../PageObjects/SearchResultsPage.cy";

describe('Moneycorp Test Suit', () => {
    it(' Tests covering  Home Page,fx page, search page', () => {
      const lp = new LandingPage;
      const hp=new HomePage;
      const fp = new FxPage;
      const sp = new SearchResultsPage;

        lp.visit();
        hp.changeCountryAndLanguage();
        hp.verifyCountryAndLanguageChangedToUSA();
        fp.navigateToForeignExchangeSolPage();
        fp.searchForInternationalPayments();
        sp.verifyTheResultsPage();
        sp.verifyTheUrlHasBaseUrl();


    })
})