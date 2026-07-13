describe('UserForm submission', () => {
  beforeEach(() => {
    cy.visit('/'); 
  });

  it('fills out and submits the form successfully', () => {
    cy.get('[data-testid="input-name"]').type('John Doe');
    cy.get('[data-testid="input-email"]').type('john@example.com');
    cy.get('[data-testid="submit-btn"]').click();

    // Confirm the success message appears
    cy.contains('Form submitted successfully!');
  });
});
