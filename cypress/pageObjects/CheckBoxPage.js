import BasePage from "./BasePage";

class CheckBoxPage extends BasePage {
  static get url() {
    return "/checkbox";
  }
  static get expandBtn() {
    return cy.get("button[aria-label='Expand all']");
  }
  static get checkBoxTitles() {
    return cy.get(".rct-title");
  }
}

export default CheckBoxPage;
