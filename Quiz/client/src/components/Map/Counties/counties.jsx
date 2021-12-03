import React, { Component } from 'react';
import Montana from './Montana';

class Counties extends React.Component {
    state = {
        counties: [
            { id: "cascade", name: "Cascade" },
            { id: "chouteau", name: "Chouteau" },
            { id: "deerlodge", name: "Deer Lodge" },
            { id: "flathead", name: "Flathead" },
            { id: "granite", name: "Granite" },
            { id: "madison", name: "Madison" },
            { id: "phillips", name: "Phillips" },
            { id: "rosebud", name: "Rosebud" },
            { id: "valley", name: "Valley" },
            { id: "carter", name: "Carter" },
            { id: "fergus", name: "Fergus" },
            { id: "gallatin", name: "Gallatin" },
            { id: "judithbasin", name: "Judith Basin" },
            { id: "lewisandclark", name: "Lewis and Clark" },
            { id: "mccone", name: "McCone" },
            { id: "meagher", name: "Meagher" },
            { id: "pondera", name: "Pondera" },
            { id: "roosevelt", name: "Roosevelt" },
            { id: "teton", name: "Teton" },
            { id: "blaine", name: "Blaine" },
            { id: "broadwater", name: "Broadwater" },
            { id: "silverbow", name: "Siverbow" },
            { id: "carbon", name: "Carbon" },
            { id: "garfield", name: "Garfield" },
            { id: "missoula", name: "Missoula" },
            { id: "glacier", name: "Glacier" },
            { id: "mineral", name: "Mineral" },
            { id: "jefferson", name: "Jefferson" },
            { id: "ravalli", name: "Ravalli" },
            { id: "lincoln", name: "Lincoln" },
            { id: "powderriver", name: "Powder River" },
            { id: "daniels", name: "Daniels" },
            { id: "park", name: "Park" },
            { id: "stillwater", name: "Stillwater" },
            { id: "toole", name: "Toole" },
            { id: "custer", name: "Custer" },
            { id: "dawson", name: "Dawson" },
            { id: "fallon", name: "Fallon" },
            { id: "goldenvalley", name: "Golden Valley" },
            { id: "liberty", name: "Liberty" },
            { id: "musselshell", name: "Musselshell" },
            { id: "prairie", name: "Prairie" },
            { id: "sweetgrass", name: "Sweet Grass" },
            { id: "treasure", name: "Treasure" },
            { id: "wheatland", name: "Wheatland" },
            { id: "wibaux", name: "Wibaux" },
            { id: "sheridan", name: "Sheridan" },
            { id: "yellowstone", name: "Yellowstone" },
            { id: "hill", name: "Hill" },
            { id: "powell", name: "Powell" },
            { id: "beaverhead", name: "Beaverhead" },
            { id: "petroleum", name: "Petroleum" },
            { id: "lake", name: "Lake" },
            { id: "sanders", name: "Sanders" },
            { id: "richland", name: "Richland" },
            { id: "bighorn", name: "Bighorn" }
        ]
    };

    handleSelect = (countyName) => {
        // <h1>{ countyId }</h1>;
        let county = this.state.counties.filter(c => c.id === countyName);
        document.getElementById("report").innerHTML = county[0]["name"] + " County";
    };

    render() { 
        const onSelect = this.props;

        return ( 
            <div>
            <div id="report"></div>
            <React.Fragment>
                <Montana 
                    onSelect={this.handleSelect}
                />

            </React.Fragment>
            
        </div>
        );
    }
}
 
export default Counties;