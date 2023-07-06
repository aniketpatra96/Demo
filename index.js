function getResult() {
    let lowerbound = document.getElementById('lowerbound').value
    let upperbound = document.getElementById('upperbound').value
    let arr=[]
    for(let i=lowerbound;i<=upperbound;i++){
        if(isPrime(i)){
            arr.push(i)
        }
    }
    document.getElementById('result').innerHTML=arr
}

function isPrime(x) {
    if (x === 0 || x === 1)
        return false
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
            return false
        }
    }
    return true
}