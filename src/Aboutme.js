import { Container, Header, Sidebar, Sidenav, Content, Navbar, Nav, Divider, Placeholder, PanelGroup } from 'rsuite';

import { Panel, Stack, ButtonGroup, Button } from 'rsuite';
import { CopyBlock, CodeBlock, dracula } from "react-code-blocks";
import IconRow from './ContactIcons';
import './mycontents.css'

// eslint-disable-next-line no-undef
const code =
    `details = {
    "firstname": "yuntian",
    "lastname:": "gu",
    "birth_year": "1998",
    "姓名"："谷云天",
    "languages": ['Java', 'Python', 'JavaScript', 'TypeScript', 'R', 'SAS', 'SQL', 'GraphQL', 'HTML', 'CSS'],
    "frameworks": ['Angular', 'React', 'Vue', 'Redux', 'Django', 'Apache NetBeans', 'Snowflake'],
    "good_at": ["googling"],
    "best_friends": ['jon', 'stackoverflow', 'sheila'], #in no particular order
    "favourite_team": "Chelsea_FC",
    "favourite_golf_club": "7_iron",
    "fav_show": "better_call_saul",
    "fav_music_genre": "hip-hop",
    "fav_artist": "eminem",
    "fav_breakfast": ["kopi-o kosong ice", "kaya_toast"],
    "dislikes": ["hackerrank", "soft_boiled_eggs", "not_getting_hired"],
}`


function YunTianContent() {
    return (
        <Container>
            <Header >
                <code className={"headerCode"} style={{ textAlign: "center" }}>hello there, yuntian here</code>
                <span className={"cursorBlinkHeader"}>|</span>
                <IconRow/>
                <Divider/>
                <div
                    style={{
                        fontFamily: 'monospace',
                    }}
                >
                    <CopyBlock
                        language={`py`}
                        text={code}
                        showLineNumbers={true}
                        theme={dracula}
                        wrapLines={true}
                        codeBlock
                    />
                </div>

            </Header>
            <Divider><code style={{ textAlign: "center", fontSize: "2em" }}>about me</code>
                <span className={"cursorBlink"} style={{ fontSize: "2em" }}>|</span></Divider>

            <Content>i am studying information systems in nus school of computing, graduating in may 2023. i like finance. i like to code. i am currently watching house of the dragon.</Content>

            <Divider><code style={{ textAlign: "center", fontSize: "2em" }}>work experience</code>
                <span className={"cursorBlink"} style={{ fontSize: "2em", animation: "blink 0.79s steps(100, start) infinite" }}>|</span></Divider>

            <PanelGroup bordered>
                <Panel
                    defaultExpanded
                    bordered
                    header={
                        <div>
                            <span>GIC, Investment Insights Group, Quantitative Strategist Intern </span>
                            <span>[Jan 2022 - July 2022]</span>
                        </div>
                    }
                >
                    <li>
                        Full stack development of unified workflow engine for all fixed income rebalancing and portfolio execution activities. Integrated
                        engine with MS Teams webhook for scheduled notifications on order status. Built with Python Django and React. Estimated cost
                        savings of $3 million/year from reduced trading costs.
                    </li>
                    <li>
                        Designed database and backend from scratch for traders to begin trading new financial product. Built using Java Spring and MSSQL.
                    </li>
                    <li>
                        Increased rebalancing functionalities of key-rate duration dashboard by 80% to visualize bond risk exposure. Framework: React, Java Spring, Python Django
                    </li>
                    <li>
                        Created with Python and Airflow, a data ingestion workflow using BlackRock API to notify company-wide portfolio managers of expiring positions in each Fixed Income portfolio.
                    </li>

                </Panel>
                <Panel
                    bordered
                    header={
                        <div>
                            <span>Noyce Labs (Hedge Fund), Quantitative Strategist Intern</span>
                            &nbsp;
                            <span>[Mar 2021 - Dec 2021]</span>
                        </div>
                    }
                    defaultExpanded
                >
                    <li>
                        Developed high-frequency financial data collection pipelines with Airflow for quantitative research in Python and maintained in-
                        house database of 4TB+.
                    </li>
                    <li>
                        Integrated multiple APIs to standardize data, automatically identifying and patching missing data and errors. Analyzed data in R to
                        accentuate market trends and insights for clients.
                    </li>
                    <li>
                        Built automation systems with Python and Refinitiv World Check API for Know Your Clients (KYC)/ Anti-Money Laundering
                        (AML) due diligence processes, reducing compliance check time by 80%.
                    </li>
                </Panel>
                <Panel
                    bordered
                    header={
                        <div>
                            <span>GAO Capital (Hedge Fund), Operations Intern</span>
                            <span>[Jan 2021 - Mar 2021]</span>
                        </div>
                    }
                    defaultExpanded
                >
                    <li>
                        Built systems in Python and JavaScript to process 10,000+ daily trade statements from multiple brokers into the central database
                        which reduced trade reconciliation workload by 90%.
                    </li>
                    <li>
                        Implemented from scratch Optical Character Recognition Software using Google’s and Azure’s OCR for financial data scraping.
                    </li>

                </Panel>
            </PanelGroup>
            <Divider><code style={{ textAlign: "center", fontSize: "2em" }}>projects, not limited to:</code>
                <span className={"cursorBlink"} style={{ fontSize: "2em", animation: "blink 0.68s steps(100, start) infinite" }}>|</span></Divider>

            <PanelGroup bordered>
                <Panel
                    defaultExpanded
                    bordered
                    header={
                        <div>
                            <span>Data Pipeline for Financial Portfolio Construction and Rebalancing </span>
                            <a href="https://github.com/yuntianNUS/PortfolioRebalETL"><u>link</u></a>
                        </div>
                    }
                >
                    <li>
                        Built financial data pipeline using Python, Airflow and Snowflake to rebalance portfolios consisting of Singapore Exchange stocks.
                    </li>
                    <li>
                        Developed rebalancing methodology using rolling returns and market sentiments. Derived market sentiments from web-scraping
                        data using Selenium and NLP analysis using Python NLTK.
                    </li>

                </Panel>
                <Panel
                    bordered
                    header={
                        <div>
                            <span>Child and Adolescent Needs and Strength System(CANS) for Ministry of Social and Family Development</span>
                            &nbsp;
                            <a href="https://uvents.nus.edu.sg/event/19th-steps/module/IS4103/project/4"><u>link</u></a>
                        </div>
                    }
                    defaultExpanded
                >
                    <li>
                        Developed a full stack enterprise level system using Java EE and Angular. Encoded CANS logic in the backend to tailor each child’s
                        unique profile for MSF employees to easily assess and address the wellbeing of at-risk youths and their caretakers.
                    </li>
                    <li>
                        Frontend systems includes data visualization of low-to-high levels of each welfare organization’s needs, child and caretaker digital
                        assessment tools which reduced employees’ workload by 90%.
                    </li>
                </Panel>
                <Panel
                    bordered
                    header={
                        <div>
                            <span>CitiLife: Mobile and Web Application for Citibank’s Citi HackOverflow </span>
                            <a href="https://github.com/yuntianNUS/citibank"><u>link</u></a>
                        </div>
                    }
                    defaultExpanded
                >
                    <li>
                        Implemented cloud-enabled mobile application (consumer end) and web application (merchant end) built with Ionic-Vue and
                        Firebase.
                    </li>
                    <li>
                        Built features include QR code scanning and processing capabilities to purchase merchant issued vouchers and points reward system
                        credited to consumer based on merchant end logic.
                    </li>
                </Panel>
                <Panel
                    bordered
                    header={
                        <div>
                            <span>OOTD Food Delivery Enterprise System </span>
                            <a href="https://github.com/yuntianNUS/OOTDAdmin"><u>link</u></a>
                        </div>
                    }
                    defaultExpanded
                >
                    <li>
                        Engineered a full stack food delivery system with multiple clients for the <a href="https://github.com/yuntianNUS/OOTDAdmin">administrators</a>, <a href="https://github.com/yuntianNUS/OOTDFood">customers</a>, and <a href="https://github.com/yuntianNUS/OOTDDriver">drivers</a> with Angular, Java
                        Server Faces and Ionic-Angular, built on top of a common JavaEE backend using a Model-view-viewmodel architecture.
                    </li>
                    <li>
                        Built features of data visualization of sales, customizing available food options by the merchants, purchasing food by the customers,
                        and automatic sending delivery instructions to the drivers.
                    </li>
                </Panel>
            </PanelGroup>
        </Container>
    )
}

export default YunTianContent;
