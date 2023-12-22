import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowShoppingComponent } from './show-shopping/show-shopping.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: ':name',
        component: DetailsComponent,
      },
    ],
  },
  {
    path: 'add',
    component: AddProductComponent,
  },
  {
    path: 'shopping-cart',
    component: ShowShoppingComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
