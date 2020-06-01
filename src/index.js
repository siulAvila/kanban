import './style.css';

window.allowDrop = (ev) => {
  ev.preventDefault();
};

window.drag = (ev) => {
  ev.dataTransfer.setData('text', ev.target.id);
};

window.drop = (ev) => {
  ev.preventDefault();
  const data = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(data));
};
