import { Container, Header, Content, Divider, PanelGroup } from 'rsuite';

import { Panel } from 'rsuite';
import { CopyBlock, dracula } from "react-code-blocks";
import IconRow from './ContactIcons';
import './mycontents.css'

// eslint-disable-next-line no-undef
const code =
    `details = {
    "firstname": "yuntian",
    "lastname:": "gu",
    "birth_year": "1998",
    "姓名": "谷云天",
    "favourite_team": "Chelsea_FC",
    "does": ['fullstack dev'],
}`


function YunTianContent() {
    return (
        <Container>
            <Header >
                <code className={"headerCode"} style={{ textAlign: "center" }}>hello there, yuntian here</code>
                <span className={"cursorBlinkHeader"}>|</span>
                <IconRow />
                <Divider />
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

            <Content>
                nus information systems. graduated 06/06/23.
                <br></br>
                code &#8594; soccer &#8594; gym&#8594; sleep&#8594; EAT
                <br></br>
                call me a veterinarian cause i fix bugs.
                <br />
                call me a god cause i create them.

            </Content>

            <Divider><code style={{ textAlign: "center", fontSize: "2em" }}>jobs</code>
                <span className={"cursorBlink"} style={{ fontSize: "2em", animation: "blink 0.79s steps(100, start) infinite" }}>|</span></Divider>

            <PanelGroup bordered>
                <Panel
                    defaultExpanded
                    bordered
                    header={
                        <>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>
                                    <span>HSBC, Global Graduate, Analyst, Full Time, first real big boy job, paying taxes </span>
                                </div>
                                <div>
                                    <span>[July 2023 - today]</span>
                                </div>
                            </div>
                        </>
                    }
                >
                    <li>
                        online trading team.
                    </li>
                    <li>
                        equities, derivatives
                    </li>
                    <li>
                        fullstack dev. agile-ing.
                    </li>

                </Panel>
                <Panel
                    defaultExpanded
                    bordered
                    header={
                        <>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>
                                    <span>GIC, Investment Insights Group, Quantitative Strategist Intern </span>
                                </div>
                                <div>
                                    <span>[Jan 2022 - July 2022]</span>
                                </div>
                            </div>
                        </>
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
                        <>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>
                                    <span>Noyce Labs (Hedge Fund), Quantitative Strategist Intern</span>                                </div>
                                <div>
                                    <span>[Mar 2021 - Dec 2021]</span>
                                </div>
                            </div>
                        </>
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
                    defaultExpanded
                    header={
                        <>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>
                                    <span>GAO Capital (Hedge Fund), Operations Intern </span>                               </div>
                                <div>
                                    <span>[Jan 2021 - Mar 2021]</span>
                                </div>
                            </div>
                        </>
                    }
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
                    bordered
                    header={
                        <div>
                            <span>Coinseeker.co: LLM solution development</span>
                            &nbsp;
                            <a href="https://app.coinseeker.co/all-projects?tab=newly-detected"><u>link</u></a>
                        </div>
                    }
                >
                    <li>
                        Lead development of data ingestion engine using gpt for organized data extraction from the WWW to generate
                        reliable and comprehensive coverage of all upcoming, present and past crypto projects. Coinseeker.co now stands to
                        be the leading 'golden source' of crypto business knowledge base.
                    </li>
                    <li>
                        Formulated solution to consistently extract organized data from unorganized sources through developing tried and tested
                        prompts for the tuned LLM to perform Question Answering with accuracy of 90% for key data fields.
                    </li>
                    <li>
                        Enhanced data ingestion process by adding secondary layers of data quality checks and outlier identification 
                        for LLM's Question Answering evaluations, 
                        reducing previous implementation of manual data extraction + processing by 95%.
                    </li>

                </Panel>
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
                        assessment tools which reduced employees' workload by 90%.
                    </li>
                </Panel>
                {/* <Panel
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
                </Panel> */}
                {/* <Panel
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
                </Panel> */}
            </PanelGroup>
        </Container>
    )
}

export default YunTianContent;
