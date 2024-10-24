 

 const times = [ 
    {nome: 'Real Madrid', jogadores:['Mbappe','Vini','Rodrygo']},
    {nome: 'Barcelona', jogadores:['Levandowik','Gavi','Pedri']}
 ]

function realMadrid(times, buscarJogadoresRM){
    const jogadoresRealMadrid = times.find(r => r.nome === buscarJogadoresRM)
    return jogadoresRealMadrid ? jogadoresRealMadrid.jogadores:[];
}

function barcelona(times, buscarJogadorBar) {
    const jogadoresBarcelona = times.find(b => b.nome === buscarJogadorBar)
    return jogadoresBarcelona ?  jogadoresBarcelona.jogadores:[];
}

console.log(realMadrid(times,'Real Madrid'))
console.log(barcelona(times,'Barcelona'))


function juntarBarcelonaeRealMadrid(){
    const realMadrid1 = realMadrid(times,'Real Madrid')
    const barcelona1 = barcelona(times,'Barcelona')

    const rb = barcelona1.concat(realMadrid1)
    return rb
}


console.log(juntarBarcelonaeRealMadrid())