
function make (a) {

    let store=[];

    store = store.concat(Array.from(arguments));

   let mmake= function(a) {

        if (typeof a === "function") {
            return store.reduce(a,0)
        } else
        {

            store=store.concat(Array.from(arguments));

            return mmake;
        }
    };

    return mmake;
}
