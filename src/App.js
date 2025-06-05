import './App.css';
import {Cards} from './wonders';


function App() {

  return (
    <div >
      <Cards name = "Colossus of Rhodes" imageUrl ="colossus.jpg" details= "An incredible feat of Greek engineering, this 100-foot-tall statue of the sun god Helios once guarded the Mandraki Harbor in Rhodes, Greece. An earthquake in 226 B.C. brought it crashing down."></Cards>
<Cards name = "Great Pyramid of Giza" imageUrl = "pyramids.jpg" details = "Located in Egypt, the Great Pyramid is the only original wonder still standing."></Cards>
<Cards name = "Hanging Gardens of Babylon" imageUrl = "babylon.jpg" details = "Located (maybe) in modern-day Iraq, the Hanging Gardens were constructed around 600 B.C. as a gift to King Nebuchadnezzar II’s wife. It’s believed they were an incredible collection of trees, flowers, and other vegetation."></Cards>
<Cards name = "The Lighthouse of Alexandria" imageUrl = "house.jpg" details = "The prototype for today’s lighthouses, the Lighthouse of Alexandria was built in Egypt in 280 B.C. and at the time, was second in height only to the Great Pyramid. It served many functions, from a beacon to a military lookout."></Cards>
<Cards name = "Mausoleum at Halicarnassus" imageUrl = "mausoleum.jpg" details = "Located in modern-day Turkey, the Mausoleum was built as a tomb for the king, Mausolus, in 350 B.C. Among several elaborate decorations, the structure featured a statue of the king and queen riding in a chariot. The mausoleum was destroyed in 1522 A.D. by Crusaders."></Cards>
<Cards name = "Statue of Zeus at Olympia" imageUrl = "zeus.jpg" details = "This 40-foot-tall statue featured the Greek god Zeus on a large throne. It was created from ivory, wood, bronze, and gold. The structure left its visitors in awe for more than 800 years before being lost to history."></Cards>
<Cards name = "Temple of Artemis at Ephesus" imageUrl = "temple.jpg" details = "Originally, the temple, which was dedicated to the goddess Artemis, was built alongside the River Ephesus in Turkey around 800 B.C. It was moved and rebuilt several times before ultimately falling during the rise of Christianity in 268 A.D."></Cards>
    </div>
  );
}

export default App;
