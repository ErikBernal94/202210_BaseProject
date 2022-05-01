import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Cafe } from '../cafe';
import { CafeService } from '../servicios/cafe.service';
import { faker } from '@faker-js/faker';
import { ListaCafeComponent } from './lista-cafe.component';

describe('ListaCafeComponent', () => {
  let component: ListaCafeComponent;
  let fixture: ComponentFixture<ListaCafeComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListaCafeComponent ],
      providers:[{ provide: CafeService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCafeComponent);
    component = fixture.componentInstance;
    for(let i = 0; i < 3 ; i++){
      component.cafes.push(
        new Cafe(
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.paragraph(),
          faker.address.cityName(),
          faker.lorem.sentence(),
          faker.datatype.number(),
          faker.image.dataUri()
        ));
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a the count of coffees', () => {
    const trs = debug.queryAll(By.css('tr'));
    const trsLength = trs.length;
    expect(trsLength).toEqual(component.cafes.length + 1);
  });
});
