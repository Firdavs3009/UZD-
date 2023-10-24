import Login from '../PageObject1/PageObject'

describe('UZD+', () => {

    const login = new Login()

    it('Login',() => { 

       login.loginbtn()
       //cy.viewport(1040, 900)
       login.LOGINBTN()
       // cy.get('.MuiTypography-root').click()
          cy.get("input[type=tel]").should ('exist')
          .type("933850046")
          .should('have.value','+998 93 385 00 46')  
          cy.get('.Index_formtitle__28ssH').should('have.text', 'Войдите или зарегистрируйтесь' )
          cy.get('[data-testid="character-0').type(3)
          cy.get('[data-testid="character-1').type(8)
          cy.get('[data-testid="character-2').type(7)
          cy.get('[data-testid="character-3').type(1)
          cy.get('[data-testid="character-4').type(3)
          cy.get('[data-testid="character-5').type(0)
          cy.wait(3000)
          cy.get('[type-checkbox]').click()
          cy.contains('удалить пользователей').click()
          cy.go('back')
          cy.get('.MuiBottomNavigation-root > :nth-child(2)')
          
          
          

    






    })


})