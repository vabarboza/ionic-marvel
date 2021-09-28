import { MyApp } from './app.component';
import { Device } from '@ionic-native/device';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { DatePicker } from '@ionic-native/date-picker';
import { ChartsModule } from 'ng2-charts';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SQLite } from '@ionic-native/sqlite';

/* PAGES */
import { Grid } from '../pages/grid/grid';
import { Character } from '../pages/character/character';
import { Detail } from '../pages/character/detail/detail';

/* SERVIÇO */
import { Service } from '../providers/service/service';

/* PROVIDERS */
import { Provider } from '../providers/provider';

/* COMPONENTS */
import { Loading } from "../components/loading/loading";

@NgModule({
  declarations: [
    MyApp,
    Grid, /* add */
    Character,
    Detail,
    Loading
  ],
  imports: [
    ReactiveFormsModule,
    HttpModule,
    BrowserModule,
    ChartsModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      statusbarPadding: true,
      // locationStrategy: "path"
    }, {
      links: [
        {component: Character,  name: 'character',  segment: 'character'},
        {component: Detail,    name:  'detail',     segment: 'character/detail/:id', defaultHistory: [Character]},
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Grid, /* add */
    Character,
    Detail,
    Loading
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePicker,
    Device,
    SocialSharing,
    SQLite,
    Screen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Provider,
    Service
  ]
}) 
export class AppModule {}
