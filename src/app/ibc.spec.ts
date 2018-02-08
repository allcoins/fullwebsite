import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NoticiasService } from './noticias.service';


describe('NoticiasService', () => {
    
    
  let injector: TestBed;
  let service: NoticiasService; // The service that I want to test
  let httpMock: HttpTestingController;
    
  beforeEach(() => {
      
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NoticiasService]
    });
      
    injector = getTestBed();
    service = injector.get(NoticiasService);
    httpMock = injector.get(HttpTestingController);
      
      
  });

  afterEach(() => {
    httpMock.verify(); // make sure that there are no outstanding requests
  });
    
 
  it('should be created noticias service', inject([NoticiasService], (service: NoticiasService) => {
    expect(service).toBeTruthy();
  }));
    
    
    
   it('should return an Observable<any>', () => {
    service.getNoticias().subscribe(noticias => {
      expect(noticias.length).toBeGreaterThan(1);
    });

       
    const req = httpMock.expectOne(`${service._url}`);
    expect(req.request.method).toBe("GET");
   
  }); 
    
    
    
    
    
    
    
});
