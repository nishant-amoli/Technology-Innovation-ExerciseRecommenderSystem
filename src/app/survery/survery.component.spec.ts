import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveryComponent } from './survery.component';

describe('SurveryComponent', () => {
  let component: SurveryComponent;
  let fixture: ComponentFixture<SurveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




// <app-app-header></app-app-header>
// <div>
//     <mat-card class="survey-card">
//         <mat-card-header>
//             <mat-card-title>
//                 Question title?
//             </mat-card-title>
//         </mat-card-header>
//         <mat-card-content class="survey-content">
//             <!-- Checkbox Option -->
//             <span class="survey-radio-group">
//                 <mat-checkbox color='primary'>Option 1</mat-checkbox>
//                 <mat-checkbox color='primary'>Option 2</mat-checkbox>
//                 <mat-checkbox color='primary'>Option 3</mat-checkbox>
//                 <mat-checkbox color='primary'>Option 4</mat-checkbox>
//             </span>

//             <!-- Radio Option -->
//             <mat-radio-group class="survey-radio-group" [(ngModel)]="favoriteSeason">
//                 <mat-radio-button *ngFor="let season of seasons" [value]="season">
//                     {{season}}
//                 </mat-radio-button>
//             </mat-radio-group>

//             <!-- Selection Option -->
//             <mat-form-field appearance="fill">
//                 <mat-label>Favorite food</mat-label>
//                 <mat-select>
//                     <mat-option *ngFor="let food of foods" [value]="food.value">
//                         {{food.viewValue}}
//                     </mat-option>
//                 </mat-select>
//             </mat-form-field>

//             <!-- Text Option -->
//             <div>
//             <mat-form-field appearance="fill">
//                 <mat-label>Enter your answer</mat-label>
//                 <input matInput #input placeholder="Answer">
//               </mat-form-field>
//             </div>
//         </mat-card-content>

//         <!-- <mat-card-actions align='end'>
//             <button mat-raised-button color='accent'>Cancel</button>
//             <button mat-raised-button color='primary'>Next</button>
//         </mat-card-actions> -->
//     </mat-card>
// </div>