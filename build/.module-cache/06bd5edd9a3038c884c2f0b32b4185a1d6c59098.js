var Todo = React.createClass({displayName: "Todo",

    render: function () {
        return (

            React.createElement("ul", null, 
                React.createElement("li", {className: "todo"}, this.props.todo)
            )
        )
    }
});

React.render(React.createElement("div", null, 
    React.createElement("h1", null, "Things to do"), 
    React.createElement("div", {className: "form-inline"}, 
        React.createElement("div", {className: "form-group"}, 
            React.createElement("input", {className: "form-control", placeholder: "Add TODO"}), 
            React.createElement("button", {ClassName: "btn btn-default btn-sm"}, "+")
        )
    ), 

    React.createElement(Todo, {todo: "call me"}), 
    React.createElement(Todo, {todo: "Pay Bill"}), 
    React.createElement(Todo, {todo: "Dentist"})
), document.getElementById('todo'));

