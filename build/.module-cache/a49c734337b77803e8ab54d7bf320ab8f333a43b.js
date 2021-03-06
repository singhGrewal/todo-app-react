var Todo = React.createClass({displayName: "Todo",

    getInitialState: function () {
        return {editing:false}
    },

    edit: function () {
        alert('edit');
        this.setState({editing: true});
    },

    remove: function () {
        alert('remove');
    },
    save: function () {
        alert("save");
    },


    todoDisplay: function () {
        return (

            React.createElement("li", {className: "todo"}, 
                    React.createElement("span", {onClick: this.edit}, 
                     this.props.children
                    ), 
                React.createElement("button", {onClick: this.remove, 
                        className: "btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right"})
            )
        )
    },

    todoForm: function () {
        return (

            React.createElement("li", {className: "todo"}, 
                    React.createElement("span", null, 
                     React.createElement("input", {type: "text", placeholder: "Edit TODO", defaultValue: this.props.children})
                    ), 
                React.createElement("button", {onClick: this.save, 
                        className: "btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right"})
            )
        )

    },

    render: function () {
        if (this.setState.editing) {
            return this.todoForm();
        }
        else {
            return this.todoDisplay();
        }
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

