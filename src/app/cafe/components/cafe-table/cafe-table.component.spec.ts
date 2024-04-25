import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeTableComponent } from './cafe-table.component';
import { CafeService } from '../../service';
import { CafeFixture } from '../../fixtures';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { Cafe } from '../../model';
import { CafeModule } from '../../cafe.module';

describe('CafeTableComponent', () => {
  let component: CafeTableComponent;
  let fixture: ComponentFixture<CafeTableComponent>;
  let cafeServiceSpy: jasmine.SpyObj<CafeService>;
  let cafes: Cafe[];
  const tableHeaders: string[] = ['#', 'Nombre', 'Tipo', 'Region'];

  beforeEach(async () => {
    cafeServiceSpy = jasmine.createSpyObj('CafeService', ['getCafes']);
    cafes = CafeFixture.createMany(3);
    cafeServiceSpy.getCafes.and.returnValue(of(cafes));
    await TestBed.configureTestingModule({
      declarations: [CafeTableComponent],
      providers: [{ provide: CafeService, useValue: cafeServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(CafeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(cafeServiceSpy.getCafes).toHaveBeenCalled();
  });

  it('should render table header properly', () => {
    const de = fixture.debugElement;
    const tableHeader = de.query(By.css('th[test-id="table-header"]'));

    expect(tableHeader).toBeDefined();

    tableHeaders.forEach((header) => {
      const headerName = de.query(
        By.css(`th[data-testid="table-header-${header}"]`)
      );
      expect(headerName.nativeElement.textContent).toContain(header);
    });
  });

  it('should render cafe table rows properly', () => {
    const de = fixture.debugElement;
    cafes.forEach((cafe) => {
      const cafeRow = de.query(
        By.css(`tr[data-testid="table-item-row-${cafe.id}"]`)
      );
      expect(cafeRow).toBeDefined();

      const idCell = cafeRow.query(By.css('th[test-id="table-item-row-id"]'));
      expect(idCell.nativeElement.textContent).toContain(cafe.id.toString());

      const nombreCell = cafeRow.query(
        By.css('td[test-id="table-item-row-nombre"]')
      );
      expect(nombreCell.nativeElement.textContent).toContain(cafe.nombre);

      const tipoCell = cafeRow.query(
        By.css('td[test-id="table-item-row-tipo"]')
      );
      expect(tipoCell.nativeElement.textContent).toContain(cafe.tipo);

      const regionCell = cafeRow.query(
        By.css('td[test-id="table-item-row-region"]')
      );
      expect(regionCell.nativeElement.textContent).toContain(cafe.region);
    });
  });
});
