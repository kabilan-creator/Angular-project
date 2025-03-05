import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[CardComponent],
    exports:[CardComponent],
    

})
export class Sharedmodule{}