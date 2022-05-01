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
  constructor(private cafeService: CafeService) { }

  ngOnInit(): void {
    this.cafeService.obtenetListaCafes().subscribe(cafes => {
      this.cafes = cafes;
    });
  }

}
