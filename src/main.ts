import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="hero">
    <div class="hero-content">
      <h1>Família Scarlett</h1>
      <p>O Sangue chama no Vilarejo</p>
    </div>
    <div class="scroll-indicator">↓</div>
  </div>

  <section class="container">
    <div class="section-title">
      <h2>A Herança das Sombras</h2>
    </div>
    <div class="lore-grid">
      <div class="lore-content">
        <p>
          Em um vilarejo remoto, afastado do resto do mundo, reside uma família cujas raízes são mais profundas que o tempo. A Família Scarlett, liderada pela bruxa Mary, não é composta por meros mortais.
        </p>
        <p>
          Zayne, Sylus, Rafael, Xavier e Caleb — cinco irmãos transformados em vampiros, cada um com sua própria cruz a carregar. Eles se alimentam de sangue, uma necessidade que os coloca em um equilíbrio perigoso com os poucos habitantes do vilarejo.
        </p>
        <p>
          Para sobreviverem sem dizimar os locais, eles precisam de novos visitantes. Estranhos que trazem não apenas sustento, mas histórias e o caos necessário para manter a chama da imortalidade acesa.
        </p>
      </div>
      <div class="lore-visual">
         <img src="/assets/lore_chat.jpg" alt="História do RPG" class="lore-image">
      </div>
    </div>
  </section>

  <section class="container">
    <div class="section-title">
      <h2>A Família</h2>
    </div>
    <div class="character-grid">
      <!-- Zayne -->
      <div class="character-card">
        <img src="/assets/zayne.jpg" alt="Zayne Scarlett">
        <div class="character-info">
          <h3>Zayne Scarlett</h3>
          <p>Idade: 22 | Nobre e Protetor</p>
          <p>Sério e quieto, possui um lado autoritário e protetor. Mantém tudo em segredo pela honra dos Scarlett.</p>
        </div>
      </div>

      <!-- Rafael -->
      <div class="character-card">
        <img src="/assets/rafael.jpg" alt="Rafael Scarlett">
        <div class="character-info">
          <h3>Rafael Scarlett</h3>
          <p>Idade: 20 | O Artista Aventureiro</p>
          <p>Espírito aventureiro e amante da arte. A maioria dos quadros do casarão foram pintados por ele.</p>
        </div>
      </div>

      <!-- Caleb -->
      <div class="character-card">
        <img src="/assets/caleb.jpg" alt="Caleb Scarlett">
        <div class="character-info">
          <h3>Caleb Scarlett</h3>
          <p>Idade: 20 | O Caçula Sorridente</p>
          <p>Agitado, brincalhão e gentil. Adora adrenalina e é o mais novo da família.</p>
        </div>
      </div>

      <!-- Sylus (Placeholder for visual consistency) -->
      <div class="character-card" style="background: linear-gradient(135deg, #4b0000 0%, #200000 100%);">
        <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--accent-gold); font-family: var(--font-header);">
          <div style="text-align: center; padding: 20px;">
             <h3>Sylus Scarlett</h3>
             <p>Idade: 20 | O Silencioso</p>
             <p style="font-size: 0.8rem; margin-top: 10px;">Mudou totalmente ao se tornar vampiro. De poucas palavras e olhar intenso.</p>
          </div>
        </div>
      </div>

      <!-- Xavier (Placeholder for visual consistency) -->
      <div class="character-card" style="background: linear-gradient(135deg, #1a2a47 0%, #0a1220 100%);">
        <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--accent-gold); font-family: var(--font-header);">
          <div style="text-align: center; padding: 20px;">
             <h3>Xavier Scarlett</h3>
             <p>Idade: 20 | O Esgrimista</p>
             <p style="font-size: 0.8rem; margin-top: 10px;">Alegre, extrovertido e mestre na esgrima. Ama tocar piano nas noites do vilarejo.</p>
          </div>
        </div>
      </div>

      <!-- Mary -->
      <div class="character-card" style="background: linear-gradient(135deg, #1a472a 0%, #0a2012 100%);">
        <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--accent-gold); font-family: var(--font-header);">
          <div style="text-align: center; padding: 20px;">
             <h3>Mary Scarlett</h3>
             <p>A Matriarca & Bruxa</p>
             <p style="font-size: 0.8rem; margin-top: 10px;">O elo místico que mantém a família unida.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container">
    <div class="section-title">
      <h2>O Casarão Antigo</h2>
    </div>
    <div class="map-container">
      <img src="/assets/mansion_map.jpg" alt="Mapa do Casarão" class="map-image">
    </div>
  </section>

  <section class="cta">
    <div class="container">
      <div class="section-title">
        <h2>Pronto para entrar no vilarejo?</h2>
      </div>
      <p style="margin-bottom: 40px; color: var(--text-dim); max-width: 600px; margin-left: auto; margin-right: auto;">
        Um RPG de texto envolvente onde cada escolha pode ser sua última. Junte-se a nós no WhatsApp e comece sua jornada.
      </p>
      <a href="https://wa.me/554298201103" class="btn-whatsapp" target="_blank">
        Entrar no RPG (WhatsApp)
      </a>
    </div>
  </section>

  <!-- Character Highlight Modal -->
  <div id="modal" class="modal">
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      <div class="modal-image-container">
        <img id="modal-img" src="" alt="Destaque" class="modal-image">
      </div>
      <div class="modal-quote-container">
         <div class="quote-bubble">
           <p id="modal-quote"></p>
         </div>
      </div>
    </div>
  </div>
`

// Character Modal Logic
const modal = document.getElementById('modal') as HTMLElement;
const modalImg = document.getElementById('modal-img') as HTMLImageElement;
const modalQuote = document.getElementById('modal-quote') as HTMLElement;
const closeModal = document.querySelector('.close-modal') as HTMLElement;

// Trigger specifically for Rafael
const rafaelCard = document.querySelector('.character-card img[alt="Rafael Scarlett"]')?.parentElement;

if (rafaelCard) {
  rafaelCard.addEventListener('click', () => {
    modalImg.src = '/assets/rafael_full.png';
    modalQuote.innerText = 'O mundo é como uma tela em branco… e eu não nasci para observar — eu nasci para pintar cada canto dele com minhas próprias aventuras.';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop scroll
  });
}

closeModal.addEventListener('click', () => {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto'; // Re-enable scroll
});

// Close modal on click outside
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// Parallax effect for the hero background
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const hero = document.querySelector('.hero') as HTMLElement;
  if (hero) {
    hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
  }
});
