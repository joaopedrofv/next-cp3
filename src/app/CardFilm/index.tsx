import './styles.css';
 
interface Props {
    titulo: string;
    imagem: string;
    link: string;
}
 
const CardFilm = (props : Props) => {
    return (
       <div className='cardFilm'>
            <h1 className='filmTitle'>{props.titulo}</h1>
            <img className='filmImage' src={props.imagem} alt={props.titulo} />
            <button className='filmButton'><a href={props.link}>Assistir</a></button>
       </div>
    );
};
 
export default CardFilm;