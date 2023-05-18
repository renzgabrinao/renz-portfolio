function Nav({ handleScrollToElement }) {
  return (
    <ul className="fixed md:top-[calc(50%_-_120px)] top-3 md:left-3 z-50 md:w-20 w-full md:h-60 flex md:flex-col flex-row justify-around items-center font-abril text-xl sm:text-2xl md:text-3xl text-center">
      <li
        className="w-[130px]"
        onClick={() => handleScrollToElement("projects")}
      >
        PROJECTS
      </li>
      <li className="w-[50px]" onClick={() => handleScrollToElement("bio")}>
        BIO
      </li>
      <li
        className="w-[130px]"
        onClick={() => handleScrollToElement("contact")}
      >
        CONTACT
      </li>
    </ul>
  );
}

export default Nav;
