import React from "react";
import ReactDOM from "react-dom";
import CardComponent from "../card-component";
import renderer from "react-test-renderer";

it("renders witout crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CardComponent />, div);
})

it("match snapshot", () => {
    const info = {
        message: "Buna",
        user: {
            name: "Narcisa",
            last: "Petcu"
        }
    };
    const tree = renderer.create(<CardComponent info={info} />).toJSON();
    expect(tree).toMatchSnapshot();
})