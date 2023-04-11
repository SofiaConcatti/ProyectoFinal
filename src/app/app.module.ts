import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageWrapperComponent } from './shared/layout/page-wrapper/page-wrapper.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { MyMaterialModule } from './shared/modules/my-material.module';
import { StudentDialogComponent } from './shared/components/student-dialog/student-dialog.component';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { AppHeaderFontDirective } from './pages/students-page/header-size.directive';
import { NombreCompletoPipe } from 'src/app/pipes/nombre-completo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PageWrapperComponent,
    StudentsPageComponent,
    StudentDialogComponent,
    NavbarComponent,
    ToolbarComponent,
    AppHeaderFontDirective,
    NombreCompletoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
