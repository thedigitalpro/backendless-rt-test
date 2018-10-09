import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { PersonService } from "./services/person.service";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
