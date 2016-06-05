function fibIter2(n){
    var current = 0;
    var next =1 ;
    var i = 0;
    var swap;
    for (; i < n; i++) {
        swap = current;
        current = next;
        next = swap + next;
    }
    return current;
}
console.log('f(7)='+fibIter2(7));
module.exports = fibIter2;
