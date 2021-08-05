import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/partner/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'id'];
  dataSource: any = null;

  private userToken!: string;

  constructor(
    private categoryService: CategoryService,
    private authService: AuthService,
    private router: Router
  ) {
    this.userToken = this.authService.getToken;
  }

  ngOnInit(): void {
    this.loadCategory();
  }

  private loadCategory() {
    this.categoryService.getAllRecord(this.userToken).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data.body);
    }, () => {
      this.dataSource = new MatTableDataSource();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteCategory(categoryId: any) {
    this.categoryService
      .deleteRecord(categoryId, this.userToken)
      .subscribe((data) => {
        this.loadCategory();
      });
  }

  editCategory(categoryId: any) {
    this.router.navigate(['/partner/category/category-register', categoryId]);
  }
}
