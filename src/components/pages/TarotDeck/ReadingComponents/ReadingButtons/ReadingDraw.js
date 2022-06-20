import React from 'react'

const ReadingDraw = ({showing, disable}) => {
  return (
    <>
        <div>
            <button disabled={disable} onClick={showing}>Draw Cards</button>
        </div>
    </>
  )
}

export default ReadingDraw