import user from '../fixtures/signin.json' //This imports the signin json file to support my data driven test development


export class Signin {
    navigate ()
    {
        cy
        .visit('https://www.sketch.com/signin/')
        .url()
        .should('include','signin')
        .should('eq', 'https://www.sketch.com/signin/')
        .title()
        .should('eq', "Sketch - Sign in - It's great to see you again")
    }

    login (email, password) 
    {
        cy
        .get('#text-input')
        .clear()
        .type(email)
        cy
        .get('[data-testid="input"]')
        .clear()
        .type(password)
        cy
        .get('.sc-fGoNRK > .sc-ehCIER').click()
        return this
    }

    validateSuccessfulSignin () 
    {
        cy
        .url()
        .should('include', 'workspace')
        .should('include', 'shares')
        .get('.sc-bGaWHc', { timeout: 30000 })
        .title()
        .should('eq', 'Sketch - Documents')
    }
}