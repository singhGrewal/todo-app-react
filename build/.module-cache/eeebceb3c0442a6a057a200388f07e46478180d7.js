var Todo = React.createClass({displayName: "Todo",

    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Things to do"), 
                React.createElement("div", {className: "form-inline"}, 
                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("input", {className: "form-control", placeholder: "Add TODO"}), 
                        React.createElement("button", {ClassName: "btn btn-default btn-sm"}, "+")
                    )
                ), 
                React.createElement("ul", null, 
                    React.createElement("li", {className: "todo"}, "call")
                )
            )
        )
    }
});

React.render(React.createElement(Todo, null), document.getElementById('todo'));