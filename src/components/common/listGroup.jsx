import React from 'react';
 
 function ListGroup(props) {
     const {items,onItemSelect,textProperty,valueProperty,selectedItem} =props;
     return (
        <ul className="list-group">
        { items.map(item => 
            <li className={item===selectedItem?"list-group-item active":"list-group-item"} 
                style={{cursor:"pointer"}}  
                key={item[valueProperty]} 
                onClick={()=>onItemSelect(item)}
            >
                {item[textProperty]}
            </li>
        )}      
        </ul>
     );
 }
 ListGroup.defaultProps={
    textProperty:"name",
    valueProperty:"_id"
 };
 
 export default ListGroup;

