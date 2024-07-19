describe("Blog main flow", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should load the homepage and display blog posts", () => {
    cy.get('[data-cy="post-list"]').should("exist");
    cy.get('[data-cy="post-item"]').should("have.length.greaterThan", 0);
  });

  it("should navigate to first blog post page", () => {
    cy.get('[data-cy="post-item"]').first().click();
    cy.get('[data-cy="post-title"]').should("exist");
    cy.get('[data-cy="post-date"]').should("exist");
    cy.get('[data-cy="post-body"]').should("exist");
  });
});
