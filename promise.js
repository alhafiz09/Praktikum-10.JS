/**
 * Membuat fungsi download
 * @returns {object} Promise
 */
const download = () => {
  return new Promise((resolve, reject) => {
    const status = Math.random() > 0.5; 
    console.log("Memulai download...");

    setTimeout(() => {
      if (status) {
        resolve("Download selesai: File berhasil terunduh.");
      } else {
        reject("Download gagal: Coba lagi.");
      }
    }, 5000);
  });
};

/**
 * .then menangkap hasil resolve
 * .catch menangkap hasil reject
 */
download()
.then((res) => {
  console.log(res);
  return "File sedang diekstrak...";
})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
});
