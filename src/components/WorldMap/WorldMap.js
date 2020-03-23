import "core-js";
import React, {Component} from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldHigh from "@amcharts/amcharts4-geodata/worldHigh";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";

// data
const continents = {
    "AF": 0,
    "AN": 1,
    "AS": 2,
    "EU": 3,
    "NA": 4,
    "OC": 5,
    "SA": 6
};
const countries = {
    "AU": {
        "country": "Australia",
        "continent_code": "OC",
        "continent": "Oceania",
        "maps": ["australiaLow", "australiaHigh"]
    },
    "CA": {
        "country": "Canada",
        "continent_code": "NA",
        "continent": "North America",
        "maps": ["canadaLow", "canadaHigh"]
    },
    "CN": {
        "country": "China",
        "continent_code": "AS",
        "continent": "Asia",
        "maps": ["chinaLow", "chinaHigh"]
    },
    "DE": {
        "country": "Germany",
        "continent_code": "EU",
        "continent": "Europe",
        "maps": ["germanyLow", "germanyHigh"]
    },
    "FR": {
        "country": "France",
        "continent_code": "EU",
        "continent": "Europe",
        "maps": ["franceLow", "franceHigh", "franceDepartmentsLow", "franceDepartmentsHigh"]
    },
    "GB": {
        "country": "United Kingdom",
        "continent_code": "EU",
        "continent": "Europe",
        "maps": ["ukLow", "ukHigh", "ukCountiesLow", "ukCountiesHigh"]
    },
    "JP": {
        "country": "Japan",
        "continent_code": "AS",
        "continent": "Asia",
        "maps": ["japanLow", "japanHigh"]
    },
    "KR": {
        "country": "Korea, Republic of",
        "continent_code": "AS",
        "continent": "Asia",
        "maps": ["southKoreaLow", "southKoreaHigh"]
    },
    "RU": {
        "country": "Russian Federation",
        "continent_code": "EU",
        "continent": "Europe",
        "maps": ["russiaLow", "russiaHigh", "russiaCrimeaLow", "russiaCrimeaHigh"]
    },
    "SG": {
        "country": "Singapore",
        "continent_code": "AS",
        "continent": "Asia",
        "maps": ["singaporeLow", "singaporeHigh"]
    },
    "TH": {
        "country": "Thailand",
        "continent_code": "AS",
        "continent": "Asia",
        "maps": ["thailandLow", "thailandHigh"]
    },
    "US": {
        "country": "United States",
        "continent_code": "NA",
        "continent": "North America",
        "maps": ["usaLow", "usaHigh", "usaTerritoriesLow", "usaTerritoriesHigh", "usaTerritories2Low", "usaTerritories2High"]
    },
    "VN": {
        "country": "Viet Nam",
        "continent_code": "AS",
        "continent": "Asia",
        "maps": ["vietnamLow", "vietnamHigh"]
    }
};

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dark);

class WorldMap extends Component {
    componentDidMount() {
        var _worldMap = am4core.create("wordMap", am4maps.MapChart);
        _worldMap.projection = new am4maps.projections.Mercator();

        // world settings
        let worldSeries = _worldMap.series.push(new am4maps.MapPolygonSeries());
        worldSeries.useGeodata = true;
        worldSeries.geodata = am4geodata_worldHigh;
        worldSeries.exclude = ["AQ"];

        let worldPolygon = worldSeries.mapPolygons.template;
        worldPolygon.tooltipText = "{name}";
        worldPolygon.nonScalingStroke = true;
        worldPolygon.strokeOpacity = 0.5;
        worldPolygon.fill = am4core.color("#AADAFF");
        worldPolygon.fill = am4core.color("#eee");
        worldPolygon.propertyFields.fill = "color";

        let hsWorld = worldPolygon.states.create("hover");
        hsWorld.properties.fill = _worldMap.colors.getIndex(9);

        // country settings
        let countrySeries = _worldMap.series.push(new am4maps.MapPolygonSeries());
        countrySeries.useGeodata = true;
        countrySeries.hide();
        countrySeries.geodataSource.events.on("done", function (ev) {
            worldSeries.hide();
            countrySeries.show();
        });

        let countryPolygon = countrySeries.mapPolygons.template;
        countryPolygon.tooltipText = "{name}";
        countryPolygon.nonScalingStroke = true;
        countryPolygon.strokeOpacity = 0.5;
        countryPolygon.fill = am4core.color("#eee");

        let hsCountry = countryPolygon.states.create("hover");
        hsCountry.properties.fill = _worldMap.colors.getIndex(9);

        // world event
        worldPolygon.events.on("hit", function (ev) {
            ev.target.series.chart.zoomToMapObject(ev.target);
            let map = ev.target.dataItem.dataContext.map;
            if (map) {
                ev.target.isHover = false;
                countrySeries.geodataSource.url = "https://www.amcharts.com/lib/4/geodata/json/" + map + ".json";
                countrySeries.geodataSource.load();
                btnBack.show();
            }
        });

        // settings up data
        let data = [];
        for (let id in countries) {
            if (countries.hasOwnProperty(id)) {
                let country = countries[id];
                if (country.maps.length) {
                    data.push({
                        id: id,
                        color: _worldMap.colors.getIndex(continents[country.continent_code]),
                        map: country.maps[0]
                    });
                }
            }
        }
        worldSeries.data = data;

        // add zoom control
        _worldMap.zoomControl = new am4maps.ZoomControl();

        // Add back button
        let btnBack = _worldMap.createChild(am4core.ZoomOutButton);
        btnBack.align = "right";
        btnBack.icon = new am4core.Circle();
        btnBack.icon.path = "M 336.5 160 C 322 70.7 287.8 8 248 8 s -74 62.7 -88.5 152 h 177 Z M 152 256 c 0 22.2 1.2 43.5 3.3 64 h 185.3 c 2.1 -20.5 3.3 -41.8 3.3 -64 s -1.2 -43.5 -3.3 -64 H 155.3 c -2.1 20.5 -3.3 41.8 -3.3 64 Z m 324.7 -96 c -28.6 -67.9 -86.5 -120.4 -158 -141.6 c 24.4 33.8 41.2 84.7 50 141.6 h 108 Z M 177.2 18.4 C 105.8 39.6 47.8 92.1 19.3 160 h 108 c 8.7 -56.9 25.5 -107.8 49.9 -141.6 Z M 487.4 192 H 372.7 c 2.1 21 3.3 42.5 3.3 64 s -1.2 43 -3.3 64 h 114.6 c 5.5 -20.5 8.6 -41.8 8.6 -64 s -3.1 -43.5 -8.5 -64 Z M 120 256 c 0 -21.5 1.2 -43 3.3 -64 H 8.6 C 3.2 212.5 0 233.8 0 256 s 3.2 43.5 8.6 64 h 114.6 c -2 -21 -3.2 -42.5 -3.2 -64 Z m 39.5 96 c 14.5 89.3 48.7 152 88.5 152 s 74 -62.7 88.5 -152 h -177 Z m 159.3 141.6 c 71.4 -21.2 129.4 -73.7 158 -141.6 h -108 c -8.8 56.9 -25.6 107.8 -50 141.6 Z M 19.3 352 c 28.6 67.9 86.5 120.4 158 141.6 c -24.4 -33.8 -41.2 -84.7 -50 -141.6 h -108 Z";
        btnBack.hide();
        btnBack.events.on("hit", function (ev) {
            worldSeries.show();
            _worldMap.goHome();
            countrySeries.hide();
            btnBack.hide();
        });

        // Add home button
        let btnHome = _worldMap.chartContainer.createChild(am4core.Button);
        btnHome.align = "right";
        btnHome.margin(5, 5, 5, 5);
        btnHome.setColor = am4core.color("#fff");
        btnHome.icon = new am4core.Sprite();
        btnHome.icon.padding(5, 5, 5, 5);
        btnHome.fill = am4core.color("#000");
        btnHome.stroke = am4core.color("#fff");
        btnHome.icon.path = "M-6.5,0.5 L0.5,-6.5 L7.5,0.5 L6.5,0.5 L6.5,6.5 L2.5,6.5 L2.5,2.5 L-1.5,2.5 L-1.5,6.5 L-5.5,6.5 L-5.5,0.5 Z";
        btnHome.icon.fill = am4core.color("rgb(73, 73, 73)");
        btnHome.icon.stroke = am4core.color("rgb(73, 73, 73)");
        btnHome.events.on("hit", function () {
            _worldMap.goHome();
        });


        // btnHome.backgroundColor = "#FFFFFF";
        // btnHome.cornerStrokeColor = "#000000";


        //
        // var polygonTemplate = polygonSeries.mapPolygons.template;
        // polygonTemplate.tooltipText = "{name}";
        // polygonTemplate.fill = am4core.color("#FFF7EE");

        // polygonTemplate.fill = am4core.se("#FFF7EE");

        this.worldMap = _worldMap;
    }


    componentWillUnmount() {
        if (this.worldMap) {
            this.worldMap.dispose();
        }
    }

    render() {
        let mapStyle = {
            width: "850px",
            height: "540px"
        };
        return (
            <div id="wordMap" style={mapStyle}></div>
        );
    }
}

export default WorldMap;