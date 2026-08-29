import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  const [search, setSearch] = useState("")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const products = [
  {
    name: "Wireless Mouse",
    description: "Ergonomic design with 2.4GHz connectivity",
    price: "$15",
    available: true,
    buyNow: "Buy Now at $15",
    image: "/images/mouse.jpg"
  },
  {
    name: "Mechanical Keyboard",
    description: "RGB backlit, blue switches",
    price: "$45",
    available: true,
    buyNow: "Buy Now at $45",
    image: "/images/keyboard.jpg"
  },
  {
    name: "Gaming Headset",
    description: "Surround sound with noise-canceling mic",
    price: "$60",
    available: false,
    buyNow: "Buy Now at $60",
    image: "/images/headset.jpg"
  },
  {
    name: "Smartwatch",
    description: "Tracks fitness, heart rate, and sleep",
    price: "$120",
    available: true,
    buyNow: "Buy Now at $120",
    image: "/images/smartwatch.jpg"
  },
  {
    name: "Portable SSD",
    description: "1TB storage, USB-C interface",
    price: "$99",
    available: true,
    buyNow: "Buy Now at $99",
    image: "/images/ssd.jpg"
  },
  {
    name: "Bluetooth Speaker",
    description: "Waterproof, 12-hour battery life",
    price: "$35",
    available: true,
    buyNow: "Buy Now at $35",
    image: "/images/speaker.jpg"
  },
  {
    name: "Smartphone Stand",
    description: "Adjustable aluminum desk holder",
    price: "$10",
    available: true,
    buyNow: "Buy Now at $10",
    image: "/images/phone-stand.jpg"
  },
  {
    name: "LED Desk Lamp",
    description: "Touch control with 3 brightness levels",
    price: "$25",
    available: false,
    buyNow: "Buy Now at $25",
    image: "/images/desk-lamp.jpg"
  },
  {
    name: "USB-C Hub",
    description: "5-in-1 hub with HDMI and SD card reader",
    price: "$40",
    available: true,
    buyNow: "Buy Now at $40",
    image: "/images/usb-hub.jpg"
  },
  {
    name: "Noise Cancelling Earbuds",
    description: "Wireless earbuds with charging case",
    price: "$75",
    available: true,
    buyNow: "Buy Now at $75",
    image: "/images/earbuds.jpg"
  },
  {
    name: "Wireless Charger",
    description: "Fast charging pad for compatible devices",
    price: "$30",
    available: true,
    buyNow: "Buy Now at $30",
    image: "/images/charger.jpg"
},
{
    name: "Webcam",
    description: "1080p HD webcam with built-in microphone",
    price: "$50",
    available: true,
    buyNow: "Buy Now at $50",
    image: "/images/webcam.jpg"
},
{
    name: "Power Bank",
    description: "20000mAh portable power bank with fast charging",
    price: "$40",
    available: false,
    buyNow: "Buy Now at $40",
    image: "/images/power-bank.jpg"
},
{
    name: "Gaming Mouse",
    description: "High precision mouse with adjustable DPI",
    price: "$35",
    available: true,
    buyNow: "Buy Now at $35",
    image: "/images/gaming-mouse.jpg"
},
{
    name: "Laptop Stand",
    description: "Adjustable aluminum stand for laptops",
    price: "$45",
    available: true,
    buyNow: "Buy Now at $45",
    image: "/images/laptop-stand.jpg"
}
  
];
 const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    )
  return (
            <>
<div className="search-bar">

    <select>
        <option>All</option>
        <option>Electronics</option>
        <option>Accessories</option>
    </select>

    <div className="search-container">

        <input
            type="text"
            placeholder="Search TechCart.in"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />

        {search && filteredProducts.length > 0 && (
            <div className="suggestions">

                {filteredProducts.map((product, index) => (
                    <div className="suggestion" key={index} onClick={() => setSelectedProduct(product)}>
                        {product.name}
                    </div>
                ))}

            </div>
        )}

    </div>

    <button>🔍</button>

</div>
{selectedProduct && (
    <div className="product-modal">

        <div className="modal-content">

            <button
                className="close-btn"
                onClick={() => setSelectedProduct(null)}
            >
                ×
            </button>

            <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
            />

            <div className="modal-details">

                <h2>{selectedProduct.name}</h2>

                <p>{selectedProduct.description}</p>

                <h3>{selectedProduct.price}</h3>

                <p>
                    {selectedProduct.available
                        ? "✓ Available"
                        : "✕ Out of Stock"}
                </p>

            </div>

        </div>

    </div>
)}
    
    <div className="app">

        <h1 className="page-title">TechCart</h1>

        <div className="product-grid">

            {products.map((product, index) => {
                return (
                    <Card
                        key={index}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        available={product.available}
                        buy={product.buyNow}
                        image={product.image}
                    />
                )
            })}
        </div>
    </div>
    </>
)
}
export default App;