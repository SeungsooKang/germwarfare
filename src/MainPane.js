import React from 'react'
import Cell from './Cell'

const CreateRow = ({numCol}) => {
    var items = [];
    for (var i = 0; i < numCol; i++) {
        items.push(<td key={i}><Cell/></td>);
    }
    return <tr>{items}</tr>;
}

const CreateMap = ({numRow, numCol}) => {
    var rows = [];
    for (var i = 0; i < numRow; i++) {
        rows.push(<CreateRow key={i} numCol={numCol}/>);
    }
    return <table>
            <tbody>{rows}</tbody>
    </table>;
}

class MainPane extends React.Component {

    mapSize = {
        numRow: 7,
        numCol: 7
    }
 
    render() {
        return <div><CreateMap numRow={7} numCol={7}/></div>;
    }
}


export default MainPane
