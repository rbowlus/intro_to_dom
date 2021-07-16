fetch('./static/data.json')
    .then(res => res.json())
    .then(data => console.log(data))

// ^ same >

// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         // console.log(xhr.responseText)
//         console.log(JSON.parse(this.responseText))
//     }
// }

// xhr.open('GET', './static/data.json')
// xhr.send()