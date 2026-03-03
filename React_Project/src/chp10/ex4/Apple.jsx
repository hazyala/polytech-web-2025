// import React from "react";
//
// const iphone = [
//     {badge:"NEW",name:"iPone 17 Pro", price:"1,790,000", color: "white, orange, blue",img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17pro-digitalmat-gallery-1-202509?wid=728&hei=666&fmt=p-jpg&qlt=95&.v=ekJPc2lPUlRuRk50SkcyOVdnU1d0TjFla0N0Znl3UThxdjB3SW91ZDVJd0Z3aHFxUnRBUUlIa1B4eXlTTWdWdW8xUkhYejcxalRvY0FPQVpMcmoxMDlLQzdVZ2V3VnpqcXFKTGxlK1dFUXloSUZXMXhpaFRiaTdERUcxSFVMVW4"},
//     {badge:"NEW",name:"iPone 17 Pro Max", price:"1,990,000", color: "white, orange, blue", img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17promax-digitalmat-gallery-1-202509?wid=728&hei=666&fmt=p-jpg&qlt=95&.v=WkVhZXB4WmFzZmdNeXA3cHg3WUZFU0tjazZmSzdrSHdxTW9VUlF0akdCdXpMQytuUEM4Wm5vMWRha0N0RzdPQ3pGbHdxTU5oSkkwKzZZOXF0cVNPL1V0RmgycTRGTHI3SUVxVFVFNFI5QzhTREFXd29VYUtwRlRqTkI5dnBWdWo"},
//     {badge:"NEW",name:"iPone Air", price:"1,590,000", color: "white, beige, blue, black", img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-air-digitalmat-gallery-1-202509?wid=728&hei=666&fmt=p-jpg&qlt=95&.v=cjBEZlU5bVdKZEVBTk45K09QMzAwRzYrc3EwZ1VoVGgyY0J1bS9COCtuaHZibThWRUlEV2tlZ2JSNmpmUlp1TlFuOTJXc2JVdks4czlZWHJTOHkzNkg4SnkwY0diclR3aWNnek5QTEFaZFJTQUVRUTlnK3lQb1JpbFNKUS9EeSs"},
//     {badge:"NEW",name:"iPhone 17", price: "1,290,000", color:"pink, green, blue, white, black", img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-digitalmat-gallery-1-202509?wid=728&hei=666&fmt=p-jpg&qlt=95&.v=SVhTK013TmU5bXcxZm9yb0hnWkxGZlRhSXFkOFhqdTgvUmc4VitXa2VzZUU5aWg1WE9Xd3BOSWtnNzkvSWZLd0ZGMGUwb1Y3aUJoOFNtZnEvQXJFMEJYVzFZSG9ORXhsSkhTN0hjejcrL1BtdndTWEVueTdGZTlOS1ZyVjMxMWg"},
//     {badge:"APPLE INTELLIGENCE",name:"iPhone 16", price: "1,290,000", color:"pink, green, blue, white, black", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone16-digitalmat-gallery-1-202409?wid=728&hei=666&fmt=p-jpg&qlt=95&.v=Y2tBd1RqSzMrd3hScm1lN290ZENDS041dXh2MUpWOGFNK2V6eVg1VGV3OHlLZ0xXbFByV2Vvak9rWndaamlPU3cvMldkdDlIc0lud2tjcDJ3djFCUkV2dGpWUjV5VzZtaGp2QjBiUXR3RUFOM1EvNmN2VndPa21RenM3N2pucTg"},
//     {badge:"APPLE INTELLIGENCE",name:"iPhone 16 Plus", price: "1,150,000", color:"pink, green, blue, white, black", img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone16plus-digitalmat-gallery-1-202409?wid=728&hei=666&fmt=p-jpg&qlt=95&.v=MnlDYTQ3WEQ0bGtBK01PRDByZUlBZDFla0N0Znl3UThxdjB3SW91ZDVJeVVkS01rMzNBdC9ob3gzakFXNEdxNW8xUkhYejcxalRvY0FPQVpMcmoxMDQvalVFTGdPUU1VQnQ4YTRLRW0yaHFtWDk2WmZnUzQ0U2grTk9ReFlMK0E" },
//     {badge:"APPLE INTELLIGENCE",name:"iPhone 16e", price: "990,000", color:"white, black", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone16e-digitalmat-gallery-1-202502?wid=728&hei=666&fmt=p-jpg&qlt=95&.v=YXYrTm9FUzdybDVZZDAxZTcyQXdxdlRhSXFkOFhqdTgvUmc4VitXa2VzZTBhQzVaWUEwVStwQ2tkNlJoeUFDN0ZGMGUwb1Y3aUJoOFNtZnEvQXJFMFBkaWdpMTZDaFdUZkJPOXJmNTNEVmo1WFlTVlJWZVFyc1dtL0xDaXM3Nzg"}
// ]
//
// function Model (props) {
//     return(
//         <div>
//             <h1> *New {props.name}</h1>
//             <img src={props.img} alt={props.name} />
//             <p>₩{props.price}부터</p>
//             <p>{props.color}</p>
//             <button>구입하기</button>
//         </div>
//     )
// }
//
// function Apple () {
//     return (
//         <div>
//             <header>
//                 <h1>iPhone 쇼핑하기</h1>
//             </header>
//             <h2>모든 모델. 당신의 선택은?</h2>
//             <div>
//                 <button></button>
//                 <div>
//                     <div>
//                         {iphone.map((model)=>{
//                             return (
//                                 <Model
//                                     key={model.name}
//                                     badge={model.badge}
//                                     name={model.name}
//                                     price={model.price}
//                                     color={model.color}
//                                     img={model.img}/>
//                             )
//                         })}
//                     </div>
//                 </div>
//                 <button></button>
//             </div>
//         </div>
//     )
// }
//
// export default Apple;

import React, { useRef } from "react";
import "./Apple.css";

const iphone = [
    {badge:"NEW",name:"iPone 17 Pro", price:"1,790,000", color: "white, orange, blue",img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17pro-digitalmat-gallery-1-202509?wid=728&hei=666&fmt=p-jpg&qlt=95&.v=ekJPc2lPUlRuRk50SkcyOVdnU1d0TjFla0N0Znl3UThxdjB3SW91ZDVJd0Z3aHFxUnRBUUlIa1B4eXlTTWdWdW8xUkhYejcxalRvY0FPQVpMcmoxMDlLQzdVZ2V3VnpqcXFKTGxlK1dFUXloSUZXMXhpaFRiaTdERUcxSFVMVW4"},
    {badge:"NEW",name:"iPone 17 Pro Max", price:"1,990,000", color: "white, orange, blue", img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17promax-digitalmat-gallery-1-202509?wid=728&hei=666&fmt=p-jpg&qlt=95&.v=WkVhZXB4WmFzZmdNeXA3cHg3WUZFU0tjazZmSzdrSHdxTW9VUlF0akdCdXpMQytuUEM4Wm5vMWRha0N0RzdPQ3pGbHdxTU5oSkkwKzZZOXF0cVNPL1V0RmgycTRGTHI3SUVxVFVFNFI5QzhTREFXd29VYUtwRlRqTkI5dnBWdWo"},
    {badge:"NEW",name:"iPone Air", price:"1,590,000", color: "white, beige, blue, black", img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-air-digitalmat-gallery-1-202509?wid=728&hei=666&fmt=p-jpg&qlt=95&.v=cjBEZlU5bVdKZEVBTk45K09QMzAwRzYrc3EwZ1VoVGgyY0J1bS9COCtuaHZibThWRUlEV2tlZ2JSNmpmUlp1TlFuOTJXc2JVdks4czlZWHJTOHkzNkg4SnkwY0diclR3aWNnek5QTEFaZFJTQUVRUTlnK3lQb1JpbFNKUS9EeSs"},
    {badge:"NEW",name:"iPhone 17", price: "1,290,000", color:"pink, green, blue, white, black", img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-digitalmat-gallery-1-202509?wid=728&hei=666&fmt=p-jpg&qlt=95&.v=SVhTK013TmU5bXcxZm9yb0hnWkxGZlRhSXFkOFhqdTgvUmc4VitXa2VzZUU5aWg1WE9Xd3BOSWtnNzkvSWZLd0ZGMGUwb1Y3aUJoOFNtZnEvQXJFMEJYVzFZSG9ORXhsSkhTN0hjejcrL1BtdndTWEVueTdGZTlOS1ZyVjMxMWg"},
    {badge:"APPLE INTELLIGENCE",name:"iPhone 16", price: "1,290,000", color:"pink, green, blue, white, black", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone16-digitalmat-gallery-1-202409?wid=728&hei=666&fmt=p-jpg&qlt=95&.v=Y2tBd1RqSzMrd3hScm1lN290ZENDS041dXh2MUpWOGFNK2V6eVg1VGV3OHlLZ0xXbFByV2Vvak9rWndaamlPU3cvMldkdDlIc0lud2tjcDJ3djFCUkV2dGpWUjV5VzZtaGp2QjBiUXR3RUFOM1EvNmN2VndPa21RenM3N2pucTg"},
    {badge:"APPLE INTELLIGENCE",name:"iPhone 16 Plus", price: "1,150,000", color:"pink, green, blue, white, black", img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone16plus-digitalmat-gallery-1-202409?wid=728&hei=666&fmt=p-jpg&qlt=95&.v=MnlDYTQ3WEQ0bGtBK01PRDByZUlBZDFla0N0Znl3UThxdjB3SW91ZDVJeVVkS01rMzNBdC9ob3gzakFXNEdxNW8xUkhYejcxalRvY0FPQVpMcmoxMDQvalVFTGdPUU1VQnQ4YTRLRW0yaHFtWDk2WmZnUzQ0U2grTk9ReFlMK0E" },
    {badge:"APPLE INTELLIGENCE",name:"iPhone 16e", price: "990,000", color:"white, black", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone16e-digitalmat-gallery-1-202502?wid=728&hei=666&fmt=p-jpg&qlt=95&.v=YXYrTm9FUzdybDVZZDAxZTcyQXdxdlRhSXFkOFhqdTgvUmc4VitXa2VzZTBhQzVaWUEwVStwQ2tkNlJoeUFDN0ZGMGUwb1Y3aUJoOFNtZnEvQXJFMFBkaWdpMTZDaFdUZkJPOXJmNTNEVmo1WFlTVlJWZVFyc1dtL0xDaXM3Nzg"}
]

const ColorSwatches = ({ colorString }) => {
    const colors = colorString.split(',').map(color => color.trim());
    return (
        <ul className="color-swatches">
            {colors.map((color) => (
                <li
                    key={color}
                    className="color-swatch"
                    style={{ backgroundColor: color }}
                    title={color}
                ></li>
            ))}
        </ul>
    );
};

function Model (props) {
    return(
        <div className="product-card">
            <p className="product-badge">{props.badge}</p>
            <h2 className="product-name">{props.name}</h2>
            <img className="product-image" src={props.img} alt={props.name} />
            <ColorSwatches colorString={props.color} />
            <div className="card-footer">
                <p className="product-price">₩{props.price}부터</p>
                <button className="buy-button">구입하기</button>
            </div>
        </div>
    )
}

function Apple () {
    const scrollContainerRef = useRef(null);

    const handleScroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = 300 + 24;
            if (direction === 'left') {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="apple-shopping-page">
            <header className="page-header">
                <h1 className="page-title">iPhone 쇼핑하기</h1>
            </header>

            <h2 className="section-title">모든 모델. 당신의 선택은?</h2>

            <div className="product-carousel-wrapper">

                <button
                    className="scroll-button left"
                    onClick={() => handleScroll('left')}
                >
                    &lt;
                </button>

                <div className="product-grid-wrapper">
                    <div className="product-grid" ref={scrollContainerRef}>
                        {iphone.map((model)=>{
                            return (
                                <Model
                                    key={model.name}
                                    badge={model.badge}
                                    name={model.name}
                                    price={model.price}
                                    color={model.color}
                                    img={model.img}/>
                            )
                        })}
                    </div>
                </div>

                <button
                    className="scroll-button right"
                    onClick={() => handleScroll('right')}
                >
                    &gt;
                </button>

            </div>
        </div>
    )
}

export default Apple;