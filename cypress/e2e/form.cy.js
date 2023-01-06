describe("Form", () => {
    beforeEach(() => cy.visit("http://localhost:3000"));

    const fnameInput = () => cy.get("input[name=fname]");
    const lnameInput = () => cy.get("input[name=lname]");
    const emailInput = () => cy.get("input[name=email]");
    const termsInput = () => cy.get("input[name=terms]");
    const submitBtn = () => cy.get("")

    it("elements exist", () => {
        fnameInput().should("exist");
        lnameInput().should("exist");
        emailInput().should("exist");
        termsInput().should("exist");
    })

    it("input fields accept text", () => {
        fnameInput()
        .type("George")
        .should("have.value", "George");

        lnameInput()
        .type("Lopez")
        .should("have.value", "Lopez");

        emailInput()
        .type("george@lopez.com")
        .should("have.value", "george@lopez.com");
    })

    it("terms box can be checked", () => {
        termsInput().click();
        termsInput().should("be.checked");
    })

    it("form can be submitted", () => {
        fnameInput().type("Phil Lee");
        lnameInput().type("Chees Tahke");
        emailInput().type("plct@thelaw.com")
        termsInput().click();

        cy.contains(/submit/i).click();

        fnameInput().should("have.value", "");
        lnameInput().should("have.value", "");
        emailInput().should("have.value", "");
        termsInput().should("be.not.checked");

        cy.contains("Phil Lee Chees Tahke - plct@thelaw.com");
    })

    it("submit button disabled if email left empty", () => {
        fnameInput().type("Phil Lee");
        lnameInput().type("Chees Tahke");
        termsInput().click();

        cy.contains(/submit/i).should("be.disabled");

    })
})