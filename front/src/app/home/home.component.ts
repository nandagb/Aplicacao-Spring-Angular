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
  }

  ngOnInit(): void {
    this.getUsuarios();
  }
  
  name: string;
  usuarios: any[] = [];

  editarUsuario(){
    
  }

  getUsuarios(){
    this.http.get('http://localhost:8080/usuarios').subscribe(
      (response) => {
        console.log("response: " + JSON.stringify(response));
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
