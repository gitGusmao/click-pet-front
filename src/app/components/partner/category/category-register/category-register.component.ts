import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/partner/category.service';
@Component({
  selector: 'app-category-register',
  templateUrl: './category-register.component.html',
  styleUrls: ['./category-register.component.scss'],
})
export class CategoryRegisterComponent implements OnInit {
  formCategory: FormGroup;

  private userToken!: string;
  private categoryId: any;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userToken = this.authService.getToken;
    this.categoryId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.formCategory = this.formBuilder.group({
      nome: [null, [Validators.required]],
    });

    if (this.categoryId) {
      this.loadCategoryById(this.categoryId);
    }
  }

  get form() {
    return this.formCategory.controls;
  }

  public submitCategory() {
    if (this.categoryId) {
      this.updateCategory(this.categoryId);
    } else {
      this.registerCategory();
    }
  }

  private registerCategory() {
    this.categoryService
      .registerRecord(this.formCategory.value, this.userToken)
      .subscribe((data) => {
        this.router.navigate(['/partner/category/category-list']);
      });
  }

  private updateCategory(categoryId: string) {
    this.categoryService
      .updateRecord(categoryId, this.formCategory.value, this.userToken)
      .subscribe((data) => {
        this.router.navigate(['/partner/category/category-list']);
      });
  }

  private loadCategoryById(categoryId: string) {
    this.categoryService
      .getRecordById(categoryId, this.userToken)
      .subscribe((category) => {
        var data = category.body;
        this.form['nome'].setValue(data.nome);
      });
  }
}
