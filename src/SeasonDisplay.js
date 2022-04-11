import './SeasonDisplay.css';
import React from "react";

const seasonConfig = {
    spring: {
        whatSphere: "You're in", //in southern sphere or northern sphere
        whatSeason:"and it's currently: Spring.",
        text: "Let's go to the park and have a picnic!",
        iconName: 'heart'
    },
    summer: {
        whatSphere: "You're in", //in southern sphere or northern sphere
        whatSeason:"and it's currently: Summer.",
        text: "Let's hit the beach!",
        iconName: 'sun'
    },
    autumn: {
        whatSphere: "You're in", //in southern sphere or northern sphere
        whatSeason:"and it's currently: Autumn.",
        text: "Let's take a walk and enjoy the breeze!",
        iconName: 'leaf'
    },
    winter:{
        whatSphere: "You're in", //in southern sphere or northern sphere
        whatSeason:", and it's currently: Winter.",
        text: "Burr, it's cold!",
        iconName: 'snowflake'
    }
};


const getSeason = (lat, month) => {
    if (month > 2 && month < 4){
        return lat > 0 ? 'spring' : 'autumn';
    } if (month > 4 && month < 6) {
        return lat > 0 ? 'summer' : 'winter';
        if (month > 6 && month < 8){
            return lat > 0 ? 'autumn' : 'spring';
        }
        return lat > 0 ? 'winter' : 'summer';
        
    }
}

const getSphere = (lat) => {
    return lat > 0 ? 'northern sphere' : 'southern sphere';
}

const SeasonDisplay = props => {
    const season = getSeason (props.lat, new Date().getMonth())
    const sphere = getSphere (props.lat)
    const {whatSphere, whatSeason, text, iconName} = seasonConfig[season];//{text, iconName}
    
    return (
    <div className={`season-display ${season}`}>
        <i className={`icon-top-left massive ${iconName} icon`}/>
        <i className={`icon-top-right massive ${iconName} icon`}/>
        <div className='string'>
            <h1>{`${whatSphere} ${sphere}, ${whatSeason}\n${text}`}</h1>
        </div>
        <i className={`icon-bot-left massive ${iconName} icon`}/>
        <i className={`icon-bot-right massive ${iconName} icon`}/>
    </div>
    );
};

export default SeasonDisplay;