import {Link} from "react-router-dom"

export default function Nav (props){
    return(
        <div className="nav">
            <Link to ="/">
                <div>More Details</div>
            </Link>
        </div>
    );
};