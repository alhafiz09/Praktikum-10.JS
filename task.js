/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
function showDownload(result) {
    console.log("Download selesai");
    console.log("Hasil Download: " + result);
}

/**
 * Fungsi untuk download file
 * @param {function} callback - Function callback untuk menampilkan hasil
 */
function download(callShowDownload) {
    // Simulasi proses download dengan setTimeout
    setTimeout(function () {
        const result = "Mobile Langend Pach Update"; // Nama file hasil download
        callShowDownload(result); // Memanggil fungsi callback
    }, 5000); // Waktu simulasi download dalam milidetik
}

// Memanggil fungsi download dengan callback showDownload
download(showDownload);
