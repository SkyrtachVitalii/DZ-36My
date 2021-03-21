import './App.scss';
import AsideMenu from "./components/AsideMenu/AsideMenu";
import Auto from "./components/Auto/Auto";

function App() {

let autos= [
  {
  title: "Tesla",
  price: "$40000",
  description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
  img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
  },
  {
  title: "Tesla",
  price: "$40000",
  description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
  img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
  },
  {
  title: "Tesla",
  price: "$40000",
  description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
  img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
  },
  {
    title: "Tesla",
    price: "$40000",
    description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
    img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
  },
  {
  title: "Tesla",
  price: "$40000",
  description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
  img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
  },
  {
  title: "Tesla",
  price: "$40000",
  description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
  img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
  },
  {
  title: "Tesla",
  price: "$40000",
  description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
  img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
  },
  {
  title: "Tesla",
  price: "$40000",
  description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
  img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
  },
  {
    title: "Tesla",
    price: "$40000",
    description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
    img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
  },
  {
  title: "Tesla",
  price: "$40000",
  description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
  img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
  },
  {
  title: "Tesla",
  price: "$40000",
  description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
  img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
  },
  {
  title: "Tesla",
  price: "$40000",
  description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
  img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
  },
  {
  title: "Tesla",
  price: "$40000",
  description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
  img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
  },
  {
    title: "Tesla",
    price: "$40000",
    description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
    img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
  },
  {
  title: "Tesla",
  price: "$40000",
  description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
  img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
  }
]

let autosItems = autos.map((auto, index) =>{
  return <Auto auto={auto} key={index}/>
})

  return (
    <div className="App">
      <AsideMenu/>
      <div className="container">
        <div className="autos-container">
          {autosItems}
        </div>
      </div>
    </div>
  );
}

export default App;
