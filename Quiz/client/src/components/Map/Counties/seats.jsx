import React, { Component } from 'react';
import Montana from './Montana';

class Counties extends React.Component {
    state = {
        counties: [
            { id: "cascade", name: "Cascade", license: 2, seat: "Great Falls" },
            { id: "chouteau", name: "Chouteau", license: 19, seat: "Fort Benton" },
            { id: "deerlodge", name: "Deer Lodge", license: 30, seat: "Anaconda" },
            { id: "flathead", name: "Flathead", license: 7, seat: "Kalispell" },
            { id: "granite", name: "Granite", license: 46, seat: "Philipsburg" },
            { id: "madison", name: "Madison", license: 25, seat: "Virginia City" },
            { id: "phillips", name: "Phillips", license: 11, seat: "Malta" },
            { id: "rosebud", name: "Rosebud", license: 29, seat: "Forsyth" },
            { id: "valley", name: "Valley", license: 20, seat: "Glasgow" },
            { id: "carter", name: "Carter", license: 42, seat: "Ekalaka" },
            { id: "fergus", name: "Fergus", license: 8, seat: "Lewistown" },
            { id: "gallatin", name: "Gallatin", license: 6, seat: "Bozeman" },
            { id: "judithbasin", name: "Judith Basin", license: 36, seat: "Stanford" },
            { id: "lewisandclark", name: "Lewis and Clark", license: 5, seat: "Helena" },
            { id: "mccone", name: "McCone", license: 41, seat: "Circle" },
            { id: "meagher", name: "Meagher", license: 47, seat: "White Sulphur Springs" },
            { id: "pondera", name: "Pondera", license: 26, seat: "Conrad" },
            { id: "roosevelt", name: "Roosevelt", license: 17, seat: "Wolf Point" },
            { id: "teton", name: "Teton", license: 31, seat: "Choteau" },
            { id: "blaine", name: "Blaine", license: 24, seat: "Chinook" },
            { id: "broadwater", name: "Broadwater", license: 43, seat: "Townsend" },
            { id: "silverbow", name: "Siverbow", license: 1, seat: "Butte" },
            { id: "carbon", name: "Carbon", license: 10, seat: "Red Lodge" },
            { id: "garfield", name: "Garfield", license: 50, seat: "Jordan" },
            { id: "missoula", name: "Missoula", license: 4, seat: "Missoula" },
            { id: "glacier", name: "Glacier", license: 38, seat: "Cut Bank" },
            { id: "mineral", name: "Mineral", license: 54, seat: "Superior" },
            { id: "jefferson", name: "Jefferson", license: 51, seat: "Boulder" },
            { id: "ravalli", name: "Ravalli", license: 13, seat: "Hamilton" },
            { id: "lincoln", name: "Lincoln", license: 56, seat: "Libby" },
            { id: "powderriver", name: "Powder River", license: 9, seat: "Broadus" },
            { id: "daniels", name: "Daniels", license: 37, seat: "Scobey" },
            { id: "park", name: "Park", license: 49, seat: "Livingston" },
            { id: "stillwater", name: "Stillwater", license: 32, seat: "Columbus" },
            { id: "toole", name: "Toole", license: 21, seat: "Shelby" },
            { id: "custer", name: "Custer", license: 14, seat: "Miles City" },
            { id: "dawson", name: "Dawson", license: 16, seat: "Glendive" },
            { id: "fallon", name: "Fallon", license: 39, seat: "Baker" },
            { id: "goldenvalley", name: "Golden Valley", license: 53, seat: "Ryegate" },
            { id: "liberty", name: "Liberty", license: 48, seat: "Chester" },
            { id: "musselshell", name: "Musselshell", license: 23, seat: "Roundup" },
            { id: "prairie", name: "Prairie", license: 45, seat: "Terry" },
            { id: "sweetgrass", name: "Sweet Grass", license: 40, seat: "Big Timber" },
            { id: "treasure", name: "Treasure", license: 33, seat: "Hysham" },
            { id: "wheatland", name: "Wheatland", license: 44, seat: "Harlowton" },
            { id: "wibaux", name: "Wibaux", license: 52, seat: "Wibaux" },
            { id: "sheridan", name: "Sheridan", license: 34, seat: "Plentywood" },
            { id: "yellowstone", name: "Yellowstone", license: 3, seat: "Billings" },
            { id: "hill", name: "Hill", license: 12, seat: "Havre" },
            { id: "powell", name: "Powell", license: 28, seat: "Deer Lodge" },
            { id: "beaverhead", name: "Beaverhead", license: 18, seat: "Dillon" },
            { id: "petroleum", name: "Petroleum", license: 55, seat: "Winnett" },
            { id: "lake", name: "Lake", license: 15, seat: "Polson" },
            { id: "sanders", name: "Sanders", license: 35, seat: "Thompson Falls" },
            { id: "richland", name: "Richland", license: 27, seat: "Sidney" },
            { id: "bighorn", name: "Bighorn", license: 22, seat: "Hardin" }
        ]
    };

    shuffle = (array) => {
        let tmp, current, top = array.length;
        if(top) while(--top) {
            current = Math.floor(Math.random()*(top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
        return array;
    }

    handleStart = () => {
        let numbers = [];
        let counties = [];
        for(let i = 0; i < 56; i++){
            counties.push(i);
            numbers.push(i);
        }
        numbers = this.shuffle(numbers);
        for(let i = 0; i < 56; i++){
            counties[i] = this.state.counties[numbers[i]].name;
        }
        this.beginGame(counties);
    }

    beginGame = (counties) => {
        let i = counties.length;
        while(i > 0){
            document.getElementById("report").innerHTML = "What is the county seat of " + counties[i] + " County?";
            i --;
        }
    }

    handleSelect = (countyName) => {
        // <h1>{ countyId }</h1>;
        let county = this.state.counties.filter(c => c.id === countyName);
        document.getElementById("report").innerHTML = county[0]["name"] + " County";
    };


    render() { 
        const onSelect = this.props;

        return ( 
            <div>
            <button 
                    id="start"
                    onClick={() => this.handleStart()} 
                    className="btn btn-secondary btn-sm"
            >
                Start
            </button>
            <button 
                    onClick={() => this.handleGiveUp()} 
                    className="btn btn-secondary btn-sm"
            >
                Give Up
            </button>
            
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