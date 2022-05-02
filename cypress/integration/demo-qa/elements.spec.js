import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckBoxPage from "../../pageObjects/CheckBoxPage";

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

      //validtation
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
          data.permanentAdd);
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
        // cy.pause();
      });
    });
  });
});
