import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //google maps
  title: string = 'Google Maps Addeed Successfully';
  lat: number = 28.38 ;
  lng: number = 77.12;


  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fr', 'ur', 'es', 'fa']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|ur|es|fa/) ? browserLang : 'en');
}


changeLang(language: string) {
  this.translate.use(language);
}
}
