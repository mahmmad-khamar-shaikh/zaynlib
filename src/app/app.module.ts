import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { LoginComponent } from './shared/login/login.component';
import { AuthService } from './shared/login/auth.service';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { ManageDashboardComponent } from './manage-dashboard/manage-dashboard.component';
import { BookBoardComponent } from './book-board/book-board.component';
import { SignupComponent } from './shared/signup/signup.component';
import { AngularFirestore } from '../../node_modules/angularfire2/firestore';
/** Material component */
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BookBoardService } from './book-board/book-board.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material';
import { BookAllocationBottomSheetComponent } from './book-board/book-allocation-bottom-sheet.component';
import { EventService } from './shared/services/event-emitter.service';

@NgModule({
  entryComponents: [BookAllocationBottomSheetComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    DashbaordComponent,
    ManageDashboardComponent,
    BookBoardComponent,
    SignupComponent,
    UserProfileComponent,
    BookAllocationBottomSheetComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    MatSlideToggleModule,
    AppMaterialModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireAuthModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthService, AngularFirestore, BookBoardService,EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
