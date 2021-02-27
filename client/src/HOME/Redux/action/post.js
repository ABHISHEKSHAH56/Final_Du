import { createStoreHook } from 'react-redux';
import * as api from '../api/index.js';


//
export const  getcollege =()=>async (dispatch)=>{
        try {
                const {data}=await api.fetchcollege();
                console.log(data);
                dispatch({
                        type:'FETCH_ALL',
                        payload: data
                })
                
        } catch (error) {
                console.log(error.message)
                
        }
}


export const  getone =(id)=>async (dispatch)=>{
        try {
                const {data}=await api.fetchone(id);
                console.log(data);
                dispatch({
                        type:'OVERVIEW',
                        payload: data
                })
                
        } catch (error) {
                console.log(error.message)
                
        }
}


export const  getfees =(id)=>async (dispatch)=>{
        try {
                const {data}=await api.fetchfees(id);

                console.log(`fees ${data}`);
                dispatch({
                        type:'FEES',
                        payload: data
                })
                
        } catch (error) {
                console.log(error.message)
                
        }
}


export const  getcourse =(id)=>async (dispatch)=>{
        try {
                const {data}=await api.fetchcourse(id);
                console.log(data);
                dispatch({
                        type:'COURSE',
                        payload: data
                })
                
        } catch (error) {
                console.log(error.message)
                
        }
}

export const  getcutoff =(raw)=>async (dispatch)=>{
        try {
                const {data}=await api.fetchcutoff(raw);
                console.log(raw);
                dispatch({
                        type:'CUTOFF',
                        payload: data
                })
                
        } catch (error) {
                console.log(error.message)
                
        }
}
