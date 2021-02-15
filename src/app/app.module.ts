import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './@components/navbar/navbar.component';
import { FooterComponent } from './@components/footer/footer.component';
import { HomepageComponent } from './@views/homepage/homepage.component';
import { ProfileComponent } from './@views/profile/profile.component';
import { LoginComponent } from './@views/login/login.component';
import { PublicAssoComponent } from './@views/public-asso/public-asso.component';
import { AdminPartnerComponent } from './@views/admin-partner/admin-partner.component';
import { RouterModule, Routes } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

const appRoutes: Routes = [
	{ path: '', component: HomepageComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'asso/:id', component: PublicAssoComponent },
	{ path: 'admin', component: AdminPartnerComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		FooterComponent,

		HomepageComponent,
		ProfileComponent,
		LoginComponent,
		PublicAssoComponent,
		AdminPartnerComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(appRoutes),
		MDBBootstrapModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
