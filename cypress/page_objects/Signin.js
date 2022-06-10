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

    loginCorrectFilled (email, password) 
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
        .get('.sc-fGoNRK > .sc-ehCIER')
        .click()
        .get('.sc-ihhdAm > :nth-child(1) > .sc-ehCIER', {timeout: 30000})
        .click()
        return this
    }

    loginInCorrectFilled (email, password) 
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
        .get('.sc-fGoNRK > .sc-ehCIER')
        .click()
        .get('.sc-dYPeNj')
        .should('be.visible')
        return this
    }

    loginCorrectEmailBlankPassword (email) 
    {
        cy
        .get('#text-input')
        .clear()
        .type(email)
        cy
        .get('.sc-fGoNRK > .sc-ehCIER')
        .click()
        .get(':nth-child(2) > .sc-hxaKgE > li > .sc-dYPeNj')
        .should('be.visible')
        return this
    }

    loginCorrectEmailFormat (email) 
    {
        cy
        .get('#text-input')
        .clear()
        .type(email)
        cy
        .get('.sc-fGoNRK > .sc-ehCIER')
        .click()
        .get('.sc-dYPeNj')
        .should('be.visible')
        return this
    }

    loginBlankEmailCorrectPassword (password) 
    {
        cy
        .get('[data-testid="input"]')
        .clear()
        .type(password)
        cy
        .get('.sc-fGoNRK > .sc-ehCIER')
        .click()
        .get(':nth-child(1) > .sc-hxaKgE > li > .sc-dYPeNj')
        .should('be.visible')
        return this
    }

    loginBlank () 
    {
        cy
        .get('.sc-fGoNRK > .sc-ehCIER')
        .click()
        .get(':nth-child(1) > .sc-hxaKgE > li > .sc-dYPeNj')
        .should('be.visible')
        .get(':nth-child(2) > .sc-hxaKgE > li > .sc-dYPeNj')
        .should('be.visible')
    }

    validateSuccessfulSignin () 
    {
        cy
        .get('.sc-bGaWHc', { timeout: 30000 })
        .url()
        .should('include', 'shares')
        .title()
        .should('eq', 'Sketch - Documents')
    }


    signout()
    {
        cy
        .get('.sc-bGaWHc')
        .click()
        .get('.sc-gUQueJ')
        .click()
        .get('#text-input', { timeout: 30000 })
        .url()
        .should('include','signin')
        .should('eq', 'https://www.sketch.com/signin')
        .title()
        .should('eq', "Sketch - Sign in - It's great to see you again")
    }
}