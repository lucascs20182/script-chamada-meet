const mensagensEnviadas = document.querySelectorAll("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.mKBhCf.qwU8Me.RlceJe.kjZr4 > div > div.Bx7THd.PBWx0c.Uy7Qke.XN1AMe > div.ZHdB2e.iy732 > div.fe4pJf.Pdo15c > span.HALYaf.u92yl.KKjvXb > div > div.z38b6.CnDs7d.hPqowe > div")

function fazChamada(mensagensEnviadas) {
    let alunosPresentes = []
    
    for(let i = 0; i < mensagensEnviadas.length; i++) {
        if(mensagensEnviadas[i].outerText.match(/presente/i))
            alunosPresentes.push(mensagensEnviadas[i].dataset.senderName)    
    }
    
    alunosPresentes.sort()

    return [...new Set(alunosPresentes)]
}

alunosPresentes = fazChamada(mensagensEnviadas)
