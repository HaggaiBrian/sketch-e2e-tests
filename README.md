# sketch-e2e-tests
This repository contains E2E automation tests for the sign in flow of sketch.com in cypress. All the tests will start from the sketch sign in page. It includes majorly the end to end tests with focus on functinality, and a little more for ui testing. Not much was done with this. These tests follow the Page Object Model framework for automation. The idea is to allow for easy maintainance(update), code reusability and avoid duplication.

# Installing, Setup/Getting started
Prerequisites
- IDE
    Visual Studio Code
    Intellij IDEA
    Webstorm IDEA
    Anyother IDE of choice

- User Account
    create a trial user.
    Do not enter payment details, you have 30 days of free use.

- Install nodejs and NPM on you machine
    npm install -g npm

- Check the version installed using. If a version is shown, its a confirmation of a successful download and installation.
    node -v
    npm -v

- Navigate to github and clone the repo.
    git clone https://github.com/HaggaiBrian/sketch-e2e-tests
    cd your-project/. This will install it anywhere you want 

- VERY IMPORTANT STEP!!, after clone.
    * Navigate to the project folder
    * Create a environment file at the project level and name it "cypress.env.json"
    * In this file, copy this line of code and add to this file.
        {
        "email": "xxxx@xxxx.com",
        "password": "........"
        }
    * Replace xxxx@xxx.com with you registered production email created in User Account step above.
    * Also replace ....... with your correct registerd production password created in User Account step above.
    The goal for this is because using version control, this file is being ignored to protect user login credentials. Entering yours registered above in User Account to allow for the tests to run successfully.

# Running the tests
By now, we have set up our tests project. One more thing is to see the project, run.
- Open the folder in your IDE of choice. I prefer vscode and idea IDEs, so i will explain this based on either.
- All the project details and files should be shown including the newly created "cypress.env.json"
- Open the terminal within the IDE.
- Using the following commands, you should be able to run the tests. "npx cypress open" and "npx cypress run"
    * npx cypress open. (Interactive testing)
        Cypress UI screen is launched.
        Click the E2E Testing tab. This should be already configured.
        Choose and select a browser of choice, between chrome and Electron.
        Click "Start E2E Testing in Chrome" button if chrome browser is selected above and "Start E2E Testing in Electron" button if electron browser is selected above
        Cypress dashboard pointing to the sketch-e2e-tests project is launched.
        Click the specs section.
        Click/Double click the "signin.spec.cy.js" file and the tests should automatically start running.
        While and After the tests running, you should be able to see the progress, status, Fail/Pass of the tests.
    * npx cypress run. (Non - interactive testing)
        This runs the tests in the terminal opened in a non interactive mode of the the tests in cypress/