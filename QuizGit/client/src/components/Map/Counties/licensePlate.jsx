import React from 'react';
import Montana from './Montana';
import Form from '../../Form/Form';

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
            { id: "silverbow", name: "Silver Bow", license: 1, seat: "Butte" },
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

    numEntries = 0;
    numCorrect = 0;
    numCounties = 56;
    counties = [];
    gameStarted = false;
    gamefinished = false;
    gameNumber = 3;

    shuffle = (array) => {
        let tmp, current, top = array.length;
        if(top) while(--top) {
            current = Math.floor(Math.random()*(top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
        return array;
    };

    handleStart = () => {
        if(!this.gameStarted){
            this.reset();
            document.getElementById("score").innerHTML = this.numCorrect + "/56";
            this.gameStarted = true;
            this.gamefinished = false;
            this.forceUpdate();
            document.getElementById("start").disabled = true;
            let counties = [];
            counties.length = this.state.counties.length;
            for(let i = 0; i < counties.length; i++){
                counties[i] = this.state.counties[i].name;
            }
            counties = this.shuffle(counties);
            this.counties = counties;
            this.numCorrect = 0;
            document.getElementById("countyToFind").innerHTML = "Enter the license plate number for " + this.counties[this.numCorrect] + " County";
            document.getElementById(this.counties[this.numCorrect]).style.fill = "blue";
        }
    }

    handleGiveUp = () => {
        if(document.getElementById("start").innerHTML === "Restart"){
            document.getElementById("start").innerHTML = "Start";
        }
        document.getElementById("start").disabled = false;
        for(let i = 0; i < this.counties.length; i++){
            document.getElementById(this.counties[i]).style.fill = "antiquewhite";
        }
        if(this.gameStarted){
            this.gamefinished = true;
            this.forceUpdate();
        }
        this.reset();
    };

    handleSelect = (countyName) => {};

    checkGameInput = (entry) => {

        let county = this.state.counties.filter(c => c.name === this.counties[this.numCorrect]);
        let number = county[0].license.toString();

        if(entry === number){
            document.getElementById(this.counties[this.numCorrect]).style.fill = "green";
            document.getElementById("gameinput").value = "";
            this.numCorrect ++;
            document.getElementById(this.counties[this.numCorrect]).style.fill = "blue";
            document.getElementById("score").innerHTML = this.numCorrect + "/56";
        }

        if(this.numCorrect === this.counties.length){
            document.getElementById("start").innerHTML = "Restart";
            document.getElementById("countyToFind").innerHTML = "Way to go! You got 100%, you're a genius!";
            document.getElementById("start").disabled = false;
        }
        else{
            document.getElementById("countyToFind").innerHTML = "Enter the license plate number for " + this.counties[this.numCorrect] + " County";
        }
    }

    reset = () => {
        document.getElementById("score").innerHTML = "";
        this.numCorrect = 0;
        document.getElementById("countyToFind").innerHTML = "";
        this.gameStarted = false;
        for(let i = 0; i < this.counties.length; i++){
            document.getElementById(this.counties[i]).style.fill = "antiquewhite";
        }
    }

    render() {
        if (this.gamefinished !== true) {
            return ( 
                <div>
                <div id="countyToFind"></div>
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
                <form>
                    <input type="text" id="gameinput"
                        onChange={e => {this.checkGameInput(e.target.value);}}
                        placeholder="Enter license plate number">
                    </input>
                </form>
                <span id="score"></span>
                <div id="report"></div>
                <React.Fragment>
                    <Montana 
                        onSelect={this.handleSelect}
                    />
                </React.Fragment>
            </div>
            );
        } else {
            return ( 
                <div>
                <div id="countyToFind"></div>
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
                <form>
                    <input type="text" id="gameinput"
                        onChange={e => {this.checkGameInput(e.target.value);}}
                        placeholder="Enter license plate number">
                    </input>
                </form>
                <span id="score"></span>
                <div id="report"></div>
                <React.Fragment>
                    <Montana 
                        onSelect={this.handleSelect}
                    />
                </React.Fragment>
                <Form gameScore={this.numCorrect} total={this.numCounties} gameNum={this.gameNumber}/>
            </div>
            );
        }
    }
}

export default Counties;