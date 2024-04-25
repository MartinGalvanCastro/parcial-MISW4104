import { Component, OnInit } from '@angular/core';
import { Cafe, CafeType } from '../../model';
import { CafeService } from '../../service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-cafe-table',
  templateUrl: './cafe-table.component.html',
  styleUrl: './cafe-table.component.css',
})
export class CafeTableComponent implements OnInit {
  cafeArray: Cafe[] = [];
  tableHeaders: string[] = ['#', 'Nombre', 'Tipo', 'Region'];
  cafesOrigen: number = -1;
  cafesBlend: number = -1;

  constructor(private cafeService: CafeService) {}

  ngOnInit(): void {
    this.getCafes()
      .pipe(
        map((cafes) => {
          this.cafesOrigen = cafes.filter(
            (cafe) => cafe.tipo === CafeType.ORIGEN
          ).length;
          this.cafesBlend = cafes.filter(
            (cafe) => cafe.tipo === CafeType.BLEND
          ).length;
          return cafes;
        })
      )
      .subscribe((cafes) => (this.cafeArray = cafes));
  }

  getCafes(): Observable<Cafe[]> {
    return this.cafeService.getCafes();
  }
}
