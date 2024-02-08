function cargarUsuarios(){
    const usuarios_storage = JSON.parse(localStorage.getItem('usuarios'));
    if(usuarios_storage !== null){
        usuarios = usuarios_storage;
    }
}
cargarUsuarios();

function buscarUsuario() {
    var id = document.getElementById('id').value;
    var tipoIdentificacion = document.getElementById('tipoIdentificacion').value;
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    var usuarioEncontrado = null;
    
    for (var i = 0; i < usuarios.length; i++) {
        var usuario = usuarios[i];
        
        if (usuario.id === id && usuario.tipoId === tipoIdentificacion) {
            usuarioEncontrado = usuario;
            break;
        }
    }
    
    if (usuarioEncontrado) {
        window.location.href = 'mostrar_us.html?id=' + encodeURIComponent(usuarioEncontrado.id) + '&tipoId=' + encodeURIComponent(usuarioEncontrado.tipoId)+
        '&nombre=' + encodeURIComponent(usuarioEncontrado.nombre)+'&apellidos=' + encodeURIComponent(usuarioEncontrado.apellidos)+'&edad=' + encodeURIComponent(usuarioEncontrado.edad)+
        '&correo=' + encodeURIComponent(usuarioEncontrado.correo);
        console.log("Usuario encontrado:", usuarioEncontrado);
    } else {
        console.log("Usuario no encontrado");
    }
}
