const data = [ // https://www.conservation.org/learning/sustainable-living-tips
    { "key": "Banish bottled water", "value": "Producing just one plastic bottle of water — including transporting and refrigerating it — requires 2,000 times as much energy as producing the same amount of tap water. It also creates massive amounts of plastic waste. Save money and keep plastic out of landfills and oceans by carrying a reusable bottle instead." },
    { "key": "Reclaim the road", "value": "The private car is one of the most carbon-intensive habits in modern life — and one of the most normalized. Whenever you can replace a car trip with a walk, a bike ride or public transit, do it. And if you drive, make your next car electric." },
    { "key": "Borrowing beats buying", "value": "For items you’ll use once or infrequently — luggage for a business trip, say, or a sleeping bag for a camping trip — borrow from a friend instead of buying one brand new. The less you buy new, the less waste you’ll create and the more you’ll reduce your carbon footprint." },
    { "key": "Protect the parks", "value": "Wild places are not passive backdrops. Foot traffic erodes trails, crowds stress wildlife and common products — sunscreen, bug spray — can be toxic to aquatic ecosystems. Visit with intention: choose off-peak times, stay on marked paths and research what you bring before you go." },
    { "key": "Dial down your heat or A/C when you’re away", "value": "Adjusting your thermostat 7 to 10 degrees (higher during the summer, lower during the winter) for eight hours each day will yield up to a 10 percent savings on your annual energy bill and help shrink your carbon footprint. Go a step further by adding insulated window curtains to block drafts in the winter and sunlight in the summer." },
    { "key": "Compost food scraps", "value": "Trashed food ends up in a landfill, where it rots and emits methane — a powerful greenhouse gas that contributes more to global warming than CO2. Toss your leftovers in a compost bin instead. They’ll emit no methane, and you’ll reduce the energy needed to haul your garbage to the dump. And if you’re a gardener, adding compost to your soil will enrich it while increasing moisture retention, reducing the amount of watering you’ll need to do." },
    { "key": "Opt for refurbished electronics", "value": "If you’re in the market for a new phone or computer, consider picking up a refurbished unit. You’ll keep at least one device from languishing in a landfill while reducing the environmental impact posed by manufacturing and shipping a new unit from overseas. If your device is damaged beyond repair, a little research should point you to the right place to properly recycle it." },    
    { "key": "Dispose with care", "value": "Batteries, electronics and medications don't belong in the trash. When they end up in landfills, the chemicals they contain leach into soil and water with serious consequences for ecosystems and human health. Most local governments run collection programs for hazardous household waste — check yours. For hard-to-recycle items, platforms like TerraCycle offer mail-in options." },
    { "key": "Offset your flight", "value": "Airline jets emit more CO2 per kilometer than cars or trains, and the aviation industry accounts for 2 percent of global emissions. The next time you fly, neutralize or offset these emissions by retiring carbon credits that are used to protect natural areas that store CO2 and keep it out of our atmosphere. Start by visiting our flight carbon calculator." },
    { "key": "Go solar", "value": "Drawing power from the sun is completely emission-free — unlike more traditional sources like coal and gas. In fact, you can cut up to 1.6 tons of carbon emissions annually just by installing a solar panel system in your home. Plus, you can save money on your energy bill (and you might be eligible for tax credits)." },    
    { "key": "Wash your clothes in cold water", "value": "About 90 percent of the energy used by your washing machine simply goes toward heating the water. Save that energy — and around $40 each year — by washing full loads in cold water instead." },    
    { "key": "Thanks", "value": "https://www.conservation.org/learning/sustainable-living-tips" },
    { "key": "Upgrade to rechargeable batteries", "value": "Are you still using old-fashioned, single-use, alkaline batteries in devices like your TV’s remote control? Try rechargeable batteries instead. You’ll save money over time and help cut down on the billions of dollars worth of batteries sold each year in the United States, most of which never see a recycling facility. And for dead batteries collecting dust in your drawer: Drop them off at a local recycling that accepts them (be sure to check regulations and restrictions first). Just don’t toss them in the trash!" }
];

function onBox() {
    const key = document.getElementById("key");
    const value = document.getElementById("value");

    document.getElementById("key").textContent = "";
    document.getElementById("value").textContent = "";
    
    key.style.display = "flex";
    value.style.display = "flex";
}

function offBox() {
    const key = document.getElementById("key");
    const value = document.getElementById("value");

    key.style.display = "none";
    value.style.display = "none";
}

function showRandom(){
    const item = data[Math.floor(Math.random() * data.length)];

    document.getElementById("key").textContent = item.key;
    document.getElementById("value").textContent = item.value;
}

const btn = document.getElementById("tipsBtn");

btn.addEventListener("mouseenter", () => {
    onBox();
});

btn.addEventListener("click", () => {
    showRandom();
});

btn.addEventListener("mouseleave", () => {
    offBox();
});
