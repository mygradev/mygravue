import * as Components from './components';
import './components/styles/mygracss.min.css';

const MgVue = {
  install(Vue) {
    Object.values(Components).forEach((component) => {
      Vue.use(component);
    });

    // eslint-disable-next-line
    Vue.prototype.$mg = Components;
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MgVue);
}

export default MgVue;
