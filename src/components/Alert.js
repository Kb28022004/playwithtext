import React from 'react'

const Alert = (props) => {
   const Capitalise=(word)=>{
    const lower=word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)
   }
  return (
    <div style={{height:"50px"}}>
       {props.alert && <div class={`alert alert-${props.alert.type}` }role="alert">
<strong>{Capitalise(props.alert.type)}</strong> : {props.alert.message}
</div>}
    </div>
  )
}

export default Alert