// السؤال الأول
// 1
const name="اريام"
// 2
let age=15;
// 3 and 4
console.log( "انا" + name + " " + "عمري" + age);
// 5 and 6
let five_times_age = 5*age;
console.log(five_times_age)

age *=5
console.log(age);
// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// السؤال الثاني
// 1
let hobbies = ["البرمجه" + "السباحه" + "القراءه"]


//
hobbies.push(16)
hobbies[4] = 16
console.log(hobbies.lenght)
// 3
hobbies.pop()
console.log(hobbies)
// 4
let student = {
    track: "مسار الويب",
    language:"JavaScript",
}
// 5
student["TAs"] = ["نانسي" , "موضي" , "حسين" , "رهف"]
console.log(student)
console.log(student["track"])
// 6


console.log(student["TAs"] [0])


// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// البونص
// 1
student["sayHello"] = function() {console.log("اريام")}
// 2

// console results => console.png
