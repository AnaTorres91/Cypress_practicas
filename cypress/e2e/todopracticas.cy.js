
describe('template spec', () => {
  it('añadir tarea utilizando espacios antes del texto', () => {
    cy.visit('https://todomvc.com/examples/typescript-react/#/')
    cy.get('.new-todo').type('   caminar{enter}')
    cy.get('.view > label').contains('caminar')
  })

  it('editar una tarea con números y añadir un símbolo', () => {
    cy.visit('https://todomvc.com/examples/typescript-react/#/')
    cy.get('.new-todo').type('3+2{enter}')
    cy.get('.view > label').dblclick()
    cy.get('.edit').type('&{enter}')
    cy.get('.view > label').contains('3+2&')
    })

  it('marcar todas las tareas a la vez', () => {
    cy.visit('https://todomvc.com/examples/typescript-react/#/')
    cy.get('.new-todo').type('comer{enter}').type('pasear{enter}').type('entrenar{enter}').type('trabajar{enter}').type('hola{enter}')
    cy.get('[for="toggle-all"]').click()

    })

  it('Filtrar tareas completadas y volver a todas', () => {
    cy.visit('https://todomvc.com/examples/typescript-react/#/')
    cy.get('.new-todo').type('comer{enter}').type('pasear{enter}').type('entrenar{enter}').type('trabajar{enter}').type('hola{enter}')
    cy.get(':nth-child(1) > .view > .toggle').check()
    cy.get(':nth-child(3) > .view > .toggle').check()
    cy.get('.filters > :nth-child(3) > a').click()
    cy.get(':nth-child(1) > .view > label').should('be.visible')
    cy.get(':nth-child(2) > .view > label').should('be.visible')
    cy.get(':nth-child(1) > a').click()
    cy.get(':nth-child(1) > .view > label').get(':nth-child(2) > .view > label').get(':nth-child(3) > .view > label').get(':nth-child(4) > .view > label').get(':nth-child(5) > .view > label').should('be.visible')

  })
})

