let arr = ["red", "aqua", "bisque", "brown", "blue", "bluevoilet", "yellow", "green", "pink", "purple", "orange", "chocolate", "coral", "crimson", "cyan", "gray", "gold", "blanchedalmond", "lime", "olive", "navy", "teal", "royalblue", "saddlebrown", "salmon", "darkcyan", 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', "darkorchid", 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkturquoise', "darkviolet", 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', "firebrick", 'floralwhite', "forestgreen", "fuchsia", "gainsboro", "sandybrown"]
let ArrayPush = []
let Add = 0

document.querySelector(".clck").addEventListener("mouseover", function () {
    document.querySelector(".clck").style.backgroundColor = "tan"
})
document.querySelector(".clck").addEventListener("mouseout", function () {
    document.querySelector(".clck").style.backgroundColor = "#84a0a8"
})

document.querySelector(".clck").addEventListener("click", function () {

    if (Add < arr.length) {
        ArrayPush.push(arr[Add++])
        //  console.log(ArrayPush)
        document.querySelector("body").style.backgroundColor = ArrayPush
        // console.log(ArrayPush)
        ArrayPush.pop()

    }

    else if (Add == arr.length) {
        Add = 0
        ArrayPush.push(arr[Add++])
        //console.log(ArrayPush)
        document.querySelector("body").style.backgroundColor = ArrayPush
        ArrayPush.pop()
    }
})
