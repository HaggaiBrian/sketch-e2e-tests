import { Signin } from "../page_objects/Signin";

const signin = new Signin()

describe('Positive test case scenarios', () => 
{
    it('should be able to sign-in with correct email and password', () =>
    {
        signin.navigate()
        signin.login('haggzo@gmail.com','Pentagonhouse1@')
        signin.validateSuccessfulSignin()
    })
})