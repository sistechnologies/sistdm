import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { LandingComponent } from './landing/landing.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { FooterComponent } from './footer/footer.component';
import { TeamComponent } from './team/team.component';
import { CapabilitiesComponent } from './capabilities/capabilities.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { HeroComponent } from './hero/hero.component'
import { RECAPTCHA_SETTINGS,  RecaptchaSettings, RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LandingComponent,
        FooterComponent,
        TeamComponent,
        CapabilitiesComponent,
        ServicesComponent,
        AboutComponent,
        HeroComponent
         ],
    imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule ,
        FormsModule,
        RouterModule,
        RecaptchaModule,
        RecaptchaFormsModule,
        AppRoutingModule,
        AnimateOnScrollModule.forRoot()
    ],
    providers: [
        {
            provide: RECAPTCHA_SETTINGS,
            useValue: {siteKey: '6Lcy_RQUAAAAAOYMvinoTKh3aJgJXyGnJgL1G8VY'} as RecaptchaSettings
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
