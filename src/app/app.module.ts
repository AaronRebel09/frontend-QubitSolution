import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material
import { MaterialModule } from './material';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule, Routes } from '@angular/router';
// Routes
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
// Flex
import {FlexLayoutModule} from '@angular/flex-layout';
// Time Line
import { MglTimelineModule } from 'angular-mgl-timeline';
// Material Icon
import {MatIconModule} from '@angular/material/icon';
import { RegistrationComponentComponent } from './second-page/registration-component/registration-component.component';
import { LoginComponentComponent } from './second-page/login-component/login-component.component';
// Material Button
import {MatButtonModule} from '@angular/material/button';

const appRoutes: Routes = [
  {path: '',
  redirectTo: '/first-page',
  pathMatch : 'full'},
  { path: 'first-page', component: FirstPageComponent },
  { path: 'second-page', component: SecondPageComponent },
  { path: 'third-page', component: ThirdPageComponent },
  { path: 'fourth-page', component: FourthPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    RegistrationComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    MglTimelineModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
