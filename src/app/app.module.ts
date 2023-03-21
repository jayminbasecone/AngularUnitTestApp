import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestBedFixtureComponent } from './test-bed-fixture/test-bed-fixture.component';
import { SpyOnComponent } from './spy-on/spy-on.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { DebugElementDomElementComponent } from './debug-element-dom-element/debug-element-dom-element.component';
import { PrivateMethodPrivateVaribaleComponent } from './private-method-private-varibale/private-method-private-varibale.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { NgClassNgStyleComponent } from './ng-class-ng-style/ng-class-ng-style.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { WhenStableAsyncTwoWayDataBindingComponent } from './when-stable-async-two-way-data-binding/when-stable-async-two-way-data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FakeAsyncAsyncComponent } from './fake-async-async/fake-async-async.component';
import { ConditionalRenderingIfComponent } from './conditional-rendering-if/conditional-rendering-if.component';
import { ConditionalRenderingNgSwitchComponent } from './conditional-rendering-ng-switch/conditional-rendering-ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { FileSizePipe } from './pipes/file-size.pipe';
import { PipeUseComponent } from './pipe-use/pipe-use.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { InputOutputUseComponent } from './input-output-use/input-output-use.component';
import { LazyModule } from './lazy/lazy.module';
import { HttpClientSubscribeMethodComponent } from './http-client-subscribe-method/http-client-subscribe-method.component';
import { CreateSpyCreateSpyObjSpyOnComponent } from './create-spy-create-spy-obj-spy-on/create-spy-create-spy-obj-spy-on.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TestBedFixtureComponent,
    SpyOnComponent,
    ChangeDetectionComponent,
    DebugElementDomElementComponent,
    PrivateMethodPrivateVaribaleComponent,
    InterpolationComponent,
    NgClassNgStyleComponent,
    AttributeBindingComponent,
    EventBindingComponent,
    WhenStableAsyncTwoWayDataBindingComponent,
    FakeAsyncAsyncComponent,
    ConditionalRenderingIfComponent,
    ConditionalRenderingNgSwitchComponent,
    NgForComponent,
    DependencyInjectionComponent,
    FileSizePipe,
    PipeUseComponent,
    InputOutputComponent,
    InputOutputUseComponent,
    HttpClientSubscribeMethodComponent,
    CreateSpyCreateSpyObjSpyOnComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LazyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
