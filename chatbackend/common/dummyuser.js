const chat_users = [];

function join_User(id, username, room) {
  const user = { id, username, room };

  chat_users.push(user);
  console.log(chat_users, "users");

  return user;
}

console.log(`######## User out: ${chat_users} #########`);

function get_Current_User(id) {
  return chat_users.find((user) => user.id === id);
}

function user_Disconnect(id) {
  const index = chat_users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return chat_users.splice(index, 1)[0];
  }
}

module.exports = {
  join_User,
  get_Current_User,
  user_Disconnect,
};