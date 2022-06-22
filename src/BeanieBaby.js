import { Link } from 'react-router-dom';

export default function BeanieBaby({ title, image, id }) {
  return (
    <Link to={`/beanieBaby/${id}`}>
      <div className="beanie-baby">
        <h3>{title}</h3>
        <img src={image} />
      </div>
    </Link>
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
  );
}
