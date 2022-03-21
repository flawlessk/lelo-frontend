import './App.css';
import TopContent from './components/content/TopContent';
import Header from './components/header/Header';
import News from './components/news/News.js';
import PlanSection from './components/plan/PlanSection.js';
import Session from './images/session.svg';
import Bank from './images/bank.svg';
import Team from './components/team/Team';
import ElectionIcon from './images/election.svg';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App({ newsData, teamsData }) {
  return (
    <div className="App">
      <Header />
      <TopContent 
        title='გაეცანით მარშალის გეგმას'
        image={Session}
      />
      <div className="news-wrapper">
        <News newsData={newsData} />
      </div>
      <PlanSection />
      <TopContent 
        title='ჩვენს შესახებ'
        image={Bank}
        circle={true}
      />
      <Team teamsData={teamsData} />
      <div className='electionContent'>
        <TopContent 
          circle={true}
          title='შიდა არჩევნები'
          image={ElectionIcon}
        />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
