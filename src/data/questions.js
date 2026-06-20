const juneteenth = [
  { q: "What year did Juneteenth become a federal holiday?", a: "2021" },
  { q: "What month is Juneteenth celebrated?", a: "june" },
  { q: "What day of June is Juneteenth?", a: "19" },
  { q: "What state did the news of freedom reach last, sparking Juneteenth?", a: "texas" },
  { q: "Juneteenth marks the end of what system in the US?", a: "slavery" },
];

const turingCore = [
  { q: "Who proposed the Turing Test?", a: "alan turing" },
  { q: "What machine did Turing help break during WWII?", a: "enigma" },
  { q: "What is considered the birth month of Alan Turing?", a: "june" },
  { q: "What field did Turing help pioneer, alongside mathematics?", a: "computer science" },
  { q: "What term describes a machine that can compute any computable problem, named after Turing?", a: "turing machine" },
];

const historyFigures = [
  { name: "Frederick Douglass", achievement: "escaping slavery and becoming a leading abolitionist", year: "1818" },
  { name: "Harriet Tubman", achievement: "leading enslaved people to freedom via the Underground Railroad", year: "1822" },
  { name: "Rosa Parks", achievement: "refusing to give up her bus seat, sparking the Montgomery Bus Boycott", year: "1913" },
  { name: "Martin Luther King Jr", achievement: "leading the civil rights movement through nonviolent protest", year: "1929" },
  { name: "Malcolm X", achievement: "advocating for Black empowerment and human rights", year: "1925" },
  { name: "Sojourner Truth", achievement: "delivering the Ain't I a Woman speech", year: "1797" },
  { name: "Ida B Wells", achievement: "investigative journalism exposing lynching in America", year: "1862" },
  { name: "Thurgood Marshall", achievement: "becoming the first Black US Supreme Court Justice", year: "1908" },
  { name: "John Lewis", achievement: "leading the Selma to Montgomery marches", year: "1940" },
  { name: "Susan B Anthony", achievement: "campaigning for women's suffrage in the US", year: "1820" },
  { name: "Elizabeth Cady Stanton", achievement: "organizing the Seneca Falls Convention", year: "1815" },
  { name: "Alice Paul", achievement: "co-founding the National Woman's Party", year: "1885" },
  { name: "Booker T Washington", achievement: "founding the Tuskegee Institute", year: "1856" },
  { name: "W E B Du Bois", achievement: "co-founding the NAACP", year: "1868" },
  { name: "Shirley Chisholm", achievement: "becoming the first Black woman elected to the US Congress", year: "1924" },
  { name: "Medgar Evers", achievement: "serving as a civil rights activist in Mississippi", year: "1925" },
  { name: "Bayard Rustin", achievement: "organizing the March on Washington", year: "1912" },
  { name: "Fannie Lou Hamer", achievement: "fighting for Black voting rights in Mississippi", year: "1917" },
];

const computingFigures = [
  { name: "Alan Turing", achievement: "proposing the Turing Test and breaking the Enigma code", year: "1912" },
  { name: "Ada Lovelace", achievement: "writing the first algorithm intended for a machine", year: "1815" },
  { name: "Grace Hopper", achievement: "developing the first compiler", year: "1906" },
  { name: "John von Neumann", achievement: "designing the architecture used in most modern computers", year: "1903" },
  { name: "Claude Shannon", achievement: "founding information theory", year: "1916" },
  { name: "Tim Berners-Lee", achievement: "inventing the World Wide Web", year: "1955" },
  { name: "Charles Babbage", achievement: "designing the Analytical Engine", year: "1791" },
  { name: "Margaret Hamilton", achievement: "leading the software engineering for the Apollo missions", year: "1936" },
  { name: "Dennis Ritchie", achievement: "creating the C programming language", year: "1941" },
  { name: "Ken Thompson", achievement: "co-creating the Unix operating system", year: "1943" },
  { name: "Steve Wozniak", achievement: "co-founding Apple and designing the Apple I and II", year: "1950" },
  { name: "Vint Cerf", achievement: "co-designing the TCP IP protocols", year: "1943" },
  { name: "Barbara Liskov", achievement: "developing the Liskov substitution principle", year: "1939" },
];

function buildPeople(list) {
  const out = [];
  list.forEach(({ name, achievement, year }) => {
    out.push({ q: `Who is best known for ${achievement}?`, a: name.toLowerCase() });
    out.push({ q: `In what year was ${name} born?`, a: year });
  });
  return out;
}

const worldCups = [
  { year: 1930, host: "uruguay", winner: "uruguay" },
  { year: 1934, host: "italy", winner: "italy" },
  { year: 1938, host: "france", winner: "italy" },
  { year: 1950, host: "brazil", winner: "uruguay" },
  { year: 1954, host: "switzerland", winner: "west germany" },
  { year: 1958, host: "sweden", winner: "brazil" },
  { year: 1962, host: "chile", winner: "brazil" },
  { year: 1966, host: "england", winner: "england" },
  { year: 1970, host: "mexico", winner: "brazil" },
  { year: 1974, host: "west germany", winner: "west germany" },
  { year: 1978, host: "argentina", winner: "argentina" },
  { year: 1982, host: "spain", winner: "italy" },
  { year: 1986, host: "mexico", winner: "argentina" },
  { year: 1990, host: "italy", winner: "west germany" },
  { year: 1994, host: "usa", winner: "brazil" },
  { year: 1998, host: "france", winner: "france" },
  { year: 2002, host: "south korea and japan", winner: "brazil" },
  { year: 2006, host: "germany", winner: "italy" },
  { year: 2010, host: "south africa", winner: "spain" },
  { year: 2014, host: "brazil", winner: "germany" },
  { year: 2018, host: "russia", winner: "france" },
  { year: 2022, host: "qatar", winner: "argentina" },
];

const soccerFacts = [
  { q: "How many players are on a soccer team on the field?", a: "11" },
  { q: "What color card results in a player being sent off?", a: "red" },
  { q: "What color card is a warning to a player?", a: "yellow" },
  { q: "How long is a standard half in soccer?", a: "45" },
  { q: "What is the governing body of world soccer called?", a: "fifa" },
  { q: "How often is the men's World Cup held?", a: "every 4 years" },
  { q: "What is awarded to the team that wins the World Cup?", a: "world cup trophy" },
  { q: "What rule restricts an attacker being behind the last defender?", a: "offside" },
  { q: "What is it called when a match goes to kicks after extra time?", a: "penalty shootout" },
  { q: "What year was the first Women's World Cup held?", a: "1991" },
];

function buildSoccer() {
  const out = [...soccerFacts];
  worldCups.forEach(({ year, host, winner }) => {
    out.push({ q: `Which country hosted the World Cup in ${year}?`, a: host });
    out.push({ q: `Which country won the World Cup in ${year}?`, a: winner });
  });
  const titleCounts = {};
  worldCups.forEach(({ winner }) => {
    titleCounts[winner] = (titleCounts[winner] || 0) + 1;
  });
  Object.entries(titleCounts).forEach(([country, count]) => {
    out.push({ q: `How many World Cup titles has ${country} won?`, a: String(count) });
  });
  return out;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function getShuffledQuestions() {
  const pool = [
    ...juneteenth,
    ...turingCore,
    ...buildPeople(historyFigures),
    ...buildPeople(computingFigures),
    ...buildSoccer(),
  ];
  return shuffle(pool);
}