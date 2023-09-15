import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: `home.html`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {
    this.name = "";
    this.editingName = "";
    this.oldName = "";
  }

  ngOnInit(): void {
    this.getUsuarios();
  }
  
  name: string;
  editingName: string;
  oldName: string;
  usuarios: any[] = [];

  editarUsuario(usuario: string){
    this.editingName = usuario;
    var elemento = document.getElementById(usuario);
    elemento?.classList.add("editando");
  }

  salvarEdicao(usuario: any){
    const dados = {
      nome_velho: this.oldName,
      nome_novo: usuario,
    }
    console.log("old name: " + this.oldName);
    console.log("new name: " + usuario);
    this.http.post('http://localhost:8080/editar_usuarios', dados).subscribe(
      (response) => {
        console.log("response: " + JSON.stringify(response));
        this.getUsuarios();
        this.name = "";
        var elemento = document.getElementById(usuario);
        elemento?.classList.add("editando");
      },
      (error) => {
        console.log("error: " + JSON.stringify(error));
      }
    )
  }

  estaEditando(usuario: string): boolean{
    this.oldName = usuario;
    var elemento = document.getElementById(usuario);
    if (elemento?.classList.contains("editando")){
      return true;
    }
    return false;
  }

  deleteUsuario(usuario: any){    
    
    this.http.delete(`http://localhost:8080/usuarios?nome=${usuario.nome}`).subscribe(
      (response) => {
        console.log("response: " + JSON.stringify(response));
        this.getUsuarios();
      },
      (error) => {
        console.log("error: " + JSON.stringify(error));
      }
    )
  }

  getUsuarios(){
    this.http.get('http://localhost:8080/usuarios').subscribe(
      (response) => {
        console.log("response: " + JSON.stringify(response));
        this.usuarios = [];
        for(const usuario of response as any[]){
          this.usuarios.push(usuario);
        }
      },
      (error) => {
        console.log("error: " + JSON.stringify(error));
      }
    )
  }
  
  adicionarUsuario(){
    this.http.post('http://localhost:8080/usuarios?nome=', this.name).subscribe(
      (response) => {
        console.log("response: " + JSON.stringify(response));
        this.usuarios.push(response);
        this.name = "";
      },
      (error) => {
        console.log("error: " + JSON.stringify(error));
      }
    )
  }

}
