
// <div id="parent">
//     <div id="child">
//         <h1>This is parent child content</h1>
//     </div>
// </div>


const parent = React.createElement("div", { id: "parent" },[
    React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "This is h1 div inside content"),
        React.createElement("h2", {}, "This is h2 div inside content")]),
        React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "This is h1 div inside content"),
        React.createElement("h2", {}, "This is h2 div inside content")])
    ])
// const heading = React.createElement("h1", { id: "heading" }, "This is hello world from React")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
// root.render(heading)