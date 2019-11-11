import React, {useState} from "react";
import { render, fireEvent, findByText } from "@testing-library/react";
import Controls from "./Controls";



test("it renders correctly", () => {
  render(<Controls />);
});

test('close gate', () => {
    const setCloseMock = jest.fn();

    const { controls } = render(
      <Controls toggleClosed={setCloseMock}/>
    );
    
    fireEvent.click(controls.querySelectorAll("button")[1]);

    expect(setCloseMock).toHaveBeenCalledTimes(1);

    
  
  });
  
