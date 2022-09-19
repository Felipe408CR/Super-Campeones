import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  // atributos=variables

  nombre:string="Juan";
  edad:number=33;

  numeros:any[]=[1,2,3,4,5,6,7,8,9,10];
  // personajes:any[]=["https://firebasestorage.googleapis.com/v0/b/super-campeones-e1639.appspot.com/o/benji.webp?alt=media&token=59bf9a7d-7680-4281-944e-cbaf515959ce","https://firebasestorage.googleapis.com/v0/b/super-campeones-e1639.appspot.com/o/bruce.jpg?alt=media&token=35b70f85-a92d-49c4-a53c-25ad5e3104e7","https://firebasestorage.googleapis.com/v0/b/super-campeones-e1639.appspot.com/o/eddy.jpg?alt=media&token=3c2b77d7-247b-4845-9cc0-f0849ffaa3e8","https://firebasestorage.googleapis.com/v0/b/super-campeones-e1639.appspot.com/o/oliver.jpg?alt=media&token=d569b4a6-edad-4f24-9eb1-792bcf5e1e76","https://firebasestorage.googleapis.com/v0/b/super-campeones-e1639.appspot.com/o/tom.jpg?alt=media&token=d4c2a1cf-c2d3-493f-b3b9-50040b5d7663","https://firebasestorage.googleapis.com/v0/b/super-campeones-e1639.appspot.com/o/tommy.jpg?alt=media&token=49ad89e5-89c7-44f4-96aa-6f92e4d5e4b3"]

  personajes:Personaje[]=[
    {"nombre":"Benji",
    "edad":20,
    "foto":"https://firebasestorage.googleapis.com/v0/b/super-campeones-e1639.appspot.com/o/benji.webp?alt=media&token=59bf9a7d-7680-4281-944e-cbaf515959ce"},
    {"nombre":"Oliver",
    "edad":20,
    "foto":"https://firebasestorage.googleapis.com/v0/b/super-campeones-e1639.appspot.com/o/oliver.jpg?alt=media&token=d569b4a6-edad-4f24-9eb1-792bcf5e1e76"},
    {"nombre":"Tom",
    "edad":20,
    "foto":"https://firebasestorage.googleapis.com/v0/b/super-campeones-e1639.appspot.com/o/tom.jpg?alt=media&token=d4c2a1cf-c2d3-493f-b3b9-50040b5d7663"},
    {"nombre":"Eddy",
    "edad":20,
    "foto":"https://firebasestorage.googleapis.com/v0/b/super-campeones-e1639.appspot.com/o/eddy.jpg?alt=media&token=3c2b77d7-247b-4845-9cc0-f0849ffaa3e8"},
    {"nombre":"Johnny",
    "edad":20,
    "foto":"https://firebasestorage.googleapis.com/v0/b/super-campeones-e1639.appspot.com/o/tommy.jpg?alt=media&token=49ad89e5-89c7-44f4-96aa-6f92e4d5e4b3"},
    {"nombre":"Bruce",
    "edad":20,
    "foto":"https://firebasestorage.googleapis.com/v0/b/super-campeones-e1639.appspot.com/o/bruce.jpg?alt=media&token=35b70f85-a92d-49c4-a53c-25ad5e3104e7"}
  ]

  constructor() { }



}
