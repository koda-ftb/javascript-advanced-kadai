// File API実装チェック
if (window.File){
	window.alert("File APIが実装されています。");
	document.getElementById("drop").addEventListener("drop", onDrop, false);
}else{
	window.alert("本ブラウザではFile APIが使えません。");
}

// HTML要素を取得
const disp = document.getElementById("disp");
const fileFind = document.getElementById("file-find");
const dispB =document.getElementById("disp-b");

// オブジェクトの配列
let file = [
	{
		name : "orange.png",
		type : "image",
		size : 500,
    date : "2023-10-24 14:52"
	},
	{
		name : "apple.ai",
		type : "ai",
		size : 7800,
    date : "2023-11-14 09:35"
	},
	{
		name : "aaarich.rtf",
		type : "text",
		size : 0.48,
    date : "2023-11-17 16:30"
	},
];

/*
// クラスを定義する
class fileCnt {
	constructor(fName, fType ,fSize){
		this.fName = fName;
		this.fType = fType;
		this.fSize = fSize;
	}
}

// インスタンス化
const file1 = new fileCnt("orange.png", "image", 500);
const file2 = new fileCnt("apple.ai", "ai", 7800);
const file3 = new fileCnt("aaarich.rtf", "text", 0.48);

// オブジェクトを配列にする
let allFile = [file1, file2, file3];
  // ↑この配列から値を取り出してfindで検索することはできないか？
*/

  // Drop領域にドロップした際のファイルのプロパティ情報読み取り処理
  function onDrop(event) {
    // ドロップされたファイルのfilesプロパティを参照
    let files = event.dataTransfer.files;
    disp.innerHTML = "";

    for (var i = 0; i < files.length; i++) {
      let f = files[i];

      // ファイル名とサイズを表示
      disp.innerHTML += "ファイル名 : " + f.name + "<br />" 
                      + "ファイルタイプ : " + f.type + "<br />" 
                      + "ファイルサイズ : " + f.size / 1000 + " KB <br />" 
                      + "更新日 : " + f.lastModifiedDate + "<br />";

			// 配列内のオブジェクトを検索
      let fFind = file.find(file => file.name === f.name);
      console.log(fFind);
      console.log(f);

      if(fFind){
          fileFind.textContent = "同名ファイルが見つかりました";
          fileFind.classList.add("find");
          dispB.innerHTML +="ファイル名 : " + fFind.name + "<br />" 
                          + "ファイルタイプ : " + fFind.type +"<br />"
                          + "ファイルサイズ : " + fFind.size +" KB <br />"
                          + "更新日 : " + fFind.date +"<br />";
      }else{
          fileFind.classList.remove("find");
          fileFind.textContent = "同名ファイルは見つかりませんでした";
        }
    }
    // ブラウザ上でファイルを展開する挙動を抑止
    event.preventDefault();
  }

  function onDragOver(event) {
    // ブラウザ上でファイルを展開する挙動を抑止
    event.preventDefault();
  }