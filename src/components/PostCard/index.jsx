export const PostCard = ({ title, cover, body, id }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <p>{id}</p>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  </div>
);
