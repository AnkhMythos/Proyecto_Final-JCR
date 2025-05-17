import { useState } from 'react'
import'./App.css'

function UseApi() {

// hacer el pedido de la api
fetch('https://dragonball-api.com/api/characters')

.then()


.then()
.catch()


return (

//muestro las cards

<div>
    

</div>

)
}
export defaul UseApi


// import { useEffect, useState } from 'react'
// import { Container,Row,Col,Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {
//     const[personajes,setPersonajes]=useState([]);
//     const[loading,setLoading]=useState(true);

//     useEffect(()=>
//     {
//       // hacer el pedido de la api
//       fetch('https://dragonball-api.com/api/characters')
//       .then(res=>res.json())
//       .then(data=>{
//           setPersonajes(data.items);
//           setLoading(false);
//       })
//       .catch(err=>{
//         console.error("Error de carga de API",err);
//         setLoading(false);
//       });
//     },[]);

//     if (loading) {
//         return <Container className='mt-4'><h1>Loading...</h1></Container>;
//     }

  

//   return (
//     //muestro las cards
//    <Container className='mt-4'>
//     <h1>Personajes DBZ</h1>
//     <Row>
//       {personajes.map(char=>(
//         <Col key={char.id} md={4}>
//           <Card className="m-2">
//           <Card.Img src={char.image}/>
//             <Card.Body>
//               <Card.Title>{char.name}</Card.Title>
//                 <Card.Text>
//                     <strong>Raza:{char.race || 'N/A'}</strong>
//                 </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//    </Container>

// );
// }

// export default App
