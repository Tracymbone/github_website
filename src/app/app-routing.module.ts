import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {
    path: 'search', component:SearchComponent
    
  },
  {
    path: 'form', component:FormComponent

  },

{
  path: 'home', component:HomeComponent
},
{
path: 'contact', component:ContactComponent
},
{
  path: '', redirectTo:"/home", pathMatch:"full"

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
