import { CafeService } from './cafe.service';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';
import { CafeFixture } from '../fixtures';

describe('CafeService', () => {
  let service: CafeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CafeService],
    });
    service = TestBed.inject(CafeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all actors', () => {
    const mockCafes = CafeFixture.createMany(3);
    service.getCafes().subscribe((cafes) => {
      expect(cafes).toEqual(mockCafes);
    });

    const req = httpMock.expectOne(`${environment.API_URL}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCafes);
  });
});
