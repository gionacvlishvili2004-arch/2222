describe('Automation Exercise - Test Cases 1, 2, 3', () => {
  let userData

  before(() => {
    cy.fixture('user').then((data) => {
      userData = data
      userData.validUser.email = `gio${Date.now()}@gmail.com`
    })
  })

  beforeEach(() => {
    cy.visit('https://automationexercise.com')
  })

  it('Test Case 1: Register User', () => {
    cy.get('body').should('be.visible')

    cy.openSignupLoginPage()

    cy.contains('New User Signup!').should('be.visible')

    cy.signupUser(userData.validUser.name, userData.validUser.email)

    cy.contains('Enter Account Information').should('be.visible')

    cy.fillRegisterForm(userData.validUser)

    cy.url({ timeout: 10000 }).should('include', 'account_created')

    cy.get('[data-qa="account-created"]')
      .should('be.visible')
      .and('contain', 'Account Created!')

    cy.get('[data-qa="continue-button"]').click()

    cy.contains(`Logged in as ${userData.validUser.name}`).should('be.visible')
  })

  it('Test Case 2: Login User with correct email and password', () => {
    cy.openSignupLoginPage()

    cy.contains('Login to your account').should('be.visible')

    cy.loginUser(userData.validUser.email, userData.validUser.password)

    cy.contains(`Logged in as ${userData.validUser.name}`, { timeout: 10000 })
      .should('be.visible')
  })

  it('Test Case 3: Login User with incorrect email and password', () => {
    cy.openSignupLoginPage()

    cy.contains('Login to your account').should('be.visible')

    cy.loginUser(userData.invalidUser.email, userData.invalidUser.password)

    cy.contains('Your email or password is incorrect!', { timeout: 10000 })
      .should('be.visible')
  })
})
