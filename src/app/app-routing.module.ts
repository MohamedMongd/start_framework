import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortofliComponent } from './portofli/portofli.component';
import { NotFoundComponent } from './notfound/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent,title:'home' },
  { path: 'about', component: AboutComponent,title:'about' },
  { path: 'contact', component: ContactComponent,title:'contact' },
  { path: 'portofli', component: PortofliComponent,title:'portofli' },
  { path:'**',component:NotFoundComponent,title:'Notfound'}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
