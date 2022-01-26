import React from "react";
import ReactDOM from "react-dom";
import Dropdown from "../dropdown";
import renderer from "react-test-renderer";

it("renders witout crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Dropdown />, div);
})

it("match snapshot", () => {
    const tree = renderer.create(<Dropdown error={"error"} handleChange={()=>{}} user={"11"} values={[{label:"11", value:"11"}]}/>).toJSON();
    expect(tree).toMatchSnapshot();
})