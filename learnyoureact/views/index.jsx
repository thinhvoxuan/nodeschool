/**
 * Created by thinhvoxuan on 12/28/15.
 */
import React from 'react';


let style = {
    checkedTodo: {
        textDecoration: "line-through"
    },
    notCheckedTodo: {
        textDecoration: "none"
    },
    tableContent: {
        border: "1px solid black"
    }
};

export default class TodoBox extends React.Component {
    render() {
        return (
            <div className="todoBox">
                <h1>Todos</h1>
                <TodoList data={this.props.data} />
                <TodoForm />
            </div>
        );
    }
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            titleValue: "",
            detailValue: ""
        };
        this.changeTitle = this.changeTitle.bind(this);
        this.changeDetail = this.changeDetail.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    changeTitle(e) {
        this.setState({titleValue: e.target.value});
    }

    changeDetail(e) {
        this.setState({detailValue: e.target.value});
    }

    addTodo() {
        var data = this.state.data;
        data.push({
            title: this.state.titleValue,
            detail: this.state.detailValue
        });

        this.setState({
            titleValue : '',
            detailValue: '',
            data: data
        })
    }

    deleteTodo(title){
        var data = this.state.data;
        var newData = data.filter( (x) => x.title != title);
        this.setState({
            data: newData
        })
    }

    render() {
        var me = this;
        let todo = this.state.data.map(function(obj) {
            return <Todo title={obj.title} key={obj.title} onDelete={me.deleteTodo}>{obj.detail}</Todo>;
        });
        return (
            <div className = "todoList">
                <div>
                    Title:<input type="text" value={this.state.titleValue} onChange={this.changeTitle} />
                    Detail:<input type="text" value={this.state.detailValue} onChange={this.changeDetail} />
                    <button onClick={this.addTodo}>Add</button>
                </div>
                <table style={{border: "2px solid black"}}>
                    <tbody>
                    {todo}
                    </tbody>
                </table>
            </div>
        );
    }
}

class Todo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            decoration: style.notCheckedTodo
        };
        this.handleChange = this.handleChange.bind(this);
        this._onDelete = this._onDelete.bind(this);
    }

    handleChange(e) {
        this.setState({
            checked: e.target.checked,
            decoration: e.target.checked ? style.checkedTodo : style.notCheckedTodo
        });

    }
    _onDelete() {
        this.props.onDelete(this.props.title);
    }

    render() {
        return (
            <tr style={this.state.decoration}>
                <td style={style.tableContent}><button onClick={this._onDelete}>X</button></td>
                <td style={style.tableContent}>
                    <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
                </td>
                <td style={style.tableContent}>{this.props.title}</td>
                <td style={style.tableContent}>{this.props.children}</td>
            </tr>
        );
    }
}
Todo.propTypes = {
    title: React.PropTypes.string.isRequired
};

class TodoForm extends React.Component {
    render(){
        return (
            <div className="todoForm">
                I am a TodoForm.
            </div>
        )
    }
}

