
export const Resultados = ({ views, largeImageURL, likes}) => {
  return (
    <div>
        <img src={largeImageURL} alt="imagen resultado" />
        <p>👀 {views}</p>
        <p>🧡 {likes}</p>
        
    </div>
  )
}
