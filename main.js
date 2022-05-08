import './style.css';

const state = {
  health: 100,
  subtractHeatlh: () => {
    console.log('test');
    setState(() => {
      if (state.health) {
        state.health = state.health - 10;
      }
    });
  },
};

const updateView = () => {
  document.querySelector('#app').innerHTML = `
  Health: ${state.health}
  ${state.health ? `<button class="hurt-btn">Hurt</button>` : ''}
`;

  document.querySelector('.hurt-btn').onclick = state.subtractHeatlh;
};

const setState = (callback) => {
  callback();
  updateView();
};

// start
updateView();
