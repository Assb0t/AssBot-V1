const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const PREFIX = "a!"

client.on('ready', () => {
    console.log(`Hello! I have arrived!`);
});

client.on('message', (message) => {

    if (message.author.bot) return;

    msg = message.content.toLowerCase();
        
    if (msg.startsWith (PREFIX + "hello")) {
        message.channel.send(`Hello ${message.author}, I hope you have been having a good day ssssso far.`);
    }

    if (msg.startsWith (PREFIX + "hiss")) {
        message.channel.send('Hisssss!');
    }

    if (msg.startsWith (PREFIX + "boop")) {
        message.channel.send('https://tenor.com/view/snake-boop-iwas-not-prepared-snake-head-gif-5375919');
    }

    if (msg.startsWith (PREFIX + "hat")) {
        message.channel.send('https://imgur.com/gallery/TIvjC5i');
    }

    if (msg.startsWith (PREFIX + "pet")) {
        message.channel.send('http://i.imgur.com/QieS5.gif');
    }

    if (msg.startsWith (PREFIX + "feedsnack")) {
        message.channel.send('Nom nom nom! Now I feel n!Sleepy ...');
    }

    if (msg.startsWith (PREFIX + "sleepy")) {
        message.channel.send('https://giphy.com/gifs/yawn-animated-EMF51ioCeIKY');
    }

    if (msg.startsWith (PREFIX + "howareyou")) {
        number = 3;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1 ;
        switch (random) {
            case 1: message.channel.send('**-Hisses-** Leave me be... I am not in the mood for your sssshenaniganssss...'); break;
            case 2: message.channel.send('Oh! I am well today... thank you for assssking. Not many people do... sssssnake and all.'); break;
            case 3: message.channel.send('**-Soft Hiss-** I am ssssorry, I am quite bussssy right now. Come again later, if that issss OK.'); break;
    }}

    if (msg.startsWith (PREFIX + "randomtype")) {
        number = 18;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1 ;
        switch (random) {
            case 1: message.channel.send('Normal'); break;
            case 2: message.channel.send('Fighting'); break;
            case 3: message.channel.send('Fire'); break;
            case 4: message.channel.send('Water'); break;
            case 5: message.channel.send('Flying'); break;
            case 6: message.channel.send('Grass'); break;
            case 7: message.channel.send('Poison'); break;
            case 8: message.channel.send('Electric'); break;
            case 9: message.channel.send('Ground'); break;
            case 10: message.channel.send('Psychic'); break;
            case 11: message.channel.send('Rock'); break;
            case 12: message.channel.send('Ice'); break;
            case 13: message.channel.send('Bug'); break;
            case 14: message.channel.send('Dragon'); break;
            case 15: message.channel.send('Ghost'); break;
            case 16: message.channel.send('Steel'); break;
            case 17: message.channel.send('Dark'); break;
            case 18: message.channel.send('Fairy'); break;

    }}

    if (msg.startsWith (PREFIX + "coin")) {
        number = 2;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1 ;
        switch (random) {
            case 1: message.channel.send('The Coin landed on **Heads!**'); break;
            case 2: message.channel.send('The Coin landed on **Tails!**'); break;
    }}

    if (msg.startsWith (PREFIX + "roll")){
        var args = message.content.split(/\s+/);
        
        var secondArgs = args[1];
    
        if (isNaN(secondArgs) || secondArgs === undefined || secondArgs == null){
            message.channel.send("To use the number roller, type a number after the command! \n \n" + "E.G. r!Roll 10 [for a number between 1 and 10]");
        } else {
            var randomNumber = Math.floor(Math.random() * secondArgs) + 1;
            
            message.channel.send("You rolled the number **" + randomNumber + "!**");		
        }
    } 

    if (msg.startsWith (PREFIX + "randomnumber")) {
        message.channel.send('Your random number isss' + "**" + " " + Math.floor(Math.random() * 100 + 1) + "**" + "!")
    }

    if (msg.startsWith (PREFIX + "time")) {
        var d = new Date();
        var e = new Date(d.getTime()-(86400000/6));	
        
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        var currentMonth = months[e.getMonth()];
        
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        var currentDay = days[e.getDay()];
        
        var HH = e.getHours();
        var mm = e.getMinutes();
        var ss = e.getSeconds();
        
        HH = HH < 10 ? '0' + HH : HH;
        mm = mm < 10 ? '0' + mm : mm;
        ss = ss < 10 ? '0' + ss : ss;
        
        var currentTime = HH + ":" + mm + ":" + ss;
                    
        //MESSAGE COMMAND HERE!
        
        message.channel.send("I do believe it issss **" + currentDay + ", " + e.getDate() + " " + currentMonth + " "+ e.getFullYear() + "** and that it issss **" + currentTime + "** in the Issslesss right now.");				
    }

    if (msg.startsWith (PREFIX + "expstemple")) {
        
        var getRandomAge = function(AgeList, ageWeight) {
            var total_weight = ageWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });

            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)

            for (var i = 0; i < AgeList.length; i++) {
                weight_sum += ageWeight[i];
                weight_sum = +weight_sum.toFixed(2);

                if (random_num <= weight_sum) {
                    return AgeList[i];
                }
            }   
        //end of function
        };  

        var getRandomItem = function(ItemList, itemWeight) {
            var total_weight = itemWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });

            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)

            for (var i = 0; i < ItemList.length; i++) {
                weight_sum += itemWeight[i];
                weight_sum = +weight_sum.toFixed(2);

                if (random_num <= weight_sum) {
                    return ItemList[i];
                }
            }   
        //end of function
        }; 

        var getRandomTrait = function(traitList, traitWeight) {
            var total_weight = traitWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });

            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)

            for (var i = 0; i < traitList.length; i++) {
                weight_sum += traitWeight[i];
                weight_sum = +weight_sum.toFixed(2);

                if (random_num <= weight_sum) {
                    return traitList[i];
                }
            }   
        //end of function
        };            

        var rand = function(min, max) {
            return Math.random() * (max - min) + min;
        };
         
        var getRandomMonster = function(monster, weight) {
            var total_weight = weight.reduce(function (prev, cur, i, arr) {
                return prev + cur;
            });
             
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
             
            for (var i = 0; i < monster.length; i++) {
                weight_sum += weight[i];
                weight_sum = +weight_sum.toFixed(2);
                 
                if (random_num <= weight_sum) {
                    return monster[i];
                }
            }
             
        // end of function
        };    

        var traitList = ["Psychic","Water","Fairy"];
        var traitWeight = [33,33,33];
        var random_trait = getRandomTrait(traitList, traitWeight);

        var monster = ["Sprite","Satyr","Mimic","Siren","Merrow"];
        var weight = [35,25,20,15,5];
        var random_monster = getRandomMonster(monster, weight);

        var AgeList = ["Infant","Juvenile","Mature","Elder"] 
        var ageWeight = [10,50,30,10];
        var random_age = getRandomAge(AgeList, ageWeight);

        var ItemList = ["a Talisman","a Magic Charm","a Mystery Brew","a Scroll of Legend"] 
        var itemWeight = [45,40,10,5];
        var random_item = getRandomItem(ItemList, itemWeight);
        
        number = 6;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send('You encounter a' + "**" + " " + random_age + " " + random_trait + " " + random_monster + "** " + 'on your walk today! Prepare for Battle!'); break;
            case 2: message.channel.send('You find **' + random_item + '** on your walk today!'); break;
            case 4: message.channel.send('You seem to encounter nothing today... but had a great walk!'); break;
            case 5: message.channel.send('Everything seems fine until a theif runs by you and steals some money! **You lose 30 GC!**'); break;
            case 6: message.channel.send('You seem to find a lost gold pouch on the ground! After returning it to the owner they **give you 30 GC** as a thank you!'); break;
        }
    };

    if (msg.startsWith (PREFIX + "explhall")) {
        
        var getRandomAge = function(AgeList, ageWeight) {
            var total_weight = ageWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });

            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)

            for (var i = 0; i < AgeList.length; i++) {
                weight_sum += ageWeight[i];
                weight_sum = +weight_sum.toFixed(2);

                if (random_num <= weight_sum) {
                    return AgeList[i];
                }
            }   
        //end of function
        };  

        var getRandomItem = function(ItemList, itemWeight) {
            var total_weight = itemWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });

            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)

            for (var i = 0; i < ItemList.length; i++) {
                weight_sum += itemWeight[i];
                weight_sum = +weight_sum.toFixed(2);

                if (random_num <= weight_sum) {
                    return ItemList[i];
                }
            }   
        //end of function
        }; 

        var getRandomTrait = function(traitList, traitWeight) {
            var total_weight = traitWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });

            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)

            for (var i = 0; i < traitList.length; i++) {
                weight_sum += traitWeight[i];
                weight_sum = +weight_sum.toFixed(2);

                if (random_num <= weight_sum) {
                    return traitList[i];
                }
            }   
        //end of function
        };            

        var rand = function(min, max) {
            return Math.random() * (max - min) + min;
        };
         
        var getRandomMonster = function(monster, weight) {
            var total_weight = weight.reduce(function (prev, cur, i, arr) {
                return prev + cur;
            });
             
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
             
            for (var i = 0; i < monster.length; i++) {
                weight_sum += weight[i];
                weight_sum = +weight_sum.toFixed(2);
                 
                if (random_num <= weight_sum) {
                    return monster[i];
                }
            }
             
        // end of function
        };    

        var traitList = ["Dark","Ghost","Normal"];
        var traitWeight = [33,33,33];
        var random_trait = getRandomTrait(traitList, traitWeight);

        var monster = ["Mephit","Skull Raven","Mimic","Shade","Wraith"];
        var weight = [35,25,20,15,5];
        var random_monster = getRandomMonster(monster, weight);

        var AgeList = ["Infant","Juvenile","Mature","Elder"] 
        var ageWeight = [10,50,30,10];
        var random_age = getRandomAge(AgeList, ageWeight);

        var ItemList = ["a Talisman","a Mind Charm","a Jewel","a set of Blessed Robes"] 
        var itemWeight = [45,40,10,5];
        var random_item = getRandomItem(ItemList, itemWeight);
        
        number = 6;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send('You encounter a' + "**" + " " + random_age + " " + random_trait + " " + random_monster + "** " + 'on your walk today! Prepare for Battle!'); break;
            case 2: message.channel.send('You find **' + random_item + '** on your walk today!'); break;
            case 4: message.channel.send('You seem to encounter nothing today... but had a great walk!'); break;
            case 5: message.channel.send('Everything seems fine until a theif runs by you and steals some money! **You lose 30 GC!**'); break;
            case 6: message.channel.send('You seem to find a lost gold pouch on the ground! After returning it to the owner they **give you 30 GC** as a thank you!'); break;
        }
    };

    if (msg.startsWith (PREFIX + "expfmountain")) {
        
        var getRandomAge = function(AgeList, ageWeight) {
            var total_weight = ageWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });

            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)

            for (var i = 0; i < AgeList.length; i++) {
                weight_sum += ageWeight[i];
                weight_sum = +weight_sum.toFixed(2);

                if (random_num <= weight_sum) {
                    return AgeList[i];
                }
            }   
        //end of function
        };  

        var getRandomItem = function(ItemList, itemWeight) {
            var total_weight = itemWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });

            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)

            for (var i = 0; i < ItemList.length; i++) {
                weight_sum += itemWeight[i];
                weight_sum = +weight_sum.toFixed(2);

                if (random_num <= weight_sum) {
                    return ItemList[i];
                }
            }   
        //end of function
        }; 

        var getRandomTrait = function(traitList, traitWeight) {
            var total_weight = traitWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });

            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)

            for (var i = 0; i < traitList.length; i++) {
                weight_sum += traitWeight[i];
                weight_sum = +weight_sum.toFixed(2);

                if (random_num <= weight_sum) {
                    return traitList[i];
                }
            }   
        //end of function
        };            

        var rand = function(min, max) {
            return Math.random() * (max - min) + min;
        };
         
        var getRandomMonster = function(monster, weight) {
            var total_weight = weight.reduce(function (prev, cur, i, arr) {
                return prev + cur;
            });
             
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
             
            for (var i = 0; i < monster.length; i++) {
                weight_sum += weight[i];
                weight_sum = +weight_sum.toFixed(2);
                 
                if (random_num <= weight_sum) {
                    return monster[i];
                }
            }
             
        // end of function
        };    

        var traitList = ["Ice","Rock","Steel"];
        var traitWeight = [33,33,33];
        var random_trait = getRandomTrait(traitList, traitWeight);

        var monster = ["Gnoll","Saberlyre","Mimic","Dire Wolf","Mammoth"];
        var weight = [35,25,20,15,5];
        var random_monster = getRandomMonster(monster, weight);

        var AgeList = ["Infant","Juvenile","Mature","Elder"] 
        var ageWeight = [10,50,30,10];
        var random_age = getRandomAge(AgeList, ageWeight);

        var ItemList = ["a vial of Pheremones","a Strength Charm","a Special Memento","a Legendary Sword"] 
        var itemWeight = [45,40,10,5];
        var random_item = getRandomItem(ItemList, itemWeight);
        
        number = 6;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send('You encounter a' + "**" + " " + random_age + " " + random_trait + " " + random_monster + "** " + 'on your walk today! Prepare for Battle!'); break;
            case 2: message.channel.send('You find **' + random_item + '** on your walk today!'); break;
            case 4: message.channel.send('You seem to encounter nothing today... but had a great walk!'); break;
            case 5: message.channel.send('Everything seems fine until a theif runs by you and steals some money! **You lose 30 GC!**'); break;
            case 6: message.channel.send('You seem to find a lost gold pouch on the ground! After returning it to the owner they **give you 30 GC** as a thank you!'); break;
        }
    };

    if (msg.startsWith (PREFIX + "pherostemple")) {
        
        var getRandomAge = function(AgeList, ageWeight) {
            var total_weight = ageWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });

            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)

            for (var i = 0; i < AgeList.length; i++) {
                weight_sum += ageWeight[i];
                weight_sum = +weight_sum.toFixed(2);

                if (random_num <= weight_sum) {
                    return AgeList[i];
                }
            }   
        //end of function
        };  

        var getRandomTrait = function(traitList, traitWeight) {
            var total_weight = traitWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });

            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)

            for (var i = 0; i < traitList.length; i++) {
                weight_sum += traitWeight[i];
                weight_sum = +weight_sum.toFixed(2);

                if (random_num <= weight_sum) {
                    return traitList[i];
                }
            }   
        //end of function
        };            

        var rand = function(min, max) {
            return Math.random() * (max - min) + min;
        };
         
        var getRandomMonster = function(monster, weight) {
            var total_weight = weight.reduce(function (prev, cur, i, arr) {
                return prev + cur;
            });
             
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
             
            for (var i = 0; i < monster.length; i++) {
                weight_sum += weight[i];
                weight_sum = +weight_sum.toFixed(2);
                 
                if (random_num <= weight_sum) {
                    return monster[i];
                }
            }
             
        // end of function
        };    

        var traitList = ["Psychic","Water","Fairy"];
        var traitWeight = [33,33,33];
        var random_trait = getRandomTrait(traitList, traitWeight);

        var monster = ["Sprite","Satyr","Mimic","Siren","Merrow"];
        var weight = [35,25,20,15,5];
        var random_monster = getRandomMonster(monster, weight);

        var AgeList = ["Infant","Juvenile","Mature","Elder"] 
        var ageWeight = [10,50,30,10];
        var random_age = getRandomAge(AgeList, ageWeight);
 
        number = 1;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send('As you use your vial of pheremones a' + "**" + " " + random_age + " " + random_trait + " " + random_monster + "** " + 'charges towards you! Prepare for Battle!'); break;
        }
    };

    if (msg.startsWith (PREFIX + "pherolhall")) {
        
        var getRandomAge = function(AgeList, ageWeight) {
            var total_weight = ageWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });

            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)

            for (var i = 0; i < AgeList.length; i++) {
                weight_sum += ageWeight[i];
                weight_sum = +weight_sum.toFixed(2);

                if (random_num <= weight_sum) {
                    return AgeList[i];
                }
            }   
        //end of function
        };  

        var getRandomTrait = function(traitList, traitWeight) {
            var total_weight = traitWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });

            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)

            for (var i = 0; i < traitList.length; i++) {
                weight_sum += traitWeight[i];
                weight_sum = +weight_sum.toFixed(2);

                if (random_num <= weight_sum) {
                    return traitList[i];
                }
            }   
        //end of function
        };            

        var rand = function(min, max) {
            return Math.random() * (max - min) + min;
        };
         
        var getRandomMonster = function(monster, weight) {
            var total_weight = weight.reduce(function (prev, cur, i, arr) {
                return prev + cur;
            });
             
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
             
            for (var i = 0; i < monster.length; i++) {
                weight_sum += weight[i];
                weight_sum = +weight_sum.toFixed(2);
                 
                if (random_num <= weight_sum) {
                    return monster[i];
                }
            }
             
        // end of function
        };    

        var traitList = ["Dark","Ghost","Normal"];
        var traitWeight = [33,33,33];
        var random_trait = getRandomTrait(traitList, traitWeight);

        var monster = ["Mephit","Skull Raven","Mimic","Shade","Wraith"];
        var weight = [35,25,20,15,5];
        var random_monster = getRandomMonster(monster, weight);

        var AgeList = ["Infant","Juvenile","Mature","Elder"] 
        var ageWeight = [10,50,30,10];
        var random_age = getRandomAge(AgeList, ageWeight);
 
        number = 1;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send('As you use your vial of pheremones a' + "**" + " " + random_age + " " + random_trait + " " + random_monster + "** " + 'charges towards you! Prepare for Battle!'); break;
        }
    };

    if (msg.startsWith (PREFIX + "pherofmountain")) {
        
        var getRandomAge = function(AgeList, ageWeight) {
            var total_weight = ageWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });

            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)

            for (var i = 0; i < AgeList.length; i++) {
                weight_sum += ageWeight[i];
                weight_sum = +weight_sum.toFixed(2);

                if (random_num <= weight_sum) {
                    return AgeList[i];
                }
            }   
        //end of function
        };  

        var getRandomTrait = function(traitList, traitWeight) {
            var total_weight = traitWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });

            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)

            for (var i = 0; i < traitList.length; i++) {
                weight_sum += traitWeight[i];
                weight_sum = +weight_sum.toFixed(2);

                if (random_num <= weight_sum) {
                    return traitList[i];
                }
            }   
        //end of function
        };            

        var rand = function(min, max) {
            return Math.random() * (max - min) + min;
        };
         
        var getRandomMonster = function(monster, weight) {
            var total_weight = weight.reduce(function (prev, cur, i, arr) {
                return prev + cur;
            });
             
            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)
             
            for (var i = 0; i < monster.length; i++) {
                weight_sum += weight[i];
                weight_sum = +weight_sum.toFixed(2);
                 
                if (random_num <= weight_sum) {
                    return monster[i];
                }
            }
             
        // end of function
        };    

        var traitList = ["Ice","Rock","Steel"];
        var traitWeight = [33,33,33];
        var random_trait = getRandomTrait(traitList, traitWeight);

        var monster = ["Gnoll","Saberlyre","Mimic","Dire Wolf","Mammoth"];
        var weight = [35,25,20,15,5];
        var random_monster = getRandomMonster(monster, weight);

        var AgeList = ["Infant","Juvenile","Mature","Elder"] 
        var ageWeight = [10,50,30,10];
        var random_age = getRandomAge(AgeList, ageWeight);
 
        number = 1;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send('As you use your vial of pheremones a' + "**" + " " + random_age + " " + random_trait + " " + random_monster + "** " + 'charges towards you! Prepare for Battle!'); break;
        }
    };

    if (msg.startsWith (PREFIX + "tmanstemple")) {
        
        var getRandomItem = function(ItemList, itemWeight) {
            var total_weight = itemWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });

            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)

            for (var i = 0; i < ItemList.length; i++) {
                weight_sum += itemWeight[i];
                weight_sum = +weight_sum.toFixed(2);

                if (random_num <= weight_sum) {
                    return ItemList[i];
                }
            }   
        //end of function
        };   

        var rand = function(min, max) {
            return Math.random() * (max - min) + min;
        };

        var ItemList = ["a Talisman","a Magic Charm","a Mystery Brew","a Scroll of Legend"] 
        var itemWeight = [45,40,10,5];
        var random_item = getRandomItem(ItemList, itemWeight);
        
        number = 3;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send('You find **' + random_item + '** on your walk today!'); break;
            case 2: message.channel.send('Everything seems fine until a theif runs by you and steals some money! **You lose 30 GC!**'); break;
            case 3: message.channel.send('You seem to find a lost gold pouch on the ground! After returning it to the owner they **give you 30 GC** as a thank you!'); break;
        }
    };

    if (msg.startsWith (PREFIX + "tmanlhall")) {

        var getRandomItem = function(ItemList, itemWeight) {
            var total_weight = itemWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });

            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)

            for (var i = 0; i < ItemList.length; i++) {
                weight_sum += itemWeight[i];
                weight_sum = +weight_sum.toFixed(2);

                if (random_num <= weight_sum) {
                    return ItemList[i];
                }
            }   
        //end of function
        };   

        var rand = function(min, max) {
            return Math.random() * (max - min) + min;
        };

        var ItemList = ["a Talisman","a Mind Charm","a Jewel","a set of Blessed Robes"] 
        var itemWeight = [45,40,10,5];
        var random_item = getRandomItem(ItemList, itemWeight);
        
        number = 3;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send('You find **' + random_item + '** on your walk today!'); break;
            case 2: message.channel.send('Everything seems fine until a theif runs by you and steals some money! **You lose 30 GC!**'); break;
            case 3: message.channel.send('You seem to find a lost gold pouch on the ground! After returning it to the owner they **give you 30 GC** as a thank you!'); break;
        }
    };

    if (msg.startsWith (PREFIX + "tmanfmountain")) {

        var getRandomItem = function(ItemList, itemWeight) {
            var total_weight = itemWeight.reduce(function (prev, cur, i, arr
            )  {
                    return prev + cur;
            });

            var random_num = rand(0, total_weight);
            var weight_sum = 0;
            //console.log(random_num)

            for (var i = 0; i < ItemList.length; i++) {
                weight_sum += itemWeight[i];
                weight_sum = +weight_sum.toFixed(2);

                if (random_num <= weight_sum) {
                    return ItemList[i];
                }
            }   
        //end of function
        };    

        var rand = function(min, max) {
            return Math.random() * (max - min) + min;
        };

        var ItemList = ["a vial of Pheremones","a Strength Charm","a Special Memento","a Legendary Sword"] 
        var itemWeight = [45,40,10,5];
        var random_item = getRandomItem(ItemList, itemWeight);
        
        number = 3;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send('You find **' + random_item + '** on your walk today!'); break;
            case 2: message.channel.send('Everything seems fine until a theif runs by you and steals some money! **You lose 30 GC!**'); break;
            case 3: message.channel.send('You seem to find a lost gold pouch on the ground! After returning it to the owner they **give you 30 GC** as a thank you!'); break;
        }
    };

});

client.login(auth.token)
