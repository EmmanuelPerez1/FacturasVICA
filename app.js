document.getElementById('readerXML').addEventListener('submit', function(e) {

    const xml = document.getElementById('xmlText').value;
    // var UUID = /UUID\=\"\w\"?/;
    // var UUID = /\w?<=(UUID\=\")/;
    var UUID = /([a-zA-Z0-9]+)-([a-zA-Z0-9]+)-([a-zA-Z0-9]+)-([a-zA-Z0-9]+)-([a-zA-Z0-9]+)/;
    var fechaTimbrado = /(\d{4})-(\d{2})-(\d{2})/;
    var subtotal = /SubTotal="(\d+(\.\d+))/;
    var total = / Total="(\d+(\.\d+))/;
    var NUMEOC = /NUMEOC  (\d+)/i;
    var condicionesDePago = /CondicionesDePago =(\d+)-(\d+)/;

    var resultUUID = UUID.exec(xml);
    var resultfT = fechaTimbrado.exec(xml);
    var resultsT = subtotal.exec(xml);
    var resultT = total.exec(xml);
    var resultOC = NUMEOC.exec(xml);
    var resultcdP = condicionesDePago.exec(xml);

    // console.log(resultUUID[0]);
    // console.log(resultfT[0])
    // console.log(resultsT[0].replace('SubTotal="', ''));
    // console.log(resultT[0].replace(' Total="', ''));
    // console.log(resultOC[0].replace('NUMEOC  ', ''));

    document.getElementById('resultUUID').innerHTML = `${resultUUID[0]}`;
    document.getElementById('fechaTimbrado').innerHTML = `${resultfT[0]}`;
    document.getElementById('subTotal').innerHTML = `${resultsT[0].replace('SubTotal="', '')}`;
    document.getElementById('Total').innerHTML = `${resultT[0].replace(' Total="', '')}`;
    document.getElementById('NUMEOC').innerHTML = `${resultOC[0].replace('NUMEOC  ', '')}`;
    document.getElementById('condicionesDePago').innerHTML = `${resultcdP.replace('CondicionesDePago = ', '')}`;
    e.preventDefault();
})