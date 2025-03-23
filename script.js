function generateBarcode() {
    var resi = document.getElementById("resiInput").value;
    if (resi) {
        JsBarcode("#barcode", resi, {
            format: "CODE128",
            displayValue: true
        });
    } else {
        alert("Masukkan nomor resi terlebih dahulu!");
    }
}
