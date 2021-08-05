import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { resources } from 'src/environments/resources';
import { ApiBaseService } from '../api-base.service';
import { CrudService } from './crud.service';
import { Product } from './interface/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends CrudService<Product> {
  constructor(protected apiBaseService: ApiBaseService) {
    super(apiBaseService, resources.partner.product.base);
  }

  public getAllProduct(): Observable<any> {
    const uri: string = `${this.uri}`;

    return this.apiBaseService.get<any>(
      `${this.baseApiPath + uri}`,
      undefined,
      { 'categorias': '1' }
    );
  }
}
