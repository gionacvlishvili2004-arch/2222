// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
describe('Automation Test Store Account Tests', () => {
  const loginName = 'giotest1'
  const password = 'giorgitest123'

  it('login using custom command', () => {
    cy.login(loginName, password)
  })

  it('edit account details and verify changes', () => {
    cy.login(loginName, password)

    cy.visit('https://automationteststore.com/index.php?rt=account/edit')

    cy.get('#AccountFrm_firstname').clear().type('Gio')
    cy.get('#AccountFrm_lastname').clear().type('Tester')
    cy.get('#AccountFrm_email').clear().type(`gio${Date.now()}@test.com`)
    cy.get('#AccountFrm_telephone').clear().type('555123456')

    cy.get('button[title="Continue"]').click()

    cy.contains('Success: Your account has been successfully updated.').should('be.visible')

    cy.visit('https://automationteststore.com/index.php?rt=account/edit')

    cy.get('#AccountFrm_firstname').should('have.value', 'Gio')
    cy.get('#AccountFrm_lastname').should('have.value', 'Tester')
    cy.get('#AccountFrm_telephone').should('have.value', '555123456')
  })

  it('add new address', () => {
    cy.login(loginName, password)

    cy.visit('https://automationteststore.com/index.php?rt=account/address/insert')

    cy.get('#AddressFrm_firstname').type('Gio')
    cy.get('#AddressFrm_lastname').type('Tester')
    cy.get('#AddressFrm_address_1').type('Tbilisi Street 1')
    cy.get('#AddressFrm_city').type('Tbilisi')
    cy.get('#AddressFrm_country_id').select('Georgia')
    cy.get('#AddressFrm_zone_id').select('Tbilisi')
    cy.get('#AddressFrm_postcode').type('0101')

    cy.get('button[title="Continue"]').click()

    cy.contains('Your address has been successfully inserted').should('be.visible')
  })

  it('change password', () => {
    cy.login(loginName, password)

    cy.visit('https://automationteststore.com/index.php?rt=account/password')

    cy.get('#PasswordFrm_current_password').type(password)
    cy.get('#PasswordFrm_password').type(password)
    cy.get('#PasswordFrm_confirm').type(password)

    cy.get('button[title="Continue"]').click()

    cy.contains('Success: Your password has been successfully updated.').should('be.visible')
  })
})