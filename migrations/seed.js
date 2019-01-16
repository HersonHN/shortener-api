
const PouchDB = require('pouchdb-node');
const generator = require('../scripts/url-generator');

const db = new PouchDB(process.env.SHORTENER_CONNECTION_STRING);

function migrate(data) {
  data.forEach(row => {
    let short = generator.generateURL();
    let count = Math.ceil(Math.random() * 1000) + 100;

    db.put({ title: row.title, long: row.url, _id: short, short, count });
  })
}

migrate([
  { title: 'Herson Salinas', url: 'https://herson.hn' },
  { title: 'Google', url: 'https://google.com' },
  { title: 'YouTube', url: 'https://youtube.com' },
  { title: 'Facebook', url: 'https://facebook.com' },
  { title: 'Baidu', url: 'https://baidu.com' },
  { title: 'Wikipedia', url: 'https://wikipedia.org' },
  { title: 'Reddit', url: 'https://reddit.com' },
  { title: 'Yahoo!', url: 'https://yahoo.com' },
  { title: 'Tencent QQ', url: 'https://qq.com' },
  { title: 'Taobao', url: 'https://taobao.com' },
  { title: 'Amazon', url: 'https://amazon.com' },
  { title: 'Tmall', url: 'https://tmall.com' },
  { title: 'Twitter', url: 'https://twitter.com' },
  { title: 'Sohu', url: 'https://sohu.com' },
  { title: 'Instagram', url: 'https://instagram.com' },
  { title: 'VK', url: 'https://vk.com' },
  { title: 'Windows Live', url: 'https://live.com' },
  { title: 'Jingdong Mall', url: 'https://jd.com' },
  { title: 'Sina Corp', url: 'https://sina.com.cn' },
  { title: 'Sina Weibo', url: 'https://weibo.com' },
  { title: 'Yandex', url: 'https://yandex.ru' },
  { title: 'Haosou', url: 'https://360.cn' },
  { title: 'Tmall', url: 'https://list.tmall.com' },
  { title: 'Netflix', url: 'https://netflix.com' },
  { title: 'Pornhub', url: 'https://pornhub.com' },
  { title: 'Twitch', url: 'https://twitch.tv' },
  { title: 'LinkedIn', url: 'https://linkedin.com' },
  { title: 'Yahoo! Japan', url: 'https://yahoo.co.jp' },
  { title: 't.co', url: 'https://t.co' },
  { title: 'CSDN', url: 'https://csdn.net' },
  { title: 'Microsoft', url: 'https://microsoft.com' },
  { title: 'Bing', url: 'https://bing.com' },
  { title: 'Microsoft Office', url: 'https://office.com' },
  { title: 'eBay', url: 'https://ebay.com' },
  { title: 'Alipay', url: 'https://alipay.com' },
  { title: 'Mail.ru', url: 'https://mail.ru' },
  { title: 'Odnoklassniki', url: 'https://ok.ru' },
  { title: 'Tmall', url: 'https://pages.tmall.com' },
  { title: 'MSN', url: 'https://msn.com' },
  { title: 'WhatsApp', url: 'https://whatsapp.com' },
  { title: 'Spotify', url: 'https://spotify.com' },
  { title: 'Naver', url: 'https://Naver.com' },
  { title: 'Sogou', url: 'https://sogou.com' },
  { title: 'Samsung', url: 'https://samsung.com' },
  { title: 'AccuWeather', url: 'https://accuweather.com' },
  { title: 'Shenma', url: 'https://sm.cn' },
])