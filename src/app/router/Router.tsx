import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { PropsWithChildren } from "react";
import { Home, Albums, AlbumCard, About } from "../../pages";

export default function AppRouter({ children }: PropsWithChildren) {
  return (
    <Router>
      {children}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/albums/:id" element={<AlbumCard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
