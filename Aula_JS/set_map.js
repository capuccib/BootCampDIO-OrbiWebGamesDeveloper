function getAdmins(Map){
    let admins = [];
    for ([key, value] of Map){
        if (value === 'Admin'){
            admins.push(key)
        }
        
    }
    return admins;
};

const usuarios = new Map();

usuarios.set('Bruno','Admin');
usuarios.set('Manuela','Admin');
usuarios.set('Mariana','User');

console.log(getAdmins(usuarios));