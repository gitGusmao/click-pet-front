import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/partner/category.service';
import { Category } from 'src/app/services/partner/interface/category.interface';
import { ProductService } from 'src/app/services/partner/product.service';

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.scss'],
})
export class ProductRegisterComponent implements OnInit {
  fileToUpload: File | null = null;

  formProduct: FormGroup;
  category: any;

  private userToken!: string;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private authService: AuthService
  ) {
    this.userToken = this.authService.getToken;
  }

  ngOnInit(): void {
    this.formProduct = this.formBuilder.group({
      name: [null, [Validators.required]],
      costPrice: [null],
      category: [null, [Validators.required]],
      salePrice: [null, [Validators.required]],
      discount: [0],
      discountPrice: [null],
      weight: [1],
      height: [12],
      width: [12],
      depth: [17],
      sku: [null],
      stock: [0, [Validators.required]],
      activedProduct: [true],
      featuredProduct: [true],
      promotionProduct: [false],
      description: [null, [Validators.required]],
      photo_1: [null, [Validators.required]],
      photo_2: [null],
      photo_3: [null],
      photo_4: [null],
    });

    this.loadCategory();
  }

  get form() {
    return this.formProduct.controls;
  }

  public registerProduct() {
    console.log(this.formProduct.value)
    this.productService
      .registerRecord(this.formProduct.value, this.userToken)
      .subscribe((data) => {
        console.log(data);
      });
  }

  private loadCategory() {
    this.categoryService.getAllRecord(this.userToken).subscribe((data) => {
      console.log(data.body.data)
      this.category = data.body.data;
    });
  }
}
