import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckBoxPage from "../../pageObjects/CheckBoxPage";
import ButtonsPage from "../../pageObjects/ButtonsPage";
import SelectablePage from "../../pageObjects/SelectablePage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    it("Filling in Text Boxes", () => {
      // Add scenario stuff here

      //inputs
      TextBoxPage.fullNameInputField.type("Ben Dover");
      TextBoxPage.emailInputField.type("bendover@adddress.com");
      TextBoxPage.curAddressInputField.type("this is some address");
      TextBoxPage.permAddressInputField.type("his is the permanento addresso");
      //submit
      TextBoxPage.submitbutton.click();

      //validation
      TextBoxPage.paragraphName
        .should("exist")
        .should("be.visible")
        .should("contain", "Ben Dover");

      TextBoxPage.paragraphEmail.should("contain", "bendover@adddress.com");

      TextBoxPage.paragraphCurAddress.should("contain", "this is some address");

      TextBoxPage.paragraphPermAddress.should(
        "contain",
        "this is the permanento addresso"
      );
    });

    it.only("Filling in Text Boxes", () => {
      cy.fixture("textBoxData").then((data) => {
        TextBoxPage.fullNameInputField.type(data.fullName);
        TextBoxPage.emailInputField.type(data.email);
        TextBoxPage.currentAddressInputField.type(data.currentAddress);
        TextBoxPage.permanentAddInputField.type(data.permanentAdd);
        TextBoxPage.submitButton.click();
        TextBoxPage.paragrapghName.should("contain", data.fullName);
        TextBoxPage.paragrapghEmail.should("contain", data.email);
        TextBoxPage.paragrapghCurrentAddress.should(
          "contain",
          data.currentAddress
        );
        TextBoxPage.paragrapghPermanentAddress.should(
          "contain",
          data.permanentAdd
        );
      });
    });

    context("Check Box scenarios", () => {
      beforeEach(() => {
        CheckBoxPage.visit();
      });

      it.only("Click checkboxes - Notes And general", () => {
        // Click +/Expand button
        CheckBoxPage.expandBtn.click();
        // Click Notes checkbox
        CheckBoxPage.checkBoxTitles.contains("Notes").click();
        // Click general checkbox
        CheckBoxPage.checkBoxTitles.contains("General").click();
        // Validate that "you have selected notes general"
        CheckBoxPage.checkedResults
          .should("contain", "office")
          .should("contain", "public")
          .should("contain", "private")
          .should("contain", "classified")
          .should("contain", "general");
      });
      context("Buttons scenarios", () => {
        beforeEach(() => {
          ButtonsPage.visit();
        });
      });
      it.only("Click buttons", () => {
        ButtonsPage.doubleClickBtn.dblclick();
      });
    });
  });

  // Day 3 homeowork with selectable
  context("Selectable scenarios", () => {
    it.only("Selectable", () => {
      SelectablePage.visit();
      // Click two buttons that contain the certain text
      SelectablePage.buttons.contains("Cras justo odio").click();
      SelectablePage.buttons.contains("Morbi leo risus").click();
      // validate the active fields
      SelectablePage.buttons
        .contains("Cras justo odio")
        .invoke("attr", "class")
        .should("contain", "active");
      SelectablePage.buttons
        .contains("Morbi leo risus")
        .invoke("attr", "class")
        .should("contain", "active");
      // Validate that rest of the fields have not changed the state
      SelectablePage.buttons
        .contains("Dapibus ac facilisis in")
        .invoke("attr", "class")
        .should("not.contain", "active");
      SelectablePage.buttons
        .contains("Porta ac consectetur ac")
        .invoke("attr", "class")
        .should("not.contain", "active");
    });
  });
  context("Grid tab scenarios", () => {
    it.only("Grid section", () => {
      // Go to Grid section/tab in Selectable page
      SelectablePage.gridTab.click();
      // Click the fields  “Two”, “Four”, “Six” un “Eight”
      SelectablePage.gridElements.contains("Two").click();
      SelectablePage.gridElements.contains("Four").click();
      SelectablePage.gridElements.contains("Six").click();
      SelectablePage.gridElements.contains("Eight").click();
      // Validate that fields  “Two”, “Four”, “Six” un “Eight” are active
      SelectablePage.gridElements
        .contains("Two")
        .invoke("attr", "class")
        .should("contain", "active");
      SelectablePage.gridElements
        .contains("Four")
        .invoke("attr", "class")
        .should("contain", "active");
      SelectablePage.gridElements
        .contains("Six")
        .invoke("attr", "class")
        .should("contain", "active");
      SelectablePage.gridElements
        .contains("Eight")
        .invoke("attr", "class")
        .should("contain", "active");
      // Validate that the rest of the fields haven't changed the state
      SelectablePage.gridElements
        .contains("One")
        .invoke("attr", "class")
        .should("not.contain", "active");
      SelectablePage.gridElements
        .contains("Three")
        .invoke("attr", "class")
        .should("not.contain", "active");
      SelectablePage.gridElements
        .contains("Five")
        .invoke("attr", "class")
        .should("not.contain", "active");
      SelectablePage.gridElements
        .contains("Nine")
        .invoke("attr", "class")
        .should("not.contain", "active");
    });
  });
});
