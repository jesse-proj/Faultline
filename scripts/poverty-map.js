document.addEventListener('DOMContentLoaded', function() {
    const locations = ["AFG","ALB","AGO","ARG","ARM","AUT","BGD","BRB","BLR","BEL","BLZ","BEN","BTN","BOL","BIH","BWA","BGR","BFA","BDI","CPV","CMR","CAF","TCD","CHL","CHN","COL","COM","COD","CRI","CIV","HRV","CYP","CZE","DNK","DJI","DOM","ECU","EGY","SLV","GNQ","EST","SWZ","ETH","FJI","FIN","FRA","GAB","GMB","GEO","DEU","GHA","GRC","GRD","GTM","GIN","GNB","HND","HUN","ISL","IDN","IRQ","IRL","ITA","JAM","JOR","KAZ","KEN","KIR","XKX","KGZ","LAO","LVA","LSO","LBR","LTU","LUX","MDG","MWI","MYS","MDV","MLI","MLT","MHL","MRT","MUS","MEX","MDA","MNG","MNE","MAR","MOZ","MMR","NAM","NPL","NLD","NIC","NER","NGA","MKD","NOR","PAK","PAN","PRY","PER","PHL","POL","PRT","ROU","RUS","RWA","WSM","STP","SEN","SRB","SYC","SLE","SVK","SVN","SOM","SSD","ESP","LKA","LCA","SUR","SWE","CHE","TJK","TZA","THA","TGO","TON","TUN","TUR","UGA","UKR","GBR","URY","UZB","VUT","VEN","VNM","PSE","ZMB","ZWE"];
    
    const zValues = [47.1,19.7,32.3,41.7,23.7,14.8,18.7,25.7,3.9,12.3,52,36.2,12.4,36.5,16.9,16.1,21.7,43.2,51,24.8,37.7,68.8,44.8,6.5,0.6,34.6,44.8,56.2,24.4,37.5,20.3,13.9,10.2,12.4,21.1,23,26,33.5,27.2,50.7,22.5,58.9,33.1,24.1,12.2,15.6,33.4,53.4,11.8,14.8,23.4,18.8,25,56,43.7,50.5,64.1,12.1,8.8,9.4,17.5,14,20.1,8.2,15.7,5.2,39.8,5.5,17.6,29.8,18.3,22.5,49.7,50.9,20.9,17.3,75.2,50.7,5.8,5.4,43.9,16.7,7.2,31.8,8.4,36.3,31.6,27.1,20,3.9,65,24.8,17.4,20.3,14.5,24.9,41.2,56.2,22.2,12.2,21.9,21.7,22.7,29,15.5,12.2,16.4,19,12.1,27.4,21.9,55.5,37.5,19.7,25.3,56.8,13.7,12.7,55.4,82.3,20.2,14.3,25,17.6,16.1,15.8,20.4,26.4,5.4,43.8,20.6,16.6,13.6,20.3,23.2,18.6,19.7,11,15.9,33.1,4.2,29.2,60,38.3];

    const textVals = locations.map((loc, i) => `Poverty Rate: ${zValues[i]}%`);

    const data = [{
        type: 'choropleth',
        locations: locations,
        z: zValues,
        text: textVals,
        colorscale: [
            [0, '#f9f0ec'],
            [0.2, '#f3c8c2'],
            [0.4, '#e78c81'],
            [0.6, '#c45044'],
            [0.8, '#8c2d23'],
            [1, '#4a110b']
        ],
        autocolorscale: false,
        reversescale: false,
        marker: {
            line: {
                color: '#ffffff',
                width: 0.5
            }
        },
        colorbar: {
            title: 'Poverty %',
            thickness: 15,
            outlinewidth: 0,
            tickfont: { family: 'Poppins', color: '#555' },
            titlefont: { family: 'Poppins', color: '#222', size: 14 }
        }
    }];

    const layout = {
        geo: {
            showframe: false,
            showcoastlines: true,
            coastlinecolor: '#dddddd',
            projection: {
                type: 'robinson'
            },
            bgcolor: 'transparent',
            showocean: true,
            oceancolor: '#e5e9ec', 
            showlakes: true,
            lakecolor: '#e5e9ec',
            showcountries: true,
            countrycolor: '#ffffff'
        },
        margin: { l: 0, r: 0, t: 0, b: 0 },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        dragmode: 'pan'
    };

    const config = {
        responsive: true,
        scrollZoom: true,
        displayModeBar: true,
        displaylogo: false,
        modeBarButtonsToRemove: ['select2d', 'lasso2d']
    };

    Plotly.newPlot('global-heatmap', data, layout, config);
});