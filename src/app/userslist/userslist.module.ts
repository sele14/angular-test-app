import { NgModule } from "@angular/core"
import {CommonModule} from "@angular/common"
import { UserslistComponent } from "./userslist.component"

@NgModule({
    declarations: [UserslistComponent],
    imports: [CommonModule],
    // specify which components we want to export
    // (to be used outside of this module)
    exports: [UserslistComponent]
})
export class UsersListModule {}