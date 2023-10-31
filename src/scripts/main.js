document.addEventListener('DOMContentLoaded', function() {
    document
        .getElementById('form-sorteador')
        .addEventListener('submit', function() {
            let numMax = document.getElementById('numero-maximo')
            numMax = parseInt(numMax)

            let numRandom = Math.random() * numMax
            alert(numRandom)
        })
})