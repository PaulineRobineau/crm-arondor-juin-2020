import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';



@NgModule({
  declarations: [PageLoginComponent],
  imports: [
    CommonModule,
    TemplatesModule,
    TextModule
  ]
})
export class LoginModule { }
