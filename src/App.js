import React, { useState } from "react";
function UTMForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isValidPhone, setIsValidPhone] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const utmSource = localStorage.getItem("utm_source");
        const utmMedium = localStorage.getItem("utm_medium");
        const utmTerm = localStorage.getItem("utm_term");
        const data = {
            name: name,
            email: email,
            phone: phone,
            utmSource: utmSource,
            utmMedium: utmMedium,
            utmTerm: utmTerm,
        };
        console.log(data); // Gönderilecek verileri console'da görüntüleyebilirsiniz.Uygulamayı node.js üzerinden başlamış kabul ettim.
        localStorage.clear(); // localStorage temizleniyor.
        window.location.href = "/thank-you"; // Teşekkür sayfasına yönlendiriliyor.Teşekkürler sayfası istenmediği için yazma gereği duymadım.
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
        // Uluslararası telefon numarası formatını kontrol eden fonksiyon.
        const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
        setIsValidPhone(regex.test(event.target.value));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                İsim-Soyisim:
                <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <label>
                E-posta:
                <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <label>
                Telefon:
                <input type="tel" value={phone} onChange={handlePhoneChange} />
                {!isValidPhone && <span style={{ color: "red" }}>Geçersiz telefon numarası.</span>}
            </label>
            <input type="submit" value="Gönder" />
        </form>
    );
}

export default UTMForm;