

let header = document.querySelector("#intro");

console.log(header);
let anim = [
    { t: "_", ms: 550 },
    { t: "D_", ms: 500 },
    { t: "Du_", ms: 450 },
    { t: "Duc_", ms: 400 },
    { t: "Duck_", ms: 350 },
    { t: "DuckV_", ms: 300 },
    { t: "DuckVo_", ms: 250 },
    { t: "DuckVoi_", ms: 200 },
    { t: "DuckVoid_", ms: 150 },
    { t: "DuckVoid._", ms: 100 },
    { t: "DuckVoid.x_", ms: 100 },
    { t: "DuckVoid.xy_", ms: 100 },
    { t: "DuckVoid.xyz", ms: 100 },
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;

let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            //document.getElementById('main').style.opacity = 1;
            //initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();