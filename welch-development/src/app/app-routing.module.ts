import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { AppsComponent } from './apps/apps.component';
import { SmsComponent } from './apps/sms/sms.component';
import { DatatableComponent } from './apps/datatable/datatable.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'apps', component: AppsComponent },
  { path: 'apps/sms', component: SmsComponent },
  { path: 'apps/datatable', component: DatatableComponent },
  { path: 'resume', component: ResumeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
