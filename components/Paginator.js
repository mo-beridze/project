import Pagination from '@material-ui/lab/Pagination';


export const Paginator = (
  { count, currentPage, choosedProducts, handleClick }
) => <>
      { choosedProducts.length ? <Pagination
        count={count}
        page={currentPage}
        onChange={handleClick}
        variant="outlined"
        color="primary" 
    /> : null}
    </>
