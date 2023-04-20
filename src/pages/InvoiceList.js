import { useEffect, useState } from "react";
import InvoiceRow from "../components/InvoiceList/InvoiceRow";
import { deleteInvoice, fetchAllInvoices } from "../data/invoices";

const InvoiceList = () => {
    const [isLoadingInvoices, setIsLoadingInvoices] = useState(true);
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        loadInvoices();
    }, []);

    const loadInvoices = () => {
        setIsLoadingInvoices(true);

        fetchAllInvoices().then(invoices => {
            setInvoices(invoices);
            setIsLoadingInvoices(false);
        });
    };

    const onClickDelete = invoiceId => {
        if (!window.confirm('Are you sure you wish to delete this invoice?')) {
            return;
        }

        deleteInvoice(invoiceId).then(() => {
            loadInvoices();
            alert('Your invoice was deleted succesfully.');
        });
    };

    return (
        <div>
            <h1 className="mb-3">Your invoices</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Recipient</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {invoices.map(invoice =>
                        <InvoiceRow
                            key={`invoice-${invoice.id}`}
                            invoice={invoice}
                            onClickDelete={() => onClickDelete(invoice.id)}
                        />
                    )}
                </tbody>
            </table>
        </div>
    );
}
 
export default InvoiceList;