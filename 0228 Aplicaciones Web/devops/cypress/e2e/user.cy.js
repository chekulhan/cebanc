describe('UserList Component', () => {
  it('displays an h1 with "User List"', () => {
    cy.visit('/'); // Adjust if UserList is on another route
    cy.get('h1').contains('User List');
  });

  it('displays a h2 with "Second test"', () => {
    cy.visit('/'); // Adjust if UserList is on another route
    cy.get('[data-testid="page-title"]').should('have.text', 'Second test');
  });


});



describe('UserList Integration Test', () => {
    it('loads users and displays them', () => {
      cy.intercept('GET', 'http://localhost:5000/api/v1/users', [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' },
      ]).as('getUsers');

      cy.visit('/'); // or wherever UserList is rendered

      cy.contains('Loading users...'); // initial loading

      cy.wait('@getUsers');

      cy.contains('User List');
      cy.get('li').should('have.length', 2);
      cy.contains('Alice');
      cy.contains('Bob');
    });

    it('displays error message on fetch failure', () => {
      cy.intercept('GET', 'http://localhost:5000/api/v1/users', {
        statusCode: 500,
        body: 'Internal Server Error',
      }).as('getUsersFail');

      cy.visit('/');

      cy.contains('Loading users...');

      cy.wait('@getUsersFail');

      cy.contains('Error: Network response was not ok');
    });
  });