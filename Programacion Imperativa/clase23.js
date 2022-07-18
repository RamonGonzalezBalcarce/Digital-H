let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// Utilizar el algoritmo de búsqueda binaria para responder los siguientes ítems:
// ¿Cuál es la posición del número 1 binarySearch(list, 1);
const binarySearch = (list, number) => {
    let low = 0;
    let high = list.length - 1;
    let mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (list[mid] === number) {
            return mid;
        } else if (list[mid] < number) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearch(list, 1));
// ¿Cuál es la posición del número 5?
console.log(binarySearch(list, 5));
// ¿Cuál es la posición del número 6?
console.log(binarySearch(list, 6));
// ¿Cuál es la posición del número 9?
console.log(binarySearch(list, 9));
// ¿Cuál es la posición del número 11?
console.log(binarySearch(list, 11));


let list2 = [12,3,5,7,1,22,47,10];

// ordenar list de menor a mayor bubbleSort(list);
const bubbleSort = (list) => {
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (list[j] > list[j + 1]) {
                let temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }
    return list;
}

// binarySearch con list 2
const binarySearch2 = (list, number) => {
    let low = 0;
    let high = list.length - 1;
    let mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (list[mid] === number) {
            return mid;
        } else if (list[mid] < number) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

// ¿Cuál es la posición del número 12?
console.log(binarySearch(list2, 12));
// ¿Cuál es la posición del número 5?
console.log(binarySearch(list2, 5));
// ¿Cuál es la posición del número 22?
console.log(binarySearch(list2, 22));

// ¿Cuál es la posición del número 100?
console.log(binarySearch(list, 100));

