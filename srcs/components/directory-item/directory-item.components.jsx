import { useNavigate } from "react-router-dom";

import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  const navigation = useNavigate();
  const NavigationHandler = () => navigation(route);
  return (
    <div className="directory-item-container" onClick={NavigationHandler}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="directory-item-body-container">
        <h2>{title}</h2>
        <p>Explore Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
