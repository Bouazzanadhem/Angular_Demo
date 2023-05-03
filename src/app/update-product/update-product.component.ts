import { CRUDService } from './../services/crud.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  submitted= false;
  updateprodForm: FormGroup = new FormGroup({
    Name: new FormControl('',[Validators.required]),
    Discription: new FormControl('',[Validators.required]),
    Quantity: new FormControl('',[Validators.required]),
    Price: new FormControl('',[Validators.required])
  })
  constructor(private route: ActivatedRoute,private router: Router,private productService: CRUDService) { }
  prodId: any
  Prod:any;
  ngOnInit(): void {
    this.prodId= this.route.snapshot.params['id']
    this.Prod = this.productService.getProductById(this.prodId)
   
    this.updateprodForm=new FormGroup({
    id: new FormControl(''),
    Name: new FormControl('',[Validators.required]),
    Discription: new FormControl('',[Validators.required]),
    Quantity: new FormControl('',[Validators.required]),
    Price: new FormControl('',[Validators.required])
  });
  this.updateprodForm.patchValue(this.Prod)
  }
  updateproduit(){
    this.submitted = true;
    if(this.updateprodForm.invalid){
      return;
    }
    this.productService.updateProductDataById(this.updateprodForm.value,this.prodId)
    this.router.navigate(['list-produit'])
  }
}
