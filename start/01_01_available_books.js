async getUsers(){
  let results = await fetch('https://randomuser.me/api/?results=5');
  let users = await results.json();
  console.log(users);
}

getUsers();
