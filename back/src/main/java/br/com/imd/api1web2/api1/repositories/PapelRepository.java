package br.com.imd.api1web2.api1.repositories;

import br.com.imd.api1web2.api1.domain.Papel;

import java.util.ArrayList;
import java.util.List;



public class PapelRepository {

    private static List<Papel> papeis = new ArrayList<Papel>();

    public static List<Papel> getPapeis(){
        return papeis;
    }

    public static Papel addPapel(Papel p) {
        papeis.add(p);
        return p;
    }

    public static Papel removePapel(Papel p) {
        papeis.remove(p);
        return p;
    }





}