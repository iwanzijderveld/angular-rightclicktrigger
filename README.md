# angular-rightclicktrigger
Angular 2+ material menu trigger for right mouse button

## Installation:
  'npm install angular-rightclicktrigger'

## Usage:
 ### 1. Import the module
 import `RightClickTriggerModule` in the NgModule of your application.
 
 ``` import { RightClickTriggerModule } from 'angular-rightclicktrigger';
    imports[
        ...
        RightClickTriggerModule,
        ...
        ]
 ```
 ### 2. Set the trigger on the menu item of your choice
  ```
  <button mat-menu-item [rightClickTrigger]="someMenu">Open sub menu</button>

  <mat-menu #someMenu>
    <button mat-menu-item>Test</button>
  </mat-menu>
  ```
Right now it only works when you build or serve the application with --aot
`ng serve --aot` or `ng build --aot`
