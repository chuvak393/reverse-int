module.exports = function reverse (n) {
        n = Math.abs(n)
        let str = n + ''
        str = str.split('').reverse().join('')
        return (str)
}
