import { Signin } from "../page_objects/Signin";

const signin = new Signin()

beforeEach(() => 
{
    signin.navigate()
})

describe('Positive test case scenarios', () => 
{
    it('should be able to sign-in with correct email and password', () =>
    {
        signin.loginFilled('haggzo@gmail.com','Pentagonhouse1@')
        signin.validateSuccessfulSignin()
    })

    it('should be able to sign-out when signed in', () => 
    {
        signin.loginFilled('haggzo@gmail.com','Pentagonhouse1@')
        signin.signout()
    })  
})

describe('Negative test case scenarios', () => 
{
    it('should not be able to sign-in with both email and password blank', () =>
    {
        signin.loginBlank()
    })
})