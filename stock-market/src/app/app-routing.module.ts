import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { ImportDataComponent } from './Admin/import-data/import-data.component';
import { ManageCompanyComponent } from './Admin/manage-company/manage-company.component';
import { ManageExchangeComponent } from './Admin/manage-exchange/manage-exchange.component';
import { UpdateIPOComponent } from './Admin/update-ipo/update-ipo.component';
import { CompareCompanyComponent } from './User/compare-company/compare-company.component';
import { CompareSectorComponent } from './User/compare-sector/compare-sector.component';
import { IPOsComponent } from './User/ipos/ipos.component';
import { OthersComponent } from './User/others/others.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent,children:[
    {path:'import-data',component:ImportDataComponent},
    {path:'manage-company',component:ManageCompanyComponent},
    {path:'manage-exchange',component:ManageExchangeComponent},
    {path:'update-ipo',component:UpdateIPOComponent}
  ]},
  {path:'user-dashboard',component:UserDashboardComponent,children:[
    {path:'compare-company',component:CompareCompanyComponent},
    {path:'compare-sector',component:CompareSectorComponent},
    {path:'ipos',component:IPOsComponent},
    {path:'others',component:OthersComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
