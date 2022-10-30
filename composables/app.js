import {useMenuStore} from "../stores/menu";

export const useMenu = (data) => {
    const menu = useMenuStore()
    if (data.thirdLevelLinks) {
        menu.updateThirdLevelLinks(data.thirdLevelLinks)
    }
}