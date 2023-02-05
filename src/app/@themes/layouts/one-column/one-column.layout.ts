import {Component} from '@angular/core';

@Component({
  selector: 'app-one-column-layout',
  styleUrls: ['./one-column.layout.css'],
  template: `
    <clr-main-container>
      <app-header></app-header>
      <div class="content-container">
        <app-side-bar></app-side-bar>
        <div class="content-area">
          <ng-content select="router-outlet"></ng-content>
        </div>
      </div>
    </clr-main-container>
    <!--app-header></app-header>
    <app-side-bar></app-side-bar>
    <div class="main-container">
      <div class="content-container">
        <div class="content-area"><p>Content Area</p>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu odio nisi. Vestibulum dignissim eget
            massa sit amet feugiat. Quisque auctor mattis quam eu suscipit. Morbi ipsum risus, feugiat vitae sem at, tincidunt elementum
            magna. Phasellus tristique posuere dui, ut tempus felis sagittis quis. Integer iaculis ultrices elit, sed venenatis eros.
            Vivamus
            interdum semper velit eget gravida. Sed finibus eget lacus sed semper. Suspendisse fringilla, tellus in molestie cursus, sapien
            purus volutpat lacus, eget venenatis erat est vitae libero. Aliquam et orci hendrerit, consequat purus non, imperdiet
            ipsum. </p>
        </div>
      </div>
    </div-->
  `,
})
export class OneColumnLayoutComponent {
}
