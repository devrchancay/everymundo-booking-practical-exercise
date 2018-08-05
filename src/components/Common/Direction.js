import React from "react";
import Downshift from "downshift";

const Direction = ({ items, from, to, onChangeInput }) => (
  <React.Fragment>
    <span className="plane-block plane-input" />
    <Downshift
      itemToString={item => (item ? `${item.description} (${item.name})` : "")}
      defaultSelectedItem={from}
      onSelect={item => {
        onChangeInput("from", item);
      }}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem
      }) => (
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="From"
            className="text-sm input right-none border w-full"
            {...getInputProps()}
          />
          <ul className="z-30 absolute list-reset" {...getMenuProps()}>
            {isOpen
              ? items
                  .filter(
                    item => !inputValue || item.description.includes(inputValue)
                  )
                  .map((item, index) => (
                    <li
                      className="text-sm px-2 py-4 bg-white"
                      {...getItemProps({
                        key: item.name,
                        index,
                        item,
                        style: {
                          backgroundColor:
                            highlightedIndex === index ? "lightgray" : "white",
                          fontWeight: selectedItem === item ? "bold" : "normal"
                        }
                      })}
                    >
                      <span>{item.description} </span>
                      <span className="text-xs font-bold text-white bg-darkGray rounded p-1">
                        {item.name}
                      </span>
                    </li>
                  ))
              : null}
          </ul>
        </div>
      )}
    </Downshift>

    <Downshift
      onSelect={item => {
        onChangeInput("to", item);
      }}
      defaultSelectedItem={to}
      itemToString={item => (item ? `${item.description} (${item.name})` : "")}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem
      }) => (
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="To"
            className="text-sm input border w-full"
            {...getInputProps()}
          />
          <ul className="z-30 absolute list-reset" {...getMenuProps()}>
            {isOpen
              ? items
                  .filter(
                    item => !inputValue || item.description.includes(inputValue)
                  )
                  .map((item, index) => (
                    <li
                      className="text-sm px-2 py-4 bg-white"
                      {...getItemProps({
                        key: item.name,
                        index,
                        item,
                        style: {
                          backgroundColor:
                            highlightedIndex === index ? "lightgray" : "white",
                          fontWeight: selectedItem === item ? "bold" : "normal"
                        }
                      })}
                    >
                      <span>{item.description} </span>
                      <span className="text-xs font-bold text-white bg-darkGray rounded p-1">
                        {item.name}
                      </span>
                    </li>
                  ))
              : null}
          </ul>
        </div>
      )}
    </Downshift>
  </React.Fragment>
);

export default Direction;
