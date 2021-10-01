import { Livro } from './models/livro';
import { CadastrarLivroComponent } from './components/views/livro/cadastrar-livro/cadastrar-livro.component';
import { ListarLivroComponent } from './components/views/livro/listar-livro/listar-livro.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: "",
        component: ListarLivroComponent
    },
    {
        path: "livro/listar",
        component: ListarLivroComponent
    },
    {
        path: "livro/cadastrar",
        component: CadastrarLivroComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }