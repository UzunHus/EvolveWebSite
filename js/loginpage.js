


const girisYap = document.getElementById("girisYap");
const kayitOl = document.getElementById("kayitOl");
const girisButonu = document.getElementById("girisButonu");
const kayitButonu = document.getElementById("kayitButonu");




girisButonu.addEventListener("click", function (giris) {

	const kullaniciAdi = girisYap.kullaniciAdi.value;
	const sifre = girisYap.sifre.value;

	if (kullaniciAdi === "admin" && sifre === "admin") {
		alert("Giriş Başarılı!")
		window.location.href = "AnaSayfa.html"

	}
	giris.preventDefault();

})

kayitButonu.addEventListener("click", function (kayit) {
	const yeniKullaniciAdi = kayitOl.kullaniciAdi.value;
	const yeniSifre = kayitOl.sifre.value;
	const yeniSifreTekrar = kayitOl.sifreTekrar.value;
	
	
	if (yeniKullaniciAdi != "" || yeniSifre != "" || yeniSifreTekrar != "") {


		if (yeniSifreTekrar == yeniSifre) {
			document.getElementById("gecis2").click();
			alert("Kaydınız Başarıyla Alınmıştır!")
		}
	}
	if(yeniKullaniciAdi == "" || yeniSifre == "" || yeniSifreTekrar == ""){
		alert("Lütfen Bilgileriniz Kontrol Ediniz")
	}
	if(yeniSifreTekrar != yeniSifre){
		alert("Girdiğiniz Şifreler Uyuşmuyor!")
		
		document.getElementById("sifreid").value ="";
		document.getElementById("sifretekrarid").value ="";
		
	}
	kayit.preventDefault();

	girisButonu.addEventListener("click", function (giris2) {

		const kullaniciAdi = girisYap.kullaniciAdi.value;
		const sifre = girisYap.sifre.value;

		if (kullaniciAdi == yeniKullaniciAdi && sifre == yeniSifre||kullaniciAdi == admin && sifre == admin) {
			alert("Giriş Başarılı")
			window.location.href = "AnaSayfa.html"

		}
		
		if(sifre!=yeniSifre){
			alert("Hatalı Giriş Yaptınız");
		}
		giris2.preventDefault();

	})
})





function toggleForm() {
	container = document.querySelector('.container');
	container.classList.toggle('active');
}