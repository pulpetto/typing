import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    successMsg = false;
    randomText = lorem.sentence();

    onInput(inputVal: string) {
        if (inputVal === this.randomText) {
            this.successMsg = true;
        }
    }
}
