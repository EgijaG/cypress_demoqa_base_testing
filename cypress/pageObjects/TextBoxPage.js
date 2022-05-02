import BasePage from "./BasePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get emailInputField() {
    return cy.get("#userEmail");
  }
  static get fullNameInputField() {
    return cy.get("#userName");
  }
  static get currentAddressInputField() {
    return cy.get("textarea[id='currentAddress']");
  }
  static get permanentAddInputField() {
    return cy.get("textarea[id='permanentAddress']");
  }
  static get submitButton() {
    return cy.get("#submit");
  }
  static get paragrapghName() {
    return cy.get("#name");
  }
  static get paragrapghEmail() {
    return cy.get("#email");
  }
  static get paragrapghCurrentAddress() {
    return cy.get("p[id='currentAddress']");
  }
  static get paragrapghPermanentAddress() {
    return cy.get("p[id='permanentAddress']");
  }

}

export default TextBoxPage;
