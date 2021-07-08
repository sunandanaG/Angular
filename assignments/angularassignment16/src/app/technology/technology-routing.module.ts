import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { AwsComponent } from './aws/aws.component';
import { Html5Component } from './html5/html5.component';
import { JavaScriptComponent } from './java-script/java-script.component';
import { JavaComponent } from './java/java.component';
import { JdbcComponent } from './jdbc/jdbc.component';
import { OopsComponent } from './oops/oops.component';
import { TechnologyComponent } from './technology.component';
import { WebComponent } from './web/web.component';


const routes: Routes = [{ path: '', component: TechnologyComponent },
{path:'java',component:JavaComponent,
children:
[{path:'javascript',component:JavaScriptComponent},
{path:'jbdc',component:JdbcComponent},
{path:'oops',component:OopsComponent}]},

{path:'web',component:WebComponent,
children:
[{path:'aws',component:AwsComponent},
{path:'angular',component:AngularComponent},
{path:'html5',component:Html5Component}]}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologyRoutingModule { }
