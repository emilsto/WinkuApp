//basic navbar component
const NavBar = ({currentUrl}) => {

  let activeItem = currentUrl === '/' ? 'home' : currentUrl.slice(1);

  const activeItemName = activeItem[0].toUpperCase() + activeItem.slice(1);

  console.log(activeItem);

  return (
    <nav className="sticky top-0 z-20 backdrop-blur-sm bg-rgb(20, 27, 31) drop-shadow-xl p-5">
      <div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <p className="text-xl">{activeItemName}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
