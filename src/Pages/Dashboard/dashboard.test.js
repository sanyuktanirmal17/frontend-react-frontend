// import React from 'react';
// import { render } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import Dashboard from './dashboard';

// it('givenTestIdElement_WhenRenderedDashBoard_ShouldContainHeaderWithExpectedInputElements',() => {
//     const {getByTestId} = render(<Dashboard/>);
//     const search = getByTestId('search');
//     const AppBar = getByTestId('appBar');
//     // const settingMenu = getByTestId('MenuList');
//     const MenuList = getByTestId('MenuList');
//     // const logout = getByTestId('logout');

//     expect(search).toBeInTheDocument();
//     expect(AppBar).toBeInTheDocument();
//     // expect(settingMenu).toBeInTheDocument();
//      expect(MenuList).toBeInTheDocument();
//     // expect(logout).toBeInTheDocument();
// })

// it("should give correct title when dashboard rendered", () => {
//     const { getByTestId } = render(<Dashboard/>);
//     const title = getByTestId("title");
//     expect(title).toHaveTextContent("FundooNotes");
//   });

//   it("should check title when wrong title is given", () => {
//     const { getByTestId } = render(<Dashboard/>);
//     const title = getByTestId("title");
//     expect(title).not.toHaveTextContent("Fundoonotes");
//   });