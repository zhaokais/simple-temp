import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AbpModule } from '@abp/abp.module';

import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home/home.component';
import { CarComponent } from './car/car.component';
import { TenantSettingsComponent } from './tenant-settings/tenant-settings.component';
import { SelfOilAddComponent } from './car-manager/self-oil-add/self-oil-add.component';

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { SelfOilInComponent } from './car-manager/self-oil-in/self-oil-in.component';

registerLocaleData(zh);

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      CarComponent,
      TenantSettingsComponent,
      SelfOilAddComponent,
      SelfOilInComponent,
      ToolbarComponent
   ],
   imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      HttpClientJsonpModule,
      AbpModule,
      AppRoutingModule,
      ServiceProxyModule,
      SharedModule,
   ],
   /** 配置 ng-zorro-antd 国际化（文案 及 日期） **/
   providers   : [
      { provide: NZ_I18N, useValue: zh_CN }
   ],
   entryComponents: []
})
export class AppModule {}
