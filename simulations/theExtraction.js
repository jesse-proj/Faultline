const theExtractionConfig = {
    "title": "The Extraction",
    "themeColor": "#5e35b1",
    "statKeys": [
        {
            "id": "stat1",
            "name": "Daily Quota",
            "color": "#5e35b1"
        },
        {
            "id": "stat2",
            "name": "Physical Safety",
            "color": "#4caf50"
        },
        {
            "id": "stat3",
            "name": "Child's Future",
            "color": "#2196f3"
        }
    ],
    "initialStats": {
        "stat1": 40,
        "stat2": 80,
        "stat3": 75
    },
    "gameOverText": "System Collapse. Your body finally gave out under the immense weight of the pit. You are carried out of the mine by other workers, but there is no company doctor, no compensation, and no insurance. You lie in the dirt outside the camp fence as the sound of pickaxes carries on without interruption. The global price of cobalt does not move by a single cent.",
    "nodes": {
        "1": {
            "image": "images/te_deep_vein.png",
            "text": "<strong style='color: #5e35b1;'>Shift 1: The Demand Spike.</strong> You are an artisanal miner in the Democratic Republic of Congo. Tech giants globally announce a new generation of electric vehicles. Cobalt demand surges instantly. Your local buyer, a ruthless middleman, demands you double your daily underground quota, offering a paltry 5% pay bump.",
            "choices": [
                {
                    "text": "Dig a highly unstable, un-reinforced deep vein.",
                    "impact": {
                        "stat1": 30,
                        "stat2": -25,
                        "stat3": 0
                    },
                    "nextNode": "2"
                },
                {
                    "text": "Work an exhausting 18-hour shift in the safer shallow zones.",
                    "impact": {
                        "stat1": 15,
                        "stat2": -15,
                        "stat3": -10
                    },
                    "nextNode": "3"
                },
                {
                    "text": "Refuse the impossible new quota entirely.",
                    "impact": {
                        "stat1": -30,
                        "stat2": -25,
                        "stat3": 0
                    },
                    "nextNode": "4"
                }
            ]
        },
        "2": {
            "image": "images/te_global_market.png",
            "text": "<strong style='color: #5e35b1;'>Shift 2: The Core.</strong> You are pulling pure cobalt from the deep vein. However, the air is unimaginably thick with toxic dust. You are coughing up blood into the mud. You desperately need a respirator, but the buyer sells them at a 300% markup above retail price.",
            "choices": [
                {
                    "text": "Buy the overpriced respirator on heavy credit.",
                    "impact": {
                        "stat1": 15,
                        "stat2": 20,
                        "stat3": -20
                    },
                    "nextNode": "5"
                },
                {
                    "text": "Use a dirty t-shirt as a makeshift mask.",
                    "impact": {
                        "stat1": 10,
                        "stat2": -25,
                        "stat3": 0
                    },
                    "nextNode": "6"
                },
                {
                    "text": "Attempt to steal a respirator from the buyer's stockpile.",
                    "impact": {
                        "stat1": -40,
                        "stat2": -35,
                        "stat3": 0
                    },
                    "nextNode": "7"
                }
            ]
        },
        "3": {
            "image": "images/te_audit.png",
            "text": "<strong style='color: #5e35b1;'>Shift 2: The Middleman.</strong> Working the shallows isn't paying enough to consistently feed your family. A local, heavily armed militia, acting as 'protectors', block the road and demand a 'security tax' consisting of one-third of the raw ore you just spent 18 hours digging.",
            "choices": [
                {
                    "text": "Pay the extortion tax silently to survive the day.",
                    "impact": {
                        "stat1": -25,
                        "stat2": 15,
                        "stat3": -10
                    },
                    "nextNode": "6"
                },
                {
                    "text": "Try to hide valuable stones in your boots to smuggle them.",
                    "impact": {
                        "stat1": -35,
                        "stat2": -30,
                        "stat3": 0
                    },
                    "nextNode": "7"
                },
                {
                    "text": "Pick up a rock and attempt to fight the armed militia.",
                    "impact": {
                        "stat1": -40,
                        "stat2": -45,
                        "stat3": -20
                    },
                    "nextNode": "8"
                }
            ]
        },
        "4": {
            "image": "images/te_deep_vein.png",
            "text": "<strong style='color: #5e35b1;'>Shift 2: The Black Market.</strong> Blacklisted from the main camp, you are mining in a heavily degraded, highly illegal sector. A local gang leader offers you an immense amount of food if you send your youngest child into a tiny, terribly perilous crevice to extract a pure, untouched cobalt vein.",
            "choices": [
                {
                    "text": "Send your child into the dangerous crevice.",
                    "impact": {
                        "stat1": 25,
                        "stat2": 0,
                        "stat3": -40
                    },
                    "nextNode": "7"
                },
                {
                    "text": "Squeeze your own adult body into the tiny crevice instead.",
                    "impact": {
                        "stat1": 15,
                        "stat2": -35,
                        "stat3": 10
                    },
                    "nextNode": "8"
                },
                {
                    "text": "Refuse to mine the crevice entirely.",
                    "impact": {
                        "stat1": -35,
                        "stat2": -15,
                        "stat3": -10
                    },
                    "nextNode": "9"
                }
            ]
        },
        "5": {
            "image": "images/te_audit.png",
            "text": "<strong style='color: #5e35b1;'>Shift 3: Corporate Audit.</strong> An international 'Clean Energy' NGO auditing team arrives. To pass the inspection, the heavily armed mine boss orders you to stop digging and put on a clean vest to act as a 'safety officer' for the day, offering a cash bribe.",
            "choices": [
                {
                    "text": "Take the cash bribe and act the part to the auditors.",
                    "impact": {
                        "stat1": 0,
                        "stat2": 15,
                        "stat3": 20
                    },
                    "nextNode": "e11"
                },
                {
                    "text": "Refuse the bribe but stay out of the auditors' way.",
                    "impact": {
                        "stat1": -25,
                        "stat2": 0,
                        "stat3": -10
                    },
                    "nextNode": "e12"
                },
                {
                    "text": "Show the auditors the bloody truth of the deep veins.",
                    "impact": {
                        "stat1": -40,
                        "stat2": -45,
                        "stat3": -20
                    },
                    "nextNode": "e13"
                }
            ]
        },
        "6": {
            "image": "images/te_deep_vein.png",
            "text": "<strong style='color: #5e35b1;'>Shift 3: The Cave-in.</strong> Torrential monsoon rains trigger a massive, terrifying mudslide in the open pit. Several miners are trapped beneath tons of earth. Digging them out means completely abandoning your own claim for hours, ensuring you won't eat tonight.",
            "choices": [
                {
                    "text": "Abandon your quota and dig wildly to save the trapped men.",
                    "impact": {
                        "stat1": -40,
                        "stat2": -15,
                        "stat3": 10
                    },
                    "nextNode": "e11"
                },
                {
                    "text": "Ignore the muffled screams and mine the freshly exposed rock.",
                    "impact": {
                        "stat1": 30,
                        "stat2": -30,
                        "stat3": -35
                    },
                    "nextNode": "e12"
                },
                {
                    "text": "Steal the trapped miners' abandoned tools while they scream.",
                    "impact": {
                        "stat1": -45,
                        "stat2": -35,
                        "stat3": -30
                    },
                    "nextNode": "e13"
                }
            ]
        },
        "7": {
            "image": "images/te_toll.png",
            "text": "<strong style='color: #5e35b1;'>Shift 3: The Desperation.</strong> You are running out of options and heavily injured. The main buyer offers to pay you a lump sum for your 'claim' (a small square of dirt), but you and your family must move to manually work in the highly toxic acid-washing pools instead.",
            "choices": [
                {
                    "text": "Take the lump sum and plunge into the chemical acid vats.",
                    "impact": {
                        "stat1": 25,
                        "stat2": -40,
                        "stat3": 15
                    },
                    "nextNode": "e12"
                },
                {
                    "text": "Refuse and keep scratching violently at the barren dirt.",
                    "impact": {
                        "stat1": 0,
                        "stat2": -25,
                        "stat3": -35
                    },
                    "nextNode": "e12"
                },
                {
                    "text": "Try to violently rob the buyer's weighing station.",
                    "impact": {
                        "stat1": -40,
                        "stat2": -60,
                        "stat3": -40
                    },
                    "nextNode": "e13"
                }
            ]
        },
        "8": {
            "image": "images/te_toll.png",
            "text": "<strong style='color: #5e35b1;'>Shift 3: The Disease.</strong> You have developed severe lung disease from the silica dust. You cannot lift a pickaxe. The foreign mining conglomerate opens a 'charity hospital', but it strictly only treats immediate physical trauma, not chronic metal poisoning.",
            "choices": [
                {
                    "text": "Volunteer for experimental trial drugs at the clinic for cash.",
                    "impact": {
                        "stat1": 15,
                        "stat2": -35,
                        "stat3": 15
                    },
                    "nextNode": "e12"
                },
                {
                    "text": "Lie outside the heavily guarded gate, begging executives for money.",
                    "impact": {
                        "stat1": -15,
                        "stat2": -10,
                        "stat3": -25
                    },
                    "nextNode": "e13"
                },
                {
                    "text": "Attempt to break into the hospital pharmacy for medicine.",
                    "impact": {
                        "stat1": -40,
                        "stat2": -45,
                        "stat3": -35
                    },
                    "nextNode": "e13"
                }
            ]
        },
        "9": {
            "image": "images/te_toll.png",
            "text": "<strong style='color: #5e35b1;'>Shift 3: The End of the Line.</strong> You have zero quota, zero safety, and no tools. A military truck rolls through the dirt camp, offering to immediately conscript healthy men to protect the very same foreign mines from local rebel groups.",
            "choices": [
                {
                    "text": "Join the ruthless militia as a mercenary guard.",
                    "impact": {
                        "stat1": 25,
                        "stat2": -25,
                        "stat3": -25
                    },
                    "nextNode": "e13"
                },
                {
                    "text": "Try to run away from the mining region on foot.",
                    "impact": {
                        "stat1": -80,
                        "stat2": -80,
                        "stat3": -80
                    },
                    "nextNode": "e13"
                },
                {
                    "text": "Throw a rock at the armored military truck in desperation.",
                    "impact": {
                        "stat1": -80,
                        "stat2": -80,
                        "stat3": -80
                    },
                    "nextNode": "e13"
                }
            ]
        },
        "e11": {
            "isEnding": true,
            "text": "The 'Clean' Certification. You produced massive quotas and survived the worst conditions, paving the way for the mine to receive an international 'Conflict-Free' certification. Because the mine is now 'professionalized', the multinational corporation brings in heavy machinery and bulldozes the artisanal pits. You are permanently displaced without a dollar of compensation. The tech CEOs sleep soundly knowing their supply chain is 'ethical.'"
        },
        "e12": {
            "isEnding": true,
            "text": "The Chronic Toll. You barely survived, but the cobalt dust has irrevocably scarred your lungs, and the heavy metals have poisoned your blood. You have no pension, no healthcare, and barely enough savings to buy a week's worth of food. You will die a decade early, and your children are already picking up the pickaxes to take your place in the pit. The cycle of extraction perfectly sustains itself."
        },
        "e13": {
            "isEnding": true,
            "text": "The Collapse. Your body, your mind, or the earth itself finally gave out. You are crushed in a cave-in, killed by thugs, or left to stave. The mining company views your death as 'acceptable operational friction.' They pay off the local authorities with a tiny bribe. The global price of cobalt does not fluctuate by a single cent, and the electric vehicles roll off the assembly line exactly on schedule."
        }
    }
};
