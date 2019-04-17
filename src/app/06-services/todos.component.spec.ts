import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { from, empty, throwError } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property whit items returned from server', () => {
    let todos = [ { id: 1, title: 'Wash the dishes' }, { id: 2, title: 'Clean up your room' }, { id: 3, title: 'Go outside' } ];

    // create a spy object of our service and fake the method getTodos
    // so when our component calls todoService.getTodos it will return a mocked observable
    spyOn(service, 'getTodos').and.callFake(() => {
      return from([ [ { id: 1, title: 'Wash the dishes' }, { id: 2, title: 'Clean up your room' }, { id: 3, title: 'Go outside' } ] ]);
    });

    component.ngOnInit();

    expect(component.todos).toEqual(todos);
  });

  it('should call the server to save the changes when a new item is added', () => {
    // create a spy object and use fake method add to return an empty observable
    let spy = spyOn(service, 'add').and.callFake(() => {
      return empty();
    });

    // call component add method
    component.add();

    // expect the spy service method to have been called
    expect(spy).toHaveBeenCalled();
  });

  it('should push the new todo returned from the server', () => {

    let todo = { id: 1, title: 'Play the drums' };

    // crete a spy for add and return the newly created todo item
    spyOn(service, 'add').and.returnValue(from([ { id: 1, title: 'Play the drums' } ]));

    component.add();

    // expect todos property on component to contain the newly created todo from the server
    expect(component.todos).toContain(todo);
  });

  it('should set the message property if server returns an error when adding a new todo', () => {

    let error = 'Error: failed to add todo';

    // call spy and in case the server throws error throw and error observable with a message
    spyOn(service, 'add').and.returnValue(throwError(error));

    component.add();

    // expect the component message property to be the error returned from the observable
    expect(component.message).toBe(error);
  });
});