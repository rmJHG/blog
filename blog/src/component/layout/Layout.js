import Navigator from "./Navigator";
import classes from "./Layout.module.css";

function Layout(props) {
    return(
        <div>
            <Navigator />
            <main className={classes.mainPage}>{props.children}</main>
        </div>
    )
}

export default Layout;