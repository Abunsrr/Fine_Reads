let rhymes = [
  {"title": "Two Lill Hands", "series": "eduventure", "class": "nursery", "videoId": "TV_x6YUdnvg"},
  {"title": "Jhonny jhonny", "series": "eduventure", "class": "nursery", "videoId": "F4tHL8reNCs"},
  {"title": "garmi", "series": "kinder", "class": "lkg", "videoId": "2Y6tvFEq-2Y"},
  {"title": "hamara bharat", "series": "kinder", "class": "lkg", "videoId": "gjQL1hHBWME"},
  {"title": "Row,Row", "series": "eduventure", "class": "nursery", "videoId": "fDR_pRHYMGA"},
  {"title": "patang", "series": "kinder", "class": "lkg", "videoId": "kuoILs9Y0lU"},
  {"title": "hamara bharat", "series": "kinder", "class": "lkg", "videoId": "gjQL1hHBWME"},
  {"title": "Jack and Jill", "series": "eduventure", "class": "nursery", "videoId": "3hRfEUu-G-g"},
  {"title": "Traffic Light", "series": "eduventure", "class": "nursery", "videoId": "Zm3SpyAQKUU"},
  {"title": "Three Froggies", "series": "eduventure", "class": "nursery", "videoId": "CiR8iJKauQE"},
  {"title": "dakiya", "series": "kinder", "class": "lkg", "videoId": "AGqvmevKAiY"},
  {"title": "garmi", "series": "kinder", "class": "lkg", "videoId": "2Y6tvFEq-2Y"},
  {"title": "Cobbler", "series": "eduventure", "class": "nursery", "videoId": "fpFYxjmk-OE"},
  {"title": "Humpty dumpty", "series": "eduventure", "class": "nursery", "videoId": "AIIj0mBX1jU"},
  {"title": "Five little Ducks", "series": "eduventure", "class": "nursery", "videoId": "ccCPcujnys"},
  {"title": "Hickory Dickory", "series": "eduventure", "class": "nursery", "videoId": "ygcN65SlLFg"},
  {"title": "London Bridge", "series": "eduventure", "class": "nursery", "videoId": "pUu0FWlMpgk"},
  {"title": "Chanda mama aao na", "series": "eduventure", "class": "nursery", "videoId": "bV0JRRIDMcI"},
  {"title": "Baarish aai cham cham", "series": "eduventure", "class": "nursery", "videoId": "4Lw-P3ykE6w"},
  {"title": "Subha savere aai titli", "series": "eduventure", "class": "nursery", "videoId": "OS7upMIMMK4"},
  {"title": "Machli jal ki rani", "series": "eduventure", "class": "nursery", "videoId": "DukYkulCT3U"},
  {"title": "Sair sapata", "series": "eduventure", "class": "nursery", "videoId": "TjH6Z2dsN1s"},
  {"title": "Shistachar", "series": "eduventure", "class": "nursery", "videoId": "jZpj71SvdEA"},
  {"title": "Circus aaya", "series": "eduventure", "class": "nursery", "videoId": "BGTsnd6BO9Q"},
  {"title": "Chidiya", "series": "eduventure", "class": "nursery", "videoId": "bMWjKXIvGHk"},
  {"title": "Duniya Gol", "series": "eduventure", "class": "nursery", "videoId": "67Yd2iYTI_o"},
  {"title": "Ginti", "series": "eduventure", "class": "nursery", "videoId": "vHwUrcjFSKo"},
  {"title": "Rail Chali", "series": "eduventure", "class": "nursery", "videoId": "b3gE2KloA3c"},
  {"title": "I am Special", "series": "eduventure", "class": "lkg", "videoId": "lrqkjS1cV24"},
  {"title": "cock a doodle doo", "series": "eduventure", "class": "lkg", "videoId": "oyTzcQwC1f4"},
  {"title": "Little bo peep", "series": "eduventure", "class": "lkg", "videoId": "pwUy9lf8zgs"},
  {"title": "ten little fingers", "series": "eduventure", "class": "lkg", "videoId": "Q0luGUoY28w"},
  {"title": "Chubby Cheeks", "series": "eduventure", "class": "lkg", "videoId": "If7yOgdFdHA"},
  {"title": "one two buckle my shoe", "series": "eduventure", "class": "lkg", "videoId": "UYuFdJaqHOE"},
  {"title": "Ba ba black sheep", "series": "eduventure", "class": "lkg", "videoId": "MR5XSOdjKMA"},
  {"title": "Little bo peep", "series": "eduventure", "class": "lkg", "videoId": "pwUy9lf8zgs"},
  {"title": "ten little fingers", "series": "eduventure", "class": "lkg", "videoId": "Q0luGUoY28w"},
  {"title": "Chubby Cheeks", "series": "eduventure", "class": "lkg", "videoId": "If7yOgdFdHA"},
  {"title": "one two buckle my shoe", "series": "eduventure", "class": "lkg", "videoId": "UYuFdJaqHOE"},
  {"title": "Ba ba black sheep", "series": "eduventure", "class": "lkg", "videoId": "MR5XSOdjKMA"},
  {"title": "Colours", "series": "eduventure", "class": "lkg", "videoId": "oeyBXrITPYg"},
  {"title": "Little miss muffet", "series": "eduventure", "class": "lkg", "videoId": "UbyrHdxZlg0"},
  {"title": "Our band", "series": "eduventure", "class": "lkg", "videoId": "uSeHa0L4xdU"},
  {"title": "Polite words", "series": "eduventure", "class": "lkg", "videoId": "Rx1pROtmxss"},
  {"title": "Danto ki safai", "series": "eduventure", "class": "lkg", "videoId": "66B2h6_t40w"},
  {"title": "Jisne suraj chand bnaya", "series": "eduventure", "class": "lkg", "videoId": "5zUSSFb23ns"},
  {"title": "Jhanda lehrae", "series": "eduventure", "class": "lkg", "videoId": "Hp9J9P0aYsk"},
  {"title": "Cricket", "series": "eduventure", "class": "lkg", "videoId": "w6LsL4TsABM"},
  {"title": "Jal ki boonde", "series": "eduventure", "class": "lkg", "videoId": "9tnTmQenxU8"},
  {"title": "Sundar Mor", "series": "eduventure", "class": "lkg", "videoId": "V45PbzUc74s"},
  {"title": "Suraj", "series": "eduventure", "class": "lkg", "videoId": "XqZ7k4rEKpY"},
  {"title": "Aeroplane", "series": "eduventure", "class": "ukg", "videoId": "nySqdZAannw"},
  {"title": "Little Boy blue", "series": "eduventure", "class": "ukg", "videoId": "cm506-Ty6wQ"},
  {"title": "Pat a Cake", "series": "eduventure", "class": "ukg", "videoId": "yQhg82lrkxo"},
  {"title": "five little eggs were sitting in the nest", "series": "eduventure", "class": "ukg", "videoId": "Ov-DhrJy7ZI"},
  {"title": "one two three four five once i caught a fish alive 6 7 8 9 10", "series": "eduventure", "class": "ukg", "videoId": "VWWEUChKo6s"},
  {"title": "Five Little Soldiers", "series": "eduventure", "class": "ukg", "videoId": "vCB0WIPiBJs"},
  {"title": "Traffic Rules", "series": "eduventure", "class": "ukg", "videoId": "HhrfOgLjBvg"},
  {"title": "out in the garden", "series": "eduventure", "class": "ukg", "videoId": "r40UdqrSNIE"},
  {"title": "Tree", "series": "eduventure", "class": "ukg", "videoId": "H6GyjepUD50"},
  {"title": "Pustak", "series": "eduventure", "class": "ukg", "videoId": "MyD4qTeQmEU"},
  {"title": "Maa", "series": "eduventure", "class": "ukg", "videoId": "LhGSlNfXutQ"},
  {"title": "Baarish", "series": "eduventure", "class": "ukg", "videoId": "eh4YOgzOBa8"},
  {"title": "Samay", "series": "eduventure", "class": "ukg", "videoId": "sPlOHxKeXlk"},
  {"title": "Aaloo", "series": "eduventure", "class": "ukg", "videoId": "1mJ7MNiHwdI"},
  {"title": "Chhunnu Munnu", "series": "eduventure", "class": "ukg", "videoId": "AiR0Z9X9o50"},
  {"title": "Gao geet", "series": "eduventure", "class": "ukg", "videoId": "y9vsOvJVSoo"},
  {"title": "Railgadi", "series": "eduventure", "class": "ukg", "videoId": "oNRQnEhdl1Y"},
  {"title": "Subha ho gai", "series": "eduventure", "class": "ukg", "videoId": "AqQ-pM4Vnh4"},
  {"title": "Early to bed", "series": "kinder", "class": "nursery", "videoId": "1FXGT4UtZCo"},
  {"title": "Roses are red", "series": "kinder", "class": "nursery", "videoId": "bAiFSKLYBZY"},
  {"title": "Rain,Rain go away", "series": "kinder", "class": "nursery", "videoId": "BtDolWTSpV8"},
  {"title": "Ring a Ring a roses", "series": "kinder", "class": "nursery", "videoId": "zgvqFOx6w8k"},
  {"title": "Twinkle Twinkle", "series": "kinder", "class": "nursery", "videoId": "hqzvHfy-Ij0"},
  {"title": "Jack and Jill", "series": "kinder", "class": "nursery", "videoId": "3hRfEUu-G-g"},
  {"title": "Jhonny Jhonny", "series": "kinder", "class": "nursery", "videoId": "F4tHL8reNCs"},
  {"title": "one two buckle my shoe", "series": "kinder", "class": "nursery", "videoId": "UYuFdJaqHOE"},
  {"title": "Hickory Dickory", "series": "kinder", "class": "nursery", "videoId": "ygcN65SlLFg"},
  {"title": "Humpty dumpty", "series": "kinder", "class": "nursery", "videoId": "AIIj0mBX1jU"},
  {"title": "Jingle Bells", "series": "kinder", "class": "nursery", "videoId": "YsmcPkOJLb4"},
  {"title": "Machli jal ki rani", "series": "kinder", "class": "nursery", "videoId": "DukYkulCT3U"},
  {"title": "Gulab ka fool", "series": "kinder", "class": "nursery", "videoId": "E6iX3jCIKm8"},
  {"title": "Pizza Burger", "series": "kinder", "class": "nursery", "videoId": "gCCp2ZjG3Yo"},
  {"title": "Khilaone", "series": "kinder", "class": "nursery", "videoId": "vg1lKzTj3tM"},
  {"title": "Chanda mama", "series": "kinder", "class": "nursery", "videoId": "tLJDqnUDTLY"},
  {"title": "Kut kut kut", "series": "kinder", "class": "nursery", "videoId": "p0VxPHyvjmY"},
  {"title": "Row,Row", "series": "kinder", "class": "lkg", "videoId": "fDR_pRHYMGA"},
  {"title": "Mummy and Daddy", "series": "kinder", "class": "lkg", "videoId": "StW83FMaih8"},
  {"title": "Five little Ducks", "series": "kinder", "class": "lkg", "videoId": "-ccCPcujnys"},
  {"title": "Hop a Little", "series": "kinder", "class": "lkg", "videoId": "FTJchtcnZm8"},
  {"title": "Little bo peep", "series": "kinder", "class": "lkg", "videoId": "pwUy9lf8zgs"},
  {"title": "Old Mc donald", "series": "kinder", "class": "lkg", "videoId": "Wm4R8d0d8kU"},
  {"title": "Five little Monkeys", "series": "kinder", "class": "lkg", "videoId": "LrM62pv56o0"},
  {"title": "Ding Dong Bell", "series": "kinder", "class": "lkg", "videoId": "wwdfDDfwFrk"},
  {"title": "Clap your Hands", "series": "kinder", "class": "lkg", "videoId": "D3kEi9ghYrU"},
  {"title": "Teddy bear", "series": "kinder", "class": "lkg", "videoId": "7X0Q4F--g0s"},
  {"title": "Ba ba black sheep", "series": "kinder", "class": "lkg", "videoId": "MR5XSOdjKMA"},
  {"title": "Pussy Cat", "series": "kinder", "class": "lkg", "videoId": "n4nrJdDJ1mU"},
  {"title": "Ginti", "series": "kinder", "class": "lkg", "videoId": "euAwKCPNYAI"},
  {"title": "Sadak", "series": "kinder", "class": "lkg", "videoId": "dSko07Y83RY"},
  {"title": "Sher Nirala", "series": "kinder", "class": "lkg", "videoId": "fytq3GwmEXM"},
  {"title": "Veer Sipahi", "series": "kinder", "class": "lkg", "videoId": "syiJCOB2L9o"},
  {"title": "kale kale badal", "series": "kinder", "class": "lkg", "videoId": "Zh2MyZ4EwXs"},

];








let currentSeries = 'all';
let currentClass = 'all';

function renderRhymes() {
  const container = document.getElementById('rhymes-container');
  if (!container) {
    console.error("Container with ID 'rhymes-container' not found.");
    return;
  }

  let rhymesToDisplay;

  // If no filters are applied, show only the first 10 rhymes
  if (currentSeries === 'all' && currentClass === 'all') {
    rhymesToDisplay = rhymes.slice(0, 10);
  } else {
    // Otherwise, filter based on selected series and class
    rhymesToDisplay = rhymes.filter(rhyme =>
      (currentSeries === 'all' || rhyme.series === currentSeries) &&
      (currentClass === 'all' || rhyme.class === currentClass)
    );
  }

  container.innerHTML = ''; // Clear existing content
  rhymesToDisplay.forEach(rhyme => {
    container.innerHTML += `
      <div class="widget shadow-lg">
        <img src="https://img.youtube.com/vi/${rhyme.videoId}/hqdefault.jpg" alt="${rhyme.title}" class="w-full h-40 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-semibold">${rhyme.title}</h3>
          <span class="badge">${rhyme.series}</span>
          <span class="badge">${rhyme.class}</span>
          <a href="https://www.youtube.com/watch?v=${rhyme.videoId}" target="_blank" class="play-btn text-white px-4 py-2 mt-2 inline-block rounded">Play</a>
        </div>
      </div>
    `;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Get series and class from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const seriesFromUrl = urlParams.get('series') || 'all';
  const classFromUrl = urlParams.get('class') || 'all';

  // Set currentSeries and currentClass based on URL if provided
  if (seriesFromUrl !== 'all' || classFromUrl !== 'all') {
    currentSeries = seriesFromUrl;
    currentClass = classFromUrl;
  }

  renderRhymes(); // Initial render (10 rhymes or URL-specific combination)

  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      if (e.target.dataset.series) {
        currentSeries = e.target.dataset.series;
        document.querySelectorAll('[data-series]').forEach(btn => 
          btn.classList.toggle('text-cyan-500', btn === e.target));
      }
      if (e.target.dataset.class) {
        currentClass = e.target.dataset.class;
        document.querySelectorAll('[data-class]').forEach(btn => 
          btn.classList.toggle('text-cyan-500', btn === e.target));
      }

      const params = new URLSearchParams();
      if (currentSeries !== 'all') params.set('series', currentSeries);
      if (currentClass !== 'all') params.set('class', currentClass);
      history.replaceState(null, '', '?' + params.toString());

      renderRhymes();
    });
  });
});