const theYieldConfig = {
    "title": "The Yield",
    "themeColor": "#4caf50",
    "statKeys": [
        {
            "id": "stat1",
            "name": "Crop Yield",
            "color": "#4caf50"
        },
        {
            "id": "stat2",
            "name": "Funds",
            "color": "#2196f3"
        },
        {
            "id": "stat3",
            "name": "Household Food",
            "color": "#ff9800"
        }
    ],
    "initialStats": {
        "stat1": 80,
        "stat2": 65,
        "stat3": 80
    },
    "gameOverText": "Foreclosure. Your fields have completely failed, your funds are gone, and your household is starving. The bank seizes your ancestral land at auction. A wealthy haciendero buys it for a fraction of its real value. You load your family onto a bus headed for Metro Manila, leaving behind the soil your grandparents farmed. The land will now grow commercial cash crops for export.",
    "nodes": {
        "1": {
            "image": "images/ty_drought.png",
            "text": "<strong style='color: #4caf50;'>Season 1: El Niño Drought.</strong> You are a smallholder farmer in a rural Philippine province perfectly reliant on rain-fed agriculture. The monsoon rains are severely delayed due to extreme climate shifts. Your fields are bone-dry, and your traditional, saved seeds are failing to germinate. A sharply dressed representative from a massive international agro-corporation visits your barangay, offering you a high-interest micro-loan specifically to buy their patented, genetically modified drought-resistant seeds.",
            "choices": [
                {
                    "text": "Take the corporate micro-loan for patented seeds.",
                    "impact": {
                        "stat1": 25,
                        "stat2": -15,
                        "stat3": 0
                    },
                    "nextNode": "2"
                },
                {
                    "text": "Scrape by buying cheap, uncertified palay (rice) seeds.",
                    "impact": {
                        "stat1": -10,
                        "stat2": 15,
                        "stat3": -5
                    },
                    "nextNode": "3"
                },
                {
                    "text": "Refuse the debt completely and pray for rain.",
                    "impact": {
                        "stat1": -25,
                        "stat2": 0,
                        "stat3": -15
                    },
                    "nextNode": "4"
                }
            ]
        },
        "2": {
            "image": "images/ty_market_crash.png",
            "text": "<strong style='color: #4caf50;'>Season 2: The Contract Farm.</strong> Because you planted the proprietary corporate seeds, your crops miraculously sprouted despite the heat. However, the agro-corp sends inspectors demanding you buy their proprietary synthetic fertilizers. The contract explicitly forbids you from using natural, free compost from your own carabao.",
            "choices": [
                {
                    "text": "Go further into debt to buy the chemical fertilizer.",
                    "impact": {
                        "stat1": 35,
                        "stat2": -20,
                        "stat3": -5
                    },
                    "nextNode": "5"
                },
                {
                    "text": "Secretly mix in your own compost to save money.",
                    "impact": {
                        "stat1": 15,
                        "stat2": -15,
                        "stat3": 0
                    },
                    "nextNode": "6"
                },
                {
                    "text": "Refuse to buy the fertilizer entirely.",
                    "impact": {
                        "stat1": -25,
                        "stat2": -10,
                        "stat3": -10
                    },
                    "nextNode": "7"
                }
            ]
        },
        "3": {
            "image": "images/ty_squeeze.png",
            "text": "<strong style='color: #4caf50;'>Season 2: The Fungal Blight.</strong> The cheap palay you planted are highly susceptible to a new, aggressive fungal blight string that is rapidly spreading through the province due to unusual humidity spikes. The crops are dying quickly.",
            "choices": [
                {
                    "text": "Pay an extortionate surge price for fungicide.",
                    "impact": {
                        "stat1": 15,
                        "stat2": -20,
                        "stat3": 10
                    },
                    "nextNode": "6"
                },
                {
                    "text": "Manually pull the diseased plants from the soil by hand.",
                    "impact": {
                        "stat1": -10,
                        "stat2": 0,
                        "stat3": -10
                    },
                    "nextNode": "7"
                },
                {
                    "text": "Ignore the blight and hope the weather dries it out.",
                    "impact": {
                        "stat1": -25,
                        "stat2": 0,
                        "stat3": -20
                    },
                    "nextNode": "8"
                }
            ]
        },
        "4": {
            "image": "images/ty_drought.png",
            "text": "<strong style='color: #4caf50;'>Season 2: The Dust Bowl.</strong> Your fields are completely barren. The rains never arrived. A wealthy land developer looking to consolidate agrarian land into massive commercial subdivisions contacts you, offering to buy your 'worthless' land for mere pesos on the dollar.",
            "choices": [
                {
                    "text": "Sell a small portion of the land to survive.",
                    "impact": {
                        "stat1": -10,
                        "stat2": 35,
                        "stat3": 15
                    },
                    "nextNode": "7"
                },
                {
                    "text": "Take a predatory payday loan from a local loan shark.",
                    "impact": {
                        "stat1": 0,
                        "stat2": -15,
                        "stat3": 25
                    },
                    "nextNode": "8"
                },
                {
                    "text": "Try to forage for wild edibles and slowly starve.",
                    "impact": {
                        "stat1": -10,
                        "stat2": -10,
                        "stat3": -20
                    },
                    "nextNode": "9"
                }
            ]
        },
        "5": {
            "image": "images/ty_market_crash.png",
            "text": "<strong style='color: #4caf50;'>Season 3: The Bumper Harvest.</strong> Through sheer labor and crushing debt, you produced a record crop yield! You take it to the regional market. Devastatingly, you discover that the international commodity markets are flooded due to a massive subsidy in the West, causing global buying prices for your crops to securely crash by 60%.",
            "choices": [
                {
                    "text": "Sell immediately to the international broker regardless.",
                    "impact": {
                        "stat1": -25,
                        "stat2": 20,
                        "stat3": -10
                    },
                    "nextNode": "e11"
                },
                {
                    "text": "Hold the crop in poor-quality silos, hoping prices rebound.",
                    "impact": {
                        "stat1": -15,
                        "stat2": -10,
                        "stat3": 15
                    },
                    "nextNode": "e12"
                },
                {
                    "text": "Dump and burn the crop in the town plaza in protest.",
                    "impact": {
                        "stat1": -40,
                        "stat2": -20,
                        "stat3": -10
                    },
                    "nextNode": "e13"
                }
            ]
        },
        "6": {
            "image": "images/ty_squeeze.png",
            "text": "<strong style='color: #4caf50;'>Season 3: The Squeeze.</strong> You have a decent harvest, but global fuel prices have skyrocketed. The sole transport monopoly in your province—a private trucking syndicate—triples their fee to physically move your crop from the barangay to the central palengke (market).",
            "choices": [
                {
                    "text": "Pay the extortionate transport monopoly fee.",
                    "impact": {
                        "stat1": -20,
                        "stat2": -15,
                        "stat3": 0
                    },
                    "nextNode": "e11"
                },
                {
                    "text": "Rent a makeshift wooden cart to transport it slowly.",
                    "impact": {
                        "stat1": -20,
                        "stat2": -5,
                        "stat3": -10
                    },
                    "nextNode": "e12"
                },
                {
                    "text": "Leave the heavy harvest to rot in the field.",
                    "impact": {
                        "stat1": -25,
                        "stat2": -20,
                        "stat3": -15
                    },
                    "nextNode": "e13"
                }
            ]
        },
        "7": {
            "image": "images/ty_land_grab.png",
            "text": "<strong style='color: #4caf50;'>Season 3: The Foreclosure Threat.</strong> You are deep in the red. The rural bank officially threatens foreclosure. A foreign agricultural NGO suddenly offers a 'salvation grant', but it strictly requires you to stop growing local food crops and exclusively grow inedible cash crops for export.",
            "choices": [
                {
                    "text": "Take the NGO grant and switch to export farming.",
                    "impact": {
                        "stat1": 20,
                        "stat2": 25,
                        "stat3": -25
                    },
                    "nextNode": "e12"
                },
                {
                    "text": "Refuse the grant and beg the bank for an extension.",
                    "impact": {
                        "stat1": 0,
                        "stat2": -20,
                        "stat3": 15
                    },
                    "nextNode": "e12"
                },
                {
                    "text": "Physically bar the bank agent sent to your farm.",
                    "impact": {
                        "stat1": -25,
                        "stat2": -25,
                        "stat3": -20
                    },
                    "nextNode": "e13"
                }
            ]
        },
        "8": {
            "image": "images/ty_land_grab.png",
            "text": "<strong style='color: #4caf50;'>Season 3: The Desperation.</strong> You have empty fields and massive debt. A large corporate mining firm discovers trace minerals like nickel under your soil. They blast the ground nearby without your consent, deeply contaminating your local groundwater and offer a tiny 'inconvenience fee.'",
            "choices": [
                {
                    "text": "Take the tiny fee to buy drinkable water.",
                    "impact": {
                        "stat1": -15,
                        "stat2": 20,
                        "stat3": 10
                    },
                    "nextNode": "e12"
                },
                {
                    "text": "Try to sue the multinational mining company.",
                    "impact": {
                        "stat1": 0,
                        "stat2": -25,
                        "stat3": -10
                    },
                    "nextNode": "e13"
                },
                {
                    "text": "Drink the heavy-metal contaminated groundwater.",
                    "impact": {
                        "stat1": -25,
                        "stat2": -15,
                        "stat3": -25
                    },
                    "nextNode": "e13"
                }
            ]
        },
        "9": {
            "image": "images/ty_drought.png",
            "text": "<strong style='color: #4caf50;'>Season 3: The Eviction.</strong> You can no longer pay the local amilyar (property tax). The Local Government Unit (LGU) seizes your entire property under eminent domain to rapidly build a massive distribution center for a global retail giant.",
            "choices": [
                {
                    "text": "Beg for a warehouse packing job in the new huge facility.",
                    "impact": {
                        "stat1": 0,
                        "stat2": 20,
                        "stat3": 0
                    },
                    "nextNode": "e13"
                },
                {
                    "text": "Live in a makeshift plastic tent directly outside the gates.",
                    "impact": {
                        "stat1": 0,
                        "stat2": -10,
                        "stat3": -15
                    },
                    "nextNode": "e13"
                },
                {
                    "text": "Try to physically stop the incoming bulldozers yourself.",
                    "impact": {
                        "stat1": 0,
                        "stat2": -20,
                        "stat3": -20
                    },
                    "nextNode": "e13"
                }
            ]
        },
        "e11": {
            "isEnding": true,
            "text": "The Buyout. You grew incredible crops and jumped through every hoop, generating immense value for the supply chain. But because you proved the land is highly fertile, an agribusiness conglomerate uses political leverage to forcefully buy your farm at a fraction of its value to turn it into an automated monoculture plantation. You are now landless in your own country."
        },
        "e12": {
            "isEnding": true,
            "text": "The Tenant Farmer. You survived the brutal farming seasons by taking on grants, crushing debt, and restrictive contracts. The bank now officially holds the deed to your land. You are allowed to stay and manually work the dirt, but you now pay high rent to farm your own ancestral soil."
        },
        "e13": {
            "isEnding": true,
            "text": "The Displaced. You failed to produce, or you bravely fought the system and lost. Your land is foreclosed, seized, or poisoned by runoff. You are forced to migrate to Metro Manila to live in a sprawling urban slum, joining the massive reserve army of cheap labor keeping the global economy running."
        }
    }
};
