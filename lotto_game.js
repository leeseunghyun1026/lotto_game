const readline = require("readline");

// readline 인터페이스 설정
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isStart() {}


function lottoRandom(price) {
  let count = price/1000; //로또 갯수 생성
  let newArray = [];
  for(let i = 0 ; i< count ; i++) {
    let set = new Set();
    while(set.size<6) {
      set.add(Math.floor(Math.random()*45)+1);
    }
    newArray.push(Array.from(set));
  }
  return newArray;
}

// readline을 사용하여 입력받기
rl.question("로또를 얼마치 구매하셨습니까? ", (price) => {
  console.log(lottoRandom(price));
  
  rl.question("당첨번호를 입력하세요(,형태로 적어주세요) ", (number) => {
    console.log(`당첨번호는 ${number}입니다`);
    rl.question("보너스 번호를 입력하세요", (bonus) => {
      console.log(`보너스번호는 ${bonus} 입니다`);
    });
  });
});