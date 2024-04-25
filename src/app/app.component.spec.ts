import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CafeFixture } from './cafe/fixtures';
import { of } from 'rxjs';
import { CafeModule } from './cafe';
import { CafeService } from './cafe/service';

describe('AppComponent', () => {
  beforeEach(async () => {
    const cafeServiceSpy = jasmine.createSpyObj('CafeService', ['getCafes']);
    const cafeMocks = CafeFixture.createMany(3);
    cafeServiceSpy.getCafes.and.returnValue(of(cafeMocks));
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [CafeModule],
      providers: [{ provide: CafeService, useValue: cafeServiceSpy }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Parcial' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Parcial');
  });
});
