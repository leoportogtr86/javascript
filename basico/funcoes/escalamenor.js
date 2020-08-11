function escalaMenor(tonica) {
    

    if (tonica == 'c' || tonica == 'C'){

        return 'C D Eb F G Ab Bb C'
    
    } else if (tonica == 'd' || tonica == 'D'){

        return 'D E F G A Bb C D'
    
    } else if (tonica == 'g' || tonica == 'G'){

        return 'G A Bb C D Eb F G'
    
    } else if (tonica == 'a' || tonica == 'A'){

        return 'A B C D E F G A'
    
    } else if (tonica == 'e' || tonica == 'E'){

        return 'E F# G A B C D E'
    
    } else if (tonica == 'b' || tonica == 'B'){

        return 'B C# D E F# G A B'
    
    } else if (tonica == 'f' || tonica == 'F'){

        return 'F G Ab Bb C D Eb F'
    
    }  else if (tonica == 'bb' || tonica == 'Bb'){

        return 'Bb C Db Eb F Gb Ab Bb'
    
    } else if (tonica == 'eb' || tonica == 'Eb'){

        return 'Eb F Gb Ab Bb Cb Db Eb'
    
    } else if (tonica == 'ab' || tonica == 'Ab'){

        return 'Ab Bb Cb Db Eb Fb Gb Ab'
    
    } else if (tonica == 'db' || tonica == 'Db'){

        return 'Db Eb Fb Gb Ab Bbb Cb Db'
    
    } else if (tonica == 'gb' || tonica == 'Gb'){

        return 'Gb Ab Bbb Cb Db Ebb Fb Gb'
    
    } else {

        return 'Valor inválido...'
    }
    
}

module.exports = escalaMenor