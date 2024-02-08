var usuarios = [];

function crearUsuario(){
    var usuario = {
        id: document.getElementById('id').value,
        tipoId : document.getElementById('tipoIdentificacion').value,
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        edad: document.getElementById('edad').value,
        correo:  document.getElementById('correo') .value
    };
    console.log( usuario);
    usuarios.push(usuario)
    localStorage.setItem('usuarios',JSON.stringify(usuarios));
    document.getElementById('formularioUsuario').reset();
}

function cargarUsuarios(){
    const usuarios_storage = JSON.parse(localStorage.getItem( 'usuarios'));
    if(usuarios_storage !== null){
        usuarios = usuarios_storage;
    }
}
cargarUsuarios();