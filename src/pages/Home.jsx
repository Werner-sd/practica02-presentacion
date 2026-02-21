import Card from "../components/Card/Card";
import Title from "../components/Title/Title";

function Home(){
    return(
        <div style={{padding: "40px"}}>
            <Title
                title = "Desarrollo Web UPA | I. T. I. & I. S. C."
            />
            <Card 
                title = "Primer Componente"
                description = "Este es mi primer componente reutilizable en React con prácticas modernas y reutilizables"
            />
        </div>
    )
}

export default Home