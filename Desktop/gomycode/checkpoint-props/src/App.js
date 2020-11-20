import Profile from "./Profile/Profile";
import './App.css';
import Avatar from './avatar.jpg'
import PropTypes from 'prop-types'

function App() {
  const data ={
    fullname:"Ahmed ben abdallah",
    bio:"uand il a fallu faire le choix des études supérieures, je me suis naturellement dirigé vers un DUT Réseaux informatique et Télécommunications à Annecy ; pour compléter mon expérience \"terrain\", je souhaitais acquérir de larges connaissances théoriques.\n" +
        "\n" +
        "Et, pour donner plus de sens encore à mon passage à l'IUT d'Annecy (puisque, ne nous le cachons pas... j'aime les challenges !), une idée m'est venue : remettre sur pied le gala annuel de l'école, tombé aux oubliettes depuis 19 ans !",
    profession:"Devoloppeur php/symfony"

  };

  return (
    <div className="App">
      <Profile data={data} age='29'>
        <img className="image" src={Avatar} alt="it s me " />
      </Profile>
    </div>
  );
}


export default App;
