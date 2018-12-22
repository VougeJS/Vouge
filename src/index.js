function component() {
    let el = document.createElement('div');
    el.innerHTML = "Hello wevee";

    return el;
}

document.body.appendChild(component());

// const Vouge = {
//     install(Vue, options) {},
// };
//
// export default Vouge;
//
// // Automatic installation if Vue has been added to the global scope.
// if (typeof window !== 'undefined' && window.Vue) {
//     window.Vue.use(Vouge);
// }
