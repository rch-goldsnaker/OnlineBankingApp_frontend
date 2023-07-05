
function Formulario({ csrfToken }) {
    return (
        <form action="http://localhost:4000/api/proceso" method="POST">
            <input type="hidden" name="_csrf" value={csrfToken} />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Formulario;