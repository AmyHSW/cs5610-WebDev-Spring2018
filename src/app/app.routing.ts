import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './views/user/login/login.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {RegisterComponent} from './views/user/register/register.component';
import {WebsiteListComponent} from './views/website/website-list/website-list.component';
import {WebsiteNewComponent} from './views/website/website-new/website-new.component';
import {WebsiteEditComponent} from './views/website/website-edit/website-edit.component';
import {PageListComponent} from './views/page/page-list/page-list.component';
import {PageNewComponent} from './views/page/page-new/page-new.component';
import {PageEditComponent} from './views/page/page-edit/page-edit.component';
import {WidgetListComponent} from './views/widget/widget-list/widget-list.component';
import {WidgetChooserComponent} from './views/widget/widget-chooser/widget-chooser.component';
import {WidgetEditComponent} from './views/widget/widget-edit/widget-edit.component';
import {WidgetHeadingComponent} from './views/widget/widget-edit/widget-header/widget-header.component';
import {WidgetImageComponent} from './views/widget/widget-edit/widget-image/widget-image.component';
import {WidgetYoutubeComponent} from './views/widget/widget-edit/widget-youtube/widget-youtube.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile/:uid', component: ProfileComponent},
  {path: 'profile/:uid/website', component: WebsiteListComponent},
  {path: 'profile/:uid/website/new', component: WebsiteNewComponent},
  {path: 'profile/:uid/website/:wid', component: WebsiteEditComponent},
  {path: 'profile/:uid/website/:wid/page', component: PageListComponent},
  {path: 'profile/:uid/website/:wid/page/new', component: PageNewComponent},
  {path: 'profile/:uid/website/:wid/page/:pid', component: PageEditComponent},
  {path: 'profile/:uid/website/:wid/page/:pid/widget', component: WidgetListComponent},
  {path: 'profile/:uid/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent},
  {path: 'profile/:uid/website/:wid/page/:pid/widget/new/header', component: WidgetHeadingComponent},
  {path: 'profile/:uid/website/:wid/page/:pid/widget/new/image', component: WidgetImageComponent},
  {path: 'profile/:uid/website/:wid/page/:pid/widget/new/youtube', component: WidgetYoutubeComponent},
  {path: 'profile/:uid/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent},
];

export const routing = RouterModule.forRoot(appRoutes);
