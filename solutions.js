// твои решения
// твои решения
//Задача 1.1. Сделай запрос на https://reqres.in/api/users. Ответ сервера декодируй в JSON и выведи в консоль.
async function func1(){
    const f = await fetch('https://reqres.in/api/users');
    let data = await f.json();
    console.log(data);
}
func1();
//Задача 1.2. Сделай запрос на https://this-site-doesnt-exists.intocode. Отлови ошибку запроса и выведи её в консоль.
fetch('https://reqres.in/awpi/users').then((response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Something went wrong');
})
.then((responseJson) => {
  
})
.catch((error) => {
  console.log(error)
});
//Задача 1.3. Сделай запрос на https://reqres.in/api/users. Ответ сервера декодируй в JSON и выведи в консоль тип данных полученного ответа (должно получиться object).
let f2 = fetch('https://reqres.in/api/users');
f2.then((response) =>{
    return response.json();
}).then((data) =>{
    console.log(data);
})
//Задача 1.4. Сделай запрос на https://reqres.in/api/users. Ответ сервера декодируй в JSON и выведи в консоль количество элементов в массиве data из полученного ответа.
let f3 = fetch('https://reqres.in/api/users');
f3.then((response) => {
    return response.json();
}).then((data) =>{
    console.log(data.data.length);
})
//Задача 1.5. Сделай запрос на https://reqres.in/api/users/1. Ответ сервера декодируй в JSON и выведи в консоль эмайл юзера.
let url = 'https://reqres.in/api/users/1';
let response = await fetch(url);
let result = await response.json(); // 
console.log(result.data.email);
//Сделай POST-запрос на https://reqres.in/api/users. В теле запроса отправь строку { "first_name": "intocode" }. 
//Не забудь указать тип отправляемого контента application/json. Ответ сервера выведи в консоль.

  let user = {
      first_name: 'intocode'
    };
    let resp = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: user
    });
    let res = await resp.json();
    console.log(res);
  //Задача 2.2. Повтори предыдущую задачу, однако тело запроса составь с помощью JSON.stringify(). Ответ сервера выведи в консоль.
  let user2 = {
    first_name: 'intocode'
  };
  let resp2 = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user2)
  });
  let res2 = await resp2.json();
console.log(res2);

//Задача 2.3. Повтори предыдущую задачу, однако второй параметр функции fetch вынеси в отдельную константу. Ответ сервера выведи в консоль.
let user3 = {
  first_name: 'intocode'
};
let option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user3)
  };
  let resp3 = await fetch('https://reqres.in/api/users', option);
  let res3 = await resp3.json();
console.log(res3);

//Задача 2.4. Отправь запрос на добавление нового юзера с именем into и фамилией code. Выведи в консоль идентификатор добавленного пользователя и время, когда он был добавлен.
let user4 = {
    name: 'into', 
    code: 'code'
  };
  
let option4 = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user4)
  };
  let resp4 = await fetch('https://reqres.in/api/users', option4);
  let res4 = await resp4.json();
  console.log(res4.id+' '+res4.createdAt);

//Задача 2.5. Удали пользователя с идентификатором 5. Проверь код ответа сервера. Если он равен 204, то выведи в консоль "пользователь с id 5 успешно удален".
let user5 = {
    id:5
    };
let option5 = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user5)
  };
  let resp5 = await fetch('https://reqres.in/api/users/', option5);
  
  let res5 = await resp5.status;
if(res5 == 204){
  console.log('пользователь успешно удален')
}

//Задача 2.6. Отправь запрос на изменения имени пользователя с идентификатором 3 на "интукод".

let user6 = {
  first_name: "интукод"
  };
let option6 = {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: null
};
let resp6 = await fetch('https://reqres.in/api/users/3', option6);

let res6 = await resp6.json();
console.log(res6);
