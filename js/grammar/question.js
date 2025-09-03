// 問1: alert() を使って値を表示しよう
// 次の値を alert() で表示してください。
// Cの問題はシングルクォートで囲み、エスケープを使いましょう。

// A. 200
// B. Hello, World!
// C. It's surprising that she said, I can't believe it's already over.

// 解答を以下に記述してください。
// alert(200);
// alert("Hello, World!");
// alert('It\'s surprising that she said, I can\'t believe it\'s already over.');

// 問2: console.log() を使って値を表示しよう
// 次の値を console.log() で表示してください。
// BとCは指数表記を使いましょう。

// A. -15
// B. 1500000000000000000
// C. -0.00000000000005

// 解答を以下に記述してください。
console.log(-15);
console.log(1.5e18);
console.log(-5e-14);

// 問3: 数値の演算をしよう
// 次の計算の結果を console.log() で表示してください。

// A. 18 + 7
// B. 25 - 10
// C. 6 × 4
// D. 3の4乗
// E. 20 ÷ 6 の商
// F. 20 ÷ 6 の余り

// 解答を以下に記述してください。
console.log(18 + 7);
console.log(25 - 10);
console.log(6 * 4);
console.log(3 ** 4);
console.log(20 / 6);
console.log(20 % 6);


// 問4: 定数や変数を使って計算しよう
// 以下の条件で計算結果を求め、console.log() で表示してください。

// 例題. リンゴの数をユーザに聞き、リンゴの単価（120円）で支払い金額を求める
// let appleCount = Number(prompt('欲しいリンゴの数を入力してください。'));
// const applePrice = 120;
// console.log(appleCount * applePrice);

// A. 書籍の価格と個数から合計金額を計算しよう
// ・書籍1冊1800円の購入冊数をユーザに聞く
// ・「合計金額：xxxx円」と表示する

// Aの解答を以下に記述してください。
// let bookCount = Number(prompt('購入する書籍の冊数を入力してください。'));
// const bookPrice = 1800;
// console.log("合計金額：" + (bookCount * bookPrice) + "円");


// B. 商品の価格と税率を使って税込み金額を計算しよう
// ・商品の価格をユーザに聞く
// ・商品の個数をユーザに聞く
// ・消費税率10%を載せた税込金額を「税込金額：xxxx円」と表示する

// Bの解答を以下に記述してください。
// let itemPrice = Number(prompt('商品の価格を入力してください。'));
// let itemCount = Number(prompt('商品の個数を入力してください。'));
// const taxRate = 1.1;
// let totalPrice = itemPrice * itemCount * taxRate;
// console.log("税込金額：" + Math.round(totalPrice) + "円");

// C. 旅行の予定を作成しよう
// ・旅行先（大阪、京都等）をユーザに聞く
// ・旅行の日数をユーザに聞く
// ・「あなたは〇〇にxx日間の旅行に行きます！」と表示する

// Cの解答を以下に記述してください。
// let destination = prompt('旅行先を入力してください。');
// let days = Number(prompt('旅行の日数を入力してください。'));
// console.log(`あなたは${destination}に${days}日間の旅行に行きます！`);


// 問5: 条件分岐を使って判定しよう
// 以下の判定を行い、console.log() で表示してください。

// 例題. ユーザーに テストの点数 を入力してもらい、以下の成績を判定してください。
// ・90以上: "A"
// ・70以上90未満: "B"
// ・70未満: "C"

// 正解
// const score = Number(prompt("Enter your score:"));
// if (score >= 90) {
//   console.log("A");
// } else if (score >= 70) {
//   console.log("B");
// } else {
//   console.log("C");



// A. ユーザーに 数値 を入力してもらい、偶数か奇数を判定してください。
// ・偶数なら "偶数"
// ・奇数なら "奇数"


// 解答を以下に記述してください。
// const number = Number(prompt("数値を入力してください:"));
// if (number % 2 === 0) {
//   console.log("偶数");
// } else {
//   console.log("奇数");
// }

// B. ユーザーに年齢を入力してもらい、以下のルールで判定してください。
// ・12歳以下: "子供"
// ・13歳～19歳: "ティーン"
// ・20歳～64歳: "大人"
// ・65歳以上: "高齢者"

// 解答を以下に記述してください。
// const age = Number(prompt("年齢を入力してください:"));
// if (age <= 12) {
//   console.log("子供");
// } else if (age <= 19) {
//   console.log("ティーン");
// } else if (age <= 64) {
//   console.log("大人");
// } else {
//   console.log("高齢者");
// }





// C. ユーザーに 購入金額 を入力してもらい、以下のルールで割引を適用し、その割引率と最終価格を表示してください。
// ・10000円以上: "最終価格: XXXX円（20% 割引適用）"
// ・5000円以上: "最終価格: XXXX円（10% 割引適用）"
// ・それ以外: "最終価格: XXXX円"

// 解答を以下に記述してください。
// const purchaseAmount = Number(prompt("購入金額を入力してください:"));
// let finalPrice;
// let discountRate;

// if (purchaseAmount >= 10000) {
//   discountRate = 0.2;
// } else if (purchaseAmount >= 5000) {
//   discountRate = 0.1;
// } else {
//   discountRate = 0;
// }

// finalPrice = purchaseAmount * (1 - discountRate);
// console.log(`最終価格: ${Math.round(finalPrice)}円（${discountRate * 100}% 割引適用）`);

// 問6: Switchを使って判定しよう
// 以下の判定を行い、console.log() で表示してください。
// 必ず例外処理も入れること

// 例題. ユーザーに red, yellow, blue, green のいずれかを入力してもらい、以下のメッセージを表示してください。
// red: "Stop!"
// yellow : "Slow down!"
// blue もしくは green: "Go!"
// それ以外: "Unknown color"

// 正解
// const color = prompt("信号機の色をいれてください:");
// switch (color) {
//   case "red":
//     console.log("Stop!");
//     break;
//   case "yellow":
//     console.log("Slow down!");
//     break;
//   case "blue":
//   case "green":
//     console.log("Go!");
//     break;
//   default:
//     console.log("Unknown color");
// }
// A. ユーザーに日本語の曜日を入力してもらい、英語の曜日を表示する処理を作成してください。
// ・日: "Sunday"
// ・月: "Monday"
// ・火: "Tuesday"
// ・水: "Wednesday"
// ・木: "Thursday"
// ・金: "Friday"
// ・土: "Saturday"

// 解答を以下に記述してください。
// const day = prompt("日本語の曜日を入力してください（日、月、火、水、木、金、土）:");
// switch (day) {
//   case "日":
//     console.log("Sunday");
//     break;
//   case "月":
//     console.log("Monday");
//     break;
//   case "火":
//     console.log("Tuesday");
//     break;
//   case "水":
//     console.log("Wednesday");
//     break;
//   case "木":
//     console.log("Thursday");
//     break;
//   case "金":
//     console.log("Friday");
//     break;
//   case "土":
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Unknown day");
// }


// B. ユーザーに月の数字を入れてもらい、その月の末日を表示する処理を作成してください。
// ・1、3、5、7、8、10、12月: "◯月は31日が末日です。"
// ・4、6、9、11月: "◯月は30日が末日です。"
// ・2月: "◯月は28日が末日です。"

// 解答を以下に記述してください。
// const month = Number(prompt("月の数字を入力してください（1～12）:"));
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log(`${month}月は31日が末日です。`);
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log(`${month}月は30日が末日です。`);
//     break;
//   case 2:
//     console.log(`${month}月は28日が末日です。`);
//     break;
//   default:
//     console.log("1から12の間の正しい月を入力してください。");
// }

// C. ユーザーに購入金額とくじの色を入れてもらい、くじの色によって、購入金額を割引する処理を作成してください。
// くじの色が
// ・金: "最終価格: XXXX円（30% 割引適用）"
// ・銀: "最終価格: XXXX円（20% 割引適用）"
// ・銅: "最終価格: XXXX円（10% 割引適用）"
// ・その他: "最終価格: XXXX円"

// 解答を以下に記述してください。
// const purchaseAmount = Number(prompt("購入金額を入力してください:"));
// const color = prompt("くじの色を入力してください（金、銀、銅）:");

// let finalPrice;
// let discountRate;

// switch (color) {
//   case "金":
//     discountRate = 0.3;
//     break;
//   case "銀":
//     discountRate = 0.2;
//     break;
//   case "銅":
//     discountRate = 0.1;
//     break;
//   default:
//     discountRate = 0;
//     break;
// }
// finalPrice = purchaseAmount * (1 - discountRate);
// console.log(`最終価格: ${Math.round(finalPrice)}円（${discountRate * 100}% 割引適用）`);

// 問7: ループで繰り返し処理をしよう
// 以下を繰り返し処理で行い、console.log() で表示してください。

// A. 1からXまでの合計を計算し、最後に"合計:xxx"と表示してください。
// Xについては、ユーザーが入力した数値まで計算すること。

// 解答を以下に記述してください。
// const X = Number(prompt("1からXまでの合計を計算します。Xの値を入力してください:"));
// let sum = 0;
// for (let i = 1; i <= X; i++) {
//   sum += i;
// }
// console.log(`合計:${sum}`);





// B. 以下のようなピラミッドパターンを作成してください。
// *
// * *
// * * *
// * * * *
// * * * * *

// 解答を以下に記述してください。
// for (let i = 1; i <= 5; i++) {
//   let row = '';
//   for (let j = 1; j <= i; j++) {
//     row += '* ';
//   }
//   console.log(row.trim());
// }

// C. 1からXまでの数を表示し、
// 3の倍数のとき "Fizz"
// 5の倍数のとき "Buzz"
// 両方の倍数のとき "FizzBuzz" を表示してください。
// Xについては、ユーザーに入力させること。

// 実行例: X=15の場合
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz

// 解答を以下に記述してください。
// const X = Number(prompt("1からXまでの数を表示します。Xの値を入力してください:"));
// for (let i = 1; i <= X; i++)
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }

// 問8: Whileループで繰り返し処理をしよう
// 以下を繰り返し処理を行い、console.log() で表示してください。
// while を使った解答と、do-while を使った解答の 両方 を用意してください。

// 問題. ユーザーに 「目標貯金額（X）」 と 「毎月の貯金額（Y）」 を数値で入力させ、以下の形式で表示してください。
// Y円ずつ毎月貯めると、◯年◯ヶ月でX円を超えます。

// While版の解答を以下に記述してください。
// let targetAmount = Number(prompt("目標貯金額（X）を入力してください:"));
// let monthlySavings = Number(prompt("毎月の貯金額（Y）を入力してください:"));

// let totalSavings = 0;
// let months = 0;

// while (totalSavings < targetAmount) {
//   totalSavings += monthlySavings;
//   months++;
// }

// let years = Math.floor(months / 12);
// let remainingMonths = months % 12;

// console.log(`${monthlySavings}円ずつ毎月貯めると、${years}年${remainingMonths}ヶ月で${targetAmount}円を超えます。`);


// do-While版の解答を以下に記述してください。
//先ほど宣言した変数はそのまま使用するのでletは書いていない

// targetAmount = Number(prompt("目標貯金額（X）を入力してください:"));
// monthlySavings = Number(prompt("毎月の貯金額（Y）を入力してください:"));

// totalSavings = 0;
// months = 0;

// do {
//   totalSavings += monthlySavings;
//   months++;
// } while (totalSavings < targetAmount);

// years = Math.floor(months / 12);
// remainingMonths = months % 12;

// console.log(`${monthlySavings}円ずつ毎月貯めると、${years}年${remainingMonths}ヶ月で${targetAmount}円を超えます。`);


// 問9: ループを制御しよう
// 以下を繰り返し処理で行い、console.log() で表示してください。

// 以下のルールで処理を実装してください。

// 問題. ユーザーに「Xまでの素数を表示します。Xの値を入力してください:」と聞き、答えた数までの素数を表示してください。
// もし、Xに2未満の数字が入力された場合には、「2以上の正しい数値を入力してください。」とアラートで表示すること。
// 実行例: X=20の場合
// 1から20までの素数:
// 2
// 3
// 5
// 7
// 11
// 13
// 17
// 19

// 実行例: X=1の場合
// 2以上の正しい数値を入力してください。

// 解答を以下に記述してください。
// const X = Number(prompt("Xまでの素数を表示します。Xの値を入力してください:"));
// if (!Number.isInteger(X) || X < 2) {
//   alert("2以上の正しい数値を入力してください。");
// } else {
//   console.log(`1から${X}までの素数:`);
//   // 2 は素数として先に出す
//   if (X >= 2) console.log(2);

//   // 3 以降の奇数だけ調べる
//   for (let num = 3; num <= X; num += 2) {
//     let isPrime = true;

//     // i*i <= num で √計算を省く
//     for (let i = 3; i * i <= num; i += 2) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime)
//       console.log(num);
//   }
// }
