window.onload = function() {
    console.log("La page est entièrement chargée !");
};

let timeout;
window.onresize = function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log("Fenêtre redimensionnée !");
    }, 300);
};


if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
}

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => btn.style.transform = 'scale(1.05)');
    btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
});






function goBack() {
    
    // Réinitialiser l'affichage
    document.querySelectorAll("#wel, #bet, #form, #title").forEach(el => el.style.display = 'block');
    document.body.style.backgroundImage = "URL(world-map-of-continents-printable-free.webp)"; // Réinitialiser l'image de fond

    // Masquer le bouton "Retour"
    const retourButton = document.querySelector('button[type="button"]');
    if (retourButton) {
        retourButton.style.display = 'none';
    }
    
    // Réinitialiser tous les champs de sélection à leur état initial
    const allSelects = document.querySelectorAll('.chouse');
    allSelects.forEach(select => {
        select.value = 'nul';  // Réinitialiser les valeurs
        select.style.boxShadow="0px 4px 6px rgba(128, 128, 128, 0.5)";
        select.style.border = "5px outset rgb(155, 203, 230)";
        select.border
    });
}


function onAnnu(){
    const allSelects = document.querySelectorAll('.chouse');
    allSelects.forEach(select => {
    select.value = 'nul';  // Réinitialiser les valeurs
    select.style.boxShadow="0px 4px 6px rgba(128, 128, 128, 0.5)";
    select.style.border = "5px outset rgb(155, 203, 230)";
    select.border
   
    
        
        
            
        
    
    });}





document.addEventListener('DOMContentLoaded', function () {
    const VID = "nul"; 
    const CORRECT_ANSWERS = {
        ch1: "North America", 
        ch2: "South America",
        ch3: "Africa",
        ch4: "Europe",
        ch5: "Asia",
        ch6: "Australia",
        ch7: "Antrctica" 
    };

    
    

    function handleChange(selectElement) {
        const selectedValue = selectElement.value;
        const allSelects = document.querySelectorAll('.chouse');

        allSelects.forEach(select => {
            if (select !== selectElement && select.value === selectedValue) {
                select.value = VID;
            }
        });

        const audio = document.getElementById('sound');
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
    }

    function showCorrection() {
        Swal.fire({
            title: 'Information',
            text: 'Vous allez voir la correction.',
            icon: 'info'
        });
    
        // Modifier le fond et masquer certaines sections
        document.body.style.backgroundImage = "url('world_map_name.png.jpg')";
        document.querySelectorAll("#wel, #bet, #form, #title").forEach(el => el.style.display = 'none');
        
        // Afficher le bouton "Retour"
        const retourButton = document.querySelector('button[type="button"]');
        if (retourButton) {
            retourButton.style.display = 'inline-block';  // Afficher le bouton retour
            
        }
    }


   

    


    function testAnswers() {
        let score = 0;
        Object.keys(CORRECT_ANSWERS).forEach(key => {
            const field = document.getElementById(key);
            if (field && field.value === CORRECT_ANSWERS[key]) {
                score++;
                field.style.border = "6px outset lime";
                field.style.boxShadow = "0px 8px 16px rgb(33, 252, 91)";
            } else if (field) {
                field.style.border = "6px outset red";
                field.style.boxShadow = "0px 8px 16px rgba(255, 8, 8, 0.881)";
            }
        });

        let message = '';
        let icon = '';
        let imageUrl = '';
        if (score === 7) {
            message = 'Excellent :) Votre résultat est : ' + score + '/7';
            icon = 'success';
            imageUrl = 'pp.gif';
        } else if (score >= 5) {
            message = 'Très proche. Votre résultat est : ' + score + '/7';
            icon = 'success';
            imageUrl = 'https://emojiterra.com/data/animated-emoji/1f610.gif';
        } else if (score >= 3) {
            message = 'Pas mal. Votre résultat est : ' + score + '/7';
            icon = 'success';
            imageUrl = 'https://emojiterra.com/data/animated-emoji/1f610.gif';
        } else if (score > 1) {
            message = 'Votre résultat est : ' + score + '/7';
            icon = 'success';
        } else {
            message = 'Votre résultat est : ' + score + '/7';
            icon = 'error';
        }

        Swal.fire({
            title: message,
            icon: icon
        });

        const welElement = document.getElementById('wel');
        if (welElement && imageUrl) {
            welElement.src = imageUrl;
        }
    }

    const chouseElements = document.querySelectorAll('.chouse');
    chouseElements.forEach(selectElement => {
        selectElement.addEventListener('change', function () {
            handleChange(this);
        });
    });

    const correctionButton = document.getElementById('corrige');
    if (correctionButton) {
        correctionButton.addEventListener('click', showCorrection);
    }

    const validateButton = document.getElementById('vali');
    if (validateButton) {
        validateButton.addEventListener('click', testAnswers);
    }
});
