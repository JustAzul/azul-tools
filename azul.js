const Azul = require('./dist').default

process.nextTick(() => {
    const encoding = 'utf-8';
    const Graphic = fs.readFileSync('./Pattern.txt', { encoding });
    Azul.SetupPattern(Graphic);
})

module.exports = Azul;