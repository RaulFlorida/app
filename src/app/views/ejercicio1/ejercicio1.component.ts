import { Component } from '@angular/core';
import { RickMortyServiceService } from 'src/app/services/rick-morty-service.service';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component {

  public constructor(public service: RickMortyServiceService){}

  public clase: string = "";
  public name: string = "";

  public onSubmit(){

    if(this.clase == "capitulo"){

      this.service.getEpisodes(this.name).subscribe(response=>{
        console.log(response);

        for (let index = 0; index < 1; index++) {
          this.service.getCharacters("").subscribe(response=>{

          })
        }

      })

    } else if(this.clase == "personaje"){

      this.service.getCharacters(this.name).subscribe(response=>{
        console.log(response[0]);
      })
    }
  }

}
