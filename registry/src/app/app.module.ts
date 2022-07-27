import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHeaderComponent } from './global/admin-header/admin-header.component';
import { JuryHeaderComponent } from './global/jury-header/jury-header.component';
import { CitizenHeaderComponent } from './global/citizen-header/citizen-header.component';
import { FooterComponent } from './global/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { UpdateRegisterResultComponent } from './pages/update-register-result/update-register-result/update-register-result.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHeaderComponent,
    JuryHeaderComponent,
    CitizenHeaderComponent,
    FooterComponent,
    routingComponents,
    UpdateRegisterResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
