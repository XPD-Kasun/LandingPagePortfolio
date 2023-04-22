/**
 * Author: XPDKasun
 * Description: This plugin will add perspective class to the system,
 * so we can use <div className="perspective-800"></div>
 */

const plugin = require("tailwindcss/plugin");

const createPerspectives = (value) => {
       let perspectives = {};
       for (let i = 1; i <= value / 100; i++) {
              let v = i * 100;
              perspectives[v] = v.toString();
       }
       console.log(perspectives);
       return perspectives;
};

const perspectivePlugin = plugin(({ matchUtilities, theme }) => {
       matchUtilities({
              perspective: (value) => {
                     console.log(theme, value)
                     return {
                            perspective: value + 'px'
                     };
              }
       }, { values: theme('perspective') })
}, {
       theme: {
              perspective: createPerspectives(1000)
       }
});

module.exports = perspectivePlugin;