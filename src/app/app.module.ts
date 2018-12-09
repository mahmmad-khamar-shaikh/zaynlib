import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
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
import { AngularFireModule, FirebaseAuth, FirebaseDatabase } from '@angular/fire';
/** Material component */
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BookBoardService } from './book-board/book-board.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material';
import { BookAllocationBottomSheetComponent } from './book-board/book-allocation-bottom-sheet.component';
import { EventService } from './shared/services/event-emitter.service';
import { PassRecoveryComponent } from './shared/pass-recovery/pass-recovery.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { database } from 'firebase';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore';
import { BookBoardVanilaComponent } from './book-board/book-board-vanila.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

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
    BookBoardVanilaComponent,
    SignupComponent,
    UserProfileComponent,
    BookAllocationBottomSheetComponent,
    PassRecoveryComponent,
    BookDetailComponent


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
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [AuthService, BookBoardService, EventService, AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
