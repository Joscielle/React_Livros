//import './estilos.css'

export default function ResultadoContainer({ children, onClick }) {
    return (
        <div className="ResultadoContainer" onClick ={onClick}>
            {children}
        </div>
        
    );
}