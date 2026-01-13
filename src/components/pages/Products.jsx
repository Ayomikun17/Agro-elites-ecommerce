import React, { useState } from 'react';
import SmokedFish from "../../assets/smokedfish.png"
import TableCatFish from "../../assets/tablesizeCatfish.png"
import CatFishJuveniles from "../../assets/fingerling.png"
import CatFishBroodstock from "../../assets/catfish2.png"
import FrozenChicken from "../../assets/frozenchicken.png"
import Feeds from "../../assets/feed.png"
import SeasonalMaize from "../../assets/seasonalMaize.png"
import ButcheredGoat from "../../assets/butcheredGoat.png"
import Poultry from "../../assets/poultry2.jpg"
import Aqualculture from "../../assets/aqualculture.jpg"
import Feed from "../../assets/feed.png"
import Protein from "../../assets/protein.jpg"
import Maize from "../../assets/maize.jpg"

// Manual SVG Icons for UI Elements (No external dependencies)
const Icons = {
  Plus: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>,
  Minus: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>,
  Info: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>,
  ShoppingCart: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>,
  X: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
};

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantities, setQuantities] = useState({});

  // Category Configuration with Actual Images and Background Colors
  const categoryData = [
    { 
      name: 'All', 
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=200', 
      bgColor: 'bg-[#F1F8E9]', // Light Mint
      desc: 'View all' 
    },
    { 
      name: 'Aquaculture', 
      image: Aqualculture, 
      bgColor: 'bg-[#E0F7FA]', // Light Cyan
      desc: 'Catfish & Juveniles' 
    },
    { 
      name: 'Poultry', 
      image: Poultry, 
      bgColor: 'bg-[#FFF3E0]', // Light Orange
      desc: 'Dressed Chicken' 
    },
    { 
      name: 'Protein', 
      image: Protein, 
      bgColor: 'bg-[#FFFDE7]', // Light Yellow
      desc: 'Goat & Beef' 
    },
    { 
      name: 'Crops', 
      image: Maize, 
      bgColor: 'bg-[#F3E5F5]', // Light Purple
      desc: 'Maize & Seasonal' 
    },
    { 
      name: 'Feeds', 
      image: Feed, 
      bgColor: 'bg-[#E8EAF6]', // Light Indigo
      desc: 'Formulations' 
    }
  ];

  const products = [
    {
      id: 1,
      name: "Smoked Catfish (1 kg)",
      price: "₦16,000 per kg",
      category: "Aquaculture",
      image: SmokedFish,
      shortDesc: "Rich, ready‑to‑eat smoked catfish, produced to NAFDAC specifications and export‑ready—carefully processed for hygiene and long‑lasting flavour.",
      fullDesc: "Our smoked catfish is crafted from carefully selected, farm‑raised fish and smoked to a clean, aromatic finish. Vacuum‑sealing and proper drying help maintain quality and shelf life. Perfect for soups, stews, sauces, and snacks, with authentic flavour you can trust at home and abroad.",
      highlights: ["NAFDAC‑spec, export‑ready processing", "Clean, consistent smoke profile", "Convenient—ready to cook or eat", "Farm‑raised for traceable quality"],
      storage: "Keep sealed in a cool, dry place; refrigerate after opening. For extended storage, freeze."
    },
    {
      id: 2,
      name: "Table‑Size Catfish (1 kg)",
      price: "₦2,800 per kg",
      category: "Aquaculture",
      image: TableCatFish,
      shortDesc: "Fresh, firm table‑size catfish—ideal for pepper soup, grilling, and stews.",
      fullDesc: "Harvested to order for local deliveries, our table‑size catfish offers firm texture and clean flavour. Available whole or dressed (on request) for homes, restaurants, and retailers.",
      highlights: ["Fresh harvest, firm texture", "Great for grilling, pepper soup, oven roasting", "Available whole or dressed (by request)"],
      storage: "Keep chilled and cook promptly; freeze for longer storage."
    },
    {
      id: 3,
      name: "Catfish Broodstock",
      price: "Price on Request",
      category: "Aquaculture",
      image: CatFishBroodstock,
      shortDesc: "Healthy catfish broodstock selected for breeding performance—sold per kg to support predictable hatchery outcomes.",
      fullDesc: "Our broodstock are chosen for vigour and consistency. Sourced from well‑managed ponds and handled with biosecurity in mind, they support reliable hatchery performance.",
      highlights: ["Performance‑oriented selection", "Health and biosecurity focused", "Traceable farm records (on request)"],
      ordering: "Sale unit: Per kg (aggregate weight). MOQ: (Set your preferred MOQ here). Logistics: Bring transport containers/aeration where applicable."
    },
    {
      id: 4,
      name: "Catfish Juveniles (8 cm)",
      price: "₦50 each",
      category: "Aquaculture",
      image: CatFishJuveniles,
      shortDesc: "Vigorous catfish juveniles (8 cm) with consistent grading for predictable grow‑out and feed efficiency.",
      fullDesc: "Raised under clean nursery conditions, our 8 cm juveniles give farmers the uniformity needed for growth tracking and FCR performance. Acclimatisation guidance is provided to help you start strong.",
      highlights: ["8 cm size for consistent stocking", "Clean nursery and grading", "Acclimatisation guidance available"],
      ordering: "Sale unit: Per juvenile (8 cm). MOQ: (Set your preferred MOQ here)."
    },
    {
      id: 5,
      name: "Premium Dressed Chicken",
      price: "₦4,500 – ₦6,000 per kg",
      category: "Poultry",
      image: FrozenChicken,
      shortDesc: "Clean, dressed chicken, processed hygienically and frozen to preserve freshness—ready for home cooking or food service.",
      fullDesc: "Our dressed chicken is processed in a clean environment, quickly chilled and frozen to lock in flavour and safety. Convenient for grills, stews, roasts, and catering orders.",
      highlights: ["Frozen for freshness and safety", "Consistent weight and clean dressing", "Reliable supply for homes and hospitality"],
      storage: "Keep frozen at −18°C or below. Thaw under refrigeration and cook thoroughly."
    },
    {
      id: 6,
      name: "Custom-Formulated Feeds",
      price: "Price on Request",
      category: "Feeds",
      image: Feeds,
      shortDesc: "Balanced fish and poultry feeds, produced to farm specifics: species, life stage, target FCR, pellet size, and protein %.",
      fullDesc: "We formulate feeds for catfish, broilers, layers, and turkeys to match your production goals. Specify species, starter/grower/finisher, protein %, and pellet sizes.",
      highlights: ["Custom protein % and pellet sizes", "Supports uniform growth and FCR targets", "Suitable for farms and retail distribution"],
      ordering: "Specs required: Species, stage, protein %, pellet size, bag size. MOQ: (Set your preferred MOQ here)."
    },
    {
      id: 7,
      name: "Seasonal Maize",
      price: "Price on Request",
      category: "Crops",
      image: SeasonalMaize,
      shortDesc: "Field‑fresh maize from our Nasarawa farms. Pricing and bag sizes available on request.",
      fullDesc: "Our maize is harvested seasonally to ensure maximum freshness for both feed production and direct consumption.",
      highlights: ["Farm-fresh quality", "Nasarawa origin", "Cleaned and sorted"]
    },
    {
      id: 8,
      name: "Goat & Beef (Butchery)",
      price: "Price on Request",
      category: "Protein",
      image: ButcheredGoat,
      shortDesc: "Fresh goat and beef cuts processed to order. Cut options, lead time, and pricing available on request.",
      fullDesc: "Processed to order in a hygienic environment. Choose your specific cuts for household or commercial use.",
      highlights: ["Hygienic processing", "Processed to order", "Custom cut options"]
    }
  ];

  const updateQuantity = (id, delta) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta)
    }));
  };

  const renderProductCard = (product) => (
    <div key={product.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col h-full border border-gray-100">
      <div className="h-52 overflow-hidden relative">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-black text-agro-charcoal mb-1 leading-tight">{product.name}</h3>
        <p className="text-agro-green font-bold text-sm mb-3">{product.price}</p>
        <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-grow line-clamp-3">{product.shortDesc}</p>
        
        <div className="flex items-center justify-between bg-gray-50 p-2 rounded-2xl mb-4 border border-gray-100">
          <span className="text-[10px] uppercase font-black text-gray-400 ml-2">Quantity</span>
          <div className="flex items-center gap-4">
            <button onClick={() => updateQuantity(product.id, -1)} className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors">
              <Icons.Minus />
            </button>
            <span className="font-black text-agro-charcoal w-4 text-center">{quantities[product.id] || 1}</span>
            <button onClick={() => updateQuantity(product.id, 1)} className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center hover:bg-agro-green hover:text-white transition-colors">
              <Icons.Plus />
            </button>
          </div>
        </div>

        <div className="flex gap-2">
          <button onClick={() => setSelectedProduct(product)} className="flex-1 bg-gray-100 text-agro-charcoal py-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
            <Icons.Info /> View More
          </button>
          <a href={`https://wa.me/2348035138049?text=I'd like to order ${quantities[product.id] || 1} x ${product.name}`} className="flex-1 bg-agro-yellow text-agro-charcoal py-4 rounded-2xl font-black uppercase text-xs flex items-center justify-center gap-2 shadow-md hover:bg-agro-green hover:text-white transition-all">
            <Icons.ShoppingCart /> Order
          </a>
        </div>
      </div>
    </div>
  );

  const activeCategoryList = activeCategory === 'All' ? categoryData.filter(c => c.name !== 'All') : categoryData.filter(c => c.name === activeCategory);

  return (
    <div id="products" className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl font-black text-agro-charcoal mb-6">Our Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Premium agribusiness products from our integrated farms in Nasarawa.
            Sustainable, hygienic, and quality-assured.
          </p>
        </div>

        {/* Shop by Category Section - Side-by-Side Layout */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-agro-charcoal">Shop by Category</h2>
            <button onClick={() => setActiveCategory('All')} className="text-sm font-bold text-agro-green flex items-center gap-1 group hover:underline">
              View All <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categoryData.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center p-3 rounded-[2rem] transition-all border-2 text-left group h-full overflow-hidden ${
                  activeCategory === cat.name 
                  ? 'border-agro-green shadow-lg scale-105 ' + cat.bgColor 
                  : 'border-transparent bg-white hover:bg-gray-50 shadow-sm'
                }`}
              >
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 shrink-0 shadow-sm border-2 border-white">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="font-black text-agro-charcoal text-[13px] leading-tight mb-0.5">{cat.name}</p>
                  <p className="text-[10px] text-gray-500 font-bold leading-tight">{cat.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Grouped Product Grids */}
        <div className="space-y-24">
          {activeCategoryList.map(cat => {
            const categoryProducts = products.filter(p => p.category === cat.name);
            if (categoryProducts.length === 0) return null;

            return (
              <div id={cat.name} key={cat.name} className="animate-in fade-in slide-in-from-bottom-6 duration-700">
                <div className="flex items-center gap-6 mb-10">
                  <h2 className="text-3xl font-black text-agro-charcoal tracking-tight">{cat.name}</h2>
                  <div className="h-px bg-gray-200 w-full hidden md:block"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {categoryProducts.map(product => renderProductCard(product))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detail Modal with Linked Quantity State */}
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
             <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[3.5rem] shadow-2xl relative animate-in zoom-in-95 duration-300">
                <button onClick={() => setSelectedProduct(null)} className="absolute top-8 right-8 p-3 bg-gray-100 rounded-full hover:bg-red-500 hover:text-white transition-all z-10">
                  <Icons.X />
                </button>
                <div className="grid md:grid-cols-2 gap-4 p-4 md:p-8">
                   <div className="h-[300px] md:h-full overflow-hidden rounded-[2.5rem]">
                      <img src={selectedProduct.image} className="w-full h-full object-cover shadow-inner" alt={selectedProduct.name} />
                   </div>
                   <div className="p-6 md:p-8 space-y-8">
                      <div>
                        <span className="bg-agro-green/10 text-agro-green px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{selectedProduct.category}</span>
                        <h2 className="text-4xl font-black text-agro-charcoal mt-3 leading-tight">{selectedProduct.name}</h2>
                        <p className="text-2xl font-bold text-agro-yellow mt-1">{selectedProduct.price}</p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-black text-agro-green uppercase text-xs tracking-widest">Full Description</h4>
                        <p className="text-gray-600 italic border-l-4 border-agro-green pl-6 text-sm">{selectedProduct.fullDesc}</p>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        <h4 className="font-black text-agro-charcoal uppercase text-xs tracking-widest">Key Highlights</h4>
                        {selectedProduct.highlights.map(h => (
                           <div key={h} className="bg-gray-50 p-3 rounded-2xl text-[10px] font-bold text-gray-700 flex items-center gap-3">
                             <div className="w-2 h-2 bg-agro-green rounded-full" /> {h}
                           </div>
                        ))}
                      </div>
                      
                      {/* Modal Footer & Quantity */}
                      <div className="pt-6 border-t border-gray-100 space-y-4">
                        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-2xl border border-gray-100">
                          <span className="text-[10px] uppercase font-black text-gray-400 ml-3 tracking-widest">Select Quantity</span>
                          <div className="flex items-center gap-6">
                            <button onClick={() => updateQuantity(selectedProduct.id, -1)} className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center hover:bg-red-50 transition-colors"><Icons.Minus /></button>
                            <span className="font-black text-2xl text-agro-charcoal w-6 text-center">{quantities[selectedProduct.id] || 1}</span>
                            <button onClick={() => updateQuantity(selectedProduct.id, 1)} className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center hover:bg-agro-green hover:text-white transition-colors"><Icons.Plus /></button>
                          </div>
                        </div>
                        <a href={`https://wa.me/2348035138049?text=I'd like to order ${quantities[selectedProduct.id] || 1} x ${selectedProduct.name}`} className="block w-full bg-agro-yellow text-agro-charcoal py-5 rounded-[1.5rem] text-center font-black uppercase tracking-widest hover:bg-agro-green hover:text-white transition-all shadow-xl text-sm">
                          Order {quantities[selectedProduct.id] || 1} Unit(s) via WhatsApp
                        </a>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;