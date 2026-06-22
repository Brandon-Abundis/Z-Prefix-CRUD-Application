import './styling/InventoryCard.css'

export default function InventoryCard({inventory, userId}) {

  //userId === inventory.userInfo.id
  return(
    <div className={userId === inventory.userInfo.id
        ? "inventory-card owner"
        : "inventory-card"}>

      <h2>Manager: {inventory.userInfo?.username}</h2>
      <div className="inventory-card-all-items">
        { inventory.inventory?.map(item =>
          (<div className="inventory-card-item" key={item.id}>
            <h3>
              {item.item_name}
            </h3>
            {/* items should only display the first 100 characters of its description with “...” at the end */}
              <p>
                Description: {item.description.length > 100
                  ? item.description.slice(0, 100) + "..."
                  : item.description}
              </p>
              <p>
                Quantity: {item.quantity}
              </p>
          </div>) ) }
      </div>
    </div>
  );
}