const Spiral = (array) => {
    let list = []
    let spiral = []
    let k = 0
    for (let i = 0; i < array.length; i++) {
        list = array[i]
        // console.log(list)
        for (j = 0; j < list.length; j++) {
            spiral[k] = list[j]
            k++
        }
    }
    return [...spiral]
}
const martix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]
console.log(
    Spiral(martix)
)

// ⃣ "Array of Objects + String – Filter & Sort"

const filterdata = (std,key)=>{

    const data = std.filter((name)=> name.name.toLowerCase().includes(key))
    return data
}

const students = [
{ name: "Swaraj", score: 85 },
{ name: "Rohit", score: 90 },
{ name: "Samiksha", score: 88 },
{ name: "Samar", score: 92 },
{ name: "Anchal", score: 80 }
];
const keyword = "sa";

console.log(
    filterdata(students,keyword)
)

// Longest Word

const longestWord = (str) => {
    const list = str.split('')
    let string = []
    let value = ""
    for (let i = 0; i < list.length + 1; i++) {
        if (list[i] == " ") {
            for (j = 0; j < i; j++) {
                value += list[j]
                if (value[j] != "")
                    console.log(value[j])
                // console.log(string)
            }
        }
    }
}

const str = "JavaScript is an amazing programming language!";
console.log(
    longestWord(str)
)