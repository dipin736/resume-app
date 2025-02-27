import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dog-popup',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  template: `
    <h2>Dog Breed</h2>
    <img [src]="data.imageUrl" alt="Dog Image" />
  `,
})
export class DogPopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { imageUrl: string }) {}
}