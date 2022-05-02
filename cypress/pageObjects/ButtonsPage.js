import BasePage from "./BasePage";

class ButtonsPage extends BasePage {
  static get url() {
    return "/checkbox";
  }
  static get rightClickBtn() {
    return cy.get("#doubleClickBtn");
  }
  static get doubleClickBtn() {
    return cy.get("#rightClickBtn");
  }
  
}

export default ButtonsPage;
