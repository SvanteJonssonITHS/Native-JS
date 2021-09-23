let num = prompt("Input a number!");
let out;
switch (parseInt(num)) {
    case 1:
        out = "ett";
        break;
    case 2:
        out = "två";

        break;
    case 3:
        out = "tre";

        break;
    case 4:
        out = "fyra";

        break;
    case 5:
        out = "fem";

        break;
    case 6:
        out = "sex";

        break;
    case 7:
        out = "sju";

        break;
    case 8:
        out = "åtta";

        break;
    case 9:
        out = "nio";

        break;
    case 10:
        out = "tio";

        break;
    case 11:
        out = "elva";

        break;
    case 12:
        out = "tolv";
        break;
    default:
        out = num;
        break;
}

window.alert(out);
