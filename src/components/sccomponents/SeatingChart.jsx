import React from 'react';
import DnD from './DnD.jsx';
import GenerateSeatingChartButton from './GenerateSeatingChartButton.jsx';

class SeatingChart extends React.Component {

  render() {
    return (
      <>
     <div>
        <DnD />
      </div>
      <div>
        <GenerateSeatingChartButton />
      </div>
      </>
    )
  }
}
export default SeatingChart