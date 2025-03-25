const fontSelect = document.getElementById('fontSelect');
const textField = document.getElementById('textField');
const colorPicker = document.getElementById('colorPicker');
const fontSize = document.getElementById('fontSize');
const variableControls = document.getElementById('variableControls');
const axis1 = document.getElementById('axis1'); // Horizontale Achse (HRZT)
const axis2 = document.getElementById('axis2'); // Vertikale Achse (VRCL)

fontSelect.addEventListener('change', updateFont);
colorPicker.addEventListener('input', () => textField.style.color = colorPicker.value);
fontSize.addEventListener('input', () => textField.style.fontSize = fontSize.value + 'px');
axis1.addEventListener('input', updateVariableFont);
axis2.addEventListener('input', updateVariableFont);

// Anzeigen der aktuellen Schiebereglerwerte
axis1.addEventListener('input', function() {
    document.getElementById('axis1Value').textContent = axis1.value;
});
axis2.addEventListener('input', function() {
    document.getElementById('axis2Value').textContent = axis2.value;
});

function updateFont() {
    const selectedFont = fontSelect.value;
    
    if (selectedFont === 'Nexum') {
        document.body.style.background = '#8ac2eb';
        textField.style.fontFamily = 'Nexum';
        variableControls.style.display = 'none';
    } else {
        document.body.style.background = '#ddd276';
        textField.style.fontFamily = 'Compoundry';
        variableControls.style.display = 'block';
    }
}

function updateVariableFont() {
    // Steuere die Achsenwerte für horizontal (HRZT) und vertikal (VRCL)
    const horizontal = axis1.value;  // Horizontale Achse (HRZT)
    const vertical = axis2.value;    // Vertikale Achse (VRCL)

    // Wendet die Schriftvariationen an, wobei 'HRZT' die horizontale Achse und
    // 'VRCL' die vertikale Achse ist.
    textField.style.fontVariationSettings = `'HRZT' ${horizontal}, 'VRCL' ${vertical}`;
}

fontSize.addEventListener('input', function() {
    // Setzt die Schriftgröße des Textfeldes
    textField.style.fontSize = fontSize.value + 'px';

    // Zeigt den aktuellen Wert der Schriftgröße an
    document.getElementById('fontSizeValue').textContent = fontSize.value;
});

function setFont(fontName) {
    const variableControls = document.getElementById("variableControls");

    // Sicherstellen, dass die Achsen nebeneinander oder untereinander angezeigt werden
    if (fontName === "compoundry") {
        variableControls.style.flexDirection = "column"; // Achsen vertikal anordnen
        document.body.style.backgroundColor = "#f5f5f5";  // Setzt das Design auf grau-weiß für Compoundry
    } else {
        variableControls.style.flexDirection = "row"; // Achsen nebeneinander anordnen
        document.body.style.backgroundColor = "#8ac2eb";  // Setzt das Design auf blau für Nexum
    }

    // Wechsel der Schriftart
    if (fontName === "compoundry") {
        document.body.style.fontFamily = "'Compoundry', sans-serif";
    } else if (fontName === "nexum") {
        document.body.style.fontFamily = "'Nexum', sans-serif";
    }
}


