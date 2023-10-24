//import Sayt from '../PageObject'

describe('yandex', () => {

    // const Sayt = new Sayt ()
    
     it('Login',() => { 
          cy.visit('https://eats.yandex.com/')
          cy.viewport('1100, 500')
          cy.get('https://eats.yandex.com/').should('have-text','найти')
          cy.get('type-checkbox').click()
          cy.wait(3000)
          cy.get('.DesktopHeader_headerItem > [data-testid="ui-button"] > .DesktopUIButton_content').click()
     



         
         



    })


 } )
