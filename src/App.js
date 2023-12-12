import React, {Component} from "react";
export default class App extends Component{
  state={
    title:""
  }
  changeStatus=(text)=>{
    this.setState({
      title:text
    })
  }
  render(){
    const {title} = this.state
    return(
      <div className="container">
       <button className="btn btn-info m-2" onClick={()=> this.changeStatus("Invoice1")}>Invoice1</button>
       <button className="btn btn-primary m-2" onClick={()=> this.changeStatus("Invoice2")}>Invoice2</button>
       <button className="btn btn-success m-2" onClick={()=> this.changeStatus("Invoice3")}>Invoice3</button>
       {title === "Invoice1" ? (<p>Turkiya (turk: Türkiye), rasman — Turkiya Respublikasi (turk: Türkiye Cumhuriyeti) — Gʻarbiy Osiyo (97%) va Janubiy Yevropa (3%)dagi davlat. Turkiya ham, Osiyo ham Yevropa qitʼasiga kiradi Turkiyaning poytaxti — Anqara shahri. Davlat tili — Turk tili. Maydoni — 783,562 km². Aholi soni (2021) — 84.680.273 kishi. Turkiya pul birligi — lira. Turkiya Respublikasi 81 ta viloyatlardan iborat.</p>)
        : title === "Invoice2" ? (<p>Koreya Respublikasi, norasmiy nomlari: Janubiy Koreya, Koreya (hangul: 대한민국, hanja: 大韓民國, tɛː.han.min.ɡuk̚), tinglangⓘ Sharqiy Osiyoda, Koreys yarimorolida joylashgan mamlakatdir. Shimoldan Koreya Xalq Demokratik Respublikasi bilan chegaradosh. Poytaxti – Seul shahri aglomeratsiyasi aholisi boʻyicha jahonda ikkinchi oʻrinda turadi[1].</p>) 
        : title === "Invoice3" ?(<p>Germaniya yoki Olmoniya (nemischa: Deutschland), Germaniya Federativ Respublikasi (nemischa: Bundesrepublik Deutschland) — Markaziy Yevropadagi davlat. Shimoliy Boltiq dengizlari sohilida joylashadi. Maydoni 357 ming km2. Aholisi 83,149,300 kishi (2019-yilga koʻra).[1] Poytaxti — Berlin shahri. Maʼmuriy jihatdan 16 yer (shtat) ga, yerlar okruglarga, okruglar tumanlarga, tumanlar jamoalarga boʻlinadi.</p>) :""
       }
      </div>
    )
  }
}
