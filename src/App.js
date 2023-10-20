import "./styles.css";

export default function App() {
  const toggleMenuIcon = () => {
    const el = document.getElementById("menuIcon");
    const sideBarel = document.getElementById("sidebar");
    if (el) {
      el.classList.toggle("toggle");
      sideBarel.classList.toggle("showSideBar");
    }
  };
  return (
    <div className="App">
      <header>
        <button onClick={toggleMenuIcon}>
          <span className="menuIcon" id="menuIcon"></span>
        </button>
      </header>
      <div className="sidebar" id="sidebar">
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CONTACTS</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
