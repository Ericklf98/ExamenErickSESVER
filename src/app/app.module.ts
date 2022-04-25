import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErickCardComponent } from './Components/ComponentesCompartidos/erick-card/erick-card.component';
import { ModalErickComponent } from './Components/ComponentesCompartidos/modal-erick/modal-erick.component';
import { LoginComponent } from './Components/login/login.component';

import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { PrincipalComponent } from './Components/principal/principal.component';
import { SidebarComponent } from './Components/principal/sidebar/sidebar.component';
import { UniversalComponent } from './Components/principal/universal/universal.component';
import { BrandComponent } from './Components/principal/brand/brand.component';
import { CategoryComponent } from './Components/principal/category/category.component';
import { FiltroPipe } from './Components/pipes/filtro.pipe';
import { ProductTypeComponent } from './Components/principal/product-type/product-type.component';
import { ColoresComponent } from './Components/ComponentesCompartidos/colores/colores.component';
@NgModule({
  declarations: [
    AppComponent,
    ErickCardComponent,
    ModalErickComponent,
    LoginComponent,
    PrincipalComponent,
    SidebarComponent,
    UniversalComponent,
    BrandComponent,
    CategoryComponent,
    FiltroPipe,
    ProductTypeComponent,
    ColoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule ,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    RouterModule.forRoot([


      // { path: 'login', component: LoginComponent },
      { path: 'items', component: PrincipalComponent },
      { path: 'categoria', component: CategoryComponent },
      { path: 'marca', component: BrandComponent},
      { path: 'tipo', component: ProductTypeComponent },
      { path: 'home', component: UniversalComponent },
      { path: 'app-interfaz/:id', component: PrincipalComponent },

      { path: '**', redirectTo: 'any-brand' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
