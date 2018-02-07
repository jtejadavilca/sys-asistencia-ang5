import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';

// Componentes
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { OptionsPanelComponent } from './options-panel/options-panel.component';
import { DialingControlComponent } from './dialing-control/dialing-control.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        PagesComponent,
        AccountSettingsComponent,
        OptionsPanelComponent,
        DialingControlComponent
    ],
    exports: [
        PagesComponent,
        AccountSettingsComponent,
        OptionsPanelComponent,
        DialingControlComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule
    ]
})

export class PagesModule { }
