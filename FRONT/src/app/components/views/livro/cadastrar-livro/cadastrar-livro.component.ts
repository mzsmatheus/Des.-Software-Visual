import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
    selector: 'app-cadastar-livro',
    templateUrl: './cadastrar-livro.component.html',
    styleUrls: ['./cadastrar-livro.component.css']
})
export class CadastrarLivroComponent implements OnInit {

    titulo!: string;
    autor!: string;
    editora!: string;
    descricao!: string;

    constructor(private service: LivroService, private router: Router) { }

    ngOnInit(): void {}

    create(): void{
        let livro: Livro = {
            titulo: this.titulo,
            autor: this.autor,
            editora: this.editora,
            descricao: this.descricao,
        }
        this.service.create(livro).subscribe((livro) => {
            this.router.navigate(["livro/listar"])
        })
    }

}
