import {create} from 'zustand'

export const useThemeStore = create ((set)=>({
    theme: localStorage.getItem("convoX-theme") ||"coffee",
    setTheme: (theme) =>{
        localStorage.setItem("convoX-theme", theme);
        set ({theme})
    },
}))