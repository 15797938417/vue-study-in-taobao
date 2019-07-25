// module.exports = function() {
//     console.log('我是bar模块')
// }

//ES6
export default function() {
    console.log('我是bar模块--ES6')
}
export var x = 'xxx'
export var y = 500
export function add(a, b) {
    return a + b
}