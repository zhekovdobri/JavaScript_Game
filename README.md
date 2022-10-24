<img align="justify" alt="chart" width="950px" src="https://raw.githubusercontent.com/zhekovdobri/JavaScript_Number_Game/aee747726003376a043c9e3758614c8533edd9f0/Number_Game1200.png">

# JavaScript_Number_Game

#### By: Dobri Zhekov

#### [<ins>Check the entire project here</ins>](https://zhekovdobri.github.io/Angular-Pizza-app/)

## Technologies Used

<div class=pull-left>

</div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div class=pull-right>
<img align="right" alt="chart" height="200px" src="https://github.com/zhekovdobri/Angular-Pizza-app/blob/main/Pizza_language_chart.png">
</div>

* _TypeScript_
* _CSS_
* _HTML_


<br />

## Description
The idea of this project came along time ago and the reason was a collage of mine who dreamed to become a pizza master chef. He neglected all his job as a programmer and start to make a pizza. Nothing wrong with that Alex! That is why I decided to help him creating this project. The project represents a simple form to order food and drinks thru this app. I use here a reactive forms to manage the user input. That is why the first thing after my app creation was to import { ReactiveFormsModule } in to "app.module.ts".
<br />

`import { ReactiveFormsModule } from '@angular/forms';`

<br />
The project starts with a header and component which presents the header background image.

```
<div class="header">
    <app-images></app-images>
</div> 
```
I used string interpolation to make my "food" and "drinks" components reusable. This way the code is much more clearer and short for use. Then I can put this reusable template with code where I want and change its value when I want. For this purpose I created into the components ".ts" file an array which holds the parameters with my desired values. 
```
export class HotDrinksComponent implements OnInit {
    
    data3 = [{
        label:'Cappuccino: ',
        src:'assets/images/Cappuccino.png',
        formControlName:'cappuccino'
    },{
        label:'Mocha: ',
        src:'assets/images/Mocha.png',
        formControlName:'mocha'
    },{
        label:'Americano: ',
        src:'assets/images/Americano.png',
        formControlName:'americano' 
    }];
    }
```
Then into the component ".html" file I created a template which uses a string interpolation {{keyword.array}} to display my parameters values and an "ngFor" loop directive which iterates my array content.
```
<div class="container margin-30">
   <div class="card">
     <div class="card-body">
         <form [formGroup]="form">
            <h2 class="text-center">Hot drinks</h2>
            <div *ngFor="let item of data3">
               <label>{{item.label}}</label>
               <div class="form-control-1">
                  <img class="pizza" src="{{item.src}}" alt="coffe" width="42" height="42" >
                  <app-counter-input class="quantity h-100" formControlName="{{item.formControlName}}" style="width: 105px;" ></app-counter-input>
               </div>
            </div>
            <pre class="form-values">
               {{ form.value | json }}
             </pre>
         </form>
      </div>
   </div>
</div>
```
On this project I used SCSS instead CSS. Next to it I created a form which hold the "food" and the "drinks" selectors.  and another form which contains the inputs for "name-address-phone". The "food" and "drinks" forms along with "address-name-phone" form have at the bottom json pipe {{ value_expression | json }}. Json pipe converts a value into its JSON-format. When the customer typing his order, json changing it's value on the bootm of the page. In to the all of my components in theirs "ts" file I have used the "createFomr()" method, which contains the definition of my form fields. The exception is the "counter-input" component.

</div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div class=pull-right>
<img align="right" alt="chart" height="100px" src="https://github.com/zhekovdobri/Angular-project-Animation/blob/13623e56193965cc9087844ff371f984af0c11ee/src/assets/images/Directory_structure2-removebg-preview.png">
</div>

## Directory structure:

<img alt="chart" src="https://github.com/zhekovdobri/Angular-Pizza-app/blob/main/assets/images/Directory%20Tree%20Pizza.png">

## Setup/Installation Requirements

### Clone a repository using the command line 

1. From the repository, click "Code" and copy the address (either the SSH format or the HTTPS). 
2. From a terminal window (cmd or Bash), change to the local directory where you want to clone your repository.
3. Paste the address you copied from GitHub, with one of the next comand:

* **Clone over HTTPS**<br>
  $ git clone (https://..)
  
* **Clone over SSH**<br>
  $ git clone (ssh://..)

# Angular-Pizza-app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Known Bugs

* No bugs

## License


Angular-Pizza-app is licensed under the GNU GPL 3 license.

<sub><sup>Copiright © 2016-2021 Dobri Zhekov All Rights Reserved</sup></sub>
