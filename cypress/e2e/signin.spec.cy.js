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
        signin.loginCorrectFilled('haggzo@gmail.com','Pentagonhouse1@')
        signin.validateSuccessfulSignin()
    })

    it('should be able to sign-out when signed in', () => 
    {
        signin.loginCorrectFilled('haggzo@gmail.com','Pentagonhouse1@')
        signin.signout()
    })  
})

describe('Negative test case scenarios', () => 
{
    it('should not be able to sign-in with both email and password blank', () =>
    {
        signin.loginBlank()
    })

    it('should not be able to sign-in with correct email but password blank', () =>
    {
        signin.loginCorrectEmailBlankPassword('haggzo@gmail.com')
    })

    it('should not be able to sign-in with blank email but correct password', () =>
    {
        signin.loginBlankEmailCorrectPassword('fdjnfufeinfeief')
    })

    it('should not be able to sign-in with incorrect email and inpassword', () =>
    {
        signin.loginInCorrectFilled('nafkanfjadnf@kndjfd.com', 'dfnsdfninsdfid')
    })

    it('should not be able to sign-in with incorrect email format', () =>
    {
        signin.loginCorrectEmailFormat('fdfd454')
    })
})