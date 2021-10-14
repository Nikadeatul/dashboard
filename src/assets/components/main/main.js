import "./main.css";
import hello from "../../assets/hello.svg";
import Chart from '../charts/charts';


const main = () => {
    return(
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={hello} alt="hello" />
                    <div className="main__greeting">
                        <h1>Hello Codersbite</h1>
                        <p>Welcome to your admin dashboard</p>
                    </div>
                </div>
            
                <div className="main-cards">
                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of subscriber</p>
                            <span className="font-bold-title">578</span>
                        </div>
                    </div>
                    <div className="card">
                        <i className="fa fa-calender fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p"> Times of Watching</p>
                            <span className="font-bold text-title">2467</span>
                        </div>
                    </div>
                    <div className="card">
                        <i className="fa fa-video-camera fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Videos</p>
                            <span className="font-bold text-title">348</span>
                        </div>
            
                    </div>
                </div>
                <div  className="card">
                         <i className="fa fa-thumb-up fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p"> Number of Likes</p>
                            <span className="font-bold text-tittle">645</span>
                        </div>
                </div>
            
            </div>
            <div className="charts">
                <div className="charts__left">
                    <div className="charts__left__title">
                        <div>
                            <h1>Daily Reports</h1>
                            <p>Cupertino, Caleforniam USA</p>
                        </div>
                        <i className="fa fa-usd"></i>
                    
                    
                    </div>
                    <Chart />
                </div>
                <div className="charts__right">
                    <div className="charts__right__title">
                        <div>
                            <h1>Stats Reports</h1>
                            <p>Cupertino, Calefornia,USA</p>
                        </div>
                        <i className="fa fa-use"></i>
                    
                    </div>
                    <div className="charts_right__cards">
                        <div classname="card1">
                            <h1>Income</h1>
                            <p>$75,300</p>
                        </div>
                        <div classname="card2">
                            <h1>Income</h1>
                            <p>$124,200</p>
                        </div>
                        <div classname="card3">
                            <h1>Income</h1>
                            <p>39000</p>
                        </div>
                        <div classname="card4">
                            <h1>Income</h1>
                            <p>$1881</p>
                        </div>
                
                    </div>
                </div>
            
            </div>

        
        
        
        
        
        </main>

    )

}


export default main;
