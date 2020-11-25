const { ref } = require("vue")
// fonction composite d'incrementation
export function useIncrement() {
    // reférence : get et set
    const i = ref(0);
    // callback pour execute la fonction une fois incrementer
    const increment = function (callback = null) {
        i.value++
        if (callback != null) {
            callback(i);
        }
    };

    return [i, increment];
}
// fonction composite d'ajout d'un element dans une liste
export function useToDo() {
    const table = ref([])
    const [i, increment] = useIncrement();

    const push = function (value) {
        increment((i) => {
            console.log(i);
            if (value != null) {
                table.value.push({ id: i.value, content: value });
            }

        })
    }

    return [table, push]
}