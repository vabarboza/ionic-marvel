import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Character } from "../pages/character/character";
import { Grid } from "../pages/grid/grid";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    // rootPage:any = Character;
    rootPage:any = Grid;

    constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        this.platform.ready().then(() => {
            if (platform.is("ios")) {
                statusBar.styleDefault();
                statusBar.overlaysWebView(false);
            } else {
                statusBar.styleLightContent();
            }      

            setTimeout(() => {
                splashScreen.hide();
            }, 100);
        });
    }
}

