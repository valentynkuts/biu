import React from "react"
import {render} from "react-dom"
import Page from "./components/Page"
import data from "../data/data.json"

render(<Page info={data} />, document.getElementById("root"));
