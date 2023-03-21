import { AppComponent } from "./app.component"

describe('AAA', () => {
  it('test 1', () => {
    
    //Arrange
    let comp = new AppComponent();

    //Act
    let msg = comp.showMessage('Hello');

    //Assert
    expect(msg).toBe('Hello');

  })
})