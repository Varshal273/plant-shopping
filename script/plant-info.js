const plants = [
    {
        "string": "categories",
        "categories": [
            {
                "name": "Flowering Plants (Angiosperms)",
                "sub_categories": [
                    {
                        "name": "Annuals",
                        "para": "Completing their life cycle in one year, annuals provide vibrant, seasonal color.",
                        "plant": [
                            {
                                "name": "Marigold",
                                "para": "Known for their bright, sunny blooms, marigolds can repel pests and attract beneficial insects."
                            },
                            {
                                "name": "Petunia",
                                "para": "With a wide range of colors, petunias are popular in hanging baskets and garden beds for their long-lasting blooms."
                            },
                            {
                                "name": "Sunflower",
                                "para": "These tall plants produce large, cheerful flowers and edible seeds, making them both decorative and functional."
                            }
                        ]
                    },
                    {
                        "name": "Perennials",
                        "para": "Living for more than two years, perennials return season after season, offering lasting beauty.",
                        "plant": [
                            {
                                "name": "Lavender",
                                "para": "Valued for its aromatic flowers and leaves, lavender is used in aromatherapy and as a natural insect repellent."
                            },
                            {
                                "name": "Echinacea",
                                "para": "Known for its daisy-like flowers and medicinal properties, echinacea boosts the immune system."
                            },
                            {
                                "name": "Peony",
                                "para": "With lush, fragrant blooms, peonies are a favorite in floral arrangements and gardens."
                            }
                        ]
                    },
                    {
                        "name": "Biennials",
                        "para": "These plants complete their life cycle in two years, growing foliage in the first year and flowering in the second.",
                        "plant": [
                            {
                                "name": "Foxglove",
                                "para": "Recognizable by its tall spikes of tubular flowers, foxglove is also a source of digitalis, a heart medication."
                            },
                            {
                                "name": "Hollyhock",
                                "para": "With tall, colorful spikes, hollyhocks add vertical interest to gardens and attract pollinators."
                            },
                            {
                                "name": "Parsley",
                                "para": "Often grown as a biennial herb, parsley is rich in vitamins and minerals and used to garnish and flavor dishes."
                            }
                        ]
                    },
                    {
                        "name": "Bulbs",
                        "para": "Bulbous plants store energy in underground bulbs, enabling them to survive adverse conditions and bloom yearly.",
                        "plant": [
                            {
                                "name": "Tulip",
                                "para": "Famous for their vibrant, cup-shaped flowers, tulips are a symbol of spring and widely used in gardens and floral arrangements."
                            },
                            {
                                "name": "Daffodil",
                                "para": "Known for their bright yellow flowers, daffodils are among the first to bloom in spring, symbolizing renewal and hope."
                            },
                            {
                                "name": "Lily",
                                "para": "With their large, fragrant blooms, lilies are popular in gardens and as cut flowers, often used in bouquets and decorations."
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Non-Flowering Plants",
                "sub_categories": [
                    {
                        "name": "Ferns",
                        "para": "These ancient plants reproduce via spores and are prized for their feathery fronds.",
                        "plant": [
                            {
                                "name": "Boston Fern",
                                "para": "Popular as a houseplant, the Boston fern improves indoor air quality and adds lush greenery to interiors."
                            },
                            {
                                "name": "Maidenhair Fern",
                                "para": "Delicate and graceful, maidenhair ferns are often grown in shaded garden areas or as houseplants."
                            },
                            {
                                "name": "Staghorn Fern",
                                "para": "Known for their antler-like fronds, staghorn ferns are unique epiphytes that can be mounted on boards for display."
                            }
                        ]
                    },
                    {
                        "name": "Mosses",
                        "para": "Small, non-vascular plants that thrive in moist, shaded environments.",
                        "plant": [
                            {
                                "name": "Sphagnum Moss",
                                "para": "Used in horticulture for its water-retentive properties, sphagnum moss is essential in potting mixes and as a soil amendment."
                            },
                            {
                                "name": "Cushion Moss",
                                "para": "This dense, cushion-like moss is commonly used in rock gardens and terrariums for its decorative appeal."
                            },
                            {
                                "name": "Peat Moss",
                                "para": "Harvested from sphagnum bogs, peat moss is a major component in potting soil mixes, enhancing moisture retention and aeration."
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Trees",
                "sub_categories": [
                    {
                        "name": "Deciduous Trees",
                        "para": "These trees shed their leaves annually, showcasing a cycle of growth and dormancy.",
                        "plant": [
                            {
                                "name": "Oak",
                                "para": "Valued for their strong wood and acorns, oak trees provide habitat for wildlife and are important timber sources."
                            },
                            {
                                "name": "Maple",
                                "para": "Known for their vibrant autumn foliage and sweet sap, maples are a staple in landscapes and syrup production."
                            },
                            {
                                "name": "Birch",
                                "para": "With their distinctive white bark and delicate leaves, birch trees are ornamental favorites in gardens and parks."
                            }
                        ]
                    },
                    {
                        "name": "Evergreen Trees",
                        "para": "Evergreen trees retain their foliage year-round, providing constant greenery.",
                        "plant": [
                            {
                                "name": "Pine",
                                "para": "With needle-like leaves and cones, pine trees are widely used for timber, paper, and as Christmas trees."
                            },
                            {
                                "name": "Spruce",
                                "para": "These conical trees are popular in landscaping and for their wood, which is used in construction and musical instruments."
                            },
                            {
                                "name": "Cedar",
                                "para": "Known for their aromatic wood, cedar trees are used in furniture making, closets, and as ornamental landscape trees."
                            }
                        ]
                    },
                    {
                        "name": "Fruit Trees",
                        "para": "These trees produce edible fruits, offering both beauty and bounty.",
                        "plant": [
                            {
                                "name": "Apple",
                                "para": "A staple in orchards, apple trees produce a wide variety of fruits used for eating, cooking, and cider making."
                            },
                            {
                                "name": "Cherry",
                                "para": "Known for their beautiful spring blossoms and sweet fruits, cherry trees are both ornamental and productive."
                            },
                            {
                                "name": "Mango",
                                "para": "Grown in tropical climates, mango trees produce juicy, flavorful fruits enjoyed fresh, dried, or in culinary dishes."
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Shrubs and Bushes",
                "sub_categories": [
                    {
                        "name": "Flowering Shrubs",
                        "para": "These shrubs produce vibrant blooms, adding color and interest to landscapes.",
                        "plant": [
                            {
                                "name": "Hydrangea",
                                "para": "With large, showy flower clusters, hydrangeas are popular in gardens and floral arrangements."
                            },
                            {
                                "name": "Rhododendron",
                                "para": "These shrubs are known for their large, bright flowers and are commonly used in landscape plantings."
                            },
                            {
                                "name": "Azalea",
                                "para": "A type of rhododendron, azaleas bloom profusely in spring, offering a spectacular display of color."
                            }
                        ]
                    },
                    {
                        "name": "Non-Flowering Shrubs",
                        "para": "These shrubs focus on foliage rather than flowers, providing structure and greenery.",
                        "plant": [
                            {
                                "name": "Boxwood",
                                "para": "Often used in hedges and topiary, boxwoods are valued for their dense, evergreen foliage and versatility in shaping."
                            },
                            {
                                "name": "Juniper",
                                "para": "Known for their needle-like leaves and berries, junipers are used in landscaping for ground cover, hedges, and ornamental trees."
                            },
                            {
                                "name": "Holly",
                                "para": "With glossy, evergreen leaves and bright red berries, holly is a traditional decorative plant, especially during the winter holidays."
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Grasses",
                "sub_categories": [
                    {
                        "name": "Ornamental Grasses",
                        "para": "These grasses add texture and movement to gardens, often used for their aesthetic appeal.",
                        "plant": [
                            {
                                "name": "Fountain Grass",
                                "para": "With its graceful, arching stems and feathery plumes, fountain grass is a popular choice for garden borders and containers."
                            },
                            {
                                "name": "Blue Fescue",
                                "para": "Known for its compact, blue-green tufts, blue fescue is used as a ground cover and in rock gardens."
                            },
                            {
                                "name": "Pampas Grass",
                                "para": "Famous for its tall, fluffy plumes, pampas grass creates dramatic focal points in landscapes and is used in floral arrangements."
                            }
                        ]
                    },
                    {
                        "name": "Lawn Grasses",
                        "para": "These grasses are cultivated to create lush, green lawns for recreational and aesthetic purposes.",
                        "plant": [
                            {
                                "name": "Kentucky Bluegrass",
                                "para": "Prized for its fine texture and rich color, Kentucky bluegrass is a favorite for lawns and sports fields."
                            },
                            {
                                "name": "Bermuda Grass",
                                "para": "Known for its durability and heat tolerance, Bermuda grass is commonly used in lawns, golf courses, and sports fields."
                            },
                            {
                                "name": "Zoysia Grass",
                                "para": "Valued for its dense growth and drought resistance, zoysia grass creates thick, resilient lawns."
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Succulents and Cacti",
                "sub_categories": [
                    {
                        "name": "Succulents",
                        "para": "These plants have thick, fleshy parts that store water, making them drought-tolerant and low-maintenance.",
                        "plant": [
                            {
                                "name": "Aloe Vera",
                                "para": "Known for its medicinal properties, aloe vera is used to treat burns and skin conditions, and is also a popular houseplant."
                            },
                            {
                                "name": "Echeveria",
                                "para": "With their rosette-shaped leaves, echeverias are ornamental succulents used in gardens, containers, and arrangements."
                            },
                            {
                                "name": "Jade Plant",
                                "para": "A symbol of good luck, the jade plant is a popular indoor succulent with thick, glossy leaves."
                            }
                        ]
                    },
                    {
                        "name": "Cacti",
                        "para": "These succulents are characterized by their spines and ability to thrive in arid environments.",
                        "plant": [
                            {
                                "name": "Saguaro Cactus",
                                "para": "Iconic to the American Southwest, the saguaro cactus can live for over a century and provides habitat for desert wildlife."
                            },
                            {
                                "name": "Prickly Pear",
                                "para": "Known for its paddle-shaped stems and edible fruits, prickly pear cacti are used in landscaping and as a food source."
                            },
                            {
                                "name": "Barrel Cactus",
                                "para": "With their round, ribbed shape, barrel cacti are a striking addition to desert gardens and xeriscapes."
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Aquatic Plants",
                "sub_categories": [
                    {
                        "name": "Floating Plants",
                        "para": "These plants float on the water's surface, adding beauty and habitat to ponds and water gardens.",
                        "plant": [
                            {
                                "name": "Water Hyacinth",
                                "para": "With their attractive purple flowers and floating leaves, water hyacinths improve water quality but can become invasive."
                            },
                            {
                                "name": "Duckweed",
                                "para": "Tiny and fast-growing, duckweed covers water surfaces, providing shade and habitat for aquatic life."
                            },
                            {
                                "name": "Water Lettuce",
                                "para": "Resembling open heads of lettuce, water lettuce floats on the water's surface, offering shade and protection for fish."
                            }
                        ]
                    },
                    {
                        "name": "Submerged Plants",
                        "para": "Growing completely underwater, these plants play a crucial role in maintaining water quality and providing oxygen.",
                        "plant": [
                            {
                                "name": "Anacharis",
                                "para": "Common in aquariums and ponds, anacharis oxygenates water and provides habitat for fish and invertebrates."
                            },
                            {
                                "name": "Hornwort",
                                "para": "This feathery plant grows rapidly underwater, helping to control algae and provide cover for aquatic life."
                            },
                            {
                                "name": "Vallisneria",
                                "para": "Known for its long, ribbon-like leaves, vallisneria is used in aquariums and ponds to improve water quality."
                            }
                        ]
                    },
                    {
                        "name": "Emergent Plants",
                        "para": "These plants have roots underwater and stems above the water surface, often found in wetlands.",
                        "plant": [
                            {
                                "name": "Cattail",
                                "para": "Recognizable by their tall, brown flower spikes, cattails are important for erosion control and wildlife habitat."
                            },
                            {
                                "name": "Lotus",
                                "para": "Sacred in many cultures, lotus plants produce large, beautiful flowers and are used in water gardens and ornamental ponds."
                            },
                            {
                                "name": "Water Lily",
                                "para": "With their floating leaves and fragrant flowers, water lilies are popular in ponds and water gardens for their beauty and shade."
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Climbers and Vines",
                "sub_categories": [
                    {
                        "name": "Climbers",
                        "para": "These plants use structures to support their upward growth, often producing stunning displays.",
                        "plant": [
                            {
                                "name": "Ivy",
                                "para": "Versatile and hardy, ivy is used to cover walls, fences, and trellises, adding greenery and texture to vertical spaces."
                            },
                            {
                                "name": "Clematis",
                                "para": "Known for their large, showy flowers, clematis vines are popular in gardens for covering trellises and arbors."
                            },
                            {
                                "name": "Bougainvillea",
                                "para": "With vibrant, papery bracts, bougainvillea adds a splash of color to walls and fences in warm climates."
                            }
                        ]
                    },
                    {
                        "name": "Vines",
                        "para": "With long, trailing stems, vines can cover large areas quickly, providing lush coverage.",
                        "plant": [
                            {
                                "name": "Grapevine",
                                "para": "Cultivated for their fruit, grapevines are also used in landscaping to cover pergolas and trellises."
                            },
                            {
                                "name": "Wisteria",
                                "para": "Famous for their cascading clusters of flowers, wisteria vines create dramatic displays in gardens and on structures."
                            },
                            {
                                "name": "Passionflower",
                                "para": "Known for their intricate, exotic flowers, passionflower vines attract pollinators and produce edible fruits."
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Herbs",
                "sub_categories": [
                    {
                        "name": "Culinary Herbs",
                        "para": "These herbs are grown for their flavor and aroma, enhancing the taste of various dishes.",
                        "plant": [
                            {
                                "name": "Basil",
                                "para": "A staple in Italian cuisine, basil is used in pesto, salads, and sauces, known for its sweet, aromatic leaves."
                            },
                            {
                                "name": "Rosemary",
                                "para": "With its pine-like fragrance, rosemary is used in cooking and as an ornamental plant in gardens and containers."
                            },
                            {
                                "name": "Thyme",
                                "para": "Valued for its versatile flavor, thyme is used in a variety of dishes, from soups and stews to roasted meats and vegetables."
                            }
                        ]
                    },
                    {
                        "name": "Medicinal Herbs",
                        "para": "Known for their healing properties, medicinal herbs have been used for centuries in traditional medicine.",
                        "plant": [
                            {
                                "name": "Echinacea",
                                "para": "Used to boost the immune system, echinacea is commonly taken as a supplement to prevent colds and infections."
                            },
                            {
                                "name": "Ginseng",
                                "para": "Valued for its energizing and stress-relieving properties, ginseng is used in herbal remedies and supplements."
                            },
                            {
                                "name": "Chamomile",
                                "para": "Known for its calming effects, chamomile is used to make tea that helps with sleep and digestion."
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Indoor Plants",
                "sub_categories": [
                    {
                        "name": "Foliage Plants",
                        "para": "Grown primarily for their attractive leaves, these plants thrive indoors and improve air quality.",
                        "plant": [
                            {
                                "name": "Snake Plant",
                                "para": "Hardy and low-maintenance, snake plants are known for their upright, sword-like leaves and air-purifying abilities."
                            },
                            {
                                "name": "Pothos",
                                "para": "With its trailing vines and heart-shaped leaves, pothos is a popular choice for hanging baskets and shelves."
                            },
                            {
                                "name": "Peace Lily",
                                "para": "Noted for its elegant white flowers and glossy leaves, peace lilies are also effective at removing toxins from the air."
                            }
                        ]
                    },
                    {
                        "name": "Flowering Indoor Plants",
                        "para": "Bringing color and fragrance indoors, these plants produce beautiful blooms.",
                        "plant": [
                            {
                                "name": "Orchid",
                                "para": "With their exotic, long-lasting flowers, orchids are prized for their beauty and are often used as decorative houseplants."
                            },
                            {
                                "name": "African Violet",
                                "para": "Compact and easy to care for, African violets produce colorful blooms throughout the year, making them a favorite indoor plant."
                            },
                            {
                                "name": "Bromeliad",
                                "para": "Known for their striking, colorful bracts, bromeliads are tropical plants that add a splash of color to indoor spaces."
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Palms",
                "sub_categories": [
                    {
                        "name": "Tropical Palms",
                        "para": "Thriving in warm climates, tropical palms add a lush, exotic feel to gardens.",
                        "plant": [
                            {
                                "name": "Areca Palm",
                                "para": "Popular as a houseplant, the areca palm is known for its feathery fronds and ability to improve indoor air quality."
                            },
                            {
                                "name": "Coconut Palm",
                                "para": "Grown in tropical regions, coconut palms produce coconuts that are used for food, oil, and water."
                            },
                            {
                                "name": "Banana Palm",
                                "para": "Known for their large, paddle-shaped leaves and sweet fruit, banana palms are a common sight in tropical gardens."
                            }
                        ]
                    },
                    {
                        "name": "Desert Palms",
                        "para": "Adapted to arid conditions, desert palms are hardy and resilient.",
                        "plant": [
                            {
                                "name": "Date Palm",
                                "para": "Cultivated for their sweet, edible dates, date palms are also used as ornamental trees in arid landscapes."
                            },
                            {
                                "name": "Fan Palm",
                                "para": "With their large, fan-shaped leaves, fan palms are used in landscaping for their striking appearance and drought tolerance."
                            },
                            {
                                "name": "Sago Palm",
                                "para": "Although not a true palm, the sago palm is a popular ornamental plant known for its stiff, feather-like fronds and resilience."
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

cart_item = [];

let button ='';
let doc = document.querySelector('.card-container');
let str = '';
for(let i=0;i<plants[0].categories['length'];i++){
    str = `<div class="categories"><h2>`+plants[0].categories[i].name+`</h2></div>`;
    str += `<div class="card-holder">`;
    for(let j=0;j<plants[0].categories[i].sub_categories['length'];j++){
        for(let k=0;k<3;k++){
            str += `<div class="cards `+plants[0].categories[i].sub_categories[j].name+`">
                        <div class="name"><h1>`+plants[0].categories[i].sub_categories[j].plant[k].name+`</h1></div>
                        <div class="sub-c name"><h1>`+plants[0].categories[i].sub_categories[j].name+`</h1></div>
                        <div class="para"><p>`+plants[0].categories[i].sub_categories[j].plant[k].para+`</p></div>
                        <div class="buttons">
                            <div onclick="print(this.id)" id="buy-`+plants[0].categories[i].sub_categories[j].plant[k].name+`" class="tile buy-button"><h2>BUY</h2></div>
                            <div onclick="cart(this.id)" id="cart-`+plants[0].categories[i].sub_categories[j].plant[k].name+`" class="tile">
                                <div class="icon add-cart"></div>
                            </div>
                        </div>
                    </div>`;
        }
    }
    str += `</div>`;
    if(doc != null){
        doc.innerHTML += str;
    }
}

function print(a){
    console.log("buy : "+a);
    document.getElementById(a).style.backgroundColor = "#aaffaa88";
    // start_load();
    // setTimeout(() => {
        window.open('/buy.html?product='+a,'_self');
    // }, 2000);
}
var cart_item_counter = 0;
if(localStorage.getItem('cart-item-counter') != null){
    cart_item_counter = localStorage.getItem('cart-item-counter');
    // console.log(cart_item_counter);
}
function cart(a){
    console.log("cart : "+a);
    let cart = document.getElementById(a);
    try{
        if(cart.firstChild.classList[1] == 'cart-checkout'){
            window.open('/cart.html','_self');
            return 0;
        }
        // throw new TypeError("oops");
        // break;
    }
    catch (e) { console.log(e) };
    cart.innerHTML = `<div class="icon cart-checkout"></div>`
    console.log(cart.firstChild.classList[1]);
    cart_item[cart_item['length']]= {"name" : `${a.replace('cart-','')}`};
    cart_item_counter++;
    localStorage.setItem(`cart-item-${cart_item_counter}`,`${a.replace('cart-','')}`);
    localStorage.setItem(`cart-item-counter`,`${cart_item_counter}`);
    cart.style.filter = 'invert()';   
    // cart.style.backgroundColor = '#0000ff84';   
}
// doc = document.querySelectorAll('.categories');
// for(let i=0;i<plants[0].categories['length'];i++){

// }
var product_name = '';
function buy_container_load(){
    console.log('hello');
    product();
}
function product(){
    if(product_name != null){
        let doc = document.querySelector('.product-description');
        let doc_img = document.querySelector('.box-img');
        // console.log(doc_img.classList = 'box-img Annuals');
        doc.innerHTML = '';
        console.log(document.querySelector('.product-description').innerHTML);
        for(let i=0;i<plants[0].categories['length'];i++){
            for(let j=0;j<plants[0].categories[i].sub_categories['length'];j++){
                for(let k=0;k<3;k++){
                    if(plants[0].categories[i].sub_categories[j].plant[k].name == product_name){
                        doc_img.classList = `box-img ${plants[0].categories[i].sub_categories[j].name}`; 
                        doc.innerHTML = `<h2>Categories : ${plants[0].categories[i].name} </h2>`
                        doc.innerHTML += `<h2>Sub-Categories : ${plants[0].categories[i].sub_categories[j].name} </h2>`
                        doc.innerHTML += `<p><b>${plants[0].categories[i].sub_categories[j].name}</b> : `+plants[0].categories[i].sub_categories[j].para+`</p>`;
                        doc.innerHTML += `<p><b>${plants[0].categories[i].sub_categories[j].plant[k].name}</b> : `+plants[0].categories[i].sub_categories[j].plant[k].para+`</p>`;
                        doc.innerHTML += `<div class="buttons">
                            <div onclick="buy_product(this.id)" id="buy-`+plants[0].categories[i].sub_categories[j].plant[k].name+`" class="tile buy-button"><h2>BUY</h2></div>
                            <div onclick="cart(this.id)" id="cart-`+plants[0].categories[i].sub_categories[j].plant[k].name+`" class="tile">
                                <div class="icon add-cart"></div>
                            </div>
                        </div>`
                        console.log('matched',product_name)
                    }
                }
            }
        }
    }
}
function extract(){
    let string = window.location.search;
    let result = string.replace('?product=buy-','');
    result = result.replace('%20',' ');
    product_name = result;
    document.querySelector('.product-name').innerHTML = `<h2> Name : `+product_name+`</h2>`;
    console.log(result);
}

function item_load(){
    if(localStorage.getItem('cart-item-counter') == null | localStorage.getItem('cart-item-counter') == 0){
        let doc = document.querySelector('.cart-container');
        doc.innerHTML = `<div class='cart-empty'><br>(EMPTY)<br>^_____^</div>`;
    }
    let item_no = localStorage.getItem('cart-item-counter');
    console.log(item_no);
    for(let a=1;a<=item_no;a++){
        if(localStorage.getItem(`cart-item-${a}`) != null | localStorage.getItem(`cart-item-${a}`) != 'NAN'){
            find_item(localStorage.getItem(`cart-item-${a}`),a);;
        }
    }
}
function find_item(name,item_number){
    let doc = document.querySelector('.cart-container');
    console.log(name);
    for(let i=0;i<plants[0].categories['length'];i++){
        for(let j=0;j<plants[0].categories[i].sub_categories['length'];j++){
            for(let k=0;k<3;k++){
                if(plants[0].categories[i].sub_categories[j].plant[k].name == name){
                    let str = `<div id='cart-item-${item_number}' class="cart-box">
                                    <div class="cart-info">
                                        <div class="cart-name"><h2>${plants[0].categories[i].sub_categories[j].plant[k].name}</h2></div>
                                        <div class="cart-category">
                                            <div class="category-name"><h3>${plants[0].categories[i].name}</h3></div>
                                            <div class="category-sub"><h3>${plants[0].categories[i].sub_categories[j].name}</h3></div>
                                        </div>
                                    </div>
                                    <div class="cart-img ${plants[0].categories[i].sub_categories[j].name}">
                                    </div>
                                    <div onclick='remove_item(this.parentElement.id);' class="cart-remove"><div class="bg"></div></div>
                                </div>`;
                    doc.innerHTML += str;
                    console.log('matched',name)
                }
            }
        }
    }
}
function remove_item(item_id){
    console.log(item_id);
    let cart_item_box = document.getElementById(item_id);
    cart_item_box.style.width = 0;
    setTimeout(() => {
        cart_item_box.style.display = 'none';
    }, 300);
    console.log('done');
    // localStorage.removeItem(item_id);
    localStorage.setItem(item_id,'NAN');
    clear_nan();
    // document.querySelector('.cart-container').innerHTML = '';
    // item_load();
}
function clear_nan(){
    let str = 'cart-item-';
    for(let i = localStorage.getItem('cart-item-counter');i>0;i--){
        if(localStorage.getItem(str+i) == null | localStorage.getItem(str+i) == 'NAN'){
            if(i == localStorage.getItem('cart-item-counter')){
                localStorage.setItem('cart-item-counter', localStorage.getItem('cart-item-counter') - 1);
            }
            localStorage.removeItem(str+i);
        }
    }
    if(localStorage.getItem('cart-item-counter') == '0'){
        // setTimeout(() => {
            item_load();
        // }, 1000);
    }
}