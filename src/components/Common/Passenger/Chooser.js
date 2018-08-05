import React from "react";
import Downshift from "downshift";

const Chooser = ({
  isOpen,
  passengers,
  increment,
  decrement,
  toogleChooser
}) => (
  <Downshift
    isOpen={isOpen}
    itemToString={item => {
      return "";
    }}
  >
    {({ getInputProps, getItemProps, getMenuProps, isOpen, inputValue }) => (
      <div>
        <div
          onClick={() => {
            toogleChooser();
          }}
          className="cursor-pointer input border w-full bg-white h-full p-8 relative"
          {...getInputProps()}
        />
        <div>
          <div
            id="chooserContainer"
            className="cursor-pointer absolute pin-t pl-3 py-2"
            onClick={() => {
              toogleChooser();
            }}
          >
            <p id="chooserText" className="text-xs text-darkGray font-sans">
              <span>
                {passengers.adult} {passengers.adult <= 1 ? "Adult" : "Adults"},{" "}
              </span>
              <span>
                {passengers.child}{" "}
                {passengers.child <= 1 ? "Child" : "Children"},{" "}
              </span>
              <span>
                {passengers.infant}{" "}
                {passengers.infant <= 1 ? "Infant" : "Infants"}{" "}
              </span>
            </p>
            <p className="text-sm pt-1 text-darkGray font-bold font-sans">
              {passengers.total} Passengers
            </p>
          </div>
          <ul className="absolute list-reset w-full" {...getMenuProps()}>
            {isOpen
              ? passengers.data
                  .filter(
                    item => !inputValue || item.description.includes(inputValue)
                  )
                  .map((item, index) => (
                    <li
                      className="flex text-sm px-2 w-full py-4 bg-white"
                      {...getItemProps({
                        key: item.name,
                        index,
                        item
                      })}
                    >
                      <div className="flex flex-col px-2 w-1/2">
                        <p className="text-xl font-sans">{item.name}</p>
                        <span className="text-sm text-darkGray font-sans">
                          {item.description}
                        </span>
                      </div>
                      <div className="w-1/2 flex justify-end">
                        <div
                          onClick={() => {
                            decrement(`${item.key}`);
                          }}
                          className="cursor-pointer p-2 border bg-grey border-gray"
                        >
                          -
                        </div>
                        <p className="text-center px-2 py-2 w-1/3">
                          {passengers[item.key]}
                        </p>
                        <div
                          id="add"
                          onClick={() => {
                            increment(`${item.key}`);
                          }}
                          className="cursor-pointer p-2 border bg-grey border-gray"
                        >
                          +
                        </div>
                      </div>
                    </li>
                  ))
              : null}
            {isOpen && (
              <li className="flex text-sm px-2 w-full py-4 bg-white">
                <p className="text-center w-full">
                  <span
                    id="closeChosser"
                    onClick={() => {
                      toogleChooser();
                    }}
                    className="cursor-pointer text-red no-underline"
                  >
                    Close
                  </span>
                </p>
              </li>
            )}
          </ul>
        </div>
      </div>
    )}
  </Downshift>
);

export default Chooser;
