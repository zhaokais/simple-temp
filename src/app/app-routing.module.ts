import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { HomeComponent } from './home/home.component';
import { CarComponent } from './car/car.component';
import { TenantSettingsComponent } from './tenant-settings/tenant-settings.component';
import { SelfOilAddComponent } from './car-manager/self-oil-add/self-oil-add.component';
import { SelfOilInComponent } from './car-manager/self-oil-in/self-oil-in.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AppComponent,
                children: [
                    { path: 'home', component: HomeComponent },
                    { path: 'car', component: CarComponent },
                    { path: 'tenant', component: TenantSettingsComponent },
                    { path: 'addoil', component: SelfOilAddComponent },
                    { path: 'oilin', component: SelfOilInComponent },
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
