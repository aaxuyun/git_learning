import React,{Component} from 'react';

export default class TodoItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const{id,text,isCompleted,toogleTodo,removeTodo}=this.props;
        return (
            <li>
                <a onClick={()=>{toogleTodo(id)}}
                   style={ {
                    textDecoration: isCompleted ? 'line-through' : 'none'
                     }}>{text}
                </a>
                <a onClick={()=>{removeTodo(id)}}>删除</a>
            </li>
        )
    }

};




