import BasePage from "./BasePage";

class SelectablePage extends BasePage {
  static get url() {
    return "/selectable";
  }
  static get buttons() {
    return cy.get("#verticalListContainer>li");
  }
  static get gridTab() {
    return cy.get("#demo-tab-grid");
  }
  static get gridElements(){
    return cy.get('#gridContainer>div>li');
  }
}

export default SelectablePage;
