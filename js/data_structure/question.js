// JavaScript構文ドリル：実践力確認用（問題）

//【1】配列の基本操作
// Q1.1: 気温を表すtemperatures配列を 18, 25, 30, 22 で定義してください。
// 解答:
let temperatures = [18, 25, 30, 22];


// Q1.2: 上記配列の3番目の値を28に書き換えてください。
// 解答:
temperatures[2] = 28;

// Q1.3: 配列の要素数をコンソールに表示してください。
//  解答:
// console.log(temperatures.length);


//【2】配列の追加・削除　（【1】で作成したtemperatures配列を使用します）
// Q2.1: 配列の末尾に 27 を追加してください。
// 解答:
temperatures.push(27);

// Q2.2: 配列の末尾の要素を1つ削除してください。
// 解答:
temperatures.pop();

// Q2.3: 配列の先頭に15を追加してください。
// 解答:
temperatures.unshift(15);

// Q2.4: 配列の先頭の要素を1つ削除してください。
// 解答:
temperatures.shift();


//【3】ループと反復処理
// Q3.1: temperaturesの全要素をfor文で1行ずつ出力してください。
// 解答:
// for (let i = 0; i < temperatures.length; i++) {
//   console.log(temperatures[i]);
// }

// Q3.2: forEachを使ってインデックスと値を「index: 値」の形式で表示してください。
// 解答:
// temperatures.forEach((value, index) => {
//   console.log(`${index}: ${value}`);
// });


//【4】配列の集計・加工
// Q4.1: temperaturesの合計値を「合計: 値」の形式で出力してください。
// 解答:

// let total = 0;
// for (let i = 0; i < temperatures.length; i++) {
//   total += temperatures[i];
// }
// console.log(`合計: ${total}`);


// Q4.2: 平均値を計算して「平均: 値」の形式で出力してください。
// 解答:
// let total = 0;
// for (let i = 0; i < temperatures.length; i++) {
//   total += temperatures[i];
// }
// let average = total / temperatures.length;
// console.log(`平均: ${average.toFixed(2)}`); // 小数点以下2桁まで表示

// Q4.3: 以下の税抜き価格の配列に対して、税込価格の配列を作成し出力してください。
// const costs = [2500, 4000, 1500];
// 解答:
// const costs = [2500, 4000, 1500];
// const taxRate = 1.1;
// const taxedCosts = costs.map(cost => Math.round(cost * taxRate));
// console.log(taxedCosts);

// Q4.4: 税込価格に「〇〇円」という値にして配列として出力してください。
// 数字は小数点以下を四捨五入し、3桁毎にカンマ区切りにしましょう。
// 解答:
// const costs = [2500, 4000, 1500];
// const taxRate = 1.1;
// const formattedCosts = costs.map(cost => {
//   const taxedPrice = Math.round(cost * taxRate);
//   return taxedPrice.toLocaleString() + '円';
// });
// console.log(formattedCosts);

// Q4.5: costsの配列から2000より大きい価格だけを取り出して新しい配列にして出力ください。
// 解答:
// const costs = [2500, 4000, 1500];
// const filteredCosts = costs.filter(cost => cost > 2000);
// console.log(filteredCosts);


// Q4.6: 次の配列から、偶数だけを取り出して新しい配列にして出力してください。
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 解答:
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// Q4.7: 次の配列の数値を、2桁(1桁の場合はゼロ埋め）にし、新しい配列にして出力してください。
// [3, 12, 5, 7, 23]
// const nums = [3, 12, 5, 7, 23];
// const formattedNums = nums.map(num => num.toString().padStart(2, '0'));
// console.log(formattedNums);

// Q4.8: 次の配列の中の「-」をすべて「/」に置換して、新しい配列にして出力してください。
// ["2025-04-01", "2025-04-15", "2025-05-03"]
// const dates = ["2025-04-01", "2025-04-15", "2025-05-03"];
// const formattedDates = dates.map(date => date.replace(/-/g, '/'));
// console.log(formattedDates);

// Q4.9: 次の配列から、6文字以上の単語だけを抽出し、すべて小文字に変換して、新しい配列として出力してください。
// ["Apple", "Banana", "Cherry", "Watermelon", "mango"]
// const fruits = ["Apple", "Banana", "Cherry", "Watermelon", "mango"];
// const longFruits = fruits
//   .filter(fruit => fruit.length >= 6)
//   .map(fruit => fruit.toLowerCase());
// console.log(longFruits);

//【5】オブジェクトの操作
// Q5.1: javascript: 85, python: 92 を持つ userScores オブジェクトを作成してください。
// 解答:
let userScores = { javascript: 85, python: 92 };


// Q5.2: javascript を90、python を95に変更してください。
// 解答:
userScores.javascript = 90;
userScores.python = 95;

// Q5.3: sql:80 を追加し、javascript を削除してください。
// 解答:
userScores.sql = 80;
delete userScores.javascript;

// Q5.4: Object.entries を使ってキーと値を1行ずつ出力してください。
// 解答:
// Object.entries(userScores).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });

// Q5.5: 合計値と平均値を出力してください。
// 解答:
// let totalScore = 0;
// let subjectCount = 0;
// for (let score of Object.values(userScores)) {
//   totalScore += score;
//   subjectCount++;
// }
// let averageScore = totalScore / subjectCount;
// console.log(`合計: ${totalScore}`);
// console.log(`平均: ${averageScore.toFixed(2)}`); // 小数点以下2桁まで表示


//【6】その他の配列操作
// 以下の配列について、指示に従った処理にしてください。
// ["HTML", "CSS", "JavaScript", "PHP"]
// Q6.1: "CSS" を削除して、配列を出力してください。
// const languages = ["HTML", "CSS", "JavaScript", "PHP"];
// const result = languages.filter(lang => lang !== "CSS");
// console.log(result);
//「CSS 以外を残す」という考え方。


// Q6.2: 「削除したい言語を入力してください。（HTML,CSS,JavaScript,PHP）」と確認して入力された言語を削除して、配列を出力してください。
// ["HTML", "CSS", "JavaScript", "PHP"]
// const languages2 = ["HTML", "CSS", "JavaScript", "PHP"];
// const langToRemove = prompt("削除したい言語を入力してください。（HTML,CSS,JavaScript,PHP）");
// const result2 = languages2.filter(lang => lang !== langToRemove);
// console.log(result2);

// Q6.3: "JavaScript" の後に "TypeScript" を追加してください。
// const languages3 = ["HTML", "CSS", "JavaScript", "PHP"];
// const result = [
//   ...languages3.slice(0, 3), // JavaScript まで
//   "TypeScript",              // 追加
//   ...languages3.slice(3)     // 残り
// ];
// console.log(result);




// Q6.4: 「追加したい言語と、どの言語の後に追加するかを半角スペースで区切って入力してください。（HTML,CSS,JavaScript,PHP）入力例：TypeScript JavaScript」と確認して入力された言語を指定した言語の後に挿入し、配列を出力してください。
// const languages4 = ["HTML", "CSS", "JavaScript", "PHP"];
// const input = prompt("追加したい言語と、どの言語の後に追加するかを半角スペースで区切って入力してください。（HTML,CSS,JavaScript,PHP）入力例：TypeScript JavaScript");
// if (input) {
//   const [newLang, afterLang] = input.split(" ");
//   const index = languages4.indexOf(afterLang);
//   if (index !== -1) {
//     const result = [
//       ...languages4.slice(0, index + 1),
//       newLang,
//       ...languages4.slice(index + 1)
//     ];
//     console.log(result);
//   } else {
//     console.log("指定された言語が見つかりません。");
//   }
// } else {
//   console.log("入力がキャンセルされました。");
// }

// Q6.5: JavaScriptをTypeScriptに置換して、配列を出力してください。
// const languages5 = ["HTML", "CSS", "JavaScript", "PHP"];
// const result5 = languages5.map(lang => lang === "JavaScript" ? "TypeScript" : lang);
// console.log(result5);
//三項演算子(条件演算子)を使うと、if文よりも簡潔に書けることが多い

//普通に if...else で書くと
// const result5 = languages5.map(lang => {
// if (lang === "JavaScript") {
//   return "TypeScript";
// } else {
//   return lang;
// }
// });
// console.log(result5);


// Q6.6: 「置換前の言語と、置換後の言語（HTML,CSS,JavaScript,PHP）を半角スペースで区切って入力してください。入力例：JavaScript TypeScript」と確認して入力された言語を指定した言語の後に置換し、配列を出力してください。
// const languages6 = ["HTML", "CSS", "JavaScript", "PHP"];
// const input6 = prompt("置換前の言語と、置換後の言語（HTML,CSS,JavaScript,PHP）を半角スペースで区切って入力してください。入力例：JavaScript TypeScript");
// if (input6) {
//   const [oldLang, newLang] = input6.split(" "); //分割代入
//   const result6 = languages6.map(lang => lang === oldLang ? newLang : lang);
//   console.log(result6);
// } else {
//   console.log("入力がキャンセルされました。");
// }

// Q6.7: 「日本語に変換したい日付を入力してください。入力例：2026-3-4」と確認して、入力された日付を2026年03月04日の形式で出力してください。
// const date = prompt("日本語に変換したい日付を入力してください。入力例：2026-3-4");
// if (date) {
//   const [year, month, day] = date.split("-");
//   const formattedDate = `${year}年${month.padStart(2, '0')}月${day.padStart(2, '0')}日`;
//   console.log(formattedDate);
// } else {
//   console.log("入力がキャンセルされました。");
// }


// Q6.8: 「性、名、都道府県をカンマ区切りで入力してください。入力例：山田,太郎,東京都」と確認して、入力された文字列を{last_name: '山田', first_name: '太郎', pref: '東京都'}のようにオブジェクトにしてから出力してください。
// const input = prompt("性、名、都道府県をカンマ区切りで入力してください。入力例：山田,太郎,東京都");
// if (input) {
//   const [last_name, first_name, pref] = input.split(",");
//   const userInfo = { last_name, first_name, pref };//オブジェクトの省略記法（プロパティの省略記法）
//   console.log(userInfo);
// } else {
//   console.log("入力がキャンセルされました。");
// }

// 本来ならこう書くのが基本：

// const userInfo = {
//   last_name: last_name,
//   first_name: first_name,
//   pref: pref
// };
// もし キーと変数名が同じ なら、: 以降を省略できる。




// Q6.9: Q6.8で作成したオブジェクトを使ってURLのクエリパラメータの形式で出力してください。出力例：「?last_name='山田'&first_name='太郎'&pref='東京都';」

//クエリ文字列は「URLにデータをのせて送る仕組み」
// const input = prompt("性、名、都道府県をカンマ区切りで入力してください。入力例：山田,太郎,東京都");
// if (input) {
//   const [last_name, first_name, pref] = input.split(",");
//   const userInfo = { last_name, first_name, pref };
//   const queryParams = Object.entries(userInfo)
//     .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
// //URLに入れられない文字を安全に変換してくれる関数。
//     .join("&");
//   console.log(`?${queryParams}`);
// } else {
//   console.log("入力がキャンセルされました。");



//【7】分割代入・スプレッド・コピー
// Q7.1: 分割代入を使って、"Yamada Taro,Suzuki Hanako,Tanaka Ichiro"の文字列から以下のように出力してください。
// My Name Is Taro Yamada
// My Name Is Hanako Suzuki
// My Name Is Ichiro Tanaka

// const names = "Yamada Taro,Suzuki Hanako,Tanaka Ichiro";
// const nameArray = names.split(",");
// nameArray.forEach(fullName => {
//   const [lastName, firstName] = fullName.split(" ");
//   console.log(`My Name Is ${firstName} ${lastName}`);
// });


// Q7.2: 分割代入を使って、"2025-04-01,2025-12-25,2026-01-01"の文字列から以下のように出力してください。
// April 1, 2025
// December 25, 2025
// January 1, 2026

// const dates = "2025-04-01,2025-12-25,2026-01-01";
// const dateArray = dates.split(",");
// const monthNames = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// dateArray.forEach(dateString => {
//   const [year, month, day] = dateString.split("-");
//   const monthName = monthNames[parseInt(month, 10) - 1];
//   console.log(`${monthName} ${parseInt(day, 10)}, ${year}`);
// });


// Q7.3: レスト構文を使って、["太郎", "二郎", "三郎", "四郎"]の配列を
// 長男:太郎
// 2男:二郎
// 3男:三郎
// 4男:四郎
// のように出力してください。

// const brothers = ["太郎", "二郎", "三郎", "四郎"];
// const [eldest, second, third, ...others] = brothers;
// console.log(`長男: ${eldest}`);
// console.log(`2男: ${second}`);
// console.log(`3男: ${third}`);
// others.forEach((brother, index) => {
//   console.log(`${index + 4}男: ${brother}`);
// });


// Q7.4: レスト構文を使って「example.com/taro/15/Tokyo」のアドレスから、ドメイン部分とパラメータ部分を分けて、以下のように出力してください。※パラメータ部分はオブジェクトにすること
// ドメイン:example.com
// {name: 'taro', age: '15', pref: 'Tokyo"'}
// const url = "example.com/taro/15/Tokyo";
// const [domain, ...params] = url.split("/");
// const [name, age, pref] = params;
// const paramObj = { name, age, pref };
// console.log(`ドメイン: ${domain}`);
// console.log(paramObj);


// Q7.5: スプレッド構文を使って、以下の2つのオブジェクトを結合し、CSS形式で出力してください。
// { "font-size": "1.2em",
//   "font-weight": "bold",
//   "text-align": "center"}
// { "padding": "8px",
//   "background-color": "#ddd",
//   "margin-bottom": "15px"}
// 出力
// font-size:1.2em;
// font-weight:bold;
// text-align:center;
// padding:8px;
// background-color:#ddd;
// margin-bottom:15px;

// const style1 = {
//   "font-size": "1.2em",
//   "font-weight": "bold",
//   "text-align": "center"
// };
// const style2 = {
//   "padding": "8px",
//   "background-color": "#ddd",
//   "margin-bottom": "15px"
// };
// const combinedStyle = { ...style1, ...style2 };
// for (let [key, value] of Object.entries(combinedStyle)) {
//   console.log(`${key}: ${value};`);
// }



// Q7.6: スプレッド構文を使って、[5, 30, 15, 20] を関数に渡し、最大値を計算して出力してください。
// const numbers = [5, 30, 15, 20];
// const maxNumber = Math.max(...numbers);
// //配列をバラして、引数として渡す
// console.log(maxNumber);

// Q7.7:
// 1.関数の引数にレスト構文を使って、受け取る引数の個数に制限がない関数を作りましょう。
// const getEvenNumbers = (...args) => {
  // 2.関数の中では、受け取ったすべての値の中から「偶数だけ」を取り出して、配列として戻してください。
//   return args.filter(num => num % 2 === 0);
// };
// 3.配列 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] をスプレッド構文を使って関数に渡し、偶数だけが出力されることを確認してください。
// const evenNumbers = getEvenNumbers(...[1,2,3,4,5,6,7,8,9,10]);
// console.log(evenNumbers); // [2,4,6,8,10]


