import { TodoFormComponent } from './todo-form.component'; 
import { FormBuilder } from '@angular/forms';

describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('should create a form with 2 fields', () => {
    // check if form contains the controls "name", "email" and "password"
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });

  it('should make the NAME field required', () => {
    // check if the "name" control becomes invalid when we set an empty value
    let field = component.form.get('name');
    field.setValue('');

    expect(field.valid).toBeFalsy();
  });

  it('should make the NAME field required AND VALID, when given some input', () => {
    // check if the "name" control becomes valid when we set some value
    let field = component.form.get('name');
    field.setValue('Hristo Bogoev');

    expect(field.valid).toBeTruthy();
  });

  it('should make the PASSWORD field required AND VALID with minlenght of 6', () => {
    // check if the "password" control becomes valid when we set a string
    let field = component.form.get('password');
    field.setValue('password1234');

    expect(field.valid).toBeTruthy();
  });

  it('should make the PASSWORD field required AND INVALID with minlenght of 6', () => {
    // check if the "password" control becomes valid when we set a string
    let field = component.form.get('password');
    field.setValue('pas12');

    expect(field.valid).toBeFalsy();
  });


});