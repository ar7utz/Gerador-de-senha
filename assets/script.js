const inputPass = document.querySelector("#inputSenhaId");
const lenPass = document.querySelector("#inputComprimentoId");
const numComprimento = document.querySelector('label[for="inputComprimentoId"]');
const btnGerar = document.querySelector("#btnGerar");

const checkLower = document.querySelector("#checkLower");
const checkUpper = document.querySelector("#checkUpper");
const checkNum = document.querySelector("#checkNum");
const checkSymb = document.querySelector("#checkSymb");

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //array de números
const symbols = ["!", "@", "#", "$", "%", "&"]; //array dos símbolos

const chars = Array.from(Array(24)).map((_, i) => i + 97);
const lowercaseChar = chars.map((item) => String.fromCharCode(item));
const uppercaseChar = lowercaseChar.map((item) => item.toUpperCase());

numComprimento.innerHTML = lenPass.value; //mostrar os números no range

lenPass.addEventListener("change", () => {
    numComprimento.innerHTML = lenPass.value;
});

btnGerar.addEventListener("click", () => {
    generatePassword(
        checkNum.checked,
        checkSymb.checked,
        checkLower.checked,
        checkUpper.checked,
        lenPass.value
    );
});

const generatePassword = (
    hasNum,
    hasSymb,
    hasLower,
    hasUpper,
    length
    ) => {
        const novaArray = [
            ...(hasNum ? numbers : []),
            ...(hasSymb ? symbols : []),
            ...(hasLower ? lowercaseChar : []),
            ...(hasUpper ? uppercaseChar : []),
        ];
    
        if (novaArray.length === 0) return; //verificar se tiver informação no array
    
        let senha = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * novaArray.length); //math.floor para arredondar
            senha += novaArray[randomIndex];
    
            inputPass.value = senha;
    }
    
    };