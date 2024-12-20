
function toggleNav() {
    const nav = document.getElementById("main-nav");
    nav.classList.toggle("show");
}



document.addEventListener('DOMContentLoaded', function() { //פונקציה של טעינת העמוד

    const libraries = [
        {
            city: "ירושלים",
            name: "הספרייה הלאומית בירושלים",
            image: "images/jerusalem.jpg",
            description: "ממוקמת בגבעת רם, ירושלים. מציעה מגוון ספרים ושירותים.",
            link: "https://www.nli.org.il"
        },
        {
            city: "תל אביב",
            name: "בית אריאלה - תל אביב",
            image: "images/telavivbeitariela_autoOrient_i.jpg",
            description: "הספרייה המרכזית בתל אביב. מקום לקריאה וללמידה.",
            link: "https://www.tel-aviv.gov.il/Ariela"
        },
        {
            city: "הרצליה",
            name: "ספריית הרצליה",
            image: "images/herzrliya.jpg",
            description: "ספריית הרצליה מציעה מגוון ספרים בתחומים שונים. מקום מעולה לקריאה וללימודים.",
            link: "https://www.herzliya.muni.il/library"
        },
        {
            city: "חולון",
            name: "ספריית מדיה-טק חולון",
            image: "images/holon.jpg",
            description: "ספריית מדיה-טק חולון מציעה גישה למגוון ספרים דיגיטליים ושירותי מדיה.",
            link: "https://www.holonlibrary.org.il"
        },
        {
            city: "רמת גן",
            name: "הספרייה העירונית רמת גן (\"בית עמנואל\")",
            image: "images/ramatgan.jpg",
            description: "הספרייה העירונית ברמת גן מציעה מגוון ספרים ופעילויות תרבותיות. מקום שמיועד לכל המשפחה.",
            link: "https://www.ramat-gan.muni.il"
        },
        {
            city: "ירושלים",
            name: "הספרייה העירונית ירושלים (\"בית העם\")",
            image: "images/jerusalem2.png",
            description: "הספרייה העירונית ירושלים מציעה ספרים, אירועים תרבותיים ואפשרויות לימוד למבוגרים וילדים.",
            link: "https://www.jerusalem.muni.il"
        },
        {
            city: "כפר סבא",
            name: "ספריית כפר סבא (\"בית ספיר\")",
            image: "images/kfarsaba.jpg",
            description: "ספריית כפר סבא מציעה מגוון פעילויות קריאה, סדנאות, והדרכות ספרייתיות.",
            link: "https://www.kfar-saba.muni.il"
        },
        {
            city: "פתח תקווה",
            name: "ספריית פתח תקווה (\"כותר פיס\")",
            image: "images/petachtikva.jpg",
            description: "ספריית פתח תקווה מציעה מגוון ספרים ופעילויות קהילתיות. מקום מושלם לחובבי קריאה.",
            link: "https://www.petah-tikva.muni.il"
        },
        {
            city: "רחובות",
            name: "ספריית רחובות (\"בית דונדיקוב\")",
            image: "images/rehovot.jpeg",
            description: "הספרייה העירונית ברחובות מציעה ספרים, פעילות תרבותית ותחום מדיה עשיר.",
            link: "https://www.rehovot.muni.il"
        },
        {
            city: "חיפה",
            name: "ספריית חיפה (\"בית היינה\")",
            image: "images/herzrliya.jpg",
            description: "ספריית חיפה מציעה ספרים, גישה למידע און-ליין, ופעילויות לכל גיל.",
            link: "https://www.haifa.muni.il"
        }
    ];



    const libraryList = document.querySelector(".flex-container-subjects"); // בוחר את ה-UL הקיים

    libraries.forEach(library => {
        // יצירת האלמנט LI
        const li = document.createElement("li");
        li.setAttribute("data-city", library.city);

        // כותרת הספרייה
        const h3 = document.createElement("h3");
        h3.textContent = library.name;

        // תמונת הספרייה
        // תמונת הספרייה
        const img = document.createElement("img");
        img.src = library.image; // לשים לב לשימוש במאפיין הנכון
        img.alt = library.name; // אפשר להשתמש בשם הספרייה כטקסט אלטרנטיבי


        // תיאור הספרייה
        const p = document.createElement("p");
        p.textContent = library.description;

        // קישור לאתר הספרייה
        const a = document.createElement("a");
        a.href = library.link;
        a.target = "_blank";
        a.textContent = "לאתר הספרייה";
        a.classList.add("library-button");

        // הוספת כל האלמנטים ל-LI
        li.appendChild(h3);
        li.appendChild(img);
        li.appendChild(p);
        li.appendChild(a);

        // הוספת ה-LI לרשימה (UL)
        libraryList.appendChild(li);
    });
    
    
    
    
    const searchInput = document.getElementById('search-input'); //משתנה לתיבת החיפוש
    const searchButton = document.getElementById('search-button'); //משתנה לכפתור החיפוש
    const resetButton = document.getElementById('reset-button'); // כפתור איפוס

    
    let errorText = document.getElementById('errormsg');
    searchButton.disabled = true;  //כפתור החיפוש מתחיל כשלא זמין
    errorText.innerText = "";
    // מאזין לאירוע של שינוי בתיבת הקלט //כפתור החיפוש
    searchInput.addEventListener('input', function() {
        // אם התיבה ריקה, הכפתור יהיה disabled
        if (searchInput.value.trim() === '') {
            searchButton.disabled = true;
        } else {
            // אם יש טקסט בתיבה, הכפתור יהיה זמין
            searchButton.disabled = false;
        }
    });

    //חיפוש ספריות לפי עיר
    document.getElementById('search-button').addEventListener('click', function() {
        const searchQuery = document.getElementById('search-input').value.trim().toLowerCase(); // ערך החיפוש
        const libraries = document.querySelectorAll('.flex-container-subjects li'); // כל הספריות

        let foundMatch = false; // משתנה למעקב אם הספרייה נמצאה

        libraries.forEach(function(library) {
            const city = library.getAttribute('data-city').toLowerCase(); // העיר של כל ספרייה
            if (city.includes(searchQuery)) {
                library.style.display = 'flex'; // הצגת הספרייה אם העיר תואמת
                foundMatch = true; 
            } else {
                library.style.display = 'none'; // הסתרת הספרייה אם העיר לא תואמת
            }
        });

        if (!foundMatch) {
            errorText.innerText = 'מצטערים! לא מצאנו ספריות באיזור שחיפשת';
        } else {
            errorText.innerText = ''; // לנקות את הטקסט במידה ונמצאה ספרייה
        }
    });

    // מאזין לאירוע של לחיצה על כפתור האיפוס
    resetButton.addEventListener('click', function() {
        searchInput.value = ''; // מאפס את תיבת החיפוש
        searchButton.disabled = true; // מכבה את כפתור החיפוש
        const libraries = document.querySelectorAll('.flex-container-subjects li'); // כל הספריות
        libraries.forEach(function(library) {
            library.style.display = 'flex'; // מוודא שכל הספריות מוצגות
        });
        errorText.innerText = ''; // מנקה את הודעת השגיאה
    });
    
    /* popup*/
    const popup = document.getElementById('promo-popup');
    const closePopup = document.getElementById('close-popup');

    // הצגת הפופאפ לאחר 3 שניות
    setTimeout(function() {
        popup.style.display = 'flex';
    }, 3000);

    // סגירת הפופאפ
    closePopup.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // סגירת הפופאפ אם נלחץ מחוץ לו
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

});

