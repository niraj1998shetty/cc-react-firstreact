import "./grocery.css"

const Grocery = () => {

let grocery=[ {
    "item": "Dal",
    "type": "veg"
  },
  {
    "item": "Fish",
    "type": "non-veg"
  },
  {
    "item": "Meat",
    "type": "non-veg"
  },
  {
    "item": "Rice",
    "type": "veg"
  }
]
 
 
    
  return (
    <>
      <table>
        <tr>
          <th>Non-Veg</th>
          <th>Veg</th>
        </tr>
        <tr>
          <td className="nonveg">{grocery[1].item}</td>
          <td className="veg">{grocery[0].item}</td>
        </tr>
        <tr>
          <td className="nonveg">{grocery[2].item}</td>
          <td className="veg">{grocery[3].item}</td>
        </tr>
      </table> 
    </>
  );
};

export default Grocery;
