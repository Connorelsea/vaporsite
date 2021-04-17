import styled from "@emotion/styled";
import Draggable from "react-draggable";

const borderSize = 2;
const borderRadius = 3;

const headerButtonSize = 12;

const HeaderButtonMainBody = styled.div`
  background-color: #aaaaaa;
  border: ${borderSize}px solid #222222;
  width: ${headerButtonSize}px;
  height: ${headerButtonSize}px;
  position: relative;
  right: -2px;
  bottom: -2px;
`;

const HeaderButtonMainBodyInnerBorder = styled.div`
  background: linear-gradient(110deg, #999999, white);
  border-top: ${borderSize}px solid #aaaaaa;
  border-left: ${borderSize}px solid #aaaaaa;
  border-right: ${borderSize}px solid #888888;
  border-bottom: ${borderSize}px solid #888888;
  width: ${headerButtonSize - borderSize * 2}px;
  height: ${headerButtonSize - borderSize * 2}px;
`;

const HeaderButtonAccentSquare = styled("div")((props) => {
  const shared = {
    position: "relative",
  };

  if (props.white)
    return {
      ...shared,
      top: "-4px",
      left: "-4px",
      backgroundColor: "white",
    };

  return {
    ...shared,
    top: "2px",
    left: "-2px",
    backgroundColor: "#888888",
  };
});

const HeaderButtonContainer = styled("div")((props) => {
  const shared = {
    position: "relative",
    "&:hover": {
      transform: "scale(1.1)",
      transition: "100ms ease-in",
    },
  };
  if (props.right) return { ...shared, right: "-4px" };
  return { ...shared, left: "4px" };
});

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
  );
}

const Body = styled.div`
  border: ${borderSize}px solid black;
  width: 700px;
  height: 600px;
  position: absolute;
  left: 20px;
  top: 20px;
  background-color: #cecece;
  display: flex;
  flex-direction: column;
  border-radius: ${borderRadius}px;
`;

const BodyBorderTwo = styled.div`
  border: ${borderSize}px solid white;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-radius: ${borderRadius}px;
  padding: 10px;
  padding-top: 0;
`;

const InnerBody = styled.div`
  background-color: #dedede;
  border: ${borderSize}px solid black;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-radius: ${borderRadius}px;
  height: 100px;
`;

const InnerBodyBorderOuter = styled.div`
  border: ${borderSize}px solid #999999;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-radius: ${borderRadius}px;
`;

const InnerBodyBorderInner = styled.div`
/* RE_ENABLE THIS IF YOU WANT INNER WHITE BORDER */
    border: ${borderSize}px solid white;
    border-right: none;
    border-bottom: none;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    border-radius: ${borderRadius}px;
    overflow: scroll;
    height: 100%;

    
    & > {

        // TODO: feed in height from window size
        .scrolledge-vertical {
            position: absolute;
            height: 530px;
            width: 2px;
            background-color: black;
            right: 38px;
            top: 36px;
            
        }

        .scrolledge-horizontal {
            position: absolute;
            width: 650px;
            height: 2px;
            background-color: black;
            left: 16px;
            bottom: 38px;
        }
    }

    /* width */
&::-webkit-scrollbar {
  width: ${headerButtonSize + 10}px;
  height: ${headerButtonSize + 10}px;
  
}

/* Track */
&::-webkit-scrollbar-track {
  background: #AAAAAA;
  border: 2px solid #888888;
  outline: 2px solid black !important;
}



/* Handle */
&::-webkit-scrollbar-thumb {
    background: #8585BC;
    border: ${borderSize}px solid #B0B0EA;
    outline: ${borderSize}px solid black;

    background-repeat: no-repeat;
    background-position: center;

    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='20' fill='rgb(96, 96, 96)'><rect width='12' height='2' x='8' y='0' style='fill:rgb(176, 176, 234);' /><rect width='12' height='2' x='10' y='2' style='fill:rgb(81, 81, 124);' /><rect width='12' height='2' x='8' y='4' style='fill:rgb(176, 176, 234);' /><rect width='12' height='2' x='10' y='6' style='fill:rgb(81, 81, 124);' /><rect width='12' height='2' x='8' y='8' style='fill:rgb(176, 176, 234);' /><rect width='12' height='2' x='10' y='10' style='fill:rgb(81, 81, 124);' /></svg>");
}

/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
  background: #7575AE;

  background-repeat: no-repeat;
  background-position: center;

  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='20' fill='rgb(96, 96, 96)'><rect width='12' height='2' x='8' y='0' style='fill:rgb(176, 176, 234);' /><rect width='12' height='2' x='10' y='2' style='fill:rgb(81, 81, 124);' /><rect width='12' height='2' x='8' y='4' style='fill:rgb(176, 176, 234);' /><rect width='12' height='2' x='10' y='6' style='fill:rgb(81, 81, 124);' /><rect width='12' height='2' x='8' y='8' style='fill:rgb(176, 176, 234);' /><rect width='12' height='2' x='10' y='10' style='fill:rgb(81, 81, 124);' /></svg>");
} 
`;

const Lines = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const Line = styled.div`
  height: ${borderSize}px;
  background-color: ${(props) => (props.white ? "white" : "#777777")};
  width: ${(props) => (props.white ? "100%" : "98%")};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 6px;

  & > * + * {
    margin-left: 10px;
  }
`;

const HeaderTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
`;

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
  );
}

const ResizeSquare = styled.div`
    position: absolute;
    width: 36px;
    height: 36px;
    background-color: #CCCCCC;
    bottom: 0;
    right: 0;
    border-bottom: ${borderSize}px solid white;
    border-right: ${borderSize}px solid white;
`

const ResizeSquareInnerBorder = styled.div`
    position: absolute;
    width: 22px;
    height: 22px;
    bottom: 16px;
    right: 16px;
    border-left: ${borderSize}px solid black;
    border-top: ${borderSize}px solid black;
`

const ResizeSquareInnerBorder2 = styled.div`
    position: absolute;
    width: 24px;
    height: 24px;
    bottom: 12px;
    right: 12px;
    border-left: ${borderSize}px solid #999999;
    border-top: ${borderSize}px solid #999999;
`

function Window({children}) {
  return (
    <Draggable>
      <Body>
        <BodyBorderTwo>
          <ResizeSquare></ResizeSquare>
          <ResizeSquareInnerBorder></ResizeSquareInnerBorder>
          <ResizeSquareInnerBorder2></ResizeSquareInnerBorder2>
          <Header>
            <HeaderButton></HeaderButton>
            <LineGroup></LineGroup>
            <HeaderTitle>Resume</HeaderTitle>
            <LineGroup></LineGroup>
            <HeaderButton></HeaderButton>
          </Header>
          <InnerBodyBorderOuter>
            <InnerBody>
              <InnerBodyBorderInner>
                  <div className="scrolledge-horizontal"></div>
                  <div className="scrolledge-vertical"></div>
                  {children}
              </InnerBodyBorderInner>
            </InnerBody>
          </InnerBodyBorderOuter>
        </BodyBorderTwo>
      </Body>
    </Draggable>
  );
}

export default Window;
