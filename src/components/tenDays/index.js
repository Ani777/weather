import React from 'react';
import Day from "../day";

function TenDays(props) {
    const { forecast } = props;
    return(
        <div>
            {forecast.length && forecast.map(item => (
                <Day
                    key={item.date}
                    date = {item.date}
                condition={item.day.condition.text}
                icon={item.day.condition.icon}
                maxTemp={Math.round(item.day.maxtemp_c)}
                minTemp={Math.round(item.day.mintemp_c)}
                hour={item.hour}/>
            ))}
        </div>
    )

}
export default TenDays;