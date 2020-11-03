document.getElementById('readerXML').addEventListener('submit', function(e) {
    e.preventDefault();
    const xml = document.getElementById('xmlText').value;

    var UUID = /([a-zA-Z0-9]+)-([a-zA-Z0-9]+)-([a-zA-Z0-9]+)-([a-zA-Z0-9]+)-([a-zA-Z0-9]+)/;
    var fechaTimbrado = /(\d{4})-(\d{2})-(\d{2})/;
    var subtotal = /SubTotal="(\d+(\.\d+))/;
    var total = / Total="(\d+(\.\d+))/;
    var NUMEOC = /NUMEOC  (\d+)/i;
    var condicionesDePago = /CondicionesDePago ="([a-zA-Z0-9]+)-([a-zA-Z0-9]+)/;

    var resultUUID = UUID.exec(xml);
    var resultfT = fechaTimbrado.exec(xml);
    var resultsT = subtotal.exec(xml);
    var resultT = total.exec(xml);
    var resultOC = NUMEOC.exec(xml);
    var resultcdP = condicionesDePago.exec(xml);

    document.getElementById('resultUUID').innerHTML = `${resultUUID[0]}`;
    document.getElementById('fechaTimbrado').innerHTML = `${resultfT[0]}`;
    document.getElementById('subTotal').innerHTML = `${resultsT[0].replace('SubTotal="', '')}`;
    document.getElementById('Total').innerHTML = `${resultT[0].replace(' Total="', '')}`;
    if (resultOC) {
        document.getElementById('NUMEOC').innerHTML = `${resultOC[0].replace('NUMEOC  ', '')}`;
    }

    if (resultcdP) {
        document.getElementById('condicionesDePago').innerHTML = `${resultcdP[0].replace('CondicionesDePago = ', '')}`;
    }
})

function limpiarTexto() {
    document.getElementById('xmlText').value = '';
    document.getElementById('resultUUID').innerHTML = '';
    document.getElementById('fechaTimbrado').innerHTML = '';
    document.getElementById('subTotal').innerHTML = '';
    document.getElementById('Total').innerHTML = '';
    document.getElementById('NUMEOC').innerHTML = '';
    document.getElementById('condicionesDePago').innerHTML = '';
}