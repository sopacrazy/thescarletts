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
          <p>Idade: 25 | O Primogênito</p>
          <p>Sério, responsável e o primeiro a ser transformado. Ele guarda a honra da família.</p>
        </div>
      </div>

      <!-- Caleb -->
      <div class="character-card">
        <img src="/assets/caleb.jpg" alt="Caleb Scarlett">
        <div class="character-info">
          <h3>Caleb Scarlett</h3>
          <p>Idade: 20 | O Caçula</p>
          <p>Agitado e brincalhão, adora adrenalina. É a luz gentil nas sombras da família.</p>
        </div>
      </div>

      <!-- Mary (Text only for now or placeholder) -->
      <div class="character-card" style="background: linear-gradient(135deg, #1a472a 0%, #0a2012 100%);">
        <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--accent-gold); font-family: var(--font-header);">
          <div style="text-align: center; padding: 20px;">
             <h3>Mary Scarlett</h3>
             <p>A Matriarca & Bruxa</p>
             <p style="font-size: 0.8rem; margin-top: 10px;">O elo místico que mantém a família unida.</p>
          </div>
        </div>
      </div>

       <!-- Outros Irmãos -->
      <div class="character-card" style="background: linear-gradient(135deg, #4b0082 0%, #1a0033 100%);">
        <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--accent-gold); font-family: var(--font-header);">
          <div style="text-align: center; padding: 20px;">
             <h3>Sylus, Rafael & Xavier</h3>
             <p>A Fraternidade Sombria</p>
             <p style="font-size: 0.8rem; margin-top: 10px;">Irmãos cujos destinos estão selados pelo sangue.</p>
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
`

// Parallax effect for the hero background
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const hero = document.querySelector('.hero') as HTMLElement;
  if (hero) {
    hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
  }
});
