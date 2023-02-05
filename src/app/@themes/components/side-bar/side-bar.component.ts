import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-bar',
  // templateUrl: './side-bar.component.html',
  template: `
    <clr-vertical-nav
      class="clr-vertical-nav documentation-vertical-nav clr-nav-level-2 has-nav-groups has-icons"
      style="padding-top: 0 !important;"
    >
      <a role="listitem" routerlink="get-started" routerlinkactive="active" class="nav-link" href="/documentation/get-started">
        <clr-icon shape="help-info" class="nav-icon"></clr-icon>
        <span class="nav-text"> Products </span></a>
      <a role="listitem" routerlink="get-started" routerlinkactive="active" class="nav-link" href="/documentation/get-started">
        <clr-icon shape="help-info" class="nav-icon"></clr-icon>
        <span class="nav-text"> Orders </span></a>
    </clr-vertical-nav>
  `,
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
