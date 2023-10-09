import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sorteio-habitacao-thainan';

  constructor(private router: Router) { 
  }

  ngOnInit() {
    this.router.navigate(['/sorteio']); 
  }
}
