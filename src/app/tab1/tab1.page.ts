import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public moviesList:any = [];


  constructor() {}

  async ngOnInit(){
    const response = await fetch("http://localhost:8000/filmes/movies/")
    const status = await response.status

    if(status===200){
      const data = await response.json()
      this.moviesList = data.results
      console.log(this.moviesList)
    }
    else{
      alert("Erro ao ligar servidor")
    }
  }

}
