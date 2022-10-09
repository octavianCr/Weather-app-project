
    import React from 'react'
    import {useDispatch} from "react-redux"
    import {useSelector} from 'react-redux'
    import {updateCity} from "../features/city"

    function CityButton() {
        const city = useSelector((state)=> state.city.value)
        const dispatch = useDispatch()
    return (
        <button id="btn" onClick={()=>{dispatch(updateCity({name: "Berlin"}))}}>Search</button>
    )
    }

    export default CityButton