import { productData } from '../mocks/mock-product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public terminalMessage: string;
  public title = 'Suggested product component';
  public product = productData;
  public redirectTo() {
    this.terminalMessage = 'Переход на компонент продукта';
  }
}
