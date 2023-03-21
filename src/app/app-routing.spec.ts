import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppRoutingModule, routes } from './app-routing.module';
import { Router, RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { Location } from "@angular/common";
import { InputOutputUseComponent } from './input-output-use/input-output-use.component';
import { By } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LazyModule } from './lazy/lazy.module';

describe('AppRouting module', () => {
    let component: InputOutputUseComponent;
    let appcomp: AppComponent;
    let fixture: ComponentFixture<InputOutputUseComponent>;
    let appfixture: ComponentFixture<AppComponent>;

    let objRouter: Router;
    let location: Location;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InputOutputUseComponent, AppComponent],
            providers: [NgModule],
            imports: [HttpClientModule, HttpClientTestingModule, HttpClientModule, AppRoutingModule,
                RouterTestingModule.withRoutes(routes)]
        })
            .compileComponents();


        objRouter = TestBed.inject(Router);
        location = TestBed.inject(Location);

        fixture = TestBed.createComponent(InputOutputUseComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
        appfixture = TestBed.createComponent(AppComponent);
        appcomp = appfixture.componentInstance;
        objRouter.initialNavigation();


    });

    beforeEach(() => {

    })


    it('Unit test case for default route', async () => {

        appfixture.detectChanges();

        appfixture.whenStable().then(() => {
            expect(location.path()).toEqual("/student");

        })
    });


    it('Unit test case for student route', async() => {

        appfixture.detectChanges();

        let link = appfixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
        link[0].nativeElement.click();
        appfixture.whenStable().then(() => {
            expect(location.path()).toEqual("/student");

        })
    });

    it('Lazy loading test case', fakeAsync(() => {

        const lazyloder = TestBed.inject(NgModule);
        lazyloder.stubbedModules = {lazymodule:LazyModule};
 
        objRouter.navigateByUrl('/lazy');
        tick();
        fixture.detectChanges();
        expect(location.path()).toBe('/lazy');
     }));
});
