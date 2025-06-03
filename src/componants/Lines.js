import lines from "../imgs/line.png"
function Lines(){
    return (    
        <div className="lines">
            <img className="line1" src={lines} alt="line1" />
            <img className="line2" src={lines} alt="line2"/>
            <img className="line3" src={lines} alt="line3"/>
        </div>
    )
}
export default Lines