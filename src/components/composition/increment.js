const { ref } = require("vue")
// fonction composite d'incrementation
export function useIncrement() {
    // reférence : get et set
    const i = ref(0);
    // callback pour execute la fonction une fois incrementer
    const increment = function (callback = null) {
        i.value++
        if (typeof callback === "function") {
            callback(i);
        }
    };

    return [i, increment];
}
// fonction composite d'ajout d'un element dans une liste
export function useToDo() {
    const table = ref([])
    const [i, increment] = useIncrement();

    const push = function (value, callback = null) {
        increment((i) => {
            console.log(i);
            if (value != null) {
                if (i.value <= 10) {
                    var obj = { id: i.value, content: value };
                    table.value.push(obj);
                    if (typeof callback === "function") {
                        callback(obj);
                    }
                }else{
                    if (typeof callback === "function") {
                        callback('error');
                    }
                }

            }

        })
    }

    return [table, push]
}