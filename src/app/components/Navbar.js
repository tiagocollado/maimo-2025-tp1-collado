import Image from "next/image";

const Navbar = () => {
  return (
    <div className="nav_container">
      <div className="logo_container">
        <Image src="/assets/imgs/logo.png" alt="Logo" width={100} height={50} />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Categorias</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
