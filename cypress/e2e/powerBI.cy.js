import { selectors as SMainDashboard } from '../support/selectors/mainDashboardPage.po';
import * as mockedClientData from '../fixtures/userData.json';

describe('template spec', () => {

  beforeEach(() => {
    cy.visit('/'+mockedClientData.userId);
  });

  it('verify if user time allocation contains nine columns', () => {
    cy.get(SMainDashboard.myForecastTile).click();
    cy.wait(5000);
    cy.get(SMainDashboard.seriesTiles).first().find(SMainDashboard.rectangleColumnInSerie).should('have.length', 9);
  })

  it('verify if util target chart has nine columns', () => {
    cy.get(SMainDashboard.myForecastTile).click();
    cy.wait(5000);
    cy.get(SMainDashboard.seriesTiles).eq(1).find(SMainDashboard.rectangleColumnInSerie).should('have.length', 9);
  })

})