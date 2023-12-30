import { createSlice } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "notistack";

const initialState = {
    products: [],
    productsId: [],
}


const slice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
        },
        setProductsId(state, action) {
            state.productsId = action.payload;
        }
    }
});

export const { setProducts, setProductsId } = slice.actions;


export function addtoCard(newProduct) {
    return (dispatch, getState) => {
        const { products, productsId } = getState().cart
        if (!productsId.includes(newProduct.id)) {
            newProduct.count = 1;
            const updatedProducts = [...products, newProduct];
            const updatedIds = [...productsId, newProduct.id];
            dispatch(setProducts(updatedProducts))
            dispatch(setProductsId(updatedIds))
            enqueueSnackbar(`${newProduct.name} added to cart`, { variant: 'success' })
        }
    }
}

export function removeFromCart(productId) {
    return (dispatch, getState) => {
        const { products, productsId } = getState().cart
        const updatedProducts = products.filter(product => product.id != productId);
        const updatedProductsIds = productsId.filter(id => id != productId);
        dispatch(setProducts(updatedProducts))
        dispatch(setProductsId(updatedProductsIds))
        enqueueSnackbar(`Product removed from card to cart`, { variant: 'warning' })
    }
}


export function IncreaseCount(productId) {
    return (dispatch, getState) => {
        const products = getState().cart.products;
        const updatedProducts = [];
        products.forEach((item) => {
            if (item.id == productId) {
                updatedProducts.push({ ...item, count: item.count + 1 })
            } else {
                updatedProducts.push(item)
            }
        })

        dispatch(setProducts(updatedProducts))
    }
}


export function DecreaseCount(productId) {
    return (dispatch, getState) => {
        const products = getState().cart.products;
        const updatedProducts = [];
        products.forEach((item) => {
            if (item.id == productId && item.count > 1) {
                updatedProducts.push({ ...item, count: item.count - 1 })
            } else {
                updatedProducts.push(item)
            }
        })

        dispatch(setProducts(updatedProducts))
    }
}


export default slice.reducer;