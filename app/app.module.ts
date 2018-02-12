import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { SessionListComponent } from './events/event-details/session-list.component';
import { CreateEventComponent } from './events/create-event.component';
import { Errors404Component } from './errors/404.component';

import { EventService } from './events/shared/events.service';
import { ToastrService } from './common/toastr.service';

import { appRoutes } from './routes';

@NgModule({
    imports: [BrowserModule,
    RouterModule.forRoot(appRoutes)
    ],
    declarations: 
        [EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent,
        SessionListComponent,
        CreateEventComponent,
        Errors404Component],
    providers: [EventService,
        ToastrService],
    bootstrap: [EventsAppComponent]
})

export class AppModule {}