import styled from "styled-components";

function Home() {
  return (
    <HomeStyle>
        <h1>It's My Birthday</h1>

        <h2>On the 28th Februray</h2>

        <img src="/cake.jpeg" alt="birthaday-cake" height={400}/>

        <h3>What to bring:</h3>

        <ul>
            <li>Baloons (I love baloons)</li>
            <li>Cake (I'm really good at eating)</li>
            <li>An appetite (There will be lots of food)</li>
        </ul>

        <h3>This is where you need to go:</h3>

        <a href="https://maps.app.goo.gl/UcvWc3vc4SkSBxDHA">Google map link</a>
    </HomeStyle>
  );
}

const HomeStyle = styled.div``;

export default Home;
