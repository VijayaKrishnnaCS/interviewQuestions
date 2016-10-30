
var arrayList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Question 1
var question1 = document.getElementById('main-content');

function filterArray (arrayList) {

}

//Question 2
var question2 = document.getElementsByTagName( 'a' );

for ( var i = 0; i < question2.length; i++ ) {
    (function( lockedInIndex ){
        question2[ i ].addEventListener( 'click', function(e){
            e.preventDefault();
            alert( 'I have solved ' + lockedInIndex );
        }, 'false' );
    })( i );
}

//Question 3
function question3(name) {
    var name = 'Ryan';
    return ('Hello, my name is ' + name + '. Would you like to play?')
}

function filterArray(list) {

}

typeof question3();


function fibonacci(num) {
  return Array.apply(null, Array(num)).reduce(function(acc, curr, idx) {
    return idx > 2 ? acc.concat(acc[idx-1] + acc[idx-2]) : acc;
  }, [0, 1, 1]);
}

console.log(fibonacci(10));

function reverse(str) {
  var output = '';
  for (var i = str.length - 1; i >= 0; i--)
    output += str[i];
  return output;
};

console.log(reverse('Hello World'));
