
export default function Rating({value}){
    return (
        <div className="Stars" style={{'--rating': value}}></div>
    )
}