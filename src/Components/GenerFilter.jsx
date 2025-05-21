const GenerFilter = ({generalist,setselegenre}) => {
    return (
        <select className="bg-gray-700 border rounded-sm bg-opacity-55 backdrop-blur-md text-white p-2"
        onChange={(e)=>{
            setselegenre(e.target.value)
        }}>
            <option value="">All Genres</option>
            {
                generalist.map((genre)=>{
                    return(
                        <option key={genre} value={genre.id}>{genre.name}</option>
                    )
                })
            }
        </select>
    )
}
export default GenerFilter


