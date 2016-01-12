var Todo = React.createClass({

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

            <li className="todo">
                    <span onClick={this.edit}>
                     {this.props.children}
                    </span>
                <button onClick={this.remove}
                        className="btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right"/>
            </li>
        );
    },

    todoForm: function () {
        return (

            <li className="todo">
                    <span>
                     <input type="text" placeholder="Edit TODO" defaultValue={this.props.children}/>
                    </span>
                <button onClick={this.save}
                        className="btn btn-default btn-sm glyphicon glyphicon-floppy-disk remove pull-right"/>
            </li>
        );
    },

    render: function () {
        if (this.state.editing) {
            return this.todoForm();
        }
        else {
            return this.todoDisplay();
        }
    }
});

React.render(<div>
    <h1>Things to do</h1>
    <div className="form-inline">
        <div className="form-group">
            <input className="form-control" placeholder="Add TODO"/>
            <button ClassName="btn btn-default btn-sm">+</button>
        </div>
    </div>

    <ul>
        <Todo>call me</Todo>
        <Todo>Pay Bill</Todo>
        <Todo>Dentist</Todo>
    </ul>
</div>, document.getElementById('todo'));

