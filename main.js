let text;

    function check(event) {
        text = event.key
        console.log(`The '${text}' key is pressed.`);
    }
    document.addEventListener("keydown", function (event) {


    if (event.key === "A" || event.key === "a" || event.key === "S" || event.key === "s" || event.key ==="D" || event.key === "d" || event.key === "F" || event.key === "f" || event.key === "G" || event.key === "g" || event.key === "H" || event.key === "h" || event.key === "J" || event.key === "j") {
        check(event);
    } else {
        console.log("warning");

    }
    if (event.key === "A" || event.key === "a") {
        let a = new Audio(  "white_keys/A.mp3").play();
        a.currentTime = 0;
    }
    if (event.key === "S" || event.key === "s") {
        let s = new Audio("white_Keys/S.mp3").play();
        s.currentTime = 0;
    }
    if (event.key === "D" || event.key === "d") {
        let d = new  Audio("white_Keys/D.mp3").play();
        d.currentTime = 0;
    }
    if (event.key === "F" || event.key === "f") {
        let f = new  Audio("white_Keys/D.mp3").play();
        f.currentTime = 0;
    }
    if (event.key === "G" || event.key === "g") {
        let g = new  Audio("white_Keys/D.mp3").play();
        g.currentTime = 0;
    }
    if (event.key === "H" || event.key === "h") {
        let h = new  Audio("white_Keys/D.mp3").play();
        h.currentTime = 0;
    }
    if (event.key === "J" || event.key === "j") {
        let j = new  Audio("white_Keys/D.mp3").play();
        j.currentTime = 0;
    }
    if (event.key === "W" || event.key === "w") {
        let w = new Audio("black_keys/W.mp3").play();
        w.currentTime = 0;
    }
    if (event.key === "E" || event.key === "e") {
        let e = new Audio("black_keys/E.mp3").play();
        e.currentTime = 0;
    }
    if (event.key === "T" || event.key === "t") {
        let t = new Audio("black_keys/E.mp3").play();
        t.currentTime = 0;
    }
    if (event.key === "U" || event.key === "u") {
        let u = new Audio("black_keys/U.mp3").play();
        u.currentTime = 0;
    }
    if (event.key === "Y" || event.key === "y") {
        let y =new  Audio("black_keys/Y.mp3").play();
        y.currentTime = 0;
    }

    });




