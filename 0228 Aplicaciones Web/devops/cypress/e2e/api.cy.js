describe('API tests for /api/v1/users', () => {
  it('returns a list of users with status 200', () => {
    cy.request('http://localhost:5000/api/v1/users')
      .its('status')
      .should('eq', 200);
  });

  it('returns users data in expected format', () => {
    cy.request('http://localhost:5000/api/v1/users')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        response.body.forEach(user => {
          expect(user).to.have.all.keys('id', 'name', 'email');
        });
      });
  });

  it('returns 404 for an invalid endpoint', () => {
    cy.request({
      url: 'http://localhost:5000/api/v1/nonexistent',
      failOnStatusCode: false, // prevent failing test on non-2xx status
    }).its('status').should('eq', 404);
  });
});