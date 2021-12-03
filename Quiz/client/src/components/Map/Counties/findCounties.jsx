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
        ],
        current: "",
        giveUp: false,
        time: 0,
        score: 0
    };

    //timer = document.getElementById("stopwatch");
    //hr = 0;
    //min = 0;
    //sec = 0;
    //stoptime = true;
    numClicks = 0;
    numCorrect = 0;
    numCounties = 56;
    counties = [];

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

    /*startTimer = () => {
        if(this.stoptime == true) {
            this.stoptime = false;
            this.timerCycle(); 
        }
    }

    stopTimer = () => {
        if(this.stoptime == false) {
            this.stoptime = true;
        }
    }

    timerCycle = () => {
        if (this.stoptime == false) {
            this.sec = parseInt(this.sec);
            this.min = parseInt(this.min);
            this.hr = parseInt(this.hr);

            this.sec = this.sec + 1;

            if(this.sec == 60){
                this.min = this.min + 1;
                this.sec = 0; 
            }
            if(this.min == 60){
                this.hr = this.hr + 1;
                this.min = 0;
                this.sec = 0;
            }

            if(this.sec < 10 || this.sec == 0){
                this.sec = '0' + this.sec;
            }
            if(this.min < 10 || this.min == 0){
                this.min = '0' + this.min;
            }
            if(this.hr < 10 || this.hr == 0){
                this.hr = '0' + this.hr;
            }

            this.timer.innerHTML = this.hr + ':' + this.min + ':' + this.sec;

            setTimeout("timerCycle()", 1000);
        }
    }

    resetTimer = () => {
        this.timer.innerHTML = '00:00:00';
    }*/

    handleStart = () => {
        //this.startTimer()
        document.getElementById("start").disabled = true;
        let counties = [];
        counties.length = this.state.counties.length;
        for(let i = 0; i < counties.length; i++){
            counties[i] = this.state.counties[i].id;
        }
        counties = this.shuffle(counties);
        this.numClicks = 0;
        this.numCorrect = 0;
        document.getElementById("countyToFind").innerHTML = counties[this.numClicks];
        document.getElementById("start").disabled = true;

        
        
        //this.stopTimer();
    }

    handleGiveUp = () => {
        document.getElementById("start").disabled = false;
        this.counter = 0;
       // this.stopTimer();
    }

    handleSelect = (countyName, counties) => {
        // <h1>{ countyId }</h1>;
        //let county = this.state.counties.filter(c => c.id === countyName);
        //this.setState({ current: county[0]["name"] });
        //return county[0]["id"];
        if(countyName == counties[this.numClicks]){
            document.getElementById(counties[this.numClicks]).style.fill = "green";
            this.numClicks++;
            this.numCorrect++;
        }else if(countyName != counties[this.numClicks]){
            document.getElementById(counties[this.numClicks]).style.fill = "red";
            this.numClicks++;
        }

        if(this.numClicks == counties.length){
            
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
            <span id="stopwatch">
                00:00:00
            </span>
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