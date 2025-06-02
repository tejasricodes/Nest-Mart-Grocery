import CustomTabs from "../CustomTabs/CustomTabs"
import Header from "../header"
function Dashboard() {
    const name="Tejasri"
    return(
        <>
        <Header name={name} location={location}/>
        <CustomTabs/>
        </>
    )
}

export default Dashboard