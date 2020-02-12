import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-pegar-letra',
  templateUrl: './pegar-letra.component.html',
  styleUrls: ['./pegar-letra.component.css']
})
export class PegarLetraComponent implements OnInit {
  palavras: string[] = ['maria','joao','zeze','cachorro','macaco','banana','laranja','pizza','videogame'];
  letra: string;
  sorteada: string[];
  resultado: boolean;
  tracejado: string[] = [];
  palpite: string[];
  tentativa: number = 5;
  acertos: number ;
  letraspalpitadas: string[] = [];
  status: string;

  constructor() {
    this.sorteada = [];
   }

  ngOnInit() {
    let i = this.palavras[Math.floor(Math.random()*this.palavras.length)];
    this.sorteada = i.split('');
    this.acertos = 0;
    for(let a = 0; a<this.sorteada.length; a++){
      this.tracejado.push('-');
    }
  }
  PassarLetra(l: string){
    this.letra = l;
  } 
    
  Comparar(l:string){
    this.letra = l;
    if(this.tentativa >= 1){
    
      if(this.tracejado.includes(this.letra) == false && this.letra != undefined  && this.sorteada.includes(this.letra)==true){
        for(let char=0; char < this.sorteada.length; char++){
          if(this.letra == this.sorteada[char]){
            this.tracejado[char] = this.letra;
            this.resultado = true;
            this.status='acertou';
            this.letraspalpitadas.push(this.letra);
            }
          }
        }
      else if(this.sorteada.includes(this.letra) == false && this.letra != undefined && this.letraspalpitadas.includes(this.letra)==false){
        this.status = 'A palavra nao possui essa letra';
        this.tentativa -= 1;
        this.letraspalpitadas.push(this.letra);
      }
    else{
      if(this.letra !=undefined && this.letraspalpitadas.includes(this.letra) == true){ 
      this.status = 'Ja foi escolhida';
      }
      else{
        this.status = 'Digite uma letra';
      }
    }
  }
  else {
    this.status = 'Voce perdeu! palavra: '+ this.sorteada.join();;
  }  
    if(this.tentativa <= 0){
      this.status = 'Voce perdeu! palavra: '+ this.sorteada.join();;
    }
  }
  //gera nova palavra
  Nova(){
    this.status = '';
    this.tracejado = [];
    this.palpite = [];
    this.tentativa = 5;
    let i = this.palavras[Math.floor(Math.random()*this.palavras.length)];
    this.sorteada = i.split('');
    for(let a = 0; a<this.sorteada.length; a++){
      this.tracejado.push('-');
    }
  }
  //recebe o valor do palpite do template
  Palpite(p: string){
    this.palpite = p.split('');
  }

  //verificar sem a palavra digitada é a mesma que a sorteada
  VerificarPalpite(){

    if(this.tentativa >= 1){
      if(this.palpite.join() == this.sorteada.join()){
        this.status = 'Resposta correta! Parabens!';
        this.acertos += 1;
      }
      else{
      this.status = 'Voce perdeu! palavra: '+ this.sorteada.join();
      this.tentativa = 0;
      this.acertos = 0;
      }
    }
  }
}

