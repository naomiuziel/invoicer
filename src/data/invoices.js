import axios from "axios";
import { handleHttpError } from "../services/http";

const BASE_URL = "http://localhost:8000";

const ENDPOINT_INVOICES = "/invoices";

export const fetchAllInvoices = () => {
    return new Promise((resolve, reject) => {
        axios.get(BASE_URL + ENDPOINT_INVOICES)
            .then(response => {
                resolve(response.data);
            }).catch(error => {
                handleHttpError(error);
                reject(error);
            });
    });
};

export const fetchInvoice = invoiceId => {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}${ENDPOINT_INVOICES}/${invoiceId}`)
            .then(response => {
                resolve(response.data);
            }).catch(error => {
                handleHttpError(error);
                reject(error);
            });
    });
};

export const putInvoice = (invoiceId, invoice) => {
    return new Promise((resolve, reject) => {
        axios.put(`${BASE_URL}${ENDPOINT_INVOICES}/${invoiceId}`, { ...invoice })
            .then(response => {
                resolve(response.data);
            }).catch(error => {
                handleHttpError(error);
                reject(error);
            });
    });
};

export const deleteInvoice = invoiceId => {
    return new Promise((resolve, reject) => {
        axios.delete(`${BASE_URL}${ENDPOINT_INVOICES}/${invoiceId}`)
            .then(response => {
                resolve(response.data);
            }).catch(error => {
                handleHttpError(error);
                reject(error);
            });
    });
};
