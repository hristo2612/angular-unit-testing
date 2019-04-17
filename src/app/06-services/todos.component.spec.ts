import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { from } from 'rxjs';

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
});