import { Link } from "react-router-dom";
import { TagHeader, NavBar} from "./style";

const Header = () => {
    return(
        <TagHeader>
          <NavBar>
              <Link to="/">
                  <p>capputeeno</p>
              </Link>
          </NavBar>
        </TagHeader>
    )
}

export default Header