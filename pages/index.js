import { useEffect, useState, useMemo } from 'react';
import { MainLayout } from '../components/MainLayout';
import { Header } from "../components/Header";
import { ProductsList } from '../components/ProductsList';
import { SearchForm } from '../components/SearchForm';
import { Paginator } from '../components/Paginator';
import styles from '../styles/Home.module.css';
import { Loader } from '../components/Loader';



const Home = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterQuery, setFilterQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useMemo(() => {
    if (!filterQuery) {
      setFilteredProducts(products);
      return;
    };

    setFilteredProducts(products.filter(product => product.productName.toLowerCase().includes(filterQuery)));
  }, [products, filterQuery]);

 

  const PRODUCTS_PER_PAGE = 10;
  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const choosedProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const countOfPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const scrollWindowToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

  const handleClickPaginator = (_, value) => {
    setCurrentPage(value);
    scrollWindowToTop();
  };

  const handleClickForm = (event) => {
    setFilterQuery(event.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
  };



  useEffect(() => {
    const fetchProducts = async () => {
      const result = await fetch("https://raw.githubusercontent.com/traa/apiplp/master/db.json");
      result.json().then(data => setProducts(data.pageItems))
      .finally(() => setLoading(false));
    }

    fetchProducts();
  }, []);

  return (
    <>
      { loading ? <Loader /> : (
        <MainLayout className={styles.container}>
          <Header />
          <SearchForm
            filterQuery={filterQuery}
            totalProducts={filteredProducts}
            handleSubmit={handleSubmitForm}
            handleClick={handleClickForm}
          />
          <ProductsList
            choosedProducts={choosedProducts}
          />
          <Paginator
            currentPage={currentPage}
            count={countOfPages}
            choosedProducts={choosedProducts}
            handleClick={handleClickPaginator}
          />
</MainLayout>
      )
      }
      </>
      )
};

export default (Home);