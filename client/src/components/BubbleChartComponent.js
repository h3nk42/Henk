import React from 'react';
import BubbleChart from '@weknow/react-bubble-chart-d3';





let bubbleClick = (label) =>{
    console.log("Custom bubble click func")
}
let legendClick = (label) =>{
    console.log("Customer legend click func")
}


function BubbleChartComponent (props) {
    if (props.version===1) {
        return (
            <BubbleChart
                graph={{
                    zoom: 1.1,
                    offsetX: -0.05,
                    offsetY: -0.01,
                }}
                width={600}
                height={700}
                padding={0} // optional value, number that set the padding between bubbles
                showLegend={false} // optional value, pass false to disable the legend.
                legendPercentage={20} // number that represent the % of with that legend going to use.
                legendFont={{
                    family: 'Arial',
                    size: 12,
                    color: '#000',
                    weight: 'bold',
                }}
                valueFont={{
                    family: 'Arial',
                    size: 12,
                    color: props.color[1],
                    weight: 'bold',
                }}
                labelFont={{
                    family: 'Arial',
                    size: 16,
                    color: props.color[4],
                    weight: 'lighter',
                }}
                //Custom bubble/legend click functions such as searching using the label, redirecting to other page
                bubbleClickFunc={bubbleClick}
                legendClickFun={legendClick}
                data={[
                    {label: 'plants', value: 2, color: props.color[1]},
                    {label: 'cooking', value: 7, color: props.color[1]},
                    {label: 'video games', value: 23, color: props.color[1]},
                    {label: 'climbing', value: 23, color: props.color[1]},
                    {label: 'fantasy books', value: 14, color: props.color[1]},
                    {label: 'meditation', value: 5, color: props.color[1]},
                    {label: 'running', value: 40, color: props.color[1]},
                    {label: 'code', value: 25, color: props.color[1]},
                ]}
            />
        );
    }
    else {
        return(
            <BubbleChart
                graph={{
                    zoom: 1.1,
                    offsetX: -0.05,
                    offsetY: -0.01,
                }}
                width={600}
                height={700}
                padding={0} // optional value, number that set the padding between bubbles
                showLegend={false} // optional value, pass false to disable the legend.
                legendPercentage={20} // number that represent the % of with that legend going to use.
                legendFont={{
                    family: 'Arial',
                    size: 12,
                    color: '#000',
                    weight: 'bold',
                }}
                valueFont={{
                    family: 'Arial',
                    size: 12,
                    color: props.color[1],
                    weight: 'bold',
                }}
                labelFont={{
                    family: 'Arial',
                    size: 16,
                    color: props.color[4],
                    weight: 'lighter',
                }}
                //Custom bubble/legend click functions such as searching using the label, redirecting to other page
                bubbleClickFunc={bubbleClick}
                legendClickFun={legendClick}
                data={[
                    {label: 'C', value: 2, color: props.color[1]},
                    {label: 'python', value: 7, color: props.color[1]},
                    {label: 'nodeJS', value: 23, color: props.color[1]},
                    {label: 'React' , value: 23, color: props.color[1]},
                    {label: 'ES6', value: 14, color: props.color[1]},
                    {label: 'Java', value: 5, color: props.color[1]},
                    {label: 'Ethereum', value: 30, color: props.color[1]},
                    {label: 'MERN', value: 15, color: props.color[1]},
                    {label: 'Kubernetes', value: 8, color: props.color[1]},
                    {label: 'GNU/Linux', value: 14, color: props.color[1]},
                ]}
            />
        );
    }
}

export default BubbleChartComponent;