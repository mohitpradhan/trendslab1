enum days{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

enum months{
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

enum earthPhysics{
    gravity = 9.8,
    c = Math.pow(3.88,8),
    weight = 1
}

console.log(days[0]);

//html elements
let pTodayDate = document.getElementById("p--today-date");
let buttonBirthday = document.getElementById("button--birthday");
let inputDatePicker = document.getElementById("input--date-picker") as HTMLInputElement;
let pBirthdayMessage = document.getElementById("p--birthday-message");

//today as a date
let today : Date = new Date();
console.log(today.getMonth());

pTodayDate.innerHTML = `Today is ${today.getMonth()} ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;

//part 2

buttonBirthday.onclick = function(){
    //get birthday from input tag

    let userDay : string = inputDatePicker.value;
    let userBdayDate : Date = new Date(userDay);

    //output birthday message
    pBirthdayMessage.innerHTML = makeDateString(userBdayDate);
}

function makeDateString(inputDate:Date)  : string{
    //if today is user's birthday
    if((inputDate.getDate() === today.getDate()) && (inputDate.getMonth() === today.getMonth()))
    {
        return `Happy Birthday!!!`;
    }

    //if today is not the user's birthday

    let thisYearsBirthday = new Date();
    thisYearsBirthday.setDate(inputDate.getDate());
    thisYearsBirthday.setFullYear(today.getFullYear());
    thisYearsBirthday.setMonth(inputDate.getMonth());

    return `Your birthday is ${days[thisYearsBirthday.getDay()]} ${months[inputDate.getMonth()]} ${inputDate.getDate()}, ${today.getFullYear()}`

}