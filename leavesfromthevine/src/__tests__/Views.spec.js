import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import FunFacts from '../views/FunFacts.js';
import TeaCatalogue from "../views/TeaCatalogue";
import Home from "../views/Home";

describe('Test Home', () => {
    const root = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter key="testing0">
            <Home />
        </BrowserRouter>, root);

    test('has title / home',() => {
        expect(root.querySelector("h1").textContent).toBe("Leaves From the Vine")
    })
});

describe('Test Fun Facts', () => {
    const root = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter key="testing1">
            <FunFacts />
        </BrowserRouter>, root);

    test('has title / fun facts', () =>{
        expect(root.querySelector("h1").textContent).toBe("Fun Facts");
    })
});

describe('Test Tea Catalogue', () =>{
    const root = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter key="testing2">
            <TeaCatalogue />
        </BrowserRouter>, root);
    test('has title / tea catalogue', () => {
        expect(root.querySelector("h1").textContent).toBe("Tea Encyclopedia")
    })
})