const url = require("url");

const myUrl = "https://www.flipkart.com/tyy/hry/~cs-y38q60wtaj/pr?sid=tyy%2Chry&collection-tab-name=A9+Plus+8-128+5G&sort=recency_desc&hpid=KMm7HT_6Wo_QOFcyHLgJmKp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTE5LDc0OSoiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJUQUJHVEY0RzNSUFVEVFZRIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiU2Ftc3VuZyBBOSBQbHVzIDVHIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D"

console.log(url.parse(myUrl));
console.log(url.parse(myUrl).protocol);
// console.log(url.parse(myUrl).host);
// console.log(url.parse(myUrl).query);
console.log(url.parse(myUrl, true).query);


const myurl = {
    protocol: 'https:',
    slashes: true,
    host: 'www.abs.com',
    pathname: '/product',
    query: {
        pid: 'KMm7HT_6Wo_QOFcyHLgJmKp7_Hsxr70nj65vMAAFKlc=',
        sort: 'recency_desc',
    }
}

console.log(url.format(myurl));


const path1 = 'https://www.abcd.com/products'
const path2 = './25'

console.log(url.resolve(path1,path2));
