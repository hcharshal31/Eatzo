const parent = React.createElement("div", {}, 
    [React.createElement("div", {},[
        React.createElement("h1", {class:"one"}, "child1"),
        React.createElement("h2", {class:"two"}, "child2")]),
    React.createElement("div", {}, [
        React.createElement("h1", {class:"one"}, "child1"),
        React.createElement("h2", {class:"two"}, "child2")
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);