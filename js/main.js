(() => {
  const data = PORTFOLIO;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const canTilt = finePointer && !reduceMotion;

  const svg = (body, filled = false) =>
    `<svg viewBox="0 0 24 24" ${filled
      ? 'fill="currentColor"'
      : 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"'}>${body}</svg>`;

  const ICONS = {
    github: svg('<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>', true),
    linkedin: svg('<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>', true),
    itch: svg('<path d="M6 11h4M8 9v4M15 12h.01M18 10h.01"/><path d="M17.32 5H6.68a4 4 0 0 0-3.98 3.59C2.6 9.42 2 14.46 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.41-1.41A2 2 0 0 1 9.83 16h4.34a2 2 0 0 1 1.41.59L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.55-.6-6.58-.69-7.26A4 4 0 0 0 17.32 5z"/>'),
    mail: svg('<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'),
    external: svg('<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>'),
    play: svg('<path d="M6 3l14 9-14 9V3z"/>'),
    playFill: svg('<path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11.2-6.86a1 1 0 0 0 0-1.72L9.5 4.28A1 1 0 0 0 8 5.14z"/>', true),
    discord: svg('<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>', true),
    code: svg('<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>'),
    arrow: svg('<path d="M5 12h14M12 5l7 7-7 7"/>'),
    left: svg('<path d="m15 18-6-6 6-6"/>'),
    right: svg('<path d="m9 18 6-6-6-6"/>'),
    pin: svg('<path d="M20 10c0 5-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 15 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>')
  };

  function h(tag, attrs = {}, ...children) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
      if (value === false || value == null) continue;
      if (key === 'class') node.className = value;
      else if (key === 'html') node.innerHTML = value;
      else if (key === 'style') node.style.cssText = value;
      else if (key.startsWith('on')) node.addEventListener(key.slice(2), value);
      else node.setAttribute(key, value === true ? '' : value);
    }
    for (const child of children.flat(Infinity)) {
      if (child == null || child === false) continue;
      node.append(child instanceof Node ? child : String(child));
    }
    return node;
  }

  const icon = name => h('span', { class: 'icon', 'aria-hidden': 'true', html: ICONS[name] });
  const isExternal = url => /^https?:/.test(url);
  const byId = id => document.getElementById(id);

  const state = { filter: 'Todos', collection: 'projects', current: -1 };
  const isVideoFile = src => /\.(mp4|webm)$/i.test(src);
  const videoPoster = project => isVideoFile(project.video)
    ? project.videoPoster || project.cover
    : `https://i.ytimg.com/vi/${project.video}/hqdefault.jpg`;

  // Las ondas del banner de itch.io: líneas finas que se repiten cada 1440 unidades,
  // así una capa del doble de ancho puede desplazarse en bucle sin cortes.
  const WAVE_PERIOD = 1440;

  function wavePath(width, y0, amp, phase) {
    const points = [];
    for (let x = 0; x <= width; x += 40) {
      const t = (x / WAVE_PERIOD) * Math.PI * 2;
      points.push([x, y0 + amp * Math.sin(t + phase) + amp * 0.35 * Math.sin(2 * t + phase * 1.7)]);
    }
    let d = `M0 ${points[0][1].toFixed(1)}`;
    for (let i = 1; i < points.length - 1; i++) {
      const [x, y] = points[i];
      const [nx, ny] = points[i + 1];
      d += `Q${x} ${y.toFixed(1)} ${(x + nx) / 2} ${((y + ny) / 2).toFixed(1)}`;
    }
    const [lx, ly] = points.at(-1);
    return `${d}L${lx} ${ly.toFixed(1)}`;
  }

  function waveSvg({ lines, top, gap, amp, phase = 0, step = 0.1, height, alpha, loop = false }) {
    const width = loop ? WAVE_PERIOD * 2 : WAVE_PERIOD;
    let paths = '';
    for (let i = 0; i < lines; i++) {
      const t = lines > 1 ? i / (lines - 1) : 0;
      const a = amp * (0.8 + 0.2 * Math.sin(i * 0.7));
      paths += `<path d="${wavePath(width, top + i * gap, a, phase + i * step)}" stroke-opacity="${alpha(t).toFixed(2)}"/>`;
    }
    return `<svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" fill="none" stroke="currentColor">${paths}</svg>`;
  }

  function renderWaves(container, layers) {
    container.innerHTML = layers.map(layer =>
      `<div class="waves__layer" style="--speed: ${layer.speed}s">${waveSvg({ ...layer, loop: true })}</div>`).join('');
  }

  function staticWaves(color) {
    return h('span', {
      class: 'ph__waves',
      style: color ? `color: ${color}` : null,
      'aria-hidden': 'true',
      html: waveSvg({ lines: 16, top: 30, gap: 34, amp: 40, phase: 1.2, step: 0.14, height: 600, alpha: t => 0.75 - 0.55 * t })
    });
  }

  // El mate del banner de itch.io, a línea. Cada trazo se dibuja solo (pathLength = 1).
  const MATE_LINES = [
    'M31 57C15 72 10 104 23 125c11 18 63 18 74 0 13-21 8-53-8-68',
    'M30 48a30 6 0 1 0 60 0a30 6 0 1 0-60 0',
    'M30 48l1 9q29 9 58 0l1-9',
    'M37 46q5-7 12-4 5-5 11-1 6-4 11 0 6-3 12 4',
    'M57 47 85 12q3-4.5 9-3',
    'M18 82q42 14 84 0',
    'M45 140q1 7 15 7t15-7'
  ];

  function mateSvg() {
    const diamonds = [[36, 104], [48, 109], [60, 111], [72, 109], [84, 104]]
      .map(([x, y]) => `M${x} ${y - 2.6}l2.6 2.6-2.6 2.6-2.6-2.6z`).join('');
    return `<svg class="mate" viewBox="0 0 120 160" fill="none" aria-hidden="true">
      <path class="mate__steam" d="M41 34c-6-6 6-11 0-19"/>
      <path class="mate__steam" d="M49 31c-5-6 5-10 0-17"/>
      <path class="mate__body" d="M31 57C15 72 10 104 23 125c11 18 63 18 74 0 13-21 8-53-8-68l1-9a30 6 0 0 0-60 0z"/>
      ${MATE_LINES.map((d, i) => `<path class="mate__line" style="--d: ${i}" pathLength="1" d="${d}"/>`).join('')}
      <path class="mate__detail mate__dots" d="M17 93q43 14 86 0"/>
      <path class="mate__detail" d="M40 53v5.5M50 54.2v6M60 54.6v6.3M70 54.2v6M80 53v5.5"/>
      <path class="mate__detail mate__gems" d="${diamonds}"/>
    </svg>`;
  }

  function renderMates() {
    document.querySelectorAll('[data-mate]').forEach(node => { node.innerHTML = mateSvg(); });
  }

  // Inclinación 3D al pasar el mouse: la ficha se hunde del lado del cursor.
  // El valor persigue al objetivo con suavizado, como un resorte, en vez de saltar.
  function addTilt(node, { max = 5, depth = 16 } = {}) {
    const current = { x: 0, y: 0, z: 0 };
    const target = { x: 0, y: 0, z: 0 };
    let frame = 0;

    const tick = () => {
      let moving = false;
      for (const key of ['x', 'y', 'z']) {
        current[key] += (target[key] - current[key]) * 0.12;
        if (Math.abs(target[key] - current[key]) > 0.01) moving = true;
        else current[key] = target[key];
      }
      node.style.transform = current.x || current.y || current.z
        ? `perspective(1000px) rotateX(${current.x.toFixed(2)}deg) rotateY(${current.y.toFixed(2)}deg) translateZ(${current.z.toFixed(2)}px)`
        : '';
      frame = moving ? requestAnimationFrame(tick) : 0;
    };
    const start = () => { if (!frame) frame = requestAnimationFrame(tick); };

    node.addEventListener('pointermove', e => {
      const r = node.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      target.x = (0.5 - py) * max * 2;
      target.y = (px - 0.5) * max * 2;
      target.z = -depth;
      node.style.setProperty('--gx', `${(px * 100).toFixed(1)}%`);
      node.style.setProperty('--gy', `${(py * 100).toFixed(1)}%`);
      start();
    });
    node.addEventListener('pointerleave', () => {
      target.x = target.y = target.z = 0;
      start();
    });
  }

  // Luz que sigue al mouse sobre las ondas, con el mismo suavizado.
  function setupLight(area) {
    const light = area.querySelector('.light');
    if (!light || !canTilt) return;
    const pos = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let frame = 0;
    let primed = false;

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.1;
      pos.y += (target.y - pos.y) * 0.1;
      light.style.transform = `translate3d(${pos.x.toFixed(1)}px, ${pos.y.toFixed(1)}px, 0)`;
      frame = Math.abs(target.x - pos.x) + Math.abs(target.y - pos.y) > 0.3 ? requestAnimationFrame(tick) : 0;
    };

    area.addEventListener('pointermove', e => {
      const r = area.getBoundingClientRect();
      target.x = e.clientX - r.left;
      target.y = e.clientY - r.top;
      if (!primed) {
        pos.x = target.x;
        pos.y = target.y;
        primed = true;
      }
      light.classList.add('is-on');
      if (!frame) frame = requestAnimationFrame(tick);
    });
    area.addEventListener('pointerleave', () => light.classList.remove('is-on'));
  }

  function socialLinks() {
    const { links, email } = data.profile;
    return [
      ['github', 'GitHub', links.github],
      ['itch', 'itch.io', links.itch],
      ['discord', 'Discord', links.discord],
      ['linkedin', 'LinkedIn', links.linkedin],
      ['mail', 'Email', email && `mailto:${email}`]
    ]
      .filter(([, , url]) => url)
      .map(([key, label, url]) => h('li', {},
        h('a', {
          class: 'social',
          href: url,
          target: isExternal(url) ? '_blank' : null,
          rel: isExternal(url) ? 'noopener' : null,
          'aria-label': label,
          title: label
        }, icon(key))
      ));
  }

  function photoOrInitials(className) {
    const p = data.profile;
    return h('div', { class: className },
      p.photo ? h('img', { src: p.photo, alt: `Foto de ${p.name}` }) : [staticWaves(), h('span', {}, p.initials)]);
  }

  function renderProfile() {
    const p = data.profile;
    byId('brand-mark').textContent = p.initials;
    byId('brand-name').textContent = p.name;
    // Cada renglón del título sube desde una máscara; el h1 conserva el texto completo para lectores de pantalla.
    const words = p.name.split(' ');
    const title = byId('hero-title');
    title.setAttribute('aria-label', `Hola, soy ${p.name}`);
    title.replaceChildren(
      h('span', { class: 'line line--hi', 'aria-hidden': 'true', style: '--n: 0' }, h('span', {}, 'Hola, soy')),
      ...words.map((word, i) => h('span', {
        class: `line line--name${i > 0 && i === words.length - 1 ? ' line--indent' : ''}`,
        'aria-hidden': 'true',
        style: `--n: ${i + 1}`
      }, h('span', {}, word))));
    byId('hero-lead').textContent = p.lead;
    byId('hero-role-wrap').setAttribute('aria-label', p.roles.join(', '));
    byId('hero-socials').replaceChildren(...socialLinks());
    byId('footer-copy').textContent = `© ${new Date().getFullYear()} ${p.name}`;

    // Sin PDF cargado en data.js el botón no se muestra; aparece solo al completar profile.cv.
    const cv = byId('cv-btn');
    if (p.cv) {
      cv.href = p.cv;
      cv.setAttribute('download', '');
    } else {
      cv.hidden = true;
    }
  }

  function renderPlayerCard() {
    const p = data.profile;
    byId('player-card').replaceChildren(
      h('div', { class: 'player-card__bar' },
        h('span', { class: 'player-card__label' }, 'Ficha de jugador'),
        p.status ? h('p', { class: 'status' }, h('span', { class: 'status__dot', 'aria-hidden': 'true' }), p.status) : null,
        h('span', { class: 'player-card__badge' }, 'P1')),
      h('div', { class: 'player-card__body' },
        h('div', { class: 'player-card__head' },
          photoOrInitials('avatar'),
          h('div', {},
            h('p', { class: 'player-card__name' }, p.name),
            p.location ? h('p', { class: 'player-card__place' }, icon('pin'), p.location) : null)),
        h('dl', { class: 'stats' },
          data.card.map(([label, value]) => h('div', { class: 'stats__row' }, h('dt', {}, label), h('dd', {}, value)))))
    );
    if (canTilt) addTilt(byId('player-card'), { max: 6, depth: 10 });
  }

  function cover(project, src) {
    if (src) return h('img', { src, alt: `Captura de ${project.title}`, loading: 'lazy' });
    return h('div', { class: 'ph', style: `--c: ${project.color || '#7fb4f2'}` },
      staticWaves('var(--c)'),
      h('span', {}, project.title));
  }

  function matchesFilter(project) {
    return state.filter === 'Todos' || project.tags.includes(state.filter);
  }

  function renderFilters() {
    const counts = new Map();
    data.projects.forEach(p => p.tags.forEach(t => counts.set(t, (counts.get(t) || 0) + 1)));
    const tags = (data.filters || [...counts]
      .filter(([, n]) => n < data.projects.length)
      .sort((a, b) => b[1] - a[1])
      .map(([t]) => t))
      .filter(t => counts.has(t));

    const wrap = byId('filters');
    if (!tags.length) {
      wrap.remove();
      return;
    }
    wrap.replaceChildren(...['Todos', ...tags].map(tag =>
      h('button', {
        class: 'chip',
        type: 'button',
        'aria-pressed': tag === state.filter ? 'true' : 'false',
        onclick: () => setFilter(tag)
      }, tag)
    ));
  }

  function setFilter(tag) {
    state.filter = tag;
    byId('filters').querySelectorAll('.chip').forEach(chip =>
      chip.setAttribute('aria-pressed', chip.textContent === tag ? 'true' : 'false'));
    byId('cards').querySelectorAll('.card').forEach(card => {
      const show = matchesFilter(data.projects[card.dataset.index]);
      card.hidden = !show;
      if (show) replay(card, 'pop');
    });
  }

  function replay(node, className) {
    node.classList.remove(className);
    void node.offsetWidth;
    node.classList.add(className);
  }

  function renderCards(containerId, collection) {
    const wip = collection === 'inProgress';
    byId(containerId).replaceChildren(...data[collection].map((project, index) => {
      const card = h('article', { class: 'card reveal', 'data-index': index, style: `--i: ${index % (wip ? 4 : 3)}` },
        h('span', { class: 'card__glare', 'aria-hidden': 'true' }),
        h('div', { class: 'cover' },
          cover(project, project.cover || project.images[0]),
          wip ? h('span', { class: 'cover__badge' },
            h('span', { class: 'status__dot status__dot--wip', 'aria-hidden': 'true' }), project.status) : null),
        h('div', { class: 'card__body' },
          h('h3', { class: 'card__title' },
            h('button', { class: 'card__open', type: 'button', onclick: () => openModal(collection, index) }, project.title)),
          project.context ? h('p', { class: 'meta' }, project.context) : null,
          h('p', { class: 'card__tagline' }, project.tagline),
          h('ul', { class: 'genre' }, project.tags.map(t => h('li', {}, t))),
          h('span', { class: 'card__more', 'aria-hidden': 'true' }, 'Ver proyecto', icon('arrow'))));
      if (canTilt) addTilt(card, { max: wip ? 7 : 5, depth: 18 });
      return card;
    }));
  }

  function renderInProgress() {
    if (!data.inProgress?.length) {
      byId('wip-wrap').remove();
      return;
    }
    renderCards('wip', 'inProgress');
  }

  function createTabs(rootId, items) {
    const container = byId(rootId);
    const list = h('div', { class: 'tabs__list', role: 'tablist' });
    const indicator = h('span', { class: 'tabs__indicator', 'aria-hidden': 'true' });
    const tabs = [];
    const panels = [];

    items.forEach((item, i) => {
      const id = `${rootId}-${i}`;
      tabs.push(h('button', {
        class: 'tabs__tab',
        type: 'button',
        role: 'tab',
        id: `${id}-tab`,
        'aria-controls': `${id}-panel`,
        'aria-selected': i === 0 ? 'true' : 'false',
        tabindex: i === 0 ? '0' : '-1',
        onclick: () => select(i)
      }, item.label));
      panels.push(h('div', {
        class: 'tabs__panel',
        role: 'tabpanel',
        id: `${id}-panel`,
        'aria-labelledby': `${id}-tab`,
        tabindex: '0',
        hidden: i !== 0
      }, item.content));
    });

    list.append(...tabs, indicator);
    container.replaceChildren(list, h('div', { class: 'tabs__panels' }, panels));

    function moveIndicator() {
      const active = tabs.find(t => t.getAttribute('aria-selected') === 'true');
      indicator.style.width = `${active.offsetWidth}px`;
      indicator.style.transform = `translate(${active.offsetLeft}px, ${active.offsetTop + active.offsetHeight - 2}px)`;
    }

    function select(i, focus = false) {
      tabs.forEach((tab, j) => {
        tab.setAttribute('aria-selected', j === i ? 'true' : 'false');
        tab.tabIndex = j === i ? 0 : -1;
        panels[j].hidden = j !== i;
      });
      replay(panels[i], 'pop');
      if (focus) tabs[i].focus();
      tabs[i].scrollIntoView({ block: 'nearest', inline: 'nearest' });
      moveIndicator();
    }

    list.addEventListener('keydown', e => {
      const i = tabs.indexOf(document.activeElement);
      if (i < 0) return;
      const moves = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 };
      if (!(e.key in moves)) return;
      e.preventDefault();
      select((moves[e.key] + tabs.length) % tabs.length, true);
    });

    new ResizeObserver(moveIndicator).observe(list);
    document.fonts?.ready.then(moveIndicator);
    moveIndicator();
  }

  function renderSkills() {
    createTabs('skills-tabs', data.skills.map(group => ({
      label: group.category,
      content: h('div', { class: 'skills' }, group.items.map((skill, n) =>
        h('div', { class: 'skill', style: `--n: ${n}` },
          h('span', { class: 'skill__name' }, skill.name),
          skill.detail ? h('span', { class: 'skill__detail' }, skill.detail) : null)))
    })));
  }

  function timeline(items) {
    return h('ol', { class: 'timeline' }, items.map(item =>
      h('li', { class: 'timeline__item' },
        h('h3', {}, item.title),
        h('p', { class: 'timeline__place' },
          item.place,
          item.place && item.period ? ' · ' : null,
          item.period ? h('span', { class: 'timeline__period' }, item.period) : null),
        item.detail ? h('p', { class: 'timeline__detail' }, item.detail) : null)));
  }

  function renderPath() {
    const groups = [['Formación', data.education], ['Experiencia', data.experience]]
      .filter(([, items]) => items?.length);
    byId('path-title').textContent = groups.length > 1 ? 'Formación y experiencia' : groups[0][0];
    if (groups.length === 1) {
      byId('path-tabs').replaceChildren(timeline(groups[0][1]));
      return;
    }
    createTabs('path-tabs', groups.map(([label, items]) => ({ label, content: timeline(items) })));
  }

  function renderAbout() {
    const a = data.about;
    const blocks = [['Ahora aprendiendo', a.learning], ['Idiomas', a.languages], ['Fuera del código', a.hobbies]]
      .filter(([, list]) => list?.length);
    byId('about').replaceChildren(
      h('div', { class: 'reveal' }, photoOrInitials('about__photo')),
      h('div', { class: 'about__text' },
        a.paragraphs.map((text, i) => h('p', { class: 'reveal', style: `--i: ${i}` }, text)),
        blocks.length ? h('div', { class: 'about__blocks' }, blocks.map(([title, list], i) =>
          h('div', { class: 'about__block reveal', style: `--i: ${i}` },
            h('h3', {}, title),
            h('ul', { class: 'tags' }, list.map(x => h('li', {}, x)))))) : null)
    );
  }

  function renderContact() {
    const { email } = data.profile;
    byId('email-text').textContent = email;
    byId('mailto-link').href = `mailto:${email}`;
    byId('contact-socials').replaceChildren(...socialLinks());
    byId('email-btn').addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(email);
        toast('Email copiado');
      } catch {
        location.href = `mailto:${email}`;
      }
    });
  }

  const modal = byId('modal');
  const modalContent = byId('modal-content');

  function visibleIndexes() {
    const list = data[state.collection];
    return list.map((_, i) => i).filter(i => state.collection !== 'projects' || matchesFilter(list[i]));
  }

  function step(direction) {
    const list = visibleIndexes();
    const pos = list.indexOf(state.current);
    openModal(state.collection, list[(pos + direction + list.length) % list.length]);
  }

  function videoFacade(project) {
    const button = h('button', { class: 'video-facade', type: 'button', 'aria-label': `Reproducir el video de ${project.title}` },
      h('img', { src: videoPoster(project), alt: '' }),
      h('span', { class: 'video-facade__play' }, icon('playFill')));
    button.addEventListener('click', () => button.replaceWith(isVideoFile(project.video)
      ? h('video', {
        src: project.video,
        poster: videoPoster(project),
        controls: true,
        autoplay: true,
        playsinline: true,
        'aria-label': `Video de ${project.title}`
      })
      : h('iframe', {
        src: `https://www.youtube-nocookie.com/embed/${project.video}?autoplay=1&rel=0`,
        title: `Video de ${project.title}`,
        allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        allowfullscreen: true
      })));
    return button;
  }

  function gallery(project) {
    const media = [
      ...(project.video ? [{ type: 'video' }] : []),
      ...project.images.map(src => ({ type: 'image', src }))
    ];
    const stage = h('div', { class: 'gallery__stage cover' });
    const show = item => stage.replaceChildren(
      !item ? cover(project)
        : item.type === 'video' ? videoFacade(project)
          : h('img', { src: item.src, alt: `Captura de ${project.title}` })
    );
    show(media[0]);

    if (media.length < 2) return h('div', { class: 'gallery' }, stage);

    const thumbs = h('div', { class: 'gallery__thumbs' }, media.map((item, i) =>
      h('button', {
        class: 'thumb',
        type: 'button',
        'aria-label': item.type === 'video' ? 'Ver video' : `Ver imagen ${i + 1}`,
        'aria-current': i === 0 ? 'true' : 'false',
        onclick: e => {
          show(item);
          thumbs.querySelectorAll('.thumb').forEach(t =>
            t.setAttribute('aria-current', t === e.currentTarget ? 'true' : 'false'));
        }
      }, item.type === 'video'
        ? h('span', { class: 'thumb__video' }, h('img', { src: videoPoster(project), alt: '' }), icon('playFill'))
        : h('img', { src: item.src, alt: '' }))
    ));
    return h('div', { class: 'gallery' }, stage, thumbs);
  }

  function fillModal(project) {
    const links = project.links || {};
    const onItch = links.play?.includes('itch.io');
    const actions = [
      links.play && h('a', { class: 'btn btn--primary', href: links.play, target: '_blank', rel: 'noopener' },
        icon(onItch ? 'external' : 'play'), onItch ? 'Ver en itch.io' : 'Jugar'),
      links.code && h('a', { class: 'btn btn--ghost', href: links.code, target: '_blank', rel: 'noopener' },
        icon('code'), 'Ver código')
    ].filter(Boolean);

    const facts = [['Estado', project.status], ['Equipo', project.team], ['Mi rol', project.role]]
      .filter(([, value]) => value);
    const highlightsTitle = state.collection === 'inProgress' ? 'Lo que ya funciona' : 'Lo más destacado';

    const collection = data[state.collection];
    const list = visibleIndexes();
    const pos = list.indexOf(state.current);
    const prev = collection[list[(pos - 1 + list.length) % list.length]];
    const next = collection[list[(pos + 1) % list.length]];

    modalContent.replaceChildren(
      gallery(project),
      h('div', { class: 'modal__body' },
        h('div', { class: 'modal__main' },
          h('h3', { class: 'modal__title', id: 'modal-title' }, project.title),
          project.context ? h('p', { class: 'modal__context' }, project.context) : null,
          h('p', { class: 'modal__tagline' }, project.tagline),
          h('p', { class: 'modal__desc' }, project.description),
          project.highlights?.length ? h('h4', {}, highlightsTitle) : null,
          project.highlights?.length ? h('ul', { class: 'checklist' }, project.highlights.map(x => h('li', {}, x))) : null),
        h('aside', { class: 'modal__side' },
          h('dl', { class: 'facts' },
            facts.map(([label, value]) => h('div', {}, h('dt', {}, label), h('dd', {}, value))),
            h('div', {}, h('dt', {}, 'Tecnologías'), h('dd', {}, h('ul', { class: 'tags' }, project.tags.map(t => h('li', {}, t)))))),
          actions.length ? h('div', { class: 'modal__actions' }, actions) : null)),
      list.length > 1 ? h('nav', { class: 'modal__nav', 'aria-label': 'Otros proyectos' },
        h('button', { class: 'modal__step', type: 'button', onclick: () => step(-1) },
          icon('left'), h('span', {}, h('small', {}, 'Anterior'), prev.title)),
        h('button', { class: 'modal__step modal__step--next', type: 'button', onclick: () => step(1) },
          h('span', {}, h('small', {}, 'Siguiente'), next.title), icon('right'))) : null
    );
  }

  function openModal(collection, index) {
    state.collection = collection;
    state.current = index;
    fillModal(data[collection][index]);
    if (!modal.open) modal.showModal();
    else replay(modalContent, 'pop');
    modal.scrollTop = 0;
  }

  function closeModal() {
    if (!modal.open || modal.classList.contains('is-closing')) return;
    if (reduceMotion) {
      modal.close();
      return;
    }
    modal.classList.add('is-closing');
    setTimeout(() => {
      modal.classList.remove('is-closing');
      modal.close();
    }, 200);
  }

  function setupModal() {
    byId('modal-close').addEventListener('click', closeModal);
    modal.addEventListener('cancel', e => {
      e.preventDefault();
      closeModal();
    });
    modal.addEventListener('click', e => {
      if (e.target === modal) closeModal();
    });
    modal.addEventListener('close', () => modalContent.replaceChildren());
    modal.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    });
  }

  function setupReveal() {
    const items = document.querySelectorAll('.reveal');
    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach(item => item.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(item => observer.observe(item));
  }

  function setupNav() {
    const header = byId('header');
    const nav = byId('nav');
    const toggle = byId('menu-toggle');
    const links = [...nav.querySelectorAll('a')];

    const onScroll = () => header.classList.toggle('is-scrolled', scrollY > 8);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => link.classList.toggle('is-active', link.hash === `#${entry.target.id}`));
    }), { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));

    const setOpen = open => {
      header.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    };
    toggle.addEventListener('click', () => setOpen(!header.classList.contains('menu-open')));
    nav.addEventListener('click', e => {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  function setupTyping() {
    const target = byId('hero-role');
    const roles = data.profile.roles;
    if (reduceMotion || roles.length < 2) {
      target.textContent = roles[0];
      return { freeze() {} };
    }
    let r = 0;
    let c = 0;
    let deleting = false;
    let frozen = false;
    let timer = 0;
    const tick = () => {
      const word = roles[r];
      c += deleting ? -1 : 1;
      target.textContent = word.slice(0, c);
      let delay = deleting ? 35 : 75;
      if (!deleting && c === word.length) {
        deleting = true;
        delay = 1900;
      } else if (deleting && c === 0) {
        deleting = false;
        r = (r + 1) % roles.length;
        delay = 400;
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 600);

    // Mientras la intro se recorre con el scroll, el rol queda escrito completo (nunca a medias).
    return {
      freeze(on) {
        if (on === frozen) return;
        frozen = on;
        clearTimeout(timer);
        if (on) {
          target.textContent = roles[r];
          c = roles[r].length;
          deleting = true;
        } else {
          timer = setTimeout(tick, 1900);
        }
      }
    };
  }

  // El mar de la portada, dibujado en canvas para que las líneas sigan nítidas en perspectiva.
  // Es un plano más alto que la pantalla: de frente se ve su mitad de abajo (como en itch.io)
  // y al inclinarse (tilt 0 → 1) la mitad de arriba se vuelve el horizonte.
  function createSea(canvas, area) {
    const ctx = canvas.getContext('2d');
    const K = (Math.PI * 2) / WAVE_PERIOD;
    const layers = [
      { rows: 72, amp: 30, phase: 0, step: 0.1, speed: 0.0144, alpha: t => (t < 0.47 ? 0.26 + 0.3 * (t / 0.47) : 0.56 - 0.44 * ((t - 0.47) / 0.53)) },
      { rows: 30, amp: 26, phase: 2.2, step: 0.08, speed: -0.009, alpha: () => 0.13 }
    ];
    const light = { x: 0, y: 0, tx: 0, ty: 0, on: 0, target: 0 };
    let w = 0;
    let h = 0;
    let dpr = 1;
    let tilt = 0;
    let time = 0;
    let last = 0;
    let frame = 0;
    let visible = true;

    function resize() {
      const r = canvas.getBoundingClientRect();
      dpr = Math.min(devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      draw();
    }

    function draw() {
      if (!w) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const theta = (tilt * 62 * Math.PI) / 180;
      const cos = Math.cos(theta);
      const sin = Math.sin(theta);
      const depth = 1100;
      const vx = w / 2;
      const vy = h * 0.42;
      const planeH = h * 1.9;
      // Plano bien ancho: en el horizonte se achica a menos de la mitad y no debe verse su borde
      const x0 = -w * 0.95;
      const samples = 170;
      const dx = (w * 2.9) / samples;

      let glow = null;
      if (light.on > 0.01) {
        const halo = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 440);
        halo.addColorStop(0, `rgba(127, 180, 242, ${(0.15 * light.on).toFixed(3)})`);
        halo.addColorStop(1, 'rgba(127, 180, 242, 0)');
        ctx.fillStyle = halo;
        ctx.fillRect(0, 0, w, h);
        glow = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 300);
        glow.addColorStop(0, `rgba(200, 225, 252, ${(0.95 * light.on).toFixed(3)})`);
        glow.addColorStop(0.45, `rgba(127, 180, 242, ${(0.4 * light.on).toFixed(3)})`);
        glow.addColorStop(1, 'rgba(127, 180, 242, 0)');
      }

      ctx.lineWidth = 1;
      for (const layer of layers) {
        const gap = planeH / layer.rows;
        for (let i = 0; i < layer.rows; i++) {
          const v0 = (i + 0.5) * gap;
          const s0 = depth / (depth + v0 * sin);
          if (vy + (h - v0 * cos - vy) * s0 < -60) continue;
          const amp = layer.amp * (0.8 + 0.2 * Math.sin(i * 0.7));
          const phase = layer.phase + (layer.rows - i) * layer.step;
          ctx.beginPath();
          for (let j = 0; j <= samples; j++) {
            const X = x0 + j * dx;
            const t = (X + time * layer.speed) * K;
            const v = v0 + amp * Math.sin(t + phase) + amp * 0.35 * Math.sin(2 * t + phase * 1.7);
            const s = depth / (depth + v * sin);
            const sx = vx + (X - vx) * s;
            const sy = vy + (h - v * cos - vy) * s;
            if (j === 0) ctx.moveTo(sx, sy);
            else ctx.lineTo(sx, sy);
          }
          const fog = s0 ** 1.3 * (1 + tilt * 0.5);
          ctx.strokeStyle = `rgba(127, 180, 242, ${(layer.alpha(1 - i / (layer.rows - 1)) * fog).toFixed(3)})`;
          ctx.stroke();
          if (glow) {
            ctx.strokeStyle = glow;
            ctx.stroke();
          }
        }
      }
    }

    function loop(now) {
      const dt = Math.min(64, now - (last || now));
      last = now;
      time += dt;
      light.x += (light.tx - light.x) * 0.1;
      light.y += (light.ty - light.y) * 0.1;
      light.on += (light.target - light.on) * 0.08;
      draw();
      frame = requestAnimationFrame(loop);
    }

    function sync() {
      const run = !reduceMotion && visible && !document.hidden;
      if (run && !frame) {
        last = 0;
        frame = requestAnimationFrame(loop);
      } else if (!run && frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    }

    new ResizeObserver(resize).observe(canvas);
    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    }).observe(canvas);
    document.addEventListener('visibilitychange', sync);

    if (canTilt) {
      area.addEventListener('pointermove', e => {
        const r = canvas.getBoundingClientRect();
        light.tx = e.clientX - r.left;
        light.ty = e.clientY - r.top;
        if (light.on < 0.02) {
          light.x = light.tx;
          light.y = light.ty;
        }
        light.target = 1;
      });
      area.addEventListener('pointerleave', () => { light.target = 0; });
    }

    resize();
    sync();
    return {
      setTilt(value) {
        tilt = value;
        if (!frame) draw();
      }
    };
  }

  function setupWaves() {
    renderWaves(byId('contact-waves'), [
      { lines: 10, top: 250, gap: 34, amp: 26, phase: 4, step: 0.09, height: 600, speed: 140, alpha: t => 0.1 + 0.12 * t },
      { lines: 16, top: 270, gap: 22, amp: 30, phase: 1.4, step: 0.12, height: 600, speed: 95, alpha: t => 0.12 + 0.4 * t }
    ]);

    // Las capas solo se mueven mientras se ven: fuera de pantalla no gastan nada.
    const observer = new IntersectionObserver(entries => entries.forEach(entry =>
      entry.target.classList.toggle('is-offscreen', !entry.isIntersecting)));
    document.querySelectorAll('.intro, .contact-section').forEach(section => observer.observe(section));

    setupLight(document.querySelector('.contact-section'));
  }

  // La intro queda fija mientras el scroll la recorre: el mar se inclina hacia el horizonte,
  // el mate se va flotando y la ficha de jugador sube desde el agua.
  function setupIntro(typing) {
    const intro = byId('inicio');
    const sea = createSea(byId('hero-sea'), intro.querySelector('.intro__stage'));
    const copy = intro.querySelector('.intro__copy');
    const extras = intro.querySelector('.intro__extras');
    const mate = intro.querySelector('.intro__mate');
    const deal = intro.querySelector('.intro__deal');
    const start = intro.querySelector('.intro__start');
    const cue = intro.querySelector('.intro__cue');
    const card = byId('player-card');
    const rows = [...card.querySelectorAll('.stats__row')];
    const parts = [copy, extras, mate, deal, start, cue];
    const wide = matchMedia('(min-width: 900px) and (min-height: 620px)');
    let pinned = false;
    let frame = 0;

    intro.querySelector('[data-mate]').classList.add('is-drawn');

    const clamp = v => Math.min(1, Math.max(0, v));
    const span = (p, from, to) => clamp((p - from) / (to - from));
    const easeOut = t => 1 - (1 - t) ** 3;
    const easeInOut = t => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2);
    const fade = (node, opacity) => {
      node.style.opacity = opacity.toFixed(3);
      node.style.visibility = opacity < 0.02 ? 'hidden' : 'visible';
    };

    function render() {
      frame = 0;
      const p = clamp(-intro.getBoundingClientRect().top / (intro.offsetHeight - innerHeight));

      sea.setTilt(easeInOut(span(p, 0, 0.62)));

      typing.freeze(p > 0.02);

      // El título le pasa la posta a la ficha: sube y se apaga mientras ella llega.
      // Solo opacidad (sin visibility) para que el h1 nunca salga del árbol de accesibilidad.
      const lift = easeOut(span(p, 0, 0.45));
      copy.style.transform = `translate3d(0, ${(-lift * 10).toFixed(2)}vh, 0) scale(${(1 - lift * 0.12).toFixed(3)})`;
      copy.style.opacity = (1 - span(p, 0.22, 0.42)).toFixed(3);

      // El texto de abajo sube y se va mientras la ficha recién asoma desde abajo: no se pisan,
      // y el botón sigue a mano hasta que aparece el aviso "Ver proyectos" de la ficha.
      const out = span(p, 0.16, 0.34);
      extras.style.transform = `translate3d(0, ${(-out * 90).toFixed(1)}px, 0)`;
      fade(extras, 1 - out);

      // El mate se queda: baja a flotar sobre el mar y acompaña a la ficha.
      const settle = easeInOut(span(p, 0.1, 0.7));
      mate.style.transform = `translate3d(${(settle * 2).toFixed(2)}vw, ${(settle * 2).toFixed(2)}vh, 0) scale(${(1 - settle * 0.22).toFixed(3)})`;

      const dealt = easeOut(span(p, 0.28, 0.7));
      deal.style.transform = `translate3d(0, ${((1 - dealt) * 50).toFixed(2)}vh, 0) perspective(1200px) rotateX(${((1 - dealt) * 40).toFixed(2)}deg)`;
      fade(deal, span(p, 0.32, 0.46));
      rows.forEach((row, i) => row.classList.toggle('is-on', p > 0.5 + i * 0.05));

      fade(start, span(p, 0.24, 0.32));
      fade(cue, 1 - span(p, 0, 0.06));
    }
    const request = () => { if (!frame) frame = requestAnimationFrame(render); };

    // En pantallas chicas la intro no queda fija, pero el mar igual se inclina al bajar.
    const stage = intro.querySelector('.intro__stage');
    const tiltOnly = () => {
      if (pinned || reduceMotion) return;
      sea.setTilt(easeInOut(clamp(scrollY / (stage.offsetHeight * 0.9))) * 0.8);
    };
    addEventListener('scroll', () => requestAnimationFrame(tiltOnly), { passive: true });

    function apply() {
      const next = wide.matches && !reduceMotion;
      if (next === pinned) {
        if (pinned) request();
        return;
      }
      pinned = next;
      intro.classList.toggle('is-pinned', pinned);
      if (pinned) {
        card.classList.add('is-visible');
        addEventListener('scroll', request, { passive: true });
        addEventListener('resize', request);
        request();
      } else {
        removeEventListener('scroll', request);
        removeEventListener('resize', request);
        sea.setTilt(0);
        typing.freeze(false);
        parts.forEach(node => {
          node.style.transform = '';
          node.style.opacity = '';
          node.style.visibility = '';
        });
        rows.forEach(row => row.classList.add('is-on'));
      }
    }

    rows.forEach(row => row.classList.add('is-on'));
    wide.addEventListener('change', apply);
    apply();
  }

  let toastTimer = 0;
  function toast(message) {
    const node = byId('toast');
    node.textContent = message;
    node.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => node.classList.remove('is-on'), 2400);
  }

  function celebrate() {
    toast('Código secreto: +30 vidas');
    if (reduceMotion) return;
    const colors = ['var(--accent)', 'var(--gold)', 'var(--text)', 'var(--green)', '#ff8f7a'];
    const burst = h('div', { class: 'burst', 'aria-hidden': 'true' });
    for (let i = 0; i < 56; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = 120 + Math.random() * 280;
      burst.append(h('span', {
        style: `--x: ${Math.cos(angle) * distance}px; --y: ${Math.sin(angle) * distance}px; --c: ${colors[i % colors.length]}; --d: ${Math.random() * 140}ms`
      }));
    }
    document.body.append(burst);
    setTimeout(() => burst.remove(), 1500);
  }

  function setupKonami() {
    const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let pos = 0;
    document.addEventListener('keydown', e => {
      if (modal.open) return;
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      pos = key === code[pos] ? pos + 1 : key === code[0] ? 1 : 0;
      if (pos === code.length) {
        pos = 0;
        celebrate();
      }
    });
  }

  renderProfile();
  renderPlayerCard();
  renderFilters();
  renderCards('cards', 'projects');
  renderInProgress();
  renderSkills();
  renderPath();
  renderAbout();
  renderContact();
  renderMates();
  setupWaves();
  setupIntro(setupTyping());
  setupModal();
  setupReveal();
  setupNav();
  setupKonami();
})();
