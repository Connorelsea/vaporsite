import styled from "@emotion/styled";
import Window from "./Window";



function ResumeWindow() {
    return (
        <Window>
            <Container>
                <HeaderContainer>
                    <Header1>Connor Elsea</Header1>
                    <Header2>Software developer </Header2>
                    <SubtleHeading>6+ years experience</SubtleHeading>
                </HeaderContainer>

                <Header3>ABOUT ME</Header3>
                <p>I am a software developer interesting in creating new things and helping people browse the web more easily. I am skilled in JavaScript, React, Node, SQL, GraphQL, and Java. I have created numerous web apps from scratch, both by myself and with the help of a team, facilitating their journey from idea, to infrastructure, to testing, to deployment.</p>

                <Header3>WORK EXPERIENCE</Header3>
                <Header4>Localmed & Dental Intelligence, 2018-2021</Header4>
                <List>
                    <ListItem>Development of multiple dental management products using JavaScript, React, Angular, GraphQL</ListItem>
                    <ListItem>Implemented features to safetly facilitate COVID-era patient care and practice management</ListItem>
                    <ListItem>Helped practices grow by increasing return and collection rates, analyzing production over time</ListItem>
                    <ListItem>Migrate legacy PHP and Angular to React, Node, GraphQL . Work with design, product management, and QA to own and deliver new features, create complex components as part of a multi-app design system</ListItem>
                </List>
                <Header4>NewAperio, 2016-2018</Header4>
                <List>
                    <ListItem>Build client web apps from scratch, architect project infrastructure for products of varying requirements</ListItem>
                    <ListItem>Create design systems, setup continuous integration, testing, and deployment, create APIs using Node, GraphQL, and AWS. Test components and servers using Storybook, Jest, Enzyme, measure performance.</ListItem>
                    <ListItem>Create cross-platform apps, handle syncing and user management, using React Native, Electron, and Swift</ListItem>
                    <ListItem>Optimize varied client sites for load speed and small package size using Webpack and caching techniques</ListItem>
                </List>

                <Header4>Internships and Freelance, 2014-2017</Header4>
                <List>
                    <ListItem>
                    Freelance work for local businesses, full-stack development with React, Node, Express, PostgreSQL
                    </ListItem>
                    <ListItem>
                    I worked at four different internships during high school and university. At ShoppersChoice, I worked on a high-traffic e-Commerce site using PHP, MySQL, and JavaScript. At Teknarus I worked on multiple projects as part of a consulting team using C#, Ruby, PHP, and ASP.net. I also worked at Pixel Dash and Reputation Capital Media doing frontend development and graphic design.
                    </ListItem>
                </List>

                <Header3>EDUCATION</Header3>
                <Header4>LSU, 2016-2018</Header4>
                <List>
                    <ListItem>
                    Courses in data structures, calculus, database management, security. Worked as CS tutor
                    </ListItem>
                    <ListItem>
                    Gave speech at software conference on advaced web scraping, designing and implementing relational databases based on scraped data, displaying relational data on frontend with GraphQL
                    </ListItem>
                </List>
                <Header4>LSU, 2013-2016, Highschool Diploma</Header4>
                <List>
                    <ListItem>
                    STEM research residential school, high-level courses held on a college campus, took opportunities to complete academic research in CS, study data structures, networking, and low-level languages like C and BASIC for robotics. Participated and won competitions in programming and robotics.
                    </ListItem>
                    <ListItem>
                    Worked as TA for CS department, developed and mainted educational software for the school
                    </ListItem>
                </List>

                <Header3>VOLUNTEER</Header3>
                <List>
                    <ListItem>Youth Code Instructor at Futures Fund, Food Prep at It Takes a Village</ListItem>
                </List>
            </Container>
        </Window>
    )
}

export default ResumeWindow;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex-grow: 1;
    padding: 20px;
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 0 0 auto;
`

const Header1 = styled.div`
    font-size: 60px;
    margin-top: 0;
`

const Header2 = styled.div`
    font-size: 30px;
    margin-top: 0;
    text-style: italic;

`

const SubtleHeading = styled.div`
    font-size: 16px;
    margin-top: 10px;
    color: #777777;
    text-transform: uppercase;
    letter-spacing: 7px;
`

const Header3 = styled.div`
    font-size: 20px;
    color: #63639C;
    text-transform: uppercase;
    letter-spacing: 7px;
    margin-top: 15px;
`

const Header4 = styled.div`
    font-size: 20px;
    margin-top: 10px;
`

const List = styled.ul`
    margin-top: 5px;
    margin-bottom: 5px;
    text-align: left;
`

const ListItem = styled.li`
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 0;
    color: #777777;
`
