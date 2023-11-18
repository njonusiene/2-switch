// 2 Ternary užduotis:
// 1. Parašykite variable su jūsų vardu. Pasiklauskite, jei vardo ilgis trumpesnis nei 5 simboliai - tegul išmeta konsolėje "Short Name", kitaip - "Long Name".

var vardas = "Neringa";

vardas.length < 5 ? console.log("Short Name") : console.log("Long Name");

// 2. Sukurkite du kintamuosius: 'clientAge' ir 'legalAge'. Patikriname ar vartotojas gali vairuoti automobilį - t.y. clientAge didesnis arba lygus legalAge. Jei taip - išmeta 'Can Drive', kitaip 'Can't drive'.

var clientAge = prompt("Ar galite vairuoti? Patikrinsime įvedus Jums savo amžių: ")
var legalAge = 18

clientAge >= legalAge ? alert("Can drive"): alert("Cant't drive")

// 3. Ahh, o jeigu antrame pratime įvesti -1 kaip amžių? Darom double ternary operator - t.y. operatorius operatoriuje. Pirma paklausiame - jei amžius mažesnis nei 0; arba didesnis nei 120 - išmetame "Invalid Age". Jei vis tik ne - tada false statement'e bus dar vienas operatorius su antru pratimo klausimu.

var age = prompt("Koks jūsų amžius?");

var result = (age < 0 || age > 120) ? "Invalid Age" 
    : (age >= 18) ? "Can drive" 
    : "Can't drive";
alert(result);

// 4. Sukurkite variable 'phone', kuris būtų lygus 'iPhone'. Taip pat sukurkite variable isIphoneUser, kuris turėtų būti prilygintas Boolean reikšmei (t.y. true arba false) priklausomai ar phone yra 'iPhone' ar bet koks kitas

var phone = "iPhone"
var isIphoneUser = (phone == "iPhone");

console.log(isIphoneUser);

