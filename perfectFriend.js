// Problem solving-4 start (Perfect friend)


function perfectFriend(friendName){

    let largest = friendName[0];
    for(let i = 0; i < friendName.length; i++){
        if(friendName[i].length > largest.length){ 
            largest = friendName[i]; 
        } 
    }

    return largest; 

}

console.log(perfectFriend(["sabbir", "nahid", "rakib", "promi", "tasfiya", "hasan", "rony"]));


// Problem solving-4 end 