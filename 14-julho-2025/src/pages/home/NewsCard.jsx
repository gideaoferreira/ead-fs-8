function NewsCard(props) {
  return (
    <>
      <div class="card w-25" key={props.index}>
        <img src={props.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.text}</p>
          <div className="mb-2 d-flex justify-content-between">
            <small>{props.autor}</small>
            <small>{props.createdAt}</small>
          </div>
          <a href="#" class="btn btn-primary">
            Ver mais
          </a>
        </div>
      </div>
    </>
  );
}
export default NewsCard;
