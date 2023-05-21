function Nav({ handleScrollToElement }) {
  return (
    <ul
      className={`z-50 absolute w-full px-6 py-3 flex flex-col md:flex-row justify-between items-center text-xl font-roboto font-semibold text-center text-stone-200`}
    >
      <div className={`flex flex-col`}>
        <h1 className={`text-2xl`}>Renz Gabrinao</h1>
        <h1 className={`font-normal text-base`}>Software Developer</h1>
      </div>
      <div className={`flex flex-row justify-between w-[290px] h-full`}>
        <li
          className={`hover:cursor-pointer hover:scale-110 transition-all`}
          onClick={() => handleScrollToElement("bio")}
        >
          About Me
        </li>
        <li
          className={`hover:cursor-pointer hover:scale-110 transition-all`}
          onClick={() => handleScrollToElement("projects")}
        >
          Projects
        </li>

        <li
          className={`hover:cursor-pointer hover:scale-110 transition-all`}
          onClick={() => handleScrollToElement("contact")}
        >
          Contact
        </li>
      </div>
    </ul>
  );
}

export default Nav;
