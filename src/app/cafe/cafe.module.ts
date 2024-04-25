import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeTableComponent } from './components/cafe-table';

@NgModule({
  declarations: [CafeTableComponent],
  imports: [CommonModule],
  exports: [CafeTableComponent],
})
export class CafeModule {}
