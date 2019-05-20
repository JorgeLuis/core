import { Injectable } from '@angular/core';
import { SW, AP, NomYnumSerie, TargetAccess, NomYNewNombre, UtmUsap, UtmUsapAlta } from '../class/sw';

@Injectable({
  providedIn: 'root'
})
export class SwDataService {

  lastId = 0;
  lastIdAP = 0;
  lastIdSerie = 0;
  lastIdTarget = 0;
  lastIdNameNewName = 0;
  lastIdUSAP = 0;
  lastIdUSAPALta = 0;

  todos: SW[] = [];
  todosAP: AP[] = [];
  todosNumSerie: NomYnumSerie[] = [];
  todosTargetAccess: TargetAccess[] = [];
  todosNames: NomYNewNombre[] = [];
  todosUSAP: UtmUsap[] = [];
  todosUsapAlta: UtmUsapAlta[] = [];

  constructor() { }

  addTodo(todo: SW): SwDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  addTodoAP(ap: AP): SwDataService {
    if (!ap.id) {
      ap.id = ++this.lastIdAP;
    }
    this.todosAP.push(ap);
    return this;
  }

  addTodoSerie(serie: NomYnumSerie): SwDataService {
    if (!serie.id) {
      serie.id = ++this.lastIdSerie;
    }
    this.todosNumSerie.push(serie);
    return this;
  }

  addTodoTarget(target: TargetAccess): SwDataService {
    if (!target.id) {
      target.id = ++this.lastIdTarget;
    }
    this.todosTargetAccess.push(target);
    return this;
  }

  addTodoNewName(name: NomYNewNombre): SwDataService {
    if (!name.id) {
      name.id = ++this.lastIdNameNewName;
    }
    this.todosNames.push(name);
    return this;
  }

  addTodoUSAP(usap: UtmUsap): SwDataService {
    if (!usap.id) {
      usap.id = ++this.lastIdUSAP;
    }
    this.todosUSAP.push(usap);
    return this;
  }

  addTodoUSAPAlta(usap: UtmUsapAlta): SwDataService {
    if (!usap.id) {
      usap.id = ++this.lastIdUSAPALta;
    }
    this.todosUsapAlta.push(usap);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): SwDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  deleteTodoByIdAP(id: number): SwDataService {
    this.todosAP = this.todosAP
      .filter(ap => ap.id !== id);
    return this;
  }

  deleteTodoSerie(id: number): SwDataService {
    this.todosNumSerie = this.todosNumSerie
      .filter(serie => serie.id !== id);
    return this;
  }

  deleteTodoTarget(id: number): SwDataService {
    this.todosTargetAccess = this.todosTargetAccess
      .filter(t => t.id !== id);
    return this;
  }

  deleteTodoNewName(id: number): SwDataService {
    this.todosNames = this.todosNames
      .filter(t => t.id !== id);
    return this;
  }

  deleteTodoUSAP(id: number): SwDataService {
    this.todosUSAP = this.todosUSAP
      .filter(u => u.id !== id);
    return this;
  }

  deleteTodoUSAPAlta(id: number): SwDataService {
    this.todosUsapAlta = this.todosUsapAlta
      .filter(u => u.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): SW {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): SW[] {
    return this.todos;
  }

  deleteAllSW() {
    this.todos = [];
  }

  deleteAllUsap() {
    this.todosUsapAlta = [];
  }
  getAllTodosAP(): AP[] {
    return this.todosAP;
  }

  deleteAllAP() {
    this.todosAP = [];
  }

  getAllTodosSeries(): NomYnumSerie[] {
    return this.todosNumSerie;
  }

  getAllTodosTarget(): TargetAccess[] {
    return this.todosTargetAccess;
  }

  getAllTodosNewName(): NomYNewNombre[] {
    return this.todosNames;
  }

  getAllTodosUSAP(): UtmUsap[] {
    return this.todosUSAP;
  }

  getAllTodosUSAPAlta(): UtmUsapAlta[] {
    return this.todosUsapAlta;
  }
  // Simulate GET /todos/:id
  getTodoById(id: number): SW {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: SW) {
    const updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

}
