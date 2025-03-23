
async function fetchResiData() {
    try {
        let response = await fetch("https://script.google.com/macros/s/AKfycbxakKGY9RzjPkAFcL63i8BT_DVEvVKrsqBcHwbLDZaI8oXfBPufwXPFADAwGwVxZkw/exec");
        let data = await response.json();

        if (data.length > 0) {
            let resiNumber = data[0].resi; // Ambil resi pertama
            document.getElementById("resiInput").value = resiNumber;
            generateBarcode(resiNumber);
        } else {
            alert("Data tidak ditemukan di spreadsheet!");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function generateBarcode(resi) {
    if (resi) {
        JsBarcode("#barcode", resi, {
            format: "CODE128",
            displayValue: true
        });
    } else {
        alert("Masukkan nomor resi terlebih dahulu!");
    }
}
