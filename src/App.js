import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="chocolate_bg">
        <div className="container">
            <header>
                <div className="icon">
                    <div className="home">
                        <a href="index.html"><img src="img/icon_home.png"/></a>
                    </div>
                    <div className="logo">
                        <a href="https://pocky.glico.com/global/"><img className="logo" src="img/index/img_logo.png" alt="logo"/></a>
                    </div>
                </div>
            </header>
            <content>
                <div className="bg_chocolate">
                    <img src="img/chocolate/img_chocolate.png"/>
                </div>
                <div className="text_chocolate">
                    <div className="chocolate_h1">
                        <img src="img/chocolate/h1_chocolate.png"/>
                    </div>
                    <div className="bg_text">
                        <p>
                            つぎつぎ手がでる、弾むおいしさ。軽快な食感に焼き上げたプレッツェルにコクのあるチョコレートをコーティング。ポキッとした心地よい食感のポッキーは、楽しさいっぱいの弾むおいしさです。
                        </p>
                    </div>
                    <div className="flavor">
                        <p>ポッキーの他の味</p>
                    </div>
                    <div className="btn_flavor">
                        <div className="btn_flavor_chocolate">
                            <a href="chocolate.html"><img src="img/chocolate/btn_chocolate.png"/></a>
                        </div>
                        <div className="btn_flavor_strawberry">
                            <a href="strawberry.html"><img src="img/chocolate/btn_strawberry_hv.png"onmouseover="this.src='img/chocolate/btn_strawberry.png';"onmouseout="this.src='img/chocolate/btn_strawberry_hv.png';"/></a>
                        </div>
                        <div className="btn_flavor_matcha">
                            <a href="matcha.html"><img src="img/chocolate/btn_matcha_hv.png"onmouseover="this.src='img/chocolate/btn_matcha.png';"onmouseout="this.src='img/chocolate/btn_matcha_hv.png';"/></a>
                        </div>
                        <div className="btn_flavor_potato">
                            <a href="potato.html"><img src="img/chocolate/btn_potato_hv.png"onmouseover="this.src='img/chocolate/btn_potato.png';"onmouseout="this.src='img/chocolate/btn_potato_hv.png';"/></a>
                        </div>
                        <div className="btn_flavor_melon">
                            <a href="melon.html"><img src="img/chocolate/btn_melon_hv.png"onmouseover="this.src='img/chocolate/btn_melon.png';"onmouseout="this.src='img/chocolate/btn_melon_hv.png';"/></a>
                        </div>
                    </div>
                </div>
            </content>
        </div>
    </div>


    </div>
    
    

  );
}

export default App;
