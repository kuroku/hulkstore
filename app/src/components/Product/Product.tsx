import "./product.scss";
import Article from "../Article/Article";
import Icon from "../Icon/Icon";
import Avatar from "../Avatar/Avatar";
import { useCallback } from "react";
import { showToast } from "../Dialog/Toast/Toast";
import { SERVICE_URL } from "../../config";

export interface ProductProps {
  product: {
    name: string;
    price: number;
    image: string;
    description: string;
    owner: any;
  };
}

export default function Product(props: ProductProps) {
  const { product } = props;

  const giveBack = useCallback(() => {}, []);

  const addShoppingCard = useCallback(() => {
    showToast(`1 ${product.name} add`, {
      text: "undo",
      onClick: giveBack,
    });
  }, [giveBack, product]);

  return (
    <Article id='product'>
      <header>
        <h6 title={product.name}>{product.name}</h6>
        <Avatar
          name={product.owner.name}
          lastname={product.owner.lastname}
          email={product.owner.email}
        />
      </header>
      <img src={`${SERVICE_URL}/${product.image}`} alt='' />
      <footer>
        <p title={product.description}>{product.description}</p>
        <h6>${product.price.toFixed(2)}</h6>
        <Icon name='add_shopping_cart' target onClick={addShoppingCard} />
      </footer>
    </Article>
  );
}
