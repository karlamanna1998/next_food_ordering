import MenuItem from "../../menu/menuItem"
import SectionHeader from "../sectionHeader/sectionHeader"


export default function HomeMenu() {
    return (
        <section>
            <div className="text-center mb-4">
                <SectionHeader mainHeading={'Menu'} subHeading={'CHECK OUT'} />
            </div>

            <div className="grid grid-cols-3 gap-4">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </section>
    )
}