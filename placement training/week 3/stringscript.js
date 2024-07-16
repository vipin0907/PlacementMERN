function numberofVowels(){
    var input = document.getElementById("strinput").value;
    var s = input.replace(/[^aeiouAEIOU]/g, "");
    alert(s.length)
}