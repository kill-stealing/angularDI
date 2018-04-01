import { LoggerService } from './logger.service';
import { ProductService, Product } from './product.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AnotherProductService implements ProductService {
  getProduct(): Product {
    this.logger.log('AnotherProductService');
    return new Product('Mate9', 3899, '最新款华为手机');
  }
  constructor(public logger: LoggerService) { }
}
