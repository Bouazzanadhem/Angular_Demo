import { CRUDService } from './../services/crud.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private productService: CRUDService
    ) { }
    Products:any
    Searchtext:any;
  ngOnInit(): void {
   this.Products = this.productService.getAllProduct()
  }
}
