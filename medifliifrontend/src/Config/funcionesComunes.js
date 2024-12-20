const funcionesComunes = {
    // Funciones comunes
    search: async (querySearch)=>{
        const query = new URLSearchParams()
        
        for ( let element in  querySearch.elements){
            query.append(element.name,element.value)
        }
        return query
    }
}
export default funcionesComunes