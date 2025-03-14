let s = 9;
switch(s){
    case 3 :
    console.log("nine");
    break;
    case 6 :
    console.log("six");
    break ;
    case 8:
        console.log("egth");
        break;
        case 9:
            console.log("nine");
            break;
            default:
                console.log("no isent");
                break;
}
let date = new Date().getDay();
switch(date){
    case 1:
        console.log("Monday");
        break;
        case 2:
            console.log("Tuesday");
            break;
            case 3:
            console.log("Wednesday");
            break;
            case 4:
                console.log("Fersday");
                break;
            case 5:
                console.log("Friday");
                break;
             case 6 :
                console.log ("Horray today is the end of week,");
                break;
                case 7:
                    console.log("Sunday");
                    break; 
                    default:
                        console.log("Tise is not the valid day number");
                        break;   

}
let time = new Date().getHours();
switch(time){
    case 19:
        console.log(19);
        break;
        case 18:
            console.log(18);
            break;
            case 20:
console.log(20);
break;
default:
    console.log(21)
}