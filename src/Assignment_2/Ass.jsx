import '../Assignment_2/ass.css';

export function Practise() {
    return (
        <div className="container">
            <header>
                <div className='oneline'>
                    <h2>Business Breakthrough Seminar <span className='hrs'>4 Hour</span> online</h2>
                </div>
            </header>
            <nav >
                <div><span className='arrow'>▶</span></div>
                <div className='maincont'>
                    <div>
                        <p className='headline'>Learn The Right Strategies of <span className='hrs'>Growing Your Business</span> To Multiple Crores</p>
                        <div className='btnplace'>
                            <button className='btn'>JOIN NOW FOR ₹99 <span className='arrow'>▶</span></button>
                        </div>
                    </div>
                    <div className='image-container'>
                        <p className='imgtext'>End day to day firefighting in business</p>
                        <img src="assignment-img.png" alt="" />
                        <div className='imgbox'>
                            <div className='mt-4'>
                                <span className='asia'>Asia's Leading Business Success Coach</span>
                            </div>
                            <div className='mt-4'>
                                <div className='asiaa'>Trained Over <span className='imgtext'>1,00,00</span> Business Owners in Last <span className='imgtext'>16 Years</span></div>
                            </div>
                            <div className='imglast'>
                                <div><span className='star'>&#9733;</span><span className='star'>&#9733;</span><span className='star'>&#9733;</span><span className='star'>&#9733;</span><span className='star'>&#9733;</span></div>
                                <div><span className='imgtext'>70,000+</span> People Rated My Programs with <b>4.96</b> Stars</div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <main>
                <div className='maintext'>Why attend this workshop?</div>
                <div className='mainans'>
                    <p>You Unlock <b>Secrets To Create Time & Wealth</b> In Business</p>
                    <p>You Will Learn Strong Foundational Activities To Win in Your Business</p>
                    <p>Fastrack Your Business Growth with <b>Increased Revenue & Cashflow</b></p>
                    <p>More Profit, More Freedom, More Scale is Guaranteed if you follow the Exact Steps covered in the seminar</p>
                </div>
            </main>
            {/* Additional sections can be made responsive here */}
            {/* You can add more sections or elements as per your design */}
        </div>
    );
}
