import styled from "styled-components";
// import Map from "./Map";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MapUi from "./MapUI";
import { useState } from "react";
// import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

// Styled components
const Container = styled.div`
    text-align: center;
    padding: 30px;
    background: linear-gradient(135deg, #121212 30%, #1f1f1f 100%);
    color: white;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
    height:100vh;
    display:flex;
    align-items:center;
    flex-direction:column;
`;

const Title = styled.h1`
    font-size: 3em;
    margin-bottom: 20px;
    color: #bb86fc;
    letter-spacing: 1px;
`;

const Subtitle = styled.p`
    font-size: 1.2em;
    margin-bottom: 30px;
    color: grey;
`;

const StyledButton = styled.button`
    padding: 12px 24px;
    font-size: 1em;
    color: white;
    background-color: #6200ea;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0px 4px 8px rgba(98, 0, 234, 0.4);
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: #3700b3;
        transform: translateY(-3px);
    }

    &:active {
        transform: translateY(1px);
    }
`;

const ImageContainer = styled.div`
    margin: 25px;
    padding:50px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
    background-color:white;
    width:70vw;
`;

const StyledImage = styled.img`
    height: 40vh;
    width: 60vw;
    object-fit: cover;
    border-radius: 8px;
`;

function App() {
    const [showMapUi, setShowMapUi] = useState(false);

    return (
        <ThemeProvider theme={darkTheme}>
            {/* <CssBaseline /> */}
            <Container>
                <Title>Routing Algorithms on Map</Title>
                <Subtitle>Made by Rajat (22BCM048) & Rushi (22BCM053)</Subtitle>
                <ImageContainer>
                    <StyledImage src='src/assets/image.png' alt="Map Preview" />
                </ImageContainer>
                <StyledButton onClick={() => setShowMapUi(true)}>Go to Map UI</StyledButton>
                
                {showMapUi && <MapUi />}
            </Container>
        </ThemeProvider>
    );
}

export default App;
