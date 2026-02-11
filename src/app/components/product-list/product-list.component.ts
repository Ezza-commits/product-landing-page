import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
   products: any[] = [];
  filteredProducts: any[] = [];

  categories: string[] = [];
  loading = false;
  selectedCategory = 'all';
  searchTerm = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadAllProducts();
  }

  loadCategories() {
    this.productService.getCategories().subscribe(res => {
      this.categories = res;
    });
  }

  loadAllProducts() {
    this.loading = true;
    this.selectedCategory = 'all';
    this.productService.getProducts().subscribe(res => {
      this.products = res;
      this.filteredProducts = res;
      this.loading = false;
    });
  }

  filterByCategory(category: string) {
    this.loading = true;
    this.selectedCategory = category;

    this.productService.getProductsByCategory(category).subscribe(res => {
      this.products = res;
      this.applySearch();
      this.loading = false;
    });
  }

  applySearch() {
    const term = this.searchTerm.toLowerCase();

    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(term)
    );
  }
}
