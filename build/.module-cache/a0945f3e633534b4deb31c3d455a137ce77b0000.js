var Todo = React.createClass({displayName: "Todo",

    edit: function () {
        alert('edit');
    },

    remove: function () {
        alert('remove');
    },

    render: function () {
        return (

            React.createElement("li", {className: "todo"}, 
                    React.createElement("span", {onClick: "{this.edit}"}, 
                    this.props.children
                    ))
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

    React.createElement("ul", null, 
        React.createElement(Todo, null, "call me"), 
        React.createElement(Todo, null, "Pay Bill"), 
        React.createElement(Todo, null, "Dentist")
    )
), document.getElementById('todo'));

