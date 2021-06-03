import React, { useEffect } from 'react'
import Product from '../components/Product.js';
import MessageBox from '../components/MessageBox.js';
import LoadingBox from '../components/LoadingBox.js';
import { listProducts } from '../actions/productActions.js';
import { useDispatch, useSelector } from 'react-redux';

export default function HomeScreen() {
  /*pooh_memo 
    use redux to handle react hook 
    no need setProduct, loading, error anymore
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false); //set to false because at initial state not load anything
    const [error, setError] = useState(false);//set to false because no error at initial state (not load data yey)
  */
    const dispatch = useDispatch(); //useDispatch is redux function for calling action
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
      /*
      pooh_memo
      after add redux
      get data from Action instead

      const fetchData = async ()=>{
        try{
          setLoading(true);
          const {data} = await axios.get('/api/products');
          setLoading(false);
          setProducts(data);
        }catch(err){
          setError(err.message);
          setLoading(false);
        }
      };
      fetchData();
      */
      dispatch(listProducts());
      return () => {
        
      }
    }, [dispatch]);

    return (
        <div>
          {loading? (<LoadingBox></LoadingBox>) 
          :
          error? (<MessageBox variant="danger">{error}</MessageBox>)  
          :(
            <div className="row center">
              {products.map((product) =>(
                <Product key={product._id} product={product}></Product>
              ))
              }
            </div>
          )
          }
        </div>
    )
}
