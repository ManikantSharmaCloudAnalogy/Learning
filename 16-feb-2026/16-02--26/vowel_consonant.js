let str="mani&______&****      hlo"
let vowel=0;
let conso=0;
for(let i=0;i<str.length;i++){
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u")
        {
vowel++;
        }
        else if(str[i]>="a" && str[i]<="z"){
            
            conso++;
        }
        else{
            continue;
        }
    }
strLength=str.length;
console.log(`the total number of vowel in the string:${strLength}/${vowel}`);
console.log(`the total number of consonant in the string:${strLength}/${conso}`);

