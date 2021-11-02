import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { ImportDataComponent } from './Admin/import-data/import-data.component';
import { ManageCompanyComponent } from './Admin/manage-company/manage-company.component';
import { ManageExchangeComponent } from './Admin/manage-exchange/manage-exchange.component';
import { UpdateIPOComponent } from './Admin/update-ipo/update-ipo.component';
import { IPOsComponent } from './User/ipos/ipos.component';
import { CompareCompanyComponent } from './User/compare-company/compare-company.component';
import { CompareSectorComponent } from './User/compare-sector/compare-sector.component';
import { OthersComponent } from './User/others/others.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ImportDataComponent,
    ManageCompanyComponent,
    ManageExchangeComponent,
    UpdateIPOComponent,
    IPOsComponent,
    CompareCompanyComponent,
    CompareSectorComponent,
    OthersComponent,
    AdminDashboardComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
