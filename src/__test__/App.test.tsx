import React from 'react';
import App from '../App';
import { fireEvent, render, RenderResult  } from '@testing-library/react';

let component: RenderResult;
beforeEach(() => {
  component = render(<App />);
});

test("Component showing page's title", () => {
  const headerText = component.getByTestId("header-text");
  expect(headerText.textContent).toBe("Destinations");
});

test("Component showing add destination button", () => {
  const addDestBtn = component.getByTestId("add-destination-btn");
  expect(addDestBtn.textContent).toBe("+ Ajouter");
});

test("Show up modal for adding destination", () => {
  const addDestBtn = component.getByTestId("add-destination-btn");
  fireEvent.click(addDestBtn);

  const modal = component.getByTestId("modal");  
  expect(modal).toBeVisible()
});

/**
 * And many more comming soon
 */


 