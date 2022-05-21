import { CSV } from "https://js.sabae.cc/CSV.js";

//const url = "https://api.evfcv.awstemp.toyota.jp/?method=getHydrogenStationInfo&lat=141.936598&lon=45.523156&result=json&collect_count=0";
//const data = await (await fetch(url)).json();
//const list = data.resultData.stationList.map(d => {
//  for (const name in d.info) {
//    d[name] = d.info[name];
//  }
//  delete d.info;
//  return d;
//});
//await Deno.writeTextFile("../data/hydrogen-station-info.json", JSON.stringify(data, null, 2));
//await Deno.writeTextFile("../data/hydrogen-station-info.csv", CSV.stringify(list));

const url = "https://code4fukui.github.io/covid19vaccine/latest_summary.csv";
const data = CSV.parse(await (await fetch(url)).text());


//await Deno.writeTextFile("../data/hydrogen-station-info.json", JSON.stringify(data, null, 2));
await Deno.writeTextFile("../data/test.csv", CSV.stringify(data));
