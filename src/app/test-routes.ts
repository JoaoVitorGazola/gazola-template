import { FullDemoComponent } from "./full-demo/full-demo.component";
import { ButtonComponent } from "./itens/button/button.component"
import { PageNotFoundComponent } from "./screens/page-not-found/page-not-found.component";

var testRoutes =
[
    { path: "", component: FullDemoComponent },
    { path: "test-button", component: ButtonComponent },
    { path: '**', component: PageNotFoundComponent },
]

export {testRoutes};