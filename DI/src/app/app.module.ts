import { AnotherProductService } from './shared/another-product.service';
import { LoggerService } from './shared/logger.service';
import { ProductService } from './shared/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';


@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: ProductService,
    useFactory: (logger: LoggerService, isDev: boolean) => {
      // const dev = Math.random() > 0.5;
      console.log(isDev);
      if (isDev) {
        return new ProductService(logger);
      } else {
        return new AnotherProductService(logger);
      }
    },
    deps: [LoggerService, 'IS_DEV_ENV']
  }, LoggerService, {
    provide: 'IS_DEV_ENV', useValue: false
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
