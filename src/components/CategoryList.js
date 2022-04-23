import {useLocation} from "react-router-dom";

function CategoryList(props) {

    const value = props.cate
    const location = useLocation();

    console.log(location.state.name);
    return(<div>
            {/*{location.state.cate}*/}
        </div>
    );
}

export default CategoryList;