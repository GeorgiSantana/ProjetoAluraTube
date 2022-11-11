import config from "../config.json";
function HomePage() {
  const estilosDaHomePage = {backgroundColor: "red"};

    return (
      <div style={estilosDaHomePage}>
          <Menu/>
          <Header/>
          <Timeline/>
      </div>
    );
  }
  
  export default HomePage

  function Menu() {
  return (
    <div>
      Menu
    </div>
  )
}

  function Header() {
  return (
    <div>
      <img src="banner"/>
      <img src={`https://github.com/${config.github}.png init`}/>
      {config.neme}
      {config.job}
      
      Header
    </div>
  )
}

  function Timeline() {
  return (
    <div>
      Timeline
    </div>
 