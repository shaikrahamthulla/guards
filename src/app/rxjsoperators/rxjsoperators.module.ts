import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorsComponent } from './operators/operators.component';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

const rxjsRoutes: Routes = [
  { path: "rxjs", component: OperatorsComponent }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(rxjsRoutes)
  ],
  declarations: [OperatorsComponent]
})
export class RxjsoperatorsModule { }
