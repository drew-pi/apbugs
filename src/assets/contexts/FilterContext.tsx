import { createContext, FC, useState, ReactNode, Dispatch, SetStateAction} from 'react';

interface FilterContextType {
    activeFilters: string[]
    setActiveFilters: Dispatch<SetStateAction<string[]>>
}

export const FilterContext = createContext<FilterContextType>({
    activeFilters: [],
    setActiveFilters: () => {},
});

interface Props {
    children: ReactNode,
    initialState? : string[],
}

export const FilterContextProvider: FC<Props> = ({children, initialState = []}) => {
    const [activeFilters, setActiveFilters] = useState(initialState)

    return <FilterContext.Provider value={{activeFilters, setActiveFilters}}>
        {children}
    </FilterContext.Provider>
}
