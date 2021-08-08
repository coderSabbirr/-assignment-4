// Problem solving-1 start (seer to mon)

function seerToMon(number) {

    const oneMon = 40;
        
    if (typeof number != 'number') {
        return "Please enter a number!";
    } 
    
    else if (number <= 0) {
        return "Must input positive number!";

    }
    else{

        // formula
        let convert = number / oneMon;
        return convert;
       
    } 

}

console.log(seerToMon(80));

// Problem solving-1 end