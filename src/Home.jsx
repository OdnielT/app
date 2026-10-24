import styled from "styled-components";

function Home() {
  return (
    <HomeStyle>
     <h1> My top 5 Favourite Websites</h1>

     <ol start={5}>
        <li><a href="https://odniel.com/">Odniel</a></li>
        <li><a href="https://brandgr.com/">Brandgr</a></li>
        <li><a href="https://alyafoods.co.uk/">Alya Foods</a></li>
        <li><a href="https://royalgardensolutions.com/">Royal Garden Solutions</a></li>
        <li><a href="https://hemasautocare.com/">Hemas Auto Care</a></li>
     </ol>

     <img src="/profile.png" alt="profile pic" />
    </HomeStyle>
  );
}

const HomeStyle = styled.div``;

export default Home;
