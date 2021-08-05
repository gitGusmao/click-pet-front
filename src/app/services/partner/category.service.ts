import { Injectable } from '@angular/core';
import { resources } from 'src/environments/resources';
import { ApiBaseService } from '../api-base.service';
import { CrudService } from './crud.service';
import { Category } from './interface/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends CrudService<any> {
  constructor(protected apiBaseService: ApiBaseService) {
    super(apiBaseService, resources.partner.category.base);
  }
}
