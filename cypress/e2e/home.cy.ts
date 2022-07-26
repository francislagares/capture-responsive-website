describe('Home', () => {
  it('shows the home page without crashing', () => {
    cy.visit('/');
    cy.findByRole('heading', { name: /captur photography/i }).should('exist');
  });
});

const asModule = {};
export default asModule;
