import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItems"
import storeItems from "../data/items.json"

export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item?.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )

};




// import storeItems from '../data/items.json';
// import {Row, Col} from 'react-bootstrap';
// import { StoreItem } from '../components/StoreItems';

// export function Store() {
//     return (
//     <>
//     <h1>Store</h1>
//     <Row md={2} xs={1} lg={3} className='g-3'>
//         {storeItems.map(item => (
//             <Col key={item.id}>
//                 <StoreItem {...item}/>
//             </Col>
//         ))}
//     </Row>
//     </>
//     )
// };
// export {};