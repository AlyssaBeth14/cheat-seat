import React, { useState } from 'react'
import Draggable from 'react-draggable';
import Table from './Table.jsx';
import Chair from './Chair.jsx';


const DnD = (props) => {
    const [myArr, setMyArr] = useState([])
    const [xChair, setXChair] = useState(50)
    const [yChair, setYChair] = useState(50)
    const [xTable, setXTable] = useState(50)
    const [yTable, setYTable] = useState(50)

    const addChair = () => {
        const copy = [...myArr, <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{ x: xChair, y: yChair }}
            position={null}
            grid={[1, 1]}
            scale={1}

            allowAnyClick={false}
        >
            <div >
                <Chair />
            </div>
        </Draggable>]

        setMyArr(copy)
        let newX = xChair + 50
        let newY = yChair + 50
        setXChair(newX)
        setYChair(newY)
    }

    const addTable = () => {
        const copy = [...myArr, <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{ x: xTable, y: yTable }}
            position={null}
            grid={[1, 1]}
            scale={1}
            allowAnyClick={false}
            >
            <div >
                <Table />
            </div>
        </Draggable>]

        setMyArr(copy)
        let newX = xTable + 50
        let newY = yTable + 50
        setXTable(newX)
        setYTable(newY)
    }

    return (
        <div className='container'>
            <img
                onClick={addTable}
                src="public/4e79b527-b37b-4a87-8004-156eb64fa42e_1.74a83dc5c6315a4e0dc5fa1f16aa8a88-removebg-preview.png"
                width="50"
                height="50"
            />

            <div id="draggable_box_2" className="handle">
                <img onClick={addChair} src="public/roshak_10-removebg-preview.png"
                    width="50"
                    height="50"
                />
            </div>

            <div className='container' style={{ width: '50vw', height: '50vh', backgroundColor: 'green' }}>

                {myArr}
            </div>
        </div>
    )
}

export default DnD
