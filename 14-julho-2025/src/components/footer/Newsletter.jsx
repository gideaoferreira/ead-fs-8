function Newsletter() {
  return (
    <>
      <div className="card w-25 text-bg-secondary border-0">
        <div className="card-body">
          <h5 className="mb-4">Receba nossas novidades</h5>
          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Digite seu email"
              />
            </div>
            <button type="submit" className="btn btn-dark w-100">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Newsletter;