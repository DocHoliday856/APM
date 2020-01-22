import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './convertToSpaces.pipe';



@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarComponent,
    FormsModule,
    CommonModule,
    ConvertToSpacesPipe
  ]
})
export class SharedModule { }
