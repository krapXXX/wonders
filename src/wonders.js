import React from 'react';



export class Cards extends React.Component
{
    render()
    {
        const block={
            padding:"30px"
        }
    const name ={
fontSize:"32px",
color:"Black"
    }
    const details ={
        fontSize:"16px",
color:"Grey"
    }
    const image={
        width:"200px"
    }
return <div style = {block}>
{this.props.wonders.map((wonder)=>(
<div>
<div style = {name}>
    {wonder.name}
</div>

<img src= {wonder.imageURL} alt = {wonder.name}style = {image}/>

<div style = {details}>
    {wonder.details}
</div>
</div>
))}


</div>
    }
}