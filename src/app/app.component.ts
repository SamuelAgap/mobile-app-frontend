import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router:Router
  ) {
    const token = sessionStorage.getItem("token")
    if(token === null){
      router.navigate(["login"])
    }
    else{
      router.navigate(["tabs/tab1"])
    }
  }
}
