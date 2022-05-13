import { Component, HostListener, VERSION } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  
  selectedRating!: number;
  takeSuggestion = false;

  rating = [1,2,3,4,5,6,7,8,9,10];
  starValues = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  countDownDisplay = '';
  progressBarValue = 100;

  editForm = this.fb.group({
    id: [],
    rating: [null, [Validators.required]],
    suggestion: [null, [Validators.minLength(0), Validators.maxLength(255)]],
    userId: [],
  });

  constructor(
    private fb: FormBuilder){}

    onClickValue(value: any): void {
      this.selectedRating = value;
      if (this.selectedRating === 1) {
        this.takeSuggestion = true;
      } else {
        this.takeSuggestion = false;
      }
    }

    back(): void {
      window.history.back();
    }

    save(): void {}

    onKeydownHandler(event: KeyboardEvent) {
      if(event.key === "Escape"){
        console.log(event.key);
      }
  }

  sendit(data: any){
    console.log("Value",data.target.value)
 }

 @HostListener('document:keyup.escape', ['$event']) onKeyUp(event: KeyboardEvent):void {
  console.log(event);
 }
}
