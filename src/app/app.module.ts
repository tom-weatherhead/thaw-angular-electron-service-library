// **** Modules ****
// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms'; // Needed for ngModel
// import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';

// **** Service Modules ****
// import { ConfigurationModule } from './modules/configuration/configuration.module';
import { ElectronModule } from './modules/electron/electron.module';
// import { FileModule } from './modules/file/file.module';
// import { LoggerModule } from './modules/logger/logger.module';

// **** Components ****

@NgModule({
	schemas: [],
	imports: [
		// AppRoutingModule,
		BrowserModule
		// CommonModule,
		// FormsModule,
	],
	declarations: [AppComponent],
	providers: [
		// E.g. Angular services
		// ConfigurationModule,
		ElectronModule // ,
		// FileModule,
		// LoggerModule
	],
	exports: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
