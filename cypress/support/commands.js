Cypress.Commands.add('openSignupLoginPage', () => {
  cy.contains('Signup / Login').click()
})

Cypress.Commands.add('signupUser', (name, email) => {
  cy.get('[data-qa="signup-name"]').clear().type(name)
  cy.get('[data-qa="signup-email"]').clear().type(email)
  cy.get('[data-qa="signup-button"]').click()
})

Cypress.Commands.add('loginUser', (email, password) => {
  cy.get('[data-qa="login-email"]').clear().type(email)
  cy.get('[data-qa="login-password"]').clear().type(password)
  cy.get('[data-qa="login-button"]').click()
})

Cypress.Commands.add('fillRegisterForm', (user) => {
  cy.get('#id_gender1').check()

  cy.get('[data-qa="password"]').type(user.password)

  cy.get('[data-qa="days"]').select(user.day)
  cy.get('[data-qa="months"]').select(user.month)
  cy.get('[data-qa="years"]').select(user.year)

  cy.get('#newsletter').check()
  cy.get('#optin').check()

  cy.get('[data-qa="first_name"]').type(user.firstName)
  cy.get('[data-qa="last_name"]').type(user.lastName)
  cy.get('[data-qa="company"]').type(user.company)
  cy.get('[data-qa="address"]').type(user.address)
  cy.get('[data-qa="address2"]').type(user.address2)
  cy.get('[data-qa="country"]').select(user.country)
  cy.get('[data-qa="state"]').type(user.state)
  cy.get('[data-qa="city"]').type(user.city)
  cy.get('[data-qa="zipcode"]').type(user.zipcode)
  cy.get('[data-qa="mobile_number"]').type(user.mobileNumber)

  cy.get('[data-qa="create-account"]').click()
})
