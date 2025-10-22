import BookslistTestTaskResponseAllController from '../bookslist-test-task-response';


// Регулярное вырожение `[0-9ABCDEFabcdef]{6}`
//      указывает на шестизначное шестнадцатеричное число
function hslToHex(h/*: number*/, s/*: number*/, l/*: number*/)/*: `#[0-9ABCDEFabcdef]{6}`*/ {
  h = h % 360;
  s = Math.max(0, Math.min(100, s));
  l = Math.max(0, Math.min(100, l));
  
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs((h / 60) % 2 - 1));
  let m = l - c / 2;
  let r, g, b;

  if (h >= 0 && h < 60) {
    r = c; g = x; b = 0;
  } else if (h >= 60 && h < 120) {
    r = x; g = c; b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0; g = c; b = x;
  } else if (h >= 180 && h < 240) {
    r = 0; g = x; b = c;
  } else if (h >= 240 && h < 300) {
    r = x; g = 0; b = c;
  } else {
    r = c; g = 0; b = x;
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}
function getRandomSimilarColors()/*: [string, string]*/ {
  // Генерируем случайный тон (0-360 градусов)
  var baseHue = Math.floor(Math.random() * 360);
  // Случайная насыщенность в приятном диапазоне
  var saturation = Math.floor(Math.random() * 30) + 60; // 60-90%
  // Случайная яркость в приятном диапазоне
  var lightness = Math.floor(Math.random() * 20) + 40; // 40-60%
  
  // Первый цвет - основной
  var color1 = hslToHex(baseHue, saturation, lightness);
  
  // Второй цвет - с небольшим смещением тона
  var hueVariation = Math.floor(Math.random() * 30) - 15; // ±15 градусов
  var color2 = hslToHex(baseHue + hueVariation, saturation, lightness);
  
  return [color1, color2];
}

var BookslistTestTaskResponseAController = BookslistTestTaskResponseAllController;
// export default BookslistTestTaskResponseAController;
export default BookslistTestTaskResponseAController.extend({
  parentRoute: 'bookslist-test-task-response',
  rundomColors: getRandomSimilarColors(),
  
  actions: {
    toggleTableColor() {
        this.set('rundomColors', getRandomSimilarColors());
    }
  }
});