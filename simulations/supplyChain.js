const supplyChainConfig = {
    "title": "The Supply Chain",
    "themeColor": "#2a7242",
    "statKeys": [
        {
            "id": "stat1",
            "name": "Health",
            "color": "#4caf50"
        },
        {
            "id": "stat2",
            "name": "Savings",
            "color": "#2196f3"
        },
        {
            "id": "stat3",
            "name": "Family",
            "color": "#ff9800"
        }
    ],
    "initialStats": {
        "stat1": 80,
        "stat2": 60,
        "stat3": 80
    },
    "gameOverText": "Without a social safety net, your body has given out entirely. You collapse on the factory floor and are dragged off the line. Management replaces you within the hour. You return to your boarding house in Bac Ninh with nothing—no severance, no savings, and a family waiting on a remittance that will never come.",
    "nodes": {
        "1": {
            "image": "images/sc_factory_floor.png",
            "text": "<strong style='color: var(--accent-red);'>Shift 1: The Factory Floor.</strong> You recently left your province to take a job at a massive electronics plant in Bac Ninh, Vietnam. You live in a cramped boarding house with strangers. Your goal: survive the high cost of living and send money back to your family. Today, the floor manager stands on a catwalk, demanding everyone work an unsanctioned 14-hour shift to meet an international export quota for a Western corporation's newest smartphone release.",
            "choices": [
                {
                    "text": "Work the brutal shift for extra dong.",
                    "impact": {
                        "stat1": -15,
                        "stat2": 25,
                        "stat3": 0
                    },
                    "nextNode": "2"
                },
                {
                    "text": "Refuse the overtime to rest your body.",
                    "impact": {
                        "stat1": 15,
                        "stat2": -15,
                        "stat3": 0
                    },
                    "nextNode": "3"
                },
                {
                    "text": "Argue with the manager about Vietnam labor laws.",
                    "impact": {
                        "stat1": -20,
                        "stat2": -25,
                        "stat3": 0
                    },
                    "nextNode": "4"
                }
            ]
        },
        "2": {
            "image": "images/sc_remittance.png",
            "text": "<strong style='color: var(--accent-red);'>Shift 2: The Lead Worker.</strong> Because you worked the grueling shift without complaining, management names you 'Lead Worker.' It sounds like a promotion, but your pay remains unchanged. Instead, you are now personally responsible for ensuring the five people next to you on the assembly line meet their intense, complex assembly quotas as well. The pressure from above is immense.",
            "choices": [
                {
                    "text": "Push your team to the absolute brink.",
                    "impact": {
                        "stat1": -15,
                        "stat2": 15,
                        "stat3": -10
                    },
                    "nextNode": "5"
                },
                {
                    "text": "Secretly cover for their mistakes yourself.",
                    "impact": {
                        "stat1": -25,
                        "stat2": 0,
                        "stat3": 10
                    },
                    "nextNode": "6"
                },
                {
                    "text": "Fail the inflated quota intentionally.",
                    "impact": {
                        "stat1": 0,
                        "stat2": -25,
                        "stat3": -10
                    },
                    "nextNode": "7"
                }
            ]
        },
        "3": {
            "image": "images/sc_remittance.png",
            "text": "<strong style='color: var(--accent-red);'>Shift 2: The Pay Cut.</strong> Since your hours were maliciously cut by management, you are struggling to make rent. The monsoon rains have flooded the streets of Bac Ninh, and water is continuously seeping into your cramped boarding house. The landlord violently bangs on your door, demanding next month's rent early with an arbitrary 'late fee' attached.",
            "choices": [
                {
                    "text": "Take a microloan from an outside lender.",
                    "impact": {
                        "stat1": 10,
                        "stat2": -25,
                        "stat3": -10
                    },
                    "nextNode": "6"
                },
                {
                    "text": "Skip meals and eat plain rice to save cash.",
                    "impact": {
                        "stat1": -20,
                        "stat2": 15,
                        "stat3": 0
                    },
                    "nextNode": "7"
                },
                {
                    "text": "Ignore the landlord and hope he leaves.",
                    "impact": {
                        "stat1": -25,
                        "stat2": -15,
                        "stat3": -20
                    },
                    "nextNode": "8"
                }
            ]
        },
        "4": {
            "image": "images/sc_cough.png",
            "text": "<strong style='color: var(--accent-red);'>Shift 2: The Toxic Task.</strong> As punishment, you are assigned to clean the chemical flux vats in the deep basement of the factory. The ventilation down here is broken. You are constantly exposed to industrial solvents, fumes, and unshielded magnetic radiation without warning or proper gear. The fumes are overwhelming, making your eyes water and your throat burn.",
            "choices": [
                {
                    "text": "Buy a disposable respirator out of pocket.",
                    "impact": {
                        "stat1": 15,
                        "stat2": -30,
                        "stat3": 0
                    },
                    "nextNode": "7"
                },
                {
                    "text": "Tie a wet rag around your face.",
                    "impact": {
                        "stat1": -25,
                        "stat2": 0,
                        "stat3": -10
                    },
                    "nextNode": "8"
                },
                {
                    "text": "Hold your breath and rush the job.",
                    "impact": {
                        "stat1": -35,
                        "stat2": -25,
                        "stat3": 0
                    },
                    "nextNode": "9"
                }
            ]
        },
        "5": {
            "image": "images/sc_audit.png",
            "text": "<strong style='color: var(--accent-red);'>Shift 3: Corporate Audit.</strong> A well-dressed Western NGO team arrives to audit the factory for 'ethical labor practices.' Your floor manager pulls you aside. He orders you to lie to the clipboard-wielding auditors, explicitly telling you to say that you only work 8 hours a day, get regular breaks, and feel safe in the facility. He slips a roll of cash into your pocket as a bribe.",
            "choices": [
                {
                    "text": "Take the bribe and lie to the auditors.",
                    "impact": {
                        "stat1": 0,
                        "stat2": 25,
                        "stat3": 15
                    },
                    "nextNode": "e11"
                },
                {
                    "text": "Refuse the bribe but stay silent.",
                    "impact": {
                        "stat1": 0,
                        "stat2": -15,
                        "stat3": 0
                    },
                    "nextNode": "e12"
                },
                {
                    "text": "Tell the terrifying truth about the shifts.",
                    "impact": {
                        "stat1": -10,
                        "stat2": -30,
                        "stat3": -20
                    },
                    "nextNode": "e13"
                }
            ]
        },
        "6": {
            "image": "images/sc_gig_economy.png",
            "text": "<strong style='color: var(--accent-red);'>Shift 3: Burnout.</strong> The relentless, punishing pace of the assembly line is destroying your joints and your sanity. You're suffering from chronic headaches, backaches, and persistent nausea typical of line workers here. A line foreman notices you slowing down. In the bathroom, he offers you illegal amphetamines promising they will keep your speed up so you don't get fired.",
            "choices": [
                {
                    "text": "Pay for the pills just to survive.",
                    "impact": {
                        "stat1": -20,
                        "stat2": -15,
                        "stat3": -15
                    },
                    "nextNode": "e11"
                },
                {
                    "text": "Refuse the pills and miss the quota.",
                    "impact": {
                        "stat1": 10,
                        "stat2": -25,
                        "stat3": -10
                    },
                    "nextNode": "e12"
                },
                {
                    "text": "Report the foreman to HR.",
                    "impact": {
                        "stat1": -30,
                        "stat2": -15,
                        "stat3": -20
                    },
                    "nextNode": "e13"
                }
            ]
        },
        "7": {
            "image": "images/sc_remittance.png",
            "text": "<strong style='color: var(--accent-red);'>Shift 3: Debt Trap.</strong> You are drowning in compound-interest debt to the factory's company store and your landlord. A corporate representative offers to 'consolidate' your debt into a multi-year employment contract. The catch: they will automatically garnish 50% of your paycheck directly before you even see it.",
            "choices": [
                {
                    "text": "Sign the draconian contract.",
                    "impact": {
                        "stat1": 15,
                        "stat2": -20,
                        "stat3": -10
                    },
                    "nextNode": "e12"
                },
                {
                    "text": "Refuse and try to outrun the collectors.",
                    "impact": {
                        "stat1": -20,
                        "stat2": -25,
                        "stat3": -15
                    },
                    "nextNode": "e12"
                },
                {
                    "text": "Try to steal raw copper materials.",
                    "impact": {
                        "stat1": -25,
                        "stat2": -30,
                        "stat3": -30
                    },
                    "nextNode": "e13"
                }
            ]
        },
        "8": {
            "image": "images/sc_cough.png",
            "text": "<strong style='color: var(--accent-red);'>Shift 3: Illness.</strong> You are severely ill. Due to the chronic exposure on the electronics line, you have developed severe rashes and debilitating migraines. You stagger to the company doctor, who essentially treats you like a broken machine part slowing down the production line. He coldly tells you to buy imported antibiotics or get out.",
            "choices": [
                {
                    "text": "Empty your savings for imported medicine.",
                    "impact": {
                        "stat1": 25,
                        "stat2": -35,
                        "stat3": -15
                    },
                    "nextNode": "e12"
                },
                {
                    "text": "Beg your manager for unpaid leave.",
                    "impact": {
                        "stat1": -15,
                        "stat2": -20,
                        "stat3": -10
                    },
                    "nextNode": "e13"
                },
                {
                    "text": "Keep working visibly sick.",
                    "impact": {
                        "stat1": -30,
                        "stat2": -15,
                        "stat3": -25
                    },
                    "nextNode": "e13"
                }
            ]
        },
        "9": {
            "image": "images/sc_gig_economy.png",
            "text": "<strong style='color: var(--accent-red);'>Shift 3: The Brink.</strong> You have absolutely nothing left. No money, failing health, and your family is terrified they will never hear from you again. A shady contractor offers you a gig doing highly dangerous, undocumented 'ghost labor'—cleaning the massive, scalding-hot factory incinerators off the books in the dead of night.",
            "choices": [
                {
                    "text": "Do the terrifying gig with extreme care.",
                    "impact": {
                        "stat1": -20,
                        "stat2": 25,
                        "stat3": 20
                    },
                    "nextNode": "e13"
                },
                {
                    "text": "Attempt gig but refuse the hottest parts.",
                    "impact": {
                        "stat1": -10,
                        "stat2": -15,
                        "stat3": -10
                    },
                    "nextNode": "e13"
                },
                {
                    "text": "Try to organize a wildcat strike.",
                    "impact": {
                        "stat1": -35,
                        "stat2": -20,
                        "stat3": -20
                    },
                    "nextNode": "e13"
                }
            ]
        },
        "e11": {
            "isEnding": true,
            "text": "The Automation Upgrade. You prioritized production and made immense sacrifices. Because of your incredible output, the corporation posted record quarterly profits. They use those exact profits to buy AI-driven robotic assembly arms, replacing your entire sector. You are laid off with zero severance. The executives buy new yachts. You have nothing."
        },
        "e12": {
            "isEnding": true,
            "text": "The Debt Peonage. You survived by making compromises, taking loans, and sacrificing your health and family. You still have your job at the assembly plant, but your paycheck is entirely garnished by the landlord, the clinic, and the company store. You work over 12 hours a day, generating massive value for shareholders, but you will never pay off the principal of your debt. You are a modern indentured servant in the tech supply chain."
        },
        "e13": {
            "isEnding": true,
            "text": "The Discarded Machine. You made bad choices or let your health fail. Your body breaks under the weight of the global supply chain, succumbing to exhaustion and chemical hazards. The factory fires you the moment you can no longer meet the quota. The next day, a fresh, healthy migrant from the provinces takes your exact spot on the assembly line. The machine continues unchecked, and you are left destitute."
        }
    }
};
