



import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Register from './register';


it('givenTestIdElement_WhenRenderedRegister_ShouldContainHeaderWithExpectedInputElements',() => {
    const {getByTestId} = render(<Register/>);
    const form = getByTestId('form');
     const submit = getByTestId('submit');
    const firstName = getByTestId('firstName');
    const lastName = getByTestId('lastName');
    const emailInput = getByTestId('email');
    const password = getByTestId('password');
    // const confirmPassword = getByTestId('confirmPassword');

    expect(form).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    // expect(confirmPassword).toBeInTheDocument();
    expect(emailInput).toHaveErrorMessage;
})

it("should give correct title when register page rendered", () => {
    const { getByTestId } = render(<Register/>);
    const title = getByTestId("title");
    expect(title).toHaveTextContent("FundooNotes");
  });

//   it("should give correct header when register page rendered", () => {
//     const { getByTestId } = render(<register />);
//     const header = getByTestId("Register");
//     expect(header).toHaveTextContent("register");
//   });

  it("should check header when wrong header is given", () => {
    const { getByTestId } = render(<Register />);
    const header = getByTestId("title");
    expect(header).not.toHaveTextContent("fundoonotes");
  });