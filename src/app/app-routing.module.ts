import { ListProductComponent } from './list-product/list-product.component';
import { AuthGuard } from './Guards/auth.guard';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/ListProduct',
    pathMatch: 'full'
  },{
    path: "login",
    component: SignInComponent
  },{
    path: "register",
    component: SignUpComponent
  },{
    path: "Home",
    component: HomeComponent
  },{
    path: "ListProduct",
    canActivate: [AuthGuard],
    component : ListProductComponent
  },{
    path : "AddProduct",
    canActivate: [AuthGuard],
    component: AddProductComponent
  },{
    path: "UpdateProduct/:id",
    canActivate: [AuthGuard],
    component: UpdateProductComponent
  },{
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
