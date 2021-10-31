describe('User can check their Bmi', () => {
    it('user can enter weight and height', () => {
        cy.visit('http://localhost:3474')
        cy.contains('BMI Calculator')
        cy.get('#weight').type('83')
        cy.get('#height').type('177')
        cy.get('#Calculate').click()
    });
});