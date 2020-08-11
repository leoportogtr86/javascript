function escalaMaior(tonica) {
    

    if (tonica == 'c' || tonica == 'C'){

        return 'C D E F G A B C'
    
    } else if (tonica == 'd' || tonica == 'D'){

        return 'D E F# G A B C# D'
    
    } else if (tonica == 'g' || tonica == 'G'){

        return 'G A B C D E F# G'
    
    } else if (tonica == 'a' || tonica == 'A'){

        return 'A B C# D E F# G# A'
    
    } else if (tonica == 'e' || tonica == 'E'){

        return 'E F# G# A B C# D# E'
    
    } else if (tonica == 'b' || tonica == 'B'){

        return 'B C# D# E F# G# A# B'
    
    } else if (tonica == 'f' || tonica == 'F'){

        return 'F G A Bb C D E F'
    
    }  else if (tonica == 'bb' || tonica == 'Bb'){

        return 'Bb C D Eb F G A Bb'
    
    } else if (tonica == 'eb' || tonica == 'Eb'){

        return 'Eb F G Ab Bb C D Eb'
    
    } else if (tonica == 'ab' || tonica == 'Ab'){

        return 'Ab Bb C Db Eb F G Ab'
    
    } else if (tonica == 'db' || tonica == 'Db'){

        return 'Db Eb F Gb Ab Bb C Db'
    
    } else if (tonica == 'gb' || tonica == 'Gb'){

        return 'Gb Ab Bb Cb Db Eb F Gb'
    
    } else {

        return 'Valor inválido...'
    }
    
}

module.exports = escalaMaior