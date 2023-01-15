// 5. Сохранение продуктов. Запросить у пользователя название, цену и картинку. Необходимо выводить данные о продуктах на страницу в любом удобном виде(карточки, список, блоки), если цена продукта ниже, чем 100$, то текстовая информация о товаре должна подсвечиваться красным цветом, если цена больше 100$, текст должен подсвечиваться зеленым

let btn = document.querySelector(".btnGo");
let ul = document.querySelector(".ul");
let db = [];
btn.addEventListener("click", () => {
  ul.innerHTML = "";
  let data = prompt("Enter name");
  let dataAge = +prompt();
  let dataImg = prompt();

  let product = {
    name: data,
    age: dataAge,
    dataImg: dataImg,
  };

  db.push(product);

  db.forEach((item) => {
    let li = document.createElement("li");
    ul.append(li);
    li.innerHTML = `${item.name} ${item.age} <img src=${item.dataImg} width = '30px' height= '30px' ></img>`;
    if (item.age > 100) {
      li.style.color = "red";
    } else if (item.age < 100) {
      li.style.color = "green";
    }
  });
});

// 6. Регистрация пользователей, создать форму в которой будем запрашивать информацию о пользователе(имя, пароль, возраст, имя может быть не уникальным, но у каждого должен быть айди, также при сохранении объекта пользователя добавляется ключ mailing со значением false - это рассылка новостей), также реализовать вывод пользователей на страницу(вывод может быть в любом удобном виде), напротив каждого пользователя должен быть инпут с типом чекбокс, как раз он и будет отвечать за рассылку, изменяется инпут - изменяется значение ключа mailing, также должна быть сама функция рассылки(на странице должна быть кнопка по нажатию на которую и будет запускаться функция), которая будет отправлять сообщение только тем пользователям, которые подписаны на рассылку(вывод может быть любым, алерт, консоль, страница)

// let name = document.querySelector(".name");
// let form = document.querySelector("form");
// let pass = document.querySelector(".pass");
// let age = document.querySelector(".age");
// let btn = document.querySelector(".btn");
// let list = document.querySelector("ul");
// let db = [];
// btn.addEventListener("click", (e) => {
//   e.preventDefault();

//   let newObj = {
//     id: Date.now(),
//     name: name.value,
//     pass: pass.value,
//     age: age.value,
//     mailing: false,
//   };

//   db.push(newObj);
//   name.value = "";
//   pass.value = "";
//   age.value = "";
//   render();
// });

// let btnSend = document.createElement("button");
// btnSend.innerText = "Send";
// document.body.append(btnSend);
// btnSend.addEventListener("click", () => {
//   let items = document.querySelectorAll(".items");
//   items.forEach((item) => {
//     if (item.childNodes[1].checked) {
//       console.log(item);
//     }
//   });
// });

// function render(e) {
//   list.innerHTML = "";
//   db.forEach((item) => {
//     list.innerHTML += `<li class='items' >Name: ${item.name} Mailing: <input checked=false type='checkbox' ></li> `;
//   });
// }
