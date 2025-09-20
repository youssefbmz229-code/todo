import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo {
  todos = [
    {id : 1, task : "Présenter les composants Angular", state:"done",modifier:""},
    {id : 2, task : "Présenter les mécanisme de binding", state:"pending",modifier:""},
    {id : 3, task : "Introduction aux directives", state:"pending",modifier:""}
  ]
  nouvelletache: string = "";

  ajout(){
    if (this.nouvelletache.trim() !== "") {
      this.todos.push({
        id: this.todos.length + 1,
        task: this.nouvelletache,
        state: "pending",
        modifier:""
      });
      this.nouvelletache = "";
  }
}
supp(id:number){

  const newTodos = []
  const aux = this.todos
  for(let i=0; i<aux.length;i++){

    const todo = aux[i] 
    if(todo.id === id ){
      continue //7aress mourour
    }
    newTodos.push({id: newTodos.length + 1,
                  task: todo.task,
                  state: todo.state,
                modifier:""
                })
  }
  this.todos = newTodos;

}
modif(todo:any){
  todo.task = todo.modifier
  todo.modifier = null

}
}
