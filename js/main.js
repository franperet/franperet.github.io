(() => {
  const data = PORTFOLIO;
  const root = document.documentElement;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

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
      p.photo ? h('img', { src: p.photo, alt: `Foto de ${p.name}` }) : h('span', {}, p.initials));
  }

  function renderProfile() {
    const p = data.profile;
    byId('brand-mark').textContent = p.initials;
    byId('brand-name').textContent = p.name;
    byId('hero-name').textContent = p.name;
    byId('hero-lead').textContent = p.lead;
    byId('hero-role-wrap').setAttribute('aria-label', p.roles.join(', '));
    byId('hero-socials').replaceChildren(...socialLinks());
    byId('footer-copy').textContent = `© ${new Date().getFullYear()} ${p.name}`;

    const cv = byId('cv-btn');
    if (p.cv) {
      cv.href = p.cv;
      cv.setAttribute('download', '');
    } else {
      cv.setAttribute('aria-disabled', 'true');
      cv.title = 'Falta agregar el PDF del CV';
    }
  }

  function renderPlayerCard() {
    const p = data.profile;
    byId('player-card').replaceChildren(
      h('div', { class: 'player-card__top' },
        h('span', { class: 'eyebrow' }, 'Ficha de jugador'),
        h('span', { class: 'player-card__badge' }, 'P1')),
      h('div', { class: 'player-card__head' },
        photoOrInitials('avatar'),
        h('div', {},
          h('p', { class: 'player-card__name' }, p.name),
          p.location ? h('p', { class: 'player-card__place' }, icon('pin'), p.location) : null)),
      h('dl', { class: 'stats' },
        data.card.map(([label, value]) => h('div', { class: 'stats__row' }, h('dt', {}, label), h('dd', {}, value)))),
      p.status ? h('p', { class: 'status' }, h('span', { class: 'status__dot', 'aria-hidden': 'true' }), p.status) : null
    );
  }

  function cover(project, src) {
    if (src) return h('img', { src, alt: `Captura de ${project.title}`, loading: 'lazy' });
    return h('div', { class: 'ph', style: `--c: ${project.color || '#b8f53d'}` }, h('span', {}, project.title));
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
    centerLastCard();
  }

  function centerLastCard() {
    const cards = [...byId('cards').querySelectorAll('.card')];
    const visible = cards.filter(card => !card.hidden);
    cards.forEach(card =>
      card.classList.toggle('card--center', visible.length % 2 === 1 && card === visible.at(-1)));
  }

  function replay(node, className) {
    node.classList.remove(className);
    void node.offsetWidth;
    node.classList.add(className);
  }

  function addTilt(node, max) {
    node.addEventListener('pointermove', e => {
      const r = node.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      node.style.setProperty('--ry', `${(x - 0.5) * max * 2}deg`);
      node.style.setProperty('--rx', `${(0.5 - y) * max * 2}deg`);
      node.style.setProperty('--gx', `${x * 100}%`);
      node.style.setProperty('--gy', `${y * 100}%`);
    });
    node.addEventListener('pointerleave', () => {
      node.style.setProperty('--rx', '0deg');
      node.style.setProperty('--ry', '0deg');
    });
  }

  function renderCards(containerId, collection) {
    const wip = collection === 'inProgress';
    byId(containerId).replaceChildren(...data[collection].map((project, index) => {
      const card = h('article', { class: 'card reveal', 'data-index': index, style: `--i: ${index % (wip ? 4 : 2)}` },
        h('div', { class: 'cover' },
          cover(project, project.cover || project.images[0]),
          wip ? h('span', { class: 'cover__badge' },
            h('span', { class: 'status__dot status__dot--wip', 'aria-hidden': 'true' }), project.status) : null),
        h('div', { class: 'card__body' },
          project.context ? h('p', { class: 'meta' }, project.context) : null,
          h('h3', { class: 'card__title' },
            h('button', { class: 'card__open', type: 'button', onclick: () => openModal(collection, index) }, project.title)),
          h('p', { class: 'card__tagline' }, project.tagline),
          h('ul', { class: 'tags' }, project.tags.map(t => h('li', {}, t))),
          h('span', { class: 'card__more', 'aria-hidden': 'true' }, 'Ver proyecto', icon('arrow')))
      );
      if (finePointer && !reduceMotion) addTilt(card, 3);
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
      indicator.style.transform = `translateX(${active.offsetLeft}px)`;
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
      content: h('div', { class: 'skills' }, group.items.map(skill =>
        h('div', { class: 'skill' },
          h('span', { class: 'skill__name' }, skill.name),
          skill.detail ? h('span', { class: 'skill__detail' }, skill.detail) : null)))
    })));
  }

  function timeline(items) {
    return h('ol', { class: 'timeline' }, items.map(item =>
      h('li', { class: 'timeline__item' },
        h('span', { class: 'timeline__period' }, item.period),
        h('h3', {}, item.title),
        item.place ? h('p', { class: 'timeline__place' }, item.place) : null,
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
          project.context ? h('p', { class: 'eyebrow' }, project.context) : null,
          h('h3', { class: 'modal__title', id: 'modal-title' }, project.title),
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
      return;
    }
    let r = 0;
    let c = 0;
    let deleting = false;
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
      setTimeout(tick, delay);
    };
    setTimeout(tick, 600);
  }

  function setupHeroGlow() {
    if (!finePointer || reduceMotion) return;
    const hero = document.querySelector('.hero');
    let frame = 0;
    hero.addEventListener('pointermove', e => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = hero.getBoundingClientRect();
        hero.style.setProperty('--mx', `${e.clientX - r.left}px`);
        hero.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    });
    addTilt(byId('player-card'), 6);
  }

  function setupTheme() {
    const button = byId('theme-toggle');
    const meta = document.querySelector('meta[name="theme-color"]');
    const paintMeta = () => { meta.content = root.dataset.theme === 'light' ? '#f7f8fa' : '#0b0d12'; };
    paintMeta();

    button.addEventListener('click', () => {
      const next = root.dataset.theme === 'light' ? 'dark' : 'light';
      const apply = () => {
        root.dataset.theme = next;
        paintMeta();
        try { localStorage.setItem('theme', next); } catch {}
      };
      if (!document.startViewTransition || reduceMotion) {
        apply();
        return;
      }
      const r = button.getBoundingClientRect();
      const x = r.left + r.width / 2;
      const y = r.top + r.height / 2;
      const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      document.startViewTransition(apply).ready.then(() => {
        root.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 550, easing: 'cubic-bezier(.4, 0, .2, 1)', pseudoElement: '::view-transition-new(root)' }
        );
      });
    });
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
    const colors = ['var(--accent)', '#ff5a5f', '#5ab0ff', '#ffd23f', '#c77dff'];
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
  centerLastCard();
  renderInProgress();
  renderSkills();
  renderPath();
  renderAbout();
  renderContact();
  setupModal();
  setupReveal();
  setupNav();
  setupTyping();
  setupHeroGlow();
  setupTheme();
  setupKonami();
})();
