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
            bounds={parent}
            allowAnyClick={false}
        >
            <div >
                <Chair />
            </div>
        </Draggable>]

        setMyArr(copy)
        let newX = xChair + 10
        let newY = yChair + 10
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
            bounds={parent}
            allowAnyClick={false}
            >
            <div >
                <Table />
            </div>
        </Draggable>]

        setMyArr(copy)
        let newX = xTable + 2
        let newY = yTable + 2
        setXTable(newX)
        setYTable(newY)
    }

    return (
        <div className='container' style={{padding: '20px'}}>
            <div class='selectbox' style={{width: '150px', border: '7px solid white', textAlign: 'center', padding: '20px', backgroundColor: '#deacde', borderRadius: '10px', color: '#3b3b3b', float: 'left'}}>
            <h3 style={{fontWeight: '750'}}>SELECT:</h3>
    
            <img
                onClick={addTable}
                src="public/4e79b527-b37b-4a87-8004-156eb64fa42e_1.74a83dc5c6315a4e0dc5fa1f16aa8a88-removebg-preview.png"
                width="60"
                height="60"
            />

            <div id="draggable_box_2" className="handle">
                <img onClick={addChair} src="public/roshak_10-removebg-preview.png"
                    width="60"
                    height="60"
                />
            </div>
            </div>

            <div className='container' style={{marginRight: 'auto', marginLeft: 'auto', width: '90vw',  height: '75vh', backgroundColor: 'mintcream', border: '10px solid #ae4dc4', borderRadius: '25px'}} id='designbox'>

                {myArr}
            </div>
        </div>
    )
}

export default DnD
