// let var1 = +prompt("Inserte número"); // forma 1 de usar parseInt
// let var2 = parseInt (prompt("Inserte número")); // forma 2 de usar parseInt


/*  Aries	21 de marzo	19 de abril             0321 / 0419
    Tauro	20 de abril	20 de mayo              0420 / 0520
    Géminis	21 de mayo	20 de junio             0521 / 0620
    Cáncer	21 de junio	22 de julio             0621 / 0722
    Leo	    23 de julio	22 de agosto            0723 / 0822
    Virgo	23 de agosto 22 de septiembre       0823 / 0922
    Libra	23 de septiembre	22 de octubre   0923 / 1022
    Escorpio	23 de octubre	21 de noviembre 1023 / 1121
    Sagitario	22 de noviembre	21 de diciembre 1122 / 1221
   *Capricornio	22 de diciembre	19 de enero     1222 / 0119
    Acuario	20 de enero	18 de febrero           0120 / 0218 
    Piscis	19 de febrero	20 de marzo         0219 / 0320 */


/* let birthDate = +prompt ("Inserte MES y DÍA de nacimiento (MMDD):");


 if (birthDate >= 0321 && birthDate <= 0419)
{
    alert ("Tu signo zodiacal es");
}
else 
{
    alert ("Tu signo nonnono")
}   */


function numberInBetween(startingNumber, endingNumber, givenNumber){

    if(givenNumber > startingNumber && givenNumber < endingNumber)
        console.log(`Given number ${givenNumber} falls between ${startingNumber} and ${endingNumber}`);
    else
        console.log("Given number does not fall between within the given range");

}

numberInBetween(10,50,60);