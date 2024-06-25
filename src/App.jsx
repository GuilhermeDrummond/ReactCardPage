import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar="../src/assets/fotoperfil.png"
        name="Guilherme Drummond"
        bio="Full Stack Student"
        email="g_drummond@hotmail.com"
        phone="+5528998825323"    
        github="https://www.google.com.br/?hl=pt-BR"
        linkedin="https://www.google.com.br/?hl=pt-BR"
        twitter="https://www.google.com.br/?hl=pt-BR"
      />
    </div>
  )

}