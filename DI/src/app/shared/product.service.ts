import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  constructor(public logger: LoggerService) { }
  getProduct(): Product {
    this.logger.log('ProductService');
    return new Product('iPhone7', 5899, '最新款苹果手机');
  }
}

export class Product {
  constructor(public name: string, public price: number, public desc: string) { }
}
