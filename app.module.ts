import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AcadamicsComponent } from './acadamics/acadamics.component';
import { ResearchComponent } from './research/research.component';
import { OutreachComponent } from './outreach/outreach.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { ContactComponent } from './contact/contact.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { OfficeComponent } from './research/office/office.component';
import { MidplanComponent } from './research/midplan/midplan.component';
import { ProjectComponent } from './research/project/project.component';
import { HistoryComponent } from './research/history/history.component';
import { LawComponent } from './admissions/law/law.component';
import { SocialComponent } from './admissions/social/social.component';
import { LettersComponent } from './admissions/letters/letters.component';
import { ArtsComponent } from './admissions/arts/arts.component';
import { EconomicsComponent } from './admissions/economics/economics.component';
import { SportComponent } from './admissions/sport/sport.component';
import { ScienceComponent } from './admissions/science/science.component';
import { LifeComponent } from './admissions/life/life.component';
import { PharmaComponent } from './admissions/pharma/pharma.component';
import { GastroComponent } from './admissions/gastro/gastro.component';
import { BusinessComponent } from './admissions/business/business.component';
import { PsycologyComponent } from './admissions/psycology/psycology.component';
import { PublicComponent } from './admissions/public/public.component';
import { SchoolComponent } from './admissions/school/school.component';
import { TeacherComponent } from './admissions/teacher/teacher.component';
import { OverseasComponent } from './outreach/overseas/overseas.component';
import { ProgressComponent } from './outreach/progress/progress.component';
import { ClubComponent } from './visitors/club/club.component';
import { ApplyComponent } from './contact/apply/apply.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SlidebarComponent,
    FooterComponent,
    AcadamicsComponent,
    ResearchComponent,
    OutreachComponent,
    AdmissionsComponent,
    ContactComponent,
    VisitorsComponent,
    OfficeComponent,
    MidplanComponent,
    ProjectComponent,
    HistoryComponent,
    LawComponent,
    SocialComponent,
    LettersComponent,
    ArtsComponent,
    EconomicsComponent,
    SportComponent,
    ScienceComponent,
    LifeComponent,
    PharmaComponent,
    GastroComponent,
    BusinessComponent,
    PsycologyComponent,
    PublicComponent,
    SchoolComponent,
    TeacherComponent,
    OverseasComponent,
    ProgressComponent,
    ClubComponent,
    ApplyComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
