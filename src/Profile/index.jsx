import "./style.css";

export default function Profile({ name, birth, img, description }) {
  return (
    <div className="profile">
      <img className="profile-img" src={img} alt={name} />
      <div>
        <h2>{name}</h2>
        <p className="profile-birth">{birth}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
