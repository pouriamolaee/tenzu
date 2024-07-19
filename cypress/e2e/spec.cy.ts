describe("Navigation", () => {
  it("should navigate to a blog post page", () => {
    cy.visit("/");
    cy.get('[data-test="post-link-0"]').click();
    cy.get("h1").should("be.visible");
  });
});
