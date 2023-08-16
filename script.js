function hitungLuas() {
    var alas = parseFloat(document.getElementById("alas").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);
    
    var luas = 0.5 * alas * tinggi;
    
    var hasil = document.getElementById("hasil");
    hasil.innerHTML = "Luas segitiga: " + luas;
}
function hitungKeliling() {
        var sisi1 = parseFloat(document.getElementById("sisikanan").value);
        var sisi2 = parseFloat(document.getElementById("sisikiri").value);
        var sisi3 = parseFloat(document.getElementById("sisibawah").value);

        var keliling = sisi1 + sisi2 + sisi3;
        hasil.innerHTML = "Keliling segitiga: " + keliling;
}
