// コールバックベースの関数をプロミスに変えて、非同期処理を実現する例。

// <詳細>
// Promiseオブジェクトをインスタンス化する際に、resolve（解決）、reject（拒否）関数を渡してインスタンス化してる。それを実行し、thenでそれぞれ拾って出力している。

// <出力結果>
// ドゥルルルルルルルルルルルルルルルルル    ダーン！！！！！
// 3位です！おめでとうございます！

// awardは、順位を受け取って、表彰対象ならばメッセージを返す。
function award(rank) {
    return new Promise((resolve, reject) => {
        // rankが3以下（表彰対象）なら祝福メッセージを返し、3より大きい場合は応援メッセージを返す。
        if (rank <= 3) {
            setTimeout(() => {
                resolve(rank + "位です！おめでとうございます！");
            }, 1000);
        } else {
            setTimeout(() => {
                reject(rank + "位です。次頑張りましょう。");
            }, 1000);
        }
    });
};

// 引数には「3」をハードコーディング。
award(3).then(
    (res) => console.log(res),
    (rej) => console.log(rej),
);

console.log("ドゥルルルルルルルルルルルルルルルルル    ダーン！！！！！")