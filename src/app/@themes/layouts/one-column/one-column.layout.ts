import {Component} from '@angular/core';

@Component({
  selector: 'app-one-column-layout',
  styleUrls: ['./one-column.layout.css'],
  template: `
    <div class="main-container">
      <app-header></app-header>
  <!--div class="content-container">
    <div class="content-area">
      <app-products></app-products>
    </div>
</div-->
      <div class="content-container">
        <nav class="sidenav">
          ...
        </nav>
      </div>
    </div>
  `,
})
export class OneColumnLayoutComponent {}
