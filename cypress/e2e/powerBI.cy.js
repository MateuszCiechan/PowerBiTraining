import { selectors as SMainDashboard } from '../support/selectors/mainDashboardPage.po'

describe('template spec', () => {
  it('verify if user time allocation contains nine columns', () => {
    cy.visit('/0e528a98-e63c-46ce-b8a2-1b9ee2991024');
    cy.get(SMainDashboard.myForecastTile).click();
    cy.wait(5000);
    cy.get(SMainDashboard.userTimeAllocationTiles).first().find(SMainDashboard.rectangleColumnInSerie).should('have.length', 9);
  })
})