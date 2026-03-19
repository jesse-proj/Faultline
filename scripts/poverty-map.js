document.addEventListener('DOMContentLoaded', function() {
    const locations = ['AFG', 'AGO', 'ALB', 'ARG', 'ARM', 'AUS', 'AUT', 'BDI', 'BEL', 'BEN', 'BFA', 'BGD', 'BGR', 'BOL', 'BRA', 'BWA', 'CAN', 'CHE', 'CHL', 'CHN', 'CIV', 'CMR', 'COD', 'COG', 'COL', 'CRI', 'CUB', 'DEU', 'DJI', 'DNK', 'DOM', 'DZA', 'ECU', 'EGY', 'ESP', 'ETH', 'FIN', 'FRA', 'GBR', 'GHA', 'GIN', 'GRC', 'GTM', 'HND', 'HTI', 'IDN', 'IND', 'IRL', 'IRQ', 'ISL', 'ISR', 'ITA', 'JAM', 'JOR', 'JPN', 'KEN', 'KGZ', 'KHM', 'KOR', 'LAO', 'LBN', 'LBR', 'LBY', 'LKA', 'LSO', 'LTU', 'LUX', 'MAR', 'MDG', 'MEX', 'MLI', 'MMR', 'MNG', 'MOZ', 'MRT', 'MWI', 'MYS', 'NAM', 'NER', 'NGA', 'NIC', 'NLD', 'NOR', 'NPL', 'NZL', 'PAK', 'PAN', 'PER', 'PHL', 'PNG', 'POL', 'PRT', 'PRY', 'ROU', 'RUS', 'RWA', 'SAU', 'SDN', 'SEN', 'SLE', 'SLV', 'SOM', 'SRB', 'SSD', 'SWE', 'SWZ', 'TCD', 'TGO', 'THA', 'TJK', 'TKM', 'TUN', 'TUR', 'TZA', 'UGA', 'UKR', 'URY', 'USA', 'UZB', 'VEN', 'VNM', 'YEM', 'ZAF', 'ZMB', 'ZWE'];
    
    const zValues = [54.5, 32.3, 14.3, 35.5, 26.4, 13.6, 13.3, 64.9, 14.8, 38.5, 40.1, 20.5, 22.1, 37.2, 21.4, 19.3, 9.5, 15.0, 10.8, 0.6, 39.5, 37.5, 63.9, 37.9, 39.3, 21.0, 0, 14.8, 21.1, 12.1, 21.0, 5.5, 25.0, 29.7, 20.7, 23.5, 11.6, 13.6, 18.6, 23.4, 43.6, 28.9, 59.3, 48.0, 58.5, 9.5, 16.4, 13.1, 22.5, 8.8, 21.0, 20.1, 19.3, 15.7, 15.7, 36.1, 25.3, 17.8, 16.7, 18.3, 27.4, 50.9, 0, 4.1, 49.7, 20.6, 15.3, 4.8, 70.8, 43.9, 41.1, 24.8, 28.4, 46.1, 31.0, 50.7, 5.6, 17.4, 40.8, 40.1, 24.9, 13.0, 12.7, 17.4, 10.9, 21.9, 21.5, 20.2, 18.1, 39.9, 14.8, 17.2, 26.9, 23.8, 12.1, 38.2, 13.6, 36.1, 37.8, 56.8, 22.8, 69.0, 21.2, 82.3, 15.0, 58.9, 42.3, 55.1, 6.8, 26.3, 0, 15.2, 21.9, 26.4, 21.4, 5.0, 11.6, 14.1, 76.6, 4.8, 71.4, 55.5, 54.4, 38.3];

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