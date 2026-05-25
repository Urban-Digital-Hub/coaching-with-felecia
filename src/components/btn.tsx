import React from 'react'
import COLOR from '../../constants/color'
type Props = {
  name: string
}
function Btn( props: Props) {
  return (
  <>
  <button className='' style={{ background: COLOR.primary, borderColor: COLOR.primary }}>{props.name}</button>
  </>
  )
}

export default Btn  