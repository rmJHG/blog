function PageNavigationBtn(props) {

    function btnClick() {
        console.log(props)

    }
    return(
        <div>
        <input type="button" value={props.index} onClick={btnClick}/>
        </div>
    )
}

export default PageNavigationBtn;