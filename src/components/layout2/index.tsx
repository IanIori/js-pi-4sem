import Rodape from "../../components/footer"
import { Grid, GridItem } from "@chakra-ui/react"
import Top from "../top"
import Sidebar from "../sidebar"

interface Props {
    children: React.ReactNode
}

function Layout2(props: Props){
    const {children} = props
    return (
        <Grid className="grid" templateColumns='1fr' templateRows='64px auto 64px'>
            <GridItem colSpan={1} rowSpan={1}>
                <Top />
                <Sidebar></Sidebar>
            </GridItem>
            <GridItem colSpan={1} rowSpan={1}>
                {children}
            </GridItem>
            <GridItem colSpan={1} rowSpan={1}>
                <Rodape />
            </GridItem>
        </Grid>
    )
}

export default Layout2