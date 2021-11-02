var test1 = require('test1');

console.log('fe',test1())





const axios = require('axioss');

function see(){
    axios.get('https://reactjs.org/docs/hooks-rules.html').then(function(da){
        console.log('da',da)
    }).catch(function(){
        console.log('fe')
    })
}
module.exports = see;