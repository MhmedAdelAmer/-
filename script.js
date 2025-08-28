        const menuToggle = document.getElementById("menu-toggle");
        const navLinks = document.getElementById("nav-links");
        const langBtn = document.getElementById("langBtn");

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        function setLanguage(lang) {
            if (lang === 'en') {
                document.querySelectorAll('.lang-en').forEach(el => el.style.display = 'inline');
                document.querySelectorAll('.lang-ar').forEach(el => el.style.display = 'none');
                document.documentElement.lang = 'en';
                document.documentElement.dir = 'ltr';
                langBtn.textContent = "AR";
                localStorage.setItem("siteLang", "en");
            } else {
                document.querySelectorAll('.lang-en').forEach(el => el.style.display = 'none');
                document.querySelectorAll('.lang-ar').forEach(el => el.style.display = 'inline');
                document.documentElement.lang = 'ar';
                document.documentElement.dir = 'rtl';
                langBtn.textContent = "EN";
                localStorage.setItem("siteLang", "ar");
            }
        }

        // عند الضغط على الزر
        langBtn.addEventListener("click", () => {
            const currentLang = document.documentElement.lang;
            setLanguage(currentLang === "ar" ? "en" : "ar");
        });

        // تحميل اللغة المختارة سابقاً
        window.onload = () => {
            const savedLang = localStorage.getItem("siteLang") || "ar";
            setLanguage(savedLang);
        };