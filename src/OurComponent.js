import React from "react"

// function OurComponent(props) {
//     return (
//     <article>
//         <h1>Reacts day is {props.today}</h1>
//         <p>Paragraph</p>
//         <img src="https://i.pinimg.com/736x/b1/3b/81/b13b81d79fe91e35008feeaf4c5b04d7.jpg" />
//     </article>
//     )
//   }


class OurComponent extends React.Component {

    render() {
        return (
            <article>
         <h1>Reacts day is today</h1>
         <p>Paragraph</p>
            <img src="https://i.pinimg.com/736x/b1/3b/81/b13b81d79fe91e35008feeaf4c5b04d7.jpg" />
             </article>
        )
    }
}

export default OurComponent