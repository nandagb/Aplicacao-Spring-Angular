package br.com.imd.api1web2.api1.controllers;


import br.com.imd.api1web2.api1.domain.Papel;
import br.com.imd.api1web2.api1.repositories.PapelRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class PapelController {

    @RequestMapping("/papeis")
    public List<Papel> getPapeis() {
        return PapelRepository.getPapeis();
    }

    @PostMapping("/papeis")
    public Papel addPapel(@RequestBody Papel papel) {
        return PapelRepository.addPapel(papel);
    }

    @DeleteMapping("/papeis")
    public Papel removePapel(@RequestBody Papel papel) {
        return PapelRepository.removePapel(papel);
    }
}