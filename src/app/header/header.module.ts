import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderIndexComponent } from './header-index/header-index.component';
import {SharedModule} from "../shared/shared.module";
import {HeaderRoutingModule} from "./header-routing.module";
import { HeaderSlimComponent } from './header-slim/header-slim.component';
import { HeaderExamplesComponent } from './header-examples/header-examples.component';
import { HeaderCentralComponent } from './header-central/header-central.component';


@NgModule({
  declarations: [
    HeaderIndexComponent,
    HeaderSlimComponent,
    HeaderExamplesComponent,
    HeaderCentralComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HeaderRoutingModule
  ]
})
export class HeaderModule { }