import React from 'react';

export default function SponsorBar() {
    return (
        <>
        <h1 style={{ position: "relative", top: "200px", display:"flex", flexDirection: "row", justifyContent: "space-around", marginRight: "20%", marginLeft: "20%"}}>Stayfit Sponsors:</h1>
        <footer style={{ position: "relative", top: "200px", display:"flex", flexDirection: "row", justifyContent: "space-around", marginRight: "20%", marginLeft: "20%"}}>
        <img alt ="Nike" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png" style={{width:"27%", maxHeight:"100px"}}/>
        <img alt="Adidas" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png" style={{width:"20%", maxHeight:"100px"}}/>
        <img alt="Reebok" href="https://www.reebok.com" src="https://preview.thenewsmarket.com/Previews/RBOK/StillAssets/1920x1080/551064.png" style={{width:"27%", maxHeight:"300px", position: "relative", bottom: "10px",}}/>
        </footer>
        </>
    );
  }