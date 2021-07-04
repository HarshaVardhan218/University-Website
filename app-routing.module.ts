import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcadamicsComponent } from './acadamics/acadamics.component';
import { ResearchComponent } from './research/research.component';
import { OutreachComponent } from './outreach/outreach.component';
import { OverseasComponent } from './outreach/overseas/overseas.component';
import { ProgressComponent } from './outreach/progress/progress.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { LawComponent } from './admissions/law/law.component';
import { LifeComponent } from './admissions/life/life.component';
import { LettersComponent } from './admissions/letters/letters.component';
import { SocialComponent } from './admissions/social/social.component';
import { ArtsComponent } from './admissions/arts/arts.component';
import { TeacherComponent } from './admissions/teacher/teacher.component';
import { PublicComponent } from './admissions/public/public.component';
import { PsycologyComponent } from './admissions/psycology/psycology.component';
import { BusinessComponent } from './admissions/business/business.component';
import { GastroComponent } from './admissions/gastro/gastro.component';
import { PharmaComponent } from './admissions/pharma/pharma.component';
import { ScienceComponent } from './admissions/science/science.component';
import { SchoolComponent } from './admissions/school/school.component';
import { EconomicsComponent } from './admissions/economics/economics.component';
import { SportComponent } from './admissions/sport/sport.component';
import { ContactComponent } from './contact/contact.component';
import { ApplyComponent } from './contact/apply/apply.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { ClubComponent } from './visitors/club/club.component';
import { OfficeComponent } from './research/office/office.component';
import { MidplanComponent } from './research/midplan/midplan.component';
import { ProjectComponent } from './research/project/project.component';
import { HistoryComponent } from './research/history/history.component';

const routes: Routes = [

  {path:"research",component:ResearchComponent,children:[
    {path:"office",component:OfficeComponent},
    {path:"midplan",component:MidplanComponent},
    {path:"project",component:ProjectComponent},
    {path:"history",component:HistoryComponent},
  ]},
  {path:"home",component:HomeComponent},
  {path:"acadamics",component:AcadamicsComponent},
  {path:"research",component:ResearchComponent},
  {path:"outreach",component:OutreachComponent,children:[
    {path:"overseas",component:OverseasComponent},
    {path:"progress",component:ProgressComponent},
  ]},
  {path:"admissions",component:AdmissionsComponent,children:[
    {path:"law",component:LawComponent},
    {path:"psycology",component:PsycologyComponent},
    {path:"social",component:SocialComponent},
    {path:"letters",component:LettersComponent},
    {path:"arts",component:ArtsComponent},
    {path:"economics",component:EconomicsComponent},
    {path:"sport",component:SportComponent},
    {path:"science",component:ScienceComponent},
    {path:"school",component:SchoolComponent},
    {path:"life",component:LifeComponent},
    {path:"pharma",component:PharmaComponent},
    {path:"gastro",component:GastroComponent},
    {path:"business",component:BusinessComponent},
    {path:"public",component:PublicComponent},
    {path:"teacher",component:TeacherComponent},
  ]},
  {path:"contact",component:ContactComponent,children:[
    {path:"apply",component:ApplyComponent},
  ]},
  {path:"visitors",component:VisitorsComponent,children:[
    {path:"club",component:ClubComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


