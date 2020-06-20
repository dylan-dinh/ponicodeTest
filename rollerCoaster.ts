const fs = require("fs");
const lineReader = require("line-reader");

var lines: string = "";
var groups: number[] = [];
var tmp;
var L: number = 0;
var C: number = 0;
var N: number = 0;
let first: boolean = true;
var result: number = 0;
var file: string = "";

console.log(process.argv[2]);

lineReader.eachLine(process.argv[2].toString(), function (line, last) {
  if (first) {
    tmp = line.split(" ");

    L = parseInt(tmp[0]);
    C = parseInt(tmp[1]);
    N = parseInt(tmp[2]);
    first = false;
  } else {
    groups.push(parseInt(line));
  }
  if (last) {
    let groupIndex: number = 0;
    for (let i = 0; i < C; i++) {
      let peopleInWagon: number = 0;
      for (let j = groupIndex; j <= N; j++) {
        // go back to first index to put max people
        if (j === N) {
          groupIndex = 0;
          j = 0;
        }
        if (groups[j] + peopleInWagon <= L) {
          peopleInWagon += groups[j];
          groupIndex += 1;
        } else {
          result += peopleInWagon;
          break;
        }
      }
      //console.log(peopleInWagon)

      if (groupIndex > L) {
        groupIndex = 0;
      }
    }
    console.log(result);
  }
});
