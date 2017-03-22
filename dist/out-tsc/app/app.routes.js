import { RouterModule } from "@angular/router";
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuardService } from './services/auth-guard.service';
var routes = [
    {
        path: "",
        redirectTo: "problems",
        pathMatch: "full"
    },
    {
        path: "problems",
        component: ProblemListComponent
    },
    {
        path: "problems/:id",
        component: ProblemDetailComponent
    },
    {
        path: "profile",
        canActivate: [AuthGuardService],
        component: ProfileComponent
    },
    {
        path: "**",
        redirectTo: "problems"
    }
];
export var routing = RouterModule.forRoot(routes);
//# sourceMappingURL=../../../src/app/app.routes.js.map