import "./App.css";
import AllEmojis from "./components/AllEmojis";
import Footer from "./components/footer";
import Search from "./components/Search";
import EmojisProvider from "./providers/EmojisProvider";

function App() {
  return (
    <>
      <EmojisProvider>
        <section className="landing">
          <Search />
        </section>
        <section className="all-emojis">
          <AllEmojis />
        </section>
      </EmojisProvider>

      <Footer />
    </>
  );
}

export default App;
