describe('Stories', () => {
    it('should create a new story', () => {
        const name = "The Neverending Story";
        cy.visit('http://localhost:3000/');
        cy.get('a').click();
        cy.get('input').type(name);
        cy.get("button").click();
        
        cy.url().should('eq', 'http://localhost:3000/stories');
        cy.get('h2').contains(name);
    });
});
