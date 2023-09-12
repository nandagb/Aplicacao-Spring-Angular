package br.com.imd.api1web2.api1.controllers;

import br.com.imd.api1web2.api1.domain.Usuario;
import br.com.imd.api1web2.api1.repositories.UsuarioRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class UsuarioController {

    @RequestMapping("/usuarios")
    @CrossOrigin(origins = "*") // Permite todas as origens
    public List<Usuario> getPapeis() {
        return UsuarioRepository.getUsuarios();
    }

    @PostMapping("/usuarios")
    @CrossOrigin(origins = "*") // Permite todas as origens
    public Usuario addUsuario(@RequestBody String nome) {
        return UsuarioRepository.addUsuario(nome);
    }

    @PostMapping("/editar_suarios")
    @CrossOrigin(origins = "*") // Permite todas as origens
    public Usuario editUsuario(@RequestBody String nome_velho, String nome_novo) {
        return UsuarioRepository.editUsuario(nome_velho, nome_novo);
    }

    @DeleteMapping("/usuarios")
    @CrossOrigin(origins = "*") // Permite todas as origens
    public Usuario removeUsuario(@RequestBody Usuario usuario) {
        return UsuarioRepository.removeUsuario(usuario);
    }

}