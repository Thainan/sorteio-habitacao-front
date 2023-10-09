import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

const API_URI = "/api/v1/pessoa";

@Component({
    selector: 'app-lista-pessoas',
    templateUrl: './lista-pessoas.component.html',
    styleUrls: ['./lista-pessoas.component.scss']
})

export class ListaPessoaComponent implements OnInit {

    public carregando: boolean = false;

    public listaGeral: any;
    public listaIdoso: any;
    public listaDeficienteFisico: any;
    public totalParticipantes: number = 0;

    public listaGeralSorteado: any;
    public listaIdosoSorteado: any;
    public listaDeficienteFisicoSorteado: any;
    public totalGanhadores: number = 0;

    public clickGeral: boolean = false;
    public clickIdoso: boolean = false;
    public clickDeficienteFisico: boolean = false;

    public telaParticipante: boolean = false;
    public telaSorteado: boolean = false;

    constructor(private router: Router, private http: HttpClient) { 
    }

    ngOnInit() {
        this.getParticipantes();
    }

    clickVoltar(){
        this.telaParticipante = true;
        this.telaSorteado = false;
    }

    clickCota(cota : any){

        if(cota == 'idoso'){
            this.clickGeral = false;
            this.clickIdoso = true;
            this.clickDeficienteFisico = false;
            
        }else if(cota == 'deficientefisico'){
            this.clickGeral = false;
            this.clickIdoso = false;
            this.clickDeficienteFisico = true;

        }else{
            this.clickGeral = true;
            this.clickIdoso = false;
            this.clickDeficienteFisico = false;
        }
    }

    getParticipantes() {
        
        this.carregando = true;

        this.http.get<any>(API_URI + "/sorteio/participante/lista").subscribe(
        {
            next: (data) => {
                this.listaGeral = data.geral;
                this.listaIdoso = data.idoso;
                this.listaDeficienteFisico = data.deficienteFisico;
                this.totalParticipantes = data.totalParticipantes;
            },
            error(err) {
                console.log(err);
            },
            complete: () => {
                this.telaParticipante = true;
                this.carregando = false;
            },
        });
    }

    sortear() {

        this.carregando = true;

        this.http.get<any>(API_URI + "/sorteio/participante/sortear").subscribe(
        {
            next: (data) => {
                console.log('data', data);

                this.listaGeralSorteado = data.geral;
                this.listaIdosoSorteado = data.idoso;
                this.listaDeficienteFisicoSorteado = data.deficienteFisico;
                this.totalGanhadores = data.totalParticipantes;
            },
            error(err) {
                console.log(err);
            },
            complete: () => {
                this.telaSorteado = true;
                this.telaParticipante = false;
                this.carregando = false;
            },
        });
    }
}