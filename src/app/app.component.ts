import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Character } from "../pages/character/character";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage:any = Character;

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

