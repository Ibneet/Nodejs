var getUser = (id,call) => {
    var user = {
        name: 'Ibneet',
        id: id
    };
    call(user);
};

getUser(1,(userObject) => {
    console.log(userObject);
});