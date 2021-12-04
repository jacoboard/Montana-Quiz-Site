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
            { id: "silverbow", name: "Silver Bow" },
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

    numClicks = 0;
    numCorrect = 0;
    numCounties = 56;
    counties = [];
    gameStarted = false;

    //https://stackoverflow.com/questions/20318822/how-to-create-a-stopwatch-using-javascript
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

    reset = () => {
        for(let i = 0; i < this.counties.length; i++){
            document.getElementById(this.counties[i]).style.fill = "antiquewhite";
        }
        document.getElementById("score").innerHTML = "";
    }

    handleStart = () => {
        //this.startTimer()
        if(this.numClicks != 0){
            this.reset();
        }
        document.getElementById("score").innerHTML = this.numCorrect + "/56";
        this.gameStarted = true;
        document.getElementById("start").disabled = true;
        let counties = [];
        counties.length = this.state.counties.length;
        for(let i = 0; i < counties.length; i++){
            counties[i] = this.state.counties[i].name;
        }
        counties = this.shuffle(counties);
        this.counties = counties;
        this.numClicks = 0;
        this.numCorrect = 0;
        document.getElementById("countyToFind").innerHTML = counties[this.numClicks] + " County";
        document.getElementById("start").disabled = true;
    }

    handleGiveUp = () => {
        document.getElementById("start").disabled = false;
        document.getElementById("countyToFind").innerHTML = "";
        this.reset();
    }

    handleSelect = (countyName) => {

        if(this.numClicks == this.counties.length){
            this.reset();
            this.gameStarted = false;
        }
        if(!this.gameStarted){
            this.handleStart();
        }
       
        if(countyName == this.counties[this.numClicks]){
            document.getElementById(this.counties[this.numClicks]).style.fill = "green";
            this.numCorrect++;
            document.getElementById("score").innerHTML = this.numCorrect + "/56";
        }else if(countyName != this.counties[this.numClicks]){
            document.getElementById(this.counties[this.numClicks]).style.fill = "red";
        }
        this.numClicks++;


        if(this.numClicks == this.counties.length){
            if(this.numCorrect == 56){
                document.getElementById("countyToFind").innerHTML = "Way to go! You got 100% genius";
            }
            else {
                document.getElementById("countyToFind").innerHTML = "Congrats; game over";
            }
            document.getElementById("start").disabled = false;
        }else{
            document.getElementById("countyToFind").innerHTML = this.counties[this.numClicks] + " County";

        }
        return countyName;
    };

    render() { 
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
            <span id="score"></span>
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