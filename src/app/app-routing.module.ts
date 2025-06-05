import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'switchapps',
    loadChildren: () => import('./components/switchapps/switchapps.module').then( m => m.SwitchappsPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./components/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'event-details',
    loadChildren: () => import('./components/event-details/event-details.module').then( m => m.EventDetailsPageModule)
  },
  {
    path: 'cheffs',
    loadChildren: () => import('./components/cheffs/cheffs.module').then( m => m.CheffsPageModule)
  },
  {
    path: 'ourservice',
    loadChildren: () => import('./components/ourservice/ourservice.module').then( m => m.OurservicePageModule)
  },
  {
    path: 'orderconfirm',
    loadChildren: () => import('./components/orderconfirm/orderconfirm.module').then( m => m.OrderconfirmPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./components/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'websitehome',
    loadChildren: () => import('./components/websitehome/websitehome.module').then( m => m.WebsitehomePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
