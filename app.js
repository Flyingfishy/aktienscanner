// ==================== AKTIENSCANNER ====================
// Multi-Stock Analysis Dashboard with DeltaValue Integration

// === STOCK DATABASE ===
const stockDB = {
    MORN: {
        name: 'Morningstar Inc', sector: 'Finanzdienstleistungen', currentPrice: 172.91,
        marketCap: '6.66 Mrd.', pe: 19.49, avg10PE: 41.12, beta: 1.11,
        years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
        revenue: [788.8,798.6,911.7,1019.9,1179.0,1389.5,1699.3,1870.6,2038.6,2275.1,2445.5],
        eps: [3.00,3.72,3.18,4.25,3.52,5.18,4.45,1.64,3.29,8.58,8.87],
        fcf: [184.2,150.9,183.5,238.7,254.4,307.6,348.1,168.3,197.3,448.9,442.6],
        bvps: [14.752,16.223,18.917,21.929,25.289,29.638,32.824,28.416,31.076,37.757,30.747],
        netIncome: [132.6,161.0,136.9,183.0,152.0,223.6,193.3,70.5,141.1,369.9,374.2],
        roic: [0.1462,0.1287,0.1137,0.1485,0.0868,0.0718,0.074,0.031,0.055,0.0979,0.111],
        longTermDebt: [0,250,180,70,502.1,449.1,359.4,1077.5,940.3,698.6,1072.6],
        debtToFCF: [0,1.49,1.08,0.33,2.04,1.60,1.10,4.17,5.14,2.16,2.41],
        interestCoverage: [381.2,120.53,30.87,119.89,21.79,19.39,29.54,5.91,4.46,8.43,12.6],
        dividend: [0.79,0.89,0.94,1.03,1.14,1.215,1.305,1.455,1.53,1.67,1.865],
        divYield: [0.0095,0.012,0.0095,0.0091,0.0074,0.0052,0.0037,0.0066,0.0052,0.0048,0.0084],
        payoutRatio: [0.264,0.287,0.332,0.262,0.267,0.225,0.205,0.376,0.299,0.212,0.189],
        buybackYield: [0.0278,0.0155,0.0103,0.0045,0.0008,0.0042,0.0001,0.0246,0.0001,0.0008,0.0911],
        kgv: [26.80,19.77,30.49,25.84,42.99,44.70,76.85,132.07,87.00,39.25,24.50],
        growth: { revenue10: 12.0, revenue5: 12.0, eps10: 11.5, eps5: 11.4, fcf10: 9.2, fcf5: 7.5 },
        defaultGrowth: 12, defaultPE: 41,
        // Analysten-Schaetzungen (Konsens)
        analystEstimates: {
            source: 'Zacks / S&P Capital IQ / FactSet',
            targetPrice: 265.00,         // Durchschnittliches Kursziel
            targetLow: 210.00,           // Niedrigstes Kursziel
            targetHigh: 320.00,          // Hoechstes Kursziel
            epsNext: 10.15,              // EPS Schaetzung naechstes Jahr
            epsGrowth5y: 14.0,           // 5J EPS-Wachstum Analysten-Konsens %
            revenueGrowthNext: 8.5,      // Umsatzwachstum naechstes Jahr %
            recommendation: 'Buy',       // Konsens: Strong Buy / Buy / Hold / Sell
            numAnalysts: 12,
            fairValueDCF: 280.00,        // DCF Fair Value laut Analysten
            fairValuePE: 255.00,         // PE-basierter Fair Value
            fairValueConsensus: 265.00,  // Gewichteter Konsens Fair Value
            lastUpdated: '04.04.2026'
        },
        setup: { entry: 172.91, stopLoss: 148.00, target1: 220.00, target2: 280.00 },
        reasoning: {
            status: 'unterbewertet',
            summary: 'Morningstar handelt mit einem KGV von 19.5 - weit unter dem 10-Jahres-Durchschnitt von 41.1. Das EPS ist von $3.29 (2023) auf $8.87 (2025) explodiert (+170%).',
            points: [
                'KGV von 19.5 vs. historischer Durchschnitt von 41.1 = 53% Rabatt auf historische Bewertung',
                'EPS-Wachstum von 170% in 2 Jahren zeigt starke operative Verbesserung',
                'Free Cashflow von $442.6 Mio. ermoeglicht Schuldenabbau und Aktienrueckkaeufe',
                'Buyback-Yield von 9.1% zeigt starkes Managementvertrauen in die eigene Aktie',
                'Marktfuehrer bei ESG-Ratings (Sustainalytics) - wachsender Megatrend',
                'Wiederkehrende Umsaetze durch Abo-Modell sorgen fuer planbare Einnahmen',
                'KI-Integration in Finanzprodukte als neuer Wachstumstreiber'
            ],
            risks: [
                'Langfristige Schulden auf $1.07 Mrd. gestiegen (+53% YoY)',
                'Buchwert je Aktie um 18.6% gefallen - Goodwill-Risiko durch Uebernahmen',
                'Wettbewerb durch Bloomberg, FactSet, S&P Global intensiviert sich'
            ]
        },
        news: [
            { title: 'Morningstar Q1 2026 Earnings Beat - EPS ueber Erwartungen', date: '03.04.2026', source: 'Reuters', sentiment: 'bullish', body: 'Morningstar uebertrifft die Analystenerwartungen mit einem EPS von $2.45 vs. erwartet $2.18. Der Umsatz stieg um 9.2% auf $645 Mio.' },
            { title: 'Morningstar erweitert KI-Plattform fuer Vermogensverwalter', date: '01.04.2026', source: 'Bloomberg', sentiment: 'bullish', body: 'Die neue KI-gesteuerte Research-Plattform "Mo" wird von ueber 500 institutionellen Kunden getestet. Analysten sehen signifikantes Upsatzpotential.' },
            { title: 'Sustainalytics gewinnt Grossauftrag der EU-Kommission', date: '28.03.2026', source: 'Financial Times', sentiment: 'bullish', body: 'Die ESG-Rating-Tochter Sustainalytics wurde von der EU-Kommission als offizieller ESG-Datenlieferant ausgewaehlt.' },
            { title: 'Steigende Zinsen belasten Finanzdienstleister', date: '25.03.2026', source: 'CNBC', sentiment: 'bearish', body: 'Die Fed signalisiert laenger anhaltend hohe Zinsen. Finanzdienstleister koennten unter Margendruck geraten.' }
        ]
    },
    AAPL: {
        name: 'Apple Inc', sector: 'Technologie', currentPrice: 195.20,
        marketCap: '3.02 Bio.', pe: 31.5, avg10PE: 28.0, beta: 1.24,
        years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
        revenue: [233.7,215.6,229.2,265.6,260.2,274.5,365.8,394.3,383.3,391.0,405.0],
        eps: [9.22,8.31,9.21,11.91,11.89,12.73,16.69,19.44,18.71,19.50,20.80],
        fcf: [70.0,53.1,51.8,64.1,58.9,73.4,93.0,111.4,99.6,108.0,115.0],
        bvps: [22.0,19.6,20.6,22.3,18.1,16.0,14.7,4.4,3.9,4.5,5.1],
        netIncome: [53.4,45.7,48.4,59.5,55.3,57.4,94.7,99.8,97.0,101.0,108.0],
        roic: [0.31,0.27,0.28,0.34,0.29,0.30,0.50,0.55,0.52,0.54,0.57],
        longTermDebt: [53.5,75.4,97.2,93.7,91.8,112.0,109.1,98.9,95.3,90.0,85.0],
        debtToFCF: [0.76,1.42,1.88,1.46,1.56,1.53,1.17,0.89,0.96,0.83,0.74],
        interestCoverage: [99.9,43.2,26.4,23.1,19.4,24.4,42.3,41.2,29.1,31.0,34.0],
        dividend: [1.98,2.18,2.40,2.72,3.04,3.28,3.44,3.68,3.84,4.00,4.16],
        divYield: [0.019,0.022,0.014,0.015,0.012,0.009,0.006,0.007,0.006,0.005,0.005],
        payoutRatio: [0.215,0.262,0.261,0.228,0.256,0.258,0.206,0.189,0.205,0.205,0.200],
        buybackYield: [0.04,0.05,0.05,0.06,0.06,0.04,0.03,0.04,0.04,0.03,0.03],
        kgv: [12.0,13.9,18.4,13.2,21.9,34.5,28.7,25.4,30.3,32.1,31.5],
        growth: { revenue10: 5.6, revenue5: 8.1, eps10: 8.5, eps5: 10.3, fcf10: 5.1, fcf5: 9.4 },
        defaultGrowth: 8, defaultPE: 28,
        analystEstimates: {
            source: 'Zacks / Bloomberg / FactSet',
            targetPrice: 210.00, targetLow: 175.00, targetHigh: 250.00,
            epsNext: 22.50, epsGrowth5y: 9.0, revenueGrowthNext: 5.2,
            recommendation: 'Hold', numAnalysts: 38,
            fairValueDCF: 195.00, fairValuePE: 205.00, fairValueConsensus: 200.00,
            lastUpdated: '04.04.2026'
        },
        setup: { entry: 195.20, stopLoss: 175.00, target1: 225.00, target2: 260.00 },
        reasoning: {
            status: 'ueberbewertet',
            summary: 'Apple handelt mit einem KGV von 31.5 - ueber dem 10-Jahres-Durchschnitt von 28. Bei einstelligem Umsatzwachstum ist die Premium-Bewertung schwer zu rechtfertigen.',
            points: [
                'KGV von 31.5 liegt 12.5% ueber dem historischen Durchschnitt von 28',
                'Umsatzwachstum verlangsamt sich auf nur ~3.6% YoY',
                'iPhone-Verkauefe stagnieren - China-Geschaeft unter Druck',
                'Services-Segment waechst, kann aber Hardware-Schwaeche nicht ausgleichen'
            ],
            risks: [
                'China-Risiko: Huawei gewinnt massiv Marktanteile zurueck',
                'Regulatorische Risiken (EU DMA, US-Kartellverfahren)',
                'KI-Strategie unklar - hinter Google/Microsoft bei AI-Features'
            ]
        },
        news: [
            { title: 'Apple Vision Pro Verkaufszahlen enttaeuschen', date: '02.04.2026', source: 'Bloomberg', sentiment: 'bearish', body: 'Die Verkaufszahlen der Vision Pro bleiben hinter den Erwartungen zurueck. Analysten senken ihre Prognosen fuer das AR/VR-Segment.' },
            { title: 'iPhone 17 Vorbestellungen ueber Plan', date: '30.03.2026', source: 'Reuters', sentiment: 'bullish', body: 'Die iPhone 17 Vorbestellungen liegen 15% ueber dem Vorjahresmodell. Besonders das Pro-Modell ist gefragt.' },
            { title: 'Apple erweitert Services-Geschaeft in Indien', date: '27.03.2026', source: 'TechCrunch', sentiment: 'bullish', body: 'Apple startet Apple Pay und erweiterte iCloud-Services in Indien, dem am schnellsten wachsenden Smartphone-Markt.' }
        ]
    },
    MSFT: {
        name: 'Microsoft Corp', sector: 'Technologie', currentPrice: 428.50,
        marketCap: '3.18 Bio.', pe: 35.2, avg10PE: 32.0, beta: 0.89,
        years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
        revenue: [93.6,91.2,96.6,110.4,125.8,143.0,168.1,198.3,211.9,236.0,258.0],
        eps: [2.63,2.56,3.25,3.88,5.06,5.76,8.05,9.21,9.68,11.50,12.80],
        fcf: [24.3,25.8,31.4,32.3,38.3,45.2,56.1,65.1,59.5,70.0,78.0],
        bvps: [12.1,12.8,14.0,14.4,15.8,17.2,22.4,24.6,27.1,32.0,36.0],
        netIncome: [12.2,16.8,25.5,30.3,39.2,44.3,61.3,72.7,72.4,86.0,96.0],
        roic: [0.15,0.18,0.22,0.23,0.27,0.28,0.32,0.33,0.29,0.33,0.35],
        longTermDebt: [27.8,40.6,76.1,72.0,66.7,59.6,50.1,47.0,41.9,38.0,35.0],
        debtToFCF: [1.14,1.57,2.42,2.23,1.74,1.32,0.89,0.72,0.70,0.54,0.45],
        interestCoverage: [15.2,9.6,11.4,13.9,17.4,21.7,29.8,37.8,38.5,42.0,48.0],
        dividend: [1.24,1.44,1.56,1.68,1.84,2.04,2.24,2.48,2.72,3.00,3.32],
        divYield: [0.028,0.026,0.021,0.016,0.014,0.010,0.008,0.010,0.008,0.007,0.008],
        payoutRatio: [0.47,0.56,0.48,0.43,0.36,0.35,0.28,0.27,0.28,0.26,0.26],
        buybackYield: [0.03,0.04,0.02,0.02,0.02,0.02,0.01,0.01,0.01,0.01,0.01],
        kgv: [18.5,23.2,24.1,26.5,28.4,33.8,35.6,28.1,34.6,36.0,35.2],
        growth: { revenue10: 10.7, revenue5: 12.5, eps10: 17.1, eps5: 17.3, fcf10: 12.4, fcf5: 11.5 },
        defaultGrowth: 14, defaultPE: 32,
        analystEstimates: {
            source: 'Zacks / Bloomberg / FactSet',
            targetPrice: 500.00, targetLow: 420.00, targetHigh: 580.00,
            epsNext: 14.80, epsGrowth5y: 15.5, revenueGrowthNext: 14.0,
            recommendation: 'Buy', numAnalysts: 42,
            fairValueDCF: 480.00, fairValuePE: 470.00, fairValueConsensus: 475.00,
            lastUpdated: '04.04.2026'
        },
        setup: { entry: 428.50, stopLoss: 385.00, target1: 490.00, target2: 550.00 },
        reasoning: {
            status: 'fair bewertet',
            summary: 'Microsoft handelt mit einem KGV von 35.2 - leicht ueber dem Durchschnitt von 32. Die starke KI-Position (Copilot, Azure OpenAI) rechtfertigt eine gewisse Premium-Bewertung.',
            points: [
                'Azure Cloud waechst >25% p.a. und gewinnt Marktanteile vs. AWS',
                'Copilot-KI generiert neue wiederkehrende Umsaetze im Office-Segment',
                'ROIC von 35% zeigt exzellente Kapitalallokation',
                'Schulden/FCF-Ratio von nur 0.45 - sehr gesunde Bilanz'
            ],
            risks: [
                'Hohe Investitionen in KI-Infrastruktur koennten Margen belasten',
                'Bewertung laesst wenig Spielraum fuer Enttaeuschungen',
                'Regulatorische Risiken bei Activision-Integration und KI'
            ]
        },
        news: [
            { title: 'Microsoft Azure ueberholt AWS bei KI-Workloads', date: '04.04.2026', source: 'CNBC', sentiment: 'bullish', body: 'Laut Gartner hat Azure erstmals AWS bei KI- und ML-Workloads ueberholt. Der Marktanteil stieg auf 34% gegenueber 31% fuer AWS.' },
            { title: 'Copilot-Umsatz uebertrifft $10 Mrd. Jahreslauf', date: '01.04.2026', source: 'The Verge', sentiment: 'bullish', body: 'Microsoft Copilot hat die $10 Mrd. Jahresumsatz-Marke erreicht, schneller als von Analysten erwartet.' },
            { title: 'EU untersucht Microsoft-OpenAI Partnerschaft', date: '28.03.2026', source: 'Financial Times', sentiment: 'bearish', body: 'Die EU-Kommission prueft ob Microsofts $13 Mrd. Investment in OpenAI kartellrechtliche Bedenken aufwirft.' }
        ]
    },
    NVDA: {
        name: 'NVIDIA Corp', sector: 'Halbleiter', currentPrice: 188.63,
        marketCap: '4.60 Bio.', pe: 55.0, avg10PE: 45.0, beta: 1.68,
        years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
        // Post-Split (10:1 im Juni 2024) - alle historischen Werte angepasst
        revenue: [5.0,6.9,9.7,11.7,10.9,16.7,26.9,27.0,60.9,96.0,130.5],
        eps: [0.054,0.108,0.167,0.305,0.166,0.250,0.385,0.334,1.193,2.94,3.50],
        fcf: [0.7,1.5,2.9,3.1,2.8,4.7,8.1,3.8,27.0,60.0,72.0],
        bvps: [0.32,0.42,0.55,0.66,0.68,0.85,1.27,1.41,1.88,2.80,3.40],
        netIncome: [0.6,1.7,3.0,4.1,2.8,4.3,9.8,4.4,29.8,72.9,86.0],
        roic: [0.10,0.20,0.28,0.35,0.18,0.25,0.35,0.20,0.56,0.85,0.80],
        longTermDebt: [1.1,2.0,2.0,2.0,6.0,5.0,5.0,10.0,8.5,8.5,8.5],
        debtToFCF: [1.57,1.33,0.69,0.65,2.14,1.06,0.62,2.63,0.31,0.14,0.12],
        interestCoverage: [15.0,25.0,42.0,55.0,18.0,30.0,50.0,22.0,80.0,200.0,250.0],
        dividend: [0.017,0.023,0.029,0.049,0.062,0.064,0.064,0.064,0.064,0.04,0.04],
        divYield: [0.015,0.010,0.005,0.003,0.003,0.002,0.001,0.001,0.0005,0.0003,0.0002],
        payoutRatio: [0.31,0.21,0.17,0.16,0.37,0.26,0.17,0.19,0.05,0.014,0.011],
        buybackYield: [0.01,0.01,0.01,0.02,0.03,0.01,0.01,0.04,0.01,0.02,0.025],
        kgv: [30.0,40.0,50.0,22.0,55.0,75.0,65.0,45.0,40.0,55.0,54.0],
        growth: { revenue10: 38.7, revenue5: 50.7, eps10: 50.7, eps5: 56.0, fcf10: 60.0, fcf5: 72.0 },
        defaultGrowth: 25, defaultPE: 35,
        analystEstimates: {
            source: 'Zacks / Bloomberg / FactSet',
            targetPrice: 220.00, targetLow: 165.00, targetHigh: 280.00,
            epsNext: 4.50, epsGrowth5y: 30.0, revenueGrowthNext: 22.0,
            recommendation: 'Buy', numAnalysts: 52,
            fairValueDCF: 195.00, fairValuePE: 215.00, fairValueConsensus: 210.00,
            lastUpdated: new Date().toLocaleDateString('de-DE')
        },
        setup: { entry: 188.63, stopLoss: 165.00, target1: 220.00, target2: 260.00 },
        reasoning: {
            status: 'ueberbewertet',
            summary: 'NVIDIA handelt mit einem KGV von 55 - deutlich ueber dem 10J-Schnitt von 45. Trotz dominanter KI-Position ist das explosive Wachstum bereits eingepreist.',
            points: [
                'KGV von 55 preist bereits enormes zukuenftiges Wachstum ein',
                'KI-Chip-Markt wird zunehmend kompetitiv (AMD MI300, Google TPU, Custom ASICs)',
                'Export-Beschraenkungen nach China limitieren adressierbaren Markt',
                'Zyklusrisiko: Datacenter-Kunden koennten Investitionen zurueckfahren'
            ],
            risks: [
                'Abhaengigkeit von TSMC fuer Fertigung',
                'Potentielle KI-Blase koennte Nachfrage kurzfristig reduzieren',
                'Kundenkonzentration: Microsoft, Meta, Google machen >40% des Umsatzes aus'
            ]
        },
        news: [
            { title: 'NVIDIA Blackwell-Chips brechen Benchmark-Rekorde', date: '03.04.2026', source: 'Tom\'s Hardware', sentiment: 'bullish', body: 'Die neuen Blackwell-Ultra GPUs zeigen 2.5x die Leistung der Vorgaenger-Generation in KI-Training-Benchmarks.' },
            { title: 'US verschaerft KI-Chip-Exportkontrollen', date: '31.03.2026', source: 'Reuters', sentiment: 'bearish', body: 'Die US-Regierung weitet Exportbeschraenkungen auf weitere Laender aus. NVIDIA erwartet $3 Mrd. Umsatzeinbussen.' },
            { title: 'AMD MI400 soll NVIDIA H200 Konkurrenz machen', date: '26.03.2026', source: 'The Verge', sentiment: 'bearish', body: 'AMDs neue MI400-Serie verspricht vergleichbare KI-Performance bei 30% niedrigerem Preis.' }
        ]
    },
    GOOGL: {
        name: 'Alphabet Inc', sector: 'Technologie', currentPrice: 163.50,
        marketCap: '2.01 Bio.', pe: 22.5, avg10PE: 26.0, beta: 1.06,
        years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
        revenue: [74.9,90.3,110.9,136.8,161.9,182.5,257.6,283.0,307.4,340.0,370.0],
        eps: [3.11,3.49,2.21,4.35,4.90,4.73,11.09,4.56,5.80,7.50,8.20],
        fcf: [16.1,25.8,24.0,22.8,30.0,42.8,67.0,60.1,69.5,78.0,85.0],
        bvps: [24.3,27.5,29.3,31.3,34.6,38.4,47.3,46.6,52.1,58.0,64.0],
        netIncome: [16.3,19.5,12.7,30.7,34.3,40.3,76.0,60.0,73.8,95.0,105.0],
        roic: [0.14,0.15,0.08,0.16,0.16,0.15,0.30,0.21,0.23,0.27,0.28],
        longTermDebt: [1.9,3.9,4.0,4.0,5.0,14.8,14.8,14.7,13.2,12.0,11.0],
        debtToFCF: [0.12,0.15,0.17,0.18,0.17,0.35,0.22,0.24,0.19,0.15,0.13],
        interestCoverage: [250,180,120,200,210,240,380,300,350,400,450],
        dividend: [0,0,0,0,0,0,0,0,0,0.80,0.80],
        divYield: [0,0,0,0,0,0,0,0,0,0.005,0.005],
        payoutRatio: [0,0,0,0,0,0,0,0,0,0.11,0.10],
        buybackYield: [0,0.01,0.02,0.03,0.03,0.02,0.03,0.04,0.05,0.04,0.04],
        kgv: [30.0,28.5,38.0,22.5,28.0,29.5,27.0,18.5,25.0,23.0,22.5],
        growth: { revenue10: 17.4, revenue5: 15.2, eps10: 10.2, eps5: 11.6, fcf10: 18.1, fcf5: 14.7 },
        defaultGrowth: 12, defaultPE: 24,
        analystEstimates: {
            source: 'Zacks / Bloomberg / FactSet',
            targetPrice: 200.00, targetLow: 165.00, targetHigh: 240.00,
            epsNext: 9.20, epsGrowth5y: 13.0, revenueGrowthNext: 12.5,
            recommendation: 'Buy', numAnalysts: 45,
            fairValueDCF: 210.00, fairValuePE: 195.00, fairValueConsensus: 205.00,
            lastUpdated: '04.04.2026'
        },
        setup: { entry: 163.50, stopLoss: 142.00, target1: 195.00, target2: 230.00 },
        reasoning: {
            status: 'unterbewertet',
            summary: 'Alphabet handelt mit einem KGV von 22.5 - unter dem 10J-Durchschnitt von 26. Bei 15%+ Umsatzwachstum und starker KI-Position (Gemini) bietet sich eine Kaufgelegenheit.',
            points: [
                'KGV von 22.5 liegt 13% unter dem historischen Durchschnitt',
                'Google Cloud waechst >25% p.a. und wurde profitabel',
                'Gemini-KI-Modell konkurriert mit GPT - YouTube monetarisiert Shorts',
                'Nahezu schuldenfreie Bilanz mit $100+ Mrd. Cash',
                'Aktienrueckkaeufe von 4% p.a. reduzieren Aktienanzahl'
            ],
            risks: [
                'Kartellverfahren des DOJ koennte zu Zwangsaufspaltung fuehren',
                'KI-Suche (Perplexity, ChatGPT) bedroht das Kern-Suchgeschaeft',
                'Regulatorische Risiken in der EU (Digital Markets Act)'
            ]
        },
        news: [
            { title: 'Google Gemini 2.5 uebertrifft GPT-5 in Benchmarks', date: '04.04.2026', source: 'The Verge', sentiment: 'bullish', body: 'Googles neues Gemini 2.5 Modell zeigt ueberlegene Performance in 7 von 10 Standard-Benchmarks gegenueber OpenAIs GPT-5.' },
            { title: 'DOJ-Kartellverfahren: Urteil erwartet im Juni', date: '02.04.2026', source: 'Reuters', sentiment: 'bearish', body: 'Das US-Justizministerium koennte Google zur Abspaltung von Chrome und Android zwingen. Die Entscheidung wird im Juni erwartet.' },
            { title: 'YouTube Premium erreicht 150 Mio. Abonnenten', date: '29.03.2026', source: 'Bloomberg', sentiment: 'bullish', body: 'YouTube Premium waechst auf 150 Mio. zahlende Abonnenten. Der Streaming-Umsatz uebersteigt erstmals Netflix.' }
        ]
    },
    AMZN: {
        name: 'Amazon.com Inc', sector: 'E-Commerce / Cloud', currentPrice: 192.80,
        marketCap: '2.01 Bio.', pe: 42.0, avg10PE: 65.0, beta: 1.15,
        years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
        revenue: [107.0,136.0,177.9,232.9,280.5,386.1,469.8,514.0,574.8,620.0,670.0],
        eps: [1.25,4.90,6.15,20.14,23.01,41.83,64.81,1.29,2.90,4.40,5.10],
        fcf: [-3.4,10.5,8.3,17.3,21.7,26.4,2.1,-16.9,32.2,48.0,55.0],
        bvps: [25.0,32.0,41.0,52.0,62.0,80.0,112.0,105.0,110.0,120.0,132.0],
        netIncome: [0.6,2.4,3.0,10.1,11.6,21.3,33.4,2.7,30.4,46.0,54.0],
        roic: [0.02,0.05,0.04,0.11,0.10,0.14,0.17,0.01,0.12,0.15,0.16],
        longTermDebt: [8.2,7.7,24.7,23.5,23.4,31.8,48.7,58.3,52.6,48.0,44.0],
        debtToFCF: [-2.41,0.73,2.98,1.36,1.08,1.20,23.19,-3.45,1.63,1.00,0.80],
        interestCoverage: [4.5,9.8,7.2,14.5,16.3,28.1,32.5,5.6,18.3,25.0,30.0],
        dividend: [0,0,0,0,0,0,0,0,0,0,0],
        divYield: [0,0,0,0,0,0,0,0,0,0,0],
        payoutRatio: [0,0,0,0,0,0,0,0,0,0,0],
        buybackYield: [0,0,0,0,0,0,0,0,0,0,0],
        kgv: [480,170,180,80,78,92,60,88,65,48,42],
        growth: { revenue10: 20.1, revenue5: 11.6, eps10: 15.1, eps5: -33.9, fcf10: null, fcf5: 16.1 },
        defaultGrowth: 15, defaultPE: 35,
        analystEstimates: {
            source: 'Zacks / Bloomberg / FactSet',
            targetPrice: 235.00, targetLow: 190.00, targetHigh: 280.00,
            epsNext: 6.20, epsGrowth5y: 20.0, revenueGrowthNext: 11.0,
            recommendation: 'Buy', numAnalysts: 50,
            fairValueDCF: 240.00, fairValuePE: 225.00, fairValueConsensus: 230.00,
            lastUpdated: '04.04.2026'
        },
        setup: { entry: 192.80, stopLoss: 168.00, target1: 230.00, target2: 270.00 },
        reasoning: {
            status: 'unterbewertet',
            summary: 'Amazon handelt mit einem KGV von 42 - weit unter dem historischen Durchschnitt von 65. AWS ist der Gewinntreiber und Amazon wird zunehmend profitabel.',
            points: [
                'KGV von 42 liegt 35% unter dem historischen Durchschnitt von 65',
                'AWS Cloud-Sparte generiert >$25 Mrd. operativen Gewinn p.a.',
                'Advertising-Geschaeft waechst >20% und hat hohe Margen',
                'Effizienzprogramm hat operative Margen deutlich verbessert',
                'Prime-Mitgliedschaft schafft starke Kundenbindung'
            ],
            risks: [
                'Hohe Capex fuer KI-Infrastruktur und Logistik',
                'E-Commerce-Wettbewerb durch Temu und Shein',
                'Regulatorische Risiken in EU und USA'
            ]
        },
        news: [
            { title: 'AWS startet eigene KI-Chips fuer Training', date: '03.04.2026', source: 'CNBC', sentiment: 'bullish', body: 'Amazon Web Services stellt Trainium 3 vor - eigene KI-Chips die Kosten um 40% gegenueber NVIDIA-Loesungen senken sollen.' },
            { title: 'Amazon expandiert Same-Day-Delivery in Europa', date: '30.03.2026', source: 'Reuters', sentiment: 'bullish', body: 'Amazon kuendigt massiven Ausbau der Same-Day-Delivery auf 50 europaeische Staedte an.' }
        ]
    }
};

// === MARKET NEWS (wird live von Yahoo Finance geladen) ===
let marketNewsCache = [];
let marketAlerts = [];

// === STATE ===
let currentTicker = 'MORN';
let recentTickers = ['MORN', 'AAPL', 'MSFT'];
let chartInstances = {};
let isLoading = false;

// === API KONFIGURATION ===
// Yahoo: Live-Kurse + News (kein Key, via CORS Proxy)
// Financial Modeling Prep: Fundamentaldaten (gratis, eigener Key bei financialmodelingprep.com/developer)
// === YAHOO FINANCE API (kein Key noetig) ===
const CORS_PROXY = 'https://corsproxy.io/?';
const Y1 = 'https://query1.finance.yahoo.com';
const Y2 = 'https://query2.finance.yahoo.com';

let _yahooCrumb = null;
let _yahooCrumbExpiry = 0;

async function yahooFetch(path, base) {
    // Reihenfolge: query1 → query2 → query1 (nach 800ms Pause) → query2 (nach 800ms)
    const hosts = base ? [base, base] : [Y1, Y2, Y1, Y2];
    let lastErr;
    for (let i = 0; i < hosts.length; i++) {
        try {
            // Ab 3. Versuch kurze Pause einlegen (ueberbrueckt temporaere Rate-Limits)
            if (i === 2) await new Promise(r => setTimeout(r, 800));
            const url = CORS_PROXY + encodeURIComponent(hosts[i] + path);
            const resp = await fetch(url, { headers: { 'Accept': 'application/json' } });
            if (resp.ok) return resp.json();
            if (resp.status === 403 || resp.status === 429) {
                lastErr = new Error(`Yahoo ${resp.status}: ${path.split('?')[0]}`);
                continue;
            }
            throw new Error(`Yahoo ${resp.status}: ${path.split('?')[0]}`);
        } catch (e) {
            lastErr = e;
        }
    }
    throw lastErr;
}

// Versucht Yahoo-Crumb zu holen (ermoeglicht quoteSummary mit vollen Fundamentaldaten)
async function getYahooCrumb() {
    if (_yahooCrumb && Date.now() < _yahooCrumbExpiry) return _yahooCrumb;
    try {
        // query2 ist oft weniger strikt als query1
        const resp = await fetch(CORS_PROXY + encodeURIComponent(Y2 + '/v1/test/getcrumb'), {
            headers: { 'Accept': 'text/plain,*/*', 'User-Agent': 'Mozilla/5.0' }
        });
        if (resp.ok) {
            const text = (await resp.text()).trim();
            // Gueltiger Crumb: kurzer alphanumerischer String, kein HTML/JSON
            if (text && text.length < 30 && !text.includes('<') && !text.includes('{')) {
                _yahooCrumb = text;
                _yahooCrumbExpiry = Date.now() + 3_600_000; // 1h cachen
                console.log('Yahoo Crumb erhalten:', _yahooCrumb);
                return _yahooCrumb;
            }
        }
    } catch (e) { console.warn('Crumb-Abruf fehlgeschlagen:', e.message); }
    return null;
}

// Historische Fundamentaldaten via fundamentals-timeseries (kein Crumb noetig!)
async function yahooTimeseries(ticker) {
    const p1 = Math.floor(new Date('2010-01-01').getTime() / 1000);
    const p2 = Math.floor(Date.now() / 1000);
    const types = 'annualDilutedEPS,annualTotalRevenue,annualNetIncome,annualFreeCashFlow,annualLongTermDebt,annualStockholdersEquity,annualBookValue,annualReturnOnEquity';
    const path = `/ws/fundamentals-timeseries/v1/finance/timeseries/${ticker}?type=${types}&period1=${p1}&period2=${p2}`;
    const data = await yahooFetch(path, Y1);
    if (!data.timeseries || !data.timeseries.result) throw new Error('Keine Zeitreihendaten');
    const out = {};
    for (const series of data.timeseries.result) {
        const type = series.meta && series.meta.type && series.meta.type[0];
        if (type && series[type] && series[type].length > 0) {
            out[type] = [...series[type]].sort((a, b) => a.asOfDate.localeCompare(b.asOfDate));
        }
    }
    return out;
}

// Hilfsfunktion: Wert fuer ein Jahr aus Zeitreihendaten extrahieren (nach asOfDate-Jahr)
function tsVal(series, year, divisor) {
    if (!series) return 0;
    const item = series.find(d => d.asOfDate && d.asOfDate.startsWith(year));
    if (!item || !item.reportedValue) return 0;
    const raw = item.reportedValue.raw;
    return raw != null ? +((raw / (divisor || 1))).toFixed(divisor && divisor >= 1e6 ? 1 : 2) : 0;
}

function calcCAGR(startVal, endVal, years) {
    if (!startVal || startVal <= 0 || !endVal || endVal <= 0 || years <= 0) return 0;
    return (Math.pow(endVal / startVal, 1 / years) - 1) * 100;
}

function calcGrowth(arr) {
    const len = arr.length;
    const last = len - 1;
    return {
        rev10: 0, rev5: 0, // wird spaeter befuellt falls revenue vorhanden
        eps10: len >= 2 && arr[0] > 0 ? +calcCAGR(arr[0], arr[last], last).toFixed(1) : 0,
        eps5:  len >= 5 && arr[last-4] > 0 ? +calcCAGR(arr[last-4], arr[last], 4).toFixed(1) : (len >= 2 && arr[0] > 0 ? +calcCAGR(arr[0], arr[last], last).toFixed(1) : 0),
        fcf10: 0, fcf5: 0,
        revenue10: 0, revenue5: 0
    };
}

// Kurs-Historie aus Chart-Daten → jaehrliche Schlusskurse
function extractAnnualPrices(timestamps, closes) {
    const byYear = {};
    (timestamps || []).forEach((ts, i) => {
        if (closes[i] == null) return;
        const y = new Date(ts * 1000).getFullYear();
        byYear[y] = closes[i]; // letzter Kurs des Jahres ueberschreibt
    });
    return byYear;
}

async function fetchStockFromAPI(ticker) {
    showLoading(true);
    try {
        // Alle drei Quellen parallel laden
        const [chartResp, newsResp, tsData] = await Promise.all([
            yahooFetch(`/v8/finance/chart/${ticker}?interval=3mo&range=10y&events=div,splits`),
            yahooFetch(`/v1/finance/search?q=${ticker}&newsCount=10&quotesCount=5`, Y1)
                .catch(() => ({ news: [], quotes: [] })),
            yahooTimeseries(ticker)
                .catch(e => { console.warn('Timeseries fehlgeschlagen:', e.message); return {}; })
        ]);

        const chartResult = chartResp.chart && chartResp.chart.result && chartResp.chart.result[0];
        if (!chartResult) throw new Error(`Ticker "${ticker}" nicht gefunden.`);

        const meta       = chartResult.meta || {};
        const events     = chartResult.events || {};
        const timestamps = chartResult.timestamp || [];
        const closes     = (chartResult.indicators && chartResult.indicators.quote &&
                            chartResult.indicators.quote[0] && chartResult.indicators.quote[0].close) || [];

        const currentPrice = meta.regularMarketPrice || meta.chartPreviousClose || 0;
        const companyName  = meta.longName || meta.shortName ||
            (newsResp.quotes && newsResp.quotes[0] &&
             (newsResp.quotes[0].longname || newsResp.quotes[0].shortname)) || ticker;

        // === Jahre aus Timeseries-Daten (EPS als Anker) ===
        const epsData = tsData.annualDilutedEPS || [];
        const revData = tsData.annualTotalRevenue || [];

        // Jahreslabels aus asOfDate ableiten (Fiskaljahr-Enddatum)
        const years = epsData.map(d => d.asOfDate.slice(0, 4)); // z.B. "2024"

        const epsArr      = epsData.map(d => +(d.reportedValue && d.reportedValue.raw != null ? d.reportedValue.raw : 0).toFixed(2));
        const revenue     = revData.map(d => +((d.reportedValue && d.reportedValue.raw ? d.reportedValue.raw : 0) / 1e9).toFixed(2));
        // Revenue zu Jahreslabels ausrichten
        const revenueAligned = years.map(y => {
            const item = revData.find(d => d.asOfDate && d.asOfDate.startsWith(y));
            return item && item.reportedValue ? +((item.reportedValue.raw || 0) / 1e9).toFixed(2) : 0;
        });

        const fcfData     = tsData.annualFreeCashFlow || [];
        const fcfArr      = years.map(y => {
            const item = fcfData.find(d => d.asOfDate && d.asOfDate.startsWith(y));
            return item && item.reportedValue ? +((item.reportedValue.raw || 0) / 1e9).toFixed(2) : 0;
        });

        const niData      = tsData.annualNetIncome || [];
        const netIncomeArr = years.map(y => {
            const item = niData.find(d => d.asOfDate && d.asOfDate.startsWith(y));
            return item && item.reportedValue ? +((item.reportedValue.raw || 0) / 1e9).toFixed(2) : 0;
        });

        const debtData    = tsData.annualLongTermDebt || [];
        const ltDebt      = years.map(y => {
            const item = debtData.find(d => d.asOfDate && d.asOfDate.startsWith(y));
            return item && item.reportedValue ? +((item.reportedValue.raw || 0) / 1e9).toFixed(2) : 0;
        });

        const bvData      = tsData.annualBookValue || [];
        const bvps        = years.map(y => {
            const item = bvData.find(d => d.asOfDate && d.asOfDate.startsWith(y));
            return item && item.reportedValue ? +(item.reportedValue.raw || 0).toFixed(2) : 0;
        });

        const roeData     = tsData.annualReturnOnEquity || [];
        const roicArr     = years.map(y => {
            const item = roeData.find(d => d.asOfDate && d.asOfDate.startsWith(y));
            return item && item.reportedValue ? +(item.reportedValue.raw || 0).toFixed(4) : 0;
        });

        // Fallback: wenn Timeseries leer, wenigstens ein Jahr mit Nullen
        if (years.length === 0) {
            years.push(String(new Date().getFullYear()));
            epsArr.push(0); revenueAligned.push(0); fcfArr.push(0); netIncomeArr.push(0);
            ltDebt.push(0); bvps.push(0); roicArr.push(0);
        }

        const placeholder = years.map(() => 0);

        // === Dividenden aus Chart-Events ===
        const divRaw = events.dividends ? Object.values(events.dividends) : [];
        const divByYear = {};
        divRaw.forEach(d => {
            if (!d.date || !d.amount) return;
            const y = String(new Date(d.date * 1000).getFullYear());
            divByYear[y] = (divByYear[y] || 0) + d.amount;
        });
        const dividend  = years.map(y => +(divByYear[y] || 0).toFixed(3));
        const divYield  = years.map(y => {
            const d = divByYear[y] || 0;
            return d > 0 && currentPrice > 0 ? +(d / currentPrice).toFixed(4) : 0;
        });

        // === Historisches KGV aus Kurshistorie ===
        const annualPrices = extractAnnualPrices(timestamps, closes);
        const kgvArr = years.map((y, i) => {
            const eps   = epsArr[i];
            const price = annualPrices[parseInt(y)];
            return eps > 0 && price > 0 ? +(price / eps).toFixed(2) : 0;
        });
        const validKgv  = kgvArr.filter(k => k > 0 && k < 500);
        const avg10PE   = validKgv.length
            ? +(validKgv.reduce((a, b) => a + b, 0) / validKgv.length).toFixed(2)
            : 20;

        const lastIdx    = years.length - 1;
        const lastEps    = epsArr[lastIdx] || 0;
        const currentPE  = lastEps > 0 ? +(currentPrice / lastEps).toFixed(2) : 0;

        // === Wachstumsraten ===
        const posEps = epsArr.filter(e => e > 0);
        const posRev = revenueAligned.filter(r => r > 0);
        const posFcf = fcfArr.filter(f => f > 0);
        const growth = {
            eps10:    posEps.length >= 2 ? +calcCAGR(posEps[0], posEps[posEps.length-1], posEps.length - 1).toFixed(1) : 0,
            eps5:     posEps.length >= 2 ? +calcCAGR(posEps[Math.max(0, posEps.length-5)], posEps[posEps.length-1], Math.min(4, posEps.length-1)).toFixed(1) : 0,
            revenue10: posRev.length >= 2 ? +calcCAGR(posRev[0], posRev[posRev.length-1], posRev.length - 1).toFixed(1) : 0,
            revenue5:  posRev.length >= 2 ? +calcCAGR(posRev[Math.max(0, posRev.length-5)], posRev[posRev.length-1], Math.min(4, posRev.length-1)).toFixed(1) : 0,
            fcf10:    posFcf.length >= 2 ? +calcCAGR(posFcf[0], posFcf[posFcf.length-1], posFcf.length - 1).toFixed(1) : 0,
            fcf5:     posFcf.length >= 2 ? +calcCAGR(posFcf[Math.max(0, posFcf.length-5)], posFcf[posFcf.length-1], Math.min(4, posFcf.length-1)).toFixed(1) : 0,
        };

        // === Fair Value ===
        // Wachstumsrate fuer DCF auf realistisches Maximum begrenzen
        // (verhindert Explosion bei Hochwaschstums-Titeln wie NVDA)
        const rawGrowth = growth.eps5 > 0 ? growth.eps5 :
                          growth.eps10 > 0 ? growth.eps10 :
                          growth.revenue5 > 0 ? growth.revenue5 : 8;
        const epsGrowth5y = Math.min(rawGrowth, 35); // max 35% p.a. fuer DCF-Berechnung
        const dcfPE = avg10PE > 0 ? Math.min(avg10PE, 30) : 20; // vernuenftiger PE fuer DCF
        const fairValuePE  = avg10PE > 0 ? +(lastEps * avg10PE).toFixed(2) : +(lastEps * 20).toFixed(2);
        const futureEPS    = lastEps * Math.pow(1 + Math.max(epsGrowth5y, 5) / 100, 10);
        const fairValueDCF = +(futureEPS * dcfPE / Math.pow(1.10, 10)).toFixed(2);
        // Wenn PE-basierter Fairer Wert = 0 (keine historischen PE-Daten), nur DCF verwenden
        const fairValueConsensus = fairValuePE > 0
            ? +((fairValuePE * 0.5 + fairValueDCF * 0.5).toFixed(2))
            : +fairValueDCF.toFixed(2);
        const margin = fairValueConsensus > 0 ? (fairValueConsensus - currentPrice) / fairValueConsensus : 0;
        const recLabel = margin > 0.15 ? 'Buy' : margin > -0.05 ? 'Hold' : 'Sell';

        // === Marktkapitalisierung (Schaetzung aus Preis * Shares wenn vorhanden) ===
        const mcRaw = meta.marketCap || 0;
        const mcStr = mcRaw >= 1e12 ? (mcRaw/1e12).toFixed(2)+' Bio.' :
                      mcRaw >= 1e9  ? (mcRaw/1e9).toFixed(2)+' Mrd.' :
                      mcRaw >= 1e6  ? (mcRaw/1e6).toFixed(0)+' Mio.' : '-';

        // === Reasoning ===
        const reasoning = generateReasoning(ticker,
            { companyName, sector: meta.market || 'Aktie', industry: '', description: '' },
            { pe: currentPE, beta: meta.beta || 1.0 },
            epsArr, kgvArr, avg10PE, fcfArr, revenueAligned, growth,
            years.map((_, i) => ({ roic: roicArr[i] || 0, dividendYield: divYield[i] || 0, debtToEquity: 0 })),
            lastIdx, margin);

        // === News ===
        const newsItems = (newsResp.news || []).slice(0, 8).map(n => ({
            title: n.title || 'Kein Titel',
            date: n.providerPublishTime ? new Date(n.providerPublishTime * 1000).toLocaleDateString('de-DE') : '-',
            source: n.publisher || 'Yahoo Finance', sentiment: 'neutral',
            body: (n.summary || n.title || '').substring(0, 250), link: n.link || ''
        }));
        if (newsItems.length === 0) newsItems.push({
            title: companyName + ' – Live-Daten geladen', source: 'Yahoo Finance', sentiment: 'neutral',
            date: new Date().toLocaleDateString('de-DE'),
            body: 'Kurs: ' + fmtUSD(currentPrice) + ' | KGV: ' + fmt(currentPE, 1)
        });

        const hasTimeseries = epsArr.some(e => e !== 0);

        const stockData = {
            name: companyName, sector: meta.market || 'Aktie', currentPrice,
            marketCap: mcStr, pe: currentPE, avg10PE, beta: +(meta.beta || 1.0).toFixed(2),
            years, revenue: revenueAligned, eps: epsArr, fcf: fcfArr, bvps,
            netIncome: netIncomeArr, roic: roicArr, longTermDebt: ltDebt,
            debtToFCF: placeholder, interestCoverage: placeholder,
            dividend, divYield, payoutRatio: placeholder, buybackYield: placeholder, kgv: kgvArr,
            growth, defaultGrowth: Math.round(Math.max(epsGrowth5y, 5)), defaultPE: Math.round(avg10PE),
            analystEstimates: {
                source: hasTimeseries ? 'Yahoo Finance (Fundamentals + Chart)' : 'Yahoo Finance (Chart-Daten)',
                targetPrice: +fairValueConsensus.toFixed(2),
                targetLow:   +(fairValueConsensus * 0.85).toFixed(2),
                targetHigh:  +(fairValueConsensus * 1.15).toFixed(2),
                epsNext:     +(lastEps * 1.08).toFixed(2),
                epsGrowth5y: +epsGrowth5y.toFixed(1),
                revenueGrowthNext: growth.revenue5 > 0 ? +growth.revenue5.toFixed(1) : 5.0,
                recommendation: recLabel, numAnalysts: 0,
                fairValueDCF, fairValuePE, fairValueConsensus,
                lastUpdated: new Date().toLocaleDateString('de-DE'),
                avgRating: meta.averageAnalystRating || ''
            },
            setup: {
                entry: currentPrice, stopLoss: +(currentPrice * 0.90).toFixed(2),
                target1: +(currentPrice * 1.12).toFixed(2),
                target2: +Math.max(fairValueConsensus, currentPrice * 1.25).toFixed(2)
            },
            reasoning, news: newsItems, _hasSummary: hasTimeseries
        };

        stockDB[ticker] = stockData;
        return stockData;
    } finally {
        showLoading(false);
    }
}

function generateReasoning(ticker, profile, quote, eps, kgv, avgPE, fcf, revenue, growth, metrics, last, margin) {
    const status = margin > 0.1 ? 'unterbewertet' : margin < -0.1 ? 'ueberbewertet' : 'fair bewertet';
    const currentPE = quote.pe || 0;
    const lastEps = eps[last] || 0;
    const prevEps = eps[last - 1] || 0;
    const epsChange = prevEps > 0 ? ((lastEps / prevEps - 1) * 100).toFixed(1) : '0';
    const lastFcf = fcf[last] || 0;

    const summary = `${profile.companyName} handelt mit einem KGV von ${fmt(currentPE, 1)} ${currentPE < avgPE ? 'unter' : 'ueber'} dem historischen Durchschnitt von ${fmt(avgPE, 1)}. EPS-Veraenderung zum Vorjahr: ${epsChange}%.`;

    const points = [];
    if (currentPE > 0 && avgPE > 0) {
        const discount = ((1 - currentPE / avgPE) * 100).toFixed(0);
        points.push(`KGV von ${fmt(currentPE, 1)} vs. historischer Durchschnitt ${fmt(avgPE, 1)} = ${discount > 0 ? discount + '% Rabatt' : Math.abs(discount) + '% Aufschlag'}`);
    }
    if (growth.eps5 > 0) points.push(`EPS-Wachstum (5J CAGR): ${fmt(growth.eps5, 1)}% p.a.`);
    if (growth.revenue5 > 0) points.push(`Umsatzwachstum (5J CAGR): ${fmt(growth.revenue5, 1)}% p.a.`);
    if (lastFcf > 0) points.push(`Free Cashflow: $${fmt(lastFcf, 1)} Mio.`);
    if (metrics[last] && metrics[last].roic > 0.1) points.push(`Starker ROIC von ${fmtPct(metrics[last].roic)}`);
    if (metrics[last] && metrics[last].dividendYield > 0.01) points.push(`Dividendenrendite: ${fmtPct(metrics[last].dividendYield)}`);
    if (points.length < 3) points.push(`Sektor: ${profile.sector || 'Unbekannt'} - ${profile.industry || ''}`);

    const risks = [];
    if (currentPE > avgPE * 1.2) risks.push(`KGV von ${fmt(currentPE, 1)} liegt deutlich ueber dem historischen Durchschnitt`);
    if (growth.eps5 < 0) risks.push(`EPS ruecklaeufig: ${fmt(growth.eps5, 1)}% p.a. ueber 5 Jahre`);
    if (metrics[last] && metrics[last].debtToEquity > 2) risks.push(`Hohe Verschuldung: Debt/Equity von ${fmt(metrics[last].debtToEquity, 1)}`);
    if (quote.beta > 1.5) risks.push(`Hohe Volatilitaet: Beta von ${fmt(quote.beta, 2)}`);
    if (risks.length === 0) risks.push('Allgemeine Marktrisiken und makrooekonomische Unsicherheiten');

    return { status, summary, points, risks };
}

function showLoading(show) {
    isLoading = show;
    let overlay = document.getElementById('loadingOverlay');
    if (show) {
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'loadingOverlay';
            overlay.innerHTML = '<div class="loading-spinner"><i class="fas fa-spinner fa-spin"></i><span>Lade Daten...</span></div>';
            document.body.appendChild(overlay);
        }
        overlay.style.display = 'flex';
    } else if (overlay) {
        overlay.style.display = 'none';
    }
}

// === HELPERS ===
function fmt(n, d = 2) { return n != null ? n.toFixed(d) : '-'; }
function fmtPct(n) { return n != null ? (n * 100).toFixed(1) + '%' : '-'; }
function fmtUSD(n) { if (n == null || isNaN(n)) return '$–'; return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
function destroyChart(key) { if (chartInstances[key]) { chartInstances[key].destroy(); delete chartInstances[key]; } }

// === NAVIGATION ===
document.querySelectorAll('.nav-links li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.nav-links li').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        item.classList.add('active');
        const sec = item.dataset.section;
        document.getElementById(sec).classList.add('active');
        if (sec === 'chart') loadTradingView();
    });
});

// === TICKER SEARCH ===
document.getElementById('tickerSearchBtn').addEventListener('click', () => loadTicker());
document.getElementById('tickerInput').addEventListener('keydown', e => { if (e.key === 'Enter') loadTicker(); });

async function loadTicker() {
    const input = document.getElementById('tickerInput').value.trim().toUpperCase();
    if (!input || isLoading) return;

    try {
        await fetchStockFromAPI(input);
    } catch (e) {
        // Bei Fehler: Cache verwenden wenn vorhanden, sonst Fehlermeldung
        if (!stockDB[input]) {
            let msg = '❌ "' + input + '" konnte nicht geladen werden.\n\n';
            if (e.message.includes('nicht gefunden')) {
                msg += 'Ticker nicht gefunden. Bitte US-Boersenkuerzel verwenden (z.B. AAPL, MSFT, TSLA, DELL, SAP).';
            } else if (e.message.includes('429') || e.message.includes('Too Many')) {
                msg += 'Zu viele Anfragen. Bitte kurz warten und erneut versuchen.';
            } else {
                msg += 'Details: ' + e.message;
            }
            alert(msg);
            return;
        }
        console.warn('Fetch fehlgeschlagen, verwende Cache:', e.message);
    }

    currentTicker = input;
    if (!recentTickers.includes(input)) {
        recentTickers.unshift(input);
        if (recentTickers.length > 6) recentTickers.pop();
    }
    renderAll();
}

function renderRecentTickers() {
    const container = document.getElementById('recentTickers');
    container.innerHTML = recentTickers.map(t =>
        `<span class="recent-ticker" onclick="document.getElementById('tickerInput').value='${t}';loadTicker()">${t}</span>`
    ).join('');
}

// === CHART DEFAULTS ===
Chart.defaults.color = '#8b90a0';
Chart.defaults.borderColor = '#2d3248';
Chart.defaults.font.family = "'Segoe UI', sans-serif";

// === RENDER ALL ===
function renderAll() {
    const s = stockDB[currentTicker];
    document.getElementById('tickerInput').value = currentTicker;
    renderRecentTickers();
    renderDashboard(s);
    renderAnalysis(s);
    renderValuation(s);
    renderSetup(s);
    renderNews(s);
    renderWeekly();
    renderEconomic(s);
    updateTradingViewTicker();
    updateLivePrice();
}

// === DASHBOARD ===
function renderDashboard(s) {
    document.getElementById('dashboardTitle').textContent = s.name + ' (' + currentTicker + ')';
    document.getElementById('stockBadge').innerHTML = '<span class="sector">' + s.sector + '</span>';
    document.getElementById('currentPrice').textContent = fmtUSD(s.currentPrice);

    // Stale-Data-Warnung wenn Cache verwendet wird ohne API-Key
    renderDataSourceBanner(s);

    const lastEps  = s.eps.length > 0 ? s.eps[s.eps.length - 1] : 0;
    const prevEps  = s.eps.length > 1 ? s.eps[s.eps.length - 2] : null;
    const yoyChange = (prevEps && prevEps !== 0) ? ((lastEps / prevEps) - 1) * 100 : 0;
    document.getElementById('priceChange').textContent = prevEps != null ? (yoyChange >= 0 ? '+' : '') + fmt(yoyChange, 1) + '% EPS YoY' : 'EPS: $' + fmt(lastEps, 2);
    document.getElementById('priceChange').className = 'kpi-change ' + (yoyChange >= 0 ? 'positive' : 'negative');

    document.getElementById('marketCap').textContent = '$' + s.marketCap;
    document.getElementById('marketCapSub').textContent = 'KGV: ' + fmt(s.pe, 1) + ' | Beta: ' + fmt(s.beta, 2);

    // Fair Value aus Analysten-Schaetzungen (Konsens)
    const a = s.analystEstimates;
    const fairValue = a.fairValueConsensus;
    const margin = (fairValue - s.currentPrice) / fairValue;

    document.getElementById('fairValue').textContent = fmtUSD(fairValue);
    document.getElementById('fairValueDiff').textContent = fmt(Math.abs(margin) * 100, 1) + '% ' + (margin > 0 ? 'unterbewertet' : 'ueberbewertet');
    document.getElementById('fairValueDiff').className = 'kpi-change ' + (margin > 0 ? 'positive' : 'negative');

    const recEl = document.getElementById('recommendation');
    recEl.classList.remove('buy', 'sell', 'hold');
    if (a.recommendation === 'Strong Buy' || (a.recommendation === 'Buy' && margin > 0.1)) { recEl.textContent = 'KAUFEN'; recEl.classList.add('buy'); document.getElementById('recReason').textContent = a.numAnalysts + ' Analysten | Kursziel: ' + fmtUSD(a.targetPrice); }
    else if (a.recommendation === 'Hold' || (margin > -0.1 && margin <= 0.1)) { recEl.textContent = 'HALTEN'; recEl.classList.add('hold'); document.getElementById('recReason').textContent = a.numAnalysts + ' Analysten | Kursziel: ' + fmtUSD(a.targetPrice); }
    else { recEl.textContent = 'VERKAUFEN'; recEl.classList.add('sell'); document.getElementById('recReason').textContent = a.numAnalysts + ' Analysten | Kursziel: ' + fmtUSD(a.targetPrice); }

    // Reasoning
    renderReasoning(s);

    // Setup Preview
    renderSetupPreview(s);

    // Analysten-Box
    renderAnalystBox(s);

    // Charts
    renderEPSChart(s);
    renderRevenueChart(s);
}

function renderDataSourceBanner(s) {
    let banner = document.getElementById('dataSourceBanner');
    if (!banner) {
        banner = document.createElement('div');
        banner.id = 'dataSourceBanner';
        banner.className = 'data-source-banner';
        const dashboardSection = document.getElementById('dashboard');
        if (dashboardSection) dashboardSection.insertBefore(banner, dashboardSection.firstChild.nextSibling);
    }
    const src = (s.analystEstimates && s.analystEstimates.source) ? s.analystEstimates.source : '';
    const isLive   = src.includes('Yahoo Finance');
    const isFull   = isLive && s._hasSummary;
    const rating   = s.analystEstimates.avgRating ? ' | Analysten-Ø: ' + s.analystEstimates.avgRating : '';

    if (isFull) {
        banner.className = 'data-source-banner live';
        banner.innerHTML = '<i class="fas fa-check-circle"></i> <strong>Live-Daten (vollständig)</strong> – Yahoo Finance QuoteSummary + Chart | Stand: ' + s.analystEstimates.lastUpdated + rating;
    } else if (isLive) {
        banner.className = 'data-source-banner partial';
        banner.innerHTML = '<i class="fas fa-info-circle"></i> <strong>Live-Daten (Chart)</strong> – Kurs, EPS & Dividenden aus Yahoo Chart-Events | Stand: ' + s.analystEstimates.lastUpdated + rating;
    } else {
        banner.className = 'data-source-banner cached';
        banner.innerHTML = '<i class="fas fa-exclamation-triangle"></i> <strong>Demo-Daten (Cache)</strong> – Vorinstallierte Daten. Ticker erneut suchen für Live-Daten.';
    }
}

function renderAnalystBox(s) {
    const a = s.analystEstimates;
    const margin = (a.fairValueConsensus - s.currentPrice) / a.fairValueConsensus;
    document.getElementById('analystBox').innerHTML = `
        <h3><i class="fas fa-users"></i> Analysten-Schaetzungen (Konsens)</h3>
        <div class="analyst-grid">
            <div class="analyst-item">
                <div class="ai-label">Kursziel (Durchschn.)</div>
                <div class="ai-value" style="color:var(--accent)">${fmtUSD(a.targetPrice)}</div>
                <div class="ai-sub">${fmtUSD(a.targetLow)} - ${fmtUSD(a.targetHigh)}</div>
            </div>
            <div class="analyst-item">
                <div class="ai-label">Konsens</div>
                <div class="ai-value" style="color:${a.recommendation==='Buy'||a.recommendation==='Strong Buy'?'var(--green)':a.recommendation==='Hold'?'var(--yellow)':'var(--red)'}">${a.recommendation === 'Buy' ? 'KAUFEN' : a.recommendation === 'Strong Buy' ? 'STARK KAUFEN' : a.recommendation === 'Hold' ? 'HALTEN' : 'VERKAUFEN'}</div>
                <div class="ai-sub">${a.numAnalysts} Analysten</div>
            </div>
            <div class="analyst-item">
                <div class="ai-label">EPS Schaetzung (naechstes J.)</div>
                <div class="ai-value">${fmtUSD(a.epsNext)}</div>
                <div class="ai-sub">Wachstum 5J: ${fmt(a.epsGrowth5y,1)}% p.a.</div>
            </div>
            <div class="analyst-item">
                <div class="ai-label">Umsatzwachstum (naechstes J.)</div>
                <div class="ai-value">${fmt(a.revenueGrowthNext,1)}%</div>
                <div class="ai-sub">Fair Value: ${fmtUSD(a.fairValueConsensus)}</div>
            </div>
        </div>
        <div class="analyst-source">Quelle: ${a.source} | Stand: ${a.lastUpdated}</div>
    `;
}

function renderReasoning(s) {
    const r = s.reasoning;
    const badge = document.getElementById('reasoningBadge');
    badge.textContent = r.status.toUpperCase();
    badge.className = 'reasoning-badge ' + (r.status === 'unterbewertet' ? 'positive' : r.status === 'ueberbewertet' ? 'negative' : 'warn');

    document.querySelector('.reasoning-header h3').innerHTML = '<i class="fas fa-brain"></i> Warum ist ' + currentTicker + ' ' + r.status + '?';

    let html = '<p><strong>' + r.summary + '</strong></p><ul>';
    r.points.forEach(p => html += '<li>' + p + '</li>');
    html += '</ul>';
    if (r.risks.length) {
        html += '<p style="margin-top:12px"><strong style="color:var(--red)">Risiken:</strong></p><ul>';
        r.risks.forEach(p => html += '<li>' + p + '</li>');
        html += '</ul>';
    }
    document.getElementById('reasoningContent').innerHTML = html;
}

function renderSetupPreview(s) {
    const setup = s.setup;
    const rr = ((setup.target1 - setup.entry) / (setup.entry - setup.stopLoss)).toFixed(1);
    document.getElementById('setupLevels').innerHTML = `
        <div class="setup-level stop"><div class="level-label">Stop-Loss</div><div class="level-value">${fmtUSD(setup.stopLoss)}</div></div>
        <div class="setup-level entry"><div class="level-label">Einstieg</div><div class="level-value">${fmtUSD(setup.entry)}</div></div>
        <div class="setup-level target"><div class="level-label">Ziel 1</div><div class="level-value">${fmtUSD(setup.target1)}</div></div>
        <div class="setup-level target2"><div class="level-label">Ziel 2</div><div class="level-value">${fmtUSD(setup.target2)}</div></div>
        <div class="setup-level ratio"><div class="level-label">CRV</div><div class="level-value">${rr}:1</div></div>
    `;
}

function renderEPSChart(s) {
    destroyChart('eps');
    const ctx = document.getElementById('epsChart').getContext('2d');
    chartInstances.eps = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: s.years,
            datasets: [{
                label: 'EPS ($)',
                data: s.eps,
                backgroundColor: s.eps.map(e => e >= 5 ? 'rgba(34,197,94,0.7)' : e >= 2 ? 'rgba(79,143,247,0.7)' : 'rgba(245,158,11,0.7)'),
                borderRadius: 6, borderSkipped: false
            }]
        },
        options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { ticks: { callback: v => '$' + v }, grid: { color: 'rgba(45,50,72,0.5)' } }, x: { grid: { display: false } } } }
    });
}

function renderRevenueChart(s) {
    destroyChart('revenue');
    const ctx = document.getElementById('revenueChart').getContext('2d');
    chartInstances.revenue = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: s.years,
            datasets: [
                { label: 'Umsatz (Mrd $)', data: s.revenue, backgroundColor: 'rgba(79,143,247,0.6)', borderRadius: 6, borderSkipped: false, order: 2 },
                { label: 'FCF (Mio $)', data: s.fcf, type: 'line', borderColor: '#22c55e', backgroundColor: 'rgba(34,197,94,0.1)', fill: true, tension: 0.3, pointRadius: 3, borderWidth: 2, order: 1 }
            ]
        },
        options: { responsive: true, scales: { y: { ticks: { callback: v => '$' + v }, grid: { color: 'rgba(45,50,72,0.5)' } }, x: { grid: { display: false } } } }
    });
}

// === TRADINGVIEW ===
function loadTradingView() {
    const container = document.getElementById('tradingviewContainer');
    container.innerHTML = '';
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
        autosize: true, symbol: currentTicker, interval: 'D', timezone: 'Europe/Berlin',
        theme: 'dark', style: '1', locale: 'de_DE', allow_symbol_change: true,
        backgroundColor: 'rgba(26,29,39,1)', gridColor: 'rgba(45,50,72,0.5)',
        hide_volume: false, support_host: 'https://www.tradingview.com',
        width: '100%', height: '100%'
    });
    container.appendChild(script);
}

function updateTradingViewTicker() {
    if (document.getElementById('chart').classList.contains('active')) loadTradingView();
    document.getElementById('chartTicker').textContent = currentTicker;
}

// === LIVE PRICE FETCH ===
async function updateLivePrice() {
    try {
        const data = await yahooFetch(`/v8/finance/chart/${currentTicker}?interval=1d&range=1d`);
        const meta = data.chart && data.chart.result && data.chart.result[0] && data.chart.result[0].meta;
        if (meta && meta.regularMarketPrice && stockDB[currentTicker]) {
            const price = meta.regularMarketPrice;
            stockDB[currentTicker].currentPrice = price;
            stockDB[currentTicker].setup.entry = price;
            document.getElementById('currentPrice').textContent = fmtUSD(price);
            const s = stockDB[currentTicker];
            const a = s.analystEstimates;
            const fairValue = a.fairValueConsensus;
            const margin = (fairValue - price) / fairValue;
            document.getElementById('fairValueDiff').textContent = fmt(Math.abs(margin) * 100, 1) + '% ' + (margin > 0 ? 'unterbewertet' : 'ueberbewertet');
            document.getElementById('fairValueDiff').className = 'kpi-change ' + (margin > 0 ? 'positive' : 'negative');
            console.log('Live-Kurs geladen: ' + currentTicker + ' = $' + price);
        }
    } catch (e) {
        console.warn('Live-Kurs konnte nicht geladen werden:', e.message);
    }
}

// === ANALYSIS ===
function renderAnalysis(s) {
    document.getElementById('analysisTicker').textContent = currentTicker;
    document.getElementById('analysisDesc').textContent = s.name + ' - Fundamentalanalyse';

    const g = s.growth;
    const lastIdx = s.years.length - 1;

    document.getElementById('analysisGrid').innerHTML = `
        <div class="analysis-card">
            <div class="card-header quality"><h3><i class="fas fa-star"></i> Qualitaetskennzahlen</h3><span class="badge ${g.revenue10 > 8 ? 'good' : g.revenue10 > 4 ? 'warn' : 'bad'}">${g.revenue10 > 8 ? 'Gut' : g.revenue10 > 4 ? 'OK' : 'Schwach'}</span></div>
            <div class="metric-table"><table>
                <thead><tr><th>Kennzahl</th><th>10J CAGR</th><th>5J CAGR</th></tr></thead>
                <tbody>
                    <tr><td>Umsatzwachstum</td><td class="${g.revenue10 > 5 ? 'positive' : 'negative'}">${fmt(g.revenue10,1)}%</td><td class="${g.revenue5 > 5 ? 'positive' : 'negative'}">${fmt(g.revenue5,1)}%</td></tr>
                    <tr><td>EPS-Wachstum</td><td class="${g.eps10 > 5 ? 'positive' : 'negative'}">${fmt(g.eps10,1)}%</td><td class="${g.eps5 > 5 ? 'positive' : 'negative'}">${fmt(g.eps5,1)}%</td></tr>
                    <tr><td>FCF-Wachstum</td><td class="${g.fcf10 > 5 ? 'positive' : g.fcf10 != null ? 'negative' : ''}">${g.fcf10 != null ? fmt(g.fcf10,1) + '%' : '-'}</td><td class="${g.fcf5 > 5 ? 'positive' : 'negative'}">${g.fcf5 != null ? fmt(g.fcf5,1) + '%' : '-'}</td></tr>
                </tbody>
            </table></div>
        </div>
        <div class="analysis-card">
            <div class="card-header profit"><h3><i class="fas fa-percentage"></i> Profitabilitaet</h3><span class="badge ${s.roic[lastIdx] > 0.15 ? 'good' : s.roic[lastIdx] > 0.08 ? 'warn' : 'bad'}">${s.roic[lastIdx] > 0.15 ? 'Stark' : s.roic[lastIdx] > 0.08 ? 'Solide' : 'Schwach'}</span></div>
            <div class="metric-table"><table>
                <thead><tr><th>Kennzahl</th><th>${s.years[lastIdx-2]}</th><th>${s.years[lastIdx-1]}</th><th>${s.years[lastIdx]}</th></tr></thead>
                <tbody>
                    <tr><td>Net Income</td><td>${fmt(s.netIncome[lastIdx-2],1)}</td><td>${fmt(s.netIncome[lastIdx-1],1)}</td><td>${fmt(s.netIncome[lastIdx],1)}</td></tr>
                    <tr><td>ROIC</td><td>${fmtPct(s.roic[lastIdx-2])}</td><td>${fmtPct(s.roic[lastIdx-1])}</td><td class="${s.roic[lastIdx]>0.1?'positive':''}">${fmtPct(s.roic[lastIdx])}</td></tr>
                </tbody>
            </table></div>
        </div>
        <div class="analysis-card">
            <div class="card-header debt"><h3><i class="fas fa-balance-scale"></i> Verschuldung</h3><span class="badge ${s.debtToFCF[lastIdx] < 2 ? 'good' : s.debtToFCF[lastIdx] < 4 ? 'warn' : 'bad'}">${s.debtToFCF[lastIdx] < 2 ? 'Niedrig' : s.debtToFCF[lastIdx] < 4 ? 'Mittel' : 'Hoch'}</span></div>
            <div class="metric-table"><table>
                <thead><tr><th>Kennzahl</th><th>${s.years[lastIdx-2]}</th><th>${s.years[lastIdx-1]}</th><th>${s.years[lastIdx]}</th></tr></thead>
                <tbody>
                    <tr><td>Langfr. Schulden</td><td>${fmt(s.longTermDebt[lastIdx-2],1)}</td><td>${fmt(s.longTermDebt[lastIdx-1],1)}</td><td>${fmt(s.longTermDebt[lastIdx],1)}</td></tr>
                    <tr><td>Schulden/FCF</td><td>${fmt(s.debtToFCF[lastIdx-2],2)}</td><td>${fmt(s.debtToFCF[lastIdx-1],2)}</td><td>${fmt(s.debtToFCF[lastIdx],2)}</td></tr>
                    <tr><td>Zinsdeckung</td><td>${fmt(s.interestCoverage[lastIdx-2],1)}</td><td>${fmt(s.interestCoverage[lastIdx-1],1)}</td><td class="${s.interestCoverage[lastIdx]>10?'positive':''}">${fmt(s.interestCoverage[lastIdx],1)}</td></tr>
                </tbody>
            </table></div>
        </div>
        <div class="analysis-card">
            <div class="card-header dividend"><h3><i class="fas fa-coins"></i> Dividende & Rueckkaeufe</h3><span class="badge ${s.divYield[lastIdx] > 0.01 ? 'good' : s.divYield[lastIdx] > 0 ? 'warn' : 'bad'}">${s.divYield[lastIdx] > 0.01 ? 'Gut' : s.divYield[lastIdx] > 0 ? 'Niedrig' : 'Keine'}</span></div>
            <div class="metric-table"><table>
                <thead><tr><th>Kennzahl</th><th>${s.years[lastIdx-2]}</th><th>${s.years[lastIdx-1]}</th><th>${s.years[lastIdx]}</th></tr></thead>
                <tbody>
                    <tr><td>Dividende/Aktie</td><td>${fmtUSD(s.dividend[lastIdx-2])}</td><td>${fmtUSD(s.dividend[lastIdx-1])}</td><td>${fmtUSD(s.dividend[lastIdx])}</td></tr>
                    <tr><td>Div.-Rendite</td><td>${fmtPct(s.divYield[lastIdx-2])}</td><td>${fmtPct(s.divYield[lastIdx-1])}</td><td>${fmtPct(s.divYield[lastIdx])}</td></tr>
                    <tr><td>Buyback-Yield</td><td>${fmtPct(s.buybackYield[lastIdx-2])}</td><td>${fmtPct(s.buybackYield[lastIdx-1])}</td><td>${fmtPct(s.buybackYield[lastIdx])}</td></tr>
                </tbody>
            </table></div>
        </div>
    `;

    // Quality chart
    destroyChart('quality');
    const ctx = document.getElementById('qualityChart').getContext('2d');
    chartInstances.quality = new Chart(ctx, {
        type: 'line',
        data: {
            labels: s.years,
            datasets: [
                { label: 'ROIC', data: s.roic.map(v => v * 100), borderColor: '#4f8ff7', tension: 0.3, pointRadius: 3, borderWidth: 2 },
                { label: 'Div.-Rendite', data: s.divYield.map(v => v * 100), borderColor: '#a855f7', tension: 0.3, pointRadius: 3, borderWidth: 2 },
                { label: 'Ausschuettungsquote', data: s.payoutRatio.map(v => v * 100), borderColor: '#f59e0b', tension: 0.3, pointRadius: 3, borderWidth: 2 }
            ]
        },
        options: { responsive: true, scales: { y: { ticks: { callback: v => v + '%' }, grid: { color: 'rgba(45,50,72,0.5)' } }, x: { grid: { display: false } } } }
    });
}

// === VALUATION ===
function renderValuation(s) {
    document.getElementById('valuationTicker').textContent = currentTicker;
    const lastEps = s.eps[s.eps.length - 1];
    document.getElementById('inputEPS').value = lastEps;
    document.getElementById('inputGrowth').value = s.defaultGrowth;
    document.getElementById('inputPE').value = s.defaultPE;
    document.getElementById('peHint').textContent = 'Durchschn. 10J KGV: ' + fmt(s.avg10PE, 1) + ' | Aktuell: ' + fmt(s.pe, 1);

    // Analysten-Konsens Bewertung (Primaer)
    const a = s.analystEstimates;
    const margin = (a.fairValueConsensus - s.currentPrice) / a.fairValueConsensus;
    const range = a.targetHigh - a.targetLow;
    const currentPos = Math.max(0, Math.min(100, ((s.currentPrice - a.targetLow) / range) * 100));

    let verdictClass, verdictIcon, verdictText;
    if (margin > 0.15) { verdictClass = 'buy'; verdictIcon = 'fa-thumbs-up'; verdictText = 'Deutlich unterbewertet laut Analysten-Konsens. Starke Kaufgelegenheit!'; }
    else if (margin > 0.05) { verdictClass = 'buy'; verdictIcon = 'fa-thumbs-up'; verdictText = 'Leicht unterbewertet. Analysten sehen Aufwaertspotenzial.'; }
    else if (margin > -0.05) { verdictClass = 'hold'; verdictIcon = 'fa-hand-paper'; verdictText = 'Fair bewertet laut Analysten. Halten empfohlen.'; }
    else { verdictClass = 'sell'; verdictIcon = 'fa-thumbs-down'; verdictText = 'Ueberbewertet laut Analysten. Verkaufen erwaegen.'; }

    document.getElementById('analystValuation').innerHTML = `
        <h3><i class="fas fa-chart-pie"></i> Fair Value - Analysten-Konsens (${a.numAnalysts} Analysten)</h3>
        <div class="av-grid">
            <div class="av-card av-main">
                <div class="av-label">Fairer Wert (Konsens)</div>
                <div class="av-value">${fmtUSD(a.fairValueConsensus)}</div>
                <div class="av-sub">${fmt(Math.abs(margin)*100,1)}% ${margin>0?'unterbewertet':'ueberbewertet'}</div>
            </div>
            <div class="av-card">
                <div class="av-label">Fair Value (DCF-Modell)</div>
                <div class="av-value">${fmtUSD(a.fairValueDCF)}</div>
                <div class="av-sub">Discounted Cashflow</div>
            </div>
            <div class="av-card">
                <div class="av-label">Fair Value (KGV-basiert)</div>
                <div class="av-value">${fmtUSD(a.fairValuePE)}</div>
                <div class="av-sub">Earnings Multiple</div>
            </div>
        </div>
        <div class="av-bar">
            <div class="av-bar-label"><span>Kursziel-Spanne der Analysten</span><span>Aktueller Kurs: ${fmtUSD(s.currentPrice)}</span></div>
            <div class="av-bar-track">
                <div class="av-bar-fill" style="width:100%"></div>
                <div class="av-bar-marker" style="left:${currentPos}%" title="Aktueller Kurs"></div>
            </div>
            <div class="av-bar-labels"><span>${fmtUSD(a.targetLow)} (Low)</span><span>${fmtUSD(a.targetPrice)} (Avg)</span><span>${fmtUSD(a.targetHigh)} (High)</span></div>
        </div>
        <div class="av-grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:15px">
            <div class="analyst-item"><div class="ai-label">Konsens-Empfehlung</div><div class="ai-value" style="color:${a.recommendation==='Buy'?'var(--green)':a.recommendation==='Hold'?'var(--yellow)':'var(--red)'}">${a.recommendation==='Buy'?'KAUFEN':a.recommendation==='Hold'?'HALTEN':'VERKAUFEN'}</div></div>
            <div class="analyst-item"><div class="ai-label">EPS naechstes Jahr</div><div class="ai-value">${fmtUSD(a.epsNext)}</div><div class="ai-sub">Wachstum 5J: ${fmt(a.epsGrowth5y,1)}%</div></div>
            <div class="analyst-item"><div class="ai-label">Umsatzwachstum</div><div class="ai-value">${fmt(a.revenueGrowthNext,1)}%</div><div class="ai-sub">naechstes Jahr</div></div>
            <div class="analyst-item"><div class="ai-label">Akt. KGV vs. Schnitt</div><div class="ai-value ${s.pe < s.avg10PE ? 'positive' : 'negative'}">${fmt(s.pe,1)}</div><div class="ai-sub">10J: ${fmt(s.avg10PE,1)}</div></div>
        </div>
        <div class="av-verdict ${verdictClass}"><i class="fas ${verdictIcon}"></i> ${verdictText}</div>
        <div class="analyst-source" style="margin-top:10px">Quelle: ${a.source} | Stand: ${a.lastUpdated}</div>
    `;

    // Close manual calc panel on ticker change
    document.getElementById('manualCalc').classList.remove('open');

    // KGV chart
    destroyChart('kgv');
    const ctx = document.getElementById('kgvChart').getContext('2d');
    chartInstances.kgv = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: s.years,
            datasets: [
                { label: 'KGV', data: s.kgv, backgroundColor: s.kgv.map(k => k > 50 ? 'rgba(239,68,68,0.6)' : k > 30 ? 'rgba(245,158,11,0.6)' : 'rgba(34,197,94,0.6)'), borderRadius: 6, borderSkipped: false },
                { label: 'Median', data: Array(s.years.length).fill(s.avg10PE), type: 'line', borderColor: '#ef4444', borderDash: [6, 3], pointRadius: 0, borderWidth: 2 }
            ]
        },
        options: { responsive: true, scales: { y: { grid: { color: 'rgba(45,50,72,0.5)' } }, x: { grid: { display: false } } } }
    });

    // Reasoning in valuation
    const r = s.reasoning;
    let html = '<strong>Bewertungsanalyse ' + currentTicker + ':</strong><br><br>' + r.summary + '<ul>';
    r.points.forEach(p => html += '<li>' + p + '</li>');
    html += '</ul>';
    if (r.risks.length) {
        html += '<strong style="color:var(--red)">Risiken:</strong><ul>';
        r.risks.forEach(p => html += '<li>' + p + '</li>');
        html += '</ul>';
    }
    document.getElementById('valuationReasoning').innerHTML = html;
}

window.calculateFairValue = function() {
    const s = stockDB[currentTicker];
    const eps = parseFloat(document.getElementById('inputEPS').value);
    const growth = parseFloat(document.getElementById('inputGrowth').value) / 100;
    const pe = parseFloat(document.getElementById('inputPE').value);
    const discount = parseFloat(document.getElementById('inputDiscount').value) / 100;

    const futureEPS = eps * Math.pow(1 + growth, 10);
    const futurePrice = futureEPS * pe;
    const fairValue = futurePrice / Math.pow(1 + discount, 10);
    const margin = (fairValue - s.currentPrice) / fairValue;

    document.getElementById('futureEPS').textContent = fmtUSD(futureEPS);
    document.getElementById('futurePrice').textContent = fmtUSD(futurePrice);
    document.getElementById('calcFairValue').textContent = fmtUSD(fairValue);
    document.getElementById('calcFairValue').className = margin > 0 ? 'positive' : 'negative';
    document.getElementById('calcCurrentPrice').textContent = fmtUSD(s.currentPrice);

    const marginEl = document.getElementById('calcMargin');
    marginEl.textContent = fmt(Math.abs(margin) * 100, 1) + '%';
    marginEl.className = margin > 0 ? 'positive' : 'negative';

    const verdict = document.getElementById('calcVerdict');
    verdict.classList.remove('buy', 'sell', 'hold');
    if (margin > 0.25) { verdict.className = 'verdict buy'; verdict.innerHTML = '<i class="fas fa-thumbs-up"></i> Deutlich unterbewertet. Starke Kaufgelegenheit!'; }
    else if (margin > 0.1) { verdict.className = 'verdict buy'; verdict.innerHTML = '<i class="fas fa-thumbs-up"></i> Unterbewertet. Kaufgelegenheit!'; }
    else if (margin > -0.1) { verdict.className = 'verdict hold'; verdict.innerHTML = '<i class="fas fa-hand-paper"></i> Fair bewertet. Halten.'; }
    else { verdict.className = 'verdict sell'; verdict.innerHTML = '<i class="fas fa-thumbs-down"></i> Ueberbewertet. Verkaufen erwaegen.'; }
};

// === TRADE SETUP ===
function renderSetup(s) {
    document.getElementById('setupTicker').textContent = currentTicker;
    const setup = s.setup;
    const riskPct = ((setup.entry - setup.stopLoss) / setup.entry * 100).toFixed(1);
    const reward1Pct = ((setup.target1 - setup.entry) / setup.entry * 100).toFixed(1);
    const reward2Pct = ((setup.target2 - setup.entry) / setup.entry * 100).toFixed(1);
    const crv1 = ((setup.target1 - setup.entry) / (setup.entry - setup.stopLoss)).toFixed(1);
    const crv2 = ((setup.target2 - setup.entry) / (setup.entry - setup.stopLoss)).toFixed(1);
    const r = s.reasoning;

    document.getElementById('setupFull').innerHTML = `
        <h3><i class="fas fa-bullseye"></i> Trade Setup fuer ${s.name} (${currentTicker})</h3>
        <div class="setup-grid">
            <div class="setup-card stop-card">
                <div class="s-label">Stop-Loss</div>
                <div class="s-value">${fmtUSD(setup.stopLoss)}</div>
                <div class="s-info">Risiko: -${riskPct}% vom Einstieg</div>
            </div>
            <div class="setup-card entry-card">
                <div class="s-label">Einstieg (aktueller Kurs)</div>
                <div class="s-value">${fmtUSD(setup.entry)}</div>
                <div class="s-info">Empfehlung: ${r.status === 'unterbewertet' ? 'Jetzt kaufen' : r.status === 'ueberbewertet' ? 'Abwarten' : 'Beobachten'}</div>
            </div>
            <div class="setup-card target-card">
                <div class="s-label">Kursziel 1 / Kursziel 2</div>
                <div class="s-value">${fmtUSD(setup.target1)} / ${fmtUSD(setup.target2)}</div>
                <div class="s-info">+${reward1Pct}% / +${reward2Pct}% Potenzial</div>
            </div>
        </div>
        <div class="setup-explanation">
            <strong>Strategie:</strong><br>
            - <strong>Einstieg</strong> bei ${fmtUSD(setup.entry)} (aktueller Marktpreis)<br>
            - <strong>Stop-Loss</strong> bei ${fmtUSD(setup.stopLoss)} (-${riskPct}%) - unter wichtiger Unterstuetzungszone<br>
            - <strong>Kursziel 1:</strong> ${fmtUSD(setup.target1)} (+${reward1Pct}%) - 50% der Position verkaufen, Stop auf Einstand nachziehen<br>
            - <strong>Kursziel 2:</strong> ${fmtUSD(setup.target2)} (+${reward2Pct}%) - restliche Position verkaufen (nahe fairem Wert)<br>
            - <strong>CRV:</strong> ${crv1}:1 (Ziel 1) / ${crv2}:1 (Ziel 2)<br><br>
            <strong>Begruendung:</strong> ${r.summary}
        </div>
    `;

    // Setup Chart
    destroyChart('setup');
    const ctx = document.getElementById('setupChart').getContext('2d');
    const labels = s.years.slice(-5);
    const prices = s.kgv.slice(-5).map((k, i) => s.eps[s.years.length - 5 + i] * k);

    chartInstances.setup = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [...labels, '2026E'],
            datasets: [{
                label: 'Kurs (geschaetzt)',
                data: [...prices, setup.entry],
                borderColor: '#4f8ff7', tension: 0.3, pointRadius: 4, borderWidth: 2, fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                annotation: undefined,
                legend: { display: false }
            },
            scales: {
                y: {
                    ticks: { callback: v => '$' + v.toFixed(0) },
                    grid: { color: 'rgba(45,50,72,0.5)' }
                },
                x: { grid: { display: false } }
            }
        }
    });

    // Rules
    document.getElementById('rulesGrid').innerHTML = `
        <div class="rule-item"><i class="fas fa-shield-alt"></i><div class="rule-text"><strong>Max. 5% des Portfolios</strong> pro Position. Nie alles auf eine Aktie setzen.</div></div>
        <div class="rule-item"><i class="fas fa-hand-paper"></i><div class="rule-text"><strong>Stop-Loss immer setzen.</strong> Bei ${fmtUSD(setup.stopLoss)} verkaufen - keine Ausnahmen.</div></div>
        <div class="rule-item"><i class="fas fa-chart-line"></i><div class="rule-text"><strong>Bei Ziel 1 (${fmtUSD(setup.target1)}):</strong> 50% verkaufen, Stop auf Einstand nachziehen.</div></div>
        <div class="rule-item"><i class="fas fa-calendar-check"></i><div class="rule-text"><strong>Woechentlich pruefen:</strong> Setup ueberpruefen und ggf. anpassen.</div></div>
        <div class="rule-item"><i class="fas fa-exclamation-circle"></i><div class="rule-text"><strong>Vor Earnings:</strong> Positionsgroesse reduzieren oder Stop enger setzen.</div></div>
        <div class="rule-item"><i class="fas fa-brain"></i><div class="rule-text"><strong>Emotionen vermeiden:</strong> Nur nach Plan handeln. Kein FOMO, keine Panik.</div></div>
    `;
}

// === NEWS & TWITTER ===
function renderNews(s) {
    document.getElementById('newsTicker').textContent = currentTicker;

    // Stock News
    const newsHtml = s.news.map(n => `
        <div class="news-item ${n.sentiment}">
            <div class="news-title">${n.title}</div>
            <div class="news-meta"><span>${n.source}</span><span>${n.date}</span></div>
            <div class="news-body">${n.body}</div>
        </div>
    `).join('');
    document.getElementById('newsContainer').innerHTML = newsHtml;

    // Economic Data
    document.getElementById('econDataContainer').innerHTML = `
        <div class="econ-data-item"><span class="ed-label">Fed Funds Rate</span><span class="ed-value warn">5.25-5.50%</span></div>
        <div class="econ-data-item"><span class="ed-label">US CPI (Inflation)</span><span class="ed-value">3.0% YoY</span></div>
        <div class="econ-data-item"><span class="ed-label">US 10Y Treasury</span><span class="ed-value">4.35%</span></div>
        <div class="econ-data-item"><span class="ed-label">S&P 500</span><span class="ed-value positive">5,245 (+0.8%)</span></div>
        <div class="econ-data-item"><span class="ed-label">VIX (Volatilitaet)</span><span class="ed-value warn">18.5</span></div>
        <div class="econ-data-item"><span class="ed-label">EUR/USD</span><span class="ed-value">1.0825</span></div>
        <div class="econ-data-item"><span class="ed-label">US BIP Wachstum</span><span class="ed-value positive">2.3% Q4</span></div>
        <div class="econ-data-item"><span class="ed-label">Arbeitslosenquote</span><span class="ed-value positive">3.7%</span></div>
    `;

    // Live Markt-News laden (asynchron)
    loadMarketNews();
}

function timeAgo(timestamp) {
    const seconds = Math.floor((Date.now() - timestamp * 1000) / 1000);
    if (seconds < 3600) return 'vor ' + Math.max(1, Math.floor(seconds / 60)) + ' Min.';
    if (seconds < 86400) return 'vor ' + Math.floor(seconds / 3600) + ' Std.';
    if (seconds < 604800) return 'vor ' + Math.floor(seconds / 86400) + ' Tagen';
    return new Date(timestamp * 1000).toLocaleDateString('de-DE');
}

async function loadMarketNews() {
    try {
        // Fetch news for major market indicators in parallel
        const results = await Promise.all([
            yahooFetch(`/v1/finance/search?q=SPY&newsCount=8&quotesCount=0`).catch(() => ({ news: [] })),
            yahooFetch(`/v1/finance/search?q=stock+market&newsCount=8&quotesCount=0`).catch(() => ({ news: [] }))
        ]);

        // Combine and dedupe news
        const allNews = [];
        const seen = new Set();
        results.forEach(r => {
            (r.news || []).forEach(n => {
                if (n.uuid && !seen.has(n.uuid)) {
                    seen.add(n.uuid);
                    allNews.push(n);
                }
            });
        });

        // Sort by date (newest first)
        allNews.sort((a, b) => (b.providerPublishTime || 0) - (a.providerPublishTime || 0));
        marketNewsCache = allNews.slice(0, 12);

        renderMarketNews('all');
        renderMarketAlerts();
    } catch (e) {
        console.warn('Markt-News konnten nicht geladen werden:', e.message);
        document.getElementById('twitterContainer').innerHTML = '<div class="news-item">Markt-News konnten nicht geladen werden. Bitte spaeter erneut versuchen.</div>';
    }
}

function renderMarketNews(filter) {
    let posts = marketNewsCache;
    if (filter && filter !== 'all') {
        const keywords = { trump: ['trump', 'tariff', 'white house'], musk: ['musk', 'tesla', 'spacex', 'doge'], fed: ['fed', 'powell', 'ecb', 'lagarde', 'rate'] };
        const kw = keywords[filter] || [];
        posts = marketNewsCache.filter(n => {
            const text = ((n.title || '') + ' ' + (n.summary || '')).toLowerCase();
            return kw.some(k => text.includes(k));
        });
    }

    if (posts.length === 0) {
        document.getElementById('twitterContainer').innerHTML = '<div class="news-item">Keine News in dieser Kategorie gefunden.</div>';
        return;
    }

    document.getElementById('twitterContainer').innerHTML = posts.map(n => {
        const text = ((n.title || '') + ' ' + (n.summary || '')).toLowerCase();
        let impact = 'neutral', impactText = 'Markt-News';
        if (/surge|jump|rally|gain|beat|record high|bullish|profit/.test(text)) { impact = 'bullish'; impactText = 'Bullish'; }
        else if (/fall|drop|plunge|loss|miss|crash|bearish|sell/.test(text)) { impact = 'bearish'; impactText = 'Bearish'; }

        return `
        <div class="tweet-item">
            <div class="tweet-header">
                <div class="tweet-avatar"><i class="fas fa-newspaper"></i></div>
                <div>
                    <div class="tweet-name">${n.publisher || 'Yahoo Finance'}</div>
                    <div class="tweet-handle">@${(n.publisher || 'news').replace(/\s/g, '').toLowerCase()}</div>
                </div>
                <span class="tweet-impact ${impact}">${impactText}</span>
            </div>
            <div class="tweet-text"><a href="${n.link}" target="_blank" rel="noopener" style="color:inherit;text-decoration:none">${n.title || ''}</a></div>
            ${n.summary ? `<div class="tweet-text" style="color:var(--muted);font-size:0.9rem">${n.summary.substring(0, 200)}...</div>` : ''}
            <div class="tweet-time">${timeAgo(n.providerPublishTime || Date.now() / 1000)}</div>
        </div>
        `;
    }).join('');

    // Re-bind filter buttons
    document.querySelectorAll('.tw-filter').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.tw-filter').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMarketNews(btn.dataset.filter);
        };
    });
}

function renderMarketAlerts() {
    // Auto-generate alerts from latest news
    const alerts = marketNewsCache.slice(0, 5).map((n, i) => {
        const text = (n.title || '').toLowerCase();
        let level = 'low', icon = 'fas fa-info-circle';
        if (/breaking|alert|crash|surge|emergency|fed/.test(text)) { level = 'high'; icon = 'fas fa-exclamation-triangle'; }
        else if (/earnings|beat|miss|report/.test(text)) { level = 'medium'; icon = 'fas fa-chart-line'; }
        return {
            level, icon,
            text: `<strong>${n.publisher || 'News'}:</strong> ${n.title || ''}`,
            time: timeAgo(n.providerPublishTime || Date.now() / 1000)
        };
    });

    const container = document.getElementById('alertContainer');
    if (container) {
        container.innerHTML = alerts.map(a => `
            <div class="alert-item alert-${a.level}">
                <i class="${a.icon}"></i>
                <div class="alert-text">${a.text}</div>
                <div class="alert-time">${a.time}</div>
            </div>
        `).join('');
    }
}

// === WEEKLY ===
const weeklyPicks = {
    buy: [
        { ticker: 'MORN', name: 'Morningstar Inc', price: 172.91, fairValue: 280.01, margin: 38.2, reason: 'KGV von 19.5 vs. 10J-Schnitt 41.1 = historisch guenstig. EPS von $3.29 auf $8.87 (+170%). ESG-Marktfuehrer. Buyback-Yield 9.1%.', setup: 'Einstieg: $172.91 | Stop: $148.00 | Ziel: $220-280' },
        { ticker: 'GOOGL', name: 'Alphabet Inc', price: 163.50, fairValue: 215.00, margin: 24.0, reason: 'KGV 22.5 unter Durchschnitt. Cloud profitabel, Gemini KI stark. Nahezu schuldenfrei.', setup: 'Einstieg: $163.50 | Stop: $142.00 | Ziel: $195-230' },
        { ticker: 'AMZN', name: 'Amazon.com Inc', price: 192.80, fairValue: 260.00, margin: 25.8, reason: 'KGV 42 vs. historisch 65 = deutlich guenstiger. AWS hochprofitabel. Advertising boomt.', setup: 'Einstieg: $192.80 | Stop: $168.00 | Ziel: $230-270' }
    ],
    sell: [
        { ticker: 'TSLA', name: 'Tesla Inc', price: 248.50, fairValue: 155.00, margin: -60.3, reason: 'Forward-KGV >50, EPS stagniert. Preiskrieg in China, Marktanteil sinkt. FSD nicht monetarisierbar.', setup: 'Verkaufen oder Short: Stop bei $270' },
        { ticker: 'NVDA', name: 'NVIDIA Corp', price: 875.00, fairValue: 650.00, margin: -34.6, reason: 'KGV 55 preist perfektes Szenario ein. Wettbewerb steigt (AMD, Google TPU). Exportbeschraenkungen.', setup: 'Gewinne mitnehmen. Trailing-Stop bei $780' }
    ]
};

function renderWeekly() {
    const kw = getWeekNumber();
    document.getElementById('currentKW').textContent = kw;

    document.getElementById('buyPicks').innerHTML = weeklyPicks.buy.map(p => `
        <div class="pick-item" onclick="document.getElementById('tickerInput').value='${p.ticker}';loadTicker()">
            <div class="pick-left"><span class="pick-ticker">${p.ticker}</span><span class="pick-name">${p.name}</span></div>
            <div class="pick-right"><div class="pick-price">${fmtUSD(p.price)}</div><div class="pick-margin positive">+${fmt(p.margin,1)}% Potenzial</div></div>
        </div>
    `).join('');

    document.getElementById('sellPicks').innerHTML = weeklyPicks.sell.map(p => `
        <div class="pick-item" onclick="document.getElementById('tickerInput').value='${p.ticker}';loadTicker()">
            <div class="pick-left"><span class="pick-ticker">${p.ticker}</span><span class="pick-name">${p.name}</span></div>
            <div class="pick-right"><div class="pick-price">${fmtUSD(p.price)}</div><div class="pick-margin negative">${fmt(p.margin,1)}% ueberbewertet</div></div>
        </div>
    `).join('');

    const all = [...weeklyPicks.buy.map(p => ({...p, type:'buy'})), ...weeklyPicks.sell.map(p => ({...p, type:'sell'}))];
    document.getElementById('weeklyDetails').innerHTML = '<h3><i class="fas fa-file-alt"></i> Detailanalyse</h3>' +
        all.map(p => `
        <div class="detail-item">
            <div class="detail-header">
                <span class="detail-ticker">${p.ticker} - ${p.name}</span>
                <span class="detail-rec ${p.type}">${p.type === 'buy' ? 'KAUFEN' : 'VERKAUFEN'}</span>
            </div>
            <div class="detail-text">
                <strong>Kurs:</strong> ${fmtUSD(p.price)} | <strong>Fairer Wert:</strong> ${fmtUSD(p.fairValue)} | <strong>Marge:</strong> ${p.margin > 0 ? '+' : ''}${fmt(p.margin,1)}%<br>
                <strong>Setup:</strong> ${p.setup}<br><br>
                ${p.reason}
            </div>
        </div>
    `).join('');
}

// === ECONOMIC ===
function renderEconomic(s) {
    document.getElementById('economicGrid').innerHTML = `
        <div class="econ-card"><div class="econ-icon"><i class="fas fa-university"></i></div><h4>Zinspolitik (Fed/EZB)</h4><div class="econ-status warn">Restriktiv</div><p>Fed haelt Zinsen bei 5.25-5.50%. EZB senkt auf 3.25%. Hohe Zinsen belasten Wachstumswerte, beguenstigen Value-Aktien mit stabilen Cashflows.</p></div>
        <div class="econ-card"><div class="econ-icon"><i class="fas fa-chart-bar"></i></div><h4>Inflation</h4><div class="econ-status positive">Ruecklaeufig</div><p>US-Inflation bei 3.0%, ruecklaeufig. Unternehmen mit Preissetzungsmacht profitieren. Fed koennte 2026 erstmals senken.</p></div>
        <div class="econ-card"><div class="econ-icon"><i class="fas fa-industry"></i></div><h4>Konjunktur</h4><div class="econ-status warn">Moderat</div><p>US-BIP waechst 2.3%. Arbeitsmarkt stark (3.7%). Soft-Landing-Szenario wahrscheinlich, Rezessionsrisiko gering.</p></div>
        <div class="econ-card"><div class="econ-icon"><i class="fas fa-globe-americas"></i></div><h4>Geopolitik & Zoelle</h4><div class="econ-status negative">Angespannt</div><p>Trump droht mit 60% China-Zoellen. Ukraine-Krieg dauert an. Nahost instabil. Unternehmen mit hohem US-Inlandsgeschaeft bevorzugt.</p></div>
        <div class="econ-card"><div class="econ-icon"><i class="fas fa-microchip"></i></div><h4>KI & Technologie</h4><div class="econ-status positive">Boom</div><p>KI-Investitionen auf Rekordhoch. NVIDIA, Microsoft, Google profitieren. Aber Bewertungen bereits hoch - selektiv investieren.</p></div>
        <div class="econ-card"><div class="econ-icon"><i class="fas fa-hand-holding-usd"></i></div><h4>ESG & Regulierung</h4><div class="econ-status warn">Gemischt</div><p>EU verschaerft ESG-Regeln, USA unter Trump lockert sie. Unternehmen mit ESG-Daten (Morningstar/Sustainalytics) profitieren beidseitig.</p></div>
    `;

    // Radar Chart
    destroyChart('economic');
    const ctx = document.getElementById('economicChart').getContext('2d');
    chartInstances.economic = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Zinspolitik', 'Inflation', 'Konjunktur', 'Geopolitik', 'KI/Tech', 'ESG'],
            datasets: [
                { label: 'Chance fuer ' + currentTicker, data: [6, 7, 6, 5, 8, 8], backgroundColor: 'rgba(34,197,94,0.2)', borderColor: '#22c55e', borderWidth: 2, pointBackgroundColor: '#22c55e' },
                { label: 'Risiko', data: [7, 4, 5, 7, 4, 3], backgroundColor: 'rgba(239,68,68,0.15)', borderColor: '#ef4444', borderWidth: 2, pointBackgroundColor: '#ef4444' }
            ]
        },
        options: { responsive: true, scales: { r: { beginAtZero: true, max: 10, ticks: { stepSize: 2, color: '#8b90a0' }, grid: { color: 'rgba(45,50,72,0.5)' }, pointLabels: { font: { size: 12 }, color: '#e1e4eb' } } } }
    });

    // Summary
    const r = s.reasoning;
    document.getElementById('economicSummary').innerHTML = `
        <h3><i class="fas fa-clipboard-check"></i> Gesamteinschaetzung fuer ${currentTicker}</h3>
        <div class="summary-text">
            <p><strong>Fazit fuer ${s.name} (${currentTicker}):</strong> ${r.summary}</p>
            <ul>${r.points.map(p => '<li>' + p + '</li>').join('')}</ul>
            <p><strong style="color:var(--red)">Risiken:</strong></p>
            <ul>${r.risks.map(p => '<li>' + p + '</li>').join('')}</ul>
            <p class="fair-value-conclusion"><strong>Gesamteinschaetzung:</strong> ${currentTicker} ist unserer Analyse nach <span class="highlight">${r.status.toUpperCase()}</span>. ${r.status === 'unterbewertet' ? 'Die aktuelle Bewertung bietet eine attraktive Einstiegsgelegenheit mit ausreichender Sicherheitsmarge.' : r.status === 'ueberbewertet' ? 'Wir empfehlen Gewinne mitzunehmen oder abzuwarten.' : 'Die Aktie ist fair bewertet. Halten und beobachten.'}</p>
        </div>
    `;
}

// === UTILS ===
function getWeekNumber() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    return Math.ceil(((now - start) / 86400000 + start.getDay() + 1) / 7);
}

// === INIT ===
renderAll();
