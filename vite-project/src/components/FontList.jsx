
import CustomText from "./Input.jsx"
import PropTypes from 'prop-types'



CustomText.PropTypes = { 
        
    handleSubmit: PropTypes.node.isRequired

}

const fonts = [
    {name: 'poiret one', id: '1'},
    {name: 'fugaz one', id: '2'},
    {name: 'shrikhand', id: '3'},
    {name: 'zeyada', id: '4'}
]




export default function FontList({handleSubmit}) {

   

    const options = fonts.map(font =>
        <div key={font.id}>
        <h2 style={{fontFamily: font.name}} >
            {font.name}
        </h2>
        <div style={{fontFamily: font.name}}>
            {handleSubmit}
        </div>
        </div>

        )

    return(
        <>
        <div>{options}</div>
        </>
    )
}