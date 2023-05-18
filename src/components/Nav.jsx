function Nav({ handleScrollToElement }) {
  return (
    <ul className="fixed sm:top-[calc(50%_-_120px)] top-3 sm:left-3 z-50 sm:w-20 w-full sm:h-60 flex sm:flex-col flex-row justify-around items-center">
      <li onClick={() => handleScrollToElement("bio")}>BIO</li>
      <li onClick={() => handleScrollToElement("projects")}>PROJECTS</li>
      <li onClick={() => handleScrollToElement("contact")}>CONTACT</li>
    </ul>
  );
}

export default Nav;
