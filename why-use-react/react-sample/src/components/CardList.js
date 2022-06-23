import CardItem from "./CardItem";
import produk1 from "../images/produk-1.jpg";
import produk2 from "../images/produk-2.jpg";
import produk3 from "../images/produk-3.jpg";
import produk4 from "../images/produk-4.jpg";
import produk5 from "../images/produk-5.jpg";
import produk6 from "../images/produk-6.jpg";
import produk7 from "../images/produk-7.jpg";
import produk8 from "../images/produk-8.jpg";

function CardList() {
  return (
    <div className="card-list">
      <CardItem href="#" title="Produk 1" price="100,000" image={produk1} />
      <CardItem href="#" title="Produk 2" price="1,000,000" image={produk2} />
      <CardItem href="#" title="Produk 3" price="150,000" image={produk3} />
      <CardItem href="#" title="Produk 4" price="5,999,999" image={produk4} />
      <CardItem href="#" title="Produk 5" price="570,000" image={produk5} />
      <CardItem href="#" title="Produk 6" price="123,000" image={produk6} />
      <CardItem href="#" title="Produk 7" price="909,000" image={produk7} />
      <CardItem href="#" title="Produk 8" price="90,000" image={produk8} />
    </div>
  );
}

export default CardList;
