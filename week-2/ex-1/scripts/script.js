alert("Мазе бот v1 на Вашите услуги");
alert("Моля, регистрирайте се !");

var firstName      = prompt("Първо име");
var secondName     = prompt("Второ име");
var age            = prompt("Възраст");
var gender         = prompt("Пол");

var maleGender     = "мъжки";
var femaleGender   = "женски";

var isUserAdult     = age >= 18;
var isUserNotAdult  = age < 18;

var isUserGenderMale   = gender.toLocaleLowerCase() === maleGender;
var isUserGenderFemale = gender.toLocaleLowerCase() === femaleGender;

if (isUserAdult && isUserGenderMale) {
  console.log(`Здравейте г-н ${secondName}`);
}

if (isUserAdult && isUserGenderFemale) {
  console.log(`Здравейте г-жо ${secondName}`);
}

if (isUserNotAdult && isUserGenderMale) {
  console.log(`Здрасти малкия, не пускаме дечица тука - бягай за бира`);
}

if (isUserNotAdult && isUserGenderFemale) {
  console.log(`Здрасти малката, не пускаме дечица тука - отивай да си`);
}

alert(
  `Добре дошъл в мазето на баба ${firstName} ${secondName}* Ти си на ${age} години`
);

function Product(productName, productCount, productArticleSignature) {
  this.productName             = productName;
  this.productCount            = productCount;
  this.productArticleSignature = productArticleSignature;
}

var appleWine        = "ябълково вино";
var smokeMeat        = "пушено месо";
var plumMarmelade    = "сливов мармалад";
var pickledPeppers   = "мариновани чушки";
var piggyBank        = "прасенце касичка";

var appleWineCount      = 10;
var smokeMeatCount      = 5;
var plumMarmeladeCount  = 9;
var pickledPeppersCount = 4;
var piggyBankCount      = "185 лв и 35 стотинки";

var appleWineArticleSignature      = "C7544_10";
var smokeMeatArticleSignature      = "M7441_5";
var plumMarmeladeArticleSignature  = "S64911_9";
var pickledPeppersArticleSignature = "P7485_4";
var piggyBankArticleSignature      = "B6584_184_35";

var wineProduct = new Product(
  appleWine,
  appleWineCount,
  appleWineArticleSignature
);

var meatProduct = new Product(
  smokeMeat,
  smokeMeatCount,
  smokeMeatArticleSignature
);

var plumMarmeladeProduct = new Product(
  plumMarmelade,
  plumMarmeladeCount,
  plumMarmeladeArticleSignature
);

var pickledPeppersProduct = new Product(
  pickledPeppers,
  pickledPeppersCount,
  pickledPeppersArticleSignature
);

var piggyBankProduct = new Product(
  piggyBank,
  piggyBankCount,
  piggyBankArticleSignature
);

alert("Отчет за продуктите в мазето");

var tableProductsData = {
  wineProduct,
  meatProduct,
  plumMarmeladeProduct,
  pickledPeppersProduct,
  piggyBankProduct,
};

var productNameColumn                 = "продукт";
var productCountColumn                = "брой";
var newProductArticleSignatureColumn  = "нов сериен номер";

var tableProductsColumns = {
  productNameColumn,
  productCountColumn,
  newProductArticleSignatureColumn,
};

console.table(tableProductsData, tableProductsColumns);

if (isUserAdult) {
  var donateMoneyQuestion = prompt(
    "Желаете ли да дарите пари за закупуване на нови продукти ?"
  );

  var userAskDonateMoney     = "да";
  var userNotAskDonateMoney  = "не";

  var isUserAskDonateMoney    =
    donateMoneyQuestion.toLocaleLowerCase() === userAskDonateMoney;

  var isUserNotAskDonateMoney =
    donateMoneyQuestion.toLocaleLowerCase() === userNotAskDonateMoney;

  if (isUserAskDonateMoney) {
    var donateMoney = prompt("Моля въведете желаната от вас сума !");
    var money = parseFloat(donateMoney);

    money += money * 0.2;

    alert(`Трябва да дарите следната сума: ${Math.round(money * 100) / 100}`);
    alert("Благорадим за направеното дарение !");
  } else {
    alert("Надяваме се следващият път да преосмислете избора си !");
  }
}
