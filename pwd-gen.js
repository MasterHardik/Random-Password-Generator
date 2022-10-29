const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyzs"
const numberSet = "0123456789"
const specialSet = "~!@#$%^&*()_+=./;:'][{}|-?"

var getRandomData = (DataSet) =>
{
    return DataSet[Math.floor(Math.random()*DataSet.length)]
}

//imortant selectors
const PswdBox = document.getElementById("pswd-box"); 
const LenInput    = document.getElementById("total-char");
const UpperInput  = document.getElementById("upper-case");
const LowerInput  = document.getElementById("lower-case");
const NumberInput = document.getElementById("numbers");
const SymbolInput = document.getElementById("symbols");
const GenrateBTN = document.getElementById("gen-btn");

const generatePassword = (password = "") =>
{
    if (UpperInput.checked)
    {
        password += getRandomData(upperSet);
    }
    if (LowerInput.checked)
    {
        password += getRandomData(lowerSet);
    }
    if (NumberInput.checked)
    {
        password += getRandomData(numberSet);
    }
    if (SymbolInput.checked)
    {
        password += getRandomData(specialSet);
    }
    if (password.length < LenInput.value)
    {
        return generatePassword(password);
    }
    return password.substring(0,LenInput.value);
}

document.getElementById("gen-btn").addEventListener(
    "click",
    function ()
    {
        PswdBox.innerHTML = generatePassword();
    }
)