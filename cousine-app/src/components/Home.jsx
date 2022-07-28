import Footer from "./Footer"
import { NavbarUse } from "./NavbarUse"
import { CarouselUser } from "./CarouselUser"
import { RecipeHome } from "./recipe/RecipeHome"
import { MusicHome } from "./music/MusicHome"
import RecipePreview from "./recipe/RecipePreview"
import MusicPreview from "./music/MusicPreview"


export const Home = () => {
    return (
        <>
        <NavbarUse/>
        <CarouselUser/>
        <RecipePreview/>
        <MusicPreview/>
        <Footer/>
        </>
    )
}