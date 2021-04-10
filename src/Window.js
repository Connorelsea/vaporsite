import styled from "@emotion/styled";
import Draggable from "react-draggable";

const borderSize = 2;
const borderRadius = 3;

const headerButtonSize = 12;

const HeaderButtonMainBody = styled.div`
    background-color: #AAAAAA;
    border: ${borderSize}px solid #222222;
    width: ${headerButtonSize}px;
    height: ${headerButtonSize}px;
    position: relative;
    right: -2px;
    bottom: -2px;
`

const HeaderButtonMainBodyInnerBorder = styled.div`
    background: linear-gradient(110deg, #999999, white);
    border-top: ${borderSize}px solid #AAAAAA;
    border-left: ${borderSize}px solid #AAAAAA;
    border-right: ${borderSize}px solid #888888;
    border-bottom: ${borderSize}px solid #888888;
    width: ${headerButtonSize - (borderSize * 2)}px;
    height: ${headerButtonSize - (borderSize * 2)}px;
`


const HeaderButtonAccentSquare = styled('div')(props => {
    const shared = {
        position: "relative"
    }

    if (props.white) return {
        ...shared,
        top: "-4px",
        left: "-4px",
        backgroundColor: "white"
    }

    return {
        ...shared,
        top: "2px",
        left: "-2px",
        backgroundColor: "#888888",
    }
});



const HeaderButtonContainer = styled('div')(props => {
    const shared = { position: "relative" };
    if (props.right) return { ...shared, right: "-4px" }
    return { ...shared, left: "4px" }
})

function HeaderButton(right) {
    return (
       <HeaderButtonContainer right={right}>
            <HeaderButtonAccentSquare>
            <HeaderButtonAccentSquare white>
                <HeaderButtonMainBody>
                    
                <HeaderButtonMainBodyInnerBorder></HeaderButtonMainBodyInnerBorder>
                </HeaderButtonMainBody>
            </HeaderButtonAccentSquare>
        </HeaderButtonAccentSquare>
       </HeaderButtonContainer>
    )
}



const Body = styled.div`
    border: ${borderSize}px solid black;
    width: 500px;
    height: 500px;
    position: absolute;
    left: 20px;
    top: 20px;
    background-color: #CECECE;
    display: flex;
    flex-direction: column;
    border-radius: ${borderRadius}px;
`

const BodyBorderTwo = styled.div`
    border: ${borderSize}px solid white;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    border-radius: ${borderRadius}px;
    padding: 10px;
    padding-top: 0;

`

const InnerBody = styled.div`
    background-color: #DEDEDE;
    border: ${borderSize}px solid black;
    display: flex:
    flex-direction: column;
    flex-grow: 1;
    border-radius: ${borderRadius}px;
`

const InnerBodyBorderOuter = styled.div`
    border: ${borderSize}px solid #999999;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    border-radius: ${borderRadius}px;
`

const InnerBodyBorderInner = styled.div`
    border: ${borderSize}px solid white;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    border-radius: ${borderRadius}px;
`

const Lines = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-grow: 1;
`

const Line = styled.div`
    height: ${borderSize}px;
    background-color: ${props => props.white ? 'white' : '#777777'};
    width: ${props => props.white ? "100%" : "99%"};
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 4px;
    padding-bottom:  6px;

    & > * + * {
        margin-left: 10px;
      }
`

const HeaderTitle = styled.h1`
    margin-top: 0;
    margin-bottom: 0;
`

function LineGroup() {
    return (
        <Lines>
        <Line white></Line>
        <Line></Line>
        <Line white></Line>
        <Line></Line>
        <Line white></Line>
        <Line></Line>
        <Line white></Line>
        <Line></Line>
        <Line white></Line>
        <Line></Line>

    </Lines>
    )
}

function Window(children) {
    return (
        <Draggable>
            <Body>
                <BodyBorderTwo>
                <Header>
                    <HeaderButton></HeaderButton>
                    <LineGroup></LineGroup>
                    <HeaderTitle>Header</HeaderTitle>
                    <LineGroup></LineGroup>
                    <HeaderButton></HeaderButton>
                </Header>
                <InnerBodyBorderOuter>
                        <InnerBody>
                            <InnerBodyBorderInner>
                                content
                            </InnerBodyBorderInner>
                        </InnerBody>
                </InnerBodyBorderOuter>

                </BodyBorderTwo>
            </Body>
        </Draggable>
    )
}

export default Window;