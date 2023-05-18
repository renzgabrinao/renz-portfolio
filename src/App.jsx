import Nav from "./components/Nav";

function App() {
  const handleScrollToElement = (elementId) => {
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main>
      <Nav handleScrollToElement={handleScrollToElement} />
      <section id="bio" className="bg-stone-300">
        <h1>BIO</h1>
      </section>
      <section id="projects" className="bg-stone-400">
        <h1>PROJECTS</h1>
      </section>
      <section id="contact" className="bg-stone-500">
        <h1>CONTACT</h1>
      </section>
    </main>
  );
}

export default App;
