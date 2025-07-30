fetch('content/projects.json')
  .then(res => res.json())
  .then(projects => {
    const list = document.querySelector('#projects');
    projects.forEach(p => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${p.url}">${p.name}</a> – ${p.description}`;
      list.appendChild(li);
    });
  });
