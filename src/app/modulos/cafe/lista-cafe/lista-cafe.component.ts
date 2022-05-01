import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../servicios/cafe.service';

@Component({
  selector: 'app-lista-cafe',
  templateUrl: './lista-cafe.component.html',
  styleUrls: ['./lista-cafe.component.css']
})
export class ListaCafeComponent implements OnInit {

  cafes: Cafe[] = [];
  tocalCafeOrigen!: number;
  tocalCafeBlend!: number;
  constructor(private cafeService: CafeService) { }

  ngOnInit(): void {
    this.cafeService.obtenerListaCafes().subscribe(cafes => {
      this.cafes = cafes;
      this.tocalCafeOrigen = cafes.filter(c => c.tipo == "Café de Origen").length;
      this.tocalCafeBlend = cafes.filter(c => c.tipo == "Blend").length;
    });
  }

}
