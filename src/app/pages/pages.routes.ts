import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { OptionsPanelComponent } from './options-panel/options-panel.component';



const pagesRoutes: Routes = [
    {
        path : '',
        component : PagesComponent,
        children : [
            { path : 'options-panel', component : OptionsPanelComponent, data: { titulo: 'Panel de Opciones' } },
            { path : 'account-settings', component : AccountSettingsComponent, data: { titulo: 'Account Settings' } },
            { path : '', redirectTo : '/test', pathMatch: 'full' },
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(  pagesRoutes );
