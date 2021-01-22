export default function escala(tonica, tipo) {


    if (tonica === 'C' && tipo === 'maior') {

        return 'C D E F G A B C'

    } else if (tonica === 'G' && tipo === 'maior') {

        return 'G A B C D E F# G'

    } else if (tonica === 'D' && tipo === 'maior') {

        return 'D E F# G A B C# D'

    }

}