function wayfinder(options) {
    opts = {
        type: null, //intersect or points
        elements: null, //array of elements
        observerOpts: {
            threshold: 0.5
        },

        points: [
            // {
            //     point: 100,
            //     target: "body",
            //     function: null,
            //     toggleClass: "testing1"
            // }
        ],
        debug: false //show console logs
    };
    const settings = Object.assign(opts, options);

    const debugStyle1 = ["padding:10px", "background:#c73a3a"].join(";");
    const debugStyle2 = ["padding:10px", "background:#6459bd"].join(";");
    const debugStyle3 = ["padding:10px", "background:#2a6f36"].join(";");
    const debugStyle4 = ["background:none"].join(";");

    function callback(els, observer) {
        console.log('callback')
        els.forEach(el => {
            console.log(el)
            if (el.isIntersecting) {
                settings.debug ?
                    console.log(
                        `Element %cID:"${el.target.id}" %cClass(es):"${el.target.classList
                        }" %cName:"${el.target.getAttribute(
                            "name")
                        }" %c is in view`,
                        debugStyle1,
                        debugStyle2,
                        debugStyle3,
                        debugStyle4) :

                    null;
                el.target.classList.add("actuate");
                if (el.target.getAttribute("effectBody")) {
                    document.body.classList.add(
                        el.target.getAttribute("effectBody"));

                }
                return;
            }
            settings.debug ?
                console.log(
                    `Element %cID:"${el.target.id}" %cClass(es):"${el.target.classList
                    }" %cName:"${el.target.getAttribute(
                        "name")
                    }" %c is NOT in view`,
                    debugStyle1,
                    debugStyle2,
                    debugStyle3,
                    debugStyle4) :

                null;
            document.querySelector("body").classList.remove("actuate");
            el.target.classList.remove("actuate");
            if (el.target.getAttribute("effectBody")) {
                document.body.classList.remove(
                    el.target.getAttribute("effectBody"));

            }
        });
    }

    let observer = new IntersectionObserver(callback, settings.observerOpts);
    

    //     const observer = new IntersectionObserver((els) => {

    //     });
    console.warn(settings)
    if (settings.elements) {
        settings.elements.forEach(el => {
            console.log(el)
            observer.observe(el);
        });
    }
    if (settings.points) {
        window.addEventListener("scroll", event => {
            let scroll = Math.round(this.scrollY);
            settings.points.forEach(el => {
                if (scroll >= el.point) {
                    settings.debug ?
                        console.log(`Point Found ${el.point}`) :
                        null;
                    if (el.function) el.function();
                    if (el.target && el.toggleClass) {
                        document.
                            querySelector(el.target).
                            classList.add(el.toggleClass);
                    }
                } else {
                    if (el.target && el.toggleClass) {
                        document.
                            querySelector(el.target).
                            classList.remove(el.toggleClass);
                    }
                }
            });
        });
    }
}