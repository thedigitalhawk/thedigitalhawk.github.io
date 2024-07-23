wayfinder({
    type: "intersect",
    elements: document.querySelectorAll("[wayfinder]"),
    observerOpts: {
        threshold: 0.1
    },
    debug: true,
    points: [
        {
            point: 50,
            target: "header",
            function: null,
            toggleClass: "shrink"
        },

        // {
        //     point: 500,
        //     target: "body",
        //     function: function () {
        //         console.log("WooHoo you reached 500!!!");
        //     },
        //     toggleClass: "testing2"
        // }
    ]
});

window.onload = function(){
    console.log('hi2')
}
console.log('h1')


