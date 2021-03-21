import './AsideMenu.scss';

function AsideMenu() {
  return (
    <div className="AsideMenu">
      <div className="AsideMenu__List">
        <li className="AsideMenu__Item">Home</li>
        <li className="AsideMenu__Item">Products</li>
        <li className="AsideMenu__Item">Contacts</li>
        <li className="AsideMenu__Item">Cabinet</li>
      </div>
    </div>
  );
}

export default AsideMenu;