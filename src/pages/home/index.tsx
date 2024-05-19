import Layout from "../../components/layout"
import HomeContent from "../../components/home-content"
import CalendarC from "../../components/calendar"
import DatePickerD from "../../components/datepicker"
import AvatarA from "../../components/avatar"
import InputI from "../../components/input"

function Home(){
    return (
        <Layout>
            <HomeContent />
            <CalendarC></CalendarC>
            <DatePickerD></DatePickerD>
            <AvatarA></AvatarA>
            <InputI></InputI>
        </Layout>
    )
}

export default Home